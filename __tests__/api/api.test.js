import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import { memoryUsage } from "process";

describe('API status code', () => {
  // status 200 ->
    it('should make a successful GET request to localhost', async () => {
      const mock = new MockAdapter(axios);

      const responseData = { data: 'Mocked response' };
      mock.onGet('http://localhost/3000').reply(200, responseData);
  
      const response = await axios.get('http://localhost/3000');
  
      expect(response.status).toBe(200);
      expect(response.data).toEqual(responseData);
    });
    //status 400->
    it("should make a not-found GET request to localhost", async () => {
      const mock = new MockAdapter(axios);

      mock.onGet("http://localhost:3000").reply(404)

      try {
        await axios.get(" http://localhost:3000")
        expect(true).toBe(false)
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    })

    it("should make a unauthorized GET request to localhost", async () => {
      const mock = new MockAdapter(axios);

      mock.onGet("http://localhost:3000").reply(401)

      try {
        await axios.get(" http://localhost:3000")
        expect(true).toBe(false)
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    })

    it("should make a forbiden GET request to localhost", async () => {
      const mock = new MockAdapter(axios);

      mock.onGet("http://localhost:3000").reply(403);
    
      try {
        await axios.get("http://localhost:3000");
        expect(true).toBe(false);
      } catch (error) {
        expect(error.response.status).toBe(403);
      }
    })

    //status 500 ->
    it("should make a server-error GET request to localhost", async () => {
      const mock = new MockAdapter(axios);

      mock.onGet("http://localhost:3000").reply(500)

      try {
        await axios.get("http://localhost:3000")
        expect(true).toBe(false)
      } catch (error) {
        expect(error.response.status).toBe(500);
      }
    })

    it("should make a bad-gateway GET request to localhost", async () => {
      const mock = new MockAdapter(axios);

      mock.onGet("http://localhost:3000").reply(502);

      try {
        await axios.get("http://localhost:3000");
        expect(true).toBe(false);
      } catch (error) {
        expect(error.response.status).toBe(502);
      }
    })
  });

describe("Test performance localhost", () => {
  it("should simulate some load on localhost", async () => {
    const numRequests = 10; 
    const startTime = performance.now();

    const tasks = [];
    for (let i = 0; i < numRequests; i++) {
      tasks.push(async () => {
        try {
          const response = await axios.get("http://localhost:3000");
          expect(response.status).toBe(200)
        } catch (error) {
          console.error("Error during request:", error);
        }
      });
    }

    await Promise.all(tasks.map(fn => fn()));

    const endTime = performance.now();
    const elapsedTime = endTime - startTime;

    console.log("All", numRequests, "requests completed in", elapsedTime, "ms");
    expect(elapsedTime).toBeLessThan(5000); 
  })

  test("should not have significant memory increase during load", async () => {
    const numRequests = 10;
    const initialUsage = memoryUsage();
  
    const tasks = [];
    for (let i = 0; i < numRequests; i++) {
      tasks.push(async () => {
        try {
          const response = await axios.get("http://localhost:3000");
          expect(response.status).toBe(200)
        } catch (error) {
          console.error("Error during request:", error);
        }
      });
    }
  
    await Promise.all(tasks.map(fn => fn()));
  
    const finalUsage = memoryUsage();
    const memoryDiff = finalUsage.heapUsed - initialUsage.heapUsed;
    console.log("Total memory usage is " + memoryDiff)
  
    expect(memoryDiff).toBeLessThan(10000000); 
  });
})