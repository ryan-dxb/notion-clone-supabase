import React, { FC } from "react";

interface TemplateProps {
  // Add your prop types here
  children: React.ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <div
      className="
      h-screen
      p-6 flex 
      justify-center"
    >
      {children}
    </div>
  );
};

export default Template;
