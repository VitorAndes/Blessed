import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

export function Header(){
    return (
            <div className="flex items-center justify-between p-6 ">
                <div>
                    <h1 className="font-bold text-3xl">BlessedFm.</h1>
                </div>
                <NavigationMenu className=" md:inline-block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Button type="button" variant='link' className="text-slate-300">
                                <NavigationMenuLink>
                                    Sobre
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button type="button" variant='link' className="text-slate-300">
                                <NavigationMenuLink>
                                    Produtos
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button type="button" variant='link' className="text-slate-300">
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