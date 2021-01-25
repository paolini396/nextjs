import React, { useCallback } from 'react'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { client } from '@/lib/prismic'
import { GetServerSideProps } from 'next'
import Prismic from 'prismic-javascript'
import PrismcDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/types/documents'

// import { useCart } from '@/hooks/Cart'

import { Container, Title, ProductsList } from '../styles/pages/Home'

interface HomeProps {
  recommendedProducts: Document[]
}

const Home: React.FC<HomeProps> = ({ recommendedProducts }: HomeProps) => {
  const handleAddToCart = useCallback(product => {
    console.log({ product })
  }, [])

  return (
    <Container>
      <SEO
        title="DevCommerce, o seu e-commerce!"
        image="embraer.jpg"
        shouldExcludeTitleSiffix
      />
      <section>
        <Link href="/products">
          <Title>Lista de Produtos</Title>
        </Link>
        <ProductsList>
          {recommendedProducts.map(recommendedProduct => (
            // <Link  href={`/catalog/products/${recommendedProduct.uid}`}>
            <li key={recommendedProduct.id}>
              <img
                src={recommendedProduct.data.thumbnail.url}
                width="50"
                alt=""
              />
              <a>
                Produto:{' '}
                {PrismcDOM.RichText.asText(recommendedProduct.data.title)}
              </a>
              <p>Preço: {recommendedProduct.data.price}</p>

              <button onClick={() => handleAddToCart(recommendedProduct)}>
                Adicionar ao Carrinho
              </button>
            </li>
            // </Link>
          ))}
        </ProductsList>
      </section>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ])

  console.log({ recommendedProducts })

  return {
    props: {
      recommendedProducts: recommendedProducts.results
    }
  }
}
export default Home
