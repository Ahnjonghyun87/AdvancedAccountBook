import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSelectedMonth } from "../redux/slices/selectedMonthSlice";

const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const CalendarForm = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(
    (state) => state.selectedMonth.selectedMonth
  );

  const onClickMonth = (month) => {
    dispatch(setSelectedMonth(month));
  };

  return (
    <StBodySection>
      <StBodyBox>
        {monthArray.map((number) => {
          return (
            <StBodyButton
              key={number}
              onClick={() => onClickMonth(number)}
              $active={selectedMonth === number}
            >
              {number}월
            </StBodyButton>
          );
        })}
      </StBodyBox>
    </StBodySection>
  );
};

/* 바디 style components*/

const StBodyButton = styled.button`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 100px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #000000;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out; /*헤더와 같은 스무스 이펙트*/
  white-space: nowrap;

  background-color: ${(props) => (props.$active ? "#2ec4b6" : "#f6f7fa")};

  &:hover {
    background-color: #2ec4b6; /* 똑같이 호버 */
  }
`;
const StBodyBox = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StBodySection = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
`;

export default CalendarForm;
