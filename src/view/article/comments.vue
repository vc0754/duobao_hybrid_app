<template>
<section class="comments">
    <h2>精彩评论</h2>
    <ul>
        <li>
            <div class="comment-author">
                <div class="comment-avatar">
                    <img src="../../assets/head2.jpg">
                </div>
                <div class="comment-meta">
                    <div class="author-name">寻找超强BUY</div>
                    <div class="comment-date">2017-03-21 星期三</div>
                </div>
            </div>
            
            <div class="comment-content">                
                <div class="comment-text">每个人的购物习惯不尽相同，因而在购置单品的时候常常会踌躇，有人觉得单品很好搭也很耐用。</div>
                <div class="comment-footer">
                    <div class="fav">
                        <i class="icon icon15_2">赞</i>
                        <span>86</span>
                    </div>
                    <div class="comment">
                        <i class="icon icon14_2">评论</i>
                        <span>13</span>
                    </div>
                </div>
                <div class="comment-reply">
                    <ul>
                        <li>寻找超强BUY ：每个人的购物习惯不尽相同，因而在购置单品的时候常。</li>
                    </ul>
                    <a href="#" class="link">查看所有回应...</a>
                </div>
            </div>
        </li>

        <li>
            <div class="comment-author">
                <div class="comment-avatar">
                    <img src="../../assets/head2.jpg">
                </div>
                <div class="comment-meta">
                    <div class="author-name">寻找超强BUY</div>
                    <div class="comment-date">2017-03-21 星期三</div>
                </div>
            </div>

            <div class="comment-content">
                <div class="comment-text">每个人的购物习惯不尽相同，因而在购置单品的时候常常会踌躇，有人觉得单品很好搭也很耐用。</div>
                <div class="comment-footer">
                    <div class="fav">
                        <i class="icon icon15_2">赞</i>
                        <span>86</span>
                    </div>
                    <div class="comment">
                        <i class="icon icon14_2">评论</i>
                        <span>13</span>
                    </div>
                </div>
            </div>
        </li>

        <li>
            <div class="comment-author">
                <div class="comment-avatar">
                    <img src="../../assets/head2.jpg">
                </div>
                <div class="comment-meta">
                    <div class="author-name">寻找超强BUY</div>
                    <div class="comment-date">2017-03-21 星期三</div>
                </div>
            </div>

            <div class="comment-content">
                <div class="comment-text">每个人的购物习惯不尽相同，因而在购置单品的时候常常会踌躇，有人觉得单品很好搭也很耐用。</div>
                <div class="comment-footer">
                    <div class="fav">
                        <i class="icon icon15_2">赞</i>
                        <span>86</span>
                    </div>
                    <div class="comment">
                        <i class="icon icon14_2">评论</i>
                        <span>13</span>
                    </div>
                </div>
            </div>
        </li>

    </ul>
</section>
</template>

<script>
export default {
    name: 'ArticleComments'
}
</script>

<style lang="less" scoped>
.comments {
    background-color:#fff;
    padding:15px; margin:-30px 0 0;

    h2 {
        background-color:#fff; font-size:15px; text-align: center; padding:15px 0; margin:0; position:relative;

        &::before {
            content:'';
            background-color:#c8c7cc;
            position:absolute; z-index:15; left:0; right:0; top:0; bottom:auto;
            height:1px; width:100%; display:block;
            -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%;
        }
    }
    
    ul {
        li {
            position:relative; padding:15px 0;
            
            .comment-author {
                display:box;
                display:-webkit-box;
                display:-moz-box;
                display:-ms-flexbox;
                display:-webkit-flex;
                display:flex;
                
                align-items:center;

                .comment-avatar {
                    width:42px; height:42px; border-radius:50%; overflow:hidden;
                    flex-shrink:0;
                }
                .comment-meta {
                    padding-left:10px;
                    
                    .author-name {}
                    .comment-date { font-size: 13px; color: #cccccc;}
                }
            }
            
            
            .comment-content {
                padding-left:52px;

                .comment-text {
                    font-size: 14px; color: #8e8e93; line-height: 21px;
                    position: relative; height: 42px; overflow: hidden; margin-top: 6px;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                }
            }

            &::before {
                content:''; display:block;
                position:absolute; z-index:15; left:0; right:auto; top:0; bottom:auto;
                background-color:#c8c7cc; width:100%; height:1px;
                -webkit-transform-origin: 50% 100%;
                        transform-origin: 50% 100%;
            }
        }
    }
    
    .comment-footer {
        margin-top: 8px;
        
        display:box;
        display:-webkit-box;
        display:-moz-box;
        display:-ms-flexbox;
        display:-webkit-flex;
        display:flex;
        
        a { color:#81848b; font-weight:500; margin-right:8px;}

        > div {
            margin-right:25px;

            display:box;
            display:-webkit-box;
            display:-moz-box;
            display:-ms-flexbox;
            display:-webkit-flex;
            display:flex;

              -webkit-box-align: center;
                 -moz-box-align: center;
                 -ms-flex-align: center;
            -webkit-align-items: center;
                    align-items: center;
                    
            .icon { width:19px; height:19px; margin-right:6px;}
        }
    }

    .comment-reply {
        font-size:12px; position:relative; padding:10px 0 0;

        a { color:#cccccc;}
        ul {
            color:#888888; padding:0; margin:0;

            li { overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
        }
    }
}
</style>
