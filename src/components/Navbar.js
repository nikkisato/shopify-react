import React, { useEffect, useContext } from 'react'
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext"
import { MdMenu , MdShoppingBasket, Md} from "react-icons/md";

const Navbar = () => {
    const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex backgroundColor="#FFA8E2" flexDir="row" justifyContent="space-between" p="2rem">
        <Icon fill="white" as={MdMenu} w={30} h={30} cursor="pointer"></Icon>
         <Image src="https://cdn.shopify.com/s/files/1/0552/1781/5587/files/Logologo_1.svg?v=1661811348" w={100} h={100} />
        <Icon fill="white" as={MdShoppingBasket} w={30} h={30} cursor="pointer" onClick={()=> openCart()}></Icon>
    </Flex>
  )
}

export default Navbar