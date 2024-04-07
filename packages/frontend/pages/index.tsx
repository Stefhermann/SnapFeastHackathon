import type { NextPage } from "next";
import { Box, Heading, Text, HStack, Button } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";
import { motion } from "framer-motion";
import { useRef } from "react";
import ImageUpload from "../components/image-upload";

const buttonHover = {
  hover: {
    borderBottom: "2px solid #0F78A2",
    transition: {
      duration: 0.3,
    },
  },
};

const realbuttonhover = {
  hover: {
    backgroundColor: "#6BB9E5",
    borderBottom: "2px solid #0F78A2",
    transition: {
      duration: 0.3,
    },
  },
};

const Home: NextPage = () => {
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  // Function to scroll to the referenced section
  const scrollToRef = (ref) => {
    if (ref && ref.current /* Check if the reference is defined */) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout title={"SnapFeast"}>
      <Box px={10} py={5} maxWidth="100%">
        <Box position="absolute" right="0" top="-100" zIndex={-1}>
          <svg width="691" height="2140" viewBox="0 0 691 2140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1207.39 1677.6C1144.24 1890.36 1307.68 2057.23 1225.22 2047.1C1143.28 2034.98 1042.35 1909.31 949.567 1849.1C856.508 1786.5 1279.37 2194.05 1207.38 2133.1C1135.91 2070.16 373.908 1483.47 373.908 1483.47C373.908 1483.47 -117.137 1294.73 26.7754 1028.83C134.408 829.965 28.1989 641.431 104.275 558.598C180.63 478.149 278.645 436.714 406.775 384.598C534.906 332.481 707.692 110.882 817.428 22.5715C927.443 -63.3549 1023.84 27.8519 1114.53 172.274C1205.73 314.711 1844.1 796.588 1788.45 1028.83C1732.29 1263.06 1334.17 1667.15 1225.23 1921.9C1117.59 2175.07 1271.32 1465.24 1207.39 1677.6Z" fill="url(#paint0_radial_44_93)" />
            <defs>
              <radialGradient id="paint0_radial_44_93" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40.4671 1632.01) rotate(-46.6569) scale(1629.26 1540.19)">
                <stop offset="0.166667" stop-color="#FF5C00" />
                <stop offset="1" stop-color="#E88614" />
              </radialGradient>
            </defs>
          </svg>
        </Box>
        <Box position="absolute" left="0" top="1100">
          <svg width="615" height="2263" viewBox="0 0 615 2263" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-612.524 487.261C-545.911 261.597 -711.163 88.7467 -627.05 97.8343C-543.481 109.026 -441.657 239.622 -347.503 301.334C-253.088 365.555 -680.883 -56.1312 -607.97 6.76849C-535.602 71.7719 236.756 675.827 236.756 675.827C236.756 675.827 736.367 865.362 586.733 1148.65C474.821 1360.52 581.406 1557.33 502.882 1646.19C424.097 1732.54 323.582 1778.16 192.203 1835.63C60.8235 1893.09 -117.856 2130.21 -230.812 2225.51C-344.028 2318.29 -441.569 2223.95 -532.739 2073.37C-624.454 1924.89 -1271.6 1429 -1212.44 1182.93C-1152.75 934.756 -742.109 500.748 -628.301 229.897C-515.844 -39.2568 -679.942 712.518 -612.524 487.261Z" fill="url(#paint0_radial_44_94)" />
            <defs>
              <radialGradient id="paint0_radial_44_94" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(578.78 512.644) rotate(132.221) scale(1717.17 1574.05)">
                <stop offset="0.166667" stop-color="#3E95D4" />
                <stop offset="1" stop-color="#6BB9E5" />
              </radialGradient>
            </defs>
          </svg>
        </Box>
        <HStack justifyContent={"space-between"}>
          <Heading as={"h1"}>SF</Heading>
          <HStack>
            <Box fontSize="17px">
              <Text
                as={motion.div}
                variants={buttonHover}
                whileHover="hover"
                transition={{ duration: 0.05 }}
                onClick={() => scrollToRef(aboutUsRef)} // Add click handler to scroll
              >
                about us
              </Text>
            </Box>
            <Box
              fontSize="17px"
              paddingLeft={10}
              paddingRight={10}
            >
              <Text
                as={motion.div}
                variants={buttonHover}
                whileHover="hover"
                transition={{ duration: 0.05 }}
                onClick={() => scrollToRef(contactUsRef)} // Add click handler to scroll
              >
                contact us
              </Text>
            </Box>
            <Button
              borderRadius={15}
              backgroundColor={"#3E95D4"}
              color="white"
              marginTop="5"
              fontSize="17px"
              as={motion.div}
              variants={realbuttonhover}
              whileHover="hover"
              transition={{ duration: 0.05 }}
              onClick={() => console.log("clicked")}
            >sign up
            </Button>
          </HStack>
        </HStack>
        <Box>
          <Text fontSize={80} marginBottom={-10} marginTop={180}>
            a whole feast with
          </Text>
          <Text fontSize={80}>
            just a snap
          </Text>
          <Text fontSize={60} fontWeight={"light"}>
            fridge -> recipes
          </Text>
          <Box marginRight="1550" marginTop="5">
            <ImageUpload />
          </Box>
        </Box>
        <Box
          ref={aboutUsRef} // Reference to the section
          marginTop="350"
          width="90%"
          height="30vh" // Adjust the height as needed
          bgColor="#86CEFF"
          transform="rotate(-3deg)"
          borderRadius="15px"
          // 2px black stroke
          border="1px solid #000"
          alignSelf="center" // Centers the box if it's inside a flex container
          marginBottom="5"// Adds some space below the box, adjust as needed
          textAlign="center"
        >
          <Box marginTop="20" marginBottom="19" textColor="orange">
            <Heading as={"h2"}>About Us</Heading>
          </Box>
          <Box px="10" py="5" textColor="white" fontSize="20px" marginLeft="20" marginRight="20">
            We are a dynamic and inventive tech enthusiast team with a passion for culinary innovation, leading the  development of an image-driven recipe generator aimed at transforming cooking experiences for food lovers everywhere.
          </Box>
        </Box>
        <Box
          ref={contactUsRef} // Reference to the section
          marginTop="600"
          width="90%"
          height="30vh" // Adjust the height as needed
          bgColor="#E86014"
          transform="rotate(3deg)"
          borderRadius="15px"
          // 2px black stroke
          border="1px solid #000"
          alignSelf="center" // Centers the box if it's inside a flex container
          marginBottom="5"// Adds some space below the box, adjust as needed
          textAlign="center"
        >
          <Box px="10" py="5" textColor="#3E95D4" marginTop="10">
            <Heading>Contact Us</Heading>
          </Box>
          <Box px="10" py="5" textColor="white" fontSize="20px" marginLeft="330">
            <HStack>
              <Box>Stefan Hermann | Fullstack
                <Box>[GitHub] /Stefhermann</Box>
                <Box>[LinkedIn] /in/stef-m-hermann</Box>
                <Box>[Email] herma912@umn.edu</Box>
              </Box>
              <Box>Ansh Patel | Frontend
                <Box>[GitHub] /anshpatelcs</Box>
                <Box>[LinkedIn] /in/anshmpatel</Box>
                <Box>[Email] </Box>
              </Box>
              <Box>Samuel Roberts | Fullstack
                <Box>[GitHub] /sjrooberts2004</Box>
                <Box>[LinkedIn] /in/samuel-joshua-roberts</Box>
                <Box>[Email] sjroberts293@gmail.com</Box>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Home;
