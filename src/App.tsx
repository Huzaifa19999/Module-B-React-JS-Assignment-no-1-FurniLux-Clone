import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping, faEnvelope, faLocationArrow, faCopyright, faArrowRight, faCouch, faBed, faStroopwafel, faWineGlassEmpty, faDemocrat, faLightbulb, faTable, faPersonDress  } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { title } from 'process';



function App () {

  const navbarMenu = ["Home", "Categories", "About Us", "Pages", "Contact Us"];
  const authentication  = ["Log In"]; 
  const bgCategoires = [
    { 
      name:"Sofa",
      icon:<FontAwesomeIcon icon={faCouch} />
     },
    { 
      name:"Bed",
      icon:<FontAwesomeIcon icon={faBed} />
     },
    { 
      name:"Dresser",
      icon:<FontAwesomeIcon icon={faPersonDress} />
     },
    { 
      name:"Shelf",
      icon:<FontAwesomeIcon icon={faTable} />
     },
    { 
      name:"Lamp",
      icon:<FontAwesomeIcon icon={faLightbulb} />
     },
    { 
      name:"Decor",
      icon:<FontAwesomeIcon icon={faDemocrat} />
     }
  ]
  const elevations = [

    {
      name:"Comfortable Sofa",
      price:80.99,
      img_URL:"https://hips.hearstapps.com/hmg-prod/images/most-comfortable-couches-havenly-647b6b7f30cdf.png?crop=1.00xw:0.756xh;0,0.244xh&resize=1200:*",
    },
    {
      name:"Elegant Side Table",
      price:80.99,
      img_URL:"https://sp.apolloboxassets.com/vendor/product/productImages/2022-08-09/lwI9mArray_12.jpg",
    },
    {
      name:"Classy Padded Chair",
      price:80.99,
      img_URL:"https://www.idfdesign.com/images/upholstered-chairs/malaga-se195-chair-with-straight-backrest-3.jpg"
    }
    
  ]
  const allProducts = [

    {
      name:"Wooden Shelf",
      price:80.99,
      img_URL:"https://static-01.daraz.pk/p/3394f1e5825520dfd1961bb0b845c4f5.jpg_750x750.jpg_.webp"
    },
    {
      name:"Comfortable Sofa",
      price:80.99,
      img_URL:"https://hips.hearstapps.com/hmg-prod/images/most-comfortable-couches-havenly-647b6b7f30cdf.png?crop=1.00xw:0.756xh;0,0.244xh&resize=1200:*"
    },
    {
      name:"Classy Chair",
      price:80.99,
      img_URL:"https://www.idfdesign.com/images/luxury-classic-chairs-with-arm-rests/giorgione-armchair-padded-chair.jpg"
    },
    {
      name:"Luxurious Bed",
      price:80.99,
      img_URL:"https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/07/Modern-Luxury-Bedroom-Ideas-on-a-Budget-D-14-07.jpg"
    },
    {
      name:"Stylish Lamp",
      price:80.99,
      img_URL:"https://m.media-amazon.com/images/I/61K5lO4yQVL._AC_SL1500_.jpg"
    },
    {
      name:"Stylish Bed",
      price:80.99,
      img_URL:"https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/02/BK0027-bed-modern-bed-design-in-pakistan-Woodwoon.webp?fit=1536%2C1024&ssl=1"
    },
    {
      name:"Comfortable Sofa",
      price:80.99,
      img_URL:"https://hips.hearstapps.com/hmg-prod/images/comfy-couch-options-1-659d7479e4adc.jpg?crop=1.00xw:0.502xh;0,0.268xh&resize=1200:*"

    },
    {
      name:"Stylish Divan",
      price:80.99,
      img_URL:"https://5.imimg.com/data5/WP/VB/HE/SELLER-32569823/stylish-wooden-couch-sofa-1000x1000.jpg"
    },
    {
      name:"Wooden Shelf",
      price:80.99,
      img_URL:"https://static-01.daraz.pk/p/3394f1e5825520dfd1961bb0b845c4f5.jpg_750x750.jpg_.webp"
    }

  ]

  const blogs = [
    {
      title:"First Blog Post",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elit vel turpis lacinia",
      time:"Last updated 3 minutes agp",
      image_URL:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/Collage-Maker-14-Sep-2022-0149-PM.jpg"
    },
    {
      title:"Second Blog Post",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elit vel turpis lacinia",
      time:"Last updated 4 minutes agp",
      image_URL:"https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg"
    },
    {
      title:"Third Blog Post",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elit vel turpis lacinia",
      time:"Last updated 5 minutes agp",
      image_URL:"https://wp.globaluniversitysystems.com/mua/wp-content/uploads/sites/10/2023/03/board-certified-doctor-meaning.webp"
    }
  ]


  return (

<div>

                           {/* Navbar-Start */}

  <div className='bg-dark d-flex justify-content-center align-items-center'>
  <FontAwesomeIcon className='text-white me-2' icon={faBell} />
    <p className='text-white d-flex mt-3 '>Enjoy 30% off -Shop Now and Save Big!</p>

  </div>

    <div className='d-flex navbar justify-content-around align-items-center'>
      <ul><li className='navbar-logo me-5'>furniLux</li></ul>  
      <ul className='d-flex mt-3'>
          {navbarMenu.map((e,index) => 
          <li key={index} className='ms-4'>{e}</li> )}
        </ul>
        <ul className='d-flex ms-5 justify-content-end'>
            {authentication.map((e) => 
            <><li className='mt-3 ms-5'>{e}</li>
             <li className='mt-3 ms-3 text-primary'>Sign In</li>
               </>
          )}
        </ul>
    </div>    
    <br />
                            {/* Navbar-End */}




<div>
  <img className='bg-1' src="https://img.freepik.com/premium-photo/interior-modern-design-room-3d-rendering_672982-473.jpg?size=626&ext=jpg" alt="" />
  <div className='bg-1des text-center'>
    <div>
      <h1 className='w-50 mx-auto'>FurniLux - Your Brand for Stylish Living</h1>
      <h6 className='w-50 mx-auto'>Discover a fusion of modern design and functionality, crafted to elevate every corner of your living space. FurniLux, redefining stylish living for you</h6>
    </div>
    <br />
    <button className='shop-btn btn btn-invisible text-danger ps-3'>Shop Now<FontAwesomeIcon className='ms-3' icon={faArrowRight} /></button>
  </div>
            
  <ul className='d-flex small-box w-100 justify-content-center'>
    {bgCategoires.map((e, index) =>
      <li className='bg-box ms-5 ps-4 pe-4' key={index}>{e.icon} {e.name}</li>
    )}
  </ul>
</div>

          <br />
          <br />

             
             
                              {/* Elevation-Start */}
        
          <h1 className='text-center'>Elevate your Living Room</h1>
          <br />
<div className="container-fluid elevation  mx-auto">
  {elevations.map((e, index) => (
    <div key={index} className="card card-div mx-auto">
      <img src={e.img_URL} className="card-img-top" alt="..." />
      <div className='d-flex'>
      <div className="card-body">
        <p key={index} className="card-text">{e.name}</p>
        <p key={index} className="card-text">${e.price}</p>
      </div>
        <div>
        <FontAwesomeIcon className='shopping-cart me-3 mt-3' icon={faCartShopping} />
        </div>
      </div>
    </div>
  ))}
</div>

<br />

                              {/* Elevation-End */}

  <div className="card text-bg-white">
  <img src="https://hipvan-images-production.s3.amazonaws.com/emails/6615b53e-f00c-45c5-90bc-44bd8accf0f0/the-sleep-sale_edm-app-banner_v1.png" className="card-img" alt="..."/>
</div>
<br />

                            {/* all-Products-Start */}

  <h1 className='text-center'>All Products</h1>
  <br />
  <div className="container-fluid products mx-auto">
  {allProducts.map((e, index) => (
    <div key={index} className="card card-div  d-flex mx-auto">
      <img src={e.img_URL} className="card-img-top" alt="..." />
      <div className='d-flex'>
      <div className="card-body">
        <p className="card-text">{e.name}</p>
        <p className="card-text">${e.price}</p>
      </div>
        <div>
        <FontAwesomeIcon className='shopping-cart me-3 mt-3' icon={faCartShopping} />
        </div>
      </div>
    </div>
  ))}
</div>
<br />
<br />

<div className="card text-bg-white">
  <img  src="https://images.template.net/216796/furniture-sale-promotion-facebook-post-template-edit-online.jpg" className="card-img bg-2" alt="..."/>
</div>

                            {/* all-Products-End */}

                            {/* Blogs-Start */}
                            <br />
                            <br />
  <h1 className='text-center'>Blogs & Insights</h1>
  <h5 className='text-center'>Explore our Blogs for Design Inspiration and Tips</h5>
  <br />
  <br />
    <div className='d-flex justify-content-center'>

    {blogs.map((e,index) => (
      <div className=" card blog-card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
        <img key={index} src={e.image_URL} className="img-fluid h-100 rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 key={index} className="card-title">{e.title}</h5>
        <p key={index} className="card-text">{e.description}</p>
        <p className="card-text"><small className="text-body-secondary">{e.time}</small></p>
      </div>
    </div>
  </div>
</div>
    ) )}
    </div>
<br />
<br />

                            {/* Blogs-End */}

                            {/* {Footer} */}



<div className='d-flex p-4 footer justify-content-around ps-5 w-100'>

<ul>
  <tr>furniLux</tr>
<li>Designing Dreams, Crafting Comfort</li>
<li>+92 310 6733754</li>
<li>huzaifaqadir10@gmail.com</li>
<li>Jawan Pakistan,Hussainabad</li>
</ul>

<ul>
  <tr>About Us</tr>
  <li><FontAwesomeIcon icon={faLocationArrow} />About Us</li>
  <li><FontAwesomeIcon icon={faLocationArrow} />Blog </li>
  <li><FontAwesomeIcon icon={faLocationArrow} />Contact Us</li>
  <li><FontAwesomeIcon icon={faLocationArrow} /> Popular Question</li>
</ul>

  <ul>
    <tr>What's Popular</tr>
    <li><FontAwesomeIcon icon={faLocationArrow} /> King Size Beds</li>
    <li><FontAwesomeIcon icon={faLocationArrow} />Sofas</li>
    <li><FontAwesomeIcon icon={faLocationArrow} />Chair</li>
    <li><FontAwesomeIcon icon={faLocationArrow} />Decorative Lamps</li>
  </ul>

  <ul>
    <tr>Get 15% off your first order!</tr>
    <li className='w-75'>Subscribe our news letter and get discount for your first order! also receives updates and more</li>
    <br />
    <div className='footer-icon'>
    <FontAwesomeIcon className='envelope' icon={faEnvelope} />
    <input className='footer-input' placeholder='Email Address' type="text" />
    </div>
  </ul>

  </div>
  <ul className='ps-5 footer '>
    <br />
    <br />
    <li className='ps-5 bold-text'><FontAwesomeIcon icon={faCopyright} />2024 Furnilux. All Rights Reserved</li>
  </ul>
  


          
         














          </div>
  );
}

export default App;
