import { Card } from "antd";

import CardTitle from "./ProfileCard/CardTitle";
import CardExtra from "./ProfileCard/CardExtra";

import PrCoHead from "./ProfileContent/PrCoHead";
import PrCoSignoff from "./ProfileContent/Signoff/PrCoSignoff";
import PrCoFeedback from "./ProfileContent/Feedback/PrCoFeedback";
import UserDataProvider from "../store/UserDataProvider";

const Profile = () => {
  return (
    <UserDataProvider>
      <Card title={<CardTitle />} extra={<CardExtra />} bordered={false}>
        <PrCoHead />
        <PrCoSignoff />
        <PrCoFeedback />
      </Card>
    </UserDataProvider>
  );
};

export default Profile;
