import React from "react";

const optionsCategories = [
  "Livres",
  "Catalogues monographiques",
  "Entretiens",
  "Articles",
];

export default optionsCategories.map((item, index) => {
  return (
    <option key={index} value={item}>
      {item}
    </option>
  );
});
