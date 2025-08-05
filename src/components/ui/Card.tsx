import React from "react";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`bg-white rounded-2xl shadow-lg ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`p-6 border-b border-slate-200 ${className}`}>{children}</div>
);

export const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`p-6 ${className}`}>{children}</div>;

export const CardFooter = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`p-6 bg-slate-50 border-t border-slate-200 rounded-b-2xl ${className}`}
  >
    {children}
  </div>
);

export default Card;
