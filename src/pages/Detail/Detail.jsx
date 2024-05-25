import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const post = posts.find((post) => post.id === id);
    if (post) {
      setDate(post.date);
      setItem(post.item);
      setAmount(post.amount);
      setDescription(post.description);
    }
  }, [id, posts]);

  // 수정 버튼 클릭 이벤트 핸들러
  const handleUpdate = () => {
    if (!date.trim() || !description.trim() || !amount.trim() || !item.trim()) {
      alert("빈 칸을 채워주세요");
      return;
    }

    const updatedPost = { date, item, amount, description, id };

    // 기존 posts 배열에서 해당 id의 post를 업데이트합니다.
    const updatedPosts = posts.map((post) =>
      post.id === id ? updatedPost : post
    );

    setPosts(updatedPosts);
    navigate("/"); // 수정 후 홈으로 이동
  };

  const handleDelete = () => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    navigate("/"); // 삭제 후 홈으로 이동
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <StWrapBox>
      <StSingleBox>
        <StLabel>날짜</StLabel>
        <StInput
          type="date"
          id="date"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </StSingleBox>
      <StSingleBox>
        <StLabel>항목</StLabel>
        <StInput
          type="text"
          id="item"
          placeholder="지출 항목"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </StSingleBox>
      <StSingleBox>
        <StLabel>금액</StLabel>
        <StInput
          type="text"
          id="amount"
          placeholder="지출 금액"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </StSingleBox>
      <StSingleBox>
        <StLabel>내용</StLabel>
        <StInput
          type="text"
          id="description"
          placeholder="지출 내용"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </StSingleBox>
      <StSingleBox>
        <StConfigButton onClick={handleUpdate}>수정</StConfigButton>
        <StDeleteButton onClick={handleDelete}>삭제</StDeleteButton>
        <StPreviousButton onClick={handleGoBack}>뒤로가기</StPreviousButton>
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
