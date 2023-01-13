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
      {/* お知らせ c1naj2se c1w995we dir dir-ltr */}
      <Box as="info" h="80px" py="5" justifyContent="center" bg="#F7F7F7">
        合⁠計⁠金⁠額⁠をは⁠っ⁠き⁠り⁠表⁠示 さらに詳しく
      </Box>

      {/* ヘッダー h1wqqi3k dir dir-ltr*/}
      <Box as="header" h="80px" py="5" bg="orange.300" justifyContent="center">
        header
      </Box>

      {/* グロナビ n1p4yt3r nsi0rux dir dir-ltr*/}
      <Box as="nav" h="98px" py="5" bg="green.300">
        glonav
      </Box>

      {/* メイン */}
      {(() => {
        const items = [];
        for (let i = 0; i < 6; i++) {
          items.push(
            <GridItem className="storycard" justifyItems="center" flex={1}>
              <Image
                src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720"
                width="100%"
                height="100%"
                boxSizing="border-box"
                // position="absolute"
                borderRadius={20}
                objectFit="cover"
                verticalAlign="bottom"
              ></Image>
              <Box fontWeight="bold">Ganggu-myeon, Yeongdeok-gun、韓国</Box>
              <Box>大海原の眺望</Box>
              <Box>1月10日～15日</Box>
              <Box>¥ 37,369 /泊</Box>
            </GridItem>
          );
        }
        return (
          <Grid
            as="main"
            templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            // templateRows="repeat(auto-fit, minmax(300px, 1fr))"
            py={5}
            gap="120px 20px"
            justifyContent="space-evenly"
            alignContent="center"
            bg="yellow.300"
          >
            {items}
          </Grid>
        );
      })()}

      {/* フッター fdv8m2z dir dir-ltr*/}
      <Box as="footer" h="128px" py="5" bg="blue.300">
        footer
      </Box>
    </Flex>
  );
}
