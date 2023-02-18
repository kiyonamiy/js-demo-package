const { MathUtil, HashUtil } = require("@kiyonamiy/js-demo-package");

const result1 = HashUtil.sha3(Buffer.from("123456", "utf-8"));
console.log("byteLength of result of HashUtil.sha3", result1.byteLength);

const result2 = MathUtil.plus(1, 2);
console.log("result of MathUtil.plus", result2);
