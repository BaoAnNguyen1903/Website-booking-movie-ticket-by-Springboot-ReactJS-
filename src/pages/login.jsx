import { Button, Input, Form, Row, Col, Divider, message, notification } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { loginAPI } from "../services/api.service";

const LoginPage = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const res = await loginAPI(values.email, values.password);
    if (res.data){
      message.success("login success")
    } else {
      notification.error({
        message: "Error Login",
        description: JSON.stringify(res.message)
      })
    }
  };
  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <legend>Dang nhap</legend>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email khong duoc de trong!"
                },
                {
                  type: "email",
                  message: "Email khong dung dinh dang"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password khong duoc de trong!"
                }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Button type="primary" onClick={() => form.submit()}>
                  Login
                </Button>
                <Link to="/">
                  Go to homepage <ArrowRightOutlined />
                </Link>
              </div>
            </Form.Item>
          </Form>
          <Divider />
          <div style={{ textAlign: "center" }}>
            chua co tai khoan? <Link to={"/register"}>dang ky tai day</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default LoginPage;
