import { useContext } from "react";
import { context } from "../DogContext";

function Card({ dog: { image, name } }) {
  const { deleteDog } = useContext(context);
  return (
    <div class="w-full max-w-sm rounded-lg overflow-hidden h-auto shadow-lg">
      <img className="w-full max-h-60" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold capitalize text-xl mb-2">{name}</div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center text-4xl"
          onClick={() => deleteDog(name)}
        >
          <p class="transform rotate-45 pl-1.5 pb-1.5">+</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
