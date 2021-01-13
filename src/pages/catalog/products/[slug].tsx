import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export default function Product() {
  const router = useRouter();

  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);

 const handleAddToCart = useCallback(() => {
  setIsAddToCartModalVisible(true);
 },[])

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCart} >Add to cart</button>

      {isAddToCartModalVisible && <div />}
    </div>
  )
}