import NavBar from "../Components/NavBar";

export default function CurrencyConverter() {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 gap-x-10 w-screen lg:w-[50vw] 2xl:w-[30vw] mx-auto mt-[10vh]">
        <div className="card p-8">
          <select className="text-xl">
            <option value="USD">USD</option>
            <option value="AUD">AUD</option>
            <option value="GBP">GBP</option>
            <option value="RND">RND</option>
          </select>
          <p className="text-xs mb-6 mt-1 ml-1 text-gray-400">
            United States Dollar
          </p>
          <input
            className="text-box text-2xl w-24"
            type="number"
            step="0.01"
            min={0}
            defaultValue={0.01}
            placeholder="Amount"
          />
        </div>

        <div className="card p-8">
          <select className="text-xl">
            <option value="USD">USD</option>
            <option value="AUD">AUD</option>
            <option value="GBP">GBP</option>
            <option value="RND">RND</option>
          </select>
          <p className="text-xs mb-6 mt-1 ml-1 text-gray-400">
            United States Dollar
          </p>
          <h3 className="text-2xl pl-1">0.01</h3>
        </div>
      </div>
    </div>
  );
}
