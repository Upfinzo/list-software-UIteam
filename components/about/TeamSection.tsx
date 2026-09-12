import Container from "@/components/common/Container";

const teamMembers = [
  {
    name: "John Smith",
    role: "Founder & CEO",
  },
  {
    name: "Sarah Wilson",
    role: "Product Designer",
  },
  {
    name: "David Brown",
    role: "Technology Lead",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <h2 className="text-3xl font-bold text-gray-950">
          Our Team
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="mb-5 h-20 w-20 rounded-full bg-gray-200" />

              <h3 className="text-lg font-semibold">
                {member.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}