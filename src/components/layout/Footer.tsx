import Link from 'next/link';
import { Stethoscope, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 pr-8">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-primary">Adirya health</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Revolutionizing healthcare delivery with cutting-edge technology and a commitment to patient care.
            </p>
            <div className="flex space-x-4 mt-6">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/industries/insurance" className="text-muted-foreground hover:text-primary transition-colors">Insurance</Link></li>
              <li><Link href="/industries/healthcare-providers" className="text-muted-foreground hover:text-primary transition-colors">Healthcare Providers</Link></li>
              <li><Link href="/industries/lifesciences" className="text-muted-foreground hover:text-primary transition-colors">Life Sciences</Link></li>
              <li><Link href="/industries/employees" className="text-muted-foreground hover:text-primary transition-colors">Employees</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/success-stories" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Adirya health. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
