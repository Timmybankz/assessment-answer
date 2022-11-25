const crypto = require("crypto");
const { HASH_CONFIG } = require("./config/hash");

exports.deterministicPartitionKey = (event) => {
  let hash;

  const { ALGORITHM_TYPE, ENCODING_TYPE, MAX_PARTITION_KEY_LENGTH, TRIVIAL_PARTITION_KEY } =
    HASH_CONFIG;

  if (!event) return TRIVIAL_PARTITION_KEY;

  hash =
    event.partitionKey ??
    crypto.createHash(ALGORITHM_TYPE).update(JSON.stringify(event)).digest(ENCODING_TYPE);

  hash = hash ? (typeof hash === "string" ? hash : JSON.stringify(hash)) : TRIVIAL_PARTITION_KEY;

  if (hash.length > MAX_PARTITION_KEY_LENGTH) {
    hash = crypto.createHash(ALGORITHM_TYPE).update(hash).digest(ENCODING_TYPE);
  }

  return hash;
};
