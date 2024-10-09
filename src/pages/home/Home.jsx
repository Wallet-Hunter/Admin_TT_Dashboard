import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import ReactGA from 'react-ga4';  // Import Google Analytics

const Home = () => {

  // Function to handle widget click event and track it in Google Analytics
  const handleWidgetClick = (type) => {
    ReactGA.event({
      category: 'Widget Interaction',  // Event category
      action: `Clicked on ${type} Widget`,  // Event action
      label: `${type} Widget`  // Event label (optional)
    });
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* Track each widget click by adding onClick handlers */}
          <div onClick={() => handleWidgetClick('user')}>
            <Widget type="user" />
          </div>
          <div onClick={() => handleWidgetClick('product')}>
            <Widget type="product" />
          </div>
          <div onClick={() => handleWidgetClick('order')}>
            <Widget type="order" />
          </div>
          <div onClick={() => handleWidgetClick('earning')}>
            <Widget type="earning" />
          </div>
        </div>
        <div className="charts">
          <Featured />
          {/* Track chart view as an event */}
          <Chart title="Last 6 Months (Messages)" aspect={2 / 1} />
          {ReactGA.event({
            category: 'Chart Interaction',
            action: 'Viewed Last 6 Months Chart',
            label: 'Messages Chart'
          })}
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Users</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
