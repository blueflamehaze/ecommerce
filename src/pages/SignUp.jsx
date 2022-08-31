import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const SignUp = () => {
	return (
		<>
			<h3>Sign up</h3>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Button variant="primary" type="submit">
        Submit
				</Button>
			</Form>
		</>
	);
};

export default SignUp;