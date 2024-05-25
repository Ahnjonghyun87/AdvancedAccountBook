import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

const App = () => {
  const [posts, setPosts] = useState(localStorage.getItem("posts") || []);
  const [selectedMonth, setSelectedMonth] = useState(0);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                posts={posts}
                setPosts={setPosts}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
              />
            }
          />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
