import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItem } from "../libs/services/gallery";
import { deletePicture } from "../libs/store/gallery/picture.slice";

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    deleteItem("http://localhost:5000/pictures/" + id);
    dispatch(deletePicture(id));
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
