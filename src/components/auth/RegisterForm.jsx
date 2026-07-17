function RegisterForm() {
  return (
    <div className="w-full max-w-md">
      {/* Heading */}

      <h1 className="text-4xl font-bold text-white">
        Create Your Account
      </h1>

      <p className="text-gray-400 mt-2 mb-8">
        Start your travel journey with SafarSaathi
      </p>

      {/* Full Name */}

      <div className="mb-4">
        <label className="block text-gray-300 mb-2">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full bg-[#171C2B] border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Email */}

      <div className="mb-4">
        <label className="block text-gray-300 mb-2">
          Email
        </label>

        <input
          type="email"
          placeholder="Email "
          className="w-full bg-[#171C2B] border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Password */}

      <div className="mb-4">
        <label className="block text-gray-300 mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="********"
          className="w-full bg-[#171C2B] border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Confirm Password */}

      <div className="mb-4">
        <label className="block text-gray-300 mb-2">
          Confirm Password
        </label>

        <input
          type="password"
          placeholder="********"
          className="w-full bg-[#171C2B] border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Terms */}

      <div className="flex items-start gap-3 mb-6">
        <input
          type="checkbox"
          className="mt-1"
        />

        <p className="text-sm text-gray-400">
          I agree to the{" "}
          <span className="text-blue-500 cursor-pointer">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="text-blue-500 cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>

      {/* Button */}

      <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-white font-semibold transition">
        Sign Up
      </button>

      {/* Login */}

      <p className="text-center text-gray-400 mt-6">
        Already have an account?{" "}
        <span className="text-blue-500 cursor-pointer hover:underline">
          Login
        </span>
      </p>
    </div>
  );
}

export default RegisterForm;