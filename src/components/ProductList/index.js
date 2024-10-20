import star from '../../images/star.png'
import plant1 from '../../images/plant1.png'
import wishlist from '../../images/wishlist.png'
import { useState } from 'react'
import './index.css'

const lists=[
    {
        image:plant1,
        name:'Monsterra',
        description:'Indoor Plant, Low maintenance',
        ratings:'4.9',
        actualPrice:'₹ 359',
        discountPrice:'₹ 299',


    },
    {
        image:plant1,
        name:'Monsterra',
        description:'Indoor Plant, Low maintenance',
        ratings:'4.9',
        actualPrice:'₹ 359',
        discountPrice:'₹ 299',


    },
    {
        image:plant1,
        name:'Monsterra',
        description:'Indoor Plant, Low maintenance',
        ratings:'4.9',
        actualPrice:'₹ 359',
        discountPrice:'₹ 299',


    },
    {
        image:plant1,
        name:'Monsterra',
        description:'Indoor Plant, Low maintenance',
        ratings:'4.9',
        actualPrice:'₹ 359',
        discountPrice:'₹ 299',


    },
    {
        image:plant1,
        name:'Monsterra',
        description:'Indoor Plant, Low maintenance',
        ratings:'4.9',
        actualPrice:'₹ 359',
        discountPrice:'₹ 299',


    },
    {
        image:plant1,
        name:'Monsterra',
        description:'Indoor Plant, Low maintenance',
        ratings:'4.9',
        actualPrice:'₹ 359',
        discountPrice:'₹ 299',


    },
    {
        image:plant1,
        name:'Monsterra',
        description:'Indoor Plant, Low maintenance',
        ratings:'4.9',
        actualPrice:'₹ 359',
        discountPrice:'₹ 299',


    },
    {
        image:plant1,
        name:'Monsterra',
        description:'Indoor Plant, Low maintenance',
        ratings:'4.9',
        actualPrice:'₹ 359',
        discountPrice:'₹ 299',


    }

]


const ProductList=(props)=>{
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }    
     const {len}=props
     
     let alteredList = lists.slice(0,len)

    return(
       <>

        <ul  className='product-ullist'>
            {alteredList.map(each=>(
                <li className='product-box'>
                    <div className='product-image-section'>
                        <img src={wishlist} className='wishlist'/>
                        <img src={each.image} className='product-image' />
                        <>
      <p  className="product-button"onClick={toggleModal} >
        Open
      </p>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Your cart</h2>
            <hr/>
            <h3>Congraluations order  placed</h3>
            <p>Thank you for choosing Chaperone services.
            We will soon get in touch with you!</p>
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>






















                    </div>
                    <div className='product-details'>
                        <h3>{each.name}</h3>
                        <p classname="des">{each.description}</p>
                        <div className='flex'>
                            <img src={star}/>
                            <p>{each.ratings}</p>
                        </div>
                        <p ><span className='price'>{each.actualPrice}</span> <span className='span'>{each.discountPrice}</span></p>
                        <div className='buy-section'>
                            <button className='bttn green'>- Add to cart +</button>
                            <button className='bttn'>Buy on Rent</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        
        </>

    )
}

export default ProductList