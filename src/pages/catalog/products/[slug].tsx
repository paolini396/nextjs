import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import PrismcDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '@/lib/prismic';


interface ProductsProps {
  product: Document;
}


export default function Product({ product }: ProductsProps) {
  const router = useRouter();

  if(router.isFallback) {
    return <p>Carregando...</p>
  }


  return (
    <div>
      <h1>
        {PrismcDOM.RichText.asText(product.data.title)}
      </h1>

      <img src={product.data.thumbnail.url}  width="200" alt=""/>

      <div dangerouslySetInnerHTML={{ __html: PrismcDOM.RichText.asHtml(product.data.description) }}></div>

      <p>Price: ${product.data.price}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }

}; 

export const getStaticProps: GetStaticProps<ProductsProps> = async (context) => {
  const { slug } = context.params;

  const product = await client().getByUID('product', String(slug), {});



  return {
    props: {
      product,
    },
    revalidate: 5,

  }

}