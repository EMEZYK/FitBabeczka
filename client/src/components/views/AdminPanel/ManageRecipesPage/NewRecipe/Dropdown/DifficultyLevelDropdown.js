import React from "react";

import { DropdownComponent } from "./Dropdown";

export const DifficultyLevelDropdown = ({
  onChange,
  value,
  onBlur,
  // name,
  id,
}) => {
  const difficultyLevels = [
    { label: "Trudny", value: "Trudny" },
    { label: "Średni", value: "Średni" },
    { label: "Łatwy", value: "Łatwy" },
  ];

  return (
    <DropdownComponent
      items={difficultyLevels}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      id={id}
      options={difficultyLevels}
    />
  );
};
