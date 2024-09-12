import { test, expect } from "@playwright/test";

test.describe("GET /pet/{petId} API Tests", () => {
  const baseURL = "https://petstore.swagger.io/v2";
  const validPetId: number = 777;
  const invalidPetId: string = "invalid-id";
  const nonExistentPetId: number = 9999999999999999;

  test("GET /pet/{petId} - Retrieve pet by valid ID", async ({ request }) => {
    const response = await request.get(`${baseURL}/pet/${validPetId}`);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toEqual(expect.objectContaining({ id: validPetId }));
  });

  test("GET /pet/{petId} - Invalid pet ID", async ({ request }) => {
    const response = await request.get(`${baseURL}/pet/${invalidPetId}`);
    expect(response.status()).toBe(400); // this test fails, because the API returns status 404 instead of 400 as stated in the docs
  });

  test("GET /pet/{petId} - Pet not found", async ({ request }) => {
    const response = await request.get(`${baseURL}/pet/${nonExistentPetId}`); // Non-existent ID
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody.message).toContain("Pet not found");
  });
});
