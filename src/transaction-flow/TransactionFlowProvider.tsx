import React, {
  ComponentProps,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { useLocalStorageReducer } from '@app/hooks/useLocalStorage'
import useTransactionUpdateCallback, {
  UpdateCallback,
} from '@app/hooks/useTransactionUpdateCallback'

import { TransactionDialogManager } from '../components/@molecules/TransactionDialogManager/TransactionDialogManager'
import type { DataInputComponent } from './input'
import { helpers, initialState, reducer } from './reducer'
import { GenericTransaction, InternalTransactionFlow, TransactionFlowItem } from './types'

type ShowDataInput = <C extends keyof DataInputComponent>(
  key: string,
  name: C,
  data: ComponentProps<DataInputComponent[C]>['data'],
) => void

type CreateTransactionFlow = (key: string, flow: TransactionFlowItem) => void

type ProviderValue = {
  showDataInput: ShowDataInput
  createTransactionFlow: CreateTransactionFlow
  resumeTransactionFlow: (key: string) => void
  getTransactionIndex: (key: string) => number
  getResumable: (key: string) => boolean
  getLatestTransaction: (key: string) => GenericTransaction | undefined
}

const TransactionContext = React.createContext<ProviderValue>({
  showDataInput: () => {},
  createTransactionFlow: () => {},
  resumeTransactionFlow: () => {},
  getTransactionIndex: () => 0,
  getResumable: () => false,
  getLatestTransaction: () => undefined,
})

export const TransactionFlowProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useLocalStorageReducer(
    'tx-flow',
    reducer,
    initialState,
    (current: InternalTransactionFlow) => {
      const updatedItems = current.items
      const { getCanRemoveItem } = helpers(current)
      // eslint-disable-next-line guard-for-in
      for (const key in updatedItems) {
        const item = updatedItems[key]
        if (getCanRemoveItem(item)) {
          delete updatedItems[key]
        }
      }
      return {
        items: updatedItems,
        selectedKey: null,
      }
    },
  )

  const getTransactionIndex = useCallback(
    (key: string) => state.items[key]?.currentTransaction || 0,
    [state.items],
  )

  const getResumable = useCallback(
    (key: string) => {
      const { getSelectedItem, getCanRemoveItem } = helpers({
        selectedKey: key,
        items: state.items,
      })
      const item = getSelectedItem()
      if (!item) return false
      if (getCanRemoveItem(item)) return false
      return true
    },
    [state.items],
  )

  const updateCallback = useCallback<UpdateCallback>(
    (_, key, status, hash) => {
      if (status !== 'pending') {
        dispatch({ name: 'setTransactionStageFromUpdate', payload: { key, status, hash } })
      }
    },
    [dispatch],
  )

  useTransactionUpdateCallback(updateCallback)

  const getLatestTransaction = useCallback(
    (key: string) => {
      const { getSelectedItem } = helpers({
        selectedKey: key,
        items: state.items,
      })
      const item = getSelectedItem()
      if (!item) return undefined
      return item.transactions[item.currentTransaction]
    },
    [state.items],
  )

  const providerValue = useMemo(() => {
    return {
      showDataInput: ((key, name, data) =>
        dispatch({
          name: 'showDataInput',
          payload: { input: { name, data } },
          key,
        })) as ShowDataInput,
      createTransactionFlow: ((key, flow) =>
        dispatch({
          name: 'startFlow',
          key,
          payload: flow,
        })) as CreateTransactionFlow,
      resumeTransactionFlow: (key: string) => dispatch({ name: 'resumeFlow', key }),
      getTransactionIndex,
      getResumable,
      getLatestTransaction,
    }
  }, [dispatch, getResumable, getTransactionIndex, getLatestTransaction])

  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (state.selectedKey) {
      setSelectedKey(state.selectedKey)
    } else {
      timeout = setTimeout(() => {
        setSelectedKey((prev) => {
          if (prev) dispatch({ name: 'cleanupTransaction', payload: prev })
          return null
        })
      }, 350)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [state.selectedKey, dispatch])

  return (
    <TransactionContext.Provider value={providerValue}>
      {children}
      <TransactionDialogManager {...{ state, dispatch, selectedKey }} />
    </TransactionContext.Provider>
  )
}

export const useTransactionFlow = () => {
  const context = useContext(TransactionContext)
  return context
}
