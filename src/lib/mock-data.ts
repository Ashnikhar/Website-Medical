import type { BlogPost } from '@/lib/types';
import { Stethoscope, HeartPulse, Brain, Bone, Activity } from 'lucide-react';

// Using 'let' to allow in-memory modification for the demo CMS
export let blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: 'the-future-of-telemedicine',
        title: 'The Future of Telemedicine: Trends to Watch',
        author: 'Dr. Emily Carter',
        date: '2024-07-15',
        excerpt: 'Telemedicine has revolutionized healthcare access. Discover the emerging trends that will shape the future of virtual care, from AI diagnostics to remote patient monitoring.',
        content: '<p>The COVID-19 pandemic accelerated the adoption of telemedicine, but its growth is far from over. Virtual consultations are just the beginning. The future holds exciting possibilities, including AI-powered diagnostic tools that can assist doctors in making faster, more accurate diagnoses from afar. Furthermore, the expansion of remote patient monitoring (RPM) devices will allow for continuous tracking of chronic conditions, enabling proactive interventions and personalized care plans. As technology continues to evolve, telemedicine will become an even more integral part of our healthcare system, improving convenience, efficiency, and patient outcomes.</p><p>Another key area of development is the integration of mental health services into telemedicine platforms. The ability to connect with therapists and psychiatrists from the comfort of one\'s home is breaking down barriers to mental healthcare access. As these services become more sophisticated and secure, we can expect to see a significant positive impact on public health.</p>',
        imageUrl: '/image3.jpg',
        imageHint: 'telemedicine healthcare',
        views: 1258,
    },
    {
        id: 2,
        slug: 'understanding-your-heart-health',
        title: '5 Key Metrics for Understanding Your Heart Health',
        author: 'Dr. Ben Adams',
        date: '2024-06-28',
        excerpt: 'Taking control of your cardiovascular health starts with understanding the numbers. Learn about the five key metrics you should track for a healthy heart.',
        content: '<p>Proactive heart health management is crucial for a long and healthy life. By regularly monitoring a few key metrics, you can identify potential issues early and make informed lifestyle choices. The five most important metrics are: <strong>Blood Pressure</strong>, which measures the force of blood against your artery walls; <strong>Cholesterol Levels</strong> (including LDL, HDL, and triglycerides); <strong>Blood Sugar (Glucose)</strong>, a key indicator for diabetes risk; <strong>Body Mass Index (BMI)</strong>, which assesses weight in relation to height; and <strong>Resting Heart Rate</strong>. Understanding what these numbers mean and keeping them within a healthy range through diet, exercise, and, if necessary, medication, is one of the best investments you can make in your long-term well-being.</p>',
        imageUrl: '/image3.jpg',
       
        imageHint: 'heart health',
        views: 2349,
    },
    {
        id: 3,
        slug: 'ai-in-radiology',
        title: 'How AI is Transforming Radiology',
        author: 'Dr. Chloe Davis',
        date: '2024-06-10',
        excerpt: 'Artificial intelligence is no longer science fiction; it\'s a powerful tool in modern radiology. Explore how AI algorithms are enhancing image analysis and improving diagnostic accuracy.',
        content: '<p>Artificial intelligence (AI) is setting a new standard in the field of radiology. AI algorithms are being trained to read medical images like X-rays, CT scans, and MRIs with incredible speed and accuracy. These systems can identify subtle patterns that might be missed by the human eye, leading to earlier and more precise diagnoses of conditions like cancer and stroke. AI doesn\'t replace radiologists; it acts as a powerful assistant, automating repetitive tasks, prioritizing urgent cases, and providing a second opinion. This collaboration between human expertise and machine intelligence is leading to better patient outcomes and a more efficient healthcare system.</p>',
      
        imageUrl: '/image3.jpg',

        imageHint: 'AI radiology',
        views: 876,
    }
];
