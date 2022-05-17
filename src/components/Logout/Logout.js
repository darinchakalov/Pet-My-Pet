import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService.js";
import { useEffect } from "react";
import {  useAuthContext } from "../../contexts/AuthContext.js";

export default function Logout() {
	const { user, logout } = useAuthContext();
	const navigate = useNavigate();
	useEffect(() => {
		authService.logout(user.accessToken).then(() => {
			logout();
			navigate("/");
		});
	}, []);

	return null;
}
