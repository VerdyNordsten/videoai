'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  PanelLeft, 
  Search, 
  LogOut
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { logout } from '@/app/(dashboard)/dashboard/actions';

export function Header() {
  const router = useRouter();

  const handleSignOut = async () => {
    await logout();
    router.push('/login');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Button 
              variant="ghost" 
              className="justify-start gap-4 px-2.5"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search..."
          className="flex h-7 w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        onClick={handleSignOut}
      >
        <LogOut className="h-5 w-5" />
        <span className="sr-only">Logout</span>
      </Button>
    </header>
  );
}