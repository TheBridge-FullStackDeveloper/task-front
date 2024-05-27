import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const EditTask = () => {
  const { _id } = useParams();
  const { getTaskById, task,updateTaskById } = useContext(GlobalContext);
  const [title, setTitle] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    getTaskById(_id);
  }, []);

  useEffect(() => {
    setTitle(task.title);
  }, [task.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTaskById(_id,{title})
    navigate("/")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title || ""}
          name="title"
        />
        <button type="submit">Edit task</button>
      </form>
    </div>
  );
};

export default EditTask;
