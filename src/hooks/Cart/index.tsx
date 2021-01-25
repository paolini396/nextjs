import React, { createContext, useState, useCallback, useContext } from 'react'

interface orderProps {
  totalSaleValue: number
}

interface orderItemsProps {
  productId: string
  quantity: number
  unitaryValue: number
  totalValue: number
}

interface CartProps {
  order: orderProps
  orderItems: orderItemsProps[]
}

interface CartContextData {
  orders?: orderProps[]
  order?: orderProps
  orderItems?: orderItemsProps[]
  orderItem?: orderItemsProps
  ordersLoading?: boolean
  orderItemsLoading?: boolean
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<CartContextData>({} as CartContextData)

  const setCartData = useCallback((newData: CartContextData) => {
    setData(oldData => ({ ...oldData, ...newData }))
  }, [])

  const store = useCallback(
    ({ order, orderItems }: CartProps) => {
      setCartData({ order, orderItems })
    },
    [setCartData]
  )

  return (
    <CartContext.Provider
      value={{
        ...data,
        store
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export function useCart(): CartContextData {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
