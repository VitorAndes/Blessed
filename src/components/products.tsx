import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { getProducts } from "../data/products";
import { useQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";

export function Products() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="text-left space-y-3">
        <h1 className="font-bold text-2xl  text-black">Produtos</h1>
        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id
          laborum maiores itaque eius! Quis quaerat reiciendis iusto molestias
          officia incidunt, quod eaque dolores, inventore repellendus laudantium
          explicabo eveniet consequuntur!
        </p>
      </div>
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="md:w-[750px]">
            {products?.map((product) => {
              return (
                <CarouselItem key={product.id} className="md:basis-1/2">
                  <Card>
                    <CardContent className="flex aspect-square items-center mx-auto justify-center p-0">
                      <img
                        className="h-[300px] w-[300px] rounded-2xl shadow-lg shadow-slate-600 cursor-grab active:cursor-grabbing"
                        src={product.img}
                        alt={product.name}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="sm:hidden" variant="default" />
          <CarouselNext className="sm:hidden" variant="default" />
        </Carousel>
      </div>
    </div>
  );
}
