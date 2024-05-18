/**
* @jest-environment node
*/
import { GET } from "@/app/api/prompt/route";
describe('API Prompt', () => {
  // Test fetch fail response all prompt
  it('should [GET]: a fail response data as JSON from API Route', async () => {
    const res = await GET();
    const data = await res.json();
    console.log(data);
    expect(res.status).toEqual(500)
    expect(data).toBeDefined()
  });
});
