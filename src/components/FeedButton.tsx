interface Props {
  onClick: () => void;
  disabled: boolean;
}

export default function FeedButton({ onClick, disabled }: Props) {
  return (
    <button
      className={`bg-violet-700 py-1 px-5 rounded-md text-slate-50 font-bold hover:shadow-lg transition
        ${disabled && "bg-slate-400"}
        `}
      onClick={onClick}
      disabled={disabled}
    >
      Feed
    </button>
  );
}
