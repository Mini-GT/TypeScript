// type UserRole = "guest" | "member" | "admin";

// type User = {
//     username: string;
//     role: UserRole;
// }

// const users: User[] = [
//     { username: "john_doe", role: "member" },
//     { username: "jane_doe", role: "admin" },
//     { username: "guest_user", role: "guest" }
// ];

// //return type `: User` is put so that when someone refactors the code they will know that we are returning a user obj and not user.username
// function fetchUserDetails(username: string): User {
//     const user = users.find(user => user.username === username);
//     if (!user) {
//         throw new Error(`User with username ${username} not found`)
//     };
//     //if we use user.username here, there will be error because user.username is a string and not an obj which we declared above `: User` unles we use `: string` or remove `: User` (i.e fetchUserDetails(username: string) {}) this function will let us return user.username
//     return user;
// }

