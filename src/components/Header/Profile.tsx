import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export function Profile() {
  const { user } = useContext(AuthContext)
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>{ user ? user.name : 'Teste' }</Text>
        <Text color='gray.300' fontSize='small'>
          { user ? user.email : 'Teste' }
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Alex Borelli'
        src='https://github.com/aleexborelli.png'
        bg="gray.300"
      />
    </Flex>
  );
}
