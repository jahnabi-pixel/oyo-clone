import Image from "next/image";

import Block from "./Block";

const Header1 = () => {
  return (
    <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-3">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        classname="w-24 h-24"
      />
      <div className="border-r-2 border-gray-300 h-full flex">
        <Block
          title={"Become a member"}
          para={"Additional 10% off on stays."}
        />
        <Block title={"OYO for Business"} para={"Trusted by 5000 Corporates"} />
        <Block title={"List your property"} para={"Start Earning in 30 mins"} />
        <Block title={"0124-6201611"} para={"Call us to block now"} />
        <div className="flex items-center px-3">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={100}
            height={100}
          className="w-10 h-10 rounded-full mr-5"          />
          <h3 className="font-bold">Login/Signup</h3>
        </div>
      </div>
    </div>
  );
};

export default Header1;
