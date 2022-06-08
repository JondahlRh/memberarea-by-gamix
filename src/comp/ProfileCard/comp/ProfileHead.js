import { Card, Avatar } from "antd";

const { Meta } = Card;

const ProfileHead = (props) => {
  return (
    <div>
      <Meta
        avatar={
          <Avatar
            size="large"
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ac/acd2539e1fab61c876e2883d028b94a0b1edece4_full.jpg"
          />
        }
        title={props.name}
        description="Willkommen in der Member Area!"
      />
    </div>
  );
};

export default ProfileHead;
