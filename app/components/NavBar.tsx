import React from 'react';
import { motion } from 'framer-motion';
import { NavigationMenu } from '@/components/ui/navigation-menu';

const NavBar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white p-4"
    >
      <NavigationMenu />
    </motion.nav>
  );
};

export default NavBar;