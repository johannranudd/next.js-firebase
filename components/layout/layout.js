import Navbar from './navbar';
import { GlobalStyle } from '../../styles/app.styles';
// import Footer from './footer';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
