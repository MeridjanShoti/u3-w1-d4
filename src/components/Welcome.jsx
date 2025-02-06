import { Alert } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <Alert variant="success" className="text-center">
        Welcome to our bookshop!
      </Alert>
      <h2 className="text-center">boost your fantasy!</h2>
    </>
  );
}

export default Welcome;
