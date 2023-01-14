import { useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { putItem } from "../libs/services/gallery";
import Delete from "./Delete";

const PicCard = ({ pic }) => {
  const [edit, setEdit] = useState(false);
  const artistInput = useRef();

  const handleEdit = () => {
    setEdit(false);

    const data = {
      artist: artistInput.current.value,
      year: pic.year,
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
            <div>
              <input
                className="px-2 py-1 shadow border rounded"
                defaultValue={pic.artist}
                ref={artistInput}
                autoFocus
              ></input>
              <button onClick={() => handleEdit()}>Valider</button>
            </div>
          ) : (
            <h4>
              {artistInput.current ? artistInput.current.value : pic.artist}
            </h4>
          )}
          <p>{pic.year}</p>
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