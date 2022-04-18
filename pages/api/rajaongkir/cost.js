import axios from 'axios';
import { API_KEY, POST_COST_URL } from '../../../helper/api';

export default async function handler(req, res) {
  const data = req.body;
  const response = await axios.post(POST_COST_URL, data, {
    headers: {
      key: API_KEY,
    },
  });

  if (response) {
    res.status(200).json(response.data);
  } else {
    res.status(400).json(response.data);
  }
}
