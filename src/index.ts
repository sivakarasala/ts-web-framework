import { User } from "./models/User";

const user = new User({ name: "siva", age: 0 });

console.log(user.get("name"));
