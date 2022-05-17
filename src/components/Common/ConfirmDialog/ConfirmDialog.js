import { Modal, Button } from "react-bootstrap";

export default function ConfirmDialog({ show, onClose, onSave }) {
	return (
		<Modal show={show} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>You are about to delete a pet!</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>Are you sure you wish to do that?</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={onClose}>
					No
				</Button>
				<Button variant="primary" onClick={onSave}>
					Yes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
