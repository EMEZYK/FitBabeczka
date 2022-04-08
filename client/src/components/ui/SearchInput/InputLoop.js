import { InputSearch } from "./InputLoop.styled";

const InputSearchComponent = ({ setSearchTerm }) => {
  return (
    <InputSearch>
      <img src="icons/loop.svg" alt="" />
      <input
        type="search"
        name="searchTerm"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </InputSearch>
  );
};

export default InputSearchComponent;
