import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({handelPayment}) => {
  const stripe = useStripe();
  const elements = useElements();


  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        handelPayment(paymentMethod.id);
    }
  };

  return (
      <div className="">
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe} className="btn btn-success my-4 px-5">
                    Pay
                </button>
                
                </form>
       { paymentError && <p className="text-danger">{paymentError}</p>}
       { paymentSuccess && <p className="text-success">Completely Payment submitted. Thank you...!!!</p>}
      </div>
   
  );
};
export default SimpleCardForm;