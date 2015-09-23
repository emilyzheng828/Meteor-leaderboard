PlayersList = new Mongo.Collection('players');
PlayersList.insert({
  name: "David",
  score:0
});

if(Meteor.isClient){

  console.log("Hello");


  Template.leaderboard0.helpers({
    'player': function(){ return "this is cool"},
    'other': function(){return "Some other function"}
  })
  Template.leaderboard.helpers({
    'player': function(){ return "this is cool"},
    'other': function(){return "Some other function"}
  })

  Router.route('/', function(){
    this.render('leaderboard0')
  })
  Router.route('/hello', function(){
    this.render('leaderboard')
  })

  Router.route('/hello2', function(){
    this.render('leaderboard2')
  })
  Router.route('/hello3', function(){
    this.render('leaderboard3')
  })

  $('#myCalendar').fullCalendar({
    events: [
        {
            title  : 'event1',
            start  : '2015-10-01'
        },
        {
            title  : 'event2',
            start  : '2015-10-05',
            end    : '2015-10-07'
        },
        {
            title  : 'event3',
            start  : '2015-10-09T12:30:00',
            allDay : false // will make the time show
        }
    ]
});
}
if(Meteor.isServer){

  console.log("Hello server");
}
