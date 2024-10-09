import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource"; // Removed userRows
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  // Fetch data from the server and update state
  const dataUpdate = (data) => {
    // Map the data to use `telegramId` as the `id`
    const updatedData = data.map((item) => ({
      ...item,
      id: item.telegramId,  // Set telegramId as the unique id
    }));
    setData(updatedData);
  };

  useEffect(() => {
    // Fetch data from the server
    fetch("http://127.0.0.1:8000/userInfo/getall")
      .then((res) => res.json())
      .then((data) => dataUpdate(data))
      .catch((err) => console.log(err));

    // Firebase realtime listener (if needed)
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        console.log(list); // Optionally, you can merge Firebase data
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      // Remove the deleted row from the data
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
