"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "car",
  setup(__props) {
    const hello = common_vendor.ref("hello world");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(hello.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "H:/code/Wechart/vegetableMarket/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
