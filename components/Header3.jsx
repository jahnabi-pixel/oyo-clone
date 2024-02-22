"use client";

const Header3 = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 h-60 p-4">
      <div className="mx-10 p-5 ">
        <h2 className="text-center text-white text-4xl font-bold">
          Over 174,000+ hotels and homes across 35+ countries
        </h2>
        <div className="grid grid-cols-5 my-5 mx=20">
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2 "
          />
          <input
            type="text"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1 "
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <button
            type="submit"
            className="h-16 px-3 py-2 col-span-1 bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
          >
            Search
          </button>
        </div>
        <div className="flex mx-20 my-4 font-bold">
          <button
            type="submit"
            className="h-16 px-3 py-2  hover:cursor-pointer  text-white mr-5 "
          >
            Continue your Search
          </button>
          <button
            type="submit"
            className="h-14 px-3 py-2 hover:cursor-pointer  text-white  mr-5 border-2 border-white hover:bg-gray-500 rounded-xl"
          >
            Homestay in India Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
