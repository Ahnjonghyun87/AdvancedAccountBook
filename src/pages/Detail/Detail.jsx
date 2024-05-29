import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deletePost, updatePost } from "../../redux/slices/postsSlice";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((post) => post.id === id) || {};

  const dateRef = useRef();
  const itemRef = useRef();
  const amountRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    if (!post.id) {
      navigate("/");
    }
  }, [post.id, navigate]);

  const onClickUpdate = () => {
    const date = dateRef.current.value;
    const item = itemRef.current.value;
    const amount = amountRef.current.value;
    const description = descriptionRef.current.value;

    if (!date.trim() || !description.trim() || !amount.trim() || !item.trim()) {
      alert("빈 칸을 채워주세요");
      return;
    }

    const updatedPost = { date, item, amount, description, id };
    dispatch(updatePost(updatedPost));
    navigate("/");
  };

  const onClickDelete = () => {
    dispatch(deletePost(id));
    navigate("/");
  };

  const onClickGoBack = () => {
    navigate("/");
  };

  return (
    <StWrapBox>
      <StSingleBox>
        <StLabel>날짜</StLabel>
        <StInput
          type="date"
          ref={dateRef}
          placeholder="YYYY-MM-DD"
          defaultValue={post.date || ""}
        />
      </StSingleBox>
      <StSingleBox>
        <StLabel>항목</StLabel>
        <StInput
          type="text"
          ref={itemRef}
          placeholder="지출 항목"
          defaultValue={post.item || ""}
        />
      </StSingleBox>
      <StSingleBox>
        <StLabel>금액</StLabel>
        <StInput
          type="text"
          ref={amountRef}
          placeholder="지출 금액"
          defaultValue={post.amount || ""}
        />
      </StSingleBox>
      <StSingleBox>
        <StLabel>내용</StLabel>
        <StInput
          type="text"
          ref={descriptionRef}
          placeholder="지출 내용"
          defaultValue={post.description || ""}
        />
      </StSingleBox>
      <StSingleBox>
        <StConfigButton onClick={onClickUpdate}>수정</StConfigButton>
        <StDeleteButton onClick={onClickDelete}>삭제</StDeleteButton>
        <StPreviousButton onClick={onClickGoBack}>뒤로가기</StPreviousButton>
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
