import React from "react";

const SingleChat = () => {
  return (
    <>
      <div className="p-5 m-3 bg-white shadow rounded-md">
        <div className="flex justify-between">
          <div className="left flex gap-4">
            <div className="p-img">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                alt=""
              />
            </div>
            <div className="info">
              <h5 className="font-bold capitalize">username</h5>
              <p className="text-gray-600">message</p>
            </div>
          </div>
          <div className="right">
            <h6 className="day text-green-500 capitalize">yesterday</h6>
            <div className="flex justify-center items-center gap-2">
              <p className="bg-green-500 w-[20px] h-[20px] text-sm flex justify-center items-center rounded-full text-black p-2 font-bold">
                2
              </p>
              <p>pin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChat;
