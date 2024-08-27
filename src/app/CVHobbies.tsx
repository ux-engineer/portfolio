import { hobbies } from '../assets/data.json';

export default function CVHobbies() {
  const contentCount = hobbies.content.length;

  return (
    <section id="CVHobbies" className="grid grid-cols-12 -mx-5 md:-mx-10 px-10 py-3 mt-10 text-center sm:text-left">
      <div className="col-span-11 sm:col-span-4 md:col-span-3 lg:col-span-2 flex flex-col">
        <h3 className="flex-1 text-lg font-light text-cyan-600 uppercase whitespace-nowrap tracking-widest">
          {hobbies.sectionTitle}
        </h3>
      </div>
      <div className="col-span-11 sm:col-span-8 md:col-span-9 lg:col-span-10 pt-1 text-sm font-semibold text-slate-600 align-middle tracking-wider">
        {hobbies.content.map((entry, index) => (
          <span key={entry}>
            <span className="whitespace-nowrap">{entry}</span>{
              index < contentCount - 1 ?
                <span className="text-cyan-500"> &nbsp;&middot;&nbsp; </span>
                : ''
            }
          </span>
        ))}
      </div>
    </section>
  );
}
