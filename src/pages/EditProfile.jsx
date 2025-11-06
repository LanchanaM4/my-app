import Navbar from "../components/Navbar";

export default function EditProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex justify-center items-center py-10">
        <form className="bg-white shadow-md rounded-xl p-8 w-[400px] flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Edit Profile</h2>
          <input type="text" placeholder="Name" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="email" placeholder="Email" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="text" placeholder="Location" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <button className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">Save</button>
        </form>
      </div>
    </div>
  );
}
