export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 px-8 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">MyApp</h1>

      <div className="flex gap-8 text-gray-700 font-medium">
        <a href="/dashboard" className="hover:text-indigo-600 transition">Home</a>
        <a href="/camera" className="hover:text-indigo-600 transition">Camera</a>
        <a href="/profile" className="hover:text-indigo-600 transition">Profile</a>
        <button
          onClick={() => {
            localStorage.removeItem("loggedIn");
            window.location.href = "/";
          }}
          className="hover:text-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
