import { useState } from "react";
import Nav from "./components/Nav";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import axios from "axios";
const Add = () => {
  const [img, setImg] = useState({});
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [priceOne, setPriceOne] = useState("");
  const [priceTwo, setPriceTwo] = useState("");
  const [priceThree, setPriceThree] = useState("");
  const [condition, setCondition] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://tricck.onrender.com/add", {
        img,
        name,
        title,
        priceOne,
        priceTwo,
        priceThree,
        condition,
      });
    } catch (err) {
      console.log(err.data);
    }
  };
  const handleImg = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log([...formData]);
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
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-sm-12 ">
            <form className="h-100 d-flex" onSubmit={handleSubmit}>
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
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></textarea>
                </div>
                <div className="condition">
                  <ReactQuill
                    className="form-control mb-4"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setCondition(e)}
                  ></ReactQuill>
                </div>
                <div className="price">
                  <input
                    className="form-control mb-4"
                    type="number"
                    placeholder="price"
                    value={priceOne}
                    onChange={(e) => setPriceOne(e.target.value)}
                  />
                </div>
                <div className="price">
                  <input
                    className="form-control mb-4"
                    type="number"
                    placeholder="price"
                    value={priceTwo}
                    onChange={(e) => setPriceTwo(e.target.value)}
                  />
                </div>
                <div className="price">
                  <input
                    className="form-control mb-4"
                    type="number"
                    placeholder="price"
                    value={priceThree}
                    onChange={(e) => setPriceThree(e.target.value)}
                  />
                </div>
                <div className="submit">
                  <button className="btn btn-primary w-100">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add;
