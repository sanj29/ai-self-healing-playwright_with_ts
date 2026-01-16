export const stepDictionary = {
  "I am on the login page": {
    action: "goto",
    value: "/login"
  },
  "I enter valid credentials": {
    action: "login",
    value: {
      username: "standard_user",
      password: "secret_sauce"
    }
  },
  "I should see the dashboard": {
    action: "assertUrl",
    value: "/dashboard"
  }
};
