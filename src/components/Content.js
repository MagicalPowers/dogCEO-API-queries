import { context } from "../DogContext";
import { useContext } from "react";
import Card from "./Card";

function Content() {
  const { dogList } = useContext(context);

  return (
    <main className="bg-gray-50 flex flex-wrap overflow-hidden sm:w-full xl:-mx-3 overflow-hidden mt-8 justify-center gap-4">
      {dogList.map((dog) => {
        return <Card dog={dog} />;
      })}
    </main>
  );
}

export default Content;
