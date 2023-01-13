import {
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" minH="100vh" px={5}>
      {/* メイン */}
      <Grid
        as="main"
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        // autoRows="1fr"
        py={5}
        gap="120px 20px"
        justifyContent="space-evenly"
        alignContent="center"
        bg="yellow.300"
      >
        <GridItem className="storycard" justifyItems="center">
          <Image
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720"
            // src="xx"
            height="100%"
            borderRadius={20}
            objectFit="cover"
            verticalAlign="bottom"
          ></Image>
          <Box fontWeight="bold">Ganggu-myeon, Yeongdeok-gun、韓国</Box>
        </GridItem>
        <GridItem className="storycard" justifyItems="center">
          <Image
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720"
            // src="xx"
            height="100%"
            borderRadius={20}
            objectFit="cover"
            verticalAlign="bottom"
          ></Image>
          <Box fontWeight="bold">Ganggu-myeon, Yeongdeok-gun、韓国</Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}
