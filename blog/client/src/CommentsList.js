import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:5001/posts/${postId}/comments`
    );
    setComments(res.data);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentsList;
