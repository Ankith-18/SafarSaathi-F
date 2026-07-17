import RegisterForm from "../../components/auth/RegisterForm";
import registerBg from "../../assets/images/register-bg.webp";

function Register() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex">

      {/* Left Image */}

      <div className="hidden lg:flex w-1/2 relative">
        <img
          src={registerBg}
          alt="Travel"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Right Form */}

      <div className="w-full lg:w-1/2 flex justify-center px-8 py-12">
        <RegisterForm />
      </div>

    </div>
  );
}

export default Register;