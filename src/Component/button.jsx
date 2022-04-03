export default function Button({ children }) {
  return (
    <button
      className="h-10 w-44 p-2 text-white text-center 
    bg-primary rounded-xl  hover:bg-secondary
    transition-all"
    >
      {children}
    </button>
  );
}

export function Button2({ children }) {
  return (
    <button
      className="h-10 w-44 p-2 text-white text-center 
    bg-secondary rounded-xl  hover:bg-primary
    transition-all"
    >
      {children}
    </button>
  );
}
