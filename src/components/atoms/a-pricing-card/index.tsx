import { Button } from "@/components/ui/button";
import IconParkSolidCheckOne from "~icons/icon-park-solid/check-one.jsx";

interface Props {
  title: string;
  price?: number;
  actionLabel: string;
  features: string[];
  description: string;
  highlight?: boolean;
}

const PricingCard: React.FC<Props> = (props) => {
  return (
    <div
      data-highlight={props.highlight}
      className="data-[highlight=true]:scale-125 data-[highlight=true]:bg-foreground data-[highlight=true]:text-background border w-screen p-6 rounded-3xl flex flex-col gap-4 max-w-[350px]"
    >
      <p
        data-highlight={props.highlight}
        className="data-[highlight=true]:bg-foreground data-[highlight=true]:text-background font-medium text-foreground/70 text-xl"
      >
        {props.title}
      </p>
      <div className="flex items-baseline mt-8">
        <p className="text-4xl font-medium">
          {props.price ? `$${props.price}` : "Free"}
        </p>
        {props.price && (
          <div
            data-highlight={props.highlight}
            className="data-[highlight=true]:text-background text-foreground/70 text-xl"
          >
            /Month
          </div>
        )}
      </div>
      <p
        data-highlight={props.highlight}
        className="data-[highlight=true]:text-background text-foreground/60"
      >
        {props.description}
      </p>
      <Button
        variant="outline"
        data-highlight={props.highlight}
        className="data-[highlight=true]:bg-foreground data-[highlight=true]:hover:bg-background/10 data-[highlight=true]:border-background/10 data-[highlight=true]:text-background text-lg my-4 p-8 rounded-full font-normal"
      >
        {props.actionLabel}
      </Button>
      <div className="flex flex-col gap-4">
        {props.features.map((feature) => (
          <div key={feature} className="flex items-center gap-4">
            <span className="text-lg">
              <IconParkSolidCheckOne />
            </span>
            <p
              data-highlight={props.highlight}
              className="data-[highlight=true]:text-background text-foreground/60"
            >
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
