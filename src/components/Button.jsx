export default function Button({ onClick, style, children }) {
  return (
    <button className={`${style} cursor-pointer`} onClick={onClick}>
      {children}
    </button>
  );
}
