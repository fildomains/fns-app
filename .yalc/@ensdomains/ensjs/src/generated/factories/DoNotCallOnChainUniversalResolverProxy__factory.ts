/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type {
  DoNotCallOnChainUniversalResolverProxy,
  DoNotCallOnChainUniversalResolverProxyInterface,
} from '../DoNotCallOnChainUniversalResolverProxy'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_resolver',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'isOwner',
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
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'reverseNode',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            internalType:
              'enum DoNotCallOnChainUniversalResolverProxy.ReverseCallDataType',
            name: 'dataType',
            type: 'uint8',
          },
          {
            internalType: 'uint256[]',
            name: 'locations',
            type: 'uint256[]',
          },
        ],
        internalType:
          'struct DoNotCallOnChainUniversalResolverProxy.ReverseCall[]',
        name: 'calls',
        type: 'tuple[]',
      },
    ],
    name: 'reverse',
    outputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'bytes[]',
        name: 'returnData',
        type: 'bytes[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newUniversalResolver',
        type: 'address',
      },
    ],
    name: 'setUniversalResolver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'universalResolver',
    outputs: [
      {
        internalType: 'contract UniversalResolver',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class DoNotCallOnChainUniversalResolverProxy__factory {
  static readonly abi = _abi
  static createInterface(): DoNotCallOnChainUniversalResolverProxyInterface {
    return new utils.Interface(
      _abi,
    ) as DoNotCallOnChainUniversalResolverProxyInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): DoNotCallOnChainUniversalResolverProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as DoNotCallOnChainUniversalResolverProxy
  }
}
