import { HoverEffect } from '../ui/card-hover-effect';

export function OurPromise() {
  return (
    <div className='container mx-auto px-8'>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: 'SyncMaster',
    description:
      'We build apps you can trust, ensuring seamless and secure synchronization across all your devices, keeping your data safe and accessible.',
    link: '#',
  },
  {
    title: 'HealthTrack',
    description:
      'We commit to delivering reliable and accurate health tracking solutions, empowering you to take control of your wellness with confidence.',
    link: '#',
  },
  {
    title: 'EduWave',
    description:
      'We provide innovative and trustworthy educational tools, making learning engaging and effective, and supporting your academic journey at every step.',
    link: '#',
  },
  {
    title: 'SecureVault',
    description:
      'We are dedicated to sustainability, developing apps that help you track and reduce your carbon footprint, fostering a greener future together.',
    link: '#',
  },
  {
    title: 'WorkFlowPro',
    description:
      'We are dedicated to sustainability, developing apps that help you track and reduce your carbon footprint, fostering a greener future together.',
    link: '#',
  },
  {
    title: 'GreenFootprint',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    link: '#',
  },
];
