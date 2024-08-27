import { focusareas } from '../assets/data.json';

export default function CVFocus() {
  const contentCount = focusareas.content.length;

  return (
    <section id="CVFocus" className="grid grid-cols-12 -mx-5 md:-mx-10 px-10 py-3 mt-5 mb-10 bg-amber-50 text-center sm:text-left">
      <div className="col-span-11 sm:col-span-4 md:col-span-3 lg:col-span-2 flex flex-col">
        <h3 className="flex-1 text-lg font-light text-cyan-600 uppercase whitespace-nowrap tracking-widest">
          {focusareas.sectionTitle}
        </h3>
      </div>
      <div className="col-span-11 sm:col-span-8 md:col-span-9 lg:col-span-10 pt-1 text-sm font-semibold text-orange-500 align-middle tracking-wider">
        {focusareas.content.map((entry, index) => (
          <span key={entry}>
            <span className="whitespace-nowrap">{entry}</span>{
              index < contentCount - 1 ?
                <span className="text-cyan-500">&nbsp;&nbsp;&middot;&nbsp; </span>
                : ''
            }
          </span>
        ))}
      </div>
    </section>
  );
}
