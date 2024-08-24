type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

type UpdateUser = Partial<User>;

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdateUser) {
  const selectedUser = users.find(user => user.id === id);
  if(!selectedUser) {
    console.error('cannot find user')
    return
  }
  Object.assign(selectedUser, updates);
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)