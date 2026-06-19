'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { LiveProjectButton } from '@/components/ui/LiveProjectButton';

const projects = [
  {
    num: '01',
    category: 'Klien',
    name: 'Nextlevel Studio',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    category: 'Pribadi',
    name: 'Aura Brand Identity',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'Klien',
    name: 'Solaris Digital',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

const totalCards = projects.length;

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh] relative" style={{ top: `${index * 28}px` }}>
      <div className="sticky top-24 md:top-32 h-fit">
        <motion.div
          style={{ scale }}
          className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-4 sm:mb-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="hero-heading font-black" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {project.num}
              </span>
              <div>
                <span className="text-[#D7E2EA]/60 text-sm uppercase tracking-widest">{project.category}</span>
                <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl">{project.name}</h3>
              </div>
            </div>
            <LiveProjectButton />
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
              <img
                src={project.col1Img1}
                alt={`${project.name} - gambar 1`}
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.col1Img2}
                alt={`${project.name} - gambar 2`}
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div className="w-[60%]">
              <img
                src={project.col2Img}
                alt={`${project.name} - gambar 3`}
                className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                style={{ height: 'clamp(300px, 40vw, 600px)' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Proyek
        </h2>
      </FadeIn>

      {projects.map((project, index) => (
        <ProjectCard key={project.num} project={project} index={index} />
      ))}
    </section>
  );
}
