import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Fragment } from "react";

const PrCoFeedbackStars = (props) => {
  return (
    <Fragment>
      {[...Array(props.stars)].map(() => (
        <StarFilled
          key={Date.now() + Math.round(Math.random() * 1000) / 1000}
        />
      ))}
      {[...Array(5 - props.stars)].map(() => (
        <StarOutlined
          key={Date.now() + Math.round(Math.random() * 1000) / 1000}
        />
      ))}
    </Fragment>
  );
};

export default PrCoFeedbackStars;
