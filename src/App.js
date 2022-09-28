import {useState,useEffect} from 'react';

import DependentSelect from 'components/select/DependentSelect';

import TW_ADDRESS_DATA from 'data/TWAddressData';

import './App.css';

function App() {
  const [selectData,setSelectData]=useState({
    selectCity: "",
    selectDistrict: ""
  });
  const {selectCity,selectDistrict}=selectData;
  const [areaList,setAreaList]=useState([]);
  const [tmpCity,setTmpCity]=useState("");

  useEffect(()=>{
    if(selectCity!==tmpCity){
      setSelectData({
        ...selectData,
        selectDistrict: ""
      });
    }

    if(selectCity===""){
      setSelectData({
        selectCity: "",
        selectDistrict: ""
      });
      setAreaList([]);
    }
    else{
      setAreaList(TW_ADDRESS_DATA.find(city=>city.cityName===selectCity).areaList);
    }
  },[selectCity]);

  const changeHandler=(e)=>{
    setTmpCity(selectCity);

		setSelectData({
			...selectData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <DependentSelect selectData={selectData} areaList={areaList} changeHandler={changeHandler} />
        <div className="text">{selectCity}{selectDistrict}</div>
      </div>
    </section>
  );
}

export default App;