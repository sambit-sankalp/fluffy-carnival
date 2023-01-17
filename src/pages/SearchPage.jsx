import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import FavouritePage from './FavouritePage';
import { DebounceInput } from 'react-debounce-input';
import Paginate from '../components/Pagination';
import Loading from '../components/Loading';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [dataLength, setDataLength] = useState(0);
  const [data, setData] = useState([]);

  const [additionals, setAdditionals] = useState({
    Director: '',
    Actors: '',
  });

  const [favourites, setFavourites] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const addFavourites = (e, movieData) => {
    e.preventDefault();
    const isMovieFavourite = favourites.includes(movieData);

    if (!isMovieFavourite) {
      setFavourites([...favourites, movieData]);
    } else {
      setFavourites(favourites.filter((favourite) => favourite !== movieData));
    }
  };

  useEffect(() => {
    setData([]);
  }, [currentPage]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://www.omdbapi.com/?apikey=2d3f08fa&s=${keyword}&y=${year}&type=${type}&page=${
          currentPage + 1
        }`
      )
      .then((res) => {
        if (res.data.totalResults !== 0) setDataLength(res.data.totalResults);
        if (res.data.Search) {
          res.data.Search.map(async (movie) => {
            const res = await axios.get(
              `https://www.omdbapi.com/?apikey=2d3f08fa&i=${movie.imdbID}`
            );
            setData((prev) => [...prev, res.data]);
          });
        }
      });
    setLoading(false);
  }, [currentPage, keyword, type, year]);

  useEffect(() => {
    const { Director, Actors } = additionals;
    console.log(additionals);
    setLoading(true);
    setData((prev) => {
      console.log(prev);
      return prev.filter((movie) => {
        console.log(movie);
        return (
          movie.Director.includes(Director) && movie.Actors.includes(Actors)
        );
      });
    });
    setLoading(false);
  }, [additionals, keyword]);

  console.log(data);

  return (
    <div className="w-full flex flex-col justify-start items-center pb-20">
      <div className="w-full min-h-[70vh] flex flex-col justify-start items-center">
        <form className="w-[90%] flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <DebounceInput
              minLength={1}
              debounceTimeout={2000}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              onChange={(e) => setKeyword(e.target.value)}
              required
            />
          </div>
        </form>
        {loading && data.length === 0 ? (
          <Loading />
        ) : (
          <>
            {data.length > 0 && (
              <div className="w-[90%] flex flex-col justify-between items-center">
                <div className="mt-2 w-full flex flex-row justify-between items-center">
                  <form className="w-[49%] flex items-center">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <DebounceInput
                        minLength={1}
                        debounceTimeout={2000}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Year"
                        onChange={(e) => setYear(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                  <form className="w-[49%] flex items-center">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <DebounceInput
                        minLength={1}
                        debounceTimeout={2000}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Type"
                        onChange={(e) =>
                          setType(e.target.value.toLowerCase().trim())
                        }
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="mt-2 w-full flex flex-row justify-between items-center">
                  <form className="w-[49%] flex items-center">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <DebounceInput
                        minLength={1}
                        debounceTimeout={2000}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Actor"
                        onChange={(e) =>
                          setAdditionals({
                            ...additionals,
                            Actor: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </form>
                  <form className="w-[49%] flex items-center">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <DebounceInput
                        minLength={1}
                        debounceTimeout={2000}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Director"
                        onChange={(e) =>
                          setAdditionals({
                            ...additionals,
                            Director: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div className="w-full md:w-[75%] mt-4 h-full flex flex-row justify-start items-start flex-wrap">
              {data.length > 0 ? (
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="w-full h-full flex flex-row justify-center items-center flex-wrap">
                    {data.map((movie) => (
                      <Card
                        key={movie.imdbID}
                        addFavourites={addFavourites}
                        favourites={favourites}
                        movie={movie}
                      />
                    ))}
                  </div>
                  <Paginate
                    pageIndex={currentPage}
                    setPageIndex={setCurrentPage}
                    pageCount={Math.ceil(dataLength / 10)}
                  />
                </div>
              ) : (
                <h1 className="h-full mt-10 text-2xl text-gray-500">
                  Please enter a movie name and wait for 2 seconds
                </h1>
              )}
            </div>
          </>
        )}
      </div>
      <FavouritePage favourites={favourites} addFavourites={addFavourites} />
    </div>
  );
};

export default SearchPage;
