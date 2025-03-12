import React from 'react';

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full bg-red-50 relative">
        {/* Main Image */}
        <img
          className="object-cover w-full h-[350px]"
          src="https://miro.medium.com/v2/resize:fit:1000/1*Nqq8jcQkiuSZkNZHzopbDg.gif"
          alt=""
        />
        
        {/* Profile Image */}
        <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full">
          <img
            className="rounded-full"
            width={150}
            height={150}
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/National%20Geographic_2572187_square.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Username Info */}
      <div className="info flex justify-center items-center my-24">
        <div className="font-bold text-lg">@{params.username}</div>
      </div>

      {/* Info Section */}
      <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">
          Creating Animated Art for VTT's
        </div>
        <div className="text-slate-400">
          9,719 members 82 posts $15,450/release
        </div>
      </div>

      {/* Payment Section */}
      <div className="payment flex gap-3 w-[80%] mt-11">
        {/* Supporters List */}
        <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
          {/* Show list of all the supporters as a leaderboard */}
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
            <li className="my-2">Shubham donated $30 with a message ""</li>
            <li className="my-2">Shubham donated $30 with a message ""</li>
            <li className="my-2">Shubham donated $30 with a message ""</li>
          </ul>
        </div>

        {/* Make Payment Section */}
        <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
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
            <div className="flex gap-2 mt-5">
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
