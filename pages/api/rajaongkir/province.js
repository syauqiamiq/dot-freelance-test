import axios from 'axios';
import { API_KEY, GET_PROVINCE_URL } from '../../../helper/api';

export default async function handler(req, res) {
  const response = await axios.get(GET_PROVINCE_URL, {
    headers: {
      key: API_KEY,
    },
  });

  res.status(200).json(response.data);
}
