import Router,{ useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { verify } from '../../app/firebaseAuth';
import { useLoginMutation } from '../../app/store/apiSlice'
import { setPhone } from "../../app/store/authSlice";
const useLogin = () => {
  const router = useRouter();
  const redirectTo = useSelector((s) => s.ui.redirects.successLogin);
  const [login, { data, error, isLoading }] = useLoginMutation();
  useEffect(() => {
    if(data?.token){
      router.replace(redirectTo || '/')
    }
  }, [data])
  return [login,{isLoading,error}]
}


export default function Verify() {
  const [otp, setOtp] = useState("");
  const [login,{isLoading,error}] = useLogin()
  const router = useRouter()
  const dispatch = useDispatch();
  const phone = useSelector((s) => s.auth.phone);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      verify
        .confirm(otp)
        .then((result) => {
          result.user.getIdToken().then((firebaseIdToken) => {
            dispatch(setFirebaseIdToken(firebaseIdToken));
            console.log(firebaseIdToken);
            login({
              firebaseIdToken
            });
          });
        })
        .catch((err) => {
          alert("Wrong code");
        });
    } catch(err) {
      console.log(err);
      router.push("/signin/verify" + `?err=Something went wrong`);
    }
  };
  return (
    <div className="authBg" style={{
      background: `url(${"/authbg.webp"})no-repeat center center/cover`,
    }}>
      <div className="black-glass py-12 px-8 rounded-lg max-w-xl w-11/12">
        <h3 className="auth-title mb-8 text-white text-4xl font-light">
          Verify
        </h3>
        <form action="" autoComplete="off" onSubmit={onSubmitHandler}>
          <input
            required
            onChange={({target:{value}})=>{setOtp(value)}}
            type="tel"
            maxLength={"6"}
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Enter the OTP"
            className="placeholder-white text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md"
          />
          {error && (
            <div
             
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">Holy smokes!</strong>
              <span class="block sm:inline"> {error}</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  class="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>remove</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <button className="brand-btn" type='submit'>
            Verify
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
