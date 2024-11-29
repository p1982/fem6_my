const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express(bodyParser.json());
mongoose.connect("mongodb+srv://Bogdan:btmIFZ3y1zSmOHFq@testproject.6aeov.mongodb.net/books_shop?retryWrites=true&w=majority", { useNewUrlParser: true });

// app.put("/authors/:id", async(req, res)=> {
//   const {id} = req.params;
//   const Author = model("Author", authorSchema);
//   try {
//     const result = await Author.findByIdAndUpdate(id, req.body);
//     res.send({
//         status: "Success",
//         result
//       });     
//   }
//   catch(err) {
//         res.send({
//             status: "Error",
//             message: `Error happened on server: "${err}" `,
//           });    
//   }
// })

// app.get("/authors/:id", async(req, res)=> {
//   const {id} = req.params;
//   const Author = model("Author", authorSchema);
//   try {
//     const results = await Author.findById(id);
//     res.send({
//         status: "Success",
//         results
//       });     
//   }
//   catch(err) {
//         res.send({
//             status: "Error",
//             message: `Error happened on server: "${err}" `,
//           });    
//   }
// })

// app.get("/authors", async(req, res)=> {
//   const Author = model("Author", authorSchema);
//   try {
//     const results = await Author.find({});
//     res.send({
//         status: "Success",
//         results
//       });     
//   }
//   catch(err) {
//         res.send({
//             status: "Error",
//             message: `Error happened on server: "${err}" `,
//           });    
//   }
// });

// app.post("/authors", async(req, res)=> {
//     const Author = model("Author", authorSchema);
//     const author = new Author(req.body);
//     // author.save((err, result) => {
//     //     if(!err) {
//     //         res.send({
//     //             status: "Success",
//     //             result
//     //           }); 
//     //     }
//     //     else {
//     //     res.send({
//     //         status: "Error",
//     //         message: `Error happened on server: "${err}" `,
//     //       });              
//     //     }
//     // });
//     // const response = author.save();
//     // response.then(result => {
//     //     res.send({
//     //         status: "Success",
//     //         result
//     //       });          
//     // })
//     // .catch(err => {
//     //     res.send({
//     //         status: "Error",
//     //         message: `Error happened on server: "${err}" `,
//     //       });           
//     // })
//     try {
//         const result = await author.save();
//         res.send({
//             status: "Success",
//             result
//           });        
//     }
//     catch (err) {
//         res.send({
//             status: "Error",
//             message: `Error happened on server: "${err}" `,
//           });        
//     }
// })

mongoose.connection.once("open", () => {
    // routes(app);

    app.listen(3000, () => console.log(`Оно живо!`));
  })
  .on("error", (err) => {
    console.log("Connection error:", err);
  });

