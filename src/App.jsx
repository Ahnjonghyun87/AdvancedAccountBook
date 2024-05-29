import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

const App = () => {
  const posts = useSelector((state) => state.posts.posts);
  const selectedMonth = useSelector(
    (state) => state.selectedMonth.selectedMonth
  );

  console.log("🚀 ~ App ~ selectedMonth:", selectedMonth);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("selectedMonth", JSON.stringify(selectedMonth));
  }, [selectedMonth]);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
