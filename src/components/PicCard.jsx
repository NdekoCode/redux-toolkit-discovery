import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { putItem } from "../libs/services/gallery";
import Delete from "./Delete";

const PicCard = ({ pic }) => {
  const [edit, setEdit] = useState(false);
  const [pictureInput, setPictureInput] = useState({
    artist: pic.artist,
    year: pic.year,
  });
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setPictureInput((d) => ({ ...d, [name]: value }));
  };

  const handleEdit = () => {
    setEdit(false);
    const { artist, year } = pictureInput;
    const data = {
      artist,
      year,
      photo: pic.photo,
    };

    putItem("http://localhost:5000/pictures/" + pic.id, data);
  };

  return (
    <div className="pic-card">
      <img src={pic.photo} alt={"photo de " + pic.artist} />
      <div className="infos">
        <div className="title">
          {edit ? (
            <div className=" flex items-center gap-x-1">
              <input
                className="px-2 py-1 shadow border rounded"
                defaultValue={pic.artist}
                handleChange={handleChange}
                autoFocus
              ></input>

              <input
                className="px-2 py-1 shadow border rounded"
                defaultValue={pic.year}
                handleChange={handleChange}
                autoFocus
              ></input>
              <button onClick={() => handleEdit()}>Valider</button>
            </div>
          ) : (
            <>
              <h4>{pictureInput ? pictureInput.artist : pic.artist}</h4>
              <p> {pictureInput ? pictureInput.year : pic.year}</p>
            </>
          )}
        </div>
        <div className="btn-container">
          <div className="edit-icon" onClick={() => setEdit(!edit)}>
            <FaRegEdit />
          </div>
          <Delete id={pic.id} />
        </div>
      </div>
    </div>
  );
};

export default PicCard;
