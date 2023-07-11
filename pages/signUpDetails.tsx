import type { NextPage } from "next";

const SignUpDetails: NextPage = () => {
  return (
    <div className="relative bg-ghostwhite w-full h-[1024px] overflow-hidden text-left text-base text-gray-100 font-product-sans">
      <div className="absolute top-[95px] left-[500px] rounded-[15px] bg-white w-[515px] h-[834px] overflow-hidden">
        <div className="absolute top-[22px] left-[24px] text-21xl text-black inline-block w-72 h-[46px]">
          Personal Details
        </div>
        <div className="absolute top-[101px] left-[24px] text-dimgray inline-block w-[448px] h-[31px]">
          We need a few more details to complete the sign up process
        </div>
        <div className="absolute top-[148px] left-[25px] inline-block w-[242px] h-[15px]">{`Language Preferences `}</div>
        <div className="absolute top-[235px] left-[25px] inline-block w-[129px] h-[15px]">
          Birth Date
        </div>
        <div className="absolute top-[417px] left-[24px] inline-block w-[129px] h-[15px]">
          Education level
        </div>
        <div className="absolute top-[506px] left-[24px] inline-block w-[226px] h-[15px]">{`Preferred Interview mode `}</div>
        <div className="absolute top-[320px] left-[24px] inline-block w-40 h-[15px]">
          Target Job/Industry
        </div>
        <img
          className="absolute top-[258px] left-[24px] rounded-lg w-[464px] h-9 overflow-hidden"
          alt=""
          src="/birth.svg"
        />
        <div className="absolute top-[595px] left-[17px] rounded-lg bg-blue w-[464px] cursor-pointer h-9 overflow-hidden text-center text-xl text-white">
          <div className="absolute top-[4px] left-[159px] inline-block w-[146px] h-7">
            Sign up
          </div>
        </div>
        <div className="absolute top-[343px] left-[24px] rounded-lg box-border w-[464px] cursor-pointer h-9 overflow-hidden text-dimgray border-[1px] border-solid border-lightgray">
          <div className="absolute top-[9px] left-[25px] inline-block w-[152px] h-[18px]">
            Select
          </div>
          <img
            className="absolute top-[14.67px] left-[430.63px] w-[17.26px] h-[10.6px]"
            alt=""
            src="/vec.svg"
          />
        </div>
        <div className="absolute top-[440px] left-[24px] rounded-lg box-border w-[464px] cursor-pointer h-9 overflow-hidden text-dimgray border-[1px] border-solid border-lightgray">
          <div className="absolute top-[9px] left-[25px] inline-block w-[152px] h-[18px]">
            Select
          </div>
          <img
            className="absolute top-[14.67px] left-[430.63px] w-[17.26px] h-[10.6px]"
            alt=""
            src="/vec.svg"
          />
        </div>
        <div className="absolute top-[549px] left-[49px] text-dimgray inline-block w-[100px] h-[18px] cursor-pointer">
          Interviewee
        </div>
        <div className="absolute top-[549px] left-[208px] inline-block w-[100px] h-[18px] cursor-pointer">
          Interviewer
        </div>
        <div className="absolute top-[549px] left-[367px] inline-block w-[100px] h-[18px] cursor-pointer">
          Hybrid mode
        </div>
        <div className="absolute top-[177px] left-[24px] rounded-lg box-border w-[464px] cursor-pointer h-9 overflow-hidden text-dimgray border-[1px] border-solid border-lightgray">
          <div className="absolute top-[9px] left-[25px] inline-block w-[152px] h-[18px]">
            Select
          </div>
          <img
            className="absolute top-[14.67px] left-[430.63px] w-[17.26px] h-[10.6px]"
            alt=""
            src="/vec.svg"
          />
        </div>
        <div className="absolute top-[805px] left-[11px] text-center inline-block w-[481px] h-7 text-gray-200">
          <span>{`By signing up, you agree to our `}</span>
          <span className="[text-decoration:underline] text-dimgray">
            Terms and Conditions
          </span>
        </div>
        <div className="absolute top-[645px] left-[228px] text-[24px] text-gray-200 text-center inline-block w-[41px] h-[26px]">
          or
        </div>
        <div className="absolute top-[693px] left-[17px] cursor-pointer rounded-lg bg-white box-border w-[464px] h-12 overflow-hidden text-xl text-gray-200 border-[1px] border-solid border-silver">
          <div className="absolute top-[13px] left-[150px] inline-block w-[212px] h-[25px]">
            Sign up with LinkedIn
          </div>
          <img
            className="absolute top-[8px] left-[110px] w-8 h-8"
            alt=""
            src="/inLogo.svg"
          />
        </div>
        <div className="absolute top-[552px] left-[26px] rounded-[50%] box-border w-3 h-3 border-[1px] border-solid border-dimgray" />
        <div className="absolute top-[552px] left-[189px] rounded-[50%] box-border w-3 h-3 border-[1px] border-solid border-dimgray" />
        <div className="absolute top-[552px] left-[349px] rounded-[50%] box-border w-3 h-3 border-[1px] border-solid border-dimgray" />
        <div className="absolute top-[555px] left-[29px] rounded-[50%] bg-dimgray w-1.5 h-1.5" />
      </div>
      <div className="absolute top-[9px] left-[61px] text-21xl font-semibold font-poppins inline-block w-[249px] h-[53px] text-black">
        <span>Lean</span>
        <span className="text-blue">Prep</span>
      </div>
    </div>
  );
};

export default SignUpDetails;
