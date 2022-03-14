import { context } from "../DogContext";
import { useContext } from "react";

function ErrorModal() {
  const { error, setError } = useContext(context);
  const handleOnClick = () => setError(false);
  return error === true ? (
    <div class="bg-gray-300 rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 mt-8 md:relative">
      <div class="flex md:flex items-center justify-center">
        <div className="p-4">Breed not found</div>
        <div>
          <button
            class="inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-full font-semibold text-2xl mt-4
          md:mt-0 md:order-1"
            onClick={handleOnClick}
          >
            <p class="transform rotate-45 pl-1.5 pb-1.5">+</p>
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default ErrorModal;
