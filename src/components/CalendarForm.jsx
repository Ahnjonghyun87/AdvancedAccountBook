import { styled } from "styled-components";

const CalendarForm = () => {
  return (
    <StBodySection>
      <StBodyBox>
        <StBodyButton>1월</StBodyButton>
        <StBodyButton>2월</StBodyButton>
        <StBodyButton>3월</StBodyButton>
        <StBodyButton>4월</StBodyButton>
        <StBodyButton>5월</StBodyButton>
        <StBodyButton>6월</StBodyButton>
        <StBodyButton>7월</StBodyButton>
        <StBodyButton>8월</StBodyButton>
        <StBodyButton>9월</StBodyButton>
        <StBodyButton>10월</StBodyButton>
        <StBodyButton>11월</StBodyButton>
        <StBodyButton>12월</StBodyButton>
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
