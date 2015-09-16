PlayersList = new Mongo.Collection('players');
PlayersList.insert({
  name: "David",
  score:0
});

if(Meteor.isClient){

console.log("hh");

 Template.leaderboard.player= function(){
  return "This is cool. I am at blueberry farm now"
};

Template.leaderboard.helpers({
  'player':function(){return "some thing"},
  'otherHelperFunction': function(){return "Some other function"}


})} 

if(Meteor.isServer){

  console.log("Hello server");
}

