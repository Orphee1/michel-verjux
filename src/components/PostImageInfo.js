import React, { useState, useEffect } from "react";

function PostImageInfo() {
  const [image, setImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setImage(false);
    }, 3000);
  });
  return <>{image && <h6>Votre image a bien été publiée</h6>}</>;
}

export default PostImageInfo;
