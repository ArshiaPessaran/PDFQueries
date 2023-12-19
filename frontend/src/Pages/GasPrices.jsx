import NavBar from "../Components/NavBar";

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

export default function GasPrices() {
  return (
    <div>
      <NavBar />
      <div className="mt-[5vh]">
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
