import {
  Meta,
  Schema,
  Column,
  Heading,
  Media,
  Text,
  Row,
} from "@once-ui-system/core";

import { baseURL, about, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Engineering Beyond the Interface",
    description:
      "A perspective on frontend architecture, engineering leadership, performance, AI-assisted development, and building scalable software systems.",
    baseURL,
    path: `${work.path}/engineering-beyond-the-interface`,
    image: "/images/projects/project-01/cover-01.jpg",
  });
}

const post = {
  title: "Engineering Beyond the Interface",
  publishedAt: "2026-06-14",
  summary:
    "Thoughts on building scalable frontend systems, balancing business needs with technical excellence, and the principles that shape my approach to software engineering.",
  images: [
    "/images/projects/project-01/cover-01.jpg",
    "/images/projects/project-01/cover-02.jpg",
  ],
  team: [
    {
      name: "Love Dhimaan",
      role: "Senior Frontend Engineer",
      avatar: "/images/avatar.jpg",
      linkedIn: "https://www.linkedin.com/in/thelovedhimaan/",
    },
  ],
};

export default function WorkPage() {
  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">

      {/* SEO */}
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/engineering-beyond-the-interface`}
        title="Engineering Beyond the Interface"
        description="A perspective on frontend architecture, engineering leadership, performance, AI-assisted development, and building scalable software systems."
        datePublished="2026-06-14"
        dateModified="2026-06-14"
        image="/images/projects/project-01/cover-01.jpg"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* TITLE */}
      <Column maxWidth="s" gap="m" horizontal="center" align="center">
        <Heading variant="display-strong-m">
          Engineering Beyond the Interface
        </Heading>

        <Text onBackground="neutral-weak">
          Building scalable systems, leading engineering teams, and making
          technology decisions that create lasting product impact.
        </Text>
      </Column>

      <Row
  gap="m"
  fillWidth
  horizontal="center"
  s={{ direction: "column" }}
>
  {post.images.map((src, i) => (
    <Column gap="m" key={i}>
      <Media
        key={i}
        priority={i === 0}
        aspectRatio="16 / 9"
        radius="m"
        alt={`project image ${i + 1}`}
        src={src}
        style={{
          maxHeight: "200px",
          objectFit: "cover",
        }}
      />
    </Column>
  ))}
</Row>

      {/* CONTENT */}
      <Column as="article" maxWidth="xs" gap="l">

        <Heading variant="heading-strong-l">
          Engineering Is More Than Code
        </Heading>

        <Text onBackground="neutral-weak">
          Over the years, I've realized that engineering is about much more
          than writing code or building interfaces. The real challenge is
          understanding the problem, identifying the right constraints, and
          making decisions that continue to work as products, teams, and
          customers grow.
        </Text>

        <Text onBackground="neutral-weak">
          My journey from frontend engineering to frontend architecture and
          engineering management has changed the way I approach technology.
          I still care deeply about implementation details, but I now think
          equally about architecture, people, delivery, quality, and business
          impact.
        </Text>

        <Heading variant="heading-strong-l">
          Architecture Should Enable, Not Complicate
        </Heading>

        <Text onBackground="neutral-weak">
          Good architecture is not about introducing more layers, patterns,
          or abstractions. It is about creating enough structure for a system
          to remain understandable and maintainable as it grows.
        </Text>

        <Text onBackground="neutral-weak">
          Working with enterprise applications has reinforced the importance
          of practical architecture. Large datasets, complex workflows,
          customer-specific requirements, integrations, and evolving product
          needs all require thoughtful technical decisions.
        </Text>

        <Heading variant="heading-strong-l">
          Performance Is a Product Feature
        </Heading>

        <Text onBackground="neutral-weak">
          Performance directly affects how users experience a product. When
          applications handle thousands or tens of thousands of records,
          rendering strategy and data flow become product concerns rather than
          purely technical details.
        </Text>

        <Text onBackground="neutral-weak">
          Techniques such as virtualization, code splitting, lazy loading,
          optimized API interactions, and efficient rendering can make the
          difference between an application that feels frustrating and one
          that feels effortless.
        </Text>

        <Heading variant="heading-strong-l">
          Building Systems That Scale With Teams
        </Heading>

        <Text onBackground="neutral-weak">
          Technical scalability and team scalability are closely connected.
          Reusable components, clear engineering standards, consistent
          workflows, and well-defined ownership allow teams to move faster
          without sacrificing quality.
        </Text>

        <Text onBackground="neutral-weak">
          As an engineering manager, I have learned that creating clarity is
          one of the most valuable things a technical leader can do. Clear
          ownership, realistic planning, effective communication, and strong
          engineering standards often have a greater impact than simply
          increasing development speed.
        </Text>

        <Heading variant="heading-strong-l">
          AI Is Changing How We Build Software
        </Heading>

        <Text onBackground="neutral-weak">
          AI-assisted development has become an important part of my
          engineering workflow. Tools such as Claude AI and GitHub Copilot
          can accelerate implementation, exploration, documentation, and
          repetitive engineering tasks.
        </Text>

        <Text onBackground="neutral-weak">
          The important shift is not simply using AI to generate code. It is
          building structured workflows around it — providing better context,
          defining standards, documenting expectations, reviewing generated
          output, and automating repetitive parts of the development process.
        </Text>

        <Heading variant="heading-strong-l">
          The Balance Between Speed and Quality
        </Heading>

        <Text onBackground="neutral-weak">
          Engineering rarely gives us perfect choices. Product requirements,
          customer expectations, deadlines, technical debt, and available
          resources constantly compete for attention.
        </Text>

        <Text onBackground="neutral-weak">
          The goal is not to eliminate trade-offs. It is to make those
          trade-offs consciously, understand their consequences, and choose
          solutions that provide the best balance between immediate delivery
          and long-term sustainability.
        </Text>

        <Heading variant="heading-strong-l">
          Key Principles
        </Heading>

        <Column gap="8">

          <Text onBackground="neutral-weak">
            <strong>Build for People:</strong> Every technical decision
            ultimately affects users and teams.
          </Text>

          <Text onBackground="neutral-weak">
            <strong>Think Long-Term:</strong> Quick wins are valuable, but
            sustainable architecture creates lasting impact.
          </Text>

          <Text onBackground="neutral-weak">
            <strong>Performance Is a Feature:</strong> Fast, responsive
            applications improve trust and user experience.
          </Text>

          <Text onBackground="neutral-weak">
            <strong>Consistency Enables Scale:</strong> Reusable patterns
            allow teams to move quickly and maintain quality.
          </Text>

          <Text onBackground="neutral-weak">
            <strong>Stay Curious:</strong> Continuous learning drives
            innovation.
          </Text>

        </Column>

        <Heading variant="heading-strong-l">
          Beyond the Interface
        </Heading>

        <Text onBackground="neutral-weak">
          Frontend engineering gave me a strong foundation in building
          products. Architecture taught me to think about systems. Engineering
          leadership has taught me to think about people, execution, and
          impact.
        </Text>

        <Text onBackground="neutral-weak">
          Today, I see engineering as the intersection of technology, people,
          and product. Great software is not defined only by how it looks or
          how elegantly it is coded. It is defined by how effectively it solves
          problems, scales with the organization, and continues to create value
          over time.
        </Text>

      </Column>
    </Column>
  );
}