/**
* @jest-environment node
*/
import { GET } from "@/app/api/prompt/[id]/route";

describe("API prompt ID", () => {
  const apiUrl = "http://localhost:3000/api/prompt/645cef4b3a66a9ea8f5f46c9"
  it("should return data json from API route Prompt ID", async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
    expect(data).toBeDefined()
    expect(data).toMatchSnapshot()
  })

  it("should return status 200 from API route Prompt ID", async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
    expect(res.status).toBe(200)
    expect(data).toMatchSnapshot()
  })
})