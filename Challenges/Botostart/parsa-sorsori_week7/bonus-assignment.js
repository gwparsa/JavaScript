function kebabToPascalCase(sentence) {
  const words = sentence.split(" ");
  const transformedWords = words.map((word) => {
    if (word.includes("-")) {
      const parts = word.split("-");
      const pascalCaseWord = parts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
      return pascalCaseWord;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  return transformedWords.join(" ");
}

const sentence = "convert kebab-case to pascal-case";
const result = kebabToPascalCase(sentence);
console.log(result); // Expected to be: "Convert KebabCase To PascalCase"    //It is :D
