import React, { useState } from "react";
import axios from "axios";
const PostCreate = () => {
  const [title, setTitle] = useState("");
  const SubmitPost = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/posts", { title })
      .then((res) => console.log(res))
      .then(() => setTitle(""))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <form onSubmit={SubmitPost}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            className="form-controle"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
