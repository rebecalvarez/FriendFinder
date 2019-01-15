app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/survey.html"));
  });
  

  // Router

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
  