import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Heading size='lg' fontWeight='normal'>
            Novo Produto
          </Heading>

          <Divider my='6' borderColor='gray.700' />

          <Flex width='100%' direction='row'>
            <Box width='50%'>
              <Flex direction='column'>
                <Box></Box>
              </Flex>
            </Box>

            <Box width='50%'>
              <VStack spacing='8'>
                <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                  <Input name='name' label='Nome produto' />
                  <Input name='description' label='Descrição' />
                </SimpleGrid>

                <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                  <Input name='price' type='number' label='Preço' />
                  <Input name='amount' type='number' label='Quantidade' />
                  <Input name='image' type='text' label='Image' />
                </SimpleGrid>
              </VStack>

              <Flex mt='8' justify='flex-end'>
                <HStack spacing='4'>
                  <Button colorScheme='blue'>Salvar</Button>
                  <Button colorScheme='whiteAlpha'>Cancelar</Button>
                </HStack>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
