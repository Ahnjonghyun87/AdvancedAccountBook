import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getExpenses } from "../lib/api/expenses";

const RecentAccount = () => {
  const {
    data: expense = [],
    isPending,
    error,
  } = useQuery({ queryKey: ["expense"], queryFn: getExpenses });

  const selectedMonth = useSelector(
    (state) => state.selectedMonth.selectedMonth
  );

  if (isPending) {
    return <div>로딩중..</div>;
  }

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  const filteredPosts = expense.filter(
    ({ date }) => new Date(date).getMonth() + 1 === selectedMonth
  );

  return (
    <StFooterSection>
      <StFooterBox>
        {filteredPosts.map(({ description, date, item, amount, id }) => {
          return (
            <StBox key={id}>
              <StInnerBox>
                <StSpanDate>{date}</StSpanDate>
                <Link to={`/detail/${id}`}>
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

export default RecentAccount;

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
