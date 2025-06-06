export default function Button({ onClick, style, children }) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
