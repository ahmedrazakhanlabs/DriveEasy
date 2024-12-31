import {
  ChevronLeft,
  MoreVertical,
  PenSquare,
  Wallet,
  Trophy,
  Shield,
} from "lucide-react";
import Button from "../../components/Button";

const EditProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b">
          <button className="p-2">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-medium">My Profile</h1>
          <button className="p-2">
            <MoreVertical className="h-5 w-5" />
          </button>
        </header>

        {/* Profile Section */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-16 w-16 rounded-full bg-gray-100 overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile picture"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">Edward Larry</h2>
                <button>
                  <PenSquare className="h-4 w-4 text-gray-400" />
                </button>
              </div>
              <p className="text-gray-500">Senior Designer</p>
            </div>
          </div>

          {/* Status Section */}
          <div className="mb-8">
            <h3 className="text-sm text-gray-500 mb-3">My Status</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-md border bg-zinc-900 text-white hover:bg-zinc-800 transition-colors inline-flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                Away
              </button>
              <button className="px-4 py-2 rounded-md border bg-green-50 text-green-700 hover:bg-green-100 border-green-100 transition-colors inline-flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                At Work
              </button>
              <button className="px-4 py-2 rounded-md border bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-100 transition-colors inline-flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                Gaming
              </button>
            </div>
          </div>

          {/* Dashboard Section */}
          <div className="space-y-6">
            <h3 className="text-sm text-gray-500">Dashboard</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium">Payments</span>
                </div>
                <div className="px-2 py-1 bg-blue-600 text-white text-sm rounded-md">
                  2 New
                </div>
              </button>

              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                  </div>
                  <span className="font-medium">Achievements</span>
                </div>
                <ChevronLeft className="h-5 w-5 text-gray-400 rotate-180" />
              </button>

              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="font-medium">Privacy</span>
                </div>
                <div className="px-2 py-1 bg-orange-500 text-white text-sm rounded-md">
                  Actions Needed
                </div>
              </button>
            </div>
          </div>

          {/* Account Section */}
          <div className="mt-8 space-y-4">
            <h3 className="text-sm text-gray-500">My Account</h3>
            <div className="space-y-4">
              <button className="w-full text-left text-blue-600 hover:underline">
                Switch to Other Account
              </button>
              <button className="w-full text-left text-orange-500 hover:underline">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
