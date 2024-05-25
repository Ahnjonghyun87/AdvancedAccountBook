import CalendarForm from "../../components/CalendarForm";
import RecentAccount from "../../components/RecentAccount";
import WriteForm from "../../components/WriteForm";

const Home = ({ selectedMonth, setSelectedMonth, posts, setPosts }) => {
  const filteredPosts = posts.filter(({ date }) => {
    const month = new Date(date).getMonth() + 1;
    return month === selectedMonth;
  });

  // 필터가 리턴하는 값은 무엇일까요?
  // 1. 문자열 2.배열 3. 객체

  //posts가 객체일까요? 배열일까요?
  // 배열

  // date 문자열?
  // "2024-05-25"

  return (
    <main>
      <WriteForm setPosts={setPosts} post={posts} />
      <CalendarForm
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <RecentAccount posts={filteredPosts} />
    </main>
  );
};

export default Home;
