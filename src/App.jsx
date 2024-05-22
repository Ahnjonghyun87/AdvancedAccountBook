import React from "react";
import styled from "styled-components";
import "./App.css";
import GlobalStyle from "./components/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div id="origin" className="App">
        <main className="wholeBody">
          <StHeaderSection className="header">
            <StInputBox className="header-input-category">
              <StInputGroup>
                <StLabel htmlFor="date">날짜</StLabel>
                <StInput type="text" id="date" placeholder="YYYY-MM-DD" />
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
              <StButton className="headerButton">저장</StButton>
            </StInputBox>
          </StHeaderSection>
          <StBodySection className="body">
            <StBodyBox className="body-calendar-category">
              <StBodyButton className="jan">1월</StBodyButton>
              <StBodyButton className="feb">2월</StBodyButton>
              <StBodyButton className="mar">3월</StBodyButton>
              <StBodyButton className="apr">4월</StBodyButton>
              <StBodyButton className="may">5월</StBodyButton>
              <StBodyButton className="jun">6월</StBodyButton>
              <StBodyButton className="jul">7월</StBodyButton>
              <StBodyButton className="aug">8월</StBodyButton>
              <StBodyButton className="sep">9월</StBodyButton>
              <StBodyButton className="oct">10월</StBodyButton>
              <StBodyButton className="nov">11월</StBodyButton>
              <StBodyButton className="dec">12월</StBodyButton>
            </StBodyBox>
          </StBodySection>
          <StFooterSection className="footer">
            <StFooterBox className="footer-expend-category">
              <StBox className="expend1">
                <div className="itemWithDate1">
                  <span className="date">2024-02-02</span>
                  <span className="text">회식</span>
                </div>
                <span className="text">50000 원</span>
              </StBox>
              <StBox className="expend2">
                <div className="itemWithDate2">
                  <span className="date">2024-02-02</span>
                  <span className="text">간식 - 아이스크림</span>
                </div>
                <span className="text">500 원</span>
              </StBox>
              <StBox className="expend3">
                <div className="itemWithDate3">
                  <span className="date">2024-02-02</span>
                  <span className="text">여행 - 일본여행</span>
                </div>
                <span className="text">1,055,000 원</span>
              </StBox>
              <StBox className="expend4">
                <div className="itemWithDate4">
                  <span className="date">2024-02-02</span>
                  <span className="text">미용 - 미용실</span>
                </div>
                <span className="text">155,000 원</span>
              </StBox>
              <StBox className="expend5">
                <div className="itemWithDate5">
                  <span className="date">2024-02-02</span>
                  <span className="text">
                    도서 - 자율주행차량 운전주행모드 자동 전환용 인식률 90%
                    이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천
                    기술 개발
                  </span>
                </div>
                <span className="text">95,000 원</span>
              </StBox>
            </StFooterBox>
          </StFooterSection>
        </main>
      </div>
    </>
  );
};

export default App;

/* 헤더 style components*/
const StHeaderSection = styled.section`
  background-color: hsl(0, 0%, 100%);
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
  color: rgb(51, 51, 51);
`;

const StInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const StButton = styled.button`
  padding: 8px 10px;
  height: 34px;
  width: 100px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgb(0, 86, 179); /* 다크블루 색상 */
  }
`;

/* 바디 style components*/

const StBodyButton = styled.button`
  text-align: center;
  font-family: Pretendard, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--black-alpha-100, #000);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: var(--black-alpha-100, #f6f7fa);
  transition: background-color 1s ease-in-out; /*헤더와 같은 스무스 이펙트*/

  &:hover {
    background-color: #2ec4b6; /* 똑같이 호버 */
  }
`;
const StBodyBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6열 */
  grid-template-rows: repeat(2, auto); /* 2행 */
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const StBodySection = styled.section`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
`;

/* 푸터 styled components */

const StFooterSection = styled.section`
  background-color: rgb(255, 255, 255);
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
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out 0s;

  overflow: hidden;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.02);
  } /*커서 줌인 호버*/
  cursor: pointer;

  .itemWithDate1,
  .itemWithDate2,
  .itemWithDate3,
  .itemWithDate4,
  .itemWithDate5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .text {
    font-weight: bold;
    color: rgb(0, 123, 255);
    flex-shrink: 0;
  }

  .date {
    margin-bottom: 5px;
    color: rgb(102, 102, 102);
    font-size: 14px;
  }
`;
