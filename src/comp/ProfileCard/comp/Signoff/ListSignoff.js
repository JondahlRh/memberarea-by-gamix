import { List } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ListSignoff = () => {
  return (
    <List size="large" bordered={false}>
      <List.Item actions={[<EditOutlined />, <DeleteOutlined />]}>
        <div>18.März.2022 bis 25.Juni.2022</div>
      </List.Item>
    </List>
  );
};

export default ListSignoff;
