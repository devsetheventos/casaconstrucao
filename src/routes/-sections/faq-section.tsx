import { Accordion, Box, HStack, Stack, Text } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";
import { HOME_FAQ_SECTION } from "@/constants/home-faq";

export function FaqSection() {
  return (
    <Box as="section" w="full" layerStyle="section.default" px={{ base: 4, md: 8 }} py={{ base: 10, md: 20 }}>
      <Box
        w="full"
        maxW="1400px"
        mx="auto"
        bg="#EEEEEE"
        borderRadius={{ base: "2xl", md: "3xl" }}
        border="1px solid #3A3A3A"
        px={{ base: 4, md: 8 }}
        py={{ base: 6, md: 10 }}
        backgroundImage="url('/noise.svg'), linear-gradient(#EEEEEE, #EEEEEE)"
        backgroundRepeat="repeat, no-repeat"
        backgroundSize="256px 256px, cover"
        backgroundBlendMode="overlay, normal"
      >
        <Stack gap={{ base: 6, md: 8 }}>
          <Text textAlign="center" textStyle="h1" color="#1E1E1E" fontSize={{ base: "2xl", md: "7xl" }}>
            {HOME_FAQ_SECTION.heading}
          </Text>

          <Box
            bg="#1E1E1E"
            borderRadius="3xl"
            border="1px solid rgba(238,238,238,0.5)"
            px={{ base: 4, md: 8 }}
            py={{ base: 5, md: 6 }}
            backgroundImage="url('/noise.svg'), linear-gradient(#1E1E1E, #1E1E1E)"
            backgroundRepeat="repeat, no-repeat"
            backgroundSize="256px 256px, cover"
            backgroundBlendMode="overlay, normal"
          >
            <Accordion.Root collapsible defaultValue={[HOME_FAQ_SECTION.items[0]?.id]} css={{ "& > *:last-child": { borderBottom: "none" } }}>
              {HOME_FAQ_SECTION.items.map((item) => (
                <Accordion.Item key={item.id} value={item.id} borderColor="rgba(238,238,238,0.05)">
                  <Accordion.ItemTrigger py={{ base: 4, md: 5 }}>
                    <HStack gap="4" flex="1" textAlign="left">
                      <Text textStyle="h3" color="#9A9A9A" fontSize={{ base: "sm", md: "2xl" }}>
                        {item.question}
                      </Text>
                    </HStack>
                    <Accordion.ItemIndicator>
                      <LuChevronDown color="#9A9A9A" size={28} />
                    </Accordion.ItemIndicator>
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody pb={{ base: 5, md: 6 }}>
                      <Text textStyle="body.md" color="#E1E1E1" maxW="1100px" fontSize={{ base: "xs", md: "md" }}>
                        {item.answer}
                      </Text>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
