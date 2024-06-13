import CalendarForm from "../../components/CalendarForm";
import RecentAccount from "../../components/RecentAccount";
import WriteForm from "../../components/WriteForm";

const Home = () => {
  return (
    <main>
      <WriteForm />
      <CalendarForm />
      <RecentAccount />
    </main>
  );
};

export default Home;

// const StMainContainer = styled.div`
//   padding-top: 50px;
// `;
