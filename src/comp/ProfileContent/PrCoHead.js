import profilepicture from "../../assets/steam-profile-picture.jpg";

import { useContext } from "react";
import UserDataContext from "../../store/user-data-context";

import { Avatar, Card } from "antd";
const { Meta } = Card;

const PrCoHead = () => {
  const userDataCtx = useContext(UserDataContext);

  return (
    <Meta
      avatar={<Avatar size="large" src={profilepicture} />}
      title={userDataCtx.name}
      description={"Willkommen in der MemberArea!"}
    />
  );
};

export default PrCoHead;
