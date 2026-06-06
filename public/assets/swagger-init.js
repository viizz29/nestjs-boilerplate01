var originalOnloadFunction = window.onload;

function showGreeting(name) {
  window.alert(`Hello ${name} Welcome to the party !`);
}

window.onload = function () {
  originalOnloadFunction();

  const ui = window.ui;

  // Optional: Modify responseInterceptor on the existing ui instance
  ui.getConfigs().responseInterceptor = function (response) {
    // console.log(response.url, response.status);

    if (response.url.includes('/login') && response.status === 201) {
      let responseBody = response.body;
      if (typeof responseBody === 'string') {
        responseBody = JSON.parse(responseBody);
      }

      // console.log(responseBody);

      const { token, user } = responseBody;
      if (token) {
        showGreeting(user.name);
        ui.preauthorizeApiKey('bearerAuth', token); // Preauthorize token for future requests
      }
    }
    return response;
  };
};
