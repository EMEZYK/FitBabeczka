import React from "react";
import axios from "axios";
import { DropdownComponent } from "./Dropdown";
import { useEffect, useState } from "react";

export const DropDownCategory = ({ onChange, onBlur, value, id, name }) => {
  const [allCategories, setAllCategories] = useState([]);

  const fetchCategories = async () =>
    await axios({
      url: "/categories",
    })
      .then((response) => {
        const categories = response.data;
        setAllCategories(categories);
        return categories;
      })
      .catch((err) => console.log(err));

  console.log("allCategories", allCategories);

  // const mappedCategories = allCategories.map((category) => category.name);
  // console.log(mappedCategories);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <DropdownComponent
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      async={true}
      promiseOptions={fetchCategories}
    />
  );
};
