import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import {registerUser} from '../api/authAPI';
import {useAppDispatch} from "../hooks/reduxHooks";
import {useNavigate} from "react-router-dom";


const Register: FC = () => {
  const [formData, setFormData] = useState({email: '', password: ''})
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then(res => {
      if (!res.type.endsWith('rejected')) {
        navigate('/signin')
      }
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto flex flex-col gap-4 ">
      <h2 className="mt-5 font-semibold text-white text-xl text-center">Register</h2>
      <input
        value={formData.email}
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Enter Email"
        required
        className="min-h-[50px] p-2 text-lg text-white bg-gray-500 outline-none rounded focus:bg-gray-400"
      />
      <input
        value={formData.password}
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Enter password"
        required
        className="min-h-[50px] p-2 text-lg text-white bg-gray-500 outline-none rounded focus:bg-gray-400"
      />
      <button
        type="submit"
        className="w-24 mx-auto font-semibold text-black text-xl text-center uppercase bg-gray-200 rounded hover:opacity-70"
      >
        Submit
      </button>
    </form>
  );
};

export default Register;
