import { User } from "./models/User";

const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(collection);
  console.log("aum namah shivaya");
});

collection.fetch();
