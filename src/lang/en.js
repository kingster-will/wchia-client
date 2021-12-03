export default {
    public: {
        fee: 'Fee',
        feeAmount: 'Fee Amount',
        send: 'send',
        cancel: 'Cancel',
        item1Name: 'Check transaction',

        placeholder1: 'Please input',
        placeholder2: 'Please select',
        
        nodata: 'No Data',
        check: "Check Details",
        minimunQuantity: 'Minimum exchange',
        detail: 'Details'
    },
    msg: {
        require: '{val} is required',
        rational: 'please input the rational'
    },
    navs: {
        item1: 'About Broker',
        item2: 'Exchange WNCH',
        item3: 'Exchange NCH',
        item4: 'Historical transaction',
        item5: 'Connect Us',
        btn1: 'Sign Up',
        dropDownItem1: 'setting',
        dropDownItem2: 'Sign out',
    },
    footer: {
        lpart: {
            item1: 'WNCH is the first ERC20 tokenbacked 1:1 with NCH',
            item2: 'If you need help, please contact'
        },
        rpart: {
            item1: ''
        }
    },
    msgs: {

    },
    home: {
        block1: {
            title: 'Transparency and security ensures trust',
            content: 'The greatest concern of moving assets across a chain via a bridge is trust built on top of security.  In order to establish such trust, we are taking the following measures: 1)to have a public audited smart contract and have the source code open to the public; 2) to be transparent with our services and ourmotivations and 3) to have multisig custodian services. By doing so, when you convert one NCH to WNCH, your proof of reserve is on-chain, there will be only one WNCH to be minted, and the WNCH will be burned when the NCH token is redeemed.',
            button: 'Connect Wallet'
        },
        block2: {
            title: 'About Broker',
            subTitle: 'You will see the basic information of Broker to help you trade better.',
            item1Name: 'Broker’s Name',
            item1Desc: '',
            item2Name: 'Broker’s ChiaWallet Address',
            item2Desc: '',
            item3Name: 'Broker’s Ethereumaddress for WNCH',
            item3Desc: '',
        },
        block3: {
            title: 'ENCHANGE WNCH',
            subTitle: 'You can convert NCH to WNCH, which can increase the liquidity of NCH token.',
            item1Name: 'Send NCH',
            item2Name: 'Exchange WNCH',
            item3Name: 'Fee',
            item4Name: 'Receiving  WNCH address',
            btn1: 'Redeem WNCH now',
            timelineItem1hd: 'Deposite NCH',
            timelineItem1ctn: 'Before submitting the exchange request, please deposit enough NCH to your exclusive NCH address provided by broker:',
            timelineItem2hd: 'Submitting the exchange request',
            timelineItem2ctn: 'Fill in the amount of NCH on the webpage and click "Exchange WNCH ".',
            timelineItem3hd: 'Waiting WNCH  transfer to your account',
            timelineItem3ctn: 'To convert from NCH to WNCH, it takes some time to cross the bridge. please wait patiently.',
            timelineItem4hd: '"WNCH successfully deposited into account',
            timelineItem4ctn1: 'After the transaction is successful, you can check the received WNCH in MetaMask.',
            timelineItem4ctn2: 'To facilitate your viewing of assets, please add WNCH tokens to your MetaMask account. WNCH token address:',
        },
        block4: {
            title: 'ENCHANGE NCH',
            subTitle: 'You can exchange WNCH back to NCH to your NCH Wallet at any time.',
            item1Name: 'Send WNCH',
            item2Name: 'Exchange NCH',
            item3Name: 'NCH address',
            // item4Name: 'Receiving  WNCH address',
            btn1: 'Exchange back to NCH',
            timelineItem1hd: 'Submitting the exchange request',
            timelineItem1ctn: 'Fill in the WNCH quantity on the webpage, fill in the NCH receiving address, and click "Exchange NCH".',
            timelineItem2hd: 'Approve Broker can deduct WNCH from your account.',
            timelineItem2ctn: 'MetaMast would pop-up a window for asking approve broker deduct WNCH. Please click "Confirm" here.',
            timelineItem3hd: 'Waiting NCH  transfer to your account.',
            timelineItem3ctn: 'To convert from WNCH to NCH, it takes some time to cross the bridge. please wait patiently.',
            timelineItem4hd: 'NCH successfully deposited into account.',
            timelineItem4ctn: 'After the transaction is successful, you can check the received NCH at your NCH address.',
        },
        block5: {
            title: 'Historical transaction',
            item1: 'Cumulative exchange WNCH',
            item2: 'Cumulative exchange NCH',
            tab1: 'Exchange WNCH',
            tab2: 'Exchange NCH',
            cell1: 'Transaction Time',
            cell2: 'Quantity',
            cell3: 'Sending address',
            cell4: 'Receiving address',
            cell5: 'Result',
            tbHandler: 'Check details',
            status: {
                created: 'created',
                xch_transferred: 'nch transferred',
                xch_transferring: 'nch transferring',
                wxch_transferred: 'wnch transferred',
                wxch_transferring: 'wnch transferring',
                finished: 'finished',
                closed: 'closed',
                error: 'error'
            }
        }
    },
    register: {
        pageTitle: 'Create a WNCH account',
        subTitle: 'WNCH is the first ERC20 tokenbacked 1:1 with NCH',
        item1Name: 'ETH Wallet Address',
        item1Unit: 'Connect Wallet',
        item2Name: 'Contry',
        item2PlaceHold: 'Please select',
        item3Name: 'First name',
        item3Unit: '',
        item4Name: 'Last name',
        item4Unit: '',
        item5Name: 'Phone number',
        item5Unit: '',
        item5PlaceHold: 'Please select',
        item6Name: 'Address line',
        item6Unit: '',
        item7Name: 'City',
        item8Name: 'State',
        item9Name: 'Zip code',
        item10Name: 'Email address',
        extrItem1: 'I confirm that the information I provided is accurate',
        btn1: 'Register an account'
    },
    account: {
        pageTitle: 'Account',
        subTitleItem1: 'Balance of WNCH',
        subTitleItem2: 'Balance of NCH',
        item1Name: 'First name',
        item2Name: 'Last name',
        item3Name: 'Country',

        item4Name: 'Phone number',
        item5Name: 'Address line',
        item6Name: 'City',
        item7Name: 'State',
        item8Name: 'Zip code',
        item9Name: 'Email',
        item10Name: 'NCH Wallet Address',
        item11Name: 'ETH Wallet Address',
        
        btn1: 'Preserve'
    },
    transDetail: {
        pageTitle: 'Transaction Details',
        subTitleItem1: 'Transaction Time:',
        subTitleItem2: 'Result',
        subTitleItem3: 'Fee:',

        item1Name: 'Sending address',
        item2Name: 'Receiving address',
        item3Name: 'Quantity',
        item4Name: 'Status',
        item5NameChia: 'NCH Transaction Hash',
        item5NameEth: 'Eth Transaction Hash'
    }
    
}