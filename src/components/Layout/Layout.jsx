import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import * as s from "../../GlobalStyles/Global.styled";

const Layout = ({ children }) => {
  return (
    <s.AppWrapper >
      <s.AppWrapperInner>
        <Navbar />
        <s.ContentContainer>{children}</s.ContentContainer>
      </s.AppWrapperInner>
      <Footer />
    </s.AppWrapper>
  );
};

export default Layout;
