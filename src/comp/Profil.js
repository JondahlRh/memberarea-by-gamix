import { useState } from "react";

import { Row, Col, Card, Avatar } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import SettingsModal from "./SettinsModal";

const { Meta } = Card;

const Profil = () => {
  const [modal, setModal] = useState(false);

  const settingsClickHandler = () => {
    setModal(true);
  };

  const cancelHandler = () => {
    setModal(false);
  };

  return (
    <Row align="center">
      <Col className="gutter-row" span={8}>
        <Card
          bordered={false}
          extra={
            <SettingOutlined key="settings" onClick={settingsClickHandler} />
          }
        >
          <SettingsModal
            showModal={modal}
            onCancel={cancelHandler}
            onOk={cancelHandler}
          />
          <Meta
            avatar={
              <Avatar
                size="large"
                src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ac/acd2539e1fab61c876e2883d028b94a0b1edece4_full.jpg"
              />
            }
            title="Gamix"
            description="Willkommen in der Member Area!"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Profil;
