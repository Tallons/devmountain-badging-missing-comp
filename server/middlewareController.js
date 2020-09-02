module.exports = {
   verifyQuery: (req, res, next) =>  {
      if (!req.query) {
         return res.status(401).send("no information sent");
      } else {
         console.log("middleware activated!")
         next();
      }
   }
}