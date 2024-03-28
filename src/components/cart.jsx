import {
  Avatar,
  Button,
  Col,
  Descriptions,
  Divider,
  Image,
  Input,
  Popconfirm,
  Row,
  Space,
  Table,
  message,
} from "antd";
import Title from "antd/es/typography/Title";
import QuantitySelector from "./product/quantity-selector";
import { DeleteFilled } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import ProductSection from "./product/products-section";
import MainBreadcrumb from "./utility/breadcrumb";
import { Fragment } from "react";

const confirm = (e) => {
  console.log(e);
  message.success("Deleted successfully");
};

const columns = [
  {
    title: "IMAGE",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <Image width={80} src={`/product-${image}.jpg`} className="rounded-md" />
    ),
  },
  {
    title: "PRODUCT",
    dataIndex: "title",
    key: "title",
    render: (title) => <h4>{title}</h4>,
  },
  {
    title: "PRICE",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
    key: "quantity",
    render: () => <QuantitySelector />,
  },
  {
    title: "TOTAL",
    dataIndex: "total",
    key: "total",
  },

  {
    title: "OPTIONS",
    key: "option",
    render: () => (
      <Fragment>
        <Popconfirm
          title="Delete the product"
          description="Are you sure to remove this item from the cart?"
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ danger: true }}
          cancelButtonProps={{ type: "primary" }}
          placement="topRight"
        >
          <Button danger icon={<DeleteFilled />} />
        </Popconfirm>
      </Fragment>
    ),
  },
];
const data = [
  {
    key: 1,
    image: 1,
    title: "Luxe Radiance Lamp",
    price: "$32.00",
    total: "$96.00",
  },
  {
    key: 2,
    image: 2,
    title: "Retro Rocket",
    price: "$42.00",
    total: "$42.00",
  },
  {
    key: 3,
    image: 3,
    title: "Zenith Illumination Fixture",
    price: "$32.00",
    total: "$64.00",
  },
  {
    key: 4,
    image: 4,
    title: "Luminous Elegance Light",
    price: "$28.00",
    total: "$56.00",
  },
];

const Cart = () => {
  return (
    <section className="cart max-w-full">
      <Row className="px-4">
        <Col xs={24} md={16} lg={18} xl={19} className="overflow-x-auto">
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>

        <Col xs={24} md={8} lg={6} xl={5} className="summary px-6">
          <Title level={5} className="mt-2">
            Enter Coupon:
          </Title>
          <Space.Compact
            style={{
              width: "100%",
            }}
          >
            <Input
              placeholder="Enter Promocode"
              maxLength={30}
              defaultValue="DISCOUNT10"
              pattern="/^[A-Z0-9]*$/" // Adjust as needed
              prefix={
                <Avatar
                  icon={
                    <Icon icon="bxs:offer" className="text-primary text-xl" />
                  }
                  className="flex justify-center items-center rounded-full bg-primary bg-opacity-15"
                />
              }
              className="rounded-full px-1 [&>input]:ml-1  [&>input]:uppercase [&>input]:font-[600]"
            />
            <Button type="primary" className="h-auto rounded-full">
              Submit
            </Button>
          </Space.Compact>

          <Descriptions
            title="Summary"
            column={1}
            className="py-5"
            layout="horizontal"
            size="small"
            labelStyle={{
              fontWeight: 600,
            }}
          >
            <Descriptions.Item label="Items">
              <span className="inline-flex justify-end w-full">04</span>
            </Descriptions.Item>
            <Descriptions.Item label="Shipping">
              <span className="inline-flex justify-end w-full">$10</span>
            </Descriptions.Item>
            <Descriptions.Item label="total before">
              <span className="inline-flex justify-end w-full">$268</span>
            </Descriptions.Item>
            <Descriptions.Item label="Promocode">
              <span className="inline-flex justify-end w-full">-10%</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span className="text-lg text-black font-[700]">Total</span>
              }
            >
              <span className="inline-flex justify-end w-full text-lg text-black font-[700]">
                $241.20
              </span>
            </Descriptions.Item>
          </Descriptions>
          <Button
            type="primary"
            shape="round"
            size="large"
            className="w-full flex justify-center items-center"
            icon={<Icon icon="material-symbols:payments" width={20} />}
          >
            Checkout
          </Button>
          <Divider />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <ProductSection />
        </Col>
      </Row>
    </section>
  );
};
export default Cart;
