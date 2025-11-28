const data = {
  status: "ok",
  user: {
    id: 15,
    profile: {
      name: "Laura",
      email: "laura@example.com",
    },
    roles: ["user", "editor"],
  },
};

const {
  status,
  user: {
    id: userId,
    profile: { name },
    roles: [primaryRole],
  },
} = data;

console.log(`Status: ${status}`);
console.log(`User ID: ${userId}`);
console.log(`Name: ${name}`);
console.log(`Primary Role: ${primaryRole}`);
