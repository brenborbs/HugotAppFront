import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <>{children}</>
      <style global="true">
        {`
      
      
      
      `}
      </style>
    </React.Fragment>
  );
};

export default Layout;
