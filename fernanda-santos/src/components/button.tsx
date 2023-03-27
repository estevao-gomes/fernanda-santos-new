interface ButtonProps {
  url: string;
  text: string;
}
export function Button({ url, text }: ButtonProps) {
  return (
    <a href={`#${url}`}>
      <button className="mx-auto rounded-lg border bg-brightred-500 px-4 text-3xl font-bold text-white">
        {text}
      </button>
    </a>
  );
}
