import Header from "../Header"
import button from '../../images/button.png'
import search from '../../images/search.png'
import img from '../../images/image1.png'
import img2 from '../../images/image2.png'
import img3 from '../../images/image3.png'
import img4 from '../../images/image4.png'
import img5 from '../../images/image5.png'
import img6 from '../../images/image5.png'

import Filter from "../Filter"
import './index.css'
import ProductList from "../ProductList"
import { useState } from "react"

const listOfFlower=[
    {image:img,
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum Aut ipsam '   
    },
     {image:img2,
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum Aut ipsam '   
       }, 
       {image:img3,
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum Aut ipsam '   
       }, 
       {image:img4,
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum Aut ipsam '   
       },
        {image:img5,
            text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum Aut ipsam '   
        },
       {image:img6,
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum Aut ipsam '   
       },
       {image:img,
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum Aut ipsam '   
    }

]

const Home = () =>{

    const [len,setlenght]=useState(6)
    const [view,setView]=useState(false)
    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

    const viewMore =()=>{
        setlenght(9)
        setView(true)
    }

    const showLess=()=>{
        setlenght(6)
        setView(false)
    }
    return(
        <>
         <Header/>
         <div className="main-container">
             <div className="search-box-container">
                <p className="search"><img src={search} className="search-image"/></p>
                <input type='text' className="search-input" placeholder="Search Plant"/>
                <p className="search right" ><img src={button} className="leaf-image"/></p>
             </div>
             <div className="button-container">
                <button className="selection-button">
                    Plants
                </button>
                <button className="selection-button">
                    Pots
                </button>
             </div>
             <p className="text">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut 
                internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates 
                ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste 
                deleniti et porro aspernatur ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste 
                .</p>
             <h3 className="section-text">Nursery</h3>
             <div className="flower-container">
                   {listOfFlower.map((each)=>(
                    <div>
                        <img src={each.image} />
                        <p className="description">{each.text}</p>        
                    </div>
                 ))}
             </div>
             <div className="product-container">

                <Filter/>
                <ProductList len={len}/>
             </div>
             <div className="view-button-container">
                {view?<button  className="view-button"onClick={showLess}>Show Less</button>:<button className="view-button" onClick={viewMore}>View More</button>}
             </div>
             </div>

             <div className="footer">
                <div className="footer-section-one">
                <div className="flex-column">
                    <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                    <input type="text" placeholder="Enter your email address"/>
                    <button className="view-button">SUBSCRIBE</button>
                </div>
                <div>
                    <h3>ABOUT US</h3>
                    <p>Our Story</p>
                    <p>Blogs</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                    <p>Help & Support</p>

                </div>
                <div>
                    <h3>OUR SERVICES</h3>
                    <p>Book Maali</p>
                    <p>Plant Day Care</p>
                    <p>Rent Plants</p>
                    <p>Plants & Pots</p>
                    <p>Gardening Tools</p>

                </div>
               
                <div>
                <h3>USEFUL LINKS</h3>
                <p>My Account</p>
                    <p>Orders & Returns</p>
                    <p>Track Order</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Return, Refund & Replacement Policy</p>

                </div>
                <div>
                    <h3>
                    GET IN TOUCH
                    </h3>
                    <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
                    <p>Call:
                    +919958287272</p>
                    <p>Email: care@chaperoneplants.com</p>
                </div>
                </div>
                <hr/>
                <p className="copyrights">© 2023, chaperone.com All rights reserved.</p>
             </div>
         </>
    )


}

export default Home