/**
* @jest-environment node
*/
import { GET } from "@/app/api/prompt/route";
describe('API Prompt', () => {
  it('should [GET]: response data as JSON from API Route', async () => {
    const res = await GET();
    const data = await res.json();
    console.log(data);
    expect(res.statusCode).toEqual(200);
    expect(data).toBeDefined();
    expect(data.length).toBe(1)
  });
});
