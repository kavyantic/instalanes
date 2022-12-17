import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { verify } from '../../app/firebaseAuth';
import { useLoginMutation } from '../../app/store/apiSlice'
import { setPhone } from "../../app/store/authSlice";
import VerifyOtp from '../../components/auth/VerifyOtp';

const useLogin = () => {
  const router = useRouter();
  const redirectTo = useSelector((s) => s.ui.redirects.successLogin);
  const [login, { data, error, isLoading }] = useLoginMutation();
  useEffect(() => {
    if (data?.token) {
      router.replace(redirectTo || '/')
    }
  }, [data])
  return [login, { isLoading, error }]
}


export default function Verify() {
  const [otp, setOtp] = useState("");
  const [login, { isLoading, error }] = useLogin()
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
    } catch (err) {
      console.log(err);
      router.push("/signin/verify" + `?err=Something went wrong`);
    }
  };
  return (
    <VerifyOtp formTitle="Enter Your OTP" />
  )
}
