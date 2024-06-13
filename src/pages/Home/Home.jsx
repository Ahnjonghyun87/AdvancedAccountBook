import CalendarForm from "../../components/CalendarForm";
import RecentAccount from "../../components/RecentAccount";
import WriteForm from "../../components/WriteForm";

const Home = (user, expense, setExpense) => {
  return (
    <main>
      <WriteForm user={user} setExpense={setExpense} expense={expense} />
      <CalendarForm />
      <RecentAccount />
    </main>
  );
};

export default Home;

// const StMainContainer = styled.div`
//   padding-top: 50px;
// `;
