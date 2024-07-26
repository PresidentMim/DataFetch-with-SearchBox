import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
const App = () => {
  let [datas, setdatas] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        let data = res.json();
        return data;
      })
      .then((data) => {
        setdatas(data);
      });
  }, []);

  return (
    <>
      <SearchBox data={datas} />
    </>
  );
};

export default App;
