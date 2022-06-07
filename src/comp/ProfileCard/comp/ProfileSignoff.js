import { Divider, List } from "antd";
import { useState } from "react";
import ListSignoff from "./Signoff/ListSignoff";
import NewSignoff from "./Signoff/NewSignoff";
import SignoffModal from "../../utility/SignoffModal";

const DUMMY_ARRAY = [
  { id: "a1", start: "18.März.2022", end: "25.Juni.2022" },
  { id: "a2", start: "20.März.2022", end: "30.Juni.2022" },
];

const ProfileAbmeldung = () => {
  const [signoffList, setSignoffList] = useState(DUMMY_ARRAY);
  const [modal, setModal] = useState(false);

  const AddSignoffHandler = () => {
    setModal(true);
  };

  const RemoveSignoffHandler = (item) => {
    const oldList = [...signoffList];
    for (let i = 0; i < oldList.length; i++) {
      if (oldList[i].id === item.id) {
        oldList.splice(i, 1);
        setSignoffList(oldList);
        return;
      }
    }
  };

  const cancelHandler = () => {
    setModal(false);
  };

  const text =
    signoffList.length === 0 ? "Neue Abmeldung" : "Abmeldung hinzufügen";

  return (
    <div>
      <Divider orientation="left" style={{ borderColor: "#949494" }}>
        Abmeldung
      </Divider>
      <List size="large" bordered={false}>
        <ListSignoff onRemove={RemoveSignoffHandler} list={signoffList} />
        <NewSignoff onAdd={AddSignoffHandler} list={signoffList} text={text} />
      </List>
      <SignoffModal
        showModal={modal}
        titel={text}
        onCancel={cancelHandler}
        onOk={cancelHandler}
      />
    </div>
  );
};

export default ProfileAbmeldung;
