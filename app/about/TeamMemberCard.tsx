import Image from "next/image";

type Props = {
  descriptions: string[];
  imageSrc: string;
  name: string;
  title: string;
};

export const TeamMemberCard = ({
  descriptions,
  imageSrc,
  name,
  title,
}: Props) => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-4 md:flex-nowrap">
      <Image
        alt={`Photo of ${name}`}
        className="rounded-lg shadow-md"
        height={220}
        src={imageSrc}
        width={220}
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-row flex-wrap items-baseline gap-2">
          <span className="text-2xl font-semibold text-stone-800">{name}</span>
          <span className="text-md italic text-stone-500">{title}</span>
        </div>
        <div className="flex flex-col gap-1">
          {descriptions.map((description) => (
            <span
              className="text-sm font-extralight text-stone-700"
              key={description}
            >
              {description}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
