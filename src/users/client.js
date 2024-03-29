import axios from "axios";

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

const request = axios.create({
    withCredentials: true,
});

/* OLD CODE
export const signin = async (credentials) => {
    console.log('client signing in...')
    const response = await axios.post(`${USERS_API}/signin`, credentials);
    return response.data;
};

export const account = async () => {
    const response = await axios.post(`${USERS_API}/account`);

    // stringified response.data
    console.log(`client getting account... ${JSON.stringify(response.data)}`);
    return response.data;
};

export const updateUser = async (user) => {
    console.log(`client updating user ${user._id}`);
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
};

export const findUserById = async (id) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
};

export const createUser = async (user) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
};

export const deleteUser = async (user) => {
    const response = await axios.delete(
        `${USERS_API}/${user._id}`);
    return response.data;
};

export const signup = async (credentials) => {
    const response = await axios.post(
        `${USERS_API}/signup`, credentials);
    return response.data;
};

export const signout = async () => {
    const response = await axios.post(`${USERS_API}/signout`);
    return response.data;
};
*/

export const signin = async (credentials) => {
    const response = await request.post(`${USERS_API}/signin`, credentials);
    return response.data;
};
export const account = async () => {
    const response = await request.post(`${USERS_API}/account`);
    return response.data;
};
export const updateUser = async (user) => {
    const response = await request.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};
export const findAllUsers = async () => {
    const response = await request.get(`${USERS_API}`);
    return response.data;
};
export const createUser = async (user) => {
    console.log(`client creating user ${JSON.stringify(user)}`);
    const response = await request.post(`${USERS_API}`, user);
    return response.data;
};
export const findUserById = async (id) => {
    const response = await request.get(`${USERS_API}/${id}`);
    return response.data;
};
export const deleteUser = async (user) => {
    const response = await request.delete(`${USERS_API}/${user._id}`);
    return response.data;
};
export const signup = async (user) => {
    const response = await request.post(`${USERS_API}/signup`, user);
    return response.data;
};
export const signout = async () => {
    const response = await request.post(`${USERS_API}/signout`);
    return response.data;
};

