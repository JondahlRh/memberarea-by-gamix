import "./App.less";

import { Layout, Divider, Image } from "antd";
import Profil from "./comp/Profil";

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
        <Profil />
      </Content>
    </Layout>
  );
};

export default App;
