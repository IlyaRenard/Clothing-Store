import React from "react";
import MyButton from "./../components/UI/MyButton";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[10%] h-full">
      <h2 className="text-white text-3xl">Sign in</h2>

      <input
        type="text"
        className="mt-5 border-0 outline-none rounded-md py-2 px-3 text-white bg-light-gray"
        placeholder="e-mail"
        required
      />
      <input
        type="password"
        className="mt-5 border-0 outline-none rounded-md py-2 px-3 text-white bg-light-gray"
        placeholder="password"
        required
      />
      <a href="/signin" className="mt-5 text-mint-green">
        Forgot password?
      </a>
      <MyButton>Sign In</MyButton>
    </div>
  );
};

export default SignInPage;
