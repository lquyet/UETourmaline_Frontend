import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { HomeScreenImage } from "../../assets/images/HomeScreenImages";
import SidebarItem from "./SidebarItem";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
   
      <div className={cx("wrapper")}>
        <div className={cx("logo")}>
          <img
            className={cx("image-logo")}
            src={HomeScreenImage.logo}
            alt="logo"
          />
          <p className={cx("app-name")}>Tourmaline</p>
        </div>
        <div className={cx("content")}>
          <SidebarItem icon={HomeScreenImage.homeIcon} textContent="Home" />
          <SidebarItem
            icon={HomeScreenImage.libraryIcon}
            textContent="Library"
          />
          <SidebarItem icon={HomeScreenImage.albumIcon} textContent="Album" />
          <SidebarItem
            icon={HomeScreenImage.favouritesIcon}
            textContent="Favourites"
          />
        </div>
        <div className={cx("actions")}>
          <SidebarItem
            icon={HomeScreenImage.settingIcon}
            textContent="Settings"
          />
          <SidebarItem
            icon={HomeScreenImage.logoutIcon}
            textContent="Log out"
          />
        </div>
        <div className={cx("empty")}></div>
      </div>
    
  );
}

export default Sidebar;
