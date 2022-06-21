import React from "react";
// import {
//   Dropdown,
//   DropdownButton,
//   SelectedCategory,
//   ShowList,
//   ListOfItems,
//   Item,
//   Select,
// } from "./CategoryDropdown.styled";
import { useState } from "react";
import Select from "react-select";
// import Async, { useAsync } from "react-select/async";
import AsyncSelect from "react-select/async";

export const DropdownComponent = ({
  // items,
  onChange,
  // onInputChange,
  value,
  onBlur,
  name,
  id,
  options,
  async,
  promiseOptions,
}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  const handleChange = (value) => {
    console.log("tutaj", value);

    setSelectedValue(value);
    onChange(value);
  };

  return (
    <>
      {async ? (
        <AsyncSelect
          cacheOptions
          defaultOptions
          id={id}
          value={selectedValue}
          onBlur={onBlur}
          onChange={handleChange}
          loadOptions={promiseOptions}
          getOptionLabel={(e) => e.name}
          getOptionValue={(e) => e._id}
        />
      ) : (
        <Select
          name={defaultValue}
          id={id}
          value={defaultValue(options, value)}
          onChange={(value) => {
            onChange(value);
          }}
          options={options}
          onBlur={onBlur}
          style={{ display: "block" }}
        ></Select>
      )}
    </>
  );
};
