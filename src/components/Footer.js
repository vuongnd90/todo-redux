import React from 'react';
import FilterLink from '../containers/FilterLink';
import Constants from '../constants/Constants';

const Footer = ({total}) => (
    <div>
        <p>{'Total:' + total}</p>
        <p>
        Show: 
        {'    '}
        <FilterLink filter={Constants.SHOW_ALL}>
            All
        </FilterLink>
        {'   '}
        <FilterLink filter={Constants.SHOW_ACTIVE}>
            Active
        </FilterLink>
        {'   '}
        <FilterLink filter={Constants.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </p>
    </div>    
)

export default Footer;