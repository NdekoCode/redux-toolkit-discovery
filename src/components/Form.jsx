import { useRef } from "react";
import { postItem } from "../libs/services/gallery";

const Form = () => {
  const inputArt = useRef();
  const inputYear = useRef();
  const formRef = useRef();

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
    });
  };

  return (
    <div className="form-container">
      <div className="form">
        <h3>Enregistrer une nouvelle photo</h3>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input type="text" placeholder="Artiste" ref={inputArt} />
          <input type="text" placeholder="Année" ref={inputYear} />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Form;
