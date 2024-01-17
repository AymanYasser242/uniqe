import { Button, Col, Descriptions, Divider, Flex, Rate, Row } from "antd";
import ProductsImages from "./products-images";
import Title from "antd/es/typography/Title";
import ProductTags from "./product-tags";
import Paragraph from "antd/es/typography/Paragraph";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductSection from "./products-section";

const ProductView = () => {
  return (
    <section className="product-view py-6 ">
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 10 }} className="px-4 lg:px-8">
          <ProductsImages />
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 14 }}
          className="flex flex-col gap-y-1 items-start justify-start px-4"
        >
          <Title level={2} className="font-[Almarai]">
            Retro Rocket Lamp
          </Title>
          <Rate allowHalf defaultValue={4.5} />
          <p className="text-xl py-4 font-[700] m-0">
            $100.00
            <span className="px-2 text-base font-[500] line-through text-gray-400">
              $150.00
            </span>
          </p>
          <ProductTags />
          <Title level={4} className="font-[Almarai]">
            Description :
          </Title>
          <Paragraph
            className="text-gray-500 max-w-[85%]"
            ellipsis={{ rows: 2, symbol: "more", expandable: true }}
          >
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
            Consequuntur Deleniti Placeat Esse Labore Fuga Ducimus Suscipit Nisi
            Optio Rem. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
            Consequuntur Deleniti Placeat Esse Labore Fuga Ducimus Suscipit Nisi
            Optio Rem.Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
            Consequuntur Deleniti Placeat Esse Labore Fuga Ducimus Suscipit Nisi
            Optio Rem.Lorem Ipsum
          </Paragraph>
          <Descriptions
            title={
              <Title level={5} className="font-[Almarai]">
                Shipping Information:
              </Title>
            }
            column={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
          >
            <Descriptions.Item label="Delivery Time">24h</Descriptions.Item>
            <Descriptions.Item label="Discount">-10%</Descriptions.Item>
            <Descriptions.Item label="phone & whatsapp">
              +201080875089
            </Descriptions.Item>
            <Descriptions.Item label="Payment Method">
              vodafone
            </Descriptions.Item>
          </Descriptions>
          <Flex vertical gap={15} className="w-full ">
            <Button
              shape="round"
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              href={`https://api.whatsapp.com/send/?phone=201080875089&text=${"retro rocket lamp"}`}
              target="_blank"
              className="w-[250px] mt-4"
            >
              Buy Now
            </Button>
          </Flex>
        </Col>
      </Row>
      <Divider className="mt-12" />
      <Row>
        <Descriptions
          title={
            <Title level={5} className="font-[Almarai]">
              Product Information:
            </Title>
          }
          column={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
          className="bg-neutral-50 px-8 py-12 my-10 w-full"
          bordered
        >
          <Descriptions.Item label="Brand">Uniqe</Descriptions.Item>
          <Descriptions.Item label="Dimensions">
            W: {`"15"`}, H: {`"50"`},
          </Descriptions.Item>
          <Descriptions.Item label="Color">Espresso</Descriptions.Item>
          <Descriptions.Item label="Region">Made In Egypt</Descriptions.Item>
          <Descriptions.Item label="Delivery Time">24h</Descriptions.Item>
          <Descriptions.Item label="Discount">-10%</Descriptions.Item>
          <Descriptions.Item label="Telephone">+201080875089</Descriptions.Item>
          <Descriptions.Item label="Payment Method">
            vodafone cash
          </Descriptions.Item>
        </Descriptions>
      </Row>
      <Divider className="mt-12" />
      <Row>
        <Col span={24}>
          <ProductSection />
        </Col>
      </Row>
    </section>
  );
};
export default ProductView;
