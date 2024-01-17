import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";

const ExploreCard = ({ title, description, icon }) => {
  return (
    <Card
      hoverable
      style={{ width: "350px", maxWidth: "95%", backgroundColor: "#F6F5F6" }}
    >
      <Avatar shape="square" size="large" icon={icon} className="bg-primary bg-opacity-50  mb-4 flex justify-center items-center" />
      <Meta title={title} description={description} />
    </Card>
  );
};
export default ExploreCard;
