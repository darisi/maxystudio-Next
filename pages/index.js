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
          <span className="home-text">
            <span>maxy is a one-man </span>
            <span className="home-text02">conversion focused</span>
            <span>
              {' '}
              branding &amp; web design powerhouse by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://hren.io"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              Darjan Hren
            </a>
            <span>.</span>
          </span>
          <span className="home-text05 content">
            I only work with e-commerce brands, helping them to create high
            converting websites that establish meaningful relationships with
            their customers.
          </span>
          <span className="home-text06 content">
            I worked with over 30 brands across the globe to help them grow from
            6 to 8 figures.
          </span>
          <span className="home-text07 content">
            I build their brand, designed their website &amp; landing pages, and
            optimized them for conversion rates &amp; AOV.
          </span>
          <span className="home-text08 content">Clients include:</span>
          <ul className="home-ul list">
            <li className="home-li content list-item">
              <span>
                <span>Brutal Force</span>
                <br></br>
              </span>
            </li>
            <li className="home-li01 content list-item">
              <span>
                <span>Space Goods</span>
                <br></br>
              </span>
            </li>
            <li className="home-li02 content list-item">
              <span>
                <span>Health Nutrition</span>
                <br></br>
              </span>
            </li>
            <li className="home-li03 content list-item">
              <span>Blackwolf</span>
            </li>
            <li className="home-li04 list-item content">
              <span>Cloudsharks</span>
            </li>
            <li className="home-li05 content list-item">
              <span>
                <span>Crazy Bulk</span>
                <br></br>
              </span>
            </li>
            <li className="home-li06 content list-item">
              <span>
                <span>PhenGold</span>
                <br></br>
              </span>
            </li>
            <li className="home-li07 list-item content">
              <span>
                <span>Mountain Ice</span>
                <br></br>
              </span>
            </li>
            <li className="home-li08 content list-item">
              <span>
                <span>Sensilab</span>
                <br></br>
              </span>
            </li>
            <li className="home-li09 list-item content">
              <span>
                <span>Zotrim</span>
                <br></br>
              </span>
            </li>
            <li className="home-li10 list-item content">
              <span>
                <span>Testogen</span>
                <br></br>
              </span>
            </li>
            <li className="home-li11 content list-item">
              <span>
                <span>Orange Burps</span>
                <br></br>
              </span>
            </li>
            <li className="home-li12 content list-item">
              <span>
                <span>&amp; many more</span>
                <br></br>
              </span>
            </li>
          </ul>
          <a
            href="mailto:hello@maxy.studio?subject=Design Service Inquiry"
            className="home-link1 button"
          >
            Get in touch
          </a>
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
  background-color: var(--dl-color-primary-black);
}
.home-container1 {
  flex: 1;
  width: 66%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.home-text {
  color: var(--dl-color-primary-white);
  text-align: left;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-text02 {
  font-weight: 700;
}
.home-link {
  text-decoration: underline;
}
.home-text05 {
  color: var(--dl-color-primary-white);
  text-align: left;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-text06 {
  color: var(--dl-color-primary-white);
  text-align: left;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-text07 {
  color: var(--dl-color-primary-white);
  text-align: left;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-text08 {
  color: var(--dl-color-primary-white);
  text-align: left;
}
.home-ul {
  margin-top: 0px;
  list-style-type: circle;
}
.home-li {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li01 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li02 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li03 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li04 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li05 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li06 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li07 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li08 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li09 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li10 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li11 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-li12 {
  color: var(--dl-color-primary-white);
  font-size:: 18px;
  margin-bottom: 4px;
}
.home-link1 {
  color: var(--dl-color-primary-black);
  width: auto;
  align-self: flex-start;
  text-align: center;
  transition: 0.3s;
  padding-top: 0.5rem;
  border-color: var(--dl-color-primary-black);
  border-width: 4px;
  padding-left: 2rem;
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  text-decoration: none;
}
.home-link1:hover {
  border-color: var(--dl-color-primary-white);
  border-width: 4px;
}
@media(max-width: 767px) {
  .home-container1 {
    width: 75%;
  }
}
@media(max-width: 375px) {
  .home-container {
    flex-wrap: wrap;
  }
  .home-container1 {
    width: 100%;
    padding-top: 0px;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-text {
    color: var(--dl-color-primary-white);
    font-size: 20px;
  }
  .home-text05 {
    font-size: 20px;
  }
  .home-text06 {
    font-size: 20px;
  }
  .home-text07 {
    font-size: 20px;
  }
  .home-text08 {
    font-size: 20px;
    margin-bottom: 0px;
  }
  .home-ul {
    padding-left: 1rem;
    list-style-type: circle;
    list-style-position: outside;
  }
  .home-li {
    font-size: 20px;
  }
  .home-li01 {
    font-size: 20px;
  }
  .home-li02 {
    font-size: 20px;
  }
  .home-li03 {
    font-size: 20px;
  }
  .home-li04 {
    font-size: 20px;
  }
  .home-li05 {
    font-size: 20px;
  }
  .home-li06 {
    font-size: 20px;
  }
  .home-li07 {
    font-size: 20px;
  }
  .home-li08 {
    font-size: 20px;
  }
  .home-li09 {
    font-size: 20px;
  }
  .home-li10 {
    font-size: 20px;
  }
  .home-li11 {
    font-size: 20px;
  }
  .home-li12 {
    font-size: 20px;
  }
  .home-link1 {
    width: 100%;
    align-self: center;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
  `}
      </style>
    </>
  )
}

export default Home
