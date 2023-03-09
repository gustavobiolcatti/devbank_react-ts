import axios from 'axios';

type ApiReturn = {
  response?: any;
};
type ApiProps = {
  method: 'get' | 'post';
  path: string;
  data: any;
};

const apiUrl = 'https://integracao-front-back-api.herokuapp.com';

const api = async ({ method, path, data }: ApiProps): Promise<ApiReturn> => {
  try {
    const url = apiUrl + path;

    if (method === 'get') {
      const { data: response } = await axios.get(`${url}/${data}`);
      return { response };
    }

    if (method === 'post') {
      const { data: response } = await axios.post(`${url}`, data);
      return { response };
    }
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
  }

  return { response: undefined };
};

export default api;
