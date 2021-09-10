import React, {useState} from 'react'

const Categories = ({items}) => {

    const[active, setActive] = useState(0) 

    return <>
    <div className="categories">
              <ul>
                  
                {items.map((it, index) => <li className={active === index ? 'active' : ''} onClick={()=>setActive(index)} key={`${it}_${index}`}>
                {it} </li> )}
                
              </ul>
            </div>
    </>
}

export default Categories;