import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";

import { home, about, person, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="l" paddingY="10" horizontal="center">

      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO */}
      <RevealFx translateY="10" delay={0.1}>
        <Column fillWidth horizontal="center" gap="m" align="center">

          {/* Badges */}
          <Row gap="8" wrap horizontal="center">
            <Badge>Frontend Engineer</Badge>
            <Badge>React / Next.js</Badge>
            <Badge>AI + SaaS</Badge>
          </Row>

          {/* Headline */}
          <Heading
            wrap="balance"
            variant="display-strong-l"
            style={{
              textAlign: "center",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "880px",
            }}
          >
            Building scalable frontend systems & AI-powered SaaS products
          </Heading>

          {/* Subline */}
          <Text
            wrap="balance"
            variant="heading-default-xl"
            onBackground="neutral-weak"
            style={{
              textAlign: "center",
              maxWidth: "720px",
            }}
          >
            I work with React, Next.js and AI APIs to build high-performance web applications
            focused on scalability, UX, and production-grade architecture.
          </Text>

          {/* Proof row (compact) */}
          <Row gap="12" wrap horizontal="center">
            <Text onBackground="neutral-weak">⚡ Performance UI</Text>
            <Text onBackground="neutral-weak">🧠 AI integrations</Text>
            <Text onBackground="neutral-weak">🚀 SaaS systems</Text>
          </Row>

          {/* CTA */}
          <Row gap="12" paddingTop="6" horizontal="center">
              
          <Button   href={about.path}
           src={person.avatar}
              variant="primary"
              size="xl"
              style={{
                borderRadius: "999px",
                padding: "12px 22px",
              }}
            >
             <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="l"
                  />
                )}
                {about.title}
              </Row>
            </Button>
            <Button
              href="/work"
              variant="secondary"
              size="xl"
              arrowIcon
              style={{
                borderRadius: "999px",
                padding: "12px 22px",
              }}
            >
              View Work
            </Button>

           

          </Row>

        </Column>
      </RevealFx>

      {/* WHAT I DO (tight section) */}
      <RevealFx translateY="12" delay={0.2}>
        <Column fillWidth gap="s" paddingTop="8">

          <Heading variant="heading-strong-l">
            What I do
          </Heading>

          <Row gap="12" wrap>

            <Column gap="xs" style={{ flex: 1 }}>
              <Badge>Frontend</Badge>
              <Text onBackground="neutral-weak">
                Scalable React & Next.js apps with performance-first architecture.
              </Text>
            </Column>

            <Column gap="xs" style={{ flex: 1 }}>
              <Badge>AI Integration</Badge>
              <Text onBackground="neutral-weak">
                LLM APIs, automation, and AI-powered SaaS features.
              </Text>
            </Column>

            <Column gap="xs" style={{ flex: 1 }}>
              <Badge>System Design</Badge>
              <Text onBackground="neutral-weak">
                UI systems, state management, and scalable frontend architecture.
              </Text>
            </Column>

          </Row>
        </Column>
      </RevealFx>

      {/* FINAL CTA */}
      <RevealFx translateY="10" delay={0.25}>
        <Column fillWidth horizontal="center" gap="s" paddingY="10">

          <Heading
            variant="heading-strong-l"
            style={{ textAlign: "center" }}
          >
            Let’s build something impactful
          </Heading>

          <Text
            onBackground="neutral-weak"
            style={{ textAlign: "center", maxWidth: "600px" }}
          >
            Open to frontend engineering and AI-focused SaaS roles.
          </Text>

          <Button
            href="mailto:your@email.com"
            variant="primary"
            size="xl"
            arrowIcon
            style={{
              borderRadius: "999px",
              padding: "12px 22px",
            }}
          >
            Contact
          </Button>

        </Column>
      </RevealFx>

    </Column>
  );
}