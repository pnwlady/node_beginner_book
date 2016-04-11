function route(handle, pathname) {
  console.log('About to route a request ' + pathname);
  if (type handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    consol.log('No request handler found for ' + pathname);
  }
};

exports.route = route;
