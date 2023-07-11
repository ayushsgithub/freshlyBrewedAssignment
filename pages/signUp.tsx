import type { NextPage } from "next";

const SignUp: NextPage = () => {
  return (
    <div className="relative bg-ghostwhite w-full h-[1024px] overflow-hidden text-left text-base text-gray-100 font-product-sans">
      <div className="absolute top-[95px] left-[500px] rounded-[15px] bg-white w-[515px] h-[834px] overflow-hidden">
        <div className="absolute top-[22px] left-[24px] text-21xl text-black inline-block w-[163px] h-[46px]">
          Sign Up
        </div>
        <div className="absolute top-[101px] left-[24px] text-xl inline-block w-[232px] h-[31px] text-dimgray">
          <span>{`Already a member? `}</span>
          <span className="[text-decoration:underline] text-blueviolet">
            Login
          </span>
        </div>
        <div className="absolute top-[146px] left-[24px] inline-block w-[129px] h-[15px]">
          First Name
        </div>
        <div className="absolute top-[232px] left-[24px] inline-block w-[129px] h-[15px]">
          Email Address
        </div>
        <div className="absolute top-[450px] left-[24px] inline-block w-[129px] h-[15px]">
          Set Password
        </div>
        <div className="absolute top-[341px] left-[24px] inline-block w-[129px] h-[15px]">
          Current Job Role
        </div>
        <div className="absolute top-[146px] left-[274px] inline-block w-[129px] h-[15px]">
          Last Name
        </div>
        <div className="absolute top-[169px] left-[24px] rounded-lg box-border w-[207px] h-9 overflow-hidden border-[1px] border-solid border-lightgray" />
        <div className="absolute top-[255px] left-[24px] rounded-lg box-border w-[464px] h-9 overflow-hidden border-[1px] border-solid border-lightgray" />
        <img
          className="absolute top-[473px] left-[24px] rounded-lg w-[464px] h-9 overflow-hidden"
          alt=""
          src="/dot.svg"
        />
        <div className="absolute top-[605px] left-[17px] cursor-pointer rounded-lg bg-blue w-[464px] h-9 overflow-hidden text-center text-xl text-white">
          <div className="absolute top-[4px] left-[159px] inline-block w-[146px] h-7">
            Next
          </div>
        </div>
        <div className="absolute top-[364px] left-[24px] rounded-lg box-border w-[464px] h-9 overflow-hidden text-dimgray border-[1px] border-solid border-lightgray">
          <div className="absolute top-[9px] left-[25px] inline-block w-[152px] h-[18px]">
            Product Manager
          </div>
          <img
            className="absolute top-[14.67px] left-[430.63px] w-[17.26px] h-[10.6px]"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="absolute top-[169px] left-[274px] rounded-lg box-border w-[214px] h-9 overflow-hidden border-[1px] border-solid border-lightgray" />
        <div className="absolute top-[805px] left-[11px] text-center inline-block w-[481px] h-7 text-gray-200">
          <span>{`By signing up, you agree to our `}</span>
          <span className="[text-decoration:underline] text-dimgray">
            Terms and Conditions
          </span>
        </div>
        <div className="absolute top-[654px] left-[228px] text-[24px] text-gray-200 text-center inline-block w-[41px] h-[26px]">
          or
        </div>
        <div className="absolute top-[693px] cursor-pointer left-[17px] rounded-lg bg-white box-border w-[464px] h-12 overflow-hidden text-xl text-gray-200 border-[1px] border-solid border-silver">
          <div className="absolute top-[13px] left-[150px] inline-block w-[212px] h-[25px]">
            Sign up with LinkedIn
          </div>
          <img
            className="absolute top-[8px] left-[110px] w-8 h-8"
            alt=""
            src="/inLogo.svg"
          />
        </div>
      </div>
      <div className="absolute top-[13px] left-[61px] text-21xl font-semibold font-poppins inline-block w-[249px] h-[53px] text-black">
        <span>Lean</span>
        <span className="text-blue">Prep</span>
      </div>
    </div>
  );
};

export default SignUp;
