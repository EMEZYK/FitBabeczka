import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-native";

const config = {
  verbose: true,
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};

module.exports = config;
