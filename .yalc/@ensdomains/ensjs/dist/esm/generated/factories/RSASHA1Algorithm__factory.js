/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from 'ethers'
const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'key',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'sig',
        type: 'bytes',
      },
    ],
    name: 'verify',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
const _bytecode =
  '0x608060405234801561001057600080fd5b50610f50806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063de8f50a114610030575b600080fd5b61004a60048036038101906100459190610c38565b610060565b6040516100579190610d97565b60405180910390f35b600060608060006100bf60048b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061040390919063ffffffff16565b60ff16905060008161ffff16146101be5761012e60058261ffff168c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506104549092919063ffffffff16565b92506101b76005826101409190610dc8565b61ffff1660058361ffff168d8d90506101599190610e56565b6101639190610e56565b8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506104549092919063ffffffff16565b9150610302565b61021660058b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061050f90919063ffffffff16565b905061027660078261ffff168c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506104549092919063ffffffff16565b92506102ff6007826102889190610dc8565b61ffff1660078361ffff168d8d90506102a19190610e56565b6102ab9190610e56565b8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506104549092919063ffffffff16565b91505b6000606061035584868a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061053e565b80925081935050508180156103f25750610385601482516103769190610e56565b8261055990919063ffffffff16565b6bffffffffffffffffffffffff19166103e18b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506105a6565b6bffffffffffffffffffffffff1916145b955050505050509695505050505050565b600082828151811061043e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c905092915050565b6060835182846104649190610e00565b111561046f57600080fd5b60008267ffffffffffffffff8111156104b1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156104e35781602001600182028036833780820191505090505b5090506000806020830191508560208801019050610502828287610ac4565b8293505050509392505050565b600082516002836105209190610e00565b111561052b57600080fd5b61ffff8260028501015116905092915050565b6000606061054d838587610b28565b91509150935093915050565b6000825160148361056a9190610e00565b111561057557600080fd5b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008260208501015116905092915050565b60006040518251602084019350604067ffffffffffffffc0600183011601600982820310600181146105d7576105de565b6040820191505b50776745230100efcdab890098badcfe001032547600c3d2e1f0610636565b60008383101561062f578282015190508284039350602084101561062e576001846020036101000a03198082169150505b5b9392505050565b60005b82811015610a445761064c8482896105fd565b855261065c8460208301896105fd565b6020860152604081850310600181146106745761067d565b60808286038701535b5060408303811460018114610691576106a1565b6008850260208701511760208701525b5060405b608081101561072d5760408103860151603882038701511860208203870151600c830388015118187c010000000100000001000000010000000100000001000000010000000163800000008204167ffffffffefffffffefffffffefffffffefffffffefffffffefffffffefffffffe6002830216179050808288015250600c810190506106a5565b5060805b6101408110156107ba57608081038601516070820387015118604082038701516018830388015118187c030000000300000003000000030000000300000003000000030000000363400000008204167ffffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffc6004830216179050808288015250601881019050610731565b508160008060005b6050811015610a165760148104600081146107f4576001811461083e576002811461087b57600381146108de57610917565b6501000000000085046a01000000000000000000008604189350836f01000000000000000000000000000000860416935083650100000000008604189350635a8279999250610917565b6a010000000000000000000085046f01000000000000000000000000000000860418935083650100000000008604189350636ed9eba19250610917565b6a010000000000000000000085046f01000000000000000000000000000000860417935083650100000000008604169350836a010000000000000000000086046f01000000000000000000000000000000870416179350638f1bbcdc9250610917565b6a010000000000000000000085046f0100000000000000000000000000000086041893508365010000000000860418935063ca62c1d692505b50601f770800000000000000000000000000000000000000000000008504168063ffffffe073080000000000000000000000000000000000000087041617905080840190508063ffffffff86160190508083019050807c0100000000000000000000000000000000000000000000000000000000600484028c0151040190507401000000000000000000000000000000000000000081026501000000000086041794506a0100000000000000000000633fffffff6a040000000000000000000087041663c00000006604000000000000880416170277ffffffff00ffffffff000000000000ffffffff00ffffffff8616179450506001810190506107c2565b5077ffffffff00ffffffff00ffffffff00ffffffff00ffffffff838601169450505050604081019050610639565b506c0100000000000000000000000063ffffffff821667ffffffff000000006101008404166bffffffff0000000000000000620100008504166fffffffff000000000000000000000000630100000086041673ffffffff000000000000000000000000000000006401000000008704161717171702945050505050919050565b5b60208110610b035781518352602083610ade9190610e00565b9250602082610aed9190610e00565b9150602081610afc9190610e56565b9050610ac5565b60006001826020036101000a0390508019835116818551168181178652505050505050565b600060606000855185518551888888604051602001610b4c96959493929190610d33565b6040516020818303038152906040529050835167ffffffffffffffff811115610b9e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610bd05781602001600182028036833780820191505090505b50915083516020830182516020840160055afa925050935093915050565b60008083601f840112610c0057600080fd5b8235905067ffffffffffffffff811115610c1957600080fd5b602083019150836001820283011115610c3157600080fd5b9250929050565b60008060008060008060608789031215610c5157600080fd5b600087013567ffffffffffffffff811115610c6b57600080fd5b610c7789828a01610bee565b9650965050602087013567ffffffffffffffff811115610c9657600080fd5b610ca289828a01610bee565b9450945050604087013567ffffffffffffffff811115610cc157600080fd5b610ccd89828a01610bee565b92509250509295509295509295565b610ce581610e8a565b82525050565b6000610cf682610db2565b610d008185610dbd565b9350610d10818560208601610eae565b80840191505092915050565b610d2d610d2882610ea4565b610ee1565b82525050565b6000610d3f8289610d1c565b602082019150610d4f8288610d1c565b602082019150610d5f8287610d1c565b602082019150610d6f8286610ceb565b9150610d7b8285610ceb565b9150610d878284610ceb565b9150819050979650505050505050565b6000602082019050610dac6000830184610cdc565b92915050565b600081519050919050565b600081905092915050565b6000610dd382610e96565b9150610dde83610e96565b92508261ffff03821115610df557610df4610eeb565b5b828201905092915050565b6000610e0b82610ea4565b9150610e1683610ea4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e4b57610e4a610eeb565b5b828201905092915050565b6000610e6182610ea4565b9150610e6c83610ea4565b925082821015610e7f57610e7e610eeb565b5b828203905092915050565b60008115159050919050565b600061ffff82169050919050565b6000819050919050565b60005b83811015610ecc578082015181840152602081019050610eb1565b83811115610edb576000848401525b50505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212204b112e59e50f4f6898d426d8d95810ecb2715e88420d95291c6eae114b7a633564736f6c63430008040033'
const isSuperArgs = (xs) => xs.length > 1
export class RSASHA1Algorithm__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }
  deploy(overrides) {
    return super.deploy(overrides || {})
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address) {
    return super.attach(address)
  }
  connect(signer) {
    return super.connect(signer)
  }
  static createInterface() {
    return new utils.Interface(_abi)
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi, signerOrProvider)
  }
}
RSASHA1Algorithm__factory.bytecode = _bytecode
RSASHA1Algorithm__factory.abi = _abi
