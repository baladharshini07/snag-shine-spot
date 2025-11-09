import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Classic Watch",
    price: 299,
    image: product1,
    category: "Accessories",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 149,
    image: product2,
    category: "Audio",
  },
  {
    id: 3,
    name: "Smart Speaker",
    price: 199,
    image: product3,
    category: "Audio",
  },
  {
    id: 4,
    name: "Leather Sleeve",
    price: 89,
    image: product4,
    category: "Accessories",
  },
];

export const FeaturedProducts = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of premium products designed for modern living
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border hover:shadow-medium transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <div className="text-sm text-muted-foreground">{product.category}</div>
                <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">${product.price}</span>
                  <Button size="sm" variant="ghost" className="text-accent hover:text-accent">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
