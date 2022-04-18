import axios from 'axios';
import { API_KEY, GET_CITY_URL } from '../../../helper/api';

export default async function handler(req, res) {
  const { province, id } = req.query;
  if (province) {
    const response = await axios.get(GET_CITY_URL + `?province=${province}`, {
      headers: {
        key: API_KEY,
      },
    });
    res.status(200).json(response.data);
  } else if (id) {
    const response = await axios.get(GET_CITY_URL + `?id=${id}`, {
      headers: {
        key: API_KEY,
      },
    });
    res.status(200).json(response.data);
  } else {
    const response = await axios.get(GET_CITY_URL, {
      headers: {
        key: API_KEY,
      },
    });
    res.status(200).json(response.data);
  }
}
