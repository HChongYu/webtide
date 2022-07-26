import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dns from 'dns'
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })


// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  base: "./", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      "@": path.resolve(__dirname, "src"),
      // "@assets": path.resolve(__dirname, "src/assets"),
      // "@components": path.resolve(__dirname, "src/components"),
      // "@images": path.resolve(__dirname, "src/assets/images"),
      // "@views": path.resolve(__dirname, "src/views"),
      // "@store": path.resolve(__dirname, "src/store"),
    },
  },
  // build: {
  //   outDir: "dist",
  //   // 9月更新
  //   assetsDir: "assets", //指定静态资源存放路径
  //   sourcemap: false, //是否构建source map 文件
  //   terserOptions: {
  //     // 生产环境移除console
  //     compress: {
  //       drop_console: true,
  //       drop_debugger: true,
  //     },
  //   },
  // },
  server: {
    cors: true, 
    open: true, // 是否自动在浏览器打开
    port: 5173, // 端口号
    // host: "mydemo.mo.chat",
    host: "127.0.0.1",
    proxy: {
      "/dashboard": {
        target: "http://demoapi.mo.chat", // 后台接口
        changeOrigin: true,
        secure: true, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        // rewrite: (path) => path.replace(/^\/dashboard/, ""),
      },
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
        引入var.scss全局预定义变量，
        如果引入多个文件，
        可以使用
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
        这种格式
         */
        additionalData: '@import "@/assets/scss/globalVariable.scss";'
      }
    }
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
})
