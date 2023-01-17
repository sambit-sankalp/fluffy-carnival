import React from 'react';

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Card = ({ favourites, movie, addFavourites }) => {
  const { Title, Year, Poster, imdbID } = movie;

  return (
    <div className="w-full max-w-[250px] min-h-[480px] bg-black rounded overflow-hidden shadow-lg m-2 flex flex-col justify-between">
      <img src={Poster} alt={Title} />
      <div className="flex flex-col px-3 py-1 bg-color-333">
        <h3 className="font-bold text-base text-gray-200">
          {Title}
        </h3>
        <span className="text-xs text-white mb-2">{Year}</span>
        <div className="button-container flex justify-between mb-2">
          <Link to={`/details/${imdbID}`}>
            <button className="text-xs underline text-gray-200">
              More Info
            </button>
          </Link>
          <button className="text-xs font-bold py-1 px-2 rounded text-white">
            {favourites.includes(movie) ? (
              <MdFavorite
                onClick={(e) => addFavourites(e, movie)}
                className="text-red-500 w-3 h-3"
              />
            ) : (
              <MdFavoriteBorder
                onClick={(e) => addFavourites(e, movie)}
                className="w-3 h-3"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
