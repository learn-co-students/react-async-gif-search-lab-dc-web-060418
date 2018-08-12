import React from "react";

const GifList = ({ gifList }) => {
  return (
    <ul>
      {gifList.map(gif => {
        return (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default GifList;
