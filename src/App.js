import { DogContextProvider } from "./DogContext";
import Header from "./components/Header";
import Content from "./components/Content";
import ErrorModal from "./components/ErrorModal";

function App() {
  return (
    <DogContextProvider>
      <Header />
      <ErrorModal />
      <Content />
    </DogContextProvider>
  );
}

export default App;
