import {
  Meta,
  Schema,
  Column,
  Heading,
  Media,
  Text,
} from "@once-ui-system/core";

import { baseURL, about, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Engineering Beyond the Interface",
    description:
      "Thoughts on building scalable frontend systems, balancing business needs with technical excellence.",
    baseURL,
    path: `${work.path}/engineering-beyond-the-interface`,
    image: "/images/projects/project-01/cover-01.jpg",
  });
}

export default function WorkPage() {
  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">

      {/* SEO */}
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/engineering-beyond-the-interface`}
        title="Engineering Beyond the Interface"
        description="Thoughts on building scalable frontend systems, balancing business needs with technical excellence."
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
      </Column>

      {/* HERO IMAGE */}
      <Media
        priority
        aspectRatio="16 / 9"
        radius="m"
        alt="project cover"
        src="/images/projects/project-01/cover-01.jpg"
      />

      {/* CONTENT (YOUR MDX CONVERTED TO JSX) */}
      <Column as="article" maxWidth="xs" gap="l">

        <Heading variant="heading-strong-l">Overview</Heading>
        <Text onBackground="neutral-weak">
          Over the years, I've realized that frontend engineering is about much more than building interfaces.
          It's about understanding problems deeply, making thoughtful trade-offs, and creating experiences that
          feel effortless for users while remaining sustainable for teams.
        </Text>

        <Text onBackground="neutral-weak">
          Working in fast-paced startup environments has taught me that the best solutions are often the simplest ones.
          My focus has always been on building systems that stand the test of time.
        </Text>

        <Heading variant="heading-strong-l">Key Principles</Heading>
        <Text onBackground="neutral-weak">
          • Build for People — Every technical decision affects users and teams.{"\n"}
          • Think Long-Term — Sustainable architecture creates lasting impact.{"\n"}
          • Performance is a Feature — Speed improves trust and UX.{"\n"}
          • Consistency Enables Scale — Reusable patterns help teams move fast.{"\n"}
          • Stay Curious — Continuous learning drives innovation.
        </Text>

        <Heading variant="heading-strong-l">Technologies and Interests</Heading>
        <Text onBackground="neutral-weak">
          Frontend Engineering, System Design, Performance Optimization, Developer Experience, AI Integration.
        </Text>

        <Heading variant="heading-strong-l">Challenges and Learnings</Heading>
        <Text onBackground="neutral-weak">
          Engineering is rarely about perfect solutions. It is about balancing speed, scalability, and business constraints
          while making informed decisions.
        </Text>

        <Heading variant="heading-strong-l">Outcome</Heading>
        <Text onBackground="neutral-weak">
          I strive to build reliable, intuitive systems with long-term impact. Great engineering is defined by clarity,
          impact, and meaningful problem solving.
        </Text>

      </Column>

    </Column>
  );
}