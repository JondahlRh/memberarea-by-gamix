import "./App.less";

import { Layout, Col, Divider, Row, Card } from "antd";
const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <h1>FLAT</h1>
      </Header>
      <Content>
        <Divider orientation="left">MemberArea</Divider>
        <Row>
          <Col className="gutter-row" span={8}>
            <Card
              title="Card title"
              bordered={false}
              style={{
                width: "95%",
                margin: "auto",
              }}
            >
              <p>Card content</p>
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card
              title="Card title"
              bordered={false}
              style={{
                width: "95%",
                margin: "auto",
              }}
            >
              <p>Card content</p>
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card
              title="Card title"
              bordered={false}
              style={{
                width: "95%",
                margin: "auto",
              }}
            >
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
