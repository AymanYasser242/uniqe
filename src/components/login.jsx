import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import { useLogin } from "./../hooks/useLogin";

const Login = () => {

  const [form] = Form.useForm();
  const { login } = useLogin();

  const onFinish = (values) => {
    login(values);
  };

  return (
    <section className="login">
      <Row className="justify-between overflow-hidden md:min-h-[calc(100vh-5rem)]">
        <Col xs={24} md={10} className="lg:px-16 px-6 py-6 my-auto">
          <Title
            level={2}
            style={{
              fontWeight: 800,
              fontFamily: "Almarai",
            }}
          >
            Welcome to Uniqe!
          </Title>
          <Paragraph className="text-base max-w-[40rem] text-gray-500">
            Please log in to access your account and explore the unique and
            distinctive world of furniture we offer
          </Paragraph>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="mt-6"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input size="large" prefix={<MailOutlined />} allowClear />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
                {
                  min: 8,
                  message: "Password must be at least 8 characters long!",
                },
              ]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined />}
                allowClear
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 24,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="w-full rounded-lg text-lg py-5 flex items-center justify-center mt-2"
              >
                Login
              </Button>
            </Form.Item>
            <Paragraph className="text-base font-[600] mt-8 px-2">
              Don&apos;t have an account? <Link to="/signup">Signup</Link>
            </Paragraph>
          </Form>
        </Col>
        <Col xs={0} md={12} className="hidden md:flex justify-end max-h-full">
          <Image
            preview={false}
            src={`https://source.unsplash.com/random/${screen.width * 0.5}x${screen.height - 200
              }/?furniture`}
            //src={`/product-${Math.floor(Math.random() * 4) + 1}.jpg`}
            height={"100%"}
          />
        </Col>
      </Row>
    </section>
  );
};

export default Login;
