<template>
<div class="view">
    <navbar>
        <div @click="goBack" slot="left">
            <i class="icon icon21">后退</i>
        </div>

        <div slot="center">
            <span>文章详情</span>
        </div>

        <div @click="share" slot="rights">
            <span>分享</span>
            <i class="icon"></i>
        </div>
    </navbar>
    
    <div class="main">
        <div class="page">
            <div class="page-content infinite-scroll pull-to-refresh-content" data-ptr-distance="55">
                
                <article v-if="item" class="article">
                    <div class="article-header">
                        <div class="article-avatar">
                            <router-link to="/app/my">
                                <img :src="baseURL + item.user.avatar" alt="" height="46" width="46">
                            </router-link>
                        </div>
                        <div class="article-author">
                            <div class="article-name">
                                <router-link to="/app/my">
                                    <strong>{{ item.user.name }}</strong>
                                </router-link>
                            </div>
                            <div class="article-date">
                                <span>{{ item.date }} | 预览25468</span>
                            </div>
                        </div>
                        <div class="article-follow">+ 关注</div>
                    </div>
                    
                    <div class="article-body">
                        <h1>{{ item.title }}</h1>
                        <gallery :items="item.gallery" />
                        <p>{{ item.description }}</p>
                    </div>
                </article>
                
                <author />
                <recommended />
                <comments />
                
                <div class="infinite-scroll-preloader">
                    <div class="preloader"></div>
                </div>
            </div>
        </div>
    </div>

    <toolbar />
</div>
</template>

<script>
import axios from 'axios'
import gallery from '@/components/Gallery'
import navbar from '@/view/ui/NavBar'
import toolbar from '@/view/article/toolbar'
import author from '@/view/article/author'
import recommended from '@/view/article/recommended'
import comments from '@/view/article/comments'

export default {
    name: 'Article',
    components: {
        gallery, navbar, toolbar, author, recommended, comments
    },
    data () {
        return {
            baseURL: axios.defaults.baseURL,
            item: ''
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        },
        share () {
            window.console.log('分享')
        }
    },
    mounted () {
        var urlSwiper = '/detail'
        this.$http.get(urlSwiper, {})
            .then((response) => {
                this.item = response.data
            }).catch((error) => {
                window.console.log(error)
            })
    }
}
</script>

<style lang="less" scoped>
@main-color: #ff4060;

.article {
    background-color:#fff;
    font-size:14px;
    .article-header {
        padding:15px 15px 0; position:relative;
        display:flex;
        align-items:center;
        .article-avatar {
            width:46px; height:46px; overflow:hidden; margin-right:12px; border-radius:50%;
        }
        
        .article-author {
            flex-grow:1;
            .article-name {
                color:#666666;
                font-size: 14px;
                font-weight: 500;
            }
            .article-date {
                font-size: 13px;
                color: #cccccc;
            }
        }
        .article-follow {
            font-size: 14px; font-weight: 500; padding:2px 7px;
            border: 1px solid @main-color;
            color: @main-color;
            border-radius: 8px;
        }
    }
    .article-body {
        color:#8e8e93;
        padding:0 15px 15px 15px;
        
        h1 {
            color:#666666;
            font-size:1.65em; font-weight:normal; letter-spacing:-1px;
            margin:12px 0;
        }
        
        p {
            &:last-child { margin:0;}
        }
    }
}

.infinite-scroll-preloader { margin-top:15px;}
</style>
