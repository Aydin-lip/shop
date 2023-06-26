import Filters from "@/components/category/Filters";
import ListCart from "@/components/category/ListCart";
import Layout from "@/components/layout";
import CollectionDB from "@/db/mongoDB";
import IProducts from "@/models/products";

const index = ({products}: {products: IProducts[]}) => {
  return (
    <Layout title='Category'>
      <div className='container mx-auto flex flex-col gap-4 md:flex-row items-start justify-between md:my-12'>
        <Filters />
        <ListCart products={products} />
      </div>
    </Layout >
  )
}

export const getStaticProps = async () => {
  let product = await CollectionDB("product")
  let products = await product.find({}).toArray()

  return {
    props: {
      products
    }
  }
}

export default index