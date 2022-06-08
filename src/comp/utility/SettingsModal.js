import { Modal, Form, Input, DatePicker, Button } from "antd";
import { useState } from "react";

import CountrySelect from "./CountrySelecet";

const SettingsModal = (props) => {
  const [entUsername, setEntUsername] = useState("");

  const usernameInputHandler = (event) => {
    setEntUsername(event.target.value);
  };

  const submitHandler = () => {
    props.onNameChange(entUsername);
  };

  return (
    <Modal
      title="Daten bearbeiten"
      visible={props.showModal}
      onCancel={props.onCancel}
      footer={null}
      destroyOnClose
    >
      <Form layout={"vertical"} onFinish={submitHandler}>
        <Form.Item label="Anzeigename">
          <Input onChange={usernameInputHandler} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default SettingsModal;
