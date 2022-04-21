var Web3 = require("web3");

export const mintNft = async (price, tokenAmount, timestamp, signature, address) => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        window.alert(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
    }
    var web3 = window.web3;
    
    const M9E = require("./M9E.json");
    const contractAddress = web3.utils.toChecksumAddress(process.env.REACT_APP_ADDRESS);
    const contract = new web3.eth.Contract(M9E.abi, contractAddress);
    
    let e;
    try {
        var correctPrice = web3.utils.toBN(
            web3.utils.toWei(price, "ether").toString()
        );
    } catch (u) {
        console.log('err', u);
    }
    try {
        e = await contract.methods.mint(tokenAmount, timestamp, signature).estimateGas({
            value: correctPrice * tokenAmount,
            from: address
        })
    } catch (u) {
        return { success: false, type: 'estimategas' }
    }
    let d = await web3.eth.getGasPrice();
    let c;
    
    try {
        c = await contract.methods.mint(tokenAmount, timestamp, signature).send({
            from: address,
            gas: parseInt(e),
            gasPrice: parseInt(1.2 * d),
            value: correctPrice * tokenAmount,
            maxFeePerGas: null,
        })
    } catch (u) {
        return {success: false, type:"mint"};
    }

    if(c){
        return {success: c.status, type:"mint"};
    }
}