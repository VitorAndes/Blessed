import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link} from "react-router-hash-link";

export function Header(){
    return (
            <div className="flex items-center justify-between p-8 bg-sky-500 rounded-md">
                <h1 className="font-bold text-3xl text-black">BlessedFm.</h1>
                <BrowserRouter>
                <NavigationMenu className="hidden md:inline-block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Button type="button" variant='link' className="text-black/80 hover:text-slate-200 h-8">
                                <NavigationMenuLink>
                                    <Link to='#Sobre'>
                                        Sobre
                                    </Link>
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button type="button" variant='link' className="text-black/80 hover:text-slate-200 h-8">
                                <NavigationMenuLink>
                                    <Link to='#Produtos'>
                                        Produtos
                                    </Link>
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button type="button" variant='link' className="text-black/80 hover:text-slate-200 h-8">
                                <NavigationMenuLink>
                                    <Link to='#Contatos'>
                                        Contatos
                                    </Link>
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>            
                    </NavigationMenuList>
                </NavigationMenu>
                </BrowserRouter>
            </div>
    )
}