import curry from "lodash/fp/curry";

const str = "Hello world";
const split = curry((separator: string, str: string) => str.split(separator));
export const words = split(" ");

console.log(str);
console.log(words(str));
