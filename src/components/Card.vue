<template>
<div class="card">
    <div class="card-header">
        <div class="author">
            <div class="thumb">
                <router-link to="/app/my">
                    <img :src="baseURL + item.user.avatar" alt="">
                </router-link>
            </div>
            <div class="info">
                <router-link to="/app/my">
                    <strong>{{ item.user.name }}</strong>
                </router-link>
                <span>{{ item.date }}</span>
            </div>
        </div>
        <div class="follow">+ 关注</div>
    </div>
    
    <div class="card-body">
        <h3>
            <router-link :to="'/article/' + item.id">{{ item.title }}</router-link>
        </h3>
        <gallery :items="item.gallery" />
        <p>{{ item.description }}</p>
    </div>

    <div class="card-footer">
        <div class="fav">
            <i class="icon icon15_2">赞</i>
            <span>{{ item.favorite }}</span>
        </div>
        <div class="comment">
            <i class="icon icon14_2">评论</i>
            <span>{{ item.comments }}</span>
        </div>
        <div class="share">
            <i class="icon icon19_2">分享</i>
            <span>分享</span>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import gallery from '@/components/Gallery'

export default {
    name: 'Card',
    props: ['item'],
    components: {
        gallery
    },
    data () {
        return {
            baseURL: axios.defaults.baseURL
        }
    }
}
</script>

<style lang="less" scoped>
@main-color: #ff4060;
.card {
    background-color:#fff; margin:6px 6px 8px 6px;
    box-shadow: 0 1px 4px rgba(0,0,0,.03);
    
    a { color:#555;}

    .card-header {
        padding:10px; position: relative;
         display: flex;
        justify-content: space-between;
        align-items: center;

        .author {
             display: flex;

            .thumb {
                width:38px; height:38px; overflow: hidden; margin-right:6px;
                border-radius: 50%;
                flex-shrink:0;

                img { max-width:100%;}
            }
            
            .info {
                 display: flex;
                flex-direction: column;
                justify-content: center;

                strong {
                    font-size: 14px;
                    font-weight: 500;
                    color:#666666;
                }
                span {
                    font-size: 13px;
                    color: #cccccc;
                }
            }
        }
        
        .follow {
            font-size: 14px; font-weight: 500; padding:2px 7px;
            border: 1px solid @main-color;
            color: @main-color;
            border-radius: 8px;
        }

        &::after {
            background-color:#ddd;
            position:absolute; bottom:0; left:0;
            content:""; display:block; width:100%; height:1px;
        }
    }
    .card-body {
        color:#8e8e93;
        padding:15px 10px;
        
        h3 {
            color:#666666;
            font-size: 1.35em;
            letter-spacing: -1px;
            margin:0 0 10px;
        }
        
        p {
            &:last-child { margin:0;}
        }
    }
    .card-footer {
        background: #fafafa; font-weight: 500; padding:10px; position: relative;
         display: flex;
        justify-content: space-between;
        
        > div {
             display: flex;
            align-items: center;

            .icon { margin-right:8px;}
        }

        &::before {
            background-color:#ddd;
            position:absolute; top:0; left:0;
            content:""; display:block; width:100%; height:1px;
        }
    }
}
</style>
