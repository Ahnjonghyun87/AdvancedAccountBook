import CalendarForm from "../../components/CalendarForm";
import RecentAccount from "../../components/RecentAccount";
import WriteForm from "../../components/WriteForm";

const Home = ({ selectedMonth, setSelectedMonth, posts, setPosts }) => {
  // const filterdPosts = posts.filter(({ date }) => {
  //   date === selectedMonth;
  // });

  return (
    <main>
      <WriteForm setPosts={setPosts} post={posts} />
      <CalendarForm
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <RecentAccount posts={posts} />
    </main>
  );
};

export default Home;
