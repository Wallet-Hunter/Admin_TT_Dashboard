import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "User 1",
      date: "Bio",
      amount: "user123",
      method: "False",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "User 2",
      date: "Bio",
      amount: "user12",
      method: "False",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "User 3",
      date: "Bio",
      amount: "user1",
      method: "True",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "User",
      date: "Bio",
      amount: "User56",
      method: "False",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "User5",
      date: "Bio",
      amount: "user77",
      method: "True",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Profile Pic</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Bio</TableCell>
            <TableCell className="tableCell">Username</TableCell>
            <TableCell className="tableCell">Bot Status</TableCell>
            <TableCell className="tableCell"> Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
