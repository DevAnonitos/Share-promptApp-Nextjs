/**
 * @jest-environment node
 */

import { GET } from "@/app/api/auth/[...nextauth]/route";

describe("API Authentication", () => {
    const baseUrl = "http://localhost:3000/api/auth/providers";
    // Get API Auth from fetch
    it("should return a data json from API auth routes", async () => {
        const res = await fetch(baseUrl);
        const data = await res.json();
        console.log(data);
        expect(data).toBeDefined();
        expect(data).toMatchSnapshot();
    });

    // a Status Code fetch API
    it("should return a status 200 from API auth routes", async () => {
        const res = await fetch(baseUrl);
        const data = await res.json();
        console.log(data);
        expect(res.status).toBe(200);
        expect(data).toMatchSnapshot();
    });

    it("should [GET] from get API Route /api/auth/providers", async () => {
      const res = await GET()
      const data = await res.json()
      console.log(data)
      expect(data).toBeDefined()
      expect(data).toMatchSnapshot()
    });
});
