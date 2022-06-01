import { Signer, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  TLDPublicSuffixList,
  TLDPublicSuffixListInterface,
} from '../TLDPublicSuffixList'
declare type TLDPublicSuffixListConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>
export declare class TLDPublicSuffixList__factory extends ContractFactory {
  constructor(...args: TLDPublicSuffixListConstructorParams)
  deploy(
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<TLDPublicSuffixList>
  getDeployTransaction(
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): TransactionRequest
  attach(address: string): TLDPublicSuffixList
  connect(signer: Signer): TLDPublicSuffixList__factory
  static readonly bytecode =
    '0x608060405234801561001057600080fd5b50610319806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80634f89059e14610030575b600080fd5b61004a600480360381019061004591906101d9565b610060565b604051610057919061022d565b60405180910390f35b6000806100bb600085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061013e90919063ffffffff16565b60ff169050600081118015610135575060006101306001836100dd9190610248565b86868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061013e90919063ffffffff16565b60ff16145b91505092915050565b6000828281518110610179577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c905092915050565b60008083601f8401126101a157600080fd5b8235905067ffffffffffffffff8111156101ba57600080fd5b6020830191508360018202830111156101d257600080fd5b9250929050565b600080602083850312156101ec57600080fd5b600083013567ffffffffffffffff81111561020657600080fd5b6102128582860161018f565b92509250509250929050565b6102278161029e565b82525050565b6000602082019050610242600083018461021e565b92915050565b6000610253826102aa565b915061025e836102aa565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610293576102926102b4565b5b828201905092915050565b60008115159050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220b532069c267f49adbbd903657805a090abc71404bbc14065e2ca096d166ea07164736f6c63430008040033'
  static readonly abi: {
    inputs: {
      internalType: string
      name: string
      type: string
    }[]
    name: string
    outputs: {
      internalType: string
      name: string
      type: string
    }[]
    stateMutability: string
    type: string
  }[]
  static createInterface(): TLDPublicSuffixListInterface
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): TLDPublicSuffixList
}
export {}
