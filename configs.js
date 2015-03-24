requirejs.config({
   catchError: true,
   baseUrl: 'libs/',
   urlArgs: "nocache=" +  (new Date()).getTime(),
   waitSeconds: 10
});