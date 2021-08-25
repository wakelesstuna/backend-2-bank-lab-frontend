import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

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
  return await axios.get(
    `${baseUrl}/users/auth/?username=${username}&password=${password}`
  );
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
