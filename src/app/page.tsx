import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Badge,
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
    <Column maxWidth="m" horizontal="center" paddingY="m">
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

      {/* HERO SECTION */}
      <RevealFx translateY={10} delay={0.1}>
        <Column
          fillWidth
          gap="16"
          style={{
            paddingTop: "0rem",
            paddingBottom: "3rem",
          }}
        >
          {/* Profile Lockup */}
          <Row vertical="center" gap="16">
            <Avatar size="l" src={person.avatar} />
            <Column gap="4">
              <Heading variant="heading-strong-s">{person.name}</Heading>
              <Row vertical="center" gap="8">
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--brand-solid-strong, #4ade80)",
                  }}
                />
                <Text onBackground="neutral-weak" variant="body-default-xs">
                  Open to Opportunities
                </Text>
              </Row>
            </Column>
          </Row>

          <Heading
            variant="display-strong-xl"
            wrap="balance"
            style={{
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "1500px",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            }}
          >
            Building scalable products, engineering teams and systems.
          </Heading>

          <Text
            variant="heading-default-l"
            wrap="balance"
            onBackground="neutral-weak"
            style={{
              maxWidth: "700px",
              lineHeight: 1.5,
              marginTop: "4px",
            }}
          >
            Engineering Manager and Frontend Architect with 5+ years of
            experience building enterprise SaaS products, leading engineering
            teams, and solving complex technical problems.
          </Text>

          {/* MORE INFO */}
          <Row gap="s" wrap style={{ marginTop: "8px", marginBottom: "8px" }}>
            <Badge>⚡ Performance & Scale</Badge>
            <Badge>👥 Engineering Leadership</Badge>
            <Badge>🤖 AI-Assisted Development</Badge>
          </Row>

          <Row gap="s" wrap>
            <Button
              href="/work"
              variant="primary"
              size="l"
              arrowIcon
              style={{ borderRadius: "8px", padding: "10px 24px" }}
            >
              View Work
            </Button>
            <Button
              href={about.path}
              variant="secondary"
              size="l"
              style={{ borderRadius: "8px", padding: "10px 24px" }}
            >
              About Me
            </Button>
          </Row>
        </Column>
      </RevealFx>

      {/* SPLIT SECTION */}
      <RevealFx translateY={12} delay={0.2}>
        <Column fillWidth gap="xl">
          {/* Subtle Divider */}
          <div
            style={{
              height: "1px",
              width: "100%",
              background: "rgba(255,255,255,0.1)",
              marginBottom: "16px",
            }}
          />

          <Row gap="xl" wrap>
            {/* LEFT COLUMN */}
            <Column gap="l" style={{ flex: "1 1 300px" }}>
              <Heading variant="heading-strong-xl">Capabilities</Heading>

              <Column gap="m">
                <Column gap="4">
                  <Heading variant="heading-strong-s">
                    Engineering Leadership
                  </Heading>
                  <Text onBackground="neutral-weak" style={{ lineHeight: 1.5 }}>
                    Lead a 17-member team across Frontend, Backend, Mobile, and
                    AI, driving planning, execution, and delivery.
                  </Text>
                </Column>

                <Column gap="4">
                  <Heading variant="heading-strong-s">
                    Frontend Architecture
                  </Heading>
                  <Text onBackground="neutral-weak" style={{ lineHeight: 1.5 }}>
                    Design scalable React and Next.js systems focusing on
                    performance, maintainability, and UX.
                  </Text>
                </Column>

                <Column gap="4">
                  <Heading variant="heading-strong-s">AI & Automation</Heading>
                  <Text onBackground="neutral-weak" style={{ lineHeight: 1.5 }}>
                    Build AI-assisted engineering workflows, backend services,
                    and AI-powered product features.
                  </Text>
                </Column>
              </Column>
            </Column>

            {/* RIGHT COLUMN */}
            <Column gap="l" style={{ flex: "1 1 300px" }}>
              <Heading variant="heading-strong-xl">By the Numbers</Heading>

              <Row gap="l" wrap>
                <Column gap="4" style={{ flex: "1 1 120px" }}>
                  <Heading variant="display-strong-s">17</Heading>
                  <Text onBackground="neutral-weak" variant="body-default-s">
                    Engineers Led
                  </Text>
                </Column>

                <Column gap="4" style={{ flex: "1 1 120px" }}>
                  <Heading variant="display-strong-s">45%</Heading>
                  <Text onBackground="neutral-weak" variant="body-default-s">
                    Performance Bump
                  </Text>
                </Column>

                <Column gap="4" style={{ flex: "1 1 120px" }}>
                  <Heading variant="display-strong-s">~60%</Heading>
                  <Text onBackground="neutral-weak" variant="body-default-s">
                    Faster Onboarding
                  </Text>
                </Column>

                <Column gap="4" style={{ flex: "1 1 120px" }}>
                  <Heading variant="display-strong-s">3x</Heading>
                  <Text onBackground="neutral-weak" variant="body-default-s">
                    AI Productivity
                  </Text>
                </Column>
              </Row>

              <Button
                href={`mailto:${person.email}`}
                variant="secondary"
                size="m"
                arrowIcon
                style={{
                  marginTop: "16px",
                  alignSelf: "flex-start",
                  borderRadius: "8px",
                }}
              >
                Let&apos;s get in touch
              </Button>
            </Column>
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}