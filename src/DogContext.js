import { createContext, useState } from "react";
import dogApi from "./dogApi";
import { formatNameDisplay } from "./utility";

export const context = createContext();

export function DogContextProvider({ children }) {
  const [dogList, setDogList] = useState([]);
  const [error, setError] = useState(false);
  const { Provider } = context;
  const callApi = ({ endpoint, random }) => {
    setError(false);
    dogApi({ endpoint, random }).then(({ message, status }) => {
      if (status === "success") {
        setDogList([
          { image: message, name: formatNameDisplay(message) },
          ...dogList,
        ]);
      } else {
        setError(true);
      }
    });
  };
  const searchBreed = (name) => {
    if (name !== "") {
      callApi({ endpoint: name });
    }
  };
  const randomDog = () => callApi({ random: true });
  const deleteDog = (name) => {
    setDogList(dogList.filter((dog) => dog.name !== name));
  };
  const value = { dogList, randomDog, deleteDog, searchBreed, error, setError };

  return <Provider value={value}>{children}</Provider>;
}
