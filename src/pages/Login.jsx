import { useNavigate } from "react-router-dom";
import GlassCard from "../components/GlassCard";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
  e.preventDefault();
  localStorage.setItem("loggedIn", "true"); // ✅ Save login state
  navigate("/dashboard");
}


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-[#dfe9f3] to-white">
      <GlassCard className="w-[380px]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back 👋
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg border border-white/50 bg-white/30 backdrop-blur placeholder-gray-600 focus:outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-lg border border-white/50 bg-white/30 backdrop-blur placeholder-gray-600 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="mt-2 bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </form>
      </GlassCard>
    </div>
  );
}
