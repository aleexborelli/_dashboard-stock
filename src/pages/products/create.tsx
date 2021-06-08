import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  toast,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { SubmitHandler, useForm } from 'react-hook-form';
import api from '../../services/api';
import Router from 'next/router';
import MyDropzone from '../../components/UploadField';
import { useState } from 'react';

type SignInFormData = {
  name: string;
  description: string;
  price: number;
  amount: number;
  image: string;
};

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const toast = useToast();
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleNewProduct: SubmitHandler<SignInFormData> = async ({name, description, price, amount, image}, event) => {
    event.preventDefault();

    const response = await api.post('/products', {
      name, description, price, amount, image
    })

    toast({
      position: 'top-right',
      render: () => (
        <Box color='white' p={3} bg='blue.500'>
         Produto Cadastrado com Sucesso
        </Box>
      ),
    });
    clearFields();
    Router.push('/products');
  };
  
  function clearFields() {
    
  }

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

          <Flex width='100%' direction='row' as='form' onSubmit={handleSubmit(handleNewProduct)}>
            <Box width='50%'>
              <Flex direction='column'>
                <Box>
                  <MyDropzone onFileUploaded={setSelectedFile} />
                </Box>
              </Flex>
            </Box>

            <Box width='50%'>
              <VStack spacing='8'>
                <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                  <Input name='name' label='Nome produto' {...register('name')} />
                  <Input name='description' label='Descrição' {...register('description')} />
                </SimpleGrid>

                <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                  <Input name='price' type='number' step='0.01' label='Preço' {...register('price')} />
                  <Input name='amount' type='number' label='Quantidade' {...register('amount')} />
                  <Input name='image' type='text' label='Image' {...register('image')} />
                </SimpleGrid>
              </VStack>

              <Flex mt='8' justify='flex-end'>
                <HStack spacing='4'>
                  <Button colorScheme='blue' type="submit">Salvar</Button>
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
