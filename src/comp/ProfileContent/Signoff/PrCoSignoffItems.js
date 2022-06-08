import { List } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Fragment } from "react";

const PrCoSignoffItems = (props) => {
  const editClickHandler = () => {};

  return (
    <Fragment>
      {props.content.map((data) => (
        <List.Item
          key={data.key}
          actions={[
            <EditOutlined onClick={editClickHandler} />,
            <DeleteOutlined onClick={() => props.onRemoveSignoff(data.key)} />,
          ]}
        >
          {data.start} bis {data.end}
        </List.Item>
      ))}
    </Fragment>
  );
};
export default PrCoSignoffItems;
