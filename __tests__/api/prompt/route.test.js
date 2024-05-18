/**
* @jest-environment node
*/
import { GET } from "@/app/api/prompt/route";

describe('API Prompt', () => {
  const apiUrl = 'http://localhost:3000/api/prompt';

  it("should return data json from API Prompt", async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
    expect(data).toBeDefined();
    expect(data).toMatchSnapshot()
  })

  it('should [GET]: response data as JSON from API Route', async () => {
    const res = await GET();
    const data = await res.json();
    console.log(data);
    expect(res.status).toEqual(200); 
    expect(data).toBeDefined();
  });

  it("should [GET]: a fail response data as JSON from API Route", async () => {
    const res = await GET();
    const data = await res.json();
    console.log(data);
    expect(res.status).toEqual(500); 
    expect(data).toBeDefined();
    expect(data).toMatchSnapshot()
  })

  it("should Response status code is 200", async () => {
    const response = await fetch(apiUrl);
    expect(response.status).toBe(200);
    expect(response.status).toMatchSnapshot()
  })

  it("should Response has the required fields", async () => {
    const response = await fetch(apiUrl);
    const responseData = await response.json();

    expect(Array.isArray(responseData)).toBe(true);
    expect(Array.isArray(responseData)).toMatchSnapshot()
    expect(response.headers.get('Content-Type')).toContain('text/plain');
    expect(response.headers.get('Content-Type')).toMatchSnapshot()
  })
});



