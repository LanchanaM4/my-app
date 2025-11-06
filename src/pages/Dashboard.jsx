import Navbar from "../components/Navbar";

export default function Dashboard() {
  const cards = [
    { title: "Products", desc: "Manage and browse your listed products", icon: "🛍️" },
    { title: "Orders", desc: "Track customer orders in real-time", icon: "📦" },
    { title: "Customers", desc: "View and manage registered users", icon: "👥" },
    { title: "Reports", desc: "Check sales, revenue, and analytics", icon: "📊" },
    { title: "Settings", desc: "Change preferences and account options", icon: "⚙️" },
    { title: "Support", desc: "Get help or contact admin team", icon: "💬" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Dashboard Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
