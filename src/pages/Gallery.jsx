import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import PicCard from "../components/PicCard";
import { useFetch } from "../libs/hooks/useFetch";

const Gallery = () => {
  const [picsData, setPicsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const load = useFetch("http://localhost:5000/pictures", setPicsData)[1];
  useEffect(() => {
    setLoading(load);
  }, [picsData]);

  return (
    <main className="body mt-5">
      <h1>NFT Gallery</h1>
      <Form />
      {loading ? (
        "Loading..."
      ) : (
        <div className="cards-container">
          {picsData?.map((pic, index) => (
            <PicCard key={index} pic={pic} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Gallery;
