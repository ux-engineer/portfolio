import { intro } from '../assets/data.json';

export default function CVIntro() {
  return (
    <section id="CVIntro" className="grid grid-cols-10 gap-4 mt-10">
      <div className="col-span-1 flex flex-col">
        <h3 className="flex-1 text-4xl font-extralight tracking-widest text-cyan-600">
          <span className="mt-5 writing-mode-vertical transform rotate-180 uppercase whitespace-nowrap">
            {intro.sectionTitle}
          </span>
        </h3>
      </div>
      <div className="col-span-9 lg:col-span-9 sm:pr-10">
        <h4 className="font-semibold">{intro.title}</h4>
        <p className="my-5">{intro.body}</p>
        <p className="text-sm font-semibold text-slate-600 tracking-wider">{intro.foot}</p>
      </div>
    </section>
  );
}
