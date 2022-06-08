import { Fragment, useState } from "react";

import { Divider, List, Modal } from "antd";

import PrCoSignoffItems from "./PrCoSignoffItems";
import PrCoSignoffNew from "./PrCoSignoffNew";
import SignoffModal from "../../Modal/SignoffModal";

// const DUMMY_ARRAY = [
//   { key: "a1", start: "18.März.2022", end: "25.Juni.2022", desc: "DUMMY 1" },
//   { key: "a2", start: "18.März.2022", end: "25.Juni.2022", desc: "DUMMY 2" },
// ];

const PrCoSignoff = () => {
  const [signoffList, setSignoffList] = useState([]);
  const [signoffModal, setSignoffModal] = useState(false);

  const showSignoffModal = () => {
    setSignoffModal(true);
  };
  const hideSignoffModal = () => {
    setSignoffModal(false);
  };

  const newSignoffTitle =
    signoffList.length === 0
      ? "Neue Abmeldung hinzufüggen"
      : "Weitere Abmeldung hinzufügen";

  const addSignoffHandler = (item) => {
    setSignoffModal(false);
    setSignoffList((prevList) => [...prevList, item]);
  };

  const removeSignoffHandler = (deleteKey) => {
    const updatedSignoffList = signoffList.filter(
      (item) => item.key !== deleteKey
    );
    setSignoffList(updatedSignoffList);
  };

  return (
    <Fragment>
      <Divider orientation="left" style={{ borderColor: "#949494" }}>
        Abmeldung
      </Divider>
      <List>
        <PrCoSignoffItems
          onRemoveSignoff={removeSignoffHandler}
          content={signoffList}
        />
        <PrCoSignoffNew
          onAddSignoff={showSignoffModal}
          title={newSignoffTitle}
        />
      </List>
      <Modal
        title={newSignoffTitle}
        visible={signoffModal}
        onCancel={hideSignoffModal}
        footer={null}
        destroyOnClose
      >
        <SignoffModal onNewSignoff={addSignoffHandler} />
      </Modal>
    </Fragment>
  );
};

export default PrCoSignoff;
