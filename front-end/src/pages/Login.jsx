import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';
import { login } from '../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    phone: '',
    password: '',
  });

  const { auth } = useSelector(state => state);

  // useEffect(() => {
  //   if (auth) {
  //     navigate('/');
  //   }
  // }, [auth]);

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  useEffect(() => {
    if (auth.access_token) {
      navigate('/');
    }
  }, [auth.access_token, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        dispatch(login(values));
      } catch (err) {
        toast.error('Wrong phone number or password', toastOptions);
      }
    }
  };

  const handleValidation = () => {
    const { phone, password } = values;
    if (password === '') {
      toast.error('Username and Password is required', toastOptions);
      return false;
    } else if (phone === '') {
      toast.error('Username and Password is required', toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-bl from-[#79C7C5] to-[#F9FBFF]">
      <form
        className="flex flex-col w-[400px] h-[300px] bg-[#F9FBFF] bg-opacity-50 rounded-xl items-center gap-3 py-3 justify-center px-14"
        onSubmit={e => handleSubmit(e)}
      >
        <div className="text-[40px]">
          <h1>Chat-app</h1>
        </div>
        <input
          className="w-full bg-[#F9FBFF] h-[44px] border-[#777777] border-[2px] outline-none rounded-md p-2"
          type="tel"
          placeholder="Phone"
          name="phone"
          onChange={e => handleChange(e)}
        />
        <input
          className="w-full bg-[#F9FBFF] h-[44px] border-[#777777] border-[2px] outline-none rounded-md p-2"
          type="password"
          placeholder="Password"
          name="password"
          onChange={e => handleChange(e)}
        />

        <button
          className="w-full h-[44px] rounded-xl hover:bg-opacity-95 bg-[#63a09e] text-white"
          type="submit"
        >
          Login
        </button>
        <span className="text-[#000] w-full">
          Don't have an account ?{' '}
          <Link to="/register" className="text-[#63a09e]">
            {' '}
            Register
          </Link>{' '}
        </span>
      </form>
    </div>
  );
}
export default Login;
