if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.meals-list.helpers({
    mealsArr: function () {
      return getMealsSellection(Session.get('selection'));
    }
  })

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.selection.events({
    'change select': function (selection) {
      // set the selection into the session
      Session.set('selection', selection);
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

function getMealsSellection (tag) {
  var collection = [];
  for (var i = 0; i < meals.length; i++) {
    var tags = meals[i].tags
    for (var j = 0; j < tags.length; j++) {
      if (tag.toLowerCase() === tags[j].toLowerCase() && collection.indexOf(tags[j].toLowerCase()) === -1){
        collection.push(meals[i]);
      }
    }
  }
  return collection;
}
