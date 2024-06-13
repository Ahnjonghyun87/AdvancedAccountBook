import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateProfile } from "../lib/api/auth";

const Profile = ({ setUser, user }) => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate;

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);
    const response = await updateProfile(formData);
    if (response.success) {
      setUser({
        ...user,
        nickname: response.nickname,
        avatar: response.avatar,
      });
      alert("프로필변경 완료");
      navigate("/");
    }
  };
  return (
    <StContainer>
      <h2>프로필 수정</h2>
      <StInputGroup>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          placeholder="닉네임"
          minLength={1}
          maxLength={10}
          onChange={(e) => setNickname(e.target.value)}
        />
      </StInputGroup>
      <StInputGroup>
        <label htmlFor="avartar">아바타 이미지</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </StInputGroup>
      <StButton onClick={handleUpdateProfile}>프로필 업데이트</StButton>
    </StContainer>
  );
};

export default Profile;

const StContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const StInputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const StButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;
