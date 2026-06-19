'use client';

import { Container, Section, Heading, Text, Card } from '@tikno/ui';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized for performance with Next.js. Experience near-instant page loads.',
    icon: '⚡',
  },
  {
    title: 'Mobile First',
    description: 'Responsive design that looks perfect on every device, from mobile to desktop.',
    icon: '📱',
  },
  {
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices to help your content rank higher in search results.',
    icon: '🎯',
  },
  {
    title: 'Easy Customization',
    description: 'Modular components make it easy to customize every aspect of your landing page.',
    icon: '🎨',
  },
  {
    title: 'Analytics Ready',
    description: 'Track user behavior and optimize conversions with built-in analytics support.',
    icon: '📊',
  },
  {
    title: 'Zero Configuration',
    description: 'Start building immediately with sensible defaults and zero configuration.',
    icon: '🚀',
  },
];

export function FeaturesSection() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-16">
          <Heading size="xl" align="center" className="mb-4">
            Why Choose Tikno
          </Heading>
          <Text size="lg" color="muted" align="center" className="max-w-2xl mx-auto">
            Everything you need to create beautiful, high-converting landing pages.
          </Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} variant="elevated" hoverable>
              <div className="text-4xl mb-4" role="img" aria-label={feature.title}>
                {feature.icon}
              </div>
              <Heading as="h3" size="sm" className="mb-2">
                {feature.title}
              </Heading>
              <Text size="sm" color="muted">
                {feature.description}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
