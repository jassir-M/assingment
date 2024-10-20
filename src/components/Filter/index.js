
import './index.css'
const filterType=[
    'Type of Plants',
    'Nursery',
    'Price',
    'Ideal Plants Location',
    'Indoor/ Outdoor',
    'Maintenance',
    'Plant Size',
    'Water Schedule',
    'Seasonal',
    'Color',
    'Light Efficient'
]
const Filter=()=>{


    return(
       <ul className='filter-list'>
            <li className='filter-option'>
                <p>Filter</p>
                <p>CLEAR ALL</p>
            </li>
           {filterType.map((each)=>(
            <li className='filter-option'>
                <p>{each}</p>
                <p>+</p>
            </li>
           ))}
       </ul>
    )
}

export default Filter