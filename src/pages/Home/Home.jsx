import { useContext } from "react";
import { FamilyContext } from "../../Context/FamilyContext";
import CalendarForm from "../../components/CalendarForm";
import RecentAccount from "../../components/RecentAccount";
import WriteForm from "../../components/WriteForm";

const Home = () => {
  const { selectedMonth, setSelectedMonth, posts, setPosts } =
    useContext(FamilyContext);
  const filteredPosts = posts.filter(({ date }) => {
    const month = new Date(date).getMonth() + 1;
    return month === selectedMonth;
  });

  return (
    <FamilyContext.Provider
      value={{
        setPosts: setPosts,
        posts: posts,
        selectedMonth: selectedMonth,
        setSelectedMonth: setSelectedMonth,
        filteredPosts: filteredPosts,
      }}
    >
      <WriteForm />
      <CalendarForm />
      <RecentAccount />
    </FamilyContext.Provider>
  );
};

export default Home;
