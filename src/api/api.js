import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function createUser(user) {
  console.log(user);
  return await axios.post(`${baseUrl}/users/create`, user);
}

export async function fetchUser(username) {
  return await axios.get(`${baseUrl}/users/user/?username=${username}`);
}

export async function authUser(username, password) {
  return await axios.get(
    `${baseUrl}/users/auth/?username=${username}&password=${password}`
  );
}

export async function createAccount(username) {
  return await axios.post(`${baseUrl}/accounts/create?username=${username}`);
}

export async function makeDeposit(username, deposit, accountNumber) {
  return await axios.put(
    `${baseUrl}/accounts/deposit?deposit=${deposit}&username=${username}&accountNumber=${accountNumber}`
  );
}

export async function makeWithdraw(username, withdraw, accountNumber) {
  return await axios.put(
    `${baseUrl}/accounts/withdraw?withdraw=${withdraw}&username=${username}&accountNumber=${accountNumber}`
  );
}
