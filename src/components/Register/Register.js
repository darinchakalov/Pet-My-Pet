import * as authService from "../../services/authService.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

export default function Register() {
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);

	const registerSubmitHandler = (e) => {
		e.preventDefault();

		let formData = Object.fromEntries(new FormData(e.currentTarget));

		authService
			.register(formData.email, formData.password)
			.then((authData) => {
				login(authData);
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	return (
		<section id="register-page" className="register">
			<form id="register-form" action="" method="POST" onSubmit={registerSubmitHandler}>
				<fieldset>
					<legend>Register Form</legend>
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
					<p className="field">
						<label htmlFor="repeat-pass">Repeat Password</label>
						<span className="input">
							<input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
						</span>
					</p>
					<input className="button submit" type="submit" value="Register" />
				</fieldset>
			</form>
		</section>
	);
}
