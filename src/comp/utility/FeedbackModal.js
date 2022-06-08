import { Modal, Form, Input, Button, InputNumber } from "antd";
import { useState } from "react";
import NameSelect from "./NameSelect";

const FeedbackModal = (props) => {
  const [entName, setEntName] = useState("");
  const [entStars, setEntStars] = useState(5);
  const [entDesc, setEntDesc] = useState("");

  const nameChangeHandler = (event) => {
    setEntName(event);
  };
  const starsChangeHandler = (event) => {
    setEntStars(event);
  };
  const descChangeHandler = (event) => {
    setEntDesc(event.target.value);
  };

  const submitHandler = () => {
    props.onAdd({ name: entName, stars: entStars, desc: entDesc });
  };

  return (
    <Modal
      title={props.titel}
      visible={props.showModal}
      onCancel={props.onCancel}
      footer={null}
      destroyOnClose
    >
      <Form layout={"vertical"} name="theForm" onFinish={submitHandler}>
        <Form.Item label="Beschwerde an:">
          <NameSelect onChange={nameChangeHandler} />
        </Form.Item>
        <Form.Item label="Anzahl Sterne">
          <InputNumber
            max={5}
            min={0}
            value={entStars}
            onChange={starsChangeHandler}
          />
        </Form.Item>
        <Form.Item label="Beschreibung">
          <Input onChange={descChangeHandler} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default FeedbackModal;
