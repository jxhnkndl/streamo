import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidRightArrow } from 'react-icons/bi';

function Register() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-screen sm:w-1/2 bg-base-200 p-8 rounded-md">
        <div className="mb-2">
          <p className="text-4xl mb-4 mr-3 inline">Create Account</p>
          <BiSolidRightArrow className="text-2xl mb-4 inline" />
        </div>
        <form>
          <div className="form-control w-full mb-4">
            <div className="label">
              <div className="label-text">Email</div>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-md w-full"
            />
          </div>
          <div className="form-control w-full mb-4">
            <div className="label">
              <div className="label-text">Username</div>
            </div>
            <input
              type="text"
              name="username"
              id="username"
              className="input input-bordered input-md w-full"
            />
          </div>
          <div className="form-control w-full mb-4">
            <div className="label">
              <div className="label-text">Password</div>
            </div>
            <input
              type="password"
              name="password1"
              id="password1"
              className="input input-bordered input-md w-full"
            />
          </div>
          <div className="form-control w-full mb-10">
            <div className="label">
              <div className="label-text">Confirm Password</div>
            </div>
            <input
              type="password"
              name="password2"
              id="password2"
              className="input input-bordered input-md w-full"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mb-6">
            Sign Up
          </button>
          <Link to='/login' className='hover:underline'>
            Already have an account? Sign in instead!
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
