import React from 'react'

import { CartProvider } from './Cart'

const AppProvider: React.FC = ({ children }) => (
  <CartProvider>{children}</CartProvider>
)

export default AppProvider
