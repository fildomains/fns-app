import { mockFunction, render, screen } from '@app/test-utils'

import { BigNumber } from '@ethersproject/bignumber/lib/bignumber'

import { useEthPrice } from '@app/hooks/useEthPrice'

import { Invoice } from './Invoice'

jest.mock('@app/hooks/useEthPrice')

const mockUseEthPrice = mockFunction(useEthPrice)
mockUseEthPrice.mockReturnValue({ data: 1e8, loading: false })

const items = [
  {
    label: 'line 1',
    value: BigNumber.from('1000000000000000000'),
  },
  {
    label: 'line 2',
    value: BigNumber.from('2000000000000000000'),
  },
]

describe('Invoice', () => {
  it('should render correctly in fil mode', async () => {
    render(<Invoice items={items} totalLabel="total" unit="fil" />)
    expect(screen.getByText('line 1')).toBeVisible()
    expect(
      screen.getByText(
        new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: 'fil',
          minimumFractionDigits: 4,
          maximumFractionDigits: 4,
          currencyDisplay: 'name',
        }).format(1),
      ),
    ).toBeVisible()
    expect(screen.getByText('line 2')).toBeVisible()
    expect(
      screen.getByText(
        new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: 'fil',
          minimumFractionDigits: 4,
          maximumFractionDigits: 4,
          currencyDisplay: 'name',
        }).format(2),
      ),
    ).toBeVisible()
    expect(screen.getByText('total')).toBeVisible()
    expect(
      screen.getByText(
        new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: 'fil',
          minimumFractionDigits: 4,
          maximumFractionDigits: 4,
          currencyDisplay: 'name',
        }).format(3),
      ),
    ).toBeVisible()
  })

  it('should render correctly in usd mode', async () => {
    render(<Invoice items={items} totalLabel="total" unit="usd" />)
    expect(screen.getByText('line 1')).toBeVisible()
    expect(screen.getByText('$1.00')).toBeVisible()
    expect(screen.getByText('line 2')).toBeVisible()
    expect(screen.getByText('$2.00')).toBeVisible()
    expect(screen.getByText('total')).toBeVisible()
    expect(screen.getByText('$3.00')).toBeVisible()
  })
})
