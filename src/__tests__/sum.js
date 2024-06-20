import sum from "../utils/common-functions/sum";

test('Test to check whether the sum of 3 and 4 is 7', () => {
  let totalSum = sum(3,4);
  expect(totalSum).toBe(7);
});