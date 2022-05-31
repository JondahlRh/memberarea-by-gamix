import { Card, Avatar, List } from "antd";

const { Meta } = Card;

const ProfileHead = () => {
  return (
    <div>
      <List>
        <List.Item>
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
        </List.Item>
      </List>
    </div>
  );
};

export default ProfileHead;
