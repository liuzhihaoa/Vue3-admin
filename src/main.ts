/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2024-01-03 16:48:31
 * @LastEditors: liuzhihao
 * @LastEditTime: 2024-01-10 13:49:12
 * @description: 描述
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import "@/router/permission";

const app = createApp(App);
app.use(router);
app.mount("#app");
