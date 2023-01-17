import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';
import Loading from '../components/Loading';

const DetailsPage = () => {
  const [movie, setmovie] = useState({});
  const [loading, setloading] = useState(false);
  const {
    Title,
    Released,
    Genre,
    Poster,
    Plot,
    Director,
    Writer,
    Language,
    imdbRating,
    Runtime,
    Actors,
  } = movie;

  const { id } = useParams();

  useEffect(() => {
    setloading(true);
    axios
      .get(`https://www.omdbapi.com/?apikey=2d3f08fa&i=${id}`)
      .then((res) => {
        setmovie({
          Title: res.data.Title,
          Year: res.data.Year,
          Released: res.data.Released,
          Runtime: res.data.Runtime,
          Genre: res.data.Genre,
          Director: res.data.Director,
          Writer: res.data.Writer,
          Actors: res.data.Actors,
          Plot: res.data.Plot,
          Language: res.data.Language,
          Country: res.data.Country,
          Poster: res.data.Poster,
          imdbRating: res.data.imdbRating,
          imdbID: res.data.imdbID,
          Type: res.data.Type,
        });
      });
    setloading(false);
  }, [id]);

  return (
    <div className="w-full flex flex-row mt-10 justify-center items-center">
      {loading && movie === null ? (
        <Loading />
      ) : (
        <div className="w-[90%] flex flex-col bg-[#16161a] p-5 sm:p-10 bg-opacity-80 rounded-3xl">
          <div className="flex flex-col">
            <Link to="/">
              <IoMdArrowRoundBack className="text-white w-5 h-5" />
            </Link>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start">
              <div className="w-full md:w-1/2 flex flex-col items-start text-left justify-start">
                <h1 className="font-bold text-2xl md:text-3xl mt-4 text-[#fffffe]">
                  {Title}
                </h1>
                <div className="w-12 h-1 bg-gradient-to-r from-reactflix-start to-reactflix-end rounded mt-2 mb-2"></div>
                <div className="flex flex-row text-[#999dab] justify-center">
                  {Genre}
                </div>
                <p className="mt-4 font-sans text-md lg:text-lg text-[#72757e]">
                  {Plot}
                </p>
                <div className="flex flex-col justify-start items-start text-[#72757e] mt-4">
                  <p>Actors - {Actors}</p>
                  <p>Directors - {Director}</p>
                  <p>Writer - {Writer}</p>
                  <p>Languages - {Language}</p>
                </div>
                <div class="mt-2 flex items-center justify-start">
                  <p class="text-sm font-bold text-white mr-2">{imdbRating}</p>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start text-[#72757e] mt-4">
                  <p>Released - {Released}</p>
                  <p>Total Time - {Runtime}</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden mt-3 md:mt-0 inline-flex items-center justify-center bg-transparent text-gray-400">
                <img src={Poster} alt={Title} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
