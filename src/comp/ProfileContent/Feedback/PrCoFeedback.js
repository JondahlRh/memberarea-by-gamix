import { Fragment, useState } from "react";

import { Divider, List, Modal } from "antd";

import PrCoFeedbackItems from "./PrCoFeebackItems";
import PrCoFeedbackNew from "./PrCoFeebackNew";
import FeedbackModal from "../../Modal/FeedbackModal";

// const DUMMY_ARRAY = [
//   { key: "a1", name: "Tjark", stars: 1, desc: "DUMMY 1" },
//   { key: "a2", name: "Dragzy", stars: 2, desc: "DUMMY 2" },
// ];

const PrCoFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedbackModal, setFeedbackModal] = useState(false);

  const showFeedbackModal = () => {
    setFeedbackModal(true);
  };
  const hideFeedbackModal = () => {
    setFeedbackModal(false);
  };

  const newFeedbackTitle =
    feedbackList.length === 0
      ? "Neues Feedback hinzufüggen"
      : "Weiteres Feedback hinzufügen";

  const addFeedbackHandler = (item) => {
    setFeedbackModal(false);
    setFeedbackList((prevList) => [...prevList, item]);
  };

  return (
    <Fragment>
      <Divider orientation="left" style={{ borderColor: "#949494" }}>
        Feedback
      </Divider>
      <List header={feedbackList.length > 0 && <b>Abgegebenes Feedback</b>}>
        <PrCoFeedbackItems content={feedbackList} />
        <PrCoFeedbackNew
          onAddFeedback={showFeedbackModal}
          title={newFeedbackTitle}
        />
      </List>
      <Modal
        title={newFeedbackTitle}
        visible={feedbackModal}
        onCancel={hideFeedbackModal}
        footer={null}
        destroyOnClose
      >
        <FeedbackModal onNewFeedback={addFeedbackHandler} />
      </Modal>
    </Fragment>
  );
};

export default PrCoFeedback;
