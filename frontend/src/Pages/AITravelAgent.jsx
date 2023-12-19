import NavBar from "../Components/NavBar";

export default function AITravelAgent() {
  return (
    <div>
      <NavBar />
      <div className="w-screen lg:w-[50vw] 2xl:w-[30vw] mx-auto mt-[10vh] ">
        <div className="border rounded p-8 grid grid-cols-1 gap-y-5">
          <p>
            Ullamco enim adipisicing occaecat nisi dolore pariatur nostrud
            laborum consectetur pariatur dolore et. Ut eu eu deserunt Lorem aute
            adipisicing consectetur. Veniam eiusmod est qui aute magna sint enim
            et.
          </p>
          <p className="text-right">
            Pariatur do voluptate laborum incididunt cupidatat.
          </p>
          <p>
            Ullamco enim adipisicing occaecat nisi dolore pariatur nostrud
            laborum consectetur pariatur dolore et. Ut eu eu deserunt Lorem aute
            adipisicing consectetur. Veniam eiusmod est qui aute magna sint enim
            et. Veniam eiusmod est qui aute magna sint enim et.
          </p>
        </div>
        <input
          className="text-box w-full mt-5"
          placeholder="Enter Prompt"
        ></input>
      </div>
    </div>
  );
}
