import { Divider, List } from "antd";
import { useState } from "react";
import ListSignoff from "./Signoff/ListSignoff";
import NewSignoff from "./Signoff/NewSignoff";

const DUMMY_ARRAY = [
  { id: "a1", start: "18.März.2022", end: "25.Juni.2022" },
  { id: "a2", start: "20.März.2022", end: "30.Juni.2022" },
];

const ProfileAbmeldung = () => {
  const [signoffList, setSignoffList] = useState(DUMMY_ARRAY);

  const AddSignoffHandler = () => {
    setSignoffList([
      ...signoffList,
      { id: Math.random(), start: "test", end: "test2" },
    ]);
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

  return (
    <div>
      <Divider orientation="left" style={{ borderColor: "#949494" }}>
        Abmeldung
      </Divider>
      <List size="large" bordered={false}>
        <ListSignoff onRemove={RemoveSignoffHandler} list={signoffList} />
        <NewSignoff onAdd={AddSignoffHandler} list={signoffList} />
      </List>
    </div>
  );
};

export default ProfileAbmeldung;
