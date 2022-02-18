import axios from 'axios';
import config from '../config';
export function getResults(q, page, perPage) {
  return axios.get(
    `${config.pxApiRootURL}/?key=${config.pxApiKey}&q=${q}&page=${page}&per_page=${perPage}`
  );
}
