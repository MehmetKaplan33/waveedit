import React, { useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { fadeInUp, staggerContainer } from "../constants/animations";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      monthlyPrice: "0",
      yearlyPrice: "0",
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
      icon: "/images/circle.svg",
    },
    {
      name: "Premium",
      monthlyPrice: "19.99",
      yearlyPrice: "199.99",
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
      icon: "/images/triangle.svg",
      savings: "20%",
    },
    {
      name: "Team",
      monthlyPrice: "49.99",
      yearlyPrice: "499.99",
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
      icon: "/images/hexagon.svg",
      savings: "25%",
    },
  ];

  return (
    <section id="pricing" className="relative py-32 bg-gradient-to-b from-white to-blue-50/50 overflow-hidden">
      <Element name="pricing">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Experience AI video editing with pricing that fits every need and
              budget.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-sm font-medium ${
                  !isYearly ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{ backgroundColor: isYearly ? "#3B82F6" : "#94A3B8" }}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  isYearly ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Yearly
                <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  Save up to 25%
                </span>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-white border-2 border-blue-500 shadow-xl shadow-blue-500/10"
                    : "bg-white border border-gray-200"
                }`}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{plan.description}</p>
                  </div>
                  <img src={plan.icon} alt={plan.name} className="w-12 h-12" />
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && plan.savings && (
                    <span className="text-sm text-green-600 font-medium">
                      Save {plan.savings} with yearly billing
                    </span>
                  )}
                </div>

                <ul className="mb-8 flex-grow space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.highlighted ? "text-blue-500" : "text-blue-400"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  primary={plan.highlighted}
                  outline={!plan.highlighted}
                  containerClassName="w-full justify-center group"
                >
                  <span className="flex items-center">
                    {plan.cta}
                    <svg
                      className={`ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 ${
                        plan.highlighted ? "text-white" : "text-blue-600"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-8">
              Enterprise customer? Get a customized plan for your business.
            </p>
            <Button outline containerClassName="inline-flex items-center group">
              <span className="flex items-center">
                Contact Sales
                <svg
                  className="ml-2 w-5 h-5 text-blue-600 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Button>
          </motion.div>
        </div>
      </Element>
    </section>
  );
}

export default Pricing;
