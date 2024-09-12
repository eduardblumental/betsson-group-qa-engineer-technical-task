import { test, expect } from "@playwright/test";

test.describe("POST /pet API Tests", () => {
  const baseURL = "https://petstore.swagger.io/v2";
  const petName: string = "testDog";
  const validPetId: number = 777;
  const invalidPetId: string = "invalid-id";

  test("POST /pet - Add a valid pet", async ({ request }) => {
    const response = await request.post(`${baseURL}/pet`, {
      data: {
        id: validPetId,
        category: { id: 1, name: "Dogs" },
        name: petName,
        photoUrls: ["https://example.com/dog.jpg"],
        tags: [{ id: 1, name: "friendly" }],
        status: "available",
      },
    });

    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();
    expect(responseBody).toEqual(
      expect.objectContaining({ id: validPetId, name: petName })
    );
  });

  test("POST /pet - Add a pet with invalid id", async ({ request }) => {
    const response = await request.post(`${baseURL}/pet`, {
      data: {
        id: invalidPetId,
        category: { id: 1, name: "Dogs" },
        name: petName,
        photoUrls: ["https://example.com/dog.jpg"],
        tags: [{ id: 1, name: "friendly" }],
        status: "available",
      },
    });

    expect(response.status()).toBe(405); // this test fails, because the API returns status 500 instead of 405 as stated in the docs
  });
});
