import LoginForm from "../../components/auth/LoginForm";
import loginBg from "../../assets/images/login-bg.webp";

function Login() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex">
      {/* Left Side Image */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src={loginBg}
          alt="Travel"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center px-8 py-12">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;