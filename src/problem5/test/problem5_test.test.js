const { ethers } = require("ethers");

const ADDR = "0xd9145CCE52D386f254917e481eB44e9943F39138";   // your contract address
const ABI = [[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "add",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "tokens",
				"type": "address[]"
			}
		],
		"name": "getBalances",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "TokenAddr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"internalType": "struct Problem5.returnObject[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
	
];    // your contract ABI

const ADDRESS = "0xa7efae728d2936e78bda97dc267687568dd593f3"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0xdac17f958d2ee523a2206206994597c13d831ec7" //,
	//"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
    //"0xc770eefad204b5180df6a14ee197d99d808ee52d"
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.Web3Provider("http://127.0.0.1:8545");//new ethers.providers.getDefaultProvider();
provider.send('eth_requestAccounts', [])
const signer = provider.getSigner()

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);
    const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);