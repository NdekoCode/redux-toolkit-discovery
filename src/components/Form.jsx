import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postItem } from "../libs/services/gallery";
import { addPicture } from "../libs/store/gallery/picture.slice";

const Form = () => {
  const inputArt = useRef();
  const inputYear = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      artist: inputArt.current.value,
      year: inputYear.current.value,
      photo: `https://picsum.photos/400/${Math.round(
        Math.random() * 200 + 300
      )}`,
    };

    postItem("http://localhost:5000/pictures", data).then(() => {
      formRef.current.reset();
      dispatch(addPicture(data));
    });
  };

  return (
    <div className="form-container">
      <div className="form  py-10 px-5">
        <h3>Enregistrer une nouvelle photo</h3>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input
            type="text"
            className="px-3 py-2"
            placeholder="Artiste"
            ref={inputArt}
          />
          <input
            type="text"
            className="px-3 py-2"
            placeholder="Année"
            ref={inputYear}
          />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Form;
