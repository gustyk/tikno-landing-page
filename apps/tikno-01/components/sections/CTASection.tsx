'use client';

import { Container, Section, Heading, Text, Button } from '@tikno/ui';

export function CTASection() {
  return (
    <Section background="gradient">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heading size="xl" align="center" className="mb-4">
            Ready to Get Started?
          </Heading>
          <Text size="lg" color="muted" align="center" className="mb-10 max-w-2xl mx-auto">
            Join thousands of happy customers. Start building your landing page today.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-lg shadow-accent-200">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Talk to Sales
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
