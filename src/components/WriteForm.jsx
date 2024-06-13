import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { postExpense } from "../lib/api/expenses";

const WriteForm = ({ user }) => {
  const dateRef = useRef("");
  const itemRef = useRef("");
  const amountRef = useRef("");
  const descriptionRef = useRef("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      navigate("/home");
    },
  });

  const onClick = () => {
    const date = dateRef.current.value;
    const item = itemRef.current.value;
    const amount = amountRef.current.value;
    const description = descriptionRef.current.value;

    if (!date.trim() || !description.trim() || !amount.trim() || !item.trim()) {
      alert("빈 칸을 채워주세요");
      return;
    }

    const newExpense = {
      date,
      item,
      amount,
      description,
      id: uuidv4(),
      createdBy: user.userId,
    };

    mutation.mutate(newExpense);

    // 입력 필드 초기화
    dateRef.current.value = "";
    itemRef.current.value = "";
    amountRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <StHeaderSection>
      <StInputBox>
        <StInputGroup>
          <StLabel htmlFor="date">날짜</StLabel>
          <StInput
            type="date"
            id="date"
            placeholder="YYYY-MM-DD"
            ref={dateRef}
          />
        </StInputGroup>
        <StInputGroup>
          <StLabel htmlFor="item">항목</StLabel>
          <StInput
            type="text"
            id="item"
            placeholder="지출 항목"
            ref={itemRef}
          />
        </StInputGroup>
        <StInputGroup>
          <StLabel htmlFor="amount">금액</StLabel>
          <StInput
            type="number"
            id="amount"
            placeholder="지출 금액"
            ref={amountRef}
          />
        </StInputGroup>
        <StInputGroup>
          <StLabel htmlFor="description">설명</StLabel>
          <StInput
            type="text"
            id="description"
            placeholder="설명"
            ref={descriptionRef}
          />
        </StInputGroup>
        <StButton onClick={onClick}>저장</StButton>
      </StInputBox>
    </StHeaderSection>
  );
};

export default WriteForm;
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
