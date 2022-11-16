import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './login.module.scss';
const cx = classNames.bind(styles);
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '123') {
            console.log('login success');
        } else {
            console.log('login failed');
        }
    };
    return (
        <div className={cx('login-page')}>
            <div className={cx('login-form')}>
                <h2 className={cx('title')}>Login</h2>
                <form>
                    <div className={cx('user-box')}>
                        <input
                            type="text"
                            className={cx('login-input')}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Username</label>
                    </div>

                    <div className={cx('user-box')}>
                        <input
                            type="password"
                            className={cx('login-input')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                    </div>
                    <button type="submit" className={cx('login-btn')} onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Login;
