import "./App.less";

import { Layout, Divider, Image, Row, Col } from "antd";
import ProfileCard from "./comp/ProfileCard/ProfileCard";

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
        <Row align="center">
          <Col span={8}>
            <ProfileCard />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
