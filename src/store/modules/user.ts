/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2024-01-11 09:26:12
 * @LastEditors: liuzhihao
 * @LastEditTime: 2024-01-11 15:24:28
 * @description: 描述
 */
import { ref } from "vue";
import { defineStore } from "pinia";
import { getToken } from "@/utils/cookies";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "");
  return { token };
});
