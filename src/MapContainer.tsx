import React, { ReactNode } from 'react';
import NoScrollContainer from './NoScrollContainer';
import Fallback from './Fallback';
import checkWebglSupport from './checkWebglSupport';
import { Absolute } from './Boxes';
import Logo from './Logo';

interface Props {
  embed?: boolean;
  children: ReactNode;
}

const supportsWebGl = checkWebglSupport();

const MapContainer: React.FC<Props> = ({ embed, children }) => (
  <NoScrollContainer>
    {supportsWebGl ? (
      <>
        {children}
        <Absolute bottom={8} left={100}>
          <Logo embed={embed} />
        </Absolute>
      </>
    ) : (
      <Fallback>
        Sorry, but your browser doesn't seem to support WebGL which is required for this app.
      </Fallback>
    )}
  </NoScrollContainer>
);

export default MapContainer;
