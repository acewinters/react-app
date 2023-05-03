import React, { useState } from 'react';
import Invoice from './InvoicePage';
import '../App.css';

function CheckoutPage() {
  const [billingDetails, setBillingDetails] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const fullName = event.target.firstname.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const city = event.target.city.value;
    const state = event.target.state.value;
    const zip = event.target.zip.value;

    setBillingDetails({ fullName, email, address, city, state, zip });
  };

  if (billingDetails) {
    return <Invoice billingDetails={billingDetails} />;
  }

  return (
      <div className="container semiTransparentBackground">
        <h2>Checkout</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Billing Address</h4>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
              <label htmlFor="firstname">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="New York"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  placeholder="NY"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="zip"
                  placeholder="10001"
                />
              </div>
                <label htmlFor="ccnum">Credit card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="expyear">Exp Year</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expyear"
                    name="expyear"
                    placeholder="2018"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    name="cvv"
                    placeholder="352"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Continue to checkout"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default CheckoutPage;

  