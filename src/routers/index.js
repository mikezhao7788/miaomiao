import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export  default  new Router({
    mode:'history',
    routes:[
        {
            path:'/cinema',
            component:()=>import('../components/Cinema/Index')
        },
        {
            path:'/movie',
            component:()=>import('../components/Movie/Index'),
            children:[
                {
                    path:'city',
                    component:()=>import('../components/City/Index')
                },
                {
                    path:'nowPlaying',
                    component:()=>import('../components/NowPlaying/Index')
                },
                {
                    path:'comingSoon',
                    component:()=>import('../components/ComingSoon/Index')
                },
                {
                    path: 'search',
                    component: () => import('../components/Search/Index')
                },
                {
                    //设置默认路由跳转
                    path:"/movie",
                    redirect:"/movie/nowPlaying"
                }
            ]

        },
        {
            path:'/mine',
            component:()=>import('../components/Mine/Index')
        },
        {
            //设置初始路由加载
            path:'/*',
            redirect : '/movie'
        }
    ]
})
