import ThemeButton from "./theme/ThemeButton";

const Section = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-2">
      <header className="flex w-full h-12 border-b border-zinc-400 dark:border-zinc-300 pb-2">
        <div className="flex justify-end items-center gap-2">
          <ThemeButton />
        </div>
      </header>
    </div>
  );
};

export default Section;
