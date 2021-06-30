import Web3 from 'web3';

    var web3;

    if (typeof window !== 'undefined') {
        if(window.web3 !== 'undefined'){
            const provider = new Web3.providers.HttpProvider(
                'https://rinkeby.infura.io/v3/---'
                );
            web3 = new Web3(provider);
            //console.log(web3);
        } else{
            web3 = new Web3(window.web3.currentProvider);
            //console.log(web3);
        }
    } else {
        const provider = new Web3.providers.HttpProvider(
            'https://rinkeby.infura.io/v3/---'
            );
        //web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/---"));
        web3 = new Web3(provider);
        //console.log(web3);
    }

/*
    import detectEthereumProvider from '@metamask/detect-provider';

    async function callmetamask(){
        const provider = await detectEthereumProvider();
    
        if (provider) {
        // From now on, this should always be true:
        // provider === window.ethereum
        startApp(provider); // initialize your app
        } else {
        console.log('Please install MetaMask!');
        }

    }


    callmetamask();

    */
    


export default web3;
