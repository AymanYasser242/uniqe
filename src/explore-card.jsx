import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";

const ExploreCard = ({ title, description, icon }) => {
  return (
    <Card
      hoverable
      style={{ width: "350px", maxWidth: "95%", backgroundColor: "#F3F4F6" }}
    >
      <Avatar
        shape="square"
        size="large"
        style={{ padding: "0.3rem", marginBottom: "1rem" }}
        icon={icon}
      />
      <Meta
        title={title}
        description={description}
      />
    </Card>
  );
};
export default ExploreCard;
