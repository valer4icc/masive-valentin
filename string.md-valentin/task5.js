function abbrev_name(fullName) {
  const names = fullName.trim().split(" ");

  if (names.length <= 1) {
    return fullName;
  }

  const abbreviatedNames = names.map((name, index) => {
    if (index === 0) {
      return name;
    } else {
      return name.charAt(0) + ".";
    }
  });

  return abbreviatedNames.join(" ");
}

console.log(abbrev_name("Viktor Korneplod"));
