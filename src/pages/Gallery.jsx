import React, { useState } from "react";

const Gallery = () => {
  const [picsData, setPicsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => setPicsData(res.data));
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
