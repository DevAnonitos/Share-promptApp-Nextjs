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
    
    it("should make a fail GET request to localhost", async () => {
      const mock = new MockAdapter(axios);

      mock.onGet("http://localhost/3000").reply(500)

      try {
        await axios.get("http://localhost/3000")
        expect(true).toBe(false)
      } catch (error) {
        expect(error.response.status).toBe(500);
      }
    })

    it("should make a not-found GET request to localhost", async () => {
      const mock = new MockAdapter(axios);

      mock.onGet("http://localhost/3000").reply(404)

      try {
        await axios.get("http://localhost/3000")
        expect(true).toBe(false)
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    })
  });