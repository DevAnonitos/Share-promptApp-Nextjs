import axios from "axios";
import MockAdapter from 'axios-mock-adapter';

describe('API', () => {
    it('should make a successful GET request to localhost', async () => {
      const mock = new MockAdapter(axios);

      const responseData = { data: 'Mocked response' };
      mock.onGet('http://localhost/3000').reply(200, responseData);
  
      const response = await axios.get('http://localhost/3000');
  
      expect(response.status).toBe(200);
      expect(response.data).toEqual(responseData);
    });
  });