import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";


import "./style.css";

// app dev 
import app1 from "../../assets/Abdul Haseeb/App/App-Ecomm/app1.png"
import app2 from "../../assets/Abdul Haseeb/App/App-Ecomm/app2.png"
import app3 from "../../assets/Abdul Haseeb/App/App-Ecomm/app3.png"

import dat1 from "../../assets/Abdul Haseeb/App/Dating/dat1.jpeg"
import dat2 from "../../assets/Abdul Haseeb/App/Dating/dat2.jpeg"

import call1 from "../../assets/Abdul Haseeb/App/Calling/call1.jpeg"
import call2 from "../../assets/Abdul Haseeb/App/Calling/call2.jpeg"
import call3 from "../../assets/Abdul Haseeb/App/Calling/call3.jpeg"
import call4 from "../../assets/Abdul Haseeb/App/Calling/call4.jpeg"
import call5 from "../../assets/Abdul Haseeb/App/Calling/call5.jpeg"
import call6 from "../../assets/Abdul Haseeb/App/Calling/call6.jpeg"

import pot1 from "../../assets/Abdul Haseeb/App/Photo-Edit/pot1.jpeg"
import pot2 from "../../assets/Abdul Haseeb/App/Photo-Edit/pot2.jpeg"
import pot3 from "../../assets/Abdul Haseeb/App/Photo-Edit/pot3.jpeg"
import pot4 from "../../assets/Abdul Haseeb/App/Photo-Edit/pot4.jpeg"

import uti1 from "../../assets/Abdul Haseeb/App/Utility/uti1.png"
import uti2 from "../../assets/Abdul Haseeb/App/Utility/uti2.png"
import uti3 from "../../assets/Abdul Haseeb/App/Utility/uti3.png"

import messindiaWeb from "../../assets/Abdul Haseeb/Web/Web-Ecomm/messindia.png"
import portfolio from "../../assets/Abdul Haseeb/Web/Portfolio/Portfolio.png"
import crm from "../../assets/Abdul Haseeb/Web/CRM/crm.png"
import managementSystem from "../../assets/Abdul Haseeb/Web/Management-sys/management.png"
import nakkai from "../../assets/Abdul Haseeb/Web/Web-Ecomm/nakkai.png"
import sei from "../../assets/Abdul Haseeb/Web/CRM/sei.png"
import i9Innovation from "../../assets/Abdul Haseeb/Web/informative/i9-innovation.png"
import cinta from "../../assets/Abdul Haseeb/Web/informative/cinta.png"
import astral from "../../assets/Abdul Haseeb/Web/informative/astral.png"
import sigma from "../../assets/Abdul Haseeb/Web/CRM/3sigma.png"
import tech from "../../assets/Abdul Haseeb/Web/Management-sys/tech.png"
import hospital from "../../assets/Abdul Haseeb/Web/Management-sys/hospital.png"

import logo1 from "../../assets/Abdul Haseeb/Gfx/Logo/BOiHdJ.avif"
import logo2 from "../../assets/Abdul Haseeb/Gfx/Logo/company.jpg"
import logo3 from "../../assets/Abdul Haseeb/Gfx/Logo/fire.jpg"
import logo4 from "../../assets/Abdul Haseeb/Gfx/Logo/kitchen.jpg"
import logo5 from "../../assets/Abdul Haseeb/Gfx/Logo/on-tech.png"
import logo6 from "../../assets/Abdul Haseeb/Gfx/Logo/ss.jpg"

import banner1 from "../../assets/Abdul Haseeb/Gfx/Banner/1.jpg"
import banner2 from "../../assets/Abdul Haseeb/Gfx/Banner/2.jpg"
import banner3 from "../../assets/Abdul Haseeb/Gfx/Banner/3.avif"

import post1 from "../../assets/Abdul Haseeb/Gfx/Social-post/Post-2-2.webp"
import post2 from "../../assets/Abdul Haseeb/Gfx/Social-post/Post-8.webp"
import post3 from "../../assets/Abdul Haseeb/Gfx/Social-post/Post-9.webp"
import post4 from "../../assets/Abdul Haseeb/Gfx/Social-post/pac-machine6.webp"
import post5 from "../../assets/Abdul Haseeb/Gfx/Social-post/pac-machine7.webp"

import tShirt1 from "../../assets/Abdul Haseeb/Gfx/T-shirts-design/1.jpg"
import tShirt2 from "../../assets/Abdul Haseeb/Gfx/T-shirts-design/2.jpg"
import tShirt3 from "../../assets/Abdul Haseeb/Gfx/T-shirts-design/3.jpg"

import uiUx1 from "../../assets/Abdul Haseeb/Gfx/Ui-Ux/Homepage1-2.png"
import uiUx2 from "../../assets/Abdul Haseeb/Gfx/Ui-Ux/Homepage1.webp"
import uiUx3 from "../../assets/Abdul Haseeb/Gfx/Ui-Ux/Homepage2-2.png"
import uiUx4 from "../../assets/Abdul Haseeb/Gfx/Ui-Ux/Homepage2.webp"
import uiUx5 from "../../assets/Abdul Haseeb/Gfx/Ui-Ux/i9-Innovations1.png"
import uiUx6 from "../../assets/Abdul Haseeb/Gfx/Ui-Ux/i9-Innovations.jpg"

import stationary1 from "../../assets/Abdul Haseeb/Gfx/stationary/1.jpg"
import stationary2 from "../../assets/Abdul Haseeb/Gfx/stationary/2.jpg"
import stationary3 from "../../assets/Abdul Haseeb/Gfx/stationary/3.avif"
import stationary4 from "../../assets/Abdul Haseeb/Gfx/stationary/4.jpg"

import illustration1 from "../../assets/Abdul Haseeb/Gfx/illustration/design1.png"
import illustration2 from "../../assets/Abdul Haseeb/Gfx/illustration/design2.png"
import illustration3 from "../../assets/Abdul Haseeb/Gfx/illustration/design3.png"
import illustration4 from "../../assets/Abdul Haseeb/Gfx/illustration/design4.png"
import illustration5 from "../../assets/Abdul Haseeb/Gfx/illustration/design5.png"

import Character2d from "../../assets/Abdul Haseeb/2D/2D-Charac/png-gas.webm"
import animation2d from "../../assets/Abdul Haseeb/2D/2D-Animate/hotDog.webm"
import animation2d2 from "../../assets/Abdul Haseeb/2D/2D-Animate/spacing.webm"

import environment1 from "../../assets/Abdul Haseeb/2D/2D-Environ/environment1.webp"
import environment2 from "../../assets/Abdul Haseeb/2D/2D-Environ/environment2.webp"
import environment3 from "../../assets/Abdul Haseeb/2D/2D-Environ/environment3.webp"
import environment4 from "../../assets/Abdul Haseeb/2D/2D-Environ/grass.webp"
import environment5 from "../../assets/Abdul Haseeb/2D/2D-Environ/stones.webp"
import environment6 from "../../assets/Abdul Haseeb/2D/2D-Environ/tree.webp"
import environment7 from "../../assets/Abdul Haseeb/2D/2D-Environ/trees.webp"

import cloth1 from "../../assets/Abdul Haseeb/2D/2D-Cloth/cloth1.jpg"
import cloth2 from "../../assets/Abdul Haseeb/2D/2D-Cloth/cloth2.jpg"
import cloth3 from "../../assets/Abdul Haseeb/2D/2D-Cloth/cloth3.jpg"
import cloth4 from "../../assets/Abdul Haseeb/2D/2D-Cloth/cloth4.avif"

import logo3d1 from "../../assets/Abdul Haseeb/3D/3D-Logo/logo1.jpg"
import logo3d2 from "../../assets/Abdul Haseeb/3D/3D-Logo/logo2.jpg"
import logo3d3 from "../../assets/Abdul Haseeb/3D/3D-Logo/logo3.jpg"

import character3d from "../../assets/Abdul Haseeb/3D/3D-Charac/MonsterAnimation.webm"
import animation3d1 from "../../assets/Abdul Haseeb/3D/3D-Animat/envelope.mp4"
import animation3d2 from "../../assets/Abdul Haseeb/3D/3D-Animat/cartoon.mp4"

import environment3d1 from "../../assets/Abdul Haseeb/3D/3D-Environ/environment1.jpg"
import environment3d2 from "../../assets/Abdul Haseeb/3D/3D-Environ/environment2.jpg"
import environment3d3 from "../../assets/Abdul Haseeb/3D/3D-Environ/environment3.avif"

import jewellery3d1 from "../../assets/Abdul Haseeb/3D/3D-Jewellery/ring.mp4"
import jewellery3d2 from "../../assets/Abdul Haseeb/3D/3D-Jewellery/chain.jpg"
import jewellery3d3 from "../../assets/Abdul Haseeb/3D/3D-Jewellery/chain1.jpg"

import furniture3d1 from "../../assets/Abdul Haseeb/3D/3D-Furniture/219844.avif"
import furniture3d2 from "../../assets/Abdul Haseeb/3D/3D-Furniture/mea21.jpg"
import furniture3d3 from "../../assets/Abdul Haseeb/3D/3D-Furniture/zsehqh73.jpg"

import cloth3d1 from "../../assets/Abdul Haseeb/3D/3D-Cloth/Shirt7.webm"
import cloth3d2 from "../../assets/Abdul Haseeb/3D/3D-Cloth/Shirt8.webm"
import cloth3d3 from "../../assets/Abdul Haseeb/3D/3D-Cloth/1undergarments.png"
import cloth3d4 from "../../assets/Abdul Haseeb/3D/3D-Cloth/3undergarments.png"

import architecture1 from "../../assets/Abdul Haseeb/Arche/Floor plans/example5.png"
import architecture2 from "../../assets/Abdul Haseeb/Arche/Floor plans/preview.svg"
import architecture3 from "../../assets/Abdul Haseeb/Arche/Interior/Modern-Classic-Interior-1-scaled.jpg"
import architecture4 from "../../assets/Abdul Haseeb/Arche/Interior/images.jpeg"
import architecture5 from "../../assets/Abdul Haseeb/Arche/Interior/modern-living-room.jpg"
import architecture6 from "../../assets/Abdul Haseeb/Arche/Exterior/home-exterior-design11-1652341598.jpeg"
import architecture7 from "../../assets/Abdul Haseeb/Arche/Exterior/images.jpeg"
import architecture8 from "../../assets/Abdul Haseeb/Arche/Exterior/maxresdefault.jpg"

import waxBox from "../../assets/Abdul Haseeb/3D/3D-Product/wax-box.png"
import penDrive from "../../assets/Abdul Haseeb/3D/3D-Product/pen-drive.jpg"
import boot from "../../assets/Abdul Haseeb/3D/3D-Product/boot.jpg"
import speaker from "../../assets/Abdul Haseeb/3D/3D-Product/speaker.webp"





export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("webDevelopment.eCommerce");

  const handleDropdownClick = (category) => {
    setSelectedCategory(category);
    };
    
    



    const sampleData = {
      "webDevelopment": {
        "eCommerce": [
          {
            madeBy: "React, Razor Pay, Firebase",
            img: messindiaWeb,
            description: "Mess India",
            link: "https://messindia.com/",
          },
          {
            madeBy: "React, Next js, Stripe",
            img: nakkai,
            description: "Nakkai",
            link: "https://nakkai.vercel.app/",
          },
        ],
        "informative": [
          {
            madeBy: "React, GSAP",
            img: cinta,
            description: "Cinta Fresh",
            link: "https://cinta-fresh.web.app/",
          },
          {
            madeBy: "React, Firebase",
            img: i9Innovation,
            description: "i9 Innovation",
            link: "https://i9-innovation-7cee7.web.app/",
          },
          {
            madeBy: "React",
            img: astral,
            description: "Astral Developers",
            link: "https://astral-developers.web.app/",
          },
        ],
        "portfolio": [
          {
            madeBy: "React",
            img: portfolio,
            description: "Portfolio",
            link: portfolio,
          },
        ],
        "crm": [
          {
            madeBy: "React, nodejs",
            img: crm,
            description: "Time To Tour",
            link: "https://crm-eta-rosy.vercel.app/",
          },
          {
            madeBy: "React",
            img: sei,
            description: "Sei Explore",
            link: "https://6639d78b412073b51db09968--cozy-peony-4226be.netlify.app/",
          },
          {
            madeBy: "React",
            img: sigma,
            description: "3sigma",
            link: "https://www.3sigmacrm.com/",
          },
        ],
        "managementSystem": [
          {
            madeBy: "React, Firebase",
            img: managementSystem,
            description: "Astral Management System",
            link: managementSystem,
          },
          {
            madeBy: "React",
            img: hospital,
            description: "hospital Management System",
            link: "https://edp-project-3a8b8.web.app/",
          },
          {
            madeBy: "React",
            img: tech,
            description: "TechTrove Attendance",
            link: "https://e-a-t-s.vercel.app/dashboard/6635c8d7e4967ac66fe35a95",
          },
        ],
        // Add more subcategories for Web Development if needed
      },

      "appDevelopment": {
        "eCommerce": [
          {
            madeBy: "React Native",
            img: app1,
            description: "E-Commerce app",
            link: app1,
          },
          {
            madeBy: "React Native",
            img: app2,
            description: "E-Commerce app",
            link: app2,
          },
          {
            madeBy: "React Native",
            img: app3,
            description: "E-Commerce app",
            link: app3,
          },
        
        ],
        "dating": [
          {
            madeBy: "Flutter",
            img: dat1,
            description: " Dating app",
            link: dat1,
          },
          {
            madeBy: "Flutter",
            img: dat2,
            description: " Dating app",
            link: dat2,
          },
        ],
        "calling": [
          {
            madeBy: "Flutter",
            img: call1,
            description: " calling app",
            link: call1,
          },
          {
            madeBy: "Flutter",
            img: call2,
            description: " calling app",
            link: call2,
          },
          {
            madeBy: "Flutter",
            img: call3,
            description: " calling app",
            link: call3,
          },
          {
            madeBy: "Made by Flutter",
            img: call4,
            description: " calling app",
            link: call4,
          },
          {
            madeBy: "Made by Flutter",
            img: call5,
            description: " calling app",
            link: call5,
          },
          {
            madeBy: "Made by Flutter",
            img: call6,
            description: " calling app",
            link: call6,
          },
        ],
        "photoEditing": [
          {
            madeBy: "Flutter",
            img: pot1,
            description: " photoEditing app",
            link: pot1,
          },
          {
            madeBy: "Flutter",
            img: pot2,
            description: " photoEditing app",
            link: pot2,
          },
          {
            madeBy: "Flutter",
            img: pot3,
            description: " photoEditing app",
            link: pot3,
          },
          {
            madeBy: "Flutter",
            img: pot4,
            description: " photoEditing app",
            link: pot4,
          },
        ],
        "utility": [
          {
            madeBy: "Flutter",
            img: uti1,
            description: " utility app",
            link: uti1,
          },
          {
            madeBy: "Flutter",
            img: uti2,
            description: " utility app",
            link: uti2,
          },
          {
            madeBy: "Flutter",
            img: uti3,
            description: " utility app",
            link: uti3,
          },
        ],
        // Add more subcategories for App Development if needed
      },

      "graphicDesign": {
        "logo": [
          {
            img: logo1,
            description: "Square",
            link: logo1,
          },
          {
            img: logo2,
            description: "Sample Logo",
            link: logo2,
          },
          {
            img: logo3,
            description: "Fire",
            link: logo3,
          },
          {
            img: logo4,
            description: "Kitchen",
            link: logo4,
          },
          {
            img: logo5,
            description: "On Tech",
            link: logo5,
          },
          {
            img: logo6,
            description: "Super System",
            link: logo6,
          },
        ],
        "banner": [
          {
            img: banner1,
            description: "Banner 1",
            link: banner1,
          },
          {
            img: banner2,
            description: "Banner 2",
            link: banner2,
          },
          {
            img: banner3,
            description: "Banner 3",
            link: banner3,
          },
        ],
        "socialMedia": [
          {
            img: post1,
            description: "ACM ",
            link: post1,
          },
          {
            img: post2,
            description: "Astral",
            link: post2,
          },
          {
            img: post3,
            description: "Astral",
            link: post3,
          },
          {
            img: post4,
            description: "BAC Jummah Mubarak",
            link: post4,
          },
          {
            img: post5,
            description: "BAC Simple Post",
            link: post5,
          },
        ],
        "tShirtDesign": [
          {
            img: tShirt1,
            description: "Sample design",
            link: tShirt1,
          },
          {
            img: tShirt2,
            description: "Sample design",
            link: tShirt2,
          },
          {
            img: tShirt3,
            description: "Creative design",
            link: tShirt3,
          },
        ],
        "uiUx": [
          {
            img: uiUx1,
            description: "Ozon Living",
            link: uiUx2,
          },
          {
            img: uiUx3,
            description: "Astero",
            link: uiUx4,
          },
          {
            img: uiUx5,
            description: "i9 Innovation",
            link: uiUx6,
          },
        ],
        "stationary": [
          {
            img: stationary1,
            description: "Sample stationary design",
            link: stationary1,
          },
          {
            img: stationary2,
            description: "Sample stationary design",
            link: stationary2,
          },
          {
            img: stationary3,
            description: "Sample stationary design",
            link: stationary3,
          },
          {
            img: stationary4,
            description: "Sample stationary design",
            link: stationary4,
          },
        ],
        "illustration": [
          {
            img: illustration1,
            description: "Illustration design",
            link: illustration1,
          },
          {
            img: illustration2,
            description: "Illustration design",
            link: illustration2,
          },
          {
            img: illustration3,
            description: "Illustration design",
            link: illustration3,
          },
          {
            img: illustration4,
            description: "Illustration design",
            link: illustration4,
          },
          {
            img: illustration5,
            description: "Illustration design",
            link: illustration5,
          },
        ],
        // Add more subcategories for Graphic Design if needed
      },

      "2dWork": {
        "character": [
          {
            type: "video" ,
            img: Character2d,
            description: "2D Character Animation",
            link: Character2d,
          },
        ],
        "animation": [
          // {
          //   type: "video",
          //   img: animation2d,
          //   description: "Sample animation design",
          //   link: animation2d,
          // },
          {
            type: "video",
            img: animation2d2 ,
            description: "Sample animation design",
            link: animation2d2,
          },
        ],
        "environment": [
          {
            img: environment1,
            description: "Sample environment design",
            link: environment1,
          },
          {
            img: environment2,
            description: "Sample environment design",
            link: environment2,
          },
          {
            img: environment3,
            description: "Sample environment design",
            link: environment3,
          },
          {
            img: environment4,
            description: "Grass And Bushes",
            link: environment4,
          },
          {
            img: environment5,
            description: "Stones",
            link: environment5,
          },
          {
            img: environment6,
            description: "Trees",
            link: environment6,
          },
          {
            img: environment7,
            description: "Trees",
            link: environment7,
          },
        ],
        "cloths": [
          {
            img: cloth1,
            description: "2D cloths design",
            link: cloth1,
          },
          {
            img: cloth2,
            description: "2D cloths design",
            link: cloth2,
          },
          {
            img: cloth3,
            description: "2D cloths design",
            link: cloth3,
          },
          {
            img: cloth4,
            description: "2D cloths design",
            link: cloth4,
          },
        ],
        // Add more subcategories for Graphic Design if needed
      },

      "3dWork": {
        "logo": [
          {
            img: logo3d1,
            description: "3D logo design",
            link: logo3d1,
          },
          {
            img: logo3d2,
            description: "3D logo design",
            link: logo3d2,
          },
          {
            img: logo3d3,
            description: "3D logo design",
            link: logo3d3,
          },
        ],
        "character": [
          {
            type: "video",
            img: character3d,
            description: "Sample character design",
            link: character3d,
          },

        ],
        "animation": [
          {
            type: "video",
            img: animation3d1,
            description: "3D Envelope Animation",
            link: animation3d1,
          },
          {
            type: "video",
            img: animation3d2,
            description: "3d Cartoon Animation",
            link: animation3d2,
          },
        ],
        "environment": [
          {
            img: environment3d1,
            description: "3D Environment",
            link: environment3d1,
          },
          {
            img: environment3d2,
            description: "3D Environment",
            link: environment3d2,
          },
          {
            img: environment3d3,
            description: "3D Environment",
            link: environment3d3,
          },
        ],
        "jewellery": [
          {
            type: "video",
            img: jewellery3d1,
            description: "Ring",
            link: jewellery3d1,
          },
          {
            img: jewellery3d2,
            description: "Hand Chain",
            link: jewellery3d2,
          },
          {
            img: jewellery3d3,
            description: "Hand Chain",
            link: jewellery3d3,
          },
        ],
        "furniture": [
          {
            img: furniture3d1,
            description: "3D Chair",
            link: furniture3d1,
          },
          {
            img: furniture3d2,
            description: "Wooden Table",
            link: furniture3d2,
          },
          {
            img: furniture3d3,
            description: "Table With Chair",
            link: furniture3d3,
          },
        ],
        "product": [
          {
            img: waxBox,
            description: "Wax Box",
            link: waxBox,
          },
          {
            img: penDrive,
            description: "Pen Drive",
            link: penDrive,
          },
          {
            img: boot,
            description: "Boot",
            link: boot,
          },
          {
            img: speaker,
            description: "Speaker",
            link: speaker,
          },
        ],
        "cloths": [
          {
            type: "video",
            img:  cloth3d1,
            description: "3D T-Shirt",
            link: cloth3d1,
          },
          {
            type: "video",
            img: cloth3d2,
            description: "3D T-Shirt",
            link: cloth3d2,
          },
          {
            img: cloth3d3,
            description: "3D Sample",
            link: cloth3d3,
          },
          {
            img: cloth3d4,
            description: "3D Sample",
            link: cloth3d4,
          },
        ],
        // Add more subcategories for Graphic Design if needed
      },

      "architecture": {
        "floorPlan": [
          {
            img: architecture1,
            description: "Sample floorPlan",
            link: architecture1,
          },
          {
            img: architecture2,
            description: "Sample floorPlan",
            link: architecture2,
          },
        ],
        "interior": [
          {
            img: architecture3,
            description: " interior design",
            link: architecture3,
          },
          {
            img: architecture4,
            description: " interior design",
            link: architecture4,
          },
          {
            img: architecture5,
            description: " interior design",
            link: architecture5,
          },
        ],
        "exterior": [
          {
            img: architecture6,
            description: "Exterior design",
            link: architecture6,
          },
          {
            img: architecture7,
            description: "Exterior design",
            link: architecture7,
          },
          {
            img: architecture8,
            description: "Exterior design",
            link: architecture8,
          },
        ],
        // Add more subcategories for Graphic Design if needed
      },
      // Add more categories as needed
    };
    


  
  


  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className=" mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left main-hr" />
          </Col>
        </Row>


      <div className="main-div">
        <ul className="d-flex justify-content-center flex-wrap">
        <Dropdown>
          <Dropdown.Toggle className="bg-black border-0 my-1" id="dropdown-web">
          Web Development
          </Dropdown.Toggle>

          <Dropdown.Menu className="bg-black">
            <Dropdown.Item onClick={() => handleDropdownClick('webDevelopment.eCommerce')}>E-Commerce</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('webDevelopment.informative')}>Informative</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('webDevelopment.portfolio')}>Portfolio</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('webDevelopment.crm')}>CRM</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('webDevelopment.managementSystem')}>Management System</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle className="bg-black border-0 my-1" id="dropdown-app">
          App Development
          </Dropdown.Toggle>

          <Dropdown.Menu className="bg-black">
            <Dropdown.Item onClick={() => handleDropdownClick('appDevelopment.eCommerce')}>E-Commerce</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('appDevelopment.dating')}>Dating</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('appDevelopment.calling')}>Calling</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('appDevelopment.photoEditing')}>Photo Editing</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('appDevelopment.utility')}>Utility</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
              <Dropdown.Toggle className="bg-black border-0 my-1" id="dropdown-basic">
              Graphic Design
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-black border-0">
                <Dropdown.Item onClick={() => handleDropdownClick('graphicDesign.logo')}>Logo</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('graphicDesign.banner')}>Banner</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('graphicDesign.socialMedia')}>Social Media</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('graphicDesign.tShirtDesign')}>T-Shirt Design</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('graphicDesign.uiUx')}>UI/UX</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('graphicDesign.stationary')}>Stationary</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('graphicDesign.illustration')}>Illustration</Dropdown.Item>
              </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
              <Dropdown.Toggle className="bg-black border-0 my-1" id="dropdown-basic">
              2D Work
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-black border-0">
                <Dropdown.Item onClick={() => handleDropdownClick('2dWork.character')}>2D Character</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('2dWork.animation')}>2D Animation</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('2dWork.environment')}>2D Environment</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('2dWork.cloths')}>2D Cloths</Dropdown.Item>
              </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
              <Dropdown.Toggle className="bg-black border-0 my-1" id="dropdown-basic">
              3D Work
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-black border-0">
                <Dropdown.Item onClick={() => handleDropdownClick('3dWork.logo')}>3D Logo</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('3dWork.character')}>3D Character</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('3dWork.animation')}>3D Animation</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('3dWork.environment')}>3D Environment</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('3dWork.jewellery')}>3D Jewellery</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('3dWork.furniture')}>3D Furniture</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('3dWork.product')}>3D Product</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('3dWork.cloths')}>3D Cloths</Dropdown.Item>
              </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
              <Dropdown.Toggle className="bg-black border-0 my-1" id="dropdown-basic">
              Architecture
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-black">
                <Dropdown.Item onClick={() => handleDropdownClick('architecture.floorPlan')}>Floor Plan</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('architecture.interior')}>Interior</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownClick('architecture.exterior')}>Exterior</Dropdown.Item>
              </Dropdown.Menu>
        </Dropdown>
        
        </ul>
      </div>
      

      <div className="mb-5 po_items_ho d-flex flex-wrap">
        {/* Render portfolio items */}
        {selectedCategory && sampleData[selectedCategory.split(".")[0]] ? (
          sampleData[selectedCategory.split(".")[0]][selectedCategory.split(".")[1]].map((data, i) => (
            <div key={i} className="po_item">
              {data.type === "video" ? (
                <video className="main-vid" src={data.img} autoPlay muted loop>
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img className="main-img" src={data.img} alt="" />
              )}
              <div className="content">
                <p>{data.description}</p>
                <a target="blank" href={data.link}>view project</a>
                <h6 className="sm made-by bg-white text-black badge">{data.madeBy}</h6>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available for the selected category</p>
        )}
      </div>
      </Container>
    </HelmetProvider>
  );
};