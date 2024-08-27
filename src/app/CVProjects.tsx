import parse from 'html-react-parser';

import { projects } from '../assets/data.json';

export default function CVProjects() {
  return (
    <section id="CVProjects" className="grid grid-cols-10 gap-4 mt-5">
      <div className="col-span-1 flex flex-col">
        <h3 className="flex-1 text-4xl font-extralight tracking-widest text-cyan-600">
          <span className="mt-5 writing-mode-vertical transform rotate-180 uppercase whitespace-nowrap">
            {projects.sectionTitle}
          </span>
        </h3>
      </div>
      <div className="col-span-9 pr-10">
        {projects.content.map(entry => (
          <div key={entry.company} className="grid grid-cols-6 gap-2 pb-5">
            <h4 className="block col-span-6 font-semibold tracking-wide">
              {entry.company}
              <span className="text-cyan-500"> &nbsp;&laquo;&nbsp; </span>
              {entry.position}
            </h4>
            <h5 className="block col-span-6 font-mono tracking-wide text-sm text-cyan-500">
              <span className="font-semibold text-orange-500">{entry.details.dateRange.start[0]}</span>/<span className="font-semibold text-orange-500">{entry.details.dateRange.start[1]}</span>
              &nbsp;&raquo;&nbsp;
              <span className="font-semibold text-orange-500">{entry.details.dateRange.end[0]}</span>/<span className="font-semibold text-orange-500">{entry.details.dateRange.end[1]}</span>
              &nbsp;&middot;&nbsp;
              <span className="font-semibold text-orange-500">{entry.details.location}</span> ({entry.details.type})
            </h5>
            <div className="col-span-6 text-sm space-y-3">
              {entry.bodyHTML ? parse(entry.bodyHTML) : entry.body}
            </div>
            <div className="col-span-6 mt-2 mb-1 font-mono text-xs text-orange-500">
              {entry.keywords.map(keyword => (
                <span className="inline-block bg-orange-100 rounded-lg mr-2 mb-1 px-2 py-1 whitespace-nowrap" key={entry.company + '' + keyword}>{keyword}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
