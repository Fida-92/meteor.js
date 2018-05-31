Resolutions = new Mongo.Collection('resolutions');

if(Meteor.isClient){

  Template.body.helpers ({
      resolutions: function() {
          return Resolutions.find();
      }
  });
  Template.body.events({
     'submit .new-resolution': function(event){
       var title = event.target.title.value;

     Resolutions.insert({
         title: title,
         createdAd : new Date()
     })
      event.target.title.value="";
  return true;
     }

  });

}
if(Meteor.isServer){
    Meteor.publish('resolutions', function task() {
        return Resolutions.find({});
    });

    Meteor.startup(function () {

  });
}