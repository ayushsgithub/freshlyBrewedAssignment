import type { NextPage } from "next";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-5xl text-black font-product-sans">
      <div className="absolute top-[16px] left-[61px] text-[40px] font-semibold font-poppins text-left inline-block w-[249px] h-[53px]">
        <span>Lean</span>
        <span className="text-blue">Prep</span>
      </div>
      <div className="absolute top-[calc(40%_-_35px)] left-[calc(50%_-_508px)] inline-block w-[1016px] h-[127px] text-dimgray">
        <span>{`Welcome to `}</span>
        <span className="text-black">LeanPrep</span>
        <span>{`! The ultimate destination for honing your interview skills. Whether you're a fresh graduate, career changer, or seasoned professional, we've got you covered. Our `}</span>
        <span className="text-black">comprehensive library</span>
        <span> of mock interview questions and</span>
        <span className="text-black"> expert tips</span>
        <span>{` will help you `}</span>
        <span className="text-black">{`ace any job interview. `}</span>
      </div>
      <div className="absolute top-[calc(50%_+_110px)] left-[calc(50%_-_165px)] text-dimgray inline-block w-[278px] h-8">{`Already a memeber? `}</div>
      <div className="absolute top-[220px] left-[calc(50%_-_493px)] text-[48px] inline-block w-[977px] h-[136px] text-darkslategray">
        <p className="m-0">{`Don't let nerves get the best of you – `}</p>
        <p className="m-0 text-black">
          <b>practice makes perfect!</b>
        </p>
      </div>
      <div className="absolute top-[20px] left-[1050px] flex flex-row p-2.5 items-start justify-start">
        <div className="relative">Pricing</div>
      </div>
      <div className="absolute top-[20px] left-[902px] flex flex-row p-2.5 items-start justify-start">
        <div className="relative">About us</div>
      </div>
      <div className="absolute top-[25px] left-[1180px] rounded-mini box-border w-[152px] h-[39px] flex flex-row py-2.5 px-0 items-center justify-center gap-[10px] text-blue border-[1px] border-solid border-blue">
        <div className="relative">Demo</div>
        <img className="relative w-8 h-8" alt="" src="./videocamera.svg" />
      </div>
      <div className="absolute top-[530px] left-[500px] rounded-mini bg-blue w-[413px] flex flex-row py-2.5 pr-0 pl-2.5 box-border items-center justify-center text-[32px] text-white">
        <div className="relative inline-block w-[310px] shrink-0">
          Join our Program
        </div>
      </div>
      <div className="absolute top-[622px] left-[765px] [text-decoration:underline] inline-block w-[90px] h-[26px]">
        Login
      </div>
      <img
        className="absolute h-[46.68%] w-[34.24%] top-[4.88%] right-[65.76%] bottom-[48.44%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="./vector.svg"
      />
      <img
        className="absolute top-[206.94px] left-[662.69px] w-[786px] h-[786px] overflow-hidden"
        alt=""
        src="./blob-1-1.svg"
      />
    </div>
  );
};

export default LandingPage;
