'use client';

import React, { useState } from 'react';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    address1: '',
    address2: '',
    phoneNumber: '',
    paymentMethod: 'creditCard', // Default payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name:</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            data-test-id="checkout-first-name"
          />
        </div>
        <div>
          <label htmlFor="name">Last Name:</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            data-test-id="checkout-last-name"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            data-test-id="checkout-email"
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            data-test-id="checkout-address"
          />
        </div>
        <div>
          <label htmlFor="address1">City:</label>
          <input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            data-test-id="checkout-city"
          />
        </div>
        <div>
          <label htmlFor="postal-code">Postal Code:</label>
          <input
            id="postal-code"
            name="postal-codes"
            value={formData.postalCode}
            onChange={handleChange}
            data-test-id="checkout-postal-code"
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            data-test-id="checkout-country"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <div>
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              // checked={formData.paymentMethod === 'creditCard'}
              onChange={handleChange}
              data-test-id="checkout-credit-card"
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
        </div>
        <label>
          Expiration Date:
          <input
            required
            placeholder="MM/YYYY"
            data-test-id="checkout-expiration-date"
          />
        </label>
        <br />
        <br />
        <label>
          Security Code:
          <input
            required
            placeholder="123"
            data-test-id="checkout-security-code"
          />
        </label>
        <br />
        <br />
      </form>
    </div>
  );
}
