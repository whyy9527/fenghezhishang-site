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

  const mainLinks = [
    { href: '/', label: '首页' },
    { href: '/services', label: '服务' },
    { href: '/about', label: '关于我们' },
    { href: '/contact', label: '联系我们' },
  ]

  const policyLinks = [
    { href: '/privacy', label: '隐私政策' },
    { href: '/terms', label: '免责声明' },
  ]

  return (
    <header className="w-full border-b border-[var(--border)] bg-background">
      <div className="mx-auto flex h-[60px] max-w-[1120px] items-center justify-between px-[20px]">
        {/* Logo */}
        <Link
          href="/"
          className="text-[16px] font-medium leading-[24px] text-foreground"
        >
          丰和智尚
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-[16px] md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-[8px]">
              {mainLinks.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <Link
                    href={l.href}
                    className="px-[10px] py-[6px] text-[14px] leading-[22px] hover:underline underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </NavigationMenuItem>
              ))}
              <span className="mx-[4px] text-[12px] text-muted-foreground">|</span>
              {policyLinks.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <Link
                    href={l.href}
                    className="px-[10px] py-[6px] text-[14px] leading-[22px] text-muted-foreground hover:underline underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/contact">
            <Button className="h-[36px] px-[14px] text-[14px] leading-[22px] bg-[var(--brand-600)] hover:bg-[var(--brand-700)]">
              立即联系
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
              <nav className="mt-[12px] flex flex-col gap-[8px]">
                {mainLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[12px] px-[8px] py-[10px] text-[14px] leading-[22px] hover:bg-[var(--gray-50)]"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="my-[8px] h-[1px] bg-[var(--border)]" />
                {policyLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[12px] px-[8px] py-[10px] text-[14px] leading-[22px] text-muted-foreground hover:bg-[var(--gray-50)]"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button className="mt-[8px] h-[40px] w-full text-[14px] leading-[22px] bg-[var(--brand-600)] hover:bg-[var(--brand-700)]">
                    立即联系
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
