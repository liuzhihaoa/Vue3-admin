/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2024-01-10 10:35:25
 * @LastEditors: liuzhihao
 * @LastEditTime: 2024-01-10 10:39:15
 * @description: 描述
 */
declare interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_URL: string;
  readonly VITE_ROUTE_MODE: string;
  readonly VITE_PUBLIC_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
