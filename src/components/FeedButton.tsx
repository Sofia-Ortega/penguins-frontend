interface Props {
  onClick: () => void;
}

export default function FeedButton({ onClick }: Props) {
  return (
    <button
      className="bg-violet-700 py-1 px-5 rounded-md text-slate-50 font-bold"
      onClick={onClick}
    >
      Feed
    </button>
  );
}
