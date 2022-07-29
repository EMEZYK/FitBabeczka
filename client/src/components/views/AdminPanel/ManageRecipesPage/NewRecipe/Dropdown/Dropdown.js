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
  const [selectedName, setSelectedName] = useState(value);

  const defaultValue = (options, value) => {
    console.log("defaultValue", value);

    return options ? options.find((option) => option.value === value) : "";
  };
  const handleChange = (value) => {
    console.log("handlechangeval", value);
    setSelectedValue(value);
    onChange(value);
    setSelectedName(value.name);
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

  console.log("selectedName", selectedName);

  return (
    <>
      {async ? (
        <AsyncSelect
          cacheOptions
          autoFocus
          defaultOptions={true}
          loadOptions={promiseOptions}
          onChange={handleChange}
          name={selectedName}
          id={id}
          value={selectedValue}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option._id}
          onBlur={onBlur}
          styles={customStyles}
          placeholder="Wybierz kategorię"
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
