import React, { useState, useEffect } from "react";

function PostTextinfo() {
  const [text, setText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setText(false);
    }, 3000);
  });

  return <>{text && <h6>Votre article a bien été publié</h6>}</>;
}

export default PostTextinfo;
