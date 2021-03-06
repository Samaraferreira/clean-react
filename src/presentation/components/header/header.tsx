import React, { memo } from 'react'

import Styles from './header-styles.scss'

import Logo from '@/presentation/components/logo/logo'

const Header: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  )
}

export default memo(Header)
