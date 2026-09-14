const request = require("supertest");
const app = require("../src/server");

describe("Health endpoint", () => {
  test("returns healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});
