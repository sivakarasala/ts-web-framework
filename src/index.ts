import { User } from "./models/User";

const user = User.buildUser({ id: 2 });

user.on("change", () => {
  console.log("aum namah shivaya", user);
});

user.fetch();
