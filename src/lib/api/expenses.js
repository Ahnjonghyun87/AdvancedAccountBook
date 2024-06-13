import axios from "axios";

const JASON_SERVER_HOST = "http://localhost:4000";

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
