import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common'
export interface StaticMetadataServiceInterface extends utils.Interface {
  functions: {
    'uri(uint256)': FunctionFragment
  }
  getFunction(nameOrSignatureOrTopic: 'uri'): FunctionFragment
  encodeFunctionData(functionFragment: 'uri', values: [BigNumberish]): string
  decodeFunctionResult(functionFragment: 'uri', data: BytesLike): Result
  events: {}
}
export interface StaticMetadataService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>
  interface: StaticMetadataServiceInterface
  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>
  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>
  functions: {
    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>
  }
  uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>
  callStatic: {
    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>
  }
  filters: {}
  estimateGas: {
    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
  }
  populateTransaction: {
    uri(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
  }
}
