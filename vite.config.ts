/*
 * @Author       : frank
 * @Date         : 2022-04-17 22:06:07
 * @LastEditTime : 2022-04-17 22:38:47
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/
    })
  ]
});
