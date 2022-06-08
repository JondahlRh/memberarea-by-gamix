import { Button, Divider, List } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { useState } from "react";
import FeedbackModal from "../../utility/FeedbackModal";

const DUMMY_DATA = [
  { name: "BluuBerry | Kevin", stars: 1 },
  { name: "LuQQi | Lucas", stars: 5 },
];

const ProfileFeedback = () => {
  const [data, setData] = useState(DUMMY_DATA);
  const [modal, setModal] = useState(false);

  const NewSignoffHandler = () => {
    setModal(true);
  };

  const cancelHandler = () => {
    setModal(false);
  };

  const onAddHandler = (newFeedback) => {
    setModal(false);
    setData((prevData) => {
      return [newFeedback, ...prevData];
    });
  };

  return (
    <div>
      <Divider orientation="left" style={{ borderColor: "#949494" }}>
        Feedback
      </Divider>
      <Button onClick={NewSignoffHandler}>Neues Feedback</Button>
      <List
        header={<b>Abgegebenes Feedback</b>}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Meta title={"Feedback an: " + item.name} />
            <div>
              {[...Array(item.stars)].map(() => (
                <StarFilled key={Math.random()} />
              ))}
              {[...Array(5 - item.stars)].map(() => (
                <StarOutlined key={Math.random()} />
              ))}
            </div>
          </List.Item>
        )}
      />
      <FeedbackModal
        showModal={modal}
        titel="Neues Feedback"
        onCancel={cancelHandler}
        onAdd={onAddHandler}
      />
    </div>
  );
};

export default ProfileFeedback;
