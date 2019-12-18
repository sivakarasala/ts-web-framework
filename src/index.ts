import { User } from "./models/User";

const user = new User({ name: "rudraya", age: 31 });

user.save();
