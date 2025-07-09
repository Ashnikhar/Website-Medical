'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Stethoscope, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const industriesLinks = [
  { href: '/industries/insurance', label: 'Insurance' },
  { href: '/industries/healthcare-providers', label: 'Healthcare Providers' },
  { href: '/industries/lifesciences', label: 'Life Sciences' },
  { href: '/industries/employees', label: 'Employees' },
];

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries', subLinks: industriesLinks },
  { href: '/products', label: 'Products' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  const pathname = usePathname();

  const allMobileLinks = [...mainNavLinks, { href: '/contact', label: 'Contact Us' }];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Stethoscope className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg inline-block text-primary">
            Adirya health
          </span>
        </Link>
        
        {/* Centered Navigation for Desktop */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          {mainNavLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger
                  className={cn(
                    'flex items-center gap-1 transition-colors hover:text-primary focus-visible:outline-none',
                    pathname.startsWith(link.href) ? 'text-primary' : 'text-foreground/60'
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.subLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.href} asChild>
                      <Link href={subLink.href}>{subLink.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        
        {/* Right Aligned Items */}
        <div className="flex flex-1 md:flex-none items-center justify-end space-x-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Stethoscope className="h-6 w-6 text-primary" />
                <span className="font-bold inline-block text-primary font-headline">
                  Adirya healthPro
                </span>
              </Link>
              <div className="flex flex-col space-y-1">
                {allMobileLinks.map((link) =>
                  link.subLinks ? (
                    <Accordion key={link.href} type="single" collapsible className="w-full">
                      <AccordionItem value={link.label} className="border-b-0">
                        <AccordionTrigger
                          className={cn(
                            'p-2 rounded-md font-medium text-base hover:no-underline transition-colors',
                            pathname.startsWith(link.href)
                              ? 'bg-accent text-accent-foreground'
                              : 'text-foreground hover:bg-accent/50'
                          )}
                        >
                          {link.label}
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 pb-0">
                          <div className="flex flex-col space-y-1 mt-1">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                className={cn(
                                  'p-2 rounded-md transition-colors text-muted-foreground hover:text-foreground',
                                  pathname === subLink.href ? 'text-primary' : ''
                                )}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'transition-colors hover:bg-accent/50 font-medium text-base p-2 rounded-md',
                         pathname === link.href ? 'bg-accent text-accent-foreground' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
