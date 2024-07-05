import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { Api } from '../../api/api';
function PaymentsExternal(props)
{
    const stripePromise = loadStripe('pk_test_51PKxtiSGyaisjdTZWhAP1IhD2hWqUTCcRcuapvy9Ht9BOJyRUFMwJe9pBXulgaVk8Cm30GgnB2QYiBpbq2aBDXO100ntkrts0v');
    const queryParams = new URLSearchParams(window.location.search);
    const options = JSON.parse(decodeURIComponent(queryParams.get('options')));
    return<>
      <div id="checkout">
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
    </>
}

export default PaymentsExternal;