import React from 'react';

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full bg-red-50 relative">
        {/* Main Image */}
        <img
          className="object-cover w-full h-[350px]"
          src="https://static.picmaker.com/scene-prebuilts/thumbnails/26422876-6728-480d-bf61-65d7bde0da73.png"
          alt=""
        />
        
        {/* Profile Image */}
        <div className="absolute -bottom-24 mt-50 right-[46%] border-white border-2 rounded-full">
          <img
            className="rounded-full object-cover"
            width={150}
            height={150}
            src="https://img.freepik.com/premium-photo/3d-icon-rounded-user-profile-blue-orange-perfect-apps-websites-social-media-graphics_1057-196181.jpg"
            alt=""
          />
        </div>
      </div> 



      {/* Username Info */}
     

      {/* Info Section */}
      <div className="info flex justify-center items-center my-8 mt-30 flex-col gap-5">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">
          Creating Animated Art for VTT's
        </div>
        <div className="text-slate-400">
          9,719 members 82 posts $15,450/release
        </div>
      </div>

      {/* Payment Section */}
      <div className="payment flex gap-3 w-[60%]  ml-40 mt-10 ">
        {/* Supporters List */}
        <div className="supporters w-1/2  bg-slate-900 rounded-lg text-white p-6">
          <h2 className="text-2xl font-bold my-5">Supporters</h2>
          <ul className="mx-5 text-lg">
            <li className="my-2">
              <img src="avatar.gif" alt="" />
              Shubham donated $30 with a message
            </li>
            <li className="my-2">Shubham donated $30 with a message ""</li>
            <li className="my-2">Shubham donated $30 with a message ""</li>
            <li className="my-2">Shubham donated $30 with a message ""</li>
            <li className="my-2">Shubham donated $30 with a message ""</li>
          </ul>
        </div>

        {/* Make Payment Section */}
        <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-6 h-[50vh]">
          <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
          <div className="flex gap-2 flex-col">
            {/* Input for name and message */}
            <div>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
            </div>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Message"
            />
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Amount"
            />
            <div className="text-center">
              <button
                type="button"
                className="w-fit text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-b font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            {/* Or choose from these amounts */}
            <div className="flex gap-2 ">
              <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
