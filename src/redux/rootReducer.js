import { combineReducers } from 'redux';
// import register from '../components/register/reducers/register';
import getuserReducer from '../components/auth/reducers/getuser';
import getprofileReducer from '../components/auth/reducers/getprofile';
import VERIFY_AUTH_Reducer from '../components/auth/reducers/verfiy';
import getcouponsReducer from '../components/coupons/reducers';


export default combineReducers({
    // register: register,
    getcoupons: getcouponsReducer,
    VERIFY_AUTH: VERIFY_AUTH_Reducer,
    getuser: getuserReducer,
    getprofile: getprofileReducer
});