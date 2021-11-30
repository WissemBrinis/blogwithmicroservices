import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const submitComment = async (event) => {
    event.preventDefault();
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    await axios
      .post(`http://localhost:5001/posts/${postId}/comments`, {
        content,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setContent("");
  };
  return (
    <div>
      <form onSubmit={submitComment}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
