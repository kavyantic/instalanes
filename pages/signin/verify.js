import React from 'react'

export default function Verify() {
  const redirectTo = useSelector((s) => s.ui.redirects.successLogin);
  const [otp, setOtp] = useState("");
  const [login, { data, error, isLoading }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const phone = useSelector((s) => s.auth.phone);
  return (
    <div>Verify</div>
  )
}
