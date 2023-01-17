import React from 'react';

import { MdFavorite } from 'react-icons/md';
import Card from '../components/Card';

const FavouritePage = ({ favourites, addFavourites }) => {
  return (
    <div className="w-full mt-15 flex flex-col justify-center items-center">
      <div className="w-[85%] flex flex-col justify-center items-start">
        <hr className="h-2 w-[98%] mt-5 text-black" />
        <div className="mt-3 flex flex-row justify-start items-center">
          <MdFavorite className="text-red-500 w-7 h-7" />
          <h1 className="text-left text-white ml-2 text-2xl font-bold">
            Favourites
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center flex-wrap">
        {favourites.map((movie) => (
          <Card
            key={movie.imdbID}
            addFavourites={addFavourites}
            favourites={favourites}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;
