import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { DropdownComponent } from "./Dropdown";

export const DropDownCategory = ({ onChange, onBlur, value, id, name }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    await axios({
      url: "/categories",
    })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => console.log(err));
  };

  const promiseCategoriesFunction = () =>
    axios({
      url: "/categories",
    })
      .then((response) => response.data)
      .catch((err) => console.log(err));

  //moze do usuniecia:
  useEffect(() => {
    fetchCategories();
  }, [setCategories]);

  console.log("categories", categories);
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
