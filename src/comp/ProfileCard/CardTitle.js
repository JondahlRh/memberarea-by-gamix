import { Col, Row } from "antd";
import { ExperimentOutlined } from "@ant-design/icons";

const CardTitle = () => {
  return (
    <Row gutter={24}>
      <Col>
        <a href="https://fruchtlabor.com/" target="_blank" rel="noreferrer">
          <div>
            <ExperimentOutlined /> Website
          </div>
        </a>
      </Col>
      <Col>
        <a href="https://fruchtlabor.net/" target="_blank" rel="noreferrer">
          <div>
            <ExperimentOutlined /> Forum
          </div>
        </a>
      </Col>
    </Row>
  );
};

export default CardTitle;
