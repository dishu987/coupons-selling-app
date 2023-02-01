import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
export async function fetchCouponsData(dispatch) {
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/coupons/list/`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(res => {
            dispatch({ type: 'GET_COUPONS_ACTION', payload: res });
        })
        .catch(err => {
            console.log(err);
        });
    return;
}