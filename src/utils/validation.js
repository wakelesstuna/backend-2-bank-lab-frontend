export const validate = () => {
  return false;
};

export const validateWithdraw = (balance, withdraw) => {
  const bool = parseFloat(withdraw) > parseFloat(balance);
  console.log(bool);
  return bool;
};
