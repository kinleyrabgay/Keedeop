'use client';
import { SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './Theme';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <SignInButton>
        <Button variant="outline">Sign In</Button>
      </SignInButton>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
