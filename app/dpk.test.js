const { deterministicPartitionKey } = require("./dpk");
const { HASH_CONFIG } = require("./config/hash");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(HASH_CONFIG.TRIVIAL_PARTITION_KEY);
  });

  it("Returns a hash when given a valid input", () => {
    const testString = "Test String";
    const trivialKey = deterministicPartitionKey(testString);

    expect(trivialKey.length).toBeGreaterThan(1);
  });

  it("Returns a hash less than the MAX_PARTITION_KEY_LENGTH when given a valid input", () => {
    const testData = { partitionKey: "Test String" };
    const trivialKey = deterministicPartitionKey(testData);

    expect(trivialKey.length).toBeLessThanOrEqual(HASH_CONFIG.MAX_PARTITION_KEY_LENGTH);
  });
});
