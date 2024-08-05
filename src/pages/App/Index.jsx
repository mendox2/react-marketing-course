import Home from '../Home/Index';
import MyAccount from '../MyAccount/Index';
import MyOrder from '../MyOrders/Index';
import MyOrders from '../MyOrder/Index';
import NotFound from '../NotFound/Index';
import SingIn from '../SingIn/Index';
import '../../App.css'

function App() {

  return (
    <div className='bg-green-300'>
      <Home />
      <MyAccount />
      <MyOrders />
      <MyOrder />
      <NotFound />
      <SingIn />
    </div>
  )
}

export default App
