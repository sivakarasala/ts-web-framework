import { User } from "./models/User";

const user = new User({ id: 2, name: "mahadevaya", age: 32 });

user.on("save", () => {
  console.log("aum namah shivaya", user);
});

user.save();
