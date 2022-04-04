import { fetchUser } from '../utils/fetchLocalStogareData'

const userInfo = fetchUser();
export const initalState = {
    user: userInfo,
};