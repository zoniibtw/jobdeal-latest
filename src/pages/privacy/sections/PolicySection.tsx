import React from "react";
import { useTranslation } from "react-i18next";

// Define the type for policy content items
type PolicyContentItem = 
  | string
  | { subtitle: string; text: string };

// Define the type for policies
interface Policy {
  title: string;
  content: PolicyContentItem[];
}

const PolicySection: React.FC = () => {
  const { t } = useTranslation("privacy");

  // Fetch the policies data
  const policies = t("policies", { returnObjects: true }) as Policy[];

  // Check if policies is an array and has data
  if (!Array.isArray(policies)) {
    console.error("Expected policies to be an array but got:", policies);
    return <div>Error loading policies</div>; // Handle error gracefully
  }

  return (
    <div className="container mx-auto py-6 px-24 max-md:px-10">
      {policies.map((policy, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            {policy.title}
          </h2>
          {policy.content.map((item: PolicyContentItem, idx: number) => {
            if (typeof item === 'string') {
              return (
                <p
                  key={idx}
                  className={`text-white/50 text-sm mb-4 ${
                    policy.content.length > 1 && idx === policy.content.length - 1
                      ? "font-semibold"
                      : ""
                  }`}
                >
                  {item}
                </p>
              );
            } else if (typeof item === 'object') {
              return (
                <div key={idx} className="mb-4">
                  <h3 className="text-white text-md font-semibold mb-2">
                    {item.subtitle}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">
                    {item.text}
                  </p>
                </div>
              );
            }
            return null; // Handle unexpected cases
          })}
        </div>
      ))}
    </div>
  );
};

export default PolicySection;