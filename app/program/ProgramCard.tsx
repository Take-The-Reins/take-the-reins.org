import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const ProgramCard = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col rounded-lg bg-stone-300 md:rounded-xl md:shadow-xl">
      <div className="p-2 md:p-4">
        <span className="text-md font-semibold text-stone-700 md:text-xl">
          {title}
        </span>
      </div>
      <div className="bg-stone-200" style={{ height: "1px", width: "100%" }} />
      <div className="p-2 md:p-4">{children}</div>
    </div>
  );
};
