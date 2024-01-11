/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2024-01-10 09:59:35
 * @LastEditors: liuzhihao
 * @LastEditTime: 2024-01-10 15:06:46
 * @description: 描述
 */
import { createWebHashHistory, createWebHistory } from "vue-router";
export const history =
  import.meta.env.VITE_ROUTER_MODE === "hash"
    ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
    : createWebHistory(import.meta.env.VITE_PUBLIC_PATH);
