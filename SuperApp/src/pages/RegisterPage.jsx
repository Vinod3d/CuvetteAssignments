/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import bgImg from '../images/bg.png';
import { Link, useNavigate } from 'react-router-dom';


const RegisterPage = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    shareData: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number is invalid.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('user', JSON.stringify(formData));
      setUser(formData);
      navigate("/genres")
    }
  };

  return (
    <>
      <div className="flex flex-col  md:flex-row h-screen">
        <div className="flex-1 bg-cover bg-center">
          <div className="h-screen hidden md:flex">
            <img src={bgImg} className="h-full w-full object-cover" alt="Background" />
          </div>
        </div>
        <div className="flex-1 bg-black text-white flex items-center justify-center p-8">
          <div className="text-center sm:max-w-lg m-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Super app</h1>
            <p className="text-lg mb-6">Create your new account</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded border border-zinc-600 bg-zinc-800 text-white"
                  
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 rounded border border-zinc-600 bg-zinc-800 text-white"
                  
                />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded border border-zinc-600 bg-zinc-800 text-white"
                  
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 rounded border border-zinc-600 bg-zinc-800 text-white"
                  
                />
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              </div>
              <div className="flex items-center mb-4 py-4">
                <input
                  type="checkbox"
                  name="shareData"
                  checked={formData.shareData}
                  onChange={handleChange}
                  id="shareData"
                  className="mr-2"
                />
                <label htmlFor="shareData" className="text-sm">Share my registration data with Superapp</label>
              </div>
              <button type="submit" className="w-full my-3 bg-green-500 text-white p-2 rounded-full hover:bg-green-400">SIGN UP</button>
            </form>
            <p className="text-sm mt-4 text-left py-3">By clicking on Sign up, you agree to Superapp <Link to="#" className="text-green-500">Terms and Conditions of Use</Link>.</p>
            <p className="text-sm text-left py-3">To learn more about how Superapp collects, uses, shares and protects your personal data please head to <Link to="#" className="text-green-500">Superapp Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
