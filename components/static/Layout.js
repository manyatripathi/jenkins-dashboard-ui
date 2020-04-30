import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = props => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
      <Header />
      <SideMenu />
      {props.children}
    </div>
  );
};

export default Layout;
