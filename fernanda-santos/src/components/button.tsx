interface ButtonProps {
  url: string;
  text: string;
}
export function Button({ url, text }: ButtonProps) {
  return (
    <a href={`#${url}`}>
      <button className="p-2 mx-auto rounded-lg border-4 border-transparent bg-brightred-500 px-4 text-3xl shadow-md font-bold text-white hover:border-4 hover:border-blue-900 hover:bg-opacity-80 hover:text-slate-200">
        {text}
      </button>
    </a>
  );
}
