import { React, useState } from "react";
import { useDispatch } from "react-redux";

import { Col, Button, Form, Input } from "antd";

export const AddFormComponent = ({ addData, isForm }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    id: Date.now().toString(),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeForm = (e) => {
    setData({ ...data, ...{ [e.target.name]: e.target.value } })
  };

  const getAddDataHandler = (data) => {
    dispatch(addData(data))
  };


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <Col span={20} className="detail-person">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={() => {getAddDataHandler(data)} }
      >
        <Form.Item
          name={["user", "firstName"]}
          label="First name"
          rules={[{ required: true }]}
        >
          <Input name="firstName" onChange={changeForm} />
        </Form.Item>
        <Form.Item
          name={["user", "lastName"]}
          label="Last name"
          rules={[{ required: true }]}
        >
          <Input name="lastName" onChange={changeForm} />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ required: true }]}
        >
          <Input name="email" onChange={changeForm} />
        </Form.Item>

        <Form.Item
          name={["user", "phone"]}
          label="Phone"
          rules={[{ required: true }]}
        >
          <Input name="phone" onChange={changeForm} />
        </Form.Item>

        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          shouldUpdate
        >
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !(
                data.firstName.trim() &&
                data.lastName.trim() &&
                data.email.trim() &&
                data.phone.trim()
              )
            }
          >
            submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
