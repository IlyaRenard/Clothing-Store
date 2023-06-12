import React, { FC, PropsWithChildren } from "react";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className="bg-mint-green py-1 px-2 m-2 rounded-lg">
      {children}
    </button>
  );
};

export default MyButton;
