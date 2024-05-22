import styled from "styled-components";

const WriteForm = () => {
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
        <StButton>저장</StButton>
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
