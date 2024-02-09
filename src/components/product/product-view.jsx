import { Button, Col, Descriptions, Divider, Flex, Rate, Row } from "antd";
import ProductsImages from "./products-images";
import Title from "antd/es/typography/Title";
import ProductTags from "./product-tags";
import Paragraph from "antd/es/typography/Paragraph";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductSection from "./products-section";
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useParams } from "react-router-dom";


const ProductView = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const { getProduct } = useProducts();

  useEffect(() => {
    const getData = async () => {
      const data = await getProduct(params);
      setProduct(data);
    }
    getData();
  }, [params])

  if (!product) {
    return;
  }

  return (
    <section className="product-view py-6 min-h-[80vh]">
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 10 }} className="px-4 lg:px-8">
          <ProductsImages images={product.images} slug={product.slug} />
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 14 }}
          className="flex flex-col gap-y-1 items-start justify-start px-4"
        >
          <Title level={2} className="font-[Almarai]">
            {product.title}
          </Title>
          <Rate
            allowHalf
            disabled
            defaultValue={product.rating}
            count={5}
          />

          <p className="price-eg text-xl pt-4 pb-1 font-[700] m-0">
            {`${product.price.eg.discounted}${product.price.eg.currency}`}
            <span className="px-2 text-base font-[500] line-through text-gray-400">
              {`${product.price.eg.original}${product.price.eg.currency}`}
            </span>
          </p>
          <p className="price-usd text-xl pb-4 pt-1 font-[700] m-0">
            {`${product.price.usd.discounted}${product.price.usd.currency}`}
            <span className="px-1 text-base font-[500] line-through text-gray-400">
              {`${product.price.usd.original}${product.price.usd.currency}`}
            </span>
          </p>
          <ProductTags details={product.details} />
          <Title level={4} className="font-[Almarai]">
            Description :
          </Title>
          <Paragraph
            className="text-gray-500 max-w-[85%]"
            ellipsis={{ rows: 2, symbol: <span className="text-primary">More</span>, expandable: true }}
          >
            {product.description}
          </Paragraph>
          <Descriptions
            title={
              <Title level={5} className="font-[Almarai]">
                Shipping Information:
              </Title>
            }
            column={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
          >
            <Descriptions.Item label="Delivery Time">
              5d
            </Descriptions.Item>
            <Descriptions.Item label="Discount">
              -10%
            </Descriptions.Item>
            <Descriptions.Item label="phone & whatsapp">
              +201080875089
            </Descriptions.Item>
            <Descriptions.Item label="Payment Methods">
              {["credit", "cash"].join(", ")}
            </Descriptions.Item>
          </Descriptions>
          <Flex vertical gap={15} className="w-full ">
            <Button
              shape="round"
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              href={`https://api.whatsapp.com/send/?phone=201080875089&text=${product.title}`}
              target="_blank"
              rel="noreferrer"
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
          <Descriptions.Item label="Brand">
            {product.details.brand}
          </Descriptions.Item>
          <Descriptions.Item label="Dimensions">
            H: {`${product.details.dimensions.height}`}, W:{" "}
            {`${product.details.dimensions.width}`}, D:{" "}
            {`${product.details.dimensions.depth}`}
            <small className="text-gray-500 text-sm px-1">cm</small>
          </Descriptions.Item>
          <Descriptions.Item label="Color">
            {product.details.color}
          </Descriptions.Item>
          <Descriptions.Item label="Region">
            {product.details.region}
          </Descriptions.Item>
          <Descriptions.Item label="Delivery Time">
            5d
          </Descriptions.Item>
          <Descriptions.Item label="Discount">
            -10%
          </Descriptions.Item>
          <Descriptions.Item label="phone & whatsapp">
            +201080875089
          </Descriptions.Item>
          <Descriptions.Item label="Payment Methods">
            {["credit", "cash"].join(", ")}
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
