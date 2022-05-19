import { Toast } from "react-bootstrap";
import { useNotificationContext } from "../../contexts/NotificationContext.js";
import "./Notification.css";

export default function Notification() {
	const { notification, hideNotification } = useNotificationContext();

	if (!notification.show) {
		return null;
	}

	return (
		<Toast className="notification d-inline-block m-1" bg={notification.type} onClose={hideNotification}>
			<Toast.Header>
				<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
				<strong className="me-auto">Bootstrap</strong>
				<small>11 mins ago</small>
			</Toast.Header>
			<Toast.Body>{notification.message}</Toast.Body>
		</Toast>
	);
}
