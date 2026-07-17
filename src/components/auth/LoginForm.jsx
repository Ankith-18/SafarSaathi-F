import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="w-full max-w-md">
      {/* Heading */}
      <h1 className="text-4xl lg:text-5xl font-bold text-white">
        Welcome Back
      </h1>

      <p className="text-gray-400 mt-2 mb-6">
        Login to continue your journey
      </p>

      {/* Google Button */}
      <button className="w-full flex items-center justify-center gap-3 bg-[#171C2B] border border-zinc-700 rounded-xl py-3 text-white hover:border-blue-500 transition-all duration-300 mb-4">
        <FcGoogle size={22} />
        Continue with Google
      </button>

      {/* GitHub Button */}
      <button className="w-full flex items-center justify-center gap-3 bg-[#171C2B] border border-zinc-700 rounded-xl py-3 text-white hover:border-blue-500 transition-all duration-300">
        <FaGithub size={22} />
        Continue with GitHub
      </button>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-zinc-700"></div>

        <span className="px-4 text-gray-400 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-zinc-700"></div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">
          Email
        </label>

        <input
          type="email"
          placeholder="john@example.com"
          className="w-full bg-[#171C2B] border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-300 mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="********"
          className="w-full bg-[#171C2B] border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end mt-3">
        <a
          href="#"
          className="text-sm text-blue-500 hover:underline"
        >
          Forgot Password?
        </a>
      </div>

      {/* Login Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl py-3 mt-6 text-white font-semibold">
        Login
      </button>

      {/* Sign Up */}
      <p className="text-center text-gray-400 mt-6">
        Don't have an account?{" "}
        <span className="text-blue-500 cursor-pointer hover:underline">
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default LoginForm;