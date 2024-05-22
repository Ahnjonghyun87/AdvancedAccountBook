import "./App.css";

const App = () => {
  return (
    <div className="App">
      <main className="wholeBody">
        <section className="header">
          <div className="header-input-category">
            <div className="dateInput">
              <label for="date">날짜</label>
              <input
                type="text"
                id="date"
                placeholder="YYYY-MM-DD"
                value={date}
              />
            </div>
            <div className="itemInput">
              <label for="item">항목</label>
              <input
                type="text"
                id="item"
                placeholder="지출 항목"
                value={item}
              />
            </div>
            <div className="amountInput">
              <label for="amount">금액</label>
              <input
                type="number"
                id="amount"
                placeholder="지출 금액"
                value={amount}
              />
            </div>
            <div className="descriptionInput">
              <label for="description">금액</label>
              <input
                type="text"
                id="description"
                placeholder="지출 금액"
                value={description}
              />
            </div>
            <button className="headerButton">저장</button>
          </div>
        </section>
        <section className="body">
          <div className="body-calendar-category">
            <button className="jan">"1" "월"</button>
            <button className="feb">"2" "월"</button>
            <button className="mar">"3" "월"</button>
            <button className="apr">"4" "월"</button>
            <button className="may">"5" "월"</button>
            <button className="jun">"6" "월"</button>
            <button className="jul">"7" "월"</button>
            <button className="agu">"8" "월"</button>
            <button className="sep">"9" "월"</button>
            <button className="oct">"10" "월"</button>
            <button className="dec">"11" "월"</button>
            <button className="nov">"12" "월"</button>
          </div>
        </section>
        <section className="footer">
          <div className="expend-category">
            <div className="expend1">
              <div className="itemWithDate1">
                <span>2024-02-02</span>
                <span>회식</span>
              </div>
            </div>
            <div className="expend1">
              <div className="itemWithDate1">
                <span>2024-02-02</span>
                <span>회식</span>
              </div>
              <span>50000 원</span>
            </div>
            <div className="expend2">
              <div className="itemWithDate2">
                <span>2024-02-02</span>
                <span>간식 - 아이스크림</span>
              </div>
              <span>500 원</span>
            </div>
            <div className="expend3">
              <div className="itemWithDate3">
                <span>2024-02-02</span>
                <span>여행 - 일본여행</span>
              </div>
              <span>1,055,000 원</span>
            </div>
            <div className="expend4">
              <div className="itemWithDate4">
                <span>2024-02-02</span>
                <span>미용 - 미용실</span>
              </div>
              <span>155,000 원</span>
            </div>
            <div className="expend5">
              <div className="itemWithDate5">
                <span>2024-02-02</span>
                <span>
                  도서 - 자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의
                  다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발
                </span>
              </div>
              <span>95,000 원</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
