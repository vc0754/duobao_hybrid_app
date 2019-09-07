<template>
<div class="view with-subnavbar">
    <navbar>
        <div slot="left">
            <router-link to="/app/my">
                <i class="icon icon6">用户</i>
            </router-link>
        </div>
        <div slot="center">
            <img :src="logo" class="logo">
        </div>
        <div slot="right">
            <router-link to="/app/my">
                <i class="icon icon7">+</i>
            </router-link>
        </div>
        <subnavbar :items="subNavItems" :index="subNavIndex" @changeTab="changeTab" slot="subnavbar" />
    </navbar>
    
    <swiper :options="swiperTabOption" class="swiper-full" ref="mySwiper">
        <swiper-slide v-for="(item, i) in subNavItems" :key="i">
            <keep-alive>
                <component :is="item.component" :item="item" />
            </keep-alive>
        </swiper-slide>
    </swiper>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import navbar from '@/view/ui/NavBar'
import subnavbar from '@/view/ui/SubNavBar'
import MainView from '@/view/home/main'
import MainList from '@/view/home/list'

export default {
    name: 'HomeView',
    components: {
        navbar, subnavbar, swiper, swiperSlide
    },
    methods: {
        changeTab (tab) {
            this.subNavIndex = tab.index
            // this.subNavTabContent = tab.component
            this.swiper.slideTo(tab.index, 0, false)
        }
    },
    computed: {
        swiper () {
            return this.$refs.mySwiper.swiper
        }
    },
    data () {
        return {
            logo: require('../assets/logo.png'),
            subNavIndex: 0,
            subNavItems: [
                {
                    index: 0,
                    name: '佩戴广场',
                    component: MainView
                },
                {
                    index: 1,
                    name: '优雅首饰',
                    component: MainList
                },
                {
                    index: 2,
                    name: '颈间诱惑',
                    component: MainList
                },
                {
                    index: 3,
                    name: '腕间之美',
                    component: MainList
                },
                {
                    index: 4,
                    name: '指尖浪漫',
                    component: MainList
                },
                {
                    index: 5,
                    name: '耳畔时尚',
                    component: MainList
                },
                {
                    index: 6,
                    name: '配饰街拍',
                    component: MainList
                },
                {
                    index: 7,
                    name: '影视搭配',
                    component: MainList
                },
                {
                    index: 8,
                    name: '珠宝设计',
                    component: MainList
                }
            ],
            subNavTabContent: MainList,
            // =====
            swiperTabOption: {
                observer: true,
                observeParents: true
            }
        }
    },
    mounted () {
        this.swiper.on('slideChange', () => {
            this.subNavIndex = this.swiper.activeIndex
        })
        // Vue如何实现swiper左右滑动内容区控制导航tab同时切换高亮
        // http://blog.sina.com.cn/s/blog_6f5af8c10102y033.html
        /*
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        // window.console.log('this is current swiper instance object', this.swiper)
        // this.swiper.slideTo(3, 1000, false)
        setInterval(() => {
            // window.console.log('simulate async data')
            // if (this.swiperSlides.length < 10) {
            //     this.swiperSlides.push(this.swiperSlides.length + 1)
            // }
        }, 3000)
        */
    }
}
</script>

<style lang="less" scoped>
.swiper-full {
    color:#6d6d72; width:100%; height:100%;
}
</style>
