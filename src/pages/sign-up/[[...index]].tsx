import { SignUp } from "@clerk/nextjs";

const SignUpModal = () => (
  <div style={styles}>
    <SignUp />
  </div>
);

export default SignUpModal;

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
