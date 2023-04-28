interface ButtonProps {
  url: string;
  text: string;
  blue?: boolean;
}
export function Button({ url, text, blue = false }: ButtonProps) {
  if (blue) {
    return (
      <a href={`#${url}`}>
        <button className="mx-auto rounded-lg border-4 border-transparent bg-blue-900 p-2 px-4 text-3xl font-bold text-white shadow-md hover:bg-opacity-80 hover:text-slate-200 hover:ring-2 hover:ring-brightred-500 hover:ring-offset-2">
          {text}
        </button>
      </a>
    );
  }
  return (
    <a href={`#${url}`}>
      <button className="mx-auto rounded-lg border-4 border-transparent bg-brightred-500 p-2 px-4 text-3xl font-bold text-white shadow-md hover:border-4 hover:border-blue-900 hover:bg-opacity-80 hover:text-slate-200">
        {text}
      </button>
    </a>
  );
}
