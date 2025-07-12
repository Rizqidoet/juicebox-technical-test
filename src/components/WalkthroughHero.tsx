type WalkthroughHeroProps = {
  onNext: () => void;
};

export default function WalkthroughHero({ onNext }: WalkthroughHeroProps) {
  return (
    <div className="h-full text-center flex flex-col pb-[10%] pt-6">
      <p className="text-3xl mx-auto font-bagoss font-normal text-[24px]">
        Compare your thoughts on <span className="text-purple-400">technology</span> with current industry opinions.
      </p>

      <button
        onClick={onNext}
        className="mt-auto w-full bg-brandpurple text-brandblack p-3 font-bagoss font-normal rounded-19 font-medium hover:bg-gray-200 transition"
      >
        Get a reality check
      </button>
    </div>
  );
}
