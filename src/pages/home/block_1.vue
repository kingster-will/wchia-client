<template>
    <div class="container">
        <div class="l-part">
            <h2>{{$t('home.block1.title')}}</h2>
            <article>{{$t('home.block1.content')}}</article>
            <el-button type="primary" @click="connectWallet" v-if="!user||!eth_sign" > {{$t('home.block1.button')}} </el-button>
        </div>
        <div class="r-part">
            <!-- <div class="illustration"></div> -->
            <img src="/img/block_1_bg.png" />
        </div>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
import {getUserInfo} from '@/utils/authUtils'
export default {
     computed: {
        ...mapGetters('ethereum', {
            account: 'account',
            eth_sign: 'eth_sign'
        }),
        ...mapGetters('user', {
            user: 'user'
        }),
    },
    methods: {
        async connectWallet(){
            if(!this.account) {
                await this.$metaMaskUtils.initlization()
            }

            getUserInfo(this)
            // this.$metaMaskUtils.ethSign()
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.container {
    display: -webkit-box;
    display: flex;
}

.l-part {
    -webkit-box-flex: 1;
    flex: 1;
    margin-right: 25px;
    h2 {
        font-size: 38px;
        font-family: Roboto Condensed,sans-serif;
        margin-bottom: 20px;
        font-weight: 900;
        line-height: 100%;
    }

    article {
        font-size: 16px;
        line-height: 150%;
        margin-bottom: 20px;
    }

    .el-button {
        width: 283px;
        height: 50px;
        font-size: 22px;
        
    }
    
}
.r-part {
    img {
        width: 480px;
        height: 418px;
    }
}
</style>