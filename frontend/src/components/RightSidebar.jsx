import React from 'react'
import assets, { imagesDummyData } from "../assets/assets";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const RightSidebar = () => {
  const { selectedUser, messages, showRightSidebar, setShowRightSidebar } = useContext(ChatContext);
  const { logout, onlineUsers } = useContext(AuthContext);
  const [msgImages, setMsgImages] = useState([]);


  // Get all the images from the messages and set them to state--------------------------------
  useEffect(() => {
    setMsgImages(messages.filter((msg) => msg.image).map((msg) => msg.image));
  }, [messages]);


  return (
    selectedUser && (
      <div
        className={`bg-[#8185B2]/10 text-white overflow-y-scroll transition-all duration-300 lg:relative lg:w-full lg:block ${
          showRightSidebar 
            ? "max-lg:fixed max-lg:inset-y-0 max-lg:right-0 max-lg:w-3/4 max-lg:z-50 max-lg:bg-[#282142] max-lg:shadow-2xl" 
            : "max-lg:hidden"
        }`}
      >
        {/* Close Button on Mobile */}
        <div className="lg:hidden absolute top-5 right-5 p-1 cursor-pointer z-50 bg-gray-500/30 rounded-full" onClick={() => setShowRightSidebar(false)}>
          <span className="text-white text-lg font-bold px-2">&times;</span>
        </div>

        <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt="profile"
            className="w-20 aspect-[1/1] rounded-full"
          />
          <h1 className="px-10 text-xl font-medium mx-auto flex items-center gap-2">
            {onlineUsers.includes(selectedUser._id) && (
              <p className="w-2 h-2 rounded-full bg-green-500"></p>
            )}

            {selectedUser.fullName}
          </h1>
          <p className="px-10 mx-auto">{selectedUser.bio}</p>
        </div>

        <hr className="border-[#ffffff50] my-4" />

        <div className="px-5 text-xs">
          <p>Media</p>
          <div className="mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80">
            {msgImages.map((url, index) => (
              <div
                key={index}
                onClick={() => window.open(url)}
                className="cursor-pointer rounded"
              >
                <img src={url} alt="image" className="h-full rounded-md" />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => logout()}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
    )
  );
};

export default RightSidebar