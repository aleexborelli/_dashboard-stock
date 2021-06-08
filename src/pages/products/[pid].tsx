import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  const {pid} = router.query

  return (
    <p>Product: { pid }</p>
  )
}

export default Product;