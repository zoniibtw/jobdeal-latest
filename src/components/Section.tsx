import React, { ReactNode, FC } from "react";

interface SectionProps {
  children: ReactNode;
  scrollTo?: string;
  position: "bottom" | "default" | "top";
}

const Section: FC<SectionProps> = ({
  children,
  scrollTo,
  position = "default",
}) => {
  const getPosition = (position: string) => {
    switch (position) {
      case "bottom":
        return "max-md:pb-[20%] pb-[10%] max-md:pt-[15%] pt-[5%]";
      case "top":
        return "max-md:pt-[20%] pt-[10%] max-md:pb-[15%] pb-[5%]";
      default:
        return "max-md:py-[10%] py-[5%]";
    }
  };

  return (
    <section
      className={`w-full max-md:px-0 max-md:w-11/12 max-xl:w-10/12 mx-auto max-w-[1250px] ${getPosition(position)}`}
      id={scrollTo}
    >
      {children}
    </section>
  );
};

export default Section;
