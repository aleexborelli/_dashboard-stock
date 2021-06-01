import { Text } from '@chakra-ui/layout';

export function Logo() {
  return (
    <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
      dashgo
      <Text as='span' color='blue.500'>
        .
      </Text>
    </Text>
  );
}
