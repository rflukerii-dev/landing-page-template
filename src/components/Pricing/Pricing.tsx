import PricingColumn from "./PricingColumn";

import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    const visibleTiers = tiers.filter(tier => tier.price !== 0);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visibleTiers.map((tier, index) => (
                <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
            ))}
        </div>
    )
}

export default Pricing