import { Button, List } from "antd";

const PrCoSignoffNew = (props) => {
  return (
    <List.Item>
      <Button type="primary" onClick={props.onAddSignoff}>
        {props.title}
      </Button>
    </List.Item>
  );
};

export default PrCoSignoffNew;
