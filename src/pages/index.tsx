import SEO from '@/components/SEO';
import Link from 'next/link';
import { client } from '@/lib/prismic';
import { GetServerSideProps } from 'next';
import Prismic from 'prismic-javascript';
import PrismcDOM from 'prismic-dom';
import { Title } from '../styles/pages/Home';
import { Document } from 'prismic-javascript/types/documents'

interface HomeProps {
  recommendedProducts: Document[];
}

export default function Home({ recommendedProducts }: HomeProps) {

  return (
    <div>
      <SEO 
        title="DevCommerce, o seu e-commerce!"  
        image="embraer.jpg" 
        shouldExcludeTitleSiffix
      />

     <section>
     <Title>Products</Title>

     <ul>
     {recommendedProducts.map(recommendedProduct => (
       <li key={recommendedProduct.id}>
         <Link  href={`/catalog/products/${recommendedProduct.uid}`}>
           <a>
             {PrismcDOM.RichText.asText(recommendedProduct.data.title)}
           </a>
         </Link>
       </li>
     ))}
     </ul>
     </section>


    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ])

  console.log({recommendedProducts});

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    }
  }
}