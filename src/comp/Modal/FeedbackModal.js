import { useState } from "react";
import { Button, Form, Input, InputNumber } from "antd";

const FeedbackModal = (props) => {
  const [entName, setEntName] = useState();
  const [entStars, setEntStars] = useState();
  const [entDesc, setEntDesc] = useState();

  const nameChangeHandler = (event) => {
    setEntName(event.target.value);
  };
  const starsChangeHandler = (event) => {
    setEntStars(event);
  };
  const descChangeHandler = (event) => {
    setEntDesc(event.target.value);
  };

  const submitHandler = () => {
    props.onNewFeedback({
      key: Date.now() + Math.round(Math.random() * 1000) / 1000,
      name: entName,
      stars: entStars,
      desc: entDesc,
    });
  };

  return (
    <Form layout="vertical" onFinish={submitHandler}>
      <Form.Item label="Mitspieler">
        <Input onChange={nameChangeHandler} />
      </Form.Item>
      <Form.Item label="Sterne">
        <InputNumber onChange={starsChangeHandler} />
      </Form.Item>
      <Form.Item label="Bewertung">
        <Input.TextArea onChange={descChangeHandler} />
      </Form.Item>
      <Button htmlType="submit">Absenden</Button>
    </Form>
  );
};

export default FeedbackModal;
