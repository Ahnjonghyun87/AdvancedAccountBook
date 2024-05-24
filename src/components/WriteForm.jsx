import { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const WriteForm = () => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [expend, setExpend] = useState([]);

  /*const onChange들이 함수 내부에 있으면 안된다는 소리가 무슨 소린가 했는데
    이걸로 삽질해서 겨우 다시 기억남 */
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeItem = (e) => {
    setItem(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onClick = () => {
    if (!date.trim() || !description.trim() || !amount.trim() || !item.trim()) {
      alert("빈 칸을 채워주세요");
      return;
    }

    const newExpend = { date, item, amount, description, expend, id: uuid };
    setExpend([...expend, newExpend]);
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
            onChange={onChangeDate}
            value={date}
          />
        </StInputGroup>
        <StInputGroup>
          <StLabel htmlFor="item">항목</StLabel>
          <StInput
            type="text"
            id="item"
            placeholder="지출 항목"
            onChange={onChangeItem}
            value={item}
          />
        </StInputGroup>
        <StInputGroup>
          <StLabel htmlFor="amount">금액</StLabel>
          <StInput
            type="number"
            id="amount"
            placeholder="지출 금액"
            onChange={onChangeAmount}
            value={amount}
          />
        </StInputGroup>
        <StInputGroup>
          <StLabel htmlFor="description">설명</StLabel>
          <StInput
            type="text"
            id="description"
            placeholder="설명"
            onChange={onChangeDescription}
            value={description}
          />
        </StInputGroup>
        <StButton onClick={onClick}>저장</StButton>
      </StInputBox>
      <div>
        <ul className="newExpend">
          {expend.map(({ date, item, amount, description }, index) => (
            <li key={index} className="expend">
              <div>{date}</div>
              <div>{item}</div>
              <div>{amount}</div>
              <div>{description}</div>
            </li>
          ))}
        </ul>
      </div>
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

/* <ul className="newExpend">
      {expend.map(([{date, item, amount, description, id:uuid}]) =>
    return <li key={index} className="expend">
    <div>{date}</div>
    <div>{item}</div>
    <div>{description}</div>
    <div>{id}</div>
    </li>)}
    </ul> 이건 오류 난 코드*/
