import { Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
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
  );
}
