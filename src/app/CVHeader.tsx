import { contact, profileLinks } from '../assets/data.json';

export default function CVHeader() {
  return (
    <section id="CVHeader" className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <figure id="Avatar">
        <img src="/images/avatar.jpeg" className="rounded-full" alt="Facial" />
      </figure>
      <div id="BasicInfo" className="col-span-2 md:col-span-3 pl-5">
        <h1 className='text-4xl font-light'>{contact.name}</h1>
        <h2 className='mt-2 text-lg md:text-2xl font-light text-cyan-600'>{contact.profession}</h2>
        <h3 className='my-3 text-base md:text-lg text-slate-600'>{contact.location}</h3>
        <a className='block pb-2 mr-5 text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline'
          href={profileLinks[0].url}
          target="_BLANK"
          rel="noreferrer">{contact.mainContact}</a>
        {/* <a className='block pb-2 mr-5 text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline' href={`mailto:${contact.email}`}>{contact.email}</a>
        <a className='block text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline' href={`tel:${contact.phone}`}>{contact.phone}</a> */}
      </div>
      <div id="ProfileLinks" className="flex flex-row lg:flex-col col-span-3 md:col-span-4 lg:col-span-2 -mx-3 mt-10 lg:mt-0">
        {profileLinks.map(profileLink => (
          <a className='block flex-auto px-1 text-center lg:text-left align-middle text-base md:text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline'
            href={profileLink.url}
            key={profileLink.title}
            target="_BLANK"
            rel="noreferrer"><img className='inline-block mr-2 mb-1' src={profileLink.img} width="30" aria-hidden="true" alt={`${profileLink.title} icon`} />{profileLink.title}</a>
        ))}
      </div>
    </section>
  );
}
