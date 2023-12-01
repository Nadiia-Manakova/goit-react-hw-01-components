import React from 'react';
import css from '../styles/Statistics.module.css'
import { getRandomHexColor } from '../js/RandomHexColor'

export const Statistics = ({ stats }) => {
    return (
 <section className={css.statistics} >
  <h2 className={css.title}>Upload stats</h2>
            <ul className={css.statList}>
                {stats.map(stats =>
                    <li
                        className={css.item}
                        key={stats.id}
                        style={{
              backgroundColor: getRandomHexColor(),
            }}>
                        <span className={css.label}>{stats.label}</span>
                        <span className={css.percentage}>{stats.percentage}%</span>
                    </li>)} 
  </ul>
</section>)  ;
};
