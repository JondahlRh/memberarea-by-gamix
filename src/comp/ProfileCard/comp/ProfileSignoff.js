import { Divider } from "antd";
import ListSignoff from "./Signoff/ListSignoff";
import NewSignoff from "./Signoff/NewSignoff";

const ProfileAbmeldung = () => {
  return (
    <div>
      <Divider orientation="left" style={{ borderColor: "#949494" }}>
        Abmeldung
      </Divider>
      <NewSignoff />
      <ListSignoff />
    </div>
  );
};

export default ProfileAbmeldung;
