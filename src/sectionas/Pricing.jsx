import { motion } from "framer-motion";
import Badge from "../components/Badge";
import Button from "../components/Button";

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "For basic editing needs",
      features: [
        "720p video resolution",
        "5 projects per month",
        "5 minutes maximum video length",
        "Basic templates",
        "Standard export",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "19.99",
      description: "Perfect for content creators",
      features: [
        "4K video resolution",
        "Unlimited projects",
        "30 minutes maximum video length",
        "Premium templates",
        "Priority processing",
        "Advanced audio editing",
        "Cloud storage (100GB)",
      ],
      cta: "Upgrade to Premium",
      highlighted: true,
    },
    {
      name: "Team",
      price: "49.99",
      description: "For teams and businesses",
      features: [
        "8K video resolution",
        "Unlimited projects",
        "Unlimited video length",
        "Custom template creation",
        "Priority processing",
        "Advanced audio editing",
        "Cloud storage (1TB)",
        "Multi-user access",
        "Brand customization",
      ],
      cta: "Get for Your Team",
      highlighted: false,
    },
  ];

  const planVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMCA1aDFWMzZoLTF2MXptMi0yaDF2LTJoLTF2MnptMiAyaDF2LTJoLTF2MnptLTUgMmgxdi0yaC0xdjJ6bTUtM2gxdi0yaC0xdjJ6TTM0IDI5aDFWMjdoLTF2MnptLTIgMmgxVjI5aC0xdjJ6bS0zIDBoMVYyOWgtMXYyem0wIDNoMXYtMmgtMXYyem0wIDNoMXYtMmgtMXYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-blue-50 text-blue-700 ring-blue-200">PRICING</Badge>
          <h2 className="text-5xl font-medium mt-4 mb-6 text-gray-800">
            Plans for Every Budget
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Experience AI video editing with pricing that fits every need and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={planVariants}
              className={`rounded-2xl p-8 flex flex-col h-full border shadow transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white shadow-lg border-blue-200 transform hover:-translate-y-1"
                  : "bg-white/70 backdrop-blur-sm border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-2 text-gray-800">
                  {plan.name}
                </h3>
                <div className="flex items-end mb-2">
                  <span className={`text-5xl font-bold ${plan.highlighted ? "text-blue-600" : "text-gray-700"}`}>
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-500 mb-1 ml-1">
                    {plan.price === "0" ? "" : "₺/ay"}
                  </span>
                </div>
                <p className="text-gray-500">{plan.description}</p>
              </div>

              <ul className="mb-8 flex-grow space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-blue-500" : "text-blue-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={plan.highlighted ? "w-full" : "w-full"}
                primary={plan.highlighted}
                secondary={!plan.highlighted}
              >
                {plan.cta}
                <svg
                  className="ml-2 inline-block"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Have larger enterprise needs? Contact us for custom solutions and pricing.
          </p>
          <Button
            className="mt-4" 
            outline
            containerClassName="w-auto"
          >
            Contact Us
            <svg
              className="ml-2 inline-block"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
