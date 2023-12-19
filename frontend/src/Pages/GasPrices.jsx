import NavBar from "../Components/NavBar";
import { useState } from "react";

function GasCard({ Title, Address, Price }) {
  return (
    <div className="card grid grid-cols-2 w-screen lg:w-[50vw] 2xl:w-[30vw] p-8 mb-5 mx-auto">
      <div>
        <h3>{Title}</h3>
        <p>{Address}</p>
      </div>

      <h2 className="text-center my-auto text-green-500">{Price}</h2>
    </div>
  );
}

function Filter() {
  const [maxDistance, setMaxDistance] = useState(10);

  return (
    <div className="grid grid-cols-2 w-screen lg:w-[50vw] 2xl:w-[30vw] p-8 mx-auto">
      <p className="col-span-1">Max Distance</p>
      <div className="flex">
        <input
          type="range"
          value={maxDistance}
          max={99}
          min={0}
          onChange={(event) => setMaxDistance(event.target.value)}
          className="w-52 accent-gray-500"
        />
        <p className="ml-5">{maxDistance} miles</p>
      </div>
    </div>
  );
}

export default function GasPrices() {
  return (
    <div>
      <NavBar />
      <div className="mt-[2vh]">
        <Filter />
        <GasCard
          Title="Winter Springs Texaco"
          Address="423 West Lake Street, Winter Springs FL"
          Price="3.16"
        />
        <GasCard
          Title="Winter Park 7-11"
          Address="423 West Lake Street, Winter Park FL"
          Price="3.52"
        />
        <GasCard
          Title="Sanford Wawa"
          Address="423 West Lake Street, Sanford FL"
          Price="3.55"
        />
      </div>
    </div>
  );
}
