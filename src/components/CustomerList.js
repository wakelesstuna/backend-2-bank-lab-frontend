import styled from "styled-components";
import { colors } from "../constants/color";
import Customer from "./Customer";

const CustomerList = ({
  customerList,
  setUsername,
  setPasswordError,
  setPasswordErrorMsg,
}) => {
  const handleCustomerOnClick = (customer) => {
    setUsername(customer.username);
    setPasswordErrorMsg("Please, fill in customers password to open account");
    setPasswordError(true);
  };

  const sortedList = customerList.sort((a, b) =>
    a.username.localeCompare(b.username)
  );

  console.table(sortedList);
  return (
    <CustomerListStyle colors={colors}>
      <h3>Customer List:</h3>
      <div className='listContainer'>
        {sortedList &&
          sortedList.map((customer) => (
            <Customer
              customer={customer}
              onClick={() => handleCustomerOnClick(customer)}
            />
          ))}
      </div>
    </CustomerListStyle>
  );
};

const CustomerListStyle = styled.div`
  padding: 0 1rem;
  margin: auto;
  .listContainer {
    height: 500px;
    overflow-y: scroll;
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: ${(props) =>
        props.colors.scrollBar ? props.colors.scrollBarBackground : "#f5f5f5"};
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${(props) =>
        props.colors.scrollBar ? props.colors.scrollBar : "red"};
    }
  }
`;

export default CustomerList;
