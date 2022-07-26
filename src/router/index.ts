import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import noAuthModules from "./noAuthModules/index";
import Layout from "@/layout/index.vue";


const routes: Array<RouteRecordRaw> = [
    // pathMatch 是参数的名称，例如，跳转到 /not/found 会得到
    // { params: { pathMatch: ['not', 'found'] } }
    // 这要归功于最后一个 *，意思是重复的参数，如果你
    // 打算直接使用未匹配的路径名称导航到该路径，这是必要的
    // { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
    // 如果你省略了最后的 `*`，在解析或跳转时，参数中的 `/` 字符将被编码
    {
        path: '/', name: 'layout', redirect: "/home", component: Layout,
        children: [
            { path: '/home', name: 'home', component: () => import("@/views/home/index.vue") }
        ],
    },
    { path: '/login', name: 'login', component: () => import("@/layout/login.vue") },
    { path: '/404', name: '404', component: () => import("@/layout/404.vue") }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
// console.log(noAuthModules);
export default router;
