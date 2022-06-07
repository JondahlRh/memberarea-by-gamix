import { Modal, Form, Input, DatePicker, Button } from "antd";

const SignoffModal = (props) => {
  const submitHandler = (item) => {
    console.log(item.start._d);
    props.onAdd(item);
  };

  return (
    <Modal
      title={props.titel}
      visible={props.showModal}
      onCancel={props.onCancel}
      footer={null}
    >
      <Form layout={"vertical"} name="theForm" onFinish={submitHandler}>
        <Form.Item label="Anfang der Abmeldung" name="start">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Ende der Abmeldung" name="end">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Beschreibung" name="desc">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default SignoffModal;
