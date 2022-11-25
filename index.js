const { deterministicPartitionKey } = require("./app/dpk");

const testData = { partitionKey: "Test String" };

console.log(deterministicPartitionKey(testData));
