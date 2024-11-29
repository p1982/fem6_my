const Author = require("../../models/author");

app.get("/authors", async(req, res)=> {
    try {
      const results = await Author.find({});
      res.send({
          status: "Success",
          results
        });     
    }
    catch(err) {
          res.send({
              status: "Error",
              message: `Error happened on server: "${err}" `,
            });    
    }
  });