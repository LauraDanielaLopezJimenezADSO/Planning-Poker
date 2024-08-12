import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonBlanco.css';

export default function ButtonBlanco({ texto, clase, link }) {
    return (
        <Link to={link}>
            <button className={clase}>{texto}</button>
        </Link> 
    )
}