import React from "react";
import { DropdownComponent } from "./Dropdown";

export const DropDownCategory = ({
  onChange,
  onBlur,
  value,
  id,
  categories,
}) => {
  const options = categories?.map((category) => {
    return { value: category._id, label: category.name };
  });

  return (
    <DropdownComponent
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      id={id}
      options={options}
    />
  );
};
