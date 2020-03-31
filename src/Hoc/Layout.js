import React from 'react';
import Header from '../Components/Header_footer/Header'
const Layout = (props) => {
    return (
        <div>
            <Header/>
             {props.childern}
        </div>
    );
};

export default Layout;