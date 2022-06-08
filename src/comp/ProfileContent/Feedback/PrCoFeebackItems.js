import { List } from "antd";
import { Fragment } from "react";
import PrCoFeedbackStars from "./PrCoFeebackStars";

const PrCoFeedbackItems = (props) => {
  return (
    <Fragment>
      {props.content.map((data) => (
        <List.Item
          key={data.key}
          actions={[<PrCoFeedbackStars stars={data.stars} />]}
        >
          {data.name}
        </List.Item>
      ))}
    </Fragment>
  );
};
export default PrCoFeedbackItems;
