import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from './globalStyles';
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";


const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("")

  return (
    <GlobalStyles>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </GlobalStyles>
  );
};

export default App;
