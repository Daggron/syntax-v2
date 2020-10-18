import React from 'react';
import style from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={style['layout']}>
      { children }
    </div>
  )
}