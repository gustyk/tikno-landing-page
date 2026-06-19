'use client';

import { Container, Section, Heading, Text, Card, Button } from '@tikno/ui';

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    features: ['1 Landing Page', 'Basic Analytics', 'Email Support'],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$29',
    period: '/month',
    features: ['10 Landing Pages', 'Advanced Analytics', 'Priority Support', 'A/B Testing'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    features: ['Unlimited Pages', 'Custom Analytics', '24/7 Support', 'Custom Integrations', 'SLA'],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-16">
          <Heading size="xl" align="center" className="mb-4">
            Simple Pricing
          </Heading>
          <Text size="lg" color="muted" align="center" className="max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.popular ? 'elevated' : 'bordered'}
              className={`relative ${plan.popular ? 'scale-105 border-2 border-primary-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center pt-4">
                <Heading as="h3" size="sm" className="mb-4">
                  {plan.name}
                </Heading>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-gray-600 flex items-center gap-2">
                      <span className="text-primary-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
