export * from "./constants/contacts";

export const generateTitleCase = (string: string) => {
  if (!string) return "";
  const stringArr = string.split(" ");
  let titleCase = "";
  stringArr.forEach((str) => (titleCase += str[0]));
  return titleCase.toUpperCase();
};
