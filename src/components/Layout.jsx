import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
