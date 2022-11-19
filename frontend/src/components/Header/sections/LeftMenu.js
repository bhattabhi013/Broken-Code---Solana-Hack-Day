import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from './icon.jpg';

function LeftMenu() {
  return (
    <Flex align='center'>
      <Image src={logo} alt='muser Logo' w='40px' mr={2} />
      <Text fontSize='xl'>
        <Link to='/'>muser</Link>
      </Text>
    </Flex>
  );
}

export default LeftMenu;
