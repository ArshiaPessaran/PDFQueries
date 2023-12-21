import bolt from "../assets/bolt.svg";
import { useNavigate } from "react-router-dom";

function NavBarLabel({ Text, Page }) {
  const navigate = useNavigate();
  return (
    <div
      className="text-gray-500 hover:text-gray-400 cursor-pointer"
      onClick={() => navigate(Page)}
    >
      {Text}
    </div>
  );
}

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center p-4 shadow-sm">
      <div className="flex cursor-pointer" onClick={() => navigate("/")}>
        <h1 className="text-gray-500 text-2xl">Doc Chat</h1>
        <img src={bolt} alt="bolt" className="w-5 ml-2.5 pt-.75" />
      </div>

      <div className="flex flex-row space-x-12 mr-14">
        <NavBarLabel Text="Home" Page="/" />
        <NavBarLabel Text="Account" Page="/account" />
        <NavBarLabel Text="About" Page="/about" />
      </div>
    </div>
  );
}
