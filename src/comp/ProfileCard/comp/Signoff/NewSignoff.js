import { List, Button } from "antd";

const NewSignoff = (props) => {
  return (
    <List.Item>
      <Button type="primary" onClick={props.onAdd}>
        {props.text}
      </Button>
    </List.Item>
  );
};

export default NewSignoff;
