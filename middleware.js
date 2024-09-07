const express = require("express");
const app = express();
//function that returns a boolens if the age of the person is 14

//when we use the defined middleware we dont use the below function
// function isoldenough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

//MIDDLEWARE

function isoldenoughmiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "sorry you are not allowed",
    });
  }
}

// app.get("/ride1", function (req, res) {
//   if (isoldenough(req.query.age)) {
//     res.json({
//       msg: "congratulations on your succesfull ride",
//     });
//   } else {
//     res.status(411).json({
//       msg: "sorry you are not allowed",
//     });
//   }
// });

//now using the defined middleware

//the below is used if we want to specify the middleware in the function itself

// app.get("/ride1", isoldenoughmiddleware, function (req, res) {
//   res.json({
//     msg: "congratulations on your succesfull ride 1",
//   });
// });

//but if we want to call the middleware outside of the route we can use app.use(name of the middleware) it will work for all the routes specified below it note *****below it*****

app.use(isoldenoughmiddleware);
app.get("/ride1",  function (req, res) {
  res.json({
    msg: "congratulations on your succesfull ride 1",
  });
});

app.get("/ride2",  function (req, res) {
  res.json({
    msg: "congratulations on your succesfull ride 2",
  });
});

app.listen(4000);
