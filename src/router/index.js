import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import TabsView from '@/view/ui/TabsView'
import PageView from '@/view/ui/PageView'
// import RegisterView from '@/view/RegisterView'
// import LoginView from '@/view/LoginView'

import HomeView from '@/view/HomeView'
import DiscoveryView from '@/view/DiscoveryView'
import MessageView from '@/view/MessageView'
import MyView from '@/view/MyView'

import Article from '@/view/article/detail'
import ArticleGroup from '@/view/article/group'

import MyEdit from '@/view/my/edit'
import MyFollow from '@/view/my/follow'
import MyFans from '@/view/my/fans'
import MyFriend from '@/view/my/friend'
import MyTopic from '@/view/my/topic'
import MyArticle from '@/view/my/article'
import MyCollection from '@/view/my/collection'
import MySubscribe from '@/view/my/subscribe'
import MyWallet from '@/view/my/wallet'
import MyComment from '@/view/my/comment'
import MyFavorite from '@/view/my/favorite'
import MySetting from '@/view/my/setting'

const RegisterView = resolve => require(['@/view/RegisterView.vue'], resolve)
const LoginView = resolve => require(['@/view/LoginView.vue'], resolve)
const NotFound = {
    template: `<div>404</div>`
}

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: 'app'
        },
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/register',
            meta: { auth: false },
            component: RegisterView
        },
        {
            path: '/app',
            component: TabsView,
            children: [
                {
                    path: '',
                    redirect: '/app/home'
                },
                {
                    path: 'home',
                    meta: { auth: false },
                    component: HomeView
                },
                {
                    path: 'discovery',
                    meta: { auth: false },
                    component: DiscoveryView
                },
                {
                    path: 'message',
                    meta: { auth: true },
                    component: MessageView
                },
                {
                    path: 'my',
                    meta: { auth: true },
                    component: MyView
                }
            ]
        },
        {
            path: '/article',
            component: PageView,
            children: [
                {
                    path: 'tag/:id',
                    meta: { auth: false },
                    component: ArticleGroup
                },
                {
                    path: ':id',
                    meta: { auth: false },
                    component: Article
                }
            ]
        },
        {
            path: '/my',
            component: PageView,
            children: [
                {
                    path: 'edit',
                    component: MyEdit
                },
                {
                    path: 'follow',
                    component: MyFollow
                },
                {
                    path: 'fans',
                    component: MyFans
                },
                {
                    path: 'friend',
                    component: MyFriend
                },
                {
                    path: 'topic',
                    component: MyTopic
                },
                {
                    path: 'article',
                    component: MyArticle
                },
                {
                    path: 'collection',
                    component: MyCollection
                },
                {
                    path: 'subscribe',
                    component: MySubscribe
                },
                {
                    path: 'wallet',
                    component: MyWallet
                },
                {
                    path: 'comment',
                    component: MyComment
                },
                {
                    path: 'favorite',
                    component: MyFavorite
                },
                {
                    path: 'setting',
                    component: MySetting
                }
            ]
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id)
    if (isLogin && (path === '/register' || path === '/login')) {
        return next({ path: '/app/my' })
    }
    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})

export default router
