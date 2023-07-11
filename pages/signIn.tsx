import type { NextPage } from "next";

const SignIn: NextPage = () => {
  return (
    <div className="relative bg-ghostwhite w-full h-[1024px] overflow-hidden text-left text-xl text-gray-200 font-product-sans">
      <div className="absolute top-[140px] left-[462px] rounded-[15px] bg-white w-[515px] h-[744px] overflow-hidden">
        <div className="absolute top-[22px] left-[24px] text-21xl text-black inline-block w-[163px] h-[46px]">
          Sign in
        </div>
        <div className="absolute top-[101px] left-[24px] inline-block w-[232px] h-[31px] text-blueviolet">
          <span className="text-dimgray">New to LeanPrep?</span>
          <span className="text-darkslategray">{` `}</span>
          <span className="[text-decoration:underline] cursor-pointer hover:text-purple-700">Signup</span>
        </div>
        <div className="absolute top-[172px] left-[24px] text-base text-gray-100 inline-block w-[129px] h-[15px]">
          Email Address
        </div>
        <div className="absolute top-[258px] left-[24px] text-base text-gray-100 inline-block w-[129px] h-[15px]">
          Password
        </div>
        <div className="absolute top-[195px] left-[24px] rounded-lg box-border w-[464px] h-9 overflow-hidden border-[1px] border-solid border-lightgray" />
        <div className="absolute top-[458px] left-[24px] cursor-pointer rounded-lg bg-white box-border w-[464px] h-12 overflow-hidden border-[1px] border-solid border-silver">
          <img
            className="absolute top-[8px] left-[108px] w-8 h-8"
            alt=""
            src="./facebook.svg"
          />
          <div className="absolute top-[13px] left-[150px] inline-block w-[212px] h-[25px]">
            Continue with Facebook
          </div>
        </div>
        <div className="absolute top-[528px] left-[24px] cursor-pointer rounded-lg bg-white box-border w-[464px] h-12 overflow-hidden border-[1px] border-solid border-silver">
          <div className="absolute top-[13px] left-[150px] inline-block w-[212px] h-[25px]">
            Continue with Google
          </div>
          <img
            className="absolute top-[8px] left-[109px] w-8 h-8"
            alt=""
            src="./google.svg"
          />
        </div>
        <div className="absolute top-[599px] left-[24px] cursor-pointer rounded-lg bg-white box-border w-[464px] h-12 overflow-hidden border-[1px] border-solid border-silver">
          <div className="absolute top-[13px] left-[150px] inline-block w-[212px] h-[25px]">
            Continue with LinkedIn
          </div>
          <img
            className="absolute top-[8px] left-[110px] w-8 h-8"
            alt=""
            src="./inLogo.svg"
          />
        </div>
        <img
          className="absolute top-[281px] left-[24px] rounded-lg w-[464px] h-9 overflow-hidden"
          alt=""
          src="/dot.svg"
        />
        <div className="absolute top-[350px] left-[24px] cursor-pointer rounded-lg bg-blue w-[464px] h-[41px] overflow-hidden text-center text-white">
          <div className="absolute top-[9px] left-[159px] inline-block w-[146px] h-[27px]">
            Continue
          </div>
        </div>
        <div className="absolute top-[693px] left-[calc(50%_-_242.5px)] text-base text-center inline-block w-[481px] h-6">
          <span>{`By signing up, you agree to our `}</span>
          <span className="[text-decoration:underline] text-dimgray">
            Terms and Conditions
          </span>
        </div>
        <div className="absolute top-[410px] left-[235px] text-[24px] text-center inline-block w-[41px] h-[26px]">
          or
        </div>
      </div>
      <div className="absolute top-[31px] left-[61px] text-21xl font-semibold font-poppins inline-block w-[249px] h-[53px] text-black">
        <span>Lean</span>
        <span className="text-blue">Prep</span>
      </div>
    </div>
  );
};

export default SignIn;
