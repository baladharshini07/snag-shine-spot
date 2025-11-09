import { Truck, Shield, Headphones, Package } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% protected",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support",
  },
  {
    icon: Package,
    title: "Easy Returns",
    description: "30-day return policy",
  },
];

export const Features = () => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
