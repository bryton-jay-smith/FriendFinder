var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function( req , res ) {

    var user = req.body;

    var userScores = user['scores[]'];

    console.log(userScores)

    for(var i = 0; i < userScores.length; i++) {
      userScores[i] = parseInt(userScores[i]);
    }

    var bestFriendIndex = 0;
    var minimumDifference = 40;


    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(userScores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }
    friends.push(user);
    res.json(friends[bestFriendIndex]);
  });
};