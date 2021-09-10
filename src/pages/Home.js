import React from 'react'
import { Categories, SortPopUp, PizzaBlock} from '../components';

const Home = ({pizzas}) => {

    return <>
     <div className="container">
          <div className="content__top">
            <Categories items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]}/>
            <SortPopUp sorts = {[{name :'популярности', type: 'popular'}, 
                                  {name: 'цене', type: 'price'},
                                {name: 'алфавиту', type: 'alphabet'}]}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              
          {pizzas.map((obj) => <PizzaBlock 
          key={obj.id} 
          {...obj}/>)}
          

          </div>
        </div>
    </>
}

export default Home;