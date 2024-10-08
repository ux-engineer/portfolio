import { skills } from '../assets/data.json';

export default function CVSkills() {
  return (
    <section id="CVSkills" className="grid grid-cols-10 gap-4 mt-10">
      <div className="col-span-1 flex flex-col">
        <h3 className="flex-1 text-4xl font-extralight tracking-widest text-cyan-600">
          <span className="mt-5 writing-mode-vertical transform rotate-180 uppercase whitespace-nowrap">
            {skills.sectionTitle}
          </span>
        </h3>
      </div>
      <div className="col-span-9">
        {skills.content.map(topicset => (
          <div key={topicset.topicTitle} className="bg-orange-50 rounded-lg px-5 mb-3">
            <span  className="inline-block my-5 text-cyan-500 uppercase text-base font-semibold tracking-widest">{topicset.topicTitle}</span>
            {topicset.content.map(skillset => (
              <p key={skillset.title} className="pb-3">
                <span className="pr-3 text-cyan-500 uppercase text-sm font-light">{skillset.title}</span>
                { skillset.data &&
                <span className="text-xs tracking-wider">
                  {skillset.data[0].map(skill => (
                    <span key={skillset+'-'+skill} className="inline-block font-semibold text-orange-600 bg-orange-100 rounded-lg mr-2 mb-1 py-1 px-2">{skill}</span>
                  ))}
                  {skillset.data[1].map(skill => (
                    <span key={skillset+'-'+skill} className="inline-block text-orange-500 bg-orange-100 rounded-lg mr-2 mb-1 px-2 py-1">{skill}</span>
                  ))}
                  {skillset.data[2].map(skill => (
                    <span key={skillset+'-'+skill} className="inline-block font-light text-orange-400 bg-orange-100 rounded-lg mr-2 mb-1 px-2 py-1">{skill}</span>
                  ))}
                </span>
                }
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
