interface ProductCardProps {
    productDataprop: {
      id: number;
      name: string;
      description: string;
      rent_amount: number;
      location: string;
    };
  }
  
  export function ProductCard({ productDataprop }: ProductCardProps) {
    const { name, description, rent_amount, location } = productDataprop;
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Rent Amount: ${rent_amount}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
  