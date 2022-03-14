import { context } from "../DogContext";
import { useContext, useState } from "react";
import { formatNameApi } from "../utility";

function UserInput() {
  const { searchBreed, randomDog } = useContext(context);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchBreed(formatNameApi(name));
      setName("");
    }
  };
  const handleOnClickSearch = () => {
    searchBreed(formatNameApi(name));
    setName("");
  };

  return (
    <div className="flex flex-row self-end">
      <div className="flex flex-col px-2 self-end">
        <input
          className="w-full px-4 py-3 mx-4 leading-tight text-sm text-gray-400 bg-gray-900 rounded placeholder-gray-200 focus:outline-none focus:shadow-outline"
          value={name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Search By Breed"
          autoFocus
        />
      </div>
      <div className="flex flex-col px-2 self-end">
        <button
          className="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
          onClick={() => handleOnClickSearch()}
        >
          Search
        </button>
      </div>
      <div className="flex flex-col px-2 self-end">
        <button
          className="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
          onClick={() => randomDog()}
        >
          Add Random Dog
        </button>
      </div>
    </div>
  );
}

export default UserInput;
