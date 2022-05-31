import { Modal, Form, Input, DatePicker } from "antd";

import CountrySelect from "./CountrySelecet";

const SettingsModal = (props) => {
  return (
    <Modal
      title="Daten bearbeiten"
      visible={props.showModal}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
      <Form layout={"vertical"}>
        <Form.Item label="Anzeigename">
          <Input />
        </Form.Item>
        <Form.Item label="Geburtsdatum">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Bundesland">
          <CountrySelect />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SettingsModal;
