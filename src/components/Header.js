import UserInput from "./UserInput";

function Header() {
  return (
    <header className="flex justify-between px-6 py-2 bg-white flex-wrap shadow-md md:flex p-2">
      <div className="flex justify-start">
        <span className="text-3xl text-gray-800 font-bold">
          Anchor AI Dog App
        </span>
      </div>
      <UserInput />
    </header>
  );
}

export default Header;
