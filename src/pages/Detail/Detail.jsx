import styled from "styled-components";

const Detail = () => {
  return (
    <StWrapBox>
      <StSingleBox>
        <StLabel>날짜</StLabel>
        <StInput
          type="text"
          id="date"
          placeholder="YYYY-MM-DD"
          value="yyyy-mm-dd"
        />
      </StSingleBox>
      <StSingleBox>
        <StLabel>항목</StLabel>
        <StInput
          type="text"
          id="item"
          placeholder="지출 항목"
          value="category"
        />
      </StSingleBox>
      <StSingleBox>
        <StLabel>금액</StLabel>
        <StInput
          type="text"
          id="amount"
          placeholder="지출 금액"
          value="number"
        />
      </StSingleBox>
      <StSingleBox>
        <StLabel>내용</StLabel>
        <StInput
          type="text"
          id="description"
          placeholder="지출 내용"
          value=""
        />
      </StSingleBox>
      <StSingleBox>
        <StConfigButton>수정</StConfigButton>
        <StDeleteButton>삭제</StDeleteButton>
        <StPreviousButton>뒤로가기</StPreviousButton>
      </StSingleBox>
    </StWrapBox>
  );
};
export default Detail;

const StWrapBox = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  text-align: left;
`;

const StLabel = styled.label`
  font-size: 14px;
  color: #333333;
  margin-bottom: 5px;
`;

const StInput = styled.input`
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
`;

const StConfigButton = styled.button`
  padding: 8px 10px;
  height: 34px;
  width: 75px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3; /* 다크블루 색상 */
  }
`;

const StDeleteButton = styled.button`
  padding: 8px 10px;
  height: 34px;
  width: 75px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #8b0000; /* 다크레드 색상 */
  }
`;

const StPreviousButton = styled.button`
  padding: 8px 10px;
  height: 34px;
  width: 100px;
  background-color: gray;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: darkslategrey; /* 다크그레이 색상 */
  }
`;

const StSingleBox = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
