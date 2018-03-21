<template>
<div class="view">
    <navbar>
        <div slot="center">
            <span>我的</span>
        </div>        
        <div slot="right" v-if="!user">
            <router-link to="/register">
                <span>注册</span>
            </router-link>
        </div>
    </navbar>
    
    <div class="main">
        <div class="page">
            
            <div class="page-content pull-to-refresh-content" data-ptr-distance="55">
                <!-- 默认的下拉刷新层 -->
                <div class="pull-to-refresh-layer">
                    <div class="preloader"></div>
                    <div class="pull-to-refresh-arrow"></div>
                </div>
                
                <div class="my">
                    <div class="account">
                        <div class="thumb">
                            <router-link to="/my/edit">
                                <img :src="baseURL + user.thumbnail">
                            </router-link>
                        </div>
                        <div class="info">
                            <h3>{{user.name}}</h3>
                            <span>{{user.description}}</span>
                        </div>
                    </div>
                    <div class="account-info">
                        <ul>
                            <li>
                                <router-link to="/my/follow">
                                    <strong>{{user.socialize.follow}}</strong>
                                    <span>关注</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/my/fans">
                                    <strong>{{user.socialize.fans}}</strong>
                                    <span>粉丝</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/my/friend">
                                    <strong>{{user.socialize.friends}}</strong>
                                    <span>好友</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <ul class="vc-list">
                    <li>
                        <router-link to="/my/topic">
                            <i class="icon icon8"></i>
                            <span>我的专辑</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/my/article">
                            <i class="icon icon9"></i>
                            <span>我的文章</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/my/collection">
                            <i class="icon icon10"></i>
                            <span>我的收藏</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/my/subscribe">
                            <i class="icon icon11"></i>
                            <span>我的订阅</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/my/wallet">
                            <i class="icon icon12"></i>
                            <span>我的钱包</span>
                        </router-link>
                    </li>
                </ul>

                <ul class="vc-list">
                    <li>
                        <router-link to="/my/comment">
                            <i class="icon icon13"></i>
                            <span>评论</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/my/favorite">
                            <i class="icon icon15"></i>
                            <span>喜欢</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/app/message">
                            <i class="icon icon16"></i>
                            <span>聊天</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/my/friend">
                            <i class="icon icon17"></i>
                            <span>好友</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/my/setting">
                            <i class="icon icon18"></i>
                            <span>设置</span>
                        </router-link>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import axios from 'axios'
import navbar from '@/view/ui/NavBar'
import list from '@/components/List'
import { mapState } from 'vuex'
export default {
    name: 'MyView',
    components: {
        navbar, list
    },
    computed: mapState({ user: state => state.user }),
    data () {
        return {
            baseURL: axios.defaults.baseURL
        }
    }
}
</script>

<style lang="less" scoped>
.my {
    background-color:#fff;
    padding:0 20px; margin:6px;
    position:relative;
    
    display:box;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:-webkit-flex;
    display:flex;
    
    flex-direction: column;

    .account {
        padding:15px 0 20px;
        position: relative;
        
        display:box;
        display:-webkit-box;
        display:-moz-box;
        display:-ms-flexbox;
        display:-webkit-flex;
        display:flex;

        .thumb {
            background-color:#eee; width:18%; margin-right:15px; overflow:hidden; border-radius:50%;
            flex-shrink:0;
        }

        .info {
            flex-grow:1;
            
            display:box;
            display:-webkit-box;
            display:-moz-box;
            display:-ms-flexbox;
            display:-webkit-flex;
            display:flex;

            flex-direction:column;
            justify-content:center;

            h3 { margin:0;}
            span { opacity:0.55;}
        }
        
        &::after {
            background-color:#ddd;
            position:absolute; bottom:0; left:0;
            content:""; display:block; width:100%; height:1px;
        }
    }

    .account-info {
        font-size:15px; padding:12px 0;
        
        ul {
            display:box;
            display:-webkit-box;
            display:-moz-box;
            display:-ms-flexbox;
            display:-webkit-flex;
            display:flex;

            justify-content: space-between;
            
            li {
                position: relative; text-align: center;
                flex-grow: 2;

                &:nth-child(2)::before,
                &:nth-child(2)::after {
                    content: '';
                    display: block; width: 1px; height: 14px; margin-top: -7px;
                    background-color: #cccccc;
                    position: absolute; top:50%;
                }
                
                &:nth-child(2)::before { left: -3px;}
                &:nth-child(2)::after { right: -3px;}

                strong {
                    color:#ff4060;
                    font-weight: normal;
                }
            }
        }
    }
}

.vc-list {
    background-color:#fff; font-size:15px;
    padding:0; margin:8px 6px;

    a {
        padding:9px 35px 9px 15px; position:relative;

        display:box;
        display:-webkit-box;
        display:-moz-box;
        display:-ms-flexbox;
        display:-webkit-flex;
        display:flex;
        
        align-items: center;
        
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
        background-size: 10px 20px;
        background-repeat: no-repeat;
        background-position: -webkit-calc(100% - 15px) center;
        background-position: calc(100% - 15px) center;
        background-position: 95% center;

        .icon { flex-shrink:0; margin-right:3.5%;}
        .info {
            h3 { padding:0; margin:0 0 0.5rem; }
            p { margin-top:0; opacity:0.75; }
            .meta { font-size:85%; opacity:0.55; }
        }

        &::after {
            background-color:#ddd;
            position:absolute; bottom:0; left:0;
            content:""; display:block; width:100%; height:1px;
        }
    }
}

.vc-guid-container {
    background-color:#fff; padding:0; margin:0; list-style:none;

    display:box;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:-webkit-flex;
    display:flex;

    -webkit-box-lines: multiple;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;

    a { position:relative;

        display:box;
        display:-webkit-box;
        display:-moz-box;
        display:-ms-flexbox;
        display:-webkit-flex;
        display:flex;

        flex-direction: column;
        justify-content:center;
        align-items: center;

        .icon { margin-bottom:10px;}

        .info {
            h3 { padding:0; margin:0 0 0.5rem; }
            p { margin-top:0; opacity:0.75; }
            .meta { font-size:85%; opacity:0.55; }
        }
    }

    &.col2 {
        padding:5px 12px;
        li { width:50%; padding:10px 3px;}
    }
    &.col3 {
        padding:5px 13px;
        li { width:33.33%; padding:10px 2px;}
    }
}

.icon { width:28px; height:28px;}
</style>
