type Props = {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  dark?: boolean;
  className?: string;
};

export default function SectionHead({ eyebrow, title, children, dark, className = "" }: Props) {
  return (
    <div className={`mb-11 max-w-[680px] ${className}`}>
      <span className={`eyebrow ${dark ? "!text-coral" : ""}`}>{eyebrow}</span>
      <h2
        className={`my-2.5 mb-4 text-[40px] leading-[1.05] min-[901px]:text-[58px] ${
          dark ? "text-crema" : ""
        }`}
      >
        {title}
      </h2>
      {children ? <p className="text-[17px] text-gris-texto">{children}</p> : null}
    </div>
  );
}
