//higher order function
//The funciotn receives another funtion as arguments and returns the funcion
//const func = ()=>{} --normal funcion
//const func = ()=> { ()=>{} } --higher order funcitn with curly braces
//const func = ()=> () => {}  --higher order function without curly braces

const AsyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  }; //next is middleware
};

export { AsyncHandler };
