<template>
<div id="app" :class="system" v-cloak>
    <transition :name="transitionName">
        <router-view class="views" />
    </transition>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
export default {
    name: 'app',
    data () {
        return {
            transitionName: 'slide-left',
            system: (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ? 'IOS' : 'Android'),
            isWeixin: (/MicroMessenger/ig).test(navigator.userAgent)
        }
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
</script>

<style lang="less">
@main-color: #ff4060;

*, *::after, *::before {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
* {
    -webkit-tap-highlight-color: rgba(0,0,0,0); /* make transparent link selection, adjust last value opacity 0 to 1.0 */
}
html, body { width:100%; height:100%; overflow-x:hidden;}
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif; font-size:14px;
    background-color:#eee;
    padding:0; margin:0; overflow:hidden;
     -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;                /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust: none;             /* prevent webkit from resizing text to fit */
    -webkit-user-select: none;                  /* prevent copy paste, to allow, change 'none' to 'text' */
}
ul, ol, li { padding:0; margin:0; list-style:none;}
img { display:block; max-width:100%;}
a { color:#999; text-decoration:none;}
a, input, select, textarea, button { outline:0;}

#app {
    width:100%; height:100%; position:relative; top:0; right:auto; bottom:auto; left:0;

    .views {
        background-color:#fff;
        width:100%; height:100%; overflow:hidden; position:absolute; top:0; right:auto; bottom:auto; left:0;
        transition: all .35s cubic-bezier(.55, 0, .1, 1);

        .view {
            background-color:#fff;
            width:100%; height:100%; overflow:hidden; position:absolute; top:0; right:auto; bottom:auto; left:0;
            transition: all .35s cubic-bezier(.55, 0, .1, 1);
            
            &.no-navbar {
                .search-container {
                     top:0;
                }
                .search-container ~ .page-content {
                    padding-top:44px;
                }

                .page-content {
                    padding-top:0;
                }
            }
            
            &.with-subnavbar {
                .page-content {
                    padding-top:88px;
                }
            }
        }
    }

    .main {
        background:#000; width:100%; height:100%; overflow:hidden; position:relative;

        .page {
            background:#efeff4; width:100%; height:100%; position:absolute; left:0; top:0;
            -webkit-transform:translate3d(0, 0, 0);
                    transform:translate3d(0, 0, 0);
            
            .page-content {
                height:100%; overflow:auto; position:relative; z-index:1;
                -webkit-overflow-scrolling:touch;
                will-change: transform;
                padding-top:44px;
                padding-bottom:50px;
                
                .content-block {
                    margin:35px 0; padding:0 15px; color:#6d6d72;
                }
            }

            // .navbar-fixed .page>.searchbar~.page-content,
            // .navbar-fixed>.searchbar~.page-content,
            // .navbar-through .page>.searchbar~.page-content,
            // .navbar-through>.searchbar~.page-content
            
            .search-container { top:44px;}
            .search-container ~ .page-content {
                padding-top:88px;
            }
        }
    }
}
[v-cloak] { display:none;}
.swiper-pagination-bullet-active {
    background:@main-color;
}

html.pixel-ratio-2 [data-vc="category"]::before {
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}

/* === Preloader === */
    .preloader {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
        background-position: 50%;
        background-size: 100%;
        background-repeat: no-repeat;
        -webkit-animation: preloader-spin 1s steps(12, end) infinite;
        animation: preloader-spin 1s steps(12, end) infinite;
    }
    .preloader-white {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    }

    @keyframes fade {
        from { opacity: 1.0; }
        50% { opacity: 0.4; }
        to { opacity: 1.0; }
    }

    @-webkit-keyframes fade {
        from { opacity: 1.0; }
        50% { opacity: 0.4; }
        to { opacity: 1.0; }
    }
    @-webkit-keyframes preloader-spin {
        100% {
        -webkit-transform: rotate(360deg);
        }
    }
    @keyframes preloader-spin {
        100% {
        transform: rotate(360deg);
        }
    }
/* === Pull To Refresh === */
    .pull-to-refresh-layer {
        position: absolute;
        position: relative;
        top:0; left:0;
        width:100%; height:44px; margin-top:-44px;

        .preloader {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -10px;
            margin-top: -10px;
            visibility: hidden;
        }
        
        .pull-to-refresh-arrow {
            width:13px; height:20px;
            position:absolute; z-index:10; top:50%; left:50%; margin-left:-6px; margin-top:-10px;
            
            background: no-repeat center;
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2026%2040'%3E%3Cpolygon%20points%3D'9%2C22%209%2C0%2017%2C0%2017%2C22%2026%2C22%2013.5%2C40%200%2C22'%20fill%3D'%238c8c8c'%2F%3E%3C%2Fsvg%3E");
            background-size: 13px 20px;
            -webkit-transform: rotate(0deg) translate3d(0, 0, 0);
            transform: rotate(0deg) translate3d(0, 0, 0);
            -webkit-transition-duration: 300ms;
            transition-duration: 300ms;
        }
    }

    .pull-to-refresh-content.pull-to-refresh-no-navbar {
        margin-top: -44px;
        height: -webkit-calc(100% + 44px);
        height: -moz-calc(100% + 44px);
        height: calc(100% + 44px);

        .pull-to-refresh-layer {
            margin-top: 0;
        }
    }

    .pull-to-refresh-content.transitioning,
    .pull-to-refresh-content.refreshing {
        -webkit-transition-duration: 400ms;
                transition-duration: 400ms;
    }
    .pull-to-refresh-content:not(.refreshing) .pull-to-refresh-layer .preloader {
        -webkit-animation: none;
                animation: none;
    }
    .pull-to-refresh-content.refreshing {
        -webkit-transform: translate3d(0, 44px, 0);
        transform: translate3d(0, 44px, 0);

        .pull-to-refresh-arrow {
            visibility: hidden;
            -webkit-transition-duration: 0ms;
                    transition-duration: 0ms;
        }

        .preloader {
            visibility: visible;
        }
    }

    .pull-to-refresh-content.pull-up .pull-to-refresh-arrow {
        -webkit-transform: rotate(180deg) translate3d(0, 0, 0);
                transform: rotate(180deg) translate3d(0, 0, 0);
    }

    .infinite-scroll-preloader {
        text-align:center; margin-top:-20px; margin-bottom:10px;

        .preloader {
            width:24px; height:24px;
        }
    }

/* === Icon === */
.icon {
    background-image: url('./assets/icons.png');
    background-size: 2100%;
    width:26px; height:26px; display:block; overflow: hidden;
    text-indent: -999em;
    
    &.icon1 { background-position-x: 100%;}
    &.icon2 { background-position-x: 200%;}
    &.icon3 { background-position-x: 300%; background-color:#ff4060; width:40px; height:40px; border-radius:50%;}
    &.icon4 { background-position-x: 400%;}
    &.icon5 { background-position-x: 500%;}

    &.icon6 { background-position-x: 600%;}
    &.icon7 { background-position-x: 700%;}

    &.icon8 { background-position-x: 800%;}
    &.icon9 { background-position-x: 900%;}
    &.icon10 { background-position-x: 1000%;}
    &.icon11 { background-position-x: 1100%;}
    &.icon12 { background-position-x: 1200%;}
    &.icon13 { background-position-x: 1300%;}

    &.icon14 { background-position-x: 1400%;}
    &.icon14_2 { background-position-x: 1400%; background-position-y: 100%;}

    &.icon15 { background-position-x: 1500%;}
    &.icon15_2 { background-position-x: 1500%; background-position-y: 100%;}
    &.icon16 { background-position-x: 1600%;}
    &.icon17 { background-position-x: 1700%;}
    &.icon18 { background-position-x: 1800%;}

    &.icon19 { background-position-x: 1900%;}
    &.icon19_2 { background-position-x: 1900%; background-position-y: 100%;}
    &.icon20 { background-position-x: 2000%; background-position-y: 100%;}
    &.icon21 { background-position-x: 2100%; background-position-y: 100%;}
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
            transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
            transform: translate(-30px, 0);
}
</style>
