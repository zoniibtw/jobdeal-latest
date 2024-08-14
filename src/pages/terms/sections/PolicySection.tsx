import React from "react";
import { useTranslation } from "react-i18next";

const PolicySection: React.FC = () => {
  const { t } = useTranslation("terms");

  const policies = t("policies", { returnObjects: true }) as Array<{
    title: string;
    content: string[];
  }>;

  return (
    <div className="container mx-auto py-6 px-24 max-md:px-10">
      {policies.map((policy, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            {policy.title}
          </h2>
          {policy.content.map((paragraph, idx) => (
            <p
              key={idx}
              className={`text-white/50 text-sm mb-4 ${
                policy.content.length > 1 && idx === policy.content.length - 1
                  ? "font-semibold"
                  : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PolicySection;