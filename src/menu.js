import React from 'react';
import { Link } from 'react-pretence-router';

export const Menu = () => (
    <div>
        <Link to={'/'} name={'Home'} css={'menu'}/>
        <Link to={'/about'} name={'About'} css={'menu'}/>
        <Link to={'/timestamp'} name={'Timestamp'} css={'menu'}/>
    </div>
)