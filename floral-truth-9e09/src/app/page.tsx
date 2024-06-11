'use client'


//based on the semantics of Next,js, this will be the default rendered component when accessing the app

import Image from "next/image";
import { Component } from '@/components/MainPage/MainPage'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Home() {
  const pathname = usePathname();

  return (
  <ul>
    <li>
      <Component/>
    </li>
  </ul>
  );
}
