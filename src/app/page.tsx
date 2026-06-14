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
    <Column maxWidth="m" gap="m" horizontal="center" paddingY="xs">
      {/* SEO */}
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
      <RevealFx translateY={10} delay={0.1}>
        <Column fillWidth horizontal="center" gap="m" align="center">
          
          {/* BADGES */}
          <Row gap="xs" wrap horizontal="center">
            <Badge>Frontend Engineer</Badge>
            <Badge>React / Next.js</Badge>
            <Badge>AI + SaaS</Badge>
          </Row>

          {/* HEADLINE */}
          <Heading
            variant="display-strong-l"
            wrap="balance"
            style={{
              textAlign: "center",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Building scalable frontend systems & AI-powered SaaS products
          </Heading>

          {/* SUBTEXT */}
          <Text
            variant="heading-default-xl"
            wrap="balance"
            onBackground="neutral-weak"
            style={{
              textAlign: "center",
              maxWidth: "720px",
            }}
          >
            I work with React, Next.js and AI APIs to build high-performance web applications
            focused on scalability, UX, and production-grade architecture.
          </Text>

          {/* PROOF ROW */}
          <Row gap="m" wrap horizontal="center">
            <Text onBackground="neutral-weak">⚡ Performance UI</Text>
            <Text onBackground="neutral-weak">🧠 AI integrations</Text>
            <Text onBackground="neutral-weak">🚀 SaaS systems</Text>
          </Row>

          {/* CTA */}
          <Row gap="s" wrap horizontal="center">
           <Button
  href={about.path}
  variant="secondary"
  size="l"
  style={{
    borderRadius: "999px",
    background: "white",
    color: "#111",
    padding: "6px 16px 6px 0px",
    border: "none",
    fontWeight: 600,
  }}
>
  <Row vertical="center" gap="8">
    <Avatar
      src={person.avatar}
      size="l"
      style={{
        border: "2px solid white",
      }}
    />
    <Text
      style={{
        fontWeight: 700,
        fontSize: "1.1rem",
      }}
    >
      About – Love Dhimaan
    </Text>
  </Row>
</Button>

            <Button
              href="/work"
              variant="secondary"
              size="l"
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

      {/* WHAT I DO */}
      <RevealFx translateY={12} delay={0.2}>
        <Column fillWidth gap="l">
          <Heading variant="heading-strong-l">What I do</Heading>

          <Row gap="m" wrap>
            <Column gap="xs" style={{ flex: "1 1 250px" }}>
              <Badge>Frontend</Badge>
              <Text onBackground="neutral-weak">
                Scalable React & Next.js apps with performance-first architecture.
              </Text>
            </Column>

            <Column gap="xs" style={{ flex: "1 1 250px" }}>
              <Badge>AI Integration</Badge>
              <Text onBackground="neutral-weak">
                LLM APIs, automation, and AI-powered SaaS features.
              </Text>
            </Column>

            <Column gap="xs" style={{ flex: "1 1 250px" }}>
              <Badge>System Design</Badge>
              <Text onBackground="neutral-weak">
                UI systems, state management, and scalable frontend architecture.
              </Text>
            </Column>
          </Row>
        </Column>
      </RevealFx>

      {/* FINAL CTA */}
      <RevealFx translateY={10} delay={0.25}>
        <Column fillWidth horizontal="center" gap="l">
          <Heading variant="heading-strong-l" style={{ textAlign: "center" }}>
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
            size="l"
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