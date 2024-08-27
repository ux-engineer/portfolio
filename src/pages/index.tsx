import { Prompt } from 'next/font/google';

import CVHeader from '../app/CVHeader';
import CVIntro from '../app/CVIntro';
import CVYearsOfExperience from '../app/CVYearsOfExperience';
import CVProjects from '../app/CVProjects';
import CVSkills from '../app/CVSkills';
import CVFocus from '../app/CVFocus';
import CVEmployment from '../app/CVEmployment';
import CVEducation from '../app/CVEducation';
import CVHobbies from '../app/CVHobbies';

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  const copyYears = new Date().getFullYear() > 2024 ? '2024–' + new Date().getFullYear() : '2024';

  return (
    <div className={prompt.className}>
      <main className="md:container md:mx-auto mt-0 sm:mt-5 lg:mt-10 p-5 md:p-10 bg-white md:border-solid md:border-2 md:border-sky-200 shadow-2xl overflow-hidden">
        <CVHeader />
        <CVIntro />
        <CVYearsOfExperience />
        <CVProjects />
        <CVFocus />
        <CVEmployment />
        <CVEducation />
        <CVSkills />
        <CVHobbies />
      </main>
      <footer id="CopyFooter" className="pt-5 pb-7 text-center text-xs tracking-wider text-slate-500"><small>Copyright &copy; UX.Engineer, Janne Kurkinen ({copyYears})</small></footer>
      <div id="bg"></div>
    </div>
  );
}
