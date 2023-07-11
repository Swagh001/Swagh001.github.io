import React from "react";
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from "@chakra-ui/react";
import retax from "../images/Project/Retax.png"
import HealthCare from "../images/Project/HealthCare.png"
import FootLocker from "../images/Project/FootLocker.png"
import GitHubCalendar from 'react-github-calendar';

const Projects = () => {
  return (
    <div id="projects" style={{ padding: "0 20px", zIndex: "11"  }}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        className="project-card"
        marginBottom="20px" // Add gap between each card
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={retax}
          alt='Retax Store'
          padding={2}
        />

        <Stack>
          <CardBody>
            <Heading className="project-title" size='md'><Text>Retax</Text></Heading>

            <Text className="project-description" py='2' textAlign={"left"}>
               Retax website is usefull for Customer Relationship Management (CRM).
               It is a strategic approach that businesses use to manage interactions and
               relationships with their customers. It involves the use of technology, processes, and
               strategies to analyze customer data, track customer interactions, and improve customer
               satisfaction and loyalty..
            </Text>
            <Text className="project-tech-stack" py='2'>
              You can Visit Below Link for more...
            </Text>
          </CardBody>

          <CardFooter>
            <Button className="project-github-link" variant='solid' colorScheme='blue' mr={2}>
              <a href="https://github.com/akashp369/RetaxClone" >Github</a>
            </Button>
            <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
              <a href="https://retaxcrm.netlify.app/">Deployed link</a>
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        className="project-card"
        marginBottom="20px" // Add gap between each card
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={HealthCare}
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading className="project-title" size='md'>HealthKart-Clone</Heading>

            <Text className="project-description" py='2'>
            HealthKart-Clone is a comprehensive e-commerce platform that offers a wide range of
            health and wellness products. With user-friendly navigation, customers can effortlessly
            browse through product listings, read detailed descriptions, and make informed purchasing decisions.
            The website also provides a seamless checkout process, secure payment options, and a dedicated customer support system,
            ensuring a convenient and reliable shopping experience..
            </Text>
            <Text className="project-tech-stack" py='2'>
            You can Visit Below Link for more...
            </Text>
          </CardBody>

          <CardFooter>
            <Button className="project-github-link" variant='solid' colorScheme='blue' mr={2}>
              <a href="https://github.com/Dev-42/HealthKart-Clone">Github</a>
            </Button>
            <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
              <a href="https://graceful-speculoos-4458b2.netlify.app/index.html">Deployed link</a>
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        className="project-card"
        marginBottom="20px" // Add gap between each card
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={FootLocker}
          alt='FootLocker'
        />

        <Stack>
          <CardBody>
            <Heading className="project-title" size='md'>The perfect latte</Heading>

            <Text className="project-description" py='2'>
            Footlocker Clone is a feature-rich online platform designed to replicate the renowned footwear retailer, Footlocker.
            The clone offers a vast collection of sneakers, athletic shoes, and sportswear from popular brands,
            providing customers with an immersive shopping experience. With intuitive search and filtering options,
            users can easily find their desired products, view detailed product information, and make purchases
            hassle-free. The clone also incorporates secure payment gateways, order tracking, and customer support,
            ensuring a seamless and satisfying shopping journey for sneaker enthusiasts.
            </Text>
            <Text className="project-tech-stack" py='2'>
            You can Visit Below Link for more...
            </Text>
          </CardBody>

          <CardFooter>
            <Button className="project-github-link" variant='solid' colorScheme='blue' mr={2}>
              <a href="https://github.com/Roshankr7249/footlocker">Github</a>
            </Button>
            <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
              <a href="https://heartfelt-clafoutis-70d37c.netlify.app/index.html">Deployed link</a>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        className="project-card"
        marginBottom="20px" // Add gap between each card
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={FootLocker}
          alt='FootLocker'
        />

        <Stack>
          <CardBody>
            <Heading class="project-title" size='md'>The perfect latte</Heading>

            <Text className="project-description" py='2'>
            Footlocker Clone is a feature-rich online platform designed to replicate the renowned footwear retailer, Footlocker.
            The clone offers a vast collection of sneakers, athletic shoes, and sportswear from popular brands,
            providing customers with an immersive shopping experience. With intuitive search and filtering options,
            users can easily find their desired products, view detailed product information, and make purchases
            hassle-free. The clone also incorporates secure payment gateways, order tracking, and customer support,
            ensuring a seamless and satisfying shopping journey for sneaker enthusiasts.
            </Text>
            <Text className="project-tech-stack" py='2'>
            You can Visit Below Link for more...
            </Text>
          </CardBody>

          <CardFooter>
            <Button className="project-github-link" variant='solid' colorScheme='blue' mr={2}>
              <a href="https://github.com/Roshankr7249/footlocker">Github</a>
            </Button>
            <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
              <a href="https://heartfelt-clafoutis-70d37c.netlify.app/index.html">Deployed link</a>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <p align="center" style={{margin:"1%"}}>
          <a  href="https://github.com/Swagh001/github-readme-streak-stats" >
              <img  id="github-streak-stats" title="🔥 Get streak stats for your profile at git.io/streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=Swagh001&theme=radical&hide_border=true&stroke=0000&background=#122722"/>
          </a>
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div>
          <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Swagh001&theme=2077" />
        </div>
        <div  style={{ display: 'flex', justifyContent: 'space-around', width: '60%', margin: '20px' }}>
          <img id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs?username=Swagh001&theme=2077' />
          <img  src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Swagh001&theme=2077" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%', margin: '20px' }}>
          <img id="github-stats-card"  src='https://github-readme-stats.vercel.app/api?username=Swagh001&theme=2077' />
          <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Swagh001&theme=2077&utcOffset=8" />
        </div>
      </div>
      <div className="react-activity-calendar" >
        {/* Your other portfolio content */}
        <GitHubCalendar  style={{  margin:"auto" }} username= "Swagh001" />
      </div>
    </div>
    
  );
};

export default Projects;