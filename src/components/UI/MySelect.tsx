import React, { FC, PropsWithChildren } from "react";

interface MySelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  selectValue: { value: string; title: string }[];
  selectHandler?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  title: string;
}

const MySelect: FC<PropsWithChildren<MySelectProps>> = ({
  children,
  selectHandler,
  selectValue,
  title,
  ...props
}) => {
  return (
    <select
      className="bg-dark-gray text-white py-1 px-4 text-xl"
      onChange={selectHandler}
      defaultValue={"DEFAULT"}
      {...props}
    >
      <option value="DEFAULT" disabled className="text-xl">
        {title}
      </option>
      {selectValue.map((val) => (
        <option key={val.value} value={val.value}>
          {val.title}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
