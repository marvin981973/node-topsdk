'use strict'
module.exports = function(args, check) {
  check(args, "auction_point", "Price");
  check(args, "auction_status", "String", true);
  check(args, "check_tool_merchant", "String", true);
  check(args, "city", "String", true);
  check(args, "description", "String", true);
  check(args, "etc.association_status", "Boolean");
  check(args, "etc.auto_refund", "Number");
  check(args, "etc.merchant_id", "String");
  check(args, "etc.merchant_nick", "String");
  check(args, "etc.network_id", "String");
  check(args, "etc.overdue_pay", "Number");
  check(args, "etc.verification_pay", "Boolean");
  check(args, "have_invoice", "Boolean");
  check(args, "image_1", "String", true);
  check(args, "image_2", "String");
  check(args, "image_3", "String");
  check(args, "image_4", "String");
  check(args, "image_5", "String");
  check(args, "list_time", "String");
  check(args, "postage_id", "Number");
  check(args, "product_id", "Number", true);
  check(args, "promoted_status", "Boolean");
  check(args, "prov", "String", true);
  check(args, "seller_cs_phone", "String", true);
  check(args, "shop_cats", "String");
  check(args, "skus", "String", true);
  check(args, "sub_stock_at_buy", "Boolean", true);
  check(args, "title", "String", true);
  check(args, "video_id", "Number");
  check(args, "vip_promoted", "Boolean");
}
