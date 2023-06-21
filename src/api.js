import axios from "axios";

const options = {
    method: 'POST',
    url: process.env.REACT_APP_CHEC_PUBLIC_KEY,
    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '88085d5ef0mshd72643bad6bb123p1e0d99jsne7e13d1381fd',
      'X-RapidAPI-Host': 'https://googlebooksraygorodskijv1.p.rapidapi.com/addVolumeToBookshelf'
    }
  };
  export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
