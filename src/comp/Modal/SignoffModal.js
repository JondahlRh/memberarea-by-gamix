import { useState } from "react";
import { Button, DatePicker, Form, Input } from "antd";

const SignoffModal = (props) => {
  const [entDateStart, setEntDateStart] = useState();
  const [entDateEnd, setEntDateEnd] = useState();
  const [entDesc, setEntDesc] = useState();

  const dateStartChangeHandler = (event) => {
    setEntDateStart(event._d);
  };
  const dateEndChangeHandler = (event) => {
    setEntDateEnd(event._d);
  };
  const descChangeHandler = (event) => {
    setEntDesc(event.target.value);
  };

  const submitHandler = () => {
    const startDateFormated = new Date(entDateStart).toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const endDateFormated = new Date(entDateEnd).toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    props.onNewSignoff({
      key: Date.now() + Math.round(Math.random() * 1000) / 1000,
      start: startDateFormated,
      end: endDateFormated,
      desc: entDesc,
    });
  };

  return (
    <Form layout="vertical" onFinish={submitHandler}>
      <Form.Item label="Anfang der Abmeldung">
        <DatePicker onChange={dateStartChangeHandler} />
      </Form.Item>
      <Form.Item label="Ende der Abmeldung">
        <DatePicker onChange={dateEndChangeHandler} />
      </Form.Item>
      <Form.Item label="Beschreibung">
        <Input.TextArea onChange={descChangeHandler} />
      </Form.Item>
      <Button htmlType="submit">Absenden</Button>
    </Form>
  );
};

export default SignoffModal;
