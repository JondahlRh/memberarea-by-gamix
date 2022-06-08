import { Fragment, useContext, useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import SettingsModal from "../Modal/SettingsModal";
import UserDataContext from "../../store/user-data-context";

const CardExtra = () => {
  const [settingsModal, setSettingsModal] = useState(false);
  const userDataCtx = useContext(UserDataContext);

  const showSettingsModal = () => {
    setSettingsModal(true);
  };
  const hideSettingsModal = () => {
    setSettingsModal(false);
  };

  const editDataHandler = (item) => {
    setSettingsModal(false);
    userDataCtx.edit(item);
  };

  return (
    <Fragment>
      <SettingOutlined onClick={showSettingsModal} />
      <Modal
        title={"Daten bearbeiten"}
        visible={settingsModal}
        onCancel={hideSettingsModal}
        footer={null}
        destroyOnClose
      >
        <SettingsModal onEditData={editDataHandler} />
      </Modal>
    </Fragment>
  );
};

export default CardExtra;
