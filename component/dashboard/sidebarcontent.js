import NavItem from "./navitem";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
const LinkItems = [
  { name: "Home", icon: FiHome, href: "/dashboard" },
  { name: "Trending", icon: FiTrendingUp, href: "#" },
  { name: "Explore", icon: FiCompass, href: "#" },
  { name: "Favourites", icon: FiStar, href: "#" },
  { name: "Settings", icon: FiSettings, href: "#" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const router = useRouter();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          DMM
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          href={link.href}
          bg={router.pathname === link.href ? "cyan.400" : null}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
export default SidebarContent;
