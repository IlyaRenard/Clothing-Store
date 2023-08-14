import React, { FC, PropsWithChildren } from "react";

interface MySelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  selectValue: { value: string; title: string }[];
  selectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MySelect: FC<PropsWithChildren<MySelectProps>> = ({
  children,
  selectHandler,
  selectValue,
  ...props
}) => {
  return (
    <select
      className="bg-dark-gray text-white py-1 px-4"
      onChange={selectHandler}
      defaultValue={"DEFAULT"}
      {...props}
    >
      <option value="DEFAULT" disabled>
        Sorted by
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
