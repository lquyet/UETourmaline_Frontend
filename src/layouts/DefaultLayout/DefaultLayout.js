import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';
import PlayingBar from '~/components/PlayingBar';
const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header></Header>
                <PlayingBar></PlayingBar>
                <Outlet />
            </div>
        </div>
    );
}
export default DefaultLayout;
