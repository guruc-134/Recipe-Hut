import React from 'react'
import Cookies from '../../Icons/Cookies'
import Burger from '../../Icons/Burger'
import Ramen from '../../Icons/Ramen'
import Vegetable from '../../Icons/Vegetable'
// import Salads from '../../Icons/Salads'
// import Steak from '../../Icons/Steak'
// import Spaghetti from '../../Icons/Spaghetti'
// import HealthyFruit from '../../Icons/HealthyFruit'
// import Onigiri from '../../Icons/Onigiri'
// import  IceCream from '../../Icons/IceCream'
// import Cheesecake from '../../Icons/Cheesecake'
// import  Chocolate from '../../Icons/Chocolate'
// import  Croissant from '../../Icons/Croissant'
// import Pancake from '../../Icons/Pancake'
// import  Sausage from '../../Icons/Sausage'
// import  Shushi from '../../Icons/Shushi'
// import Tart from '../../Icons/Tart'


import './floater.style.scss'
function Floater() {
    return (
        <div className='floater-div'>
            <Cookies className='floater-icon icon1'/>
            <Vegetable className='floater-icon icon2'/>
            <Burger className='floater-icon icon4'/>
            <Ramen className='floater-icon icon3'/>
            {/* <Salads className='floater-icon icon5'/> */}
            {/* <Steak className='floater-icon icon5'/> */}
            {/* <HealthyFruit className='floater-icon icon6'/>
            <Sausage className='floater-icon icon15'/>
            <IceCream className='floater-icon icon10'/>
            <Shushi className='floater-icon icon16'/>
            <Croissant className='floater-icon icon12'/>
            <Spaghetti className='floater-icon icon8'/>
            <Onigiri className='floater-icon icon9'/>
            <Cheesecake className='floater-icon icon11'/>
            <Pancake className='floater-icon icon14'/>
            <Chocolate className='floater-icon icon13'/>
            <Tart className='floater-icon icon17'/> */}
        
        </div>
    )
}

export default Floater
