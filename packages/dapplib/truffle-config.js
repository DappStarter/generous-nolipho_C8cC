require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember social hockey entire borrow tent'; 
let testAccounts = [
"0xa103191c48df47027c991b2e762ed656f98ef2089df5ae66779c045bc441f6c9",
"0x5981f7c83e91f4cb2cb3aacc5cf8a8a2fa71f7003868e6035caaf10b0b5f375a",
"0x68aab94cb53395519ae59f38d35ea45827635fe228df62cebf9850aa6fd53b03",
"0x9a770fd75af97b32e8c715ef9ba604747d8beeb2b9fc4012fd617ab459c6818c",
"0x736721f0ecf80997cd4da877ddab130a20575fbde2def0d0ef23ae359df1a31b",
"0x7e6487ec907bfa57ecaa050657962cefba7c224f23aa33fde35da19bef8ba9c8",
"0x911922cefd49960d7cb2841e64a5742de6e800601e6f6660e52df133d479f5a7",
"0x14623e33b6bca0c1c3de121fa86eda94925c4ded37196cdde10ed0a6bd3aafbf",
"0xa91f9b8d11750128cf0fb7b6b27f13135b44e71a31004c208de267bbaabb7983",
"0x7c5f46adebc9d29665e5a48b4620088a8a8ae53ceab459ddb75e2afae2ed1bb4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

