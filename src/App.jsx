import Weather from "./component/Weather";

function App() {
  return (
    <div className="text-center mx-auto mt-14 max-w-screen-lg w-[90%] p-1 bg-blue-200 rounded-lg h-max">
      <h1 className="text-center md:text-4xl text-3xl text-black font-signature p-7">Weather App</h1>
      <Weather />
    </div>
  );
}

export default App;
