import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(import('react-quill'), { ssr: false })
const Edit = () => {
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [idItem, setIdItem] = useState("");
  useEffect(() => {
    getId();
    getData();
  }, []);
  const getId = () => {
    const itemId = window.localStorage.getItem("productId");
    setIdItem(itemId);
  };
  const getData = async () => {
    try {
      const product = await axios.get(
        `https://tricck.onrender.com/product/${idItem}`
      );
      setData(product.data);
      setName(product.data.name);
      setTitle(product.data.title);
      setPrice(product.data.price);
      setCondition(product.data.condition);
    } catch (err) {
      console.log(err);
    }
  };
  const updateData = () => {
    axios.patch(`https://tricck.onrender.com/updatedata`, {
      name,
      title,
      price,
      idItem,
      condition,
    });
  };
  const handleImg = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    try {
      const { data } = await axios.post(
        "https://tricck.onrender.com/upload-img",
        formData
      );
      setImg({
        url: data.url,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="add">
      <Nav />
<div className="container">
      <form className="h-100 d-flex" onSubmit={updateData}>
        <div className="uplodimg">
          <input
            className="form-control mb-4"
            type="file"
            id="formFileMultiple"
            accept
            onChange={handleImg}
            multiple
          />
        </div>
        <div className="information">
          <div className="name">
            <input
              className="form-control mb-4"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="title">
            <textarea
              className="form-control mb-4"
              placeholder="title "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <div className="condition">
            <textarea 
              className="form-control mb-4"
              placeholder="title"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            ></textarea>
          </div>
          <div className="price">
            <input
              className="form-control mb-4"
              type="number"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          {console.log(data)}
          <div className="submit">
            <button className="btn btn-primary w-100">Submit</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};
export default Edit;
