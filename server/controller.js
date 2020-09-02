module.exports = {
   updateDB: (req, res) => {
      const {username, email} = req.query,
               {userId} = req.params;
      db = req.app.get("db")
      db.update_db(username, email, userId).then(changes => {
         res.status(200).send(changes);
      }).catch(err => res.status(500).send(err));
   }
}