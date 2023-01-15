import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import PicCard from "../components/PicCard";
import { useFetch } from "../libs/hooks/useFetch";
import { setPicturesData } from "../libs/store/gallery/picture.slice";

const Gallery = () => {
  const dispatch = useDispatch();
  const [picsData, setPicsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const load = useFetch("http://localhost:5000/pictures", setPicsData)[1];
  useEffect(() => {
    setLoading(load);
    dispatch(setPicturesData(picsData));
  }, [picsData]);

  return (
    <main className="body mt-5">
      <h1 className="text-3xl font-bold my-3">NFT Gallery</h1>
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
