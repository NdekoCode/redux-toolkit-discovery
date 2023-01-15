import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import PicCard from "../components/PicCard";
import { useFetch } from "../libs/hooks/useFetch";
import { setPicturesData } from "../libs/store/gallery/picture.slice";
import { getPictures } from "../libs/store/gallery/selectors";

const Gallery = () => {
  const dispatch = useDispatch();
  const loadData = (value) => {
    setLoading(false);
    dispatch(setPicturesData(value));
  };
  const [loading, setLoading] = useState(true);
  useFetch("http://localhost:5000/pictures", loadData);
  const picsData = useSelector(getPictures);

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
