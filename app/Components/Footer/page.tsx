/* eslint-disable no-irregular-whitespace */
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { KudikaLogo } from './okm'
import { Container } from './Container'
import { CopyrightWrapper } from './CopyrightWrapper'
import { SiteMapWrapper } from './SiteMapWrapper'
import { SocialMidiaWrapper } from './SocialMidiaWrapper'
import { LucideFacebook, LucideInstagram, LucideLinkedin } from 'lucide-react'
import { MainLink } from '../Header/User/mainLink'

export default function Footer() {
  return (
    <>
    <Container>
     {/*  <ScrollToTop
        height="19px"
        smooth
        color="#BF0F0F"
        top={150}
        style={{
          padding: '6px',
          borderRadius: '12px',
          fontSize: '10px',
        }}
      ></ScrollToTop>*/}
      <section className="relative flex flex-col justify-center gap-12 md:flex-row md:justify-between md:gap-0">

         <div className='w-30'>
          <div className='bg-white p-3 shadow rounded-full mx-2'>
          <MainLink/>
          </div>
        
         </div>
         
         
         

        <SiteMapWrapper>
          <h4 className="mb-6 text-lg font-extrabold uppercase text-gray-600">
            Mapa do site
          </h4>
          <ul className="text-white flex flex-row gap-8 text-sm font-bold uppercase">
            <div className="space-y-4">
              <li className="text-md font-bold uppercase">
                A Tchivala
              </li>
              <li className="text-md font-bold uppercase ">
                Soluções
              </li>
              <li className="text-md font-bold uppercase ">
                Orçamento
              </li>
            </div>
            <div className="space-y-4">
              <li className="text-md font-bold uppercase ">Cases</li>
              <li className="text-md font-bold uppercase ">
                Serviços
              </li>
              <li className="text-md font-bold uppercase ">Blog</li>
            </div>
          </ul>
        </SiteMapWrapper>

        <div className="ml-8">
          <h2 className="mb-6 text-lg font-extrabold uppercase text-gray-600">
            Contactos
          </h2>
          <div className="text-gray-200 flex flex-col gap-4">
            
            <div>
              <h5 className="text-sm font-bold uppercase text-gray-600">
                Telefone
              </h5>
              <span className="text-white">
                +244 937 411 079 | 951 564 890
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-600 uppercase ">
                E-mail
              </p>
              <span className="text-white">Tchivala@gmail.com</span>
            </div>
            <div className="space-y-3">
              <h5 className="text-sm font-bold uppercase text-gray-600">
                Redes sociais
              </h5>

              <SocialMidiaWrapper>
                <Link 
                  href='#'
                  target='_blank'
                  className='bg-white shadow bg-orange-200 p-2 rounded-full'
                >
                  <LucideFacebook className='' />
                </Link>

                <Link 
                  href='#'
                  target='_blank'
                  className='bg-white shadow bg-orange-200 p-2 rounded-full'
                >
                <LucideInstagram />
                </Link>

                <Link 
                  href='#'
                  target='_blank'
                  className='bg-white shadow bg-orange-200 p-2 rounded-full'
                >
                <LucideLinkedin />
                </Link>

          
               

              </SocialMidiaWrapper>
            </div>
          </div>
        </div>
      </section>
      
    
    </Container>
    <CopyrightWrapper>
        <p >&copy; 2024 Okukula-Market</p>
      </CopyrightWrapper>
    </>
  )
}
