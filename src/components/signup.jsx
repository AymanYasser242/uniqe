import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Image, Input, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [form] = Form.useForm();
  const { signup } = useSignup();

  const onFinish = (values) => {
    signup(values);
  };

  return (
    <section className="signup">
      <Row className="justify-between  overflow-hidden ">
        <Col xs={24} md={10} className="lg:px-16 px-6 py-8 my-auto">
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
            Please create your account and explore the unique and distinctive
            world of furniture we offer
          </Paragraph>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="mt-6"
          >
            <Form.Item
              name="userName"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
              ]}
            >
              <Input size="large" prefix={<UsergroupAddOutlined />} />
            </Form.Item>

            <Form.Item
              name="userNumber"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number!",
                },
              ]}
            >
              <Input size="large" prefix={<PhoneOutlined rotate={90} />} />
            </Form.Item>
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
              <Input size="large" prefix={<MailOutlined />} />
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
              <Input.Password size="large" prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password size="large" prefix={<LockOutlined />} />
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
                Signup
              </Button>
            </Form.Item>
            <Paragraph className="text-base font-[600] mt-8 px-2">
              Already have an account? <Link to="/login">Login</Link>
            </Paragraph>
          </Form>
        </Col>
        <Col xs={0} md={12} className="hidden md:flex justify-end h-auto">
          <Image
            preview={false}
            src={`https://source.unsplash.com/random/${screen.width * 0.5}x${
              screen.height
            }/?furniture`}
            // src={`/product-${Math.floor(Math.random() * 4) + 1}.jpg`}
            height={"100%"}
          />
        </Col>
      </Row>
    </section>
  );
};

export default Signup;
