// AuthAPI
function login(username, password) {
  return new Promise((resolve) => {
    resolve({
      status: 200,
      data: {
        token: `${username}-${password}`,
        userData: {
          id: 345,
          name: 'Random',
          userTypes: [
            'user',
          ],
        },
      },
    });
  });
}

export default {
  login,
};
