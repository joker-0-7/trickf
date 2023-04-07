import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const Product = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const product = await axios.get(
        `https://tricck.onrender.com/product/${
          window.location.pathname.split("/")[2]
        }`
      );
      setData(product.data);
      window.localStorage.setItem(
        'Id',`${window.location.pathname.split("/")[2]}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  const saveId = () => {};
  console.log(data);
  return (
    <div className="product pt-4">
      <div className="container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {data ? (
                <img
                  src={data.img.url}
                  className="d-block w-100 rounded-5"
                  alt="1"
                />
              ) : (
                "wait"
              )}
            </div>
          </div>
        </div>
        <div className="detils pt-5">
          <div className="row flex-row-reverse">
            <div className="col-lg-4">
              <div className="book-now pb-3">
                <Link href="/bookNow">
                  {" "}
                  <button className="btn btn-primary w-100">
                    أحجز الأن
                  </button>{" "}
                </Link>
              </div>
              <h3 className="w-100">الاسعار شاملة الضريبه</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <td colspan="2">تذكرة دخول</td>
                    <td className="bg-secondary">{data ? data.priceOne : ""}</td>
                  </tr>
                  <tr>
                    <td colspan="2">تذكرة دخول</td>
                    <td className="bg-secondary">{data ? data.priceTwo : ""}</td>
                  </tr>
                  <tr>
                    <td colspan="2">تذكرة دخول</td>
                    <td className="bg-secondary">{data ? data.priceThree : ""}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-8">
              <div className="info">
                <div className="heading">
                  <h1 className="pb-3">{data ? data.name : ""}</h1>
                  <hr />
                </div>
                <div className="condition">
                  <h2>معلومات الفعالية </h2>
                  <hr />
                  <div className="info-condition">
                    {data ? data.condition : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
