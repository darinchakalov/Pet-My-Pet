import { Navigate, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService.js";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";

export default function Logout() {
	const { user, logout } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		authService.logout(user.accessToken).then(() => {
			logout();
			navigate("/");
		});
	}, []);

	return null;
}
