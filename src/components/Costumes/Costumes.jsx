import React from 'react';
import Gallery from 'react-photo-gallery';
import { withContentRect } from 'react-measure';

import { Parchment } from '../Parchment/Parchment';

import { local } from './Costumes.less';

import costumes from './costumes.json';

const maxImageWidth = 200;

export const Costumes =
  withContentRect('bounds')(({ measureRef, measure, contentRect }) =>
    <div ref={measureRef}>
      <Parchment>
        <div className={local}>
          <h1 id="costumes">Inspirations de costumes</h1>
          <p>
            Merci à vous de ne pas utiliser ces photos à d'autres fins que celles de vous en inspirer, afin de respecter ces personnes qui ont acceptés que nous les prenions en photo dans ce but uniquement.
          </p>
          {
            costumes.map(({ category, photos }, index) =>
              <div key={index}>
                <h2>{category}</h2>
                  <Gallery
                    cols={Math.ceil(contentRect.bounds.width / maxImageWidth)}
                    photos={photos.map(_ => ({ ..._, srcset: [], sizes: []}))}
                  />
              </div>
            )
          }
        </div>
      </Parchment>
    </div>
  );
