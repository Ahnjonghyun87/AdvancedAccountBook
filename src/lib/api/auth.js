import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/register`, {
      id: id,
      password: password,
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 주의 api host 주소뒤에 / 이게 붙어있으면 우리가 await ~~~/register로 붙이면
// api response에 주소가 //register 이렇게 붙어서 404 error 뜸.

// 왜 AUTH_API_HOST + "/register" 는 404error생기고 `${AUTH_API_HOST}/register` 왜 이건 잘되는지? //

// 이대로 사용하면 사용자는 네트워크에서 에러가 나면 왜 가입이 안되는지 모른다. //
// 변수 = async () => { try{} catch(error) {} } 를 넣어서 에러를 잡으면 alert으로 사용자에게 왜 가입이 안되는지//
// 경고문을 날려주는데, try catch로 이런식으로 바꿔준다면 response에서 data(에러가 발생하는곳)을 넣어줘야함
// const response = await axios.post(`${AUTH_API_HOST}/register`, {
//   id: id,
//   password: password,
//   nickname: nickname,
// });
// return response.data;    =>.data 붙여줬음.
// 그럼 어떻게 에러를 alert으로 송출하냐?
// 만약 중복id로 에러가 나면 수신받은 response의 data에 문제가 생기는데, 그럼 message로 "이미 있는 id입니다"뜸
//  그럼 우린 에러 메시지가 생긴곳 => 리스폰스에 있는 데이타의 에러메시지를 가져와야함
// catch (error) {
//   console.log(error?.response?.data?.message);
//   alert(error?.response?.data?.message); } 이렇게 써주는데 이 뜻은?
//  error?에러있냐?.reponse? 리스폰스에? .data? 데이타에? .message 있다면 그 데이타에 생긴 오류 메시지를.

//  try {
//   const response = await axios.post(`${AUTH_API_HOST}/register`, {
//     id: id,
//     password: password,
//     nickname: nickname,
//   });
//   return response.data;
// } catch (error) {
//   console.log(error?.response?.data?.message);
//   alert(error?.response?.data?.message);
// }
