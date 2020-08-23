"use strict";

var Query = {
  dogs: function dogs(parent, args, context, info) {
    global.dogs = global.dogs || [];
    return global.dogs;
  }
};
module.exports = Query;