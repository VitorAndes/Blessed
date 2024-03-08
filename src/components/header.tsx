import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

export function Header(){
    return (
            <div className="flex items-center justify-between p-8">
                <div>
                    <h1 className="font-bold text-3xl text-black">BlessedFm.</h1>
                </div>
                <NavigationMenu className="hidden md:inline-block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Button type="button" variant='link' className="text-black/80 hover:text-slate-200 h-8">
                                <NavigationMenuLink>
                                    Sobre
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button type="button" variant='link' className="text-black/80 hover:text-slate-200 h-8">
                                <NavigationMenuLink>
                                    Produtos
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button type="button" variant='link' className="text-black/80 hover:text-slate-200 h-8">
                                <NavigationMenuLink>
                                    Contatos
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>            
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
    )
}