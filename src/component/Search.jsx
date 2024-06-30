
export default function Search({ search, setSearch, handleSearch }) {
  

  const onkeydown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (

    <div className="w-full flex justify-around align-center mb-8 mt-4 p-1">
      <input
        name="search"
        type="text"
        value={search}
        placeholder="Enter City Name"
        className="w-[66%] h-12 border-t-slate-800 font-bold bg-slate-100 outline-none text-cyan-900 text-md rounded-lg pl-3 mr-2 "
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={onkeydown}
      />
      <button className=" border-black text-sm cursor-pointer bg-blue-400 text-white font-bold mt-4 px-4 rounded-md  " onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
