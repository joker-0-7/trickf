import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
const Section = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/product");
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="section pt-5">
      <div className="row">
        {data.map((data) => {
          return (
            <div className="col-lg-4 col-sm-12 mb-4" key={data._id}>
              <Link href={`/product/${data._id}`}>
                <img
                  src={`${data.img.url}`}
                  alt={data._id}
                  className="w-100 rounded-5"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Section;
