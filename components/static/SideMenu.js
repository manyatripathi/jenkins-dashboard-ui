import CustomLink from "./CustomLink";

export default function SideMenu() {
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout__title drawer-title">Jenkins Dashboard</span>
      <nav className="mdl-navigation">
        <CustomLink
          className="mdl-navigation__link"
          activeClassName="active"
          href="/"
        >
          <span>
            <i className="material-icons side-menu-icon">dashboard</i>Dashboard
          </span>
        </CustomLink>
        <CustomLink
          className="mdl-navigation__link"
          activeClassName="active"
          href="/jobs"
        >
          <span>
            <i className="material-icons side-menu-icon">money</i>Jobs
          </span>
        </CustomLink>
        <CustomLink
          className="mdl-navigation__link"
          activeClassName="active"
          href="/slaves"
        >
          <span>
            <i className="material-icons side-menu-icon">devices</i>Slaves
          </span>
        </CustomLink>
		<CustomLink
          className="mdl-navigation__link"
          activeClassName="active"
          href="/scans"
        >
          <span>
            <i className="material-icons side-menu-icon">lock_open</i>Vulnerability Scans
          </span>
        </CustomLink>
      </nav>
    </div>
  );
}
