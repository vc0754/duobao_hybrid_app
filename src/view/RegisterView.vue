<template>
<div class="views">
    <div class="view">
        <navbar>
            <div @click="goBack" slot="left">
                <i class="icon icon21">后退</i>
            </div>

            <div slot="center">
                <span>注册</span>
            </div>

            <div slot="right">
                <span>确定</span>
            </div>
        </navbar>
        
        <div class="main">
            <div class="page">
                <div class="page-content">
                    <div class="register-page">
                        <div class="register-header">
                            使用手机注册
                        </div>
                        <div class="register-content">
                            <ul>
                                <li>
                                    <span>+86</span>
                                    <input type="text" placeholder="输入您的手机号码">
                                    <button>获取验证码</button>
                                </li>
                                <li>
                                    <span></span>
                                    <input type="text" placeholder="输入短信验证码">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
export default {
    name: 'RegisterView',
    components: {
        navbar
    },
    data () {
        return {
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
@main-color: #ff4060;

.register-page {
    background-color:#fff; padding:15px; margin:6px;

    .register-header { padding-bottom:15px; border-bottom:solid 1px #ddd;}
    .register-content {
        padding:10px 0 0 0;
        
        li {
            position:relative; padding:6px 0;
            border-bottom:solid 1px #ddd;
            
            display:box;
            display:-webkit-box;
            display:-moz-box;
            display:-ms-flexbox;
            display:-webkit-flex;
            display:flex;
            
            justify-content: space-between;

              -webkit-box-align: center;
                 -moz-box-align: center;
                 -ms-flex-align: center;
            -webkit-align-items: center;
                    align-items: center;

            span {
                font-size:15px; position: absolute; top:6px;
            }
            
            input {
                font-size:15px; width:100%; padding:12px 10px; margin-left:8%; border:none;
            }

            button {
                background-color:@main-color; color:#fff;
                padding:8px 12px;
                position: absolute; top:6px; right:0;
                border:none; border-radius:10px;
            }

            &:last-child {
                border:none;
            }
        }
    }
}
</style>
