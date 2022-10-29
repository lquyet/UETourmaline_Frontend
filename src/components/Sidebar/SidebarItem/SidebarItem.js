import classNames from "classnames/bind";
import styles from "./SidebarItem.module.scss";

const cx = classNames.bind(styles);
function SidebarItem({ icon, textContent }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("icon")} src={icon} alt="">
        
      </img>
      <span className={cx("text-content")}>{textContent}</span>
    </div>
  );
}

export default SidebarItem;
