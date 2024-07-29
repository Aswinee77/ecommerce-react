import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/kurta/mens_kurta'
import { sareePage1 } from "../../../Data/Saree/page1";
import { dressPage1 } from "../../../Data/dress/page1";
import { gounsPage1 } from "../../../Data/Gouns/gouns";
import { mensShoesPage1 } from "../../../Data/shoes";
import  {mensPantsPage1} from "../../../Data/pants/men_page1";


const HomePage = () =>{
     return(
      <div>
        <MainCarosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarosel data = {mens_kurta} sectionName={'Mens Kurta'}/>
          <HomeSectionCarosel data={mensShoesPage1} section={"Men's Shoes"} />
          <HomeSectionCarosel data={mensPantsPage1} section={"Men's Pants"} />
          <HomeSectionCarosel data={sareePage1} section={"Saree"} />
          <HomeSectionCarosel data={dressPage1} section={"Dress"} />
          <HomeSectionCarosel data={gounsPage1} section={"Women's Gouns"} />
          { /**/}
        </div>
      </div>
     )
}

export default HomePage