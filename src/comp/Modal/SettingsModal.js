import { useState } from "react";
import { Button, Form, Input } from "antd";

const SettingsModal = (props) => {
  const [entUsername, setEntUsername] = useState();

  const usernameChangeHandler = (event) => {
    setEntUsername(event.target.value);
  };

  const submitHandler = () => {
    props.onEditData({ name: entUsername });
  };

  return (
    <Form layout="vertical" onFinish={submitHandler}>
      <Form.Item label="Anzeigenamen ändern">
        <Input onChange={usernameChangeHandler} />
      </Form.Item>
      <Button htmlType="submit">Absenden</Button>
    </Form>
  );
};

export default SettingsModal;
