import styled from "styled-components";

export const Dropdown = styled.div`
  width: 100%;
`;

export const DropdownButton = styled.div`
  display: flex;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "2.4rem")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-end"};
  align-items: center;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.button.dropdownButton};
  border: 0.2px solid #dea8a8;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin: 0.4rem 0 0 0;
  cursor: pointer;
`;

export const ShowList = styled.span`
  display: block;
  padding: 0 0.8rem;
`;

export const ListOfItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.dropdown.list};
  border: 1px solid ${({ theme }) => theme.colors.button.active};
  border-top: 0;
`;

export const Select = styled.select`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  padding: 0.2rem;
  cursor: pointer;
  text-align: center;

  :hover {
    background-color: ${({ theme }) => theme.colors.button.active};
  }
`;

export const SelectedCategory = styled.div`
  width: 90%;
  text-align: start;
`;
