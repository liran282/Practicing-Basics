import React from 'react';
import './BusinessList.css';
import Businenss from '../Business/Businenss.js';

class BusinessList extends React.Component
{
    render()
    {
        return 
        (
            <div className="BusinessList">
                <BusinessList />
                <BusinessList />
                <BusinessList />
                <BusinessList />
                <BusinessList />
                <BusinessList />
            </div>
        )
    };
}

export default BusinessList;