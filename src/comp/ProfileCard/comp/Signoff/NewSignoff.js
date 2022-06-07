import { List, Button } from "antd";

const NewSignoff = (props) => {
  return (
    <List.Item>
      <Button type="primary" onClick={props.onAdd}>
        {props.list.length === 0 ? "Neue Abmeldung" : "Abmeldung hinzufügen"}
      </Button>
    </List.Item>
  );
};

export default NewSignoff;
