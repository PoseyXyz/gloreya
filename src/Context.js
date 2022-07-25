import React, { useEffect, useState } from 'react'
import useForm from './hooks/useForm'
import { restaurantProducts } from './data/storeProducts'

const HavenContext = React.createContext()

const HavenProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const [filteredList, setFilteredList] = useState([])

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const [maxPrice, setMaxPrice] = useState(0)
    const [price, setPrice] = useState(0)
    const [minPrice] = useState(0)

    const [values, handleChange] = useForm({searchString:'', sOrder:''})

    const [showContactBar, setShowContactBar] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    const [miniNavbarOpen, setMiniNavbarOpen] = useState(false)

    const [filterList] = useState([
        {
            id:1,
            name:'Burgers',
            value:'burger'
        },
        {
            id:2,
            name:'Foods',
            value:'food'
        },
        {
            id:3,
            name:'Pizzas',
            value:'pizza'
        }
    ])

    const [activeFilters, setActiveFilters] = useState([])


    useEffect(() => {
        populateProducts()
    }, [])
    useEffect(()=>{
        addCartTotals()
    })

    const onFilterChange = (filter) =>{
        if(filter==='All'){
            if(activeFilters.length === filterList.length){
                setActiveFilters([])
            }else{
                setActiveFilters(filterList.map(filter=>filter.value))
            }
        }else{
            if(activeFilters.includes(filter)){
                const index = activeFilters.indexOf(filter)
                const newFilters = [...activeFilters]
                newFilters.splice(index, 1)
                setActiveFilters(newFilters)
            }else{
                setActiveFilters([...activeFilters, filter])
            }
        }
    }

    

    const populateProducts = () => {
        let tempProducts = []
        restaurantProducts.forEach(product => {
            const singleProduct = { ...product }
            tempProducts = [...tempProducts, singleProduct]
        })
        setProducts(tempProducts)
        setFilteredList(tempProducts)
    }



    useEffect(() => {
        let maxPrice = Math.max(...products.map(product => product.price))
        setMaxPrice(maxPrice)
        setPrice(maxPrice)
        console.log(maxPrice)
    }, [maxPrice])

 

    // useEffect(()=>{
    //     if(
    //         activeFilters.length === 0 || activeFilters.length === filterList.length
    //     ){
    //         setFilteredList(products)
    //     }else{
    //         setFilteredList(products.filter(item=>activeFilters.includes(item.type)))
    // //     }
    // }, [activeFilters])

    const filterByCheckboxes = (arrayToFilter) =>{
        if(
            activeFilters.length === 0 || activeFilters.length === filterList.length
        ){
            setFilteredList(arrayToFilter)
        }else{
            setFilteredList(arrayToFilter.filter(item=>activeFilters.includes(item.type)))
    }
}

   
    // useEffect(()=>{
    //     handleOrder()
    // }, [values.sOrder])

    const handleSort=(arrayToSort)=>{
        if (values.sOrder==="ascending"){
            let sortedList = arrayToSort.sort((a, b)=>(b['price'] < a['price']) ? 1 : -1)
            setFilteredList(sortedList)
        }else if (values.sOrder === 'descending'){
            let sortedList = arrayToSort.sort((a, b)=>(a['price'] < b['price']) ? 1 : -1)
            setFilteredList(sortedList)
        }
    }

    const filterPriceRange = async () => {
       
        let tempProducts = [...products]  
        if(price <= maxPrice){
            tempProducts = tempProducts.filter(product => product.price <= price)  
            setFilteredList(tempProducts)
        }          
       
        let search = values.searchString.trim().toLowerCase()
        if(search.length>0){
            tempProducts = tempProducts.filter(products=>products.title.toLowerCase().match(search))
            setFilteredList(tempProducts)
        }  
           
       

       if (values.sOrder==="ascending"){
        let sortedList = tempProducts.sort((a, b)=>(b['price'] < a['price']) ? 1 : -1)
        setFilteredList(sortedList)
        }else if (values.sOrder === 'descending'){
            let sortedList = tempProducts.sort((a, b)=>(a['price'] < b['price']) ? 1 : -1)
            setFilteredList(sortedList)
        }
   
    filterByCheckboxes(tempProducts)     
   }




    const getItem = (id) => {
        const product = products.find(product => product.id === id)
        return product
    }

    const addToCart = (id) => {
        const tempProducts = [...products]
        const index = tempProducts.indexOf(getItem(id))
        const product = tempProducts[index]

        product.inCart = true
        product.count = product.count + 1
        product.total = product.price

        setProducts(tempProducts)
        setCart([...cart, product])

    }

    const removeFromCart = (id) => {
        let tempCart = [...cart]
        tempCart = tempCart.filter(item => item.id !== id)


        let tempProducts = [...products]
        const index = tempProducts.indexOf(getItem(id))
        const removedProduct = tempProducts[index]

        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0

        setCart([...tempCart])
        setProducts([...tempProducts])
    }

    const incrementSingleCartItemCount = (id) => {
        let tempCart = [...cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)

        const product = tempCart[index]

        product.count = product.count + 1
        product.total = product.count * product.price

        setCart([...tempCart])
    }

    const decrementSingleCartItemCount = (id) => {
        let tempCart = [...cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)

        const product = tempCart[index]
        product.count = product.count - 1

        if (product.count === 0) {
            removeFromCart(id)
        } else {
            product.total = product.count * product.price
            setCart([...tempCart])
        }
    }

    const controlQuantity = (id, currentCount)=>{
            let tempCart = [...cart]
            const selectedproduct = tempCart.find(item=>item.id===id)
            const index = tempCart.indexOf(selectedproduct)

            const product = tempCart[index]
           
                product.count = currentCount
            product.total = product.price * currentCount

            setCart([...tempCart])
            
            
    }

    const addCartTotals = () => {
        let tempTotal = 0
         cart.map(item => (tempTotal += item.total))
        setTotal(tempTotal)
    }



    return (
        <HavenContext.Provider value={{
            products,
            cart,
            total,

            price, maxPrice, minPrice, setPrice, filteredList, filterPriceRange,

            values, handleChange, handleSort,

            filterList, activeFilters, onFilterChange, controlQuantity,

            showContactBar, setShowContactBar, showSidebar, setShowSidebar, miniNavbarOpen, setMiniNavbarOpen,

            addToCart,
            removeFromCart,
            incrementSingleCartItemCount,
            decrementSingleCartItemCount,
        }}>
            {children}
        </HavenContext.Provider>
    )
}

const HavenConsumer = HavenContext.Consumer

export { HavenContext, HavenProvider, HavenConsumer }