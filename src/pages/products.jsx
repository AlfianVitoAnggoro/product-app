import { useEffect, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import TableCart from '../components/Fragments/TableCart';
import Navbar from '../components/Layout/Navbar';
import { uselogin } from '../hooks/useLogin';
import { getProducts } from '../services/product.service';
// import Counter from '../components/Fragments/Counter';

const ProductsPages = () => {
  uselogin();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(data => {
      setProducts(data);
    });
  });

  // Ref
  // const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);

  // const handleAddToCartRef = id => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem('cart', JSON.stringify(cartRef.current));
  // };

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap gap-4">
          {products.length > 0 &&
            products.map(product => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  image={product.image}
                  id={product.id}
                ></CardProduct.Header>
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h2 className="text-blue-600 font-bold text-3-xl ml-5 mb-2">Cart</h2>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="h-10 flex justify-center mb-5">
        <Counter />
      </div> */}
    </>
  );
};

export default ProductsPages;
