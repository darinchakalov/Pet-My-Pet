import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.js";
import * as authService from "../../services/authService.js";
import { useNotificationContext, types } from "../../contexts/NotificationContext.js";

export default function Login() {
	const { user, login } = useAuthContext();

	const navigate = useNavigate();
	const { addNotification } = useNotificationContext();

	const loginHandler = (e) => {
		e.preventDefault();

		let formData = new FormData(e.currentTarget);
		let email = formData.get("email");
		let password = formData.get("password");

		authService
			.login(email, password)
			.then((data) => {
				login(data);
				navigate("/");
				addNotification("Login successful", types.success);
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<section id="login-page" className="login">
			<form id="login-form" action="" method="" onSubmit={loginHandler}>
				<fieldset>
					<legend>Login Form</legend>
					<p className="field">
						<label htmlFor="email">Email</label>
						<span className="input">
							<input type="text" name="email" id="email" placeholder="Email" />
						</span>
					</p>
					<p className="field">
						<label htmlFor="password">Password</label>
						<span className="input">
							<input type="password" name="password" id="password" placeholder="Password" />
						</span>
					</p>
					<input className="button submit" type="submit" value="Login" />
				</fieldset>
			</form>
		</section>
	);
}
