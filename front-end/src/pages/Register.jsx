import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/authAction';
import { postAPI } from '../utils/FetchData';
import { validRegister } from '../utils/Valid';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    fullname: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const toastOptions = {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const check = validRegister(values);
    if (check.errLength > 0) {
      toast.error(check.errMsg[0], toastOptions);
      // dispatch({ type: 'ALERT', payload: { errors: check.errMsg[0] } });
    } else {
      try {
        const res = await postAPI(registerRoute, values);
        const { username, phone, email, password, fullname } = values;
        toast.info('Please check your email to submit OTP code', {
          position: 'top-right',
          autoClose: 10000,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
        });
        navigate('/confirmOTP', {
          state: {
            username: username,
            email: email,
            phone: phone,
            password: password,
            fullname: fullname,
          },
        });
      } catch (err) {
        toast.error(err.response.data.message, toastOptions);
      }
    }
  };
  const handleChange = e => {
    let value = e.target.files ? e.target.files : e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-bl from-[#79C7C5] to-[#F9FBFF]">
      <form
        className="flex flex-col w-[400px] h-[480px] bg-[#F9FBFF] bg-opacity-50 rounded-xl items-center gap-3 py-3 justify-center px-14"
        enctype="multipart/form-data"
        onSubmit={e => handleSubmit(e)}
      >
        <div className="text-[40px]">
          <h1>Chat-app</h1>
        </div>
        <input
          className="w-full bg-[#F9FBFF] h-[44px] border-[#777777] border-[2px] outline-none rounded-md p-2"
          type="text"
          placeholder="Fullname"
          name="fullname"
          onChange={e => handleChange(e)}
        />
        <input
          className="w-full bg-[#F9FBFF] h-[44px] border-[#777777] border-[2px] outline-none rounded-md p-2"
          type="text"
          placeholder="Username"
          name="username"
          onChange={e => handleChange(e)}
        />
        <div className="flex gap-2">
          <input
            className="w-full bg-[#F9FBFF] h-[44px] border-[#777777] border-[2px] outline-none rounded-md p-2"
            type="email"
            placeholder="Email"
            name="email"
            onChange={e => handleChange(e)}
          />
          <input
            className="w-full bg-[#F9FBFF] h-[44px] border-[#777777] border-[2px] outline-none rounded-md p-2"
            type="tel"
            placeholder="Phone"
            name="phone"
            onChange={e => handleChange(e)}
          />
        </div>

        <input
          className="w-full bg-[#F9FBFF] h-[44px] border-[#777777] border-[2px] outline-none rounded-md p-2"
          type="password"
          placeholder="Password"
          name="password"
          onChange={e => handleChange(e)}
        />
        <input
          className="w-full bg-[#F9FBFF] h-[44px] border-[#777777] border-[2px] outline-none rounded-md p-2"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={e => handleChange(e)}
        />

        <button
          className="w-full h-[44px] rounded-xl hover:bg-opacity-95 bg-[#63a09e] cursor-pointer text-white"
          type="submit"
        >
          Create User
        </button>
        <span className="text-[#000] w-full">
          Already have an account?{' '}
          <Link to="/login" className="text-[#63a09e]">
            Login
          </Link>{' '}
        </span>
      </form>
    </div>
  );
}

export default Register;
