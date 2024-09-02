function toCase(text) {
  // write your code here
	if (text === "") {
    return "-";
  }

  // Convert the string to lowercase
  const lowerCaseText = text.toLowerCase();

  // Convert the string to uppercase
  const upperCaseText = text.toUpperCase();

  // Combine the lowercase and uppercase strings with '-' as the delimiter
  return `${lowerCaseText}-${upperCaseText}`;
}
// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
