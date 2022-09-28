import TW_ADDRESS_DATA from 'data/TWAddressData';

import './DependentSelect.css';

const DependentSelect=({selectData,areaList,changeHandler})=>{
    return (
        <>
            <select className="city-select" name="selectCity" value={selectData.selectCity} onChange={changeHandler}>
                <option value="">請選擇</option>
                {TW_ADDRESS_DATA.map(city=>(
                    <option key={city.id} value={city.cityName}>{city.cityName}</option>
                ))}
            </select>
            <select className="district-select" name="selectDistrict" value={selectData.selectDistrict} onChange={changeHandler}>
                <option value="">請選擇</option>
                {areaList && areaList.map(area=>(
                    <option key={area.AreaName} value={area.AreaName}>{area.AreaName}</option>
                ))}
            </select>
        </>
    );
}

export default DependentSelect;