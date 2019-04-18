import React from 'react'
import { NavLink } from "react-router-dom";
import useFetch from "../functions/useFetch";
import styled from "styled-components";
import BreadcrumbMainCat from '../components/BreadcrumbMainCat'
import man from '../img/subcatimg/man.png'
import woman from '../img/subcatimg/woman.png'
import youth from '../img/subcatimg/youth.png'
import clinics from '../img/subcatimg/clinic2.png'
import emergency from '../img/subcatimg/emergency.png'
import hiv from '../img/subcatimg/hiv-aids.jpeg'
import mental from '../img/subcatimg/mental_health.jpg'
import rehab from '../img/subcatimg/rehab.png'
import pantry from '../img/subcatimg/food_pantry.png'
import stamps from '../img/subcatimg/food_stamps.png'
import bathroom from '../img/subcatimg/bathroom.png'
import shower from '../img/subcatimg/shower.png'
import afterSchool from '../img/subcatimg/after_school.png'
import abuse from '../img/subcatimg/abuse.png'
import socialServices from '../img/subcatimg/social_service.png'
import ged from '../img/subcatimg/GED.png'
import computers from '../img/subcatimg/computers.png'
import benefits from '../img/subcatimg/health_ins.png'


const TabNavforSubView = props => {
   const path = props.props.location.pathname.split('/')
   let cat = path[2]
   

   if(cat.includes('outreach')) {
    cat = cat.replace(/\s+/g, "_");
    const subCats = useFetch(`https://empact-e511a.firebaseio.com/${cat}.json`);
    // Use fetch returns an Object, so Object.keys is used to map over the object's keys
    return (
      <TabContainer>
        <i class="fas fa-arrow-left"></i>
        <div className='back2cat'>
          <NavLink to={`/home/`}>Back to Categories</NavLink>
        </div>
      {Object.keys(subCats).map(subCat => {
        if (subCat === '_all' ) {
          return(
            <div className='right-arrow'>
              <MainCatBTN>
              <BreadcrumbMainCat cat={cat}/>
              </MainCatBTN>
              <i class="fas fa-arrow-right"></i>
            </div>
            
          )
        }

        if (subCat === 'after_school') {
          return (
            <div className='subcatbtn'>
              <Tabs className="test">
                <div className='subcatIcon'>
                  <StyledSubCatIcon src={afterSchool} alt="after school"/>
                  <div class="vl"></div>
                </div>
                <div className='subCatLink'>
                  <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
                </div>
              </Tabs>
            </div>
            );
        }

        if (subCat === 'domestic_violence') {
          return (
            <div className='subcatbtn'>
              <Tabs className="test">
                <div className='subcatIcon'>
                  <StyledSubCatIcon src={abuse} alt="domestic violence"/>
                  <div class="vl"></div>
                </div>
                <div className='subCatLink'>
                  <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
                </div>
              </Tabs>
            </div>
            );
        }

        if (subCat === 'social_services') {
          return (
            <div className='subcatbtn'>
              <Tabs className="test">
                <div className='subcatIcon'>
                  <StyledSubCatIcon src={socialServices} alt="social services"/>
                  <div class="vl"></div>
                </div>
                <div className='subCatLink'>
                  <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
                </div>
              </Tabs>
            </div>
            );
        }
      })}
    </TabContainer>
    );
   }

   cat = cat.replace(/\s+/g, "_")
   const subCats = useFetch(`https://empact-e511a.firebaseio.com/${cat}.json`)

   return (
    <TabContainer>
      <i class="fas fa-arrow-left"></i>
      <div className='back2cat'>
        <NavLink to={`/home/`}>Back to Categories</NavLink>
      </div>
    {Object.keys(subCats).map(subCat => {
      if (subCat === 'all' ) {
        return(
          <div className='right-arrow'>
            <MainCatBTN>
            <BreadcrumbMainCat cat={cat}/>
            </MainCatBTN>
            <i class="fas fa-arrow-right"></i>
          </div>
          
        )
      }
      if (subCat === 'men') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={man} alt="man"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'women') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={woman} alt="woman"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }
      if (subCat === 'youth') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={youth} alt="youth"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'clinics') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={clinics} alt="clinics"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'emergency') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={emergency} alt="emergency"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'hiv') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={hiv} alt="hiv"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'mental_health') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={mental} alt="mental health"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
              </Tabs>
          </div>
          );
      }

      if (subCat === 'rehab') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={rehab} alt="rehab"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'food_pantries') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={pantry} alt="food pantries"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'food_stamps') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={stamps} alt="food stamps"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'bathrooms') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={bathroom} alt="bathrooms"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'showers') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={shower} alt="showers"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'ged') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={ged} alt="GED"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'public_computers') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={computers} alt="computers"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }

      if (subCat === 'benefits') {
        return (
          <div className='subcatbtn'>
            <Tabs className="test">
              <div className='subcatIcon'>
                <StyledSubCatIcon src={benefits} alt="benefits"/>
                <div class="vl"></div>
              </div>
              <div className='subCatLink'>
                <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
              </div>
            </Tabs>
          </div>
          );
      }




      return (
        <div className='subcatbtn'>
          <Tabs className="test">
            <NavLink className="tablinks" to={`/home/${cat}/${subCat}`}>{subCat.replace(/_/g, ' ').toUpperCase()}</NavLink>
          </Tabs>
        </div>
          
        );
    })}
  </TabContainer>
);
}

export default TabNavforSubView

const TabContainer = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 18px;
  display: flex;
  justify-content: left;
  align-items: center; 
`

const Tabs = styled.div` 
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 150px;
  height: 50px;
  margin: 20px;
  border: #9b9b9b solid 1px;
  box-shadow: 1px 1px 1px 1px #00000050;

`;
const MainCatBTN = styled.div`
  width: 70px;
  height: 70px;
  background-color: #414361;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  border: 1px solid white;
  margin-left: 10px;
  box-shadow: 1px 2px 4px 2px #00000050;
`;

const StyledSubCatIcon = styled.img`
  width: 35px;
  margin: 3px;
`