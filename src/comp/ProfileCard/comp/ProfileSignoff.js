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

  const NewSignoffHandler = () => {
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

  const onAddHandler = (newSignoff) => {
    console.log(newSignoff);
    setModal(false);
    const dateStart = new Date(newSignoff.start._d).toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const dateEnd = new Date(newSignoff.end._d).toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setSignoffList((prevList) => {
      return [
        ...prevList,
        {
          id: Math.random(),
          start: dateStart.toLocaleString("en-US", { month: "long" }),
          end: dateEnd.toLocaleString("en-US", { month: "long" }),
        },
      ];
    });
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
        <NewSignoff onAdd={NewSignoffHandler} list={signoffList} text={text} />
      </List>
      <SignoffModal
        showModal={modal}
        titel={text}
        onCancel={cancelHandler}
        onAdd={onAddHandler}
      />
    </div>
  );
};

export default ProfileAbmeldung;
