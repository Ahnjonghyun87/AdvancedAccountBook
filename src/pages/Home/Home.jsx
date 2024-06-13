import CalendarForm from "../../components/CalendarForm";
import RecentAccount from "../../components/RecentAccount";
import WriteForm from "../../components/WriteForm";

const Home = (user) => {
  return (
    <main>
      <WriteForm user={user} />
      <CalendarForm />
      <RecentAccount />
    </main>
  );
};

export default Home;

// const StMainContainer = styled.div`
//   padding-top: 50px;
// `;
