import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex justify-center items-center py-10">
        <div className="bg-white shadow-md rounded-xl p-8 w-[400px]">
          <div className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/4pDNDk1/avatar.png"
              alt="User"
              className="w-24 h-24 rounded-full mb-4 shadow"
            />
            <h2 className="text-xl font-semibold text-gray-800">User Name</h2>
            <p className="text-gray-500 text-sm mb-6">App User</p>
          </div>

          <div className="text-gray-700 text-sm space-y-3">
            <p><strong>Email:</strong> user@example.com</p>
            <p><strong>Location:</strong> Bengaluru, India</p>
          </div>

          <button
            onClick={() => navigate("/edit-profile")}
            className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
