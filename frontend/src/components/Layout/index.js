import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Header from '../Header';
import GradientBackground from '../GradientBackground';

function Layout({children}) {
  const inRoomPage = useRouteMatch('/room/:id');

  if (inRoomPage?.isExact) {
    return (
      <GradientBackground src="/background.jpg">
        {children}
      </GradientBackground>
    );
  } else {
    return (
      <GradientBackground src="/background.jpg">
        <Header />
        {children}
      </GradientBackground>
    );
  }
}

export default Layout;
