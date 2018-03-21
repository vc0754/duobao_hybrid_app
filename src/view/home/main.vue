<template>
<div class="main">
    <div class="page">
        <div class="page-content infinite-scroll pull-to-refresh-content" data-ptr-distance="55">
            <!-- 默认的下拉刷新层 -->
            <div class="pull-to-refresh-layer">
                <div class="preloader"></div>
                <div class="pull-to-refresh-arrow"></div>
            </div>
            
            <swiper :options="swiperOption">
                <swiper-slide v-if="swiperSlides.length" v-for="(slide, index) in swiperSlides" :key="index">
                    <img :src="baseURL + slide.thumbnail">
                    <div class="content-layout">
                        <h3>{{ slide.title }}</h3>
                        <span>{{ slide.subtitle }}</span>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <card v-for="(item, index) in items" :item="item" :key="index"></card>

            <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
                <span slot="no-more">-- 我已经是底部 --</span>
                <span slot="no-result">-- 没有更多数据了 --</span>
                <span slot="spinner"><div class="preloader"></div></span>
            </infinite-loading>
            
        </div>
    </div>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import InfiniteLoading from 'vue-infinite-loading'

import card from '@/components/Card'

export default {
    name: 'MainView',
    components: {
        swiper, swiperSlide, InfiniteLoading, card
    },
    methods: {
        infiniteHandler ($state) {
            var urlItems = '/home1'
            this.$http.get(urlItems, {
                params: {
                    page: this.items.length / 5 + 1
                }
            }).then(({ data }) => {
                if (data.length) {
                    this.items = this.items.concat(data)
                    $state.loaded()
                    if (this.items.length / 5 === 3) {
                        $state.complete()
                    }
                } else {
                    $state.complete()
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    data () {
        return {
            baseURL: axios.defaults.baseURL,
            swiperSlides: [],
            items: [],
            swiperOption: {
                observer: true,
                observeParents: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    mounted () {
        var urlSwiper = '/swiper'
        this.$http.get(urlSwiper, {})
            .then((response) => {
                this.swiperSlides = response.data
            }).catch((error) => {
                console.log(error)
            })
    }
}
</script>

<style lang="less" scoped>
@main-color: #ff4060;
.swiper-container {
    .swiper-slide {
        background-color:#ddd; position:relative;

        img { width:100%; display:block;}
    }
    
    .swiper-pagination {
        .swiper-pagination-bullet { margin: 0 3px;}
        .swiper-pagination-bullet-active { background: @main-color;}
    }

    .content-layout {
        background: rgba(255,255,255,0.78);
        position: absolute;
        bottom: 35px; left: 12%; right: 12%;
        padding:12px 0px;
        text-align: center;

        h3 {
            font-size: 1.85em;
            letter-spacing: -0.5px;
            margin:0 0 5px;
        }
    }
}

.infinite-scroll-preloader {
    margin-top:15px;
}
</style>
