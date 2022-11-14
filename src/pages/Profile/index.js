import className from "classnames/bind";
import { useState, useEffect } from "react";

function Profile() {
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		getUserInfo();
	}, []);

	const getUserInfo = async () => {
		// Fetch API to get account information: username, email, password (?), phone number, address. (JSON)
		// Hardcode for now
		const response = {
			username: "admin",
			email: "admin@tourmaline.com",
			phone: "0123456789",
			address: "123, ABC Street, XYZ City, 12345",
		};
		setUserInfo(response);
	}

    return <h1>Profile</h1>;
}
export default Profile;
