import type { MetaFunction } from "@remix-run/node";
// import Hero from "./Hero";
// import Projects from "./Projects";
// import Testimonials from "./Testimonials";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import Skills from "./Skills";

export const meta: MetaFunction = () => {
  return [
    { title: "Malik Bagwala | Freelance Software Engineer" },
    {
      name: "description",
      content:
        "I help people and brands reach their business goals by designing & building customer-centric software products and interactive experiences",
    },
  ];
};

export const TestSection = () => {
  return (
    <div className="container grid grid-cols-3 gap-8">
      <img src="https://picsum.photos/600/600" alt="" />
      <img src="https://picsum.photos/600/601" alt="" />
      <img src="https://picsum.photos/600/602" alt="" />
      <img src="https://picsum.photos/600/604" alt="" />
      <img src="https://picsum.photos/600/606" alt="" />
      <img src="https://picsum.photos/600/609" alt="" />
      <img src="https://picsum.photos/600/610" alt="" />
      <img src="https://picsum.photos/600/611" alt="" />
      <img src="https://picsum.photos/600/612" alt="" />
      <img src="https://picsum.photos/600/613" alt="" />
    </div>
  );
};
export default function Index() {
  return (
    <>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        molestiae quidem veniam reiciendis, animi ipsam quis id ducimus ex fuga
        tempora blanditiis expedita sed provident deleniti eos. Nihil atque,
        molestias accusamus praesentium ipsam nobis cumque exercitationem earum
        rem culpa odit ullam omnis dignissimos tempore voluptatibus esse commodi
        modi, harum velit perspiciatis. Odit distinctio libero, eos vero magni
        repellat non reiciendis.
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        molestiae quidem veniam reiciendis, animi ipsam quis id ducimus ex fuga
        tempora blanditiis expedita sed provident deleniti eos. Nihil atque,
        molestias accusamus praesentium ipsam nobis cumque exercitationem earum
        rem culpa odit ullam omnis dignissimos tempore voluptatibus esse commodi
        modi, harum velit perspiciatis. Odit distinctio libero, eos vero magni
        repellat non reiciendis.
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        molestiae quidem veniam reiciendis, animi ipsam quis id ducimus ex fuga
        tempora blanditiis expedita sed provident deleniti eos. Nihil atque,
        molestias accusamus praesentium ipsam nobis cumque exercitationem earum
        rem culpa odit ullam omnis dignissimos tempore voluptatibus esse commodi
        modi, harum velit perspiciatis. Odit distinctio libero, eos vero magni
        repellat non reiciendis.
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        molestiae quidem veniam reiciendis, animi ipsam quis id ducimus ex fuga
        tempora blanditiis expedita sed provident deleniti eos. Nihil atque,
        molestias accusamus praesentium ipsam nobis cumque exercitationem earum
        rem culpa odit ullam omnis dignissimos tempore voluptatibus esse commodi
        modi, harum velit perspiciatis. Odit distinctio libero, eos vero magni
        repellat non reiciendis.
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        molestiae quidem veniam reiciendis, animi ipsam quis id ducimus ex fuga
        tempora blanditiis expedita sed provident deleniti eos. Nihil atque,
        molestias accusamus praesentium ipsam nobis cumque exercitationem earum
        rem culpa odit ullam omnis dignissimos tempore voluptatibus esse commodi
        modi, harum velit perspiciatis. Odit distinctio libero, eos vero magni
        repellat non reiciendis.
      </div>
      {/* <Hero />
      <Projects /> */}
      {/* <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
}
