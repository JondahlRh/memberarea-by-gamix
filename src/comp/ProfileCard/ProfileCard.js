import { useState } from "react";

import { Row, Col, Card } from "antd";
import { SettingOutlined, ExperimentOutlined } from "@ant-design/icons";

import SettingsModal from "../utility/SettingsModal";
import ProfileHead from "./comp/ProfileHead";
import ProfileSignoff from "./comp/ProfileSignoff";
import ProfileFeedback from "./comp/ProfileFeedback";

const ProfileCard = () => {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("-");

  const settingsClickHandler = () => {
    setModal(true);
  };

  const cancelHandler = () => {
    setModal(false);
  };

  const changeNameHandler = (newName) => {
    setModal(false);
    setUsername(newName);
  };

  return (
    <Card
      title={
        <Row>
          <Col span={4}>
            <a href="https://fruchtlabor.com/" target="_blank" rel="noreferrer">
              <ExperimentOutlined /> Website
            </a>
          </Col>
          <Col span={4}>
            <a href="https://fruchtlabor.net/" target="_blank" rel="noreferrer">
              <ExperimentOutlined /> Forum
            </a>
          </Col>
        </Row>
      }
      bordered={false}
      extra={<SettingOutlined key="settings" onClick={settingsClickHandler} />}
    >
      <SettingsModal
        showModal={modal}
        onCancel={cancelHandler}
        onOk={cancelHandler}
        onNameChange={changeNameHandler}
      />
      <ProfileHead name={username} />
      <ProfileSignoff />
      <ProfileFeedback />
    </Card>
  );
};

export default ProfileCard;
