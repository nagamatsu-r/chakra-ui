import { Grid, GridItem, Spinner, Modal, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Flex
          position="fixed"
          w="100%"
          h="100vh"
          // bg="#fff"
          bg="rgba(255, 255, 255, 0.6)"
          // className="bg-white-opacity-50"
          zIndex="555"
          top="0"
          left="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="xl" />
        </Flex>
      </Modal>

      <Grid
        templateColumns={"150px 1fr 150px"}
        templateRows={"150px 1fr 150px"}
        h="100vh"
        gap="1"
        fontWeight="bold"
        fontSize="5xl"
      >
        <GridItem as="header" bg="orange.300" colSpan={4}>
          header
        </GridItem>
        <GridItem as="nav" colSpan={1} bg="pink.300">
          nav
        </GridItem>
        <GridItem as="main" colSpan={1} bg="green.300">
          main
        </GridItem>
        <GridItem as="aside" bg="blue.300">
          aside
        </GridItem>
        <GridItem
          as="footer"
          bg="orange.300"
          colStart={1}
          colEnd={4}
          rowStart={3}
          rowEnd={4}
        >
          footer
        </GridItem>
      </Grid>
    </>
  );
}
