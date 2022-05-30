import { Modal, Form, Input, DatePicker, Select } from "antd";

const { Option } = Select;

const SettingsModal = (props) => {
  return (
    <Modal
      title="Daten bearbeiten"
      visible={props.showModal}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
      <Form layout={"vertical"}>
        <Form.Item label="Benutzername">
          <Input />
        </Form.Item>
        <Form.Item label="Geburtsdatum">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Bundesland">
          <Input />
        </Form.Item>
        <Form.Item label="Benutzername">
          <Select>
            <Option>NRW</Option>
            <Option>BW</Option>
            <Option>BY</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SettingsModal;
