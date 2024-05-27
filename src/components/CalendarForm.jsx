import { useContext } from "react";
import { styled } from "styled-components";
import { FamilyContext } from "../Context/FamilyContext";

const CalendarForm = () => {
  const { setSelectedMonth } = useContext(FamilyContext);
  return (
    <StBodySection>
      <StBodyBox>
        <StBodyButton onClick={() => setSelectedMonth(1)}>1월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(2)}>2월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(3)}>3월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(4)}>4월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(5)}>5월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(6)}>6월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(7)}>7월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(8)}>8월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(9)}>9월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(10)}>10월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(11)}>11월</StBodyButton>
        <StBodyButton onClick={() => setSelectedMonth(12)}>12월</StBodyButton>
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
  background: #f6f7fa;
  transition: background-color 1s ease-in-out; /*헤더와 같은 스무스 이펙트*/
  white-space: nowrap;

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
