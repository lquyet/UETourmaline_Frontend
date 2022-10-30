import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import * as HomeScreenImage from "../../assets/images/HomeScreenImages";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
import { routeConfigs } from "../../routes/routeconfigs";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <Link to={'/'} className={cx("logo")}>
        <span className={cx("image-logo")}>
          <HomeScreenImage.logo />
        </span>

        <p className={cx("app-name")}>Tourmaline</p>
      </Link>
      <div className={cx("content")}>
        <SidebarItem icon={<HomeScreenImage.homeIcon />} textContent="Home" to={routeConfigs.homeRoute} />
        <SidebarItem
          icon={<HomeScreenImage.libraryIcon />}
          textContent="Library"
          to={routeConfigs.libraryRoute}
        />
        <SidebarItem icon={<HomeScreenImage.albumIcon />} textContent="Album" to={routeConfigs.albumRoute} />
        <SidebarItem
          icon={<HomeScreenImage.favouritesIcon />}
          textContent="Favourites"
          to={routeConfigs.favouritesRoute}
        />
      </div>
      <div className={cx("empty")}></div>

      <div className={cx("actions")}>
        <SidebarItem
          icon={<HomeScreenImage.settingIcon />}
          textContent="Settings"
          to={routeConfigs.settingsRoute}
        />
        <SidebarItem
          icon={<HomeScreenImage.logoutIcon />}
          textContent="Log out"
          to={routeConfigs.logoutRoute}
        />
      </div>
    </div>
  );
}

export default Sidebar;
