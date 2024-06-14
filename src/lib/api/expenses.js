import axios from "axios";

const JASON_SERVER_HOST = "https://wakeful-snowy-ghost.glitch.me/";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JASON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (error) {
    alert("뭔가 잘못됨.");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const response = await axios.post(
      `${JASON_SERVER_HOST}/expenses`,
      newExpense
    );
    return response.data;
  } catch (error) {
    alert("무언가 잘못됨. 데이터가 써지지 않습니다.");
  }
};

//아래가 디테일 페이지관련

export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JASON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return response.data;
  } catch (error) {
    alert("뭔가 잘못됨.");
  }
};

//아래가 수정

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const { data } = await axios.put(
      `${JASON_SERVER_HOST}/expenses/${id}`,
      rest
    );
    return data;
  } catch (error) {
    alert("뭔가 잘못됨. 수정불가");
  }
};

//아래는 삭제

export const deleteExpense = async (id) => {
  try {
    const { data } = await axios.delete(`${JASON_SERVER_HOST}/expenses/${id}`);
    return data;
  } catch (error) {
    alert("뭔가 잘못됨. 삭제불가");
  }
};
