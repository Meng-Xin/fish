"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_tag2 + _easycom_uni_section2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_tag + _easycom_uni_section)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const swiperOption = common_vendor.reactive({
      indicatorDots: false,
      autoplay: true,
      interval: 2e3,
      duration: 500
    });
    return (_ctx, _cache) => {
      return {
        a: swiperOption.indicatorDots,
        b: swiperOption.autoplay,
        c: swiperOption.interval,
        d: swiperOption.duration,
        e: common_vendor.p({
          column: 4,
          showBorder: false
        }),
        f: common_vendor.p({
          text: "\u5185\u6709\u8EBA\u6905",
          type: "warning",
          inverted: true
        }),
        g: common_vendor.p({
          title: "\u4E3A\u4F60\u63A8\u8350",
          type: "line",
          padding: ""
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "H:/code/Wechart/vegetableMarket/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
