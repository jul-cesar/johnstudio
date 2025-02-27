import { GradientHeading } from "./ui/gradient-heading";
import { StarsBackground } from "./ui/stars-background";

const TeamSection = () => {
  const team = [
    {
      avatar:
        "https://ugc.production.linktr.ee/92c8406d-6d3d-4367-949f-2c73fffa2d74_WhatsApp-Image-2023-12-29-at-5.23.02-PM.jpeg?io=true&size=avatar-v3_0",
      name: "John S Rivero",
      title: "CEO, Director creativo Y Diseñador grafico",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg ",
      name: "Nicole Batista",
      title: "Community Manager",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Juan David Montes",
      title: "Productor audiovisual",
    },

    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D4E03AQGh3iMMHpvGTw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1725992842307?e=1746057600&v=beta&t=g2_WJYdXfHKJzQd0DwquVFl9EJIetXI93EdY-qa9Eg0",
      name: "Julio Cesar Martinez",
      title: "Desarrollador/Diseñador Web",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center  relative overflow-hidden md:space-x-8 space-x-3">
      <StarsBackground />
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <GradientHeading size="xl" variant={"perso"} weight={"thin"}>
              Conoce nuestro equipo
            </GradientHeading>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed my-4">
              Somos un grupo apasionado de profesionales dedicados a crear
              experiencias digitales excepcionales.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
              {team.map((item, idx) => (
                <li key={idx}>
                  <div className="size-32 mx-auto">
                    <img
                      src={item.avatar}
                      className="w-full h-full rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold sm:text-lg">{item.name}</h4>
                    <p className="font font-semibold">{item.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
