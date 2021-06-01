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
import { RiAddLine, RiEditLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
export default function UserList() {
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

            <Link href="/products/create">
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='blue'
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
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

                <Th width='8' textAlign="center">Imagem</Th>
                <Th>Produto</Th>
                <Th>Em Estoque</Th>
                <Th>R$</Th>
                <Th width='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='blue' />
                </Td>
                <Td>
                  <Avatar
                    size='lg'
                    name='Anel de ouro'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_B20pxTpzcyOL3IcL33ObsjWA4RJZ-IMTlw&usqp=CAU'
                  />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Anel de ouro</Text>
                    <Text fontSize='sm' color='gray.300'>
                      Referencia: 6712
                    </Text>
                  </Box>
                </Td>
                <Td>100</Td>

                <Td>R$ 299,90</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='blue'
                    leftIcon={<Icon as={RiPencilLine}  fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='blue' />
                </Td>
                <Td>
                  <Avatar
                    size='lg'
                    name='Anel de ouro'
                    src='https://img2.gratispng.com/20180404/yhe/kisspng-jewellery-wedding-ring-silver-clothing-accessories-lily-of-the-valley-5ac50f7c3eaaa9.2738367015228639962567.jpg'
                  />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Anel de prata</Text>
                    <Text fontSize='sm' color='gray.300'>
                      Referencia: 1213
                    </Text>
                  </Box>
                </Td>
                <Td>80</Td>

                <Td>R$ 199,90</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='blue'
                    leftIcon={<Icon as={RiPencilLine}  fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='blue' />
                </Td>
                <Td>
                  <Avatar
                    size='lg'
                    name='Anel de ouro'
                    src='https://opiniaobomvaleapena.com.br/imagens/colar-semijoia-coracao-zirconias-toque-de-joia.png'
                  />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Colar de ouro</Text>
                    <Text fontSize='sm' color='gray.300'>
                      Referencia: 5749
                    </Text>
                  </Box>
                </Td>
                <Td>10</Td>

                <Td>R$ 499,90</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='blue'
                    leftIcon={<Icon as={RiPencilLine}  fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
