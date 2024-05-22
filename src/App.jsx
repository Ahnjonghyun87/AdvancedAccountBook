import CalendarForm from "./components/CalendarForm";
import RecentAccount from "./components/RecentAccount";
import WriteForm from "./components/WriteForm";
import GlobalStyles from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <WriteForm />
        <CalendarForm />
        <RecentAccount />
      </main>
    </>
  );
};

export default App;
