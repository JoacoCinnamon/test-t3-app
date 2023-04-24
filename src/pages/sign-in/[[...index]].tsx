import { SignIn } from "@clerk/nextjs";

const SignInModal = () => (
  <div style={styles}>
    <SignIn />
  </div>
);

export default SignInModal;

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
