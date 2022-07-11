import React from "react";
import { useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";

export const DropdownComponent = ({
  onChange,
  value,
  onBlur,
  id,
  options,
  async,
  promiseOptions,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  console.log("async", async);
  console.log("valu", value);
  console.log("options", options);
  console.log("selectedValue", selectedValue);

  const handleChange = (value) => {
    console.log("change", value);
    setSelectedValue(value);
    onChange(value);
  };

  const customStyles = {
    option: (styles) => ({
      ...styles,
      cursor: "pointer",
    }),
    control: (styles) => ({
      ...styles,
      cursor: "pointer",
    }),
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
          styles={customStyles}
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
          styles={customStyles}
        ></Select>
      )}
    </>
  );
};
