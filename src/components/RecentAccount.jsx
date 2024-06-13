import { useQuery } from "@tanstack/react-query";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPosts } from "../lib/api/post";

const RecentAccount = () => {
  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  console.log("isLoading", isLoading);
  console.log("posts", posts);
  if (isLoading) {
    return <div>로딩중..</div>;
  }

  // const posts = useSelector(() => posts.posts);
  // const selectedMonth = useSelector(
  //   (state) => state.selectedMonth.selectedMonth
  // );
  // const filteredPosts = posts.filter(
  //   ({ date }) => new Date(date).getMonth() + 1 === selectedMonth
  // );

  const selectedMonth = useSelector(
    (state) => state.selectedMonth.selectedMonth
  );
  const filteredPosts = posts.filter(
    ({ date }) => new Date(date).getMonth() + 1 === selectedMonth
  );

  return (
    <StFooterSection>
      <StFooterBox>
        {filteredPosts.map(({ description, date, item, amount, id }) => {
          return (
            <StBox key={posts.id}>
              <StInnerBox>
                <StSpanDate>{date}</StSpanDate>
                <Link to={`/detail/${posts.id}`}>
                  {/* link to를 "/detail/dinner" 이렇게만 하면 상세페이지에서 기존의 배열이 가진 정보들을 못가져옴.{`라우터경로${id}`} 이렇게 해야함. */}
                  <StSpanText>
                    {item} - {description}
                  </StSpanText>
                </Link>
              </StInnerBox>
              <StSpanText>{amount}원</StSpanText>
            </StBox>
          );
        })}
      </StFooterBox>
    </StFooterSection>
  );
};

/* 푸터 styled components */

const StFooterSection = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

const StFooterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out 0s;

  overflow: hidden;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.02);
  } /*커서 줌인 호버*/
  cursor: pointer;
`;

const StInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StSpanText = styled.span`
  font-weight: bold;
  color: rgb(0, 123, 255);
  flex-shrink: 0;
  max-width: 640px; /*맥스 위드 설정 해야 "..."표시되던데*/
  white-space: nowrap; /* 텍스트를 한 줄로 유지 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 넘치는 부분을 "..."으로 표시 */
`;

const StSpanDate = styled.span`
  margin-bottom: 5px;
  color: rgb(102, 102, 102);
  font-size: 14px;
`;

export default RecentAccount;
