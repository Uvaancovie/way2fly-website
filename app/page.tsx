"use client";

import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import HeroSection from './components/HeroSection';
// Ensure this path is correct

export default function Page() {
  return (
    <div className="dark">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
              <NavigationMenuLink href="/portfolio">Portfolio</NavigationMenuLink>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="p-4 bg-black text-white">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the landing page of my portfolio.</p>
        <HeroSection/>
      </div>
    </div>
  );
}
