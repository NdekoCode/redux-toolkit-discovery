import React, { useState } from "react";
import Form from "../components/Form";
import PicCard from "../components/PicCard";
import { useFetch } from "../libs/hooks/useFetch";

const Gallery = () => {
  const [picsData, setPicsData] = useState([]);
  const [items, loading] = useFetch("http://localhost:5000/pictures");
  useEffect(() => {
    setPicsData(items.data);
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
