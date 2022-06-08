import React from 'react'

import {
  IconContainer,
  IconWrapper,
} from 'styles/styleds'

const MetamaskIcon: React.FC = () => {

  return (
    <IconContainer>
      <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="80" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </IconWrapper>
    </IconContainer >
  )
}

export default MetamaskIcon
