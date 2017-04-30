import React from 'react';

import { Parchment } from '../Parchment/Parchment';

import { local } from './Partners.less';

import partners from './partners.json';

export const Partners = props =>
  <Parchment {...props}>
    <div>
      <h1 id="partner">Partenaires et prestataires</h1>
      <p>
        {partners.map((partner, i) =>
          <a className={local} href={partner.link} target="_blank" key={`partner_${i}`}>
            { partner.logo ?
                <img src={partner.logo} alt={partner.name} /> :
                <span></span>
            }
            <span>{partner.name}</span>
            <span>{partner.desc}</span>
          </a>
        )}
      </p>
    </div>
  </Parchment>;
