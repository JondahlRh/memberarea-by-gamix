import "./App.less";

import { Layout, Divider, Image, Row, Col } from "antd";
import Profile from "./comp/Profile";

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
      <Divider orientation="left" style={{ borderColor: "#949494" }}>
        MemberArea
      </Divider>
      <Content>
        <Row align="center">
          <Col span={8}>
            <Profile />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
