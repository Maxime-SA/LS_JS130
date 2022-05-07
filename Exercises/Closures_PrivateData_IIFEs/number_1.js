function myBind(func, context) {
  return function() {
    return func.call(context, ...arguments);
  };
}