import React from 'react'

import PropTypes from 'prop-types'

const Logo = (props) => {
  return (
    <>
      <div className={`logo-container ${props.rootClassName} `}>
        <img
          alt={props.pastedImage_alt1}
          src={props.pastedImage_src1}
          className="logo-pasted-image"
        />
      </div>
      <style jsx>
        {`
          .logo-container {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .logo-pasted-image {
            width: 100%;
            height: auto;
          }
          .logo-root-class-name {
            top: 483px;
            flex: 1;
            left: 445px;
            width: 100%;
            height: auto;
            position: static;
          }
          @media (max-width: 479px) {
            .logo-root-class-name {
              flex: 0 0 auto;
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Logo.defaultProps = {
  pastedImage_alt1: 'pastedImage',
  rootClassName: '',
  pastedImage_src1: '/playground_assets/pastedimage-kpa.svg',
}

Logo.propTypes = {
  pastedImage_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_src1: PropTypes.string,
}

export default Logo
