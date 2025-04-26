import React from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";

const About = () => {
  return (
    <section className="relative py-28 max-md:py-20">
      <Element name="about">
        <div className="container">
          <div className="relative z-2 text-center mx-auto max-w-3xl mb-16 max-md:mb-10">
            <div className="caption small-2 uppercase text-p3">
              Our Vision
            </div>
            <h2 className="h3 text-p4 mb-6 max-md:mb-4">
              Meet WaveEdit
            </h2>
            <p className="body-1 max-w-xl mx-auto">
              Founded in 2023, WaveEdit is an innovative platform that integrates AI technologies into video editing processes to simplify the lives of content creators.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {aboutCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-s2 rounded-2xl p-8 transition-all duration-300 hover:bg-s3 hover:shadow-lg"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center text-p1">
                  <svg 
                    className="w-14 h-14" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    dangerouslySetInnerHTML={{ __html: card.icon }}
                  />
                </div>
                <h3 className="h5 text-p3 mb-4">{card.title}</h3>
                <p className="body-3 text-p5/80">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button>Learn More</Button>
          </div>
        </div>
      </Element>
    </section>
  );
};

const aboutCards = [
  {
    icon: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />',
    title: "AI Technology",
    description: "Using the latest artificial intelligence technologies to transform your videos into professional-looking content in seconds."
  },
  {
    icon: '<path d="M12 6.253v13h-1.25v-13H12zm1.5 13v-13h1.25v13H13.5zm-11-13l.413 2.004.804 3.35.498 2.097.495 2.151.62 2.295.98 2.148.6 1.031.621 1.031c.405.566 1.105 1.031 1.705 1.031 1.391 0 2.5-1.099 2.5-2.489V4.407C7.174 4.173 6.318 4 5.5 4c-2.449 0-4 2.002-4 3.252zm15.211 7.003l-.785-2.05-1.035-2.324-1.342-2.403-.56-.882-.313-.452-.51-.628c-.4-.423-.876-.816-1.355-1.057-.485-.24-1.018-.36-1.561-.36-1.654 0-3 1.33-3 3v14c0 .55.49 1 1 1h2c.55 0 1-.45 1-1V8.911c.326.117.669.179 1.023.179.507 0 1.112-.151 1.657-.438.409-.213.816-.525 1.134-.854 1.21-1.262 1.937-2.711 2.212-3.794.272-1.08.082-1.952-.27-2.312-.353-.36-.966-.548-1.711-.462L19.5 2c1.555.2 2.5 1.963 2.5 3.951 0 .99-.199 2.239-.568 3.568-.31 1.168-.695 2.222-1.168 3.048l-.412.677c-.495.724-.996 1.222-1.521 1.524-.448.258-.914.393-1.419.393-.36 0-.701-.08-.972-.212V7.76c.376.256.75.427 1.116.56.407.148.914.249 1.422.246.508-.002.928-.13 1.232-.317.31-.187.547-.455.547-.798 0-.335-.218-.637-.595-.843-.391-.208-.956-.347-1.557-.362-.6-.015-1.178.104-1.61.342-.433.238-.718.565-.756.944L16.5 9.343V20.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-11-.049c.622-.371 1.077-.953 1.077-1.826v-.517c0-.53-.22-1.055-.647-1.455a2.356 2.356 0 00-.753-.563c-.225-.103-.474-.171-.736-.2-.262-.028-.536-.019-.804.03a3.42 3.42 0 00-.802.206 3.606 3.606 0 00-.731.371v-.043l.329-.345.477-.509.485-.539.383-.455.273-.339.193-.319.128-.32.064-.325.021-.345-.021-.361-.086-.396-.146-.412-.212-.413-.263-.375-.32-.334-.369-.264-.406-.175-.42-.066-.425.05-.408.132-.357.193-.266.216-.072.053.133-.534.234-.66.326-.67.343-.557a6.44 6.44 0 01.141-.164l.163-.169.246-.223.321-.25.396-.232.472-.161.536-.05.583.101.501.272zm4.789 5.848c0-.837-.38-1.704-1-2.426V14c0 .273-.063.529-.155.782-.091.252-.219.49-.37.703-.151.214-.33.407-.53.564-.199.156-.414.274-.637.356l-.049.015v-.021c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3.02c.914-.552 1.558-1.435 1.686-2.493.036-.295.03-.593-.008-.876z" />',
    title: "Professional Results",
    description: "Achieve professional results with automatic color correction, audio enhancement, and transition effects."
  },
  {
    icon: '<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" /><path d="M13 7h-2v6h6v-2h-4z" />',
    title: "Time Saving",
    description: "Complete editing tasks that would take hours in just minutes, allowing you to dedicate more time to creating content."
  },
];

export default About; 