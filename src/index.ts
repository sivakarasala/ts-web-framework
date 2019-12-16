import { User } from "./models/User";

const user = new User({ name: "Shiva", age: 30 });

user.set({ name: "shambho" });
console.log(user.get("name"));
console.log(user.get("age"));
console.log("aum namah shivaya");
