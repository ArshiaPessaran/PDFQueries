import NavBar from "../Components/NavBar";
import { useState } from "react";

function UserCard({ Description }) {
  const [name, setName] = useState("Farmarz A");

  return (
    <div className="card text-red-500 w-fit p-8 mt-32 ml-16">
      <p>{name}</p>
      <p>{Description}</p>
      <button
        className="white-button mt-5"
        onClick={() => {
          setName("Farmarz B");
        }}
      >
        Change Name
      </button>
    </div>
  );
}

export default function () {
  const [showCards, setShowCards] = useState(false);

  const [cards, setCards] = useState([<UserCard Description="asddsadsdasa" />]);

  return (
    <>
      <NavBar />
      <button
        className="white-button mt-5"
        onClick={() => {
          setCards((prev) => {
            return [...prev, <UserCard Description="LOLOLOLOL" />];
          });
        }}
      >
        Add User
      </button>

      {cards}
    </>
  );
}
