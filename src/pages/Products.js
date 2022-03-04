import React, { useEffect, useState } from 'react';
import useForm from '../components/useForm';

function Products(props) {

    const [products, setProducts] = useState([
        {
            id: 1,
            type: "PART_TIME",
            name: "Akash",
            location: "bangalore",
            experience: 1,
            price:100
          },
          {
            id: 2,
            type: "PART_TIME",
            name: "feroz",
            location: "mumbai",
            experience: 3,
            price:200
          },
          {
            id: 3,
            type: "FULL_TIME",
            name: "Farheen",
            location: "agra",
            experience: 5,
            price:300
          },
          {
            id: 4,
            type: "FREELANCER",
            name: "Raju",
            location: "chennai",
            experience: 6,
            price:400
          },
          {
            id: 5,
            type: "FULL_TIME",
            name: "Asif",
            location: "vegas",
            experience: 7,
            price:500
          }
    ])
    const [filterList, setFilterList] = useState(
        [
            {
                id: 11,
                name: "Part Time",
                value: "PART_TIME"
              },
              {
                id: 12,
                name: "Full Time",
                value: "FULL_TIME"
              },
              {
                id: 13,
                name: "Freelancer",
                value: "FREELANCER"
              }   
        ]
    )
    const [activeFilter, setActiveFilter] = useState([])
    
    const onFilterChange=(filter)=>{
        if(filter === "ALL"){
            if(activeFilter.length === filterList.length){
                setActiveFilter([])
            }else{
                setActiveFilter(filterList.map(filter=>filter.value))
            }
        }else{
            if(activeFilter.includes(filter)){
                const filterIndex = activeFilter.indexOf(filter)
                const newFilters = [...activeFilter]
                newFilters.splice(filterIndex, 1)
                setActiveFilter(newFilters)
            }else{
                setActiveFilter([...activeFilter, filter])
                console.log('i work');
            }
        }
    }

    const [searchString, setSearchString] = useState('')
    const [filteredList, setFilteredList] = useState([])
  
    
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    

    const [values, handleChange] = useForm({price:Math.max(...products.map(product=>product.price))})

    const handleSearchChange=(e)=>{
        setSearchString(e.target.value)
  }

  


  useEffect(()=>{
      let maxPrice = Math.max(...products.map(product=>product.price))
  
    //   setPrice(currentState=>({
    //     ...currentState,
    //      price:currentState.price = maxPrice
    // }))
      setMaxPrice(maxPrice)
      console.log(`Max price is ${maxPrice}`);
        console.log(values.price);

  }, [])

  const sliderFilter =()=>{
    let tempProducts = [...products]
    tempProducts = tempProducts.filter(product=>product.price<=values.price)
    setFilteredList(tempProducts)
  }

  useEffect(()=>{
    sliderFilter()
  }, [values])

  useEffect(()=>{
    if (
        activeFilter.length===0 || activeFilter.length === filterList.length
    ){
        setFilteredList(products)
    }else{
        setFilteredList(products.filter(item=>activeFilter.includes(item.type)))
    }

    let search = searchString.trim().toLowerCase()
    if(search.length > 0){
        setFilteredList(filteredList.filter(item=>{
            return item.name.toLowerCase().match(search)
        }))
    }
  }, [activeFilter, searchString])

  const [orders, setOrders] = useState([
      {
          name:"Sort by price: High to low",
          order:"descending"
      },
      {
        name:"Sort by price: Low to high",
        order:"ascending"
    }
    ])

    const [sOrder, setSelectedOrder] = useState('')
    
  const handleOrder=(selectedOrder)=>{
      if (sOrder==="ascending"){
          filteredList.sort((a, b)=>(a['price'] < b['price']) ? 1 : -1)
      }else if (sOrder === 'descending'){
          filteredList.sort((a, b)=>(b['price'] < a['price']) ? 1 : -1)
      }
  }
  useEffect(()=>{
    handleOrder()
  }, [sOrder])
  

  

    return (
        <div>
            <div>
                <p>{sOrder}</p>
                <select value={sOrder} onChange={(e)=>setSelectedOrder(e.target.value)}>
                <option value="descending">Sort by price: High to low</option>
                <option value="ascending">Sort by pprice: Low to high</option>
                </select>
            </div>
            <label htmlFor='price'>
                            Room Price ${values.price}
                        </label>
            <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={values.price} onChange={handleChange}/>
            <input 
            placeholder="Please input your search query"
            onChange={handleSearchChange}
            value={searchString}
            />
            <form>
                <label htmlFor="myInput">
                    ALL
                </label>
                <input
                id="myInput"
                type="checkbox"
                onClick={()=>onFilterChange('ALL')}
                checked={activeFilter.length === filterList.length}
                />
                {
                filterList.map(filter=>(
                    <>
                    <label htmlFor={filter.id}>
                        {filter.name}
                    </label>
                    <input
                    id={filter.id}
                    type="checkbox"
                    key={filter.id}
                    checked={activeFilter.includes(filter.value)}
                    onClick={()=>onFilterChange(filter.value)}
                    />
                    </>
                ))
            }
            </form>
            <ul>
              
               {
                   filteredList.map(item=>(
                       <li>
                           <span>{item.name}</span>
                           <span>{item.type}</span>
                           <span>{item.price}</span>
                       </li>
                   ))
               }
            </ul>
            <div>
            <label>
                Pizzas
            </label>
            <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            onClick={()=>console.log('I work')}
            />
            </div>
            <div>
            <label>
                Burgers
            </label>
            <input type="checkbox"/>
            </div>
        </div>
    );
}

export default Products;