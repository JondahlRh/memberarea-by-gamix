import "./App.less";

import { Layout, Col, Divider, Row, Card, Image } from "antd";
const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Image
          height={24}
          preview={false}
          src="https://flat.fruchtlabor.com/assets/img/illustrations/flatlogoschriftwhite.png"
        />
      </Header>
      <Content>
        <Divider orientation="left" style={{ borderColor: "#949494" }}>
          MemberArea
        </Divider>
        <Row>
          <Col className="gutter-row" span={8}>
            <Card
              title="Profil"
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
              title="Abmeldung"
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
              title="Feedback"
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
