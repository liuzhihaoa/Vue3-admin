/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2024-01-11 10:05:03
 * @LastEditors: liuzhihao
 * @LastEditTime: 2024-01-11 10:30:43
 * @description: 描述
 */
import Cookie from "js-cookie";

const key = "Vue3-admin";

export const getToken = () => {
  return Cookie.get(key);
};

export const setToken = (token: string) => {
  return Cookie.set(key, token);
};

export const removeToken = () => {
  return Cookie.remove(key);
};
