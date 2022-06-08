import { List } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Fragment } from "react";

const ListSignoff = (props) => {
  return (
    <Fragment>
      {props.list.map((item) => (
        <List.Item
          actions={[
            <EditOutlined />,
            <DeleteOutlined
              onClick={() => {
                props.onRemove(item);
              }}
            />,
          ]}
          key={item.id}
        >
          {item.start} bis {item.end}
        </List.Item>
      ))}
    </Fragment>
  );
};

export default ListSignoff;
