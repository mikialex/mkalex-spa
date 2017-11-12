<template>
    <container-mid>
        <header class="mk-title-main">
            <div class="mk-title-main-t">
                <div class="mk-title-main-s"></div>
                <div class="mk-title-main-h">
                    <h1>{{title}}</h1>
                    <h2>{{subTitle}}</h2>
                </div>
            </div>
            <div class="mk-title-main-logo">
                <div>
                    <svg-logo></svg-logo>
                </div>
            </div>
        </header>
    </container-mid>
</template>

<script>
import Logo from './logo-svg-hover.vue'
export default {
    components: {
        'svg-logo': Logo
    },
    props: {
        title: {
            type: String,
            default: 'title required'
        },
        subTitle: {
            type: String,
            default: '.'
        },
    }
}
</script>

<style lang="scss">
@import '~globalSass';

.mk-title-main {
    display: flex;
    width: 100%;
    margin-top: rem(100px);
    height: rem(140px);
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    @media (max-width: 700px) {
        height:rem(90px);
        margin-top: rem(60px);
    }
    >.mk-title-main-t {
        display: flex;
        align-items: center;
        flex-grow: 1;
        >.mk-title-main-s {
            @media (max-width: 700px) {
                display: none;
            }
            @extend .mk-small-dot;
            &::before {
                content: '';
                display: block;
                height: rem(60px);
                margin-top: rem(-66px);
                margin-left: rem(3px);
                border-left: $line-border-light;
            }
            &::after {
                content: '';
                display: block;
                height: rem(60px);
                margin-top: rem(20px);
                margin-left: rem(3px);
                border-left: $line-border-light;
            }
        }
        >.mk-title-main-h {
            flex-grow: 1;
            @media (max-width: 700px) {
                display: flex;
                flex-direction: row-reverse;
                justify-content: space-between;
                align-items: center;
            }
            >h1 {
                display: inline-block;
                font-weight: 100;
                font-size: rem(42px);
                padding-left: 10px;
                padding-right: 10px;
                max-width: rem(500px);
                background-color: $page-background;
                white-space: nowrap;
                font-family: 'futura';
                @media (max-width: 700px) {
                    margin-right: 20px;
                    white-space: nowrap;
                    font-size: rem(46px);
                    z-index: -1;
                }
            }
            >h2 {
                margin: 0px;
                margin-top: -30px;
                margin-left: 10px;
                position:relative;
                top:-10px;
                font-weight: 200;
                font-size: rem(20px);
                color:#888;;
                 font-family: 'futura';
                @media (max-width: 700px) {
                    margin-top: 30px;
                    
                }
            }
            &::after {
                content: '';
                display: block;
                width: 100%;
                position: relative;
                top: rem(-70px);
                z-index: -1;
                border-top: $line-border-light;
                @media (max-width: 700px) {
                    display: none;
                }
            }
        }
        >.mk-blog-title {
            padding-left: rem(20px);
            @media (max-width: 600px) {
                padding: rem(10px)
            }
            >h1 {
                font-weight: 200;
                font-size: rem(42px);
                margin: 0px;
                @media (max-width: 1000px) {
                    font-size: rem(32px);
                }
                @media (max-width:600px) {
                    // margin-top:rem(40px);
                    font-size: rem(24px);
                    font-weight: 600;
                }
            }
            >h2 {
                margin: 0px;
                color: rgb(102, 102, 102);
                font-weight: 200;
                font-size: rem(24px);
                @media (max-width: 600px) {
                    // margin-top:rem(40px);
                    font-size: rem(16px);
                }
            }
        }
    }
    ;
    >.mk-title-main-logo {
        width: rem(200px);
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 700px) {
            display: none;
        }
        >div {
            width: rem(150px);
            height: rem(150px); // border-radius: rem(75px);
            // background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            >embed {
                width: rem(100px);
                height: rem(100px);
            }
        }
    }
}
</style>
