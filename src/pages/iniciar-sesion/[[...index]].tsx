import { SignIn } from "@clerk/nextjs";

const SignInModal = () => (
  <main className="relative flex min-h-screen items-center justify-center ">
    <div className="absolute left-1/2 top-1/2 mb-4 -translate-x-1/2 -translate-y-1/2 transform rounded px-8 pb-8 pt-6 ">
      <SignIn />
    </div>
  </main>
);

export default SignInModal;

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
