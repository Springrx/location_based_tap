import axios from 'axios';
import { message } from 'antd';

// export const HOST = 'https://www.y-droid.com/feedback';
export const HOST = 'http://127.0.0.1:7001';

export default function fetch(option = {}) {
  debugger
  const { url, byteResponse = false, id,...rest } = option;
  return axios({
    url: `${HOST}${url}`,
    withCredentials: false,
    ...rest,
  }).then(res => {
    const { status, data } = res;
    if (status !== 200) {
      message.error('服务器错误，请重试');
      return Promise.reject(new Error('服务器错误，请重试'));
    }
    const { code, msg } = data || {};
    if (code === '1000') {
      return data.data;
    }
    if (byteResponse) {
      return data;
    }
    message.error(msg || '服务器错误，请重试');
    return Promise.reject(new Error(msg));
  });
}