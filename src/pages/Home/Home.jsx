import CalendarForm from "../../components/CalendarForm";
import RecentAccount from "../../components/RecentAccount";
import WriteForm from "../../components/WriteForm";

const Home = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <main>
      <WriteForm />
      <CalendarForm
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <RecentAccount />
    </main>
  );
};

export default Home;
