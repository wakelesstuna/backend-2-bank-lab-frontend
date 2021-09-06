import styled from "styled-components";
import Card from "./ui/Card";

const Customer = ({ customer, onClick }) => {
  return (
    <div>
      <CustomerStyle onClick={onClick}>
        <Card hover={true}>
          <div className='contentWrapper'>
            <div className='account'>
              <h5>Customer ID:</h5>
              <p className='accountId'>{customer.id}</p>
              <div className='flexRow'>
                <p>Customer name:</p>
                <p>{customer.username}</p>
              </div>
            </div>
          </div>
        </Card>
      </CustomerStyle>
    </div>
  );
};

const CustomerStyle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contentWrapper {
    padding: 0rem 1rem;
    list-style: none;
  }

  .accountId {
    font-size: 0.7rem;
  }

  .flexRow {
    display: flex;
    align-items: center;
    p {
      padding-right: 10px;
    }
  }
`;

export default Customer;
