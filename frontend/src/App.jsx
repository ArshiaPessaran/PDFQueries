import plane from "./assets/plane-solid.svg";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />

      <h1 className="text-center text-red-500 font-bold mt-16">
        This is the Travel Buddy Front End. This is running on Vite and
        leverages Tailwind.
      </h1>
      <h3 className="text-center">
        We need to make pages for: Gas Stations, Weather, Currency Translation,
        Chatbot.
      </h3>
    </>
  );
}
