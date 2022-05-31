import { Button, Divider, List } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

const ProfileFeedback = () => {
  const data = [
    { name: "BluuBerry | Kevin", stars: [1, 0, 0, 0, 0] },
    { name: "LuQQi | Lucas", stars: [1, 1, 1, 1, 1] },
    { name: "WattVolt | Corvin", stars: [1, 1, 1, 1, 1] },
    { name: "Tjörck | Tjark", stars: [0, 0, 0, 0, 0] },
    { name: "Dragzy | Marcel", stars: [1, 0, 0, 0, 0] },
  ];

  return (
    <div>
      <Divider orientation="left" style={{ borderColor: "#949494" }}>
        Feedback
      </Divider>
      <Button>Neues Feedback</Button>
      <List
        header={<b>Abgegebenes Feedback</b>}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Meta title={"Feedback an: " + item.name} />
            <div>
              {item.stars.map((star) => {
                return (
                  (star === 0 && <StarOutlined key={Math.random()} />) || (
                    <StarFilled key={Math.random()} />
                  )
                );
              })}
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProfileFeedback;
