
export default function Like({ onClick, etatLike }) {
  return (
    <button className={etatLike ? "btn btn-light" : "btn btn-primary"} onClick={onClick}>
      {etatLike ? "Déjà liker" : "Liker"}
    </button>
  );
}
