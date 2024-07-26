import React, { useState } from "react";

const SearchBox = ({ data }) => {
  let [inputvalue, setinputvalue] = useState("");

  let datas = data.filter((data) => {
    return data.title.toLowerCase().includes(inputvalue.toLocaleLowerCase());
  });

  return (
    <>
      <div className="  w-80 mx-auto">
        <div className=" text-center">
          <input
            className=" border border-r-emerald-400 "
            type="text"
            value={inputvalue}
            onChange={(e) => setinputvalue(e.target.value)}
          />
        </div>

        <ul>
          {datas.map((e) => {
            return (
              <li key={e.id} className=" text-center">
                {e.id} - {e.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchBox;
