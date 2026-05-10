How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

Introduction

In the large code base, we often use the same type of interface again and again. Why don't we use the same interface when we need to remove something or take something from that same interface? Here comes Pick and Omit. By name, you can guess that "pick " means you want to pick something from the interface, and omit is the opposite, when you just want to remove one or two things and keep the rest of the things. It helps us make our code DRY.

Let's see this with a real-life example: 

Pick Example: 

interface Profile {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  address: string;
}

type LoginForm = Pick<User, "email" | "password">;

const login: LoginForm = {
  email: "john@example.com",
  password: "secret123"
};

From here, you can see that we make a profile interface, but when we need just email | password, we don't need to create another interface; we can simply pick two things from our existing interface and use them. 

Now let's see the same profile interface example but for the Omit: 

type NormalProfile = Omit<User, "password">;

const profile: NormalProfile = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 25,
  address: "Dhaka, Bangladesh."
};

From here, you can see that when we want to just update our profile, we don't need a password, so we can remove it by using Omit. Again, It's help don't write another interface. And we keep our code clean.

Conclusion

Pick and Omit are essential utility types in TypeScript that help you follow the DRY principle. Instead of duplicating interfaces, you create focused "slices" of a master interface. This makes your code easier to maintain, easier to read, and less prone to bugs.