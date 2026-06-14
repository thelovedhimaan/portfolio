import { Meta, Schema, Column, Heading, Media, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";

const post = {
  title: "Engineering Beyond the Interface",
  publishedAt: "2026-06-14",
  summary:
    "Thoughts on building scalable frontend systems, balancing business needs with technical excellence, and the principles that shape my approach to software engineering.",
  images: [
    "/images/projects/project-01/cover-01.jpg",
    "/images/projects/project-01/cover-02.jpg",
    "/images/projects/project-01/cover-03.jpg",
    "/images/projects/project-01/cover-04.jpg",
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

export async function generateMetadata() {
  return Meta.generate({
    title: post.title,
    description: post.summary,
    baseURL,
    path: `${work.path}/engineering-beyond-the-interface`,
    image: post.images[0],
  });
}

export default function WorkPage() {
  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      {/* SEO */}
  
      {/* TITLE */}
      <Column maxWidth="s" gap="m" horizontal="center" align="center">
        <Heading variant="display-strong-m">{post.title}</Heading>
      </Column>

      {/* HERO IMAGES */}
      <Column gap="m">
        {post.images.map((src, i) => (
          <Media
            key={i}
            priority={i === 0}
            aspectRatio="16 / 9"
            radius="m"
            alt={`project image ${i + 1}`}
            src={src}
          />
        ))}
      </Column>

      {/* CONTENT */}
      <Column as="article" maxWidth="xs" gap="l">
        <Heading variant="heading-strong-l">Overview</Heading>
        <Text onBackground="neutral-weak">
          Over the years, I've realized that frontend engineering is about much
          more than building interfaces. It's about understanding problems
          deeply, making thoughtful trade-offs, and creating experiences that
          feel effortless for users while remaining sustainable for teams.
        </Text>

        <Text onBackground="neutral-weak">
          Working in fast-paced startup environments has taught me that the best
          solutions are often the simplest ones. Whether improving performance,
          scaling applications, or refining developer workflows, my focus has
          always been on building systems that stand the test of time.
        </Text>

        <Heading variant="heading-strong-l">Key Principles</Heading>
        <Text onBackground="neutral-weak">
          • Build for People: Every technical decision ultimately affects users and teams.{"\n"}
          • Think Long-Term: Quick wins are valuable, but sustainable architecture creates lasting impact.{"\n"}
          • Performance is a Feature: Fast, responsive applications improve trust and UX.{"\n"}
          • Consistency Enables Scale: Reusable patterns allow teams to move quickly.{"\n"}
          • Stay Curious: Continuous learning drives innovation.
        </Text>

        <Heading variant="heading-strong-l">Technologies and Interests</Heading>
        <Text onBackground="neutral-weak">
          Frontend Engineering, System Design, Performance Optimization,
          Developer Experience, Emerging AI tools and integrations.
        </Text>

        <Heading variant="heading-strong-l">Challenges and Learnings</Heading>
        <Text onBackground="neutral-weak">
          Engineering is rarely about perfect solutions. It is about balancing
          speed, scalability, and business constraints while making informed
          decisions. Communication, collaboration, and adaptability matter as
          much as technical skill.
        </Text>

        <Heading variant="heading-strong-l">Outcome</Heading>
        <Text onBackground="neutral-weak">
          I strive to build software that is reliable, intuitive, and designed
          with longevity in mind. Great engineering is defined by clarity,
          impact, and the ability to solve meaningful problems.
        </Text>
      </Column>
    </Column>
  );
}