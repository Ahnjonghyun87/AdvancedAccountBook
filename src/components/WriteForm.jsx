import { useState } from "react";
import styled from "styled-components";

const WriteForm = () => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [expend, setExpend] = useState([]);

  const onClick = () => {
    if (
      !date.trim() ||
      !description.trim() ||
      !amount.trim() ||
      !expend.trim() ||
      !item.trim()
    ) {
      alert("빈 칸을 채워주세요");
      return;
    }

    const newExpend = { date, item, amount, description, expend };
    setExpend([...expend, newExpend]);
    /*여기까지 기존 todolist 보며 참고 했다가 중괄호 오탈자 수정해달라고 했는데
    갑분 gpt가 입력필드 초기화가 필요하다가 다음 4개의 set을 추가함 */
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  /* onChange를 각 set들 마다 만들어서 const로 지정하고 input에 onChange(e)를 달아야 하는지?*/

  return (
    <StHeaderSection>
      <StInputBox>
        <StInputGroup>
          <StLabel htmlFor="date">날짜</StLabel>
          <StInput type="date" id="date" placeholder="YYYY-MM-DD" />
        </StInputGroup>
        <StInputGroup>
          <StLabel htmlFor="item">항목</StLabel>
          <StInput type="text" id="item" placeholder="지출 항목" />
        </StInputGroup>
        <StInputGroup>
          <StLabel htmlFor="amount">금액</StLabel>
          <StInput type="number" id="amount" placeholder="지출 금액" />
        </StInputGroup>
        <StInputGroup>
          <StLabel htmlFor="description">설명</StLabel>
          <StInput type="text" id="description" placeholder="설명" />
        </StInputGroup>
        <StButton onClick={() => onClick}>저장</StButton>
      </StInputBox>
    </StHeaderSection>
  );
};

/* 헤더 style components*/
const StHeaderSection = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StInputBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`;

const StInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StLabel = styled.label`
  font-size: 14px;
  color: #333333;
`;

const StInput = styled.input`
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
`;

const StButton = styled.button`
  padding: 8px 10px;
  height: 34px;
  width: 100px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3; /* 다크블루 색상 */
  }
`;

export default WriteForm;
