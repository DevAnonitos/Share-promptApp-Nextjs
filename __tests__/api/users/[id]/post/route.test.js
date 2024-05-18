/**
* @jest-environment node
*/
import { GET } from "@/app/api/users/[id]/posts/route";

describe("API User Prompt", () => {
  it("should be return data json from /api/users/[id]/post", async () => {
    const res = await fetch("http://localhost:3000/api/users/64c52aa0183b5594893e6952/posts");
    const data = await res.json();
    console.log(data);
    expect(data).toBeDefined();
    expect(data).toMatchSnapshot()
  })

  it("should be return status from /api/users/[id]/post", async () => {
    const res = await fetch("http://localhost:3000/api/users/64c52aa0183b5594893e6952/posts");
    const data = await res.json();
    console.log(data);
    expect(res.status).toBe(200);
    expect(data).toMatchSnapshot()
  })
})