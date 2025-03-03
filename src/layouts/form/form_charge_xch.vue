<template>
    <!-- NCH to WNCH -->
    <formLayout 
        :model="formData"
        ref="formLayout" 
        domRef="chargeWXCH" 
        :labelPosition="labelPosition" 
        :element-loading-text="step"
        :rules="rules" 
        v-loading="isLoading"    
    >
        <!-- wxch -->
        <el-form-item prop="wxchAmount" >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item1Name')}}({{$t('public.minimunQuantity')}}: {{conf.minimal_exchange_decimals}}WNCH)</span>
                <div class="top-append">1 WNCH= {{1-(conf.wrap_fee_ratio/100)}} NCH</div>
            </div>
            <el-input v-model="formData.wxchAmount">
                <template slot="append">WNCH</template>
            </el-input>
            <!-- <div class="el-form-item__append">WNCH</div> -->
        </el-form-item>

        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item2Name')}}</span>
            </div>
            <div class="el-input el-input-group el-input-group--append block">
                <div class="el-input__inner ">{{xchAmount}}</div>
                <div class="el-input-group__append">NCH</div>
            </div>
            <!-- <div class="el-form-item__append">NCH</div> -->
        </el-form-item>


        <el-form-item prop="xchAddress">
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item3Name')}}</span>
            </div>
            <el-input v-model="formData.xchAddress"></el-input>
        </el-form-item>

        <div class="desc">
           {{$t('public.fee')}}: {{conf.wrap_fee_ratio}} %
        </div>
        <div class="desc">
           {{$t('public.feeAmount')}}: {{feeAmount}}
        </div>

        <el-button class="submit" type="primary" @click="submitForm" :disabled="!this.account" >{{$t('home.block4.btn1')}}</el-button>
    </formLayout>
</template>

<script>
import formLayout from './formLayout'
import {rational} from '@/utils/rules'
import {authorizationCheck, getUserInfo, getBalance} from '@/utils/authUtils'
import {mul, cmpl} from '@/utils/floatOperation'
import {mapGetters} from 'vuex'

export default {
    components: {formLayout},
    computed: {
        ...mapGetters('user', {
            conf: 'conf'
        }),
        ...mapGetters('ethereum', {
            account: 'account',
            eth_sign: 'eth_sign',
            auth_msg: 'auth_msg'
        }),
        xchAmount(){
            // return (1 - (this.conf.unwrap_fee_ratio/100 || 0))*parseFloat(this.formData.wxchAmount).toFixed(6) || 0
            return mul(1-(this.conf.wrap_fee_ratio/100 ||0),parseFloat(this.formData.wxchAmount)).toFixed(6)
        },
        feeAmount(){
            return mul(this.conf.wrap_fee_ratio/100, parseFloat(this.formData.wxchAmount)).toFixed(6)
        },
        ...mapGetters('situation', {
            loadingWatcher: 'loadingWatcher'
        }),
    },
    data(){
        const wxchAmountVaily = (rule, val, callback) => {
            if(!val > 0) {
                callback(new Error('Please provide effective options'))
            }

            if(!rational(val)) {
                callback(new Error(this.$t('msg.rational')))
            }
            callback()
        }

        const wxchAdderss = (rule, val, callback) => {
           if(val.indexOf('xch') < 0) {
               callback(new Error('This Address is illegal'))
           }
           callback()
        }

        return {
            isLoading: false,
            labelPosition: 'top',
            step: '',
            formData: {
                wxchAmount: 0,
                xchAddress: ''
            },
            rules: {
                wxchAmount: [
                    {required: true, message: this.$t('msg.require', {val: 'WNCH'}), trigger:'change'},
                    {validator: wxchAmountVaily, trigger: 'blur'}
                ],
                xchAddress: [
                    {required: true, message: this.$t('msg.require', {val: this.$t('home.block4.item3Name')}), trigger:'change'},
                    {validator: wxchAdderss, trigger: 'blur'}
                ]
            }
        }
    },
    created() {
    },
    methods: {
        async submitForm(){
            if (this.isLoading)
                return false

            if (! authorizationCheck() )
                await getUserInfo(this)
            
            this.$refs['formLayout'].validate()
                .then(async () => {
                    let approveRes
                    this.isLoading = true
                    const options = {
                        "unwrap_amount": parseFloat(this.formData.wxchAmount),
                        "chia_address": this.formData.xchAddress.replace(/\s/g, ''),
                        "eth_address": this.account.replace(/\s/g, ''),
                        "eth_signature": this.eth_sign,
                        "auth_msg": this.auth_msg
                    }
                    this.step = "Connecting to the wallet..."
                    try {
                        approveRes = await this.$metaMaskUtils.contractApprove(this.conf.eth_address, options.unwrap_amount)
                        this.step = "Waiting for contract approving..."
                        
                        console.log('contract handle finshed:', approveRes)
                    } catch (err) {
                        this.isLoading = false
                        this.$message({  showClose: true, message: err, type: 'error'  })
                        console.error(err)
                    }
                    
                    if(!approveRes) return false
                    this.step = "Request submitting..."
                    this.$http('unwrap', options)
                        .then(res => {
                            if (res && res['success']) {
                                this.isLoading = false
                                // domScroll(this, 'Block_5')
                                // this.$globalBus.$emit('TRANSCATION_TAB', 'unwrap');
                                getBalance()
                                this.$message({
                                    showClose: true,
                                    message: "Request submitted",
                                    type: 'success'
                                })
                                this.fromClean()
                                this.gotoCheck(res.msg.id)
                            }
                        }).catch(err => {
                            this.isLoading = false
                            this.$message({
                                showClose: true,
                                message: err.response.data.err_msg || err,
                                type: 'error'
                            })
                        })

                })
        },
        fromClean() {
            this.formData.wxchAmount = 0
            this.formData.xchAddress = ''
        },
        gotoCheck(id){
            this.$router.push({name: 'transDetail', params:{id: id}})
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/custom';
.desc {
    font-size: 15px;
    line-height: 150%;
    margin-bottom: 10px;
    .name {
        display: block;
    }

    .val {
        color: $--color-primary;
    }
}
</style>


