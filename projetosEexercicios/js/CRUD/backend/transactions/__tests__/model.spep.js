import { Transaction } from "../model"

describe("Transaction model", () => {
    test("given find user by uid, when user is not informed, then return error 500", async () => {
      const model = new Transaction

      const response = model.findByUser() 

      await expect(response).rejects.toEqual(500)
    })
})