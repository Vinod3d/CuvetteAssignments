import { useContext } from "react";
import profile from "../../images/profile.png";
import { AppContext } from "../../context/AppContext";

const Profile = () => {
  const { user, selectedGenres } = useContext(AppContext);
  return (
    <div className="profile bg-[#5746EA] rounded-2xl p-4">
      <div className="flex gap-12 p-4 lg:p-5 items-center mb-4">
        <img src={profile} alt="User Avatar" className="w-36" />
        <div className="flex flex-col text-white">
          <div>
            <h2 className="text-white text-xl md:text-3xl font-semibold">
              {user && user.name}
            </h2>
            <p className=" text-xl md:text-3xl pb-2">{user.email}</p>
            <p className=" font-bold text-2xl md:text-4xl">{user.username}</p>
          </div>
          <div className="grid gap-3 pt-3 grid-cols-2 mt-4">
            {selectedGenres.map((genre, index) => (
              <button
                key={index}
                className="bg-violet-300 px-5 py-2 rounded-xl md:text-xl text-left"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
