import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../Search';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <Search />
            </div>

            <div className={cx('user')}>
                <p className={cx('user-name')}>anhquan7826</p>
                <img
                    className={cx('user-avatar')}
                    src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
                    alt="user-avatar"
                />
            </div>
        </div>
    );
}

export default Header;
