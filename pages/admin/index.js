import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";

const Admin = () => {
  const [idItem, setId] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://tricck.onrender.com/product")
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);
  const editProduct = (e) => {
    window.localStorage.setItem("productId", e);
  };
  const deletItem = async (e) => {
    setId(e);
    await axios.delete(`https://tricck.onrender.com/deletitem/${idItem}`);
  };
  return (
    <div className="admin">
      <Nav />
      <div className="all-product">
        <div className="container">
          <table class="table mt-5">
            <thead>
              <tr className="bg-primary text-center text-light">
                <th scope="col">product image</th>
                <th scope="col">product name</th>
                <th scope="col">edit product</th>
                <th scope="col">delet product</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product) => {
                return (
                  <tr className="bg-light text-center">
                    <th>
                      <img
                        src={`${product.img.url}`}
                        alt={product._id}
                        className="img-product"
                      />
                    </th>
                    <td>
                      <h3>{product.name}</h3>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          editProduct(product._id);
                        }}
                      >
                        <Link href="/admin/edit">edit</Link>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deletItem(product._id);
                        }}
                      >
                        delet
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {console.log(data)}
    </div>
  );
};
export default Admin;
