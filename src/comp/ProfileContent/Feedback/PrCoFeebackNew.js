import { Button, List } from "antd";

const PrCoFeedbackNew = (props) => {
  return (
    <List.Item>
      <Button type="primary" onClick={props.onAddFeedback}>
        {props.title}
      </Button>
    </List.Item>
  );
};

export default PrCoFeedbackNew;
