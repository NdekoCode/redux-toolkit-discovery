import { AiOutlineDelete } from "react-icons/ai";
import { deleteItem } from "../libs/services/gallery";

const Delete = ({ id }) => {
  const handleDelete = () => {
    deleteItem("http://localhost:5000/pictures/" + id);
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
