
const endpoint = "http://localhost:3000/users"

export function login(username, password) {
    return fetch(endpoint)
    .then(response => response.json())
    .then(users => {
      const user = users.find((u) => u.login === username && u.pwd === password);
      if (user) {
        return user;
      } else {
        throw new Error("Nom d'utilisateur ou mot de passe incorrect");
      }
    });
  }