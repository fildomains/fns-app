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
  '0x608060405234801561001057600080fd5b50610aa3806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063de8f50a114610030575b600080fd5b61004a6004803603810190610045919061071d565b610060565b60405161005791906108ba565b60405180910390f35b600060608060006100bf60048b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506103ea90919063ffffffff16565b60ff16905060008161ffff16146101be5761012e60058261ffff168c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061043b9092919063ffffffff16565b92506101b760058261014091906108eb565b61ffff1660058361ffff168d8d90506101599190610979565b6101639190610979565b8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061043b9092919063ffffffff16565b9150610302565b61021660058b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506104f690919063ffffffff16565b905061027660078261ffff168c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061043b9092919063ffffffff16565b92506102ff60078261028891906108eb565b61ffff1660078361ffff168d8d90506102a19190610979565b6102ab9190610979565b8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061043b9092919063ffffffff16565b91505b6000606061035584868a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610525565b80925081935050508180156103d95750610385602082516103769190610979565b8261054090919063ffffffff16565b60028b8b60405161039792919061083d565b602060405180830381855afa1580156103b4573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906103d791906106f4565b145b955050505050509695505050505050565b6000828281518110610425577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c905092915050565b60608351828461044b9190610923565b111561045657600080fd5b60008267ffffffffffffffff811115610498577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156104ca5781602001600182028036833780820191505090505b50905060008060208301915085602088010190506104e982828761056b565b8293505050509392505050565b600082516002836105079190610923565b111561051257600080fd5b61ffff8260028501015116905092915050565b600060606105348385876105cf565b91509150935093915050565b600082516020836105519190610923565b111561055c57600080fd5b81602084010151905092915050565b5b602081106105aa57815183526020836105859190610923565b92506020826105949190610923565b91506020816105a39190610979565b905061056c565b60006001826020036101000a0390508019835116818551168181178652505050505050565b6000606060008551855185518888886040516020016105f396959493929190610856565b6040516020818303038152906040529050835167ffffffffffffffff811115610645577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156106775781602001600182028036833780820191505090505b50915083516020830182516020840160055afa925050935093915050565b6000815190506106a481610a56565b92915050565b60008083601f8401126106bc57600080fd5b8235905067ffffffffffffffff8111156106d557600080fd5b6020830191508360018202830111156106ed57600080fd5b9250929050565b60006020828403121561070657600080fd5b600061071484828501610695565b91505092915050565b6000806000806000806060878903121561073657600080fd5b600087013567ffffffffffffffff81111561075057600080fd5b61075c89828a016106aa565b9650965050602087013567ffffffffffffffff81111561077b57600080fd5b61078789828a016106aa565b9450945050604087013567ffffffffffffffff8111156107a657600080fd5b6107b289828a016106aa565b92509250509295509295509295565b6107ca816109ad565b82525050565b60006107dc83856108e0565b93506107e98385846109db565b82840190509392505050565b6000610800826108d5565b61080a81856108e0565b935061081a8185602086016109ea565b80840191505092915050565b610837610832826109d1565b610a1d565b82525050565b600061084a8284866107d0565b91508190509392505050565b60006108628289610826565b6020820191506108728288610826565b6020820191506108828287610826565b60208201915061089282866107f5565b915061089e82856107f5565b91506108aa82846107f5565b9150819050979650505050505050565b60006020820190506108cf60008301846107c1565b92915050565b600081519050919050565b600081905092915050565b60006108f6826109c3565b9150610901836109c3565b92508261ffff0382111561091857610917610a27565b5b828201905092915050565b600061092e826109d1565b9150610939836109d1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561096e5761096d610a27565b5b828201905092915050565b6000610984826109d1565b915061098f836109d1565b9250828210156109a2576109a1610a27565b5b828203905092915050565b60008115159050919050565b6000819050919050565b600061ffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610a085780820151818401526020810190506109ed565b83811115610a17576000848401525b50505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610a5f816109b9565b8114610a6a57600080fd5b5056fea2646970667358221220e8a3623f1ae22c54b7f4fd48d3e69f062c1f2d47656ad9b51d4eac713b8fbde864736f6c63430008040033'
const isSuperArgs = (xs) => xs.length > 1
export class RSASHA256Algorithm__factory extends ContractFactory {
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
RSASHA256Algorithm__factory.bytecode = _bytecode
RSASHA256Algorithm__factory.abi = _abi
