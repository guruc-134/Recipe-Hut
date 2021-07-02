import React from 'react';
import ReactLoading from 'react-loading';
import './loader.styles.scss'
const Loader = ({ type, color }) => (
    <div className='loader'>
    <ReactLoading type={"cubes"} color={color} height={'10%'} width={'40%'} className='loader-comp' color="rgba(255, 255, 255, 0.473)"/>
    </div>
);
;
export default Loader;