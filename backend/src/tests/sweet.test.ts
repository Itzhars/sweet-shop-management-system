import request from "supertest";
import app from "../app";

describe("Sweet Management", () => {

  it("should create a new sweet", async () => {
    const res = await request(app)
      .post("/api/sweets")
      .send({
        name: "Kaju Katli",
        category: "Dry Fruit",
        price: 600,
        quantity: 10,
      });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Kaju Katli");
  });

  it("should get all sweets", async () => {
    const res = await request(app).get("/api/sweets");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});
