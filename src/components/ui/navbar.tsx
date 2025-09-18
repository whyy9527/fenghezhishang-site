// components/site/navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: '首页' },
    { href: '/services', label: '服务' },
    { href: '/cases', label: '案例' },
    { href: '/about', label: '关于我们' },
    { href: '/contact', label: '联系' },
  ]

  return (
    <header className="w-full border-b border-[var(--border)] bg-surface">
      <div className="mx-auto max-w-[1120px] px-[20px] h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[16px] leading-[24px] font-medium text-fg"
        >
          枫禾智尚
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[16px]">
          <NavigationMenu>
            <NavigationMenuList className="gap-[8px]">
              {links.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <Link
                    href={l.href}
                    className="px-[10px] py-[6px] text-[14px] leading-[22px] text-[var(--surface-foreground)] hover:underline underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/contact">
            <Button className="h-[36px] px-[14px] text-[14px] leading-[22px] bg-[var(--brand-600)] hover:bg-[var(--brand-700)]">
              咨询合作
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="h-[36px] px-[12px] text-[14px] leading-[22px]"
              >
                菜单
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] max-w-[320px] p-[20px]"
            >
              <div className="flex flex-col gap-[8px] mt-[12px]">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-[8px] py-[10px] rounded-[12px] text-[14px] leading-[22px] hover:bg-[var(--gray-50)]"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button className="mt-[8px] h-[40px] w-full text-[14px] leading-[22px] bg-[var(--brand-600)] hover:bg-[var(--brand-700)]">
                    咨询合作
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
