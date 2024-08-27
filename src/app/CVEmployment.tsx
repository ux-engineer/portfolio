import { employment } from '../assets/data.json';

export default function CVEmployment() {
  return (
    <section id="CVEmployment" className="grid grid-cols-10 gap-4 mt-10">
      <div className="col-span-1 flex flex-col">
        <h3 className="flex-1 text-4xl font-extralight tracking-widest text-cyan-600">
          <span className="mt-5 writing-mode-vertical transform rotate-180 uppercase whitespace-nowrap">
            {employment.sectionTitle}
          </span>
        </h3>
      </div>
      <div className="col-span-9 lg:col-span-9 sm:pr-10">
        {employment.content.map(entry => (
          <div key={entry.title} className="grid grid-cols-6 gap-2 text-sm md:text-base">
            <h4 className="mt-4 block col-span-4 font-semibold tracking-wide">{entry.title}</h4>
            <h5 className="mt-4 block col-span-2 text-right font-mono tracking-wide text-cyan-500">
              <span className="font-semibold text-orange-500">{entry.dateRange.start[0]}</span>/<span className="font-semibold text-orange-500">{entry.dateRange.start[1]}</span>
              &nbsp;&raquo;&nbsp;
              <span className="font-semibold text-orange-500">{entry.dateRange.end[0]}</span>/<span className="font-semibold text-orange-500">{entry.dateRange.end[1]}</span>
            </h5>
            { entry.body ? <p className="block col-span-6 text-sm">{entry.body}</p> : ''}
          </div>
        ))}
      </div>
    </section>
  );
}
