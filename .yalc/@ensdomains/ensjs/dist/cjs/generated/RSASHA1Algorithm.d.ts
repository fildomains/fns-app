import type {
  BaseContract,
  BigNumber,
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
export interface RSASHA1AlgorithmInterface extends utils.Interface {
  functions: {
    'verify(bytes,bytes,bytes)': FunctionFragment
  }
  getFunction(nameOrSignatureOrTopic: 'verify'): FunctionFragment
  encodeFunctionData(
    functionFragment: 'verify',
    values: [BytesLike, BytesLike, BytesLike],
  ): string
  decodeFunctionResult(functionFragment: 'verify', data: BytesLike): Result
  events: {}
}
export interface RSASHA1Algorithm extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>
  interface: RSASHA1AlgorithmInterface
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
    verify(
      key: BytesLike,
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>
  }
  verify(
    key: BytesLike,
    data: BytesLike,
    sig: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>
  callStatic: {
    verify(
      key: BytesLike,
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>
  }
  filters: {}
  estimateGas: {
    verify(
      key: BytesLike,
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
  }
  populateTransaction: {
    verify(
      key: BytesLike,
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
  }
}
