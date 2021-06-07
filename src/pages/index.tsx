import React from "react";
import ReactTooltip from "react-tooltip";
import { Layout } from "../components/Layout";
import { isMobile } from "../utils/isMobile";
import Image from 'next/image';

function Index() {
  const renderTooltips = () => {

    if (typeof navigator !== 'undefined' && isMobile()) return null;

    return (<>
      <ReactTooltip className={'Index__tooltip'} arrowColor={'#000'}
        uuid="my-photo" place="left" id='my-photo'>
        <Image priority width={500} height={500} className={'Index__photo Index__photo--vertical'}
          alt={'Aimi McConnell Photo'}
          src={'/static/personal-photo.jpg'} />
      </ReactTooltip>
    </>)
  };

  return (
    <Layout pageTitlePrefix={''}
      description={'Hey, I’m Aimi McConnell, a Software Engineer currently based in Annalong, N.Ireland.'}
      imageUrl={'https://aimimcconnell.co.uk/static/home_about_page.png'}>
      <div className={'Index'}>
        <div className={'Index__paragraph'}>Hey, I’m{' '}
          <a data-tip={true} data-for="my-photo">Aimi McConnell</a>
                    , a Software Engineer
                </div>
        <div className={'Index__paragraph'}> currently based in {' '}
                    Annalong, N.Ireland.
                </div>
        {renderTooltips()}
      </div>
    </Layout>
  )
}

export default Index;