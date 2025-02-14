import { useContext, useEffect } from "react";
import defaultGenres from "../data/genres";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function EntertainmentCategories() {
  const {selectedGenres, setSelectedGenres} = useContext(AppContext)
  const navigate = useNavigate();

  useEffect(() => {
    const existingGenres = JSON.parse(localStorage.getItem('selectedGenres')) || [];
    const genresToSave = JSON.stringify(selectedGenres);
    const existingGenresString = JSON.stringify(existingGenres);
    if (genresToSave !== existingGenresString) {
    localStorage.setItem('selectedGenres', genresToSave);
    }
  }, [selectedGenres]);

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
        setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    }
    else {
        setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-black text-white p-4">
      <div className="w-full lg:w-5/12 flex flex-col justify-start  p-6 rounded-lg mb-6 lg:mb-0 lg:mr-6 px-10 md:px-28">
      <h2 className="font2 text-5xl text-green-500 pb-12">Super app</h2>
        <h2 className="text-white font-bold text-5xl mb-4">Choose your entertainment category</h2>
        <div className="flex flex-wrap justify-center lg:justify-start space-x-2 my-6 gap-4">
          {selectedGenres.map((genre, index) => (
            <span
              key={index}
              className="bg-green-500 text-white px-4 py-1 rounded-full flex "
            >
              {genre}{" "}
              <span
                className="text-xl font-bold cursor-pointer ml-2"
                onClick={() => handleGenreClick(genre)}
              >
                ×
              </span>
            </span>
          ))}
        </div>
        <p className="text-red-500 mb-6">
          {selectedGenres.length < 3 && "Minimum 3 categories required"}
        </p>
      </div>

      <div className="w-full lg:w-7/12 grid grid-cols-2 sm:grid-cols-3 gap-4 p-6">
        {defaultGenres.map((genre, index) => (
          <div
            key={index}
            className={`relative flex flex-col p-4 rounded-lg border-4 ${selectedGenres.includes(genre) ? "border-green-500" : "border-transparent"} cursor-pointer`}
            style={{ backgroundColor: genre.color }}
            onClick={() => handleGenreClick(genre.name)}
          >
            <span className="text-xl pb-3">{genre.name}</span>
            <img
              src={genre.image}
              alt={genre.name}
              className="w-full h-20 rounded-lg mb-2 object-cover"
            />
          </div>
        ))}

        <div className="col-span-2 sm:col-span-3 flex justify-end mt-4">
          <button
            className={`px-6 py-3 w-full sm:w-40 rounded-full ${
              selectedGenres.length >= 3
                ? "bg-green-500 text-black"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
            disabled={selectedGenres.length < 3}
            onClick={()=> navigate("/carousel")}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntertainmentCategories;
