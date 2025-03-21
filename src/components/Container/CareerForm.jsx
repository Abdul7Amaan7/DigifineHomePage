import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const FormField = ({ label, type, name, value, onChange, options = [], errorMessage, className }) => {
  if (type === 'select') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label htmlFor={name} className="text-gray-700 text-left">{label}</label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-gray-700 text-left">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
};

const CareerForm = ({style}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    mode: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        mode: '',
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <div className={`max-w-full mx-auto p-6 bg-white rounded-lg relative ${style}`}
      style={{
        // background: 'url(/images/banner-image/digiform-01.svg) no-repeat top right',
        backgroundSize: '500px',
        minHeight: '200px',
        maxWidth: '700px',
        border: '1px solid #ddd',
        borderRadius: '7px',
        padding: '2rem',
      }}
    >
      <h1 className="text-xl font-semibold text-gray-800 mb-6 text-left">
        Let's Talk About Your Career Growth
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row: Name and Email */}
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            errorMessage={errors.name}
            className="w-full sm:w-1/2"
          />
          <FormField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            errorMessage={errors.email}
            className="w-full sm:w-1/2"
          />
        </div>
        
        {/* Phone Number */}
        <FormField
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          errorMessage={errors.phone}
          className="w-full"
        />
        
        {/* Second Row: City and Mode */}
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField
            label="Choose City"
            type="select"
            name="city"
            value={formData.city}
            onChange={handleChange}
            options={['Mumbai', 'Pune']}
            className="w-full sm:w-1/2"
          />
          <FormField
            label="Choose Mode"
            type="select"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            options={['Online', 'Offline']}
            className="w-full sm:w-1/2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaPaperPlane /> Submit
        </button>
        
        {/* Success Message */}
        {submitted && (
          <p className="text-green-500 text-center mt-4">Form Submitted Successfully!</p>
        )}
      </form>
    </div>
  );
};

export default CareerForm;
