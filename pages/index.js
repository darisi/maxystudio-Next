import React from 'react'
import Head from 'next/head'

import Logo from '../components/logo'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>maxy.studio</title>
          <meta property="og:title" content="maxy.studio" />
        </Head>
        <Logo rootClassName="logo-root-class-name"></Logo>
        <div className="home-container1">
          <span className="home-text content">
            is a conversion rate optimization focused branding &amp; web design
            studio.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text1 content">
            We only work with e-commerce brands, helping them to create high
            converting websites that establish meaningful relationships with
            their customers.
          </span>
          <span className="home-text2 content">
            We worked with over 30 eCommerce brands across the globe to help
            them grow and convert more visitors into customers.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text3 content">
            We build their brand, designed their website &amp; landing pages,
            and optimized their conversion rates.
          </span>
          <span className="home-text4 content">Clients include:</span>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-colors-black);
          }
          .home-container1 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-colors-white);
            font-size: 36px;
            text-align: left;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text1 {
            color: var(--dl-color-colors-white);
            font-size: 36px;
            text-align: left;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text2 {
            color: var(--dl-color-colors-white);
            font-size: 36px;
            text-align: left;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text3 {
            color: var(--dl-color-colors-white);
            font-size: 36px;
            text-align: left;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text4 {
            color: var(--dl-color-colors-white);
            font-size: 36px;
            text-align: left;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          @media (max-width: 479px) {
            .home-container1 {
              padding: 48px;
            }
            .home-text {
              font-size: 24px;
            }
            .home-text1 {
              font-size: 24px;
            }
            .home-text2 {
              font-size: 24px;
            }
            .home-text3 {
              font-size: 24px;
            }
            .home-text4 {
              font-size: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
