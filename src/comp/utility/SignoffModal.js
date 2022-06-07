import { Modal, Form, Input, DatePicker } from "antd";

const SignoffModal = (props) => {
  return (
    <Modal
      title={props.titel}
      visible={props.showModal}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
      <Form layout={"vertical"}>
        <Form.Item label="Anfang der Abmeldung">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Ende der Abmeldung">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Beschreibung">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignoffModal;
