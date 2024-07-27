import React from 'react'
import NavBar from '../../../components/navBars/NavBar.tsx'
import AccountOptions from '../components/accountOptionsComponents'
import EditAccount from '../components/EditAccount'
import AccountInfo from '../components/AccountInfo'
import ChangePassword from '../components/ChangePassword'
import YourNetwork from '../components/YourNetwork'
import Footer from '../../../components/navBars/Footer.tsx'
import Preffernces from '../components/Preffernces'
const Account = () => {
  
  return (
    <div className='w-full'>
        <div>
            <NavBar />
        </div>
        <div className='w-full bg-dark-blue py-8 px-10'>
             {/* here we are going to define the banner of the Accont Screen */}
             <p className='text-white text-3xl font-semibold '>Edit Your Account</p>
        </div>  
        <div className='flex my-5 space-x-5 mx-3'>
                <div className='w-1/3 border sticky top-1 left-0 px-5 rounded-md shadow-md h-full'>
                    {/* here we are gonna to define the components of the Account Screen */}
                   <AccountOptions heading="Portfolio" list={{"profile Info": "#"}} />
                   <AccountOptions heading="Events Recommendations" list={{"Preffernces & Eligiblity": "#"}} />
                   <AccountOptions heading="Account Management:" list={{"Email Notification:": "#", "Account & Privacy": "#","Password": "#"}}/>
                </div>
                <div className='w-2/3'>
                  <Preffernces />
                </div>
        </div>
        <Footer />
    </div>
  )
}

export default Account
