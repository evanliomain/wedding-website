import React from 'react';

import { Parchment } from '../Parchment/Parchment';

import { cards, card, cardImage, cardInfo, cardTitle, cardDescription } from './Partners.less';

import partners from './partners.json';

export const Partners = props =>
  <Parchment {...props}>
    <div>
      <h1 id="partner">Partenaires et prestataires</h1>
      <div className={cards}>
        {partners.map((partner, i) =>
          <a className={card} href={partner.link} target="_blank" key={`partner_${i}`}>
            <span className={cardImage}>
              { partner.logo ?
                  <img src={partner.logo} alt={partner.name} /> :
                  <span></span>
              }
            </span>
            <div className={cardInfo}>
              <span className={cardTitle}>{partner.name}</span>
              <span className={cardDescription}>{partner.desc}</span>
            </div>
          </a>
        )}
      </div>
    </div>
  </Parchment>;
