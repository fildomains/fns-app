var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/generated/factories/ETHRegistrarController__factory.ts
import { Contract, utils } from "ethers";
var _abi = [
  {
    inputs: [
      {
        internalType: "contract BaseRegistrarImplementation",
        name: "_base",
        type: "address"
      },
      {
        internalType: "contract IPriceOracle",
        name: "_prices",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_minCommitmentAge",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_maxCommitmentAge",
        type: "uint256"
      },
      {
        internalType: "contract ReverseRegistrar",
        name: "_reverseRegistrar",
        type: "address"
      },
      {
        internalType: "contract INameWrapper",
        name: "_nameWrapper",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseCost",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "premium",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256"
      }
    ],
    name: "NameRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cost",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256"
      }
    ],
    name: "NameRenewed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "MIN_REGISTRATION_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      }
    ],
    name: "available",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32"
      }
    ],
    name: "commit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "commitments",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "secret",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]"
      },
      {
        internalType: "bool",
        name: "reverseRecord",
        type: "bool"
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "wrapperExpiry",
        type: "uint64"
      }
    ],
    name: "makeCommitment",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "maxCommitmentAge",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "minCommitmentAge",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nameWrapper",
    outputs: [
      {
        internalType: "contract INameWrapper",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "prices",
    outputs: [
      {
        internalType: "contract IPriceOracle",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "secret",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address"
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]"
      },
      {
        internalType: "bool",
        name: "reverseRecord",
        type: "bool"
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "wrapperExpiry",
        type: "uint64"
      }
    ],
    name: "register",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256"
      }
    ],
    name: "renew",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256"
      }
    ],
    name: "rentPrice",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "base",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256"
          }
        ],
        internalType: "struct IPriceOracle.Price",
        name: "price",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "reverseRegistrar",
    outputs: [
      {
        internalType: "contract ReverseRegistrar",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      }
    ],
    name: "valid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ETHRegistrarController__factory = class {
  static createInterface() {
    return new utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    );
  }
};
__publicField(ETHRegistrarController__factory, "abi", _abi);
export {
  ETHRegistrarController__factory
};
