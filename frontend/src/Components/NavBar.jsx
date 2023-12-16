import plane from "../assets/plane-solid.svg";
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
        <h1 className="text-gray-500 text-2xl">Travel Buddy</h1>
        <img src={plane} alt="plane" className="w-7 ml-2.5 pt-.5 -rotate-30" />
      </div>

      <div className="flex flex-row space-x-5 mr-10">
        <NavBarLabel Text="Gas Prices" Page="/gas-prices" />
        <NavBarLabel Text="Currency Converter" Page="/currency-converter" />
        <NavBarLabel Text="AI Travel Agent" Page="/travel-agent" />
      </div>
    </div>
  );
}
