import React from "react";
import axios from "axios";
import { DropdownComponent } from "./Dropdown";

export const DropDownCategory = ({ onChange, onBlur, value, id, name }) => {
  const promiseCategoriesFunction = () =>
    axios({
      url: "/categories",
    })
      .then((response) => response.data)
      .catch((err) => console.log(err));

  return (
    <DropdownComponent
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      async={true}
      promiseOptions={promiseCategoriesFunction}
    />
  );
};
