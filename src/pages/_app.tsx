import React from 'react';
import Particles from "react-tsparticles";
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../styles/main.scss';
import { PageBorder } from "../components/PageBorder";
import { SideMenu } from "../components/SideMenu";
import { IconsSocial } from "../components/IconsSocial";
import { Header } from "../components/Header/Header";
import { Cursor } from "../components/Cursor";
import useBodyClass from "../hooks/useBodyClass";
import { AppContext } from '../context/AppContext';
import { pageview } from "../utils/gtag";
import Router from 'next/router';
import particlesOptions from "../components/ParticlesBackground/particles.json";
import { ISourceOptions } from "tsparticles";

const OverlayMenu = dynamic(
  () => import('../components/OverlayMenu'),
  { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [linkHovered, setLinkHovered] = React.useState(false);
  useBodyClass(`${menuOpen ? 'menu--open' : ''}`);

  React.useEffect(() => {
    handleGoogleAnalytics();
  }, []);

  const handleGoogleAnalytics = () => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    }
  };

  const contextValue = {
    menuOpen,
    setMenuOpen,
    linkHovered,
    setLinkHovered
  };

  return (
    <AppContext.Provider value={contextValue}>
      <PageBorder />
      <SideMenu />
      <IconsSocial />
      <Particles options={particlesOptions as ISourceOptions}/>
      <Header />
      <Component {...pageProps} />
      <OverlayMenu />
      <Cursor />
    </AppContext.Provider>
  )
}

export default MyApp