'use strict'
module.exports = function(args, check) {
  check(args, "count", "Number", true);
  check(args, "ext", "String");
  check(args, "item_id", "Number", true);
  check(args, "recommend_type", "Number", true);
}
