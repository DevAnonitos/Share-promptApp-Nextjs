/**
* @jest-environment node
*/
import { GET } from "@/app/api/prompt/route";

// jest.mock('@/libs/models/prompt'); 

// export const mockDatabase = {
//   connect: jest.fn().mockResolvedValueOnce(), // Mock successful connection
//   find: jest.fn(), // Mock find method for queries
// };

// export const connectToDB = async () => {
//   await mockDatabase.connect(); // Use mocked connection
// };

describe('API Prompt', () => {
  // Test fetch fail response all prompt
  it('should [GET]: a fail response data as JSON from API Route', async () => {
    // mockDatabase.connect.mockResolvedValueOnce();

    // // Mock Prompt.find to return expected data (replace with your structure)
    // const mockFind = jest.fn().mockResolvedValueOnce([{ id: 1, name: "Prompt 1" }]);
    // Prompt.find = mockFind; 

    // const res = await GET();
    // const data = await res.json();

    // expect(res.status).toEqual(200); // Expect a successful response (200)
    // expect(data).toBeDefined();
    // expect(data.length).toBe(1); //
    
  });

  it("should [GET]: a fail response data as JSON from API Route", async () => {
    const res = await GET();
    const data = await res.json();
    console.log(data);
    expect(res.status).toEqual(500); 
    expect(data).toBeDefined();
  })

});
