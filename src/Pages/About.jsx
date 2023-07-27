import React from "react";
import { Text, Button, Box, Flex, Image } from "@chakra-ui/react";
import homeLogo from "../images/myimage.jpeg";

const About = () => {
  const onButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1Ec_5llHSVpIsiRKsxcqii_AFW2pl_1do/view?usp=drive_link",
      "_blank"
    );
    let link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1Ec_5llHSVpIsiRKsxcqii_AFW2pl_1do";
    link.download = "Shailesh-Wagh.pdf";
    link.click();
  };

  return (
    <Box id="about" className="about section">
      <Text fontSize={["2xl", "3xl", "4xl"]} color="#cd5ff8" mx="auto" ml={["-10%", "-20%", "-35%"]} mb={["3", "5"]}>
        About
      </Text>
      <Flex direction={["column", "column", "row"]} align="center" justify="space-around" h={["auto", "auto", "600px"]}>
        <Box w={["100%", "100%", "50%"]} width={"70%"} id="user-detail-intro">
          <Text
            id={"user-detail-intro"}
            fontSize={["lg", "lg", "xl"]}
            mx={["2", "2", "30"]}
            mb={["5", "5", "0"]}
            textAlign={["center", "center", "left"]}
          >
            Hello, I'm <Text as="span" color="#cd5ff8">Shailesh Wagh</Text>, a determined and versatile Full Stack MERN developer.
            <br /> With a passion for web development and a solid foundation in{" "}
            <Text as="span" color="#cd5ff8">MongoDB, Express.js, React.js,</Text> and <Text as="span" color="#cd5ff8">Node.js</Text>, I'm committed to creating impactful and user-centric applications.
            <br /> I thrive on continuous learning, embracing challenges, and collaborating with like-minded professionals to build innovative solutions.
            <br /> Let's connect and explore the possibilities together.
          </Text>
        </Box>
        <Box className="home-imgee" width={"40%"}>
          <Image src={homeLogo} alt="home pic" className="home-img" width={"50%"} maxH={["70%", "70%", "100%"]} mt={["-10%", "-10%", "-20%"]} />
        </Box>
      </Flex>
      <Flex mt={["0", "0", "-10%"]} mb={["5%", "5%", "5%"]} align="center" justify="center" ml={["0", "0", "-3%"]}>
        <Box>
          <Text>
            Download <Text as="strong" className="main-name">Resume:</Text>
          </Text>
          <Button
            backgroundColor="#a891b7"
            _hover={{ bg: "#a891b7", color: "black" }}
            color="white"
            variant="solid"
            onClick={onButtonClick}
            size={["sm", "md"]}
            id="resume-button-2"
            mt={["2", "2", "0"]}
          >
            RESUME
          </Button>
        </Box>
      </Flex>
    </Box>
    
  );
};

export default About;
