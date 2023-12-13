import { Statistic } from "antd";
import PropTypes from "prop-types";

const Distributor = ({distributor}) => {
  return (
    <div className="distributor-metrics">
      <Statistic title="Last Month's Shipped Quantity" value={distributor.lastMonthShipped} />
      <Statistic title="Forecasted Quantity for This Month" value={distributor.forecastedQuantity} />
      <Statistic title="Year-to-Date Average Shipped Quantity" value={distributor.ytdAverage} />
    </div>
  );
};

Distributor.propTypes = {
  distributor: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Distributor;
