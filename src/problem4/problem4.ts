import { ethers } from "ethers";
import { BscscanProvider } from "@ethers-ancillary/bsc"; //BSCprovider by ethers.js

const provider = new BscscanProvider();

const holders = ['0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
                '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
                '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'];

const contract_address = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';

var main = (holders: Array<string>, contract_address: string) => {
    const SWTHAbi = ["function balanceOf(address) view returns (uint)"]; //abi
    holders.forEach(async (address: string) => { //for each holder address, make a new contract, find the balance and print it out
        let SWTHContract = new ethers.Contract(contract_address, SWTHAbi, provider);
        const balance = await SWTHContract.balanceOf(address);
        console.log(`${address} ${ethers.utils.formatUnits(balance, 8)}`)
    });
}
    
main(holders, contract_address);

//decided to use async as getting info from the blockchain is kinda slow and i wanna speed up the process
//unfortunate result is that the order in which the [address, balance] is printed may be jumbled

//code to get ordered version is as follows 

// var main = (holders: Array<string>, contract_address: string) => {
//     const SWTHAbi = ["function balanceOf(address) view returns (uint)"];
//     holders.forEach(async (address: string) => {
//         let SWTHContract = new ethers.Contract(contract_address, SWTHAbi, provider);
//         SWTHContract.balanceOf(address).then((balance: ethers.BigNumber) => console.log(`${address} ${ethers.utils.formatUnits(balance, 8)}`));
//     });
// }
    
// main(holders, contract_address);