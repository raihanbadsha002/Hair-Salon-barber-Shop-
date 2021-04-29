import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie0iOB5GuD2bWZIuqXfCnUNiKE7oyL7d0MNt90MnisfV2tFb7G6emFuggzzx6NpLquifTxVtbxjK5YsesNy78XA00zUgKNwYZ');


const PaymentProcess = ({handelPayment}) => {
    return (
    <Elements stripe={stripePromise}>
        <SimpleCardForm handelPayment={handelPayment}/>
           
    </Elements>
    );
};

export default PaymentProcess;