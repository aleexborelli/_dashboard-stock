import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  Avatar,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  RiAddLine,
  RiPencilLine,
} from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import api from '../../services/api';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
  image: string;
}

interface ProductsProps {
  onOpenNewProductModal: () => void;
}

export default function ProductList({ onOpenNewProductModal }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    await api.get('products').then((response) => {
      setProducts(response.data);
    });
  }
  return (
    <Box>
      <Header />

      <Flex w='100' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Produtos
            </Heading>
            
            <Link href='/products/create'>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='blue'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                onClick={onOpenNewProductModal}
              >
                Criar novo produto
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='blue' />
                </Th>

                <Th width='8' textAlign='center'>
                  Imagem
                </Th>
                <Th>Produto</Th>
                <Th>Em Estoque</Th>
                <Th>R$</Th>
                <Th width='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td px='6'>
                    <Checkbox colorScheme='blue' />
                  </Td>
                  <Td>
                    <Avatar size='lg' name={product.name} src={product.image} />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight='bold'> {product.name} </Text>
                      <Text fontSize='sm' color='gray.300'>
                        Referencia: {product.id}
                      </Text>
                    </Box>
                  </Td>
                  <Td>{product.amount}</Td>

                  <Td>R$ {product.price}</Td>
                  <Td>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='blue'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      <Link href={`/products/${product.id}`} >
                        Editar
                      </Link>
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
