'use client'

import SearchInput from '../../components/Search'
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import { Compass, GalleryHorizontalEnd, LogIn, Search } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuOption = [
  {
    title: 'Home',
    icon: Search,
    path: '/',
  },
  {
    title: 'Discover',
    icon: Compass,
    path: '/discover',
  },
  {
    title: 'Library',
    icon: GalleryHorizontalEnd,
    path: '/library',
  },
]

export default function AppSidebar() {
  const path = usePathname()
  const { user } = useUser()
  return (
    <Sidebar>
      <SidebarHeader className="bg-accent flex items-center py-5">
        <Image src="/logo.png" alt="logo" width={100} height={140} />
        <SearchInput />
      </SidebarHeader>
      <SidebarContent className="bg-accent">
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {MenuOption.map((menu, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`p-5 py-6 hover:bg-blue-200 hover:font-bold ${
                      path?.includes(menu.path) && 'font-bold'
                    }`}
                  >
                    <a href={menu.path} className="">
                      <menu.icon className="h-8 w-8" />
                      <span className="text-lg">{menu.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            {!user ? (
              <SignUpButton mode="modal">
                <Button className="rounded-full mx-4 mt-4">Sign Up</Button>
              </SignUpButton>
            ) : (
              <SignOutButton>
                <Button className="rounded-full mx-4 mt-4">Logout</Button>
              </SignOutButton>
            )}
          </SidebarContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="bg-accent">
        <div className="p-3 flex flex-col">
          <h2 className="text-gray-500 font-black">Try Pro</h2>
          <p className="text-gray-400">
            Upgrade for Full code, smarter AI & more Assists{' '}
          </p>
          <Button variant={'secondary'} className="text-gray-500 mb-3">
            Learn More
          </Button>
          <UserButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
