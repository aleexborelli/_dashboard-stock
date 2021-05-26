import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';


export default function SignIn() {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w='100%'
        maxWidth={450}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing='4'>
          <Input 
            name='email'
            type='email'
            id='email'
            label="E-mail"
            focusBorderColor='blue.500'
            bgColor='gray.900'
            variant='filled'
            _hover={{
              bgColor: 'gray.900',
            }}
            size='lg'
          />
          

          <Input
            name='password'
            type='password'
            id='password'
            label="Senha"
            focusBorderColor='blue.500'
            bgColor='gray.900'
            variant='filled'
            _hover={{
              bgColor: 'gray.900',
            }}
              size='lg'
          />
        </Stack>

        <Button type='submit' mt='6' colorScheme='blue'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
