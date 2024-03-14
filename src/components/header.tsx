import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export function Header() {
  return (
    <div className="flex items-center justify-between p-8 bg-sky-500/60 shadow-lg backdrop-blur-sm rounded-lg">
      <h1 className="font-bold text-3xl text-black transition-transform duration-400 animate-in fade-in ease-in translate-y-1">
        BlessedFm.
      </h1>
      <BrowserRouter>
        <NavigationMenu className="hidden lg:inline-block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button
                type="button"
                variant="link"
                className="text-black/80 hover:text-slate-200 h-8 transition-transform duration-400 animate-in fade-in ease-in translate-y-1"
              >
                <Link to="#Sobre">Sobre</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                type="button"
                variant="link"
                className="text-black/80 hover:text-slate-200 h-8 transition-transform duration-700 animate-in fade-in ease-in translate-y-1"
              >
                <Link to="#Produtos">Produtos</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                type="button"
                variant="link"
                className="text-black/80 hover:text-slate-200 h-8 transition-transform duration-1000 animate-in fade-in ease-in translate-y-1"
              >
                <Link to="#Contatos">Contatos</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </BrowserRouter>
    </div>
  );
}
