import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import { getProducts } from "../data/products";
import { useQuery } from "@tanstack/react-query";

export function Products(){

    const {data: products} = useQuery({
        queryKey:['products'],
        queryFn:getProducts,
    })

    return(
        <div className="flex flex-col items-center text-center space-y-3" >
            <div className="my-10 text-left">
                <h1 className="font-bold text-2xl mb-4" id="Produtos">Produtos</h1>
                <p className="text-lg text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure est ipsum doloremque animi aliquid necessitatibus dicta debitis omnis, dolorem autem cum earum tempore placeat, reiciendis quia maiores tenetur quasi.</p>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus sapiente excepturi repellat esse. Eum quidem quaerat alias, vel sed, maxime sit iusto sequi quod est ipsa, eaque aperiam esse.</p>
            </div>
            <div>
                <Carousel className="w-max-[600px]" >
                <CarouselContent className="" >
                {products?.map((product) => {
                    return(
                    <CarouselItem key={product.id} className='md:basis-1/3'>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-0">
                                    <img className="h-full w-full overflow-hidden rounded-xl shadow-lg shadow-blue-200" src={product.img} alt={product.name} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    )
                })}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex"/>
                <CarouselNext className="hidden md:flex"/>
                </Carousel>
            </div>
        </div>
    )
}