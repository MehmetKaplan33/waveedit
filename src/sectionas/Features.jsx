import React from "react";
import { Element } from "react-scroll";

const Features = () => {
  return (
    <section className="relative pt-32 pb-32 max-md:pt-28 max-md:pb-28">
      <Element name="features">
        <div className="container">
          <div className="relative z-2 text-center mb-24 max-md:mb-16">
            <div className="caption small-2 uppercase text-p3">
              Features
            </div>
            <h2 className="h3 text-p4 mb-6 max-md:mb-4">
              Simplify Your Video Editing Process
            </h2>
            <p className="body-1 max-w-xl mx-auto">
              Achieve professional quality videos in minutes with WaveEdit's powerful features.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex gap-6 feature-after max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:after:hidden"
              >
                <div className="feature-icon_container p-0.5 g5 rounded-2xl shadow-500 size-14 flex-none">
                  <div className="inner-before p-3 g4 rounded-2xl w-full h-full flex justify-center items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-p1 relative z-2"
                      dangerouslySetInnerHTML={{ __html: feature.icon }}
                    />
                  </div>
                </div>

                <div className="pt-2 max-lg:pt-0">
                  <div className="body-2 text-p4 mb-3">{feature.title}</div>
                  <p className="max-w-[270px] body-3 max-lg:max-w-none">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

const features = [
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />',
    title: "Automated Editing",
    description: "AI analyzes your videos and automatically selects and edits the best scenes together."
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />',
    title: "Audio Enhancement",
    description: "Reduce background noise, balance audio levels, and automatically enhance sound quality."
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.75 9h16.5m-16.5 6.75h16.5" />',
    title: "Smart Subtitles",
    description: "Automatically recognize speech and add subtitles in various languages to your videos."
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />',
    title: "Color Correction",
    description: "Enhance image quality with professional color gradations and pre-made filters."
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />',
    title: "Special Effects",
    description: "Library of hundreds of modern transitions and effects that can be applied with a single click."
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />',
    title: "Cloud Storage",
    description: "Securely store your projects in the cloud and access them from any device."
  }
];

export default Features;
