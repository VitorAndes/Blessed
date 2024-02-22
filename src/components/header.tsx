import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

export function Header(){
    return (
            <div className="flex items-center justify-between p-12">
                <div>
                    <h1 className="font-bold text-3xl md:text-5xl">BlessedFm.</h1>
                </div>
                <NavigationMenu className="hidden md:inline-block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Button type="button" variant='ghost' className="text-slate-300 md:text-4xl h-14">
                                <NavigationMenuLink>
                                    Sobre
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button type="button" variant='ghost' className="text-slate-300 md:text-4xl h-14">
                                <NavigationMenuLink>
                                    Produtos
                                </NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button type="button" variant='ghost' className="text-slate-300 md:text-4xl h-14">
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