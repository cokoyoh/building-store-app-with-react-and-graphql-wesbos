"use strict";

var Mutations = {
  createDog: function createDog(parent, args, context, info) {
    global.dogs = global.dogs || []; //create a dog

    var newDog = {
      name: args.name
    };
    global.dogs.push(newDog);
    return newDog;
  }
};
module.exports = Mutations;