import { User } from "./models/User";

const user = new User({ name: "Shiva", age: 30 });

user.on("shambho", () => {
  console.log("shiva shambho");
});
user.on("shambho", () => {
  console.log("aum namah shivaya");
});
user.on("shambho", () => {
  console.log("mahadevaya");
});

user.trigger("shambho");
console.log(user);
