import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { Routes } from "../../../../utils/Routes";
import Input from "../../../../components/Input";
import { PhoneIcon2, UserIcon } from "../../../../utils/Icons";
import Checkbox from "../../../../components/Checkbox";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="flex justify-center items-center mx-4  my-3">
        <button
          onClick={() => navigate(Routes.contacts)}
          className="p-2 absolute left-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div></div>
        <div className="flex justify-center items-center">
          <h1 className="font-MonsterratBold text-[15px] text-center font-bold">
            Add Contacts
          </h1>
        </div>
      </div>
      <div className="px-5">
        <Input
          type="email"
          placeholder="Name"
          className={"mb-4"}
          prefixIcon={<UserIcon />}
        />
        <Input
          type="number"
          placeholder="Mobile Number"
          className={"mb-4"}
          prefixIcon={<PhoneIcon2 />}
        />

        <div className="flex justify-between items-center">
          <p className="font-Monsterrat text-[4vw] sm:text-[12px] font-bold">
            Send App invites to Parent{" "}
          </p>
          <Checkbox
            onChange={() => setIsChecked(!isChecked)}
            checked={isChecked}
          />
        </div>
        <div className="flex justify-center max-w-52 items-center mx-auto my-10">
          <Button
            label="Import Parent Details "
            className="rounded-3xl justify-center font-bold text-[12px] font-Monsterrat text-white bg-purple-1 py-2 px-3"
            radio={true}
            textCenter={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AddContact;
