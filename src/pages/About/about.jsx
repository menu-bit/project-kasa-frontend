import { Banner } from '../../components/Banner/bannerAbout'
//import bannerAboutImg from '../../assets/bannerAboutImg.png'
//import styles from './about.module.css'
//import React, { useState } from 'react'
import { CCollapse } from '@coreui/react'
import { FaChevronDown } from 'react-icons/fa'
import Collapse from '../../components/Collapse/collapse'

export default function About() {
  return (
    <main>
      <Banner />
      <Collapse />
    </main>
  )
}
