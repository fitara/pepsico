import { Card, Col, Row } from "antd";
import Header from "../components/Header";
import Distributor from "../components/Distributor"
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const distributors = [
    {
      id: 1,
      name: "Distributor A",
      lastMonthShipped: 1000,
      forecastedQuantity: 1200,
      ytdAverage: 950,
    },
    {
      id: 2,
      name: "Distributor B",
      lastMonthShipped: 800,
      forecastedQuantity: 900,
      ytdAverage: 940,
    },
    {
      id: 3,
      name: "Distributor C",
      lastMonthShipped: 1400,
      forecastedQuantity: 1600,
      ytdAverage: 1200,
    },
  ];

  return (
    <>
      <div className="dashboard-container">
        <Header title="Dashboard" />
        <div className="dashboard-content">
          <Sidebar />
          <div className="main-content">
            <Row gutter={[16, 16]}>
              {distributors.map((distributor) => (
                <Col key={distributor.id} xs={24} sm={12} md={8} lg={6}>
                  <div className="card">
                    <Card title={distributor.name}>
                      <Distributor distributor={distributor} />
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
