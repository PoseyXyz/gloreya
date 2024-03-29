
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart';
import InputForm from './pages/InputForm';
import ProductsFile from './pages/ProductsFile';
import RestaurantMenu from './pages/RestaurantMenu';
import Contact from './pages/Contact';
import { useContext } from 'react';
import { HavenContext } from './Context';
import ingredients from './images/ingredients.png'
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaCartPlus, FaTimesCircle } from 'react-icons/fa'


function App() {
  const { showContactBar, setShowContactBar, showSidebar, setShowSidebar, cart, removeFromCart, total } = useContext(HavenContext)
  return (
    <>
      {/*contact sidebar */}
      <div className="h-screen bg-gray-600 fixed z-50 right-0 gap-4" style={{ width: showContactBar ? '100%' : '0' }}>
        <div className="bg-white w-full xl:w-2/12 py-4 h-full absolute right-0 flex flex-col gap-8 overflow-hidden">
          <div className="flex flex-col px-4 p-4">
            <button className="self-end font-light text-2xl text-brand-red" onClick={() => setShowContactBar(false)}><FaTimesCircle /></button>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 px-6 py-4 md:py-8">
            <img src={ingredients} className="w-5/12 xl:w-full self-center" />
            <p className="text-light-text">Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit lorem quis bibendum elit.</p>
            <span className="flex gap-4 items-center"><span className="text-brand-red"><FaEnvelope /></span><span className="text-light-text">gloreya@admin.com</span></span>
            <span className="flex gap-4 items-center"><span className="text-brand-red"><FaPhone /></span><span className="text-light-text">+01145928421</span></span>
            <div className="flex gap-2 self-center">
              <i className="bg-blue-700 p-2 rounded-full text-white text-sm"><FaFacebook /></i>
              <i className="bg-blue-400 p-2 rounded-full text-white text-sm"><FaTwitter /></i>
              <i className="bg-blue-500 p-2 rounded-full text-white text-sm"><FaLinkedin /></i>
              <i className="bg-red-500 p-2 rounded-full text-white text-sm"><FaYoutube /></i>
            </div>
          </div>
        </div>
      </div>


      {/*cart sidebar */}
      <div className={showSidebar ? 'sideBarOpen' : 'sideBarClosed'}>
        <div className='flex justify-between p-4 items-center bg-cart-btn-purple text-white'>
          <span className='font-bold text-lg'>Cart <span className='text-gray-300'>({cart.length} items)</span></span>
          <button className="text-lg p-3 rounded-full border border-red-500 text-red-500 bg-white shadow-2xl text-center self-center" onClick={() => setShowSidebar(false)}><FaTimesCircle /></button>
        </div>
        {cart.length === 0
          ?
          <div className='flex-1 flex justify-center items-center'>
            <div className='flex flex-col gap-4 items-center'>
              <p className="text-light-text">No products in cart</p>
              <Link to='/products'>
                <button onClick={() => setShowSidebar(false)} className="py-4 px-8 text-white bg-cart-btn-purple rounded-md text-sm font-bold hover:bg-gray-200 duration-500 hover:text-black">View Food Items</button>
              </Link>
            </div>
          </div>
          :
          <div className="flex flex-col gap-6 overflow-y-scroll">
            <div className="flex flex-col gap-4">
              {cart.map(product => {
                const { id, title, price, image, count } = product
                return (
                  <div className="bg-gray-50 rounded-md p-4 flex gap-4 relative">
                    <img src={image} className="w-1/4 rounded-md" alt="" />
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-bold text-purple-500">{title}</p>
                      <p className="text-light-text">{count} x ${price}</p>
                    </div>
                    <button className="absolute top-4 right-4 text-lg text-purple-500" onClick={() => removeFromCart(id)}><FaTimesCircle /></button>
                  </div>
                )
              })}
            </div>
            <div className="bg-gray-50 p-4 flex items-center gap-2 text-lg">
              <p className="font-bold text-light-text">Subtotal:</p>
              <p className="text-light-text">${total}</p>
            </div>

            <div className="flex justify-between gap-4 mb-4">
              <Link className="bg-purple-600 rounded py-3 px-5 w-full font-semibold text-sm text-white text-center" to='/cart'>
                <button >VIEW CART</button>
              </Link>
              <button className="bg-purple-400 rounded py-3 px-5 w-full font-semibold text-sm text-white">CHECKOUT</button>
            </div>
          </div>

        }
      </div>

      {/* Cart 26 button*/}
      <button style={{ zIndex: 45 }} className="p-5 bg-cart-btn-purple inline-block rounded-sm mt-4 shadow-md fixed box-border bottom-4 right-12/100" onClick={() => setShowSidebar(!showSidebar)}><i className="text-white"><FaCartPlus /></i><span className="text-white absolute font-barlow -top-3 -right-2 bg-brand-red px-2 py-0.5 font-thin text-sm rounded-full">{cart.length}</span></button>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductsFile} />
        <Route path="/cart" component={Cart} />
        <Route path="/menu" component={RestaurantMenu} />
        <Route path="/contact" component={Contact} />
        <Route path="/input" component={InputForm} />
      </Switch>
    </>

  );
}

export default App;
