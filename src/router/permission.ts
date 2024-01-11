/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2024-01-09 11:58:48
 * @LastEditors: liuzhihao
 * @LastEditTime: 2024-01-10 14:31:02
 * @description: 描述
 */
import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 路由白名单
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (whiteList.includes(to.path)) {
    return next();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
