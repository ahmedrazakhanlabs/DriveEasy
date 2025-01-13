import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicTabs from "../../components/Tabs";
import Input from "../../components/Input";
import { UserIcon } from "../../utils/Icons";

const EditProfile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className={`transition-all relative duration-700 h-screen transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b">
          <button className="p-2">
            <ArrowLeft className="h-5 w-5" onClick={() => navigate(-1)} />
          </button>
          <h1 className="font-Monsterrat text-md font-bold">Edit Profile</h1>
          <button className="p-2">
            {/* <MoreVertical className="h-5 w-5" /> */}
          </button>
        </header>

        <DynamicTabs tabs={tabs} />
      </div>
    </div>
  );
};

export default EditProfile;
