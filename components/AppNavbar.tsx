import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as CLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Links = [
    {label: "Home", href: "/"},
    {label: "Product (SSR)", href: "/product"},
    {label: "Map (SSG)", href: "/map"},
    {label: "Province (SWR)", href: "/province"},
    {label: "Login", href: "/login"},
]

type NavLinkProps = {
    href: string,
    classActive: string,
    children: ReactNode
}

const NavLink = ({ href, classActive, children }: NavLinkProps ) => (
<Link href={href} passHref legacyBehavior>
  <CLink
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    className={classActive}
    >
    {children}
  </CLink>
</Link>
);

export default function AppNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  return (
    <>
      <Box bg={useColorModeValue('cyan.200', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Coding</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((menu) => (
                <NavLink key={menu.label} href={menu.href} classActive={router.pathname === menu.href ? "menu-active" : ""}>
                    <Text>{menu.label}</Text>
                </NavLink>
                ))}
            </HStack>
          </HStack>
          {/* <Flex alignItems={'center'}> */}
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          {/* </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((menu) => (
                <NavLink key={menu.label} href={menu.href} classActive={router.pathname === menu.href ? "menu-active" : ""}>
                    <Text>{menu.label}</Text>
                </NavLink>
                ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}