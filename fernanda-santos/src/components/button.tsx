interface ButtonProps {
  url: string;
  text: string;
}
export function Button({ url, text }: ButtonProps) {
  return (
    <a href={`#${url}`}>
      <button className="border rounded-lg bg-brightred-500 text-white font-bold text-3xl px-4 mx-auto">
        {text}
      </button>
    </a>
  );
}
