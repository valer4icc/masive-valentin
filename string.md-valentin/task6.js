const protectEmail = (user_email) => {
  const atIndex = user_email.indexOf("@");
  if (atIndex < 0) {
    return user_email;
  }
  const username = user_email.slice(0, atIndex);
  const domain = user_email.slice(atIndex);
  const maskedUsername = username.slice(0, 5) + "*".repeat(username.length - 2);
  return maskedUsername + domain;
};

console.log(protectEmail("viktor_korneplod@example.com"));
