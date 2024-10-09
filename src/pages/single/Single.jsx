import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation } from "react-router";
import { useEffect,useState } from "react";

const Single = () => {

  //get the userid from the url
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/users/" + path);
        const data = await res.json();
        setUser(data);
        console.log(data);  
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [path]);


  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.firstname+ " " + user.lastname }</h1>
                <div className="detailItem">
                  <span className="itemKey">Telegram ID:</span>
                  <span className="itemValue">{user.telegramId}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{ user.phone_number  ? "+"+user.phone_number : "Not Found" }</span>
                </div>
                {/* <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Pune, Maharashtra
                  </span>
                </div> */}
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
