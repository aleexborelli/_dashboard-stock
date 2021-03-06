import { Flex, Button, Stack, Box, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { signIn } = useContext(AuthContext);
  const { errors } = formState;
  const toast = useToast();

  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
    event.preventDefault();
    try {
      await signIn(data);

      toast({
        position: 'top-right',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Login success
          </Box>
        ),
        duration: 2000,
      });
    }
    catch (err){
      toast({
        position: 'top-right',
        render: () => (
          <Box color='white' p={3} bg='red.500'>
            Falha ao autenticar usuário!
          </Box>
        ),
        duration: 2000,
      });
    }
    
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input
            name='email'
            type='email'
            label='E-mail'
            error={errors.email}
            {...register('email')}
          />
          <Input
            name='password'
            type='password'
            label='Senha'
            {...register('password')}
          />
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='blue'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
