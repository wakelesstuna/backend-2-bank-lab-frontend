import axios from "axios";
import Cookies from "universal-cookie/es6";

const baseUrl = process.env.REACT_APP_BASE_URL;
const cookies = new Cookies();

/**
 * Creates a user
 * @param {User} User and user payload to be sent to the database
 * @returns the created User obj
 */
export async function createUser(user) {
  console.log("creating user to db...");
  return await axios.post(`${baseUrl}/users/create`, user);
}

/**
 * Fetching a user from databse based on username
 * @param {String} username
 * @returns User obj
 */
export async function fetchUsersFunction() {
  console.log("fetching user from db...");
  const jwtKey = cookies.get("jwt_key");
  const config = {
    headers: {
      Authorization: jwtKey,
    },
  };

  return await axios.get(`${baseUrl}/users`, config);
}

/**
 * Fetching a user from databse based on username
 * @param {String} username
 * @returns User obj
 */
export async function fetchUser(username) {
  console.log("fetching user from db...");
  return await axios.get(`${baseUrl}/users/user/?username=${username}`);
}

/**
 * Authenticate the user in the database
 * @param {String} username the users username
 * @param {String} password the users password
 * @returns the authenticated User obj
 */
export async function authUser(username, password) {
  console.log("authenticate user in db...");

  const response = await axios.post(
    `http://localhost:8000/login?username=${username}&password=${password}`
  );
  const jwtToken = response.headers.Authorization;
  cookies.set("jwt_token", jwtToken);
  return response;
}

/**
 * Creates a bank account for the user
 * @param {String} username string of the user that wanna create and account
 * @returns the created bank Account obj
 */
export async function createAccount(username) {
  console.log("creating account to db...");
  return await axios.post(`${baseUrl}/accounts/create?username=${username}`);
}

/**
 * Deposits a number to an account
 * @param {String} username the username of the account to deposit to
 * @param {Number} deposit the amount to deposit to the account
 * @param {Number} accountNumber the account number of the account you want to use
 * @returns the uppdated Account obj
 */
export async function makeDeposit(username, deposit, accountNumber) {
  console.log("making deposit to db...");
  return await axios.put(
    `${baseUrl}/accounts/deposit?deposit=${deposit}&username=${username}&accountNumber=${accountNumber}`
  );
}
/**
 * Withdraws a number from an account
 * @param {String} username the username of the account to withdraw from
 * @param {Number} deposit the amount to withdraw from the account
 * @param {Number} accountNumber the account number of the account you want to use
 * @returns the uppdated Account obj
 */
export async function makeWithdraw(username, withdraw, accountNumber) {
  console.log("making withdraw from db...");
  return await axios.put(
    `${baseUrl}/accounts/withdraw?withdraw=${withdraw}&username=${username}&accountNumber=${accountNumber}`
  );
}

export async function openAccountFunction(username, password) {
  console.log(`open account for ${username}`);
  const user = {
    username,
    password,
  };
  return await axios.post(`${baseUrl}/account/open`, user);
}
