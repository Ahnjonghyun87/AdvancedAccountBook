import { Link } from "react-router-dom";
import styled from "styled-components";

const RecentAccount = () => {
  return (
    <StFooterSection>
      <StFooterBox>
        <StBox>
          <StInnerBox>
            <StSpanDate>2024-02-02</StSpanDate>
            <Link to="/detail/dinner">
              <StSpanText>회식</StSpanText>
            </Link>
          </StInnerBox>
          <StSpanText>50000원</StSpanText>
        </StBox>
        <StBox>
          <StInnerBox>
            <StSpanDate>2024-02-02</StSpanDate>
            <Link to="/detail/icecream">
              <StSpanText>간식 - 아이스크림</StSpanText>
            </Link>
          </StInnerBox>
          <StSpanText>500원</StSpanText>
        </StBox>
        <StBox>
          <StInnerBox>
            <StSpanDate>2024-02-02</StSpanDate>
            <Link to="/detail/japan">
              <StSpanText>여행 - 일본여행</StSpanText>
            </Link>
          </StInnerBox>
          <StSpanText>1,055,000원</StSpanText>
        </StBox>
        <StBox>
          <StInnerBox>
            <StSpanDate>2024-02-02</StSpanDate>
            <Link to="/detail/shop">
              <StSpanText>미용 - 미용실</StSpanText>
            </Link>
          </StInnerBox>
          <StSpanText>155,000원</StSpanText>
        </StBox>
        <StBox>
          <StInnerBox>
            <StSpanDate>2024-02-02</StSpanDate>
            <StSpanText>
              도서 - 자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의
              다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발
            </StSpanText>
          </StInnerBox>
          <StSpanText>95,000원</StSpanText>
        </StBox>
      </StFooterBox>
    </StFooterSection>
  );
};

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

export default RecentAccount;
