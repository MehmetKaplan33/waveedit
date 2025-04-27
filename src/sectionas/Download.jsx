import React, { useState } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";

const Download = () => {
  const [activePreview, setActivePreview] = useState("video");

  return (
    <section id="download" className="relative py-20 lg:py-32 overflow-hidden">
      <Element name="download">
        <div className="container relative">
          {/* Status Badge - Desktop & Tablet */}
          <div className="hidden sm:flex absolute lg:left-1/2 left-[75%] -translate-x-1/2 -top-4 sm:-top-3 items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white shadow-sm sm:shadow-lg border border-slate-200/50 backdrop-blur-sm">
            <div className="relative flex items-center justify-center w-1.5 sm:w-2">
              <span className="animate-ping absolute inline-flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-500"></span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-600 whitespace-nowrap">
              STABLE VERSION 2.0
            </span>
          </div>

          {/* Status Badge - Mobile */}
          <div className="sm:hidden flex items-center justify-center mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/50 shadow-sm">
              <div className="relative flex items-center justify-center w-1.5">
                <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
              </div>
              <span className="text-[10px] font-semibold text-slate-600">
                v2.0
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-16 lg:gap-24 max-lg:flex-col">
            <div className="flex-1 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Start Creating <br />
                <span className="bg-gradient-to-r from-p1 to-p2 bg-clip-text text-transparent">
                  Amazing Videos
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Experience professional video editing on any platform. Start
                creating amazing videos today with our powerful tools and
                intuitive interface.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                {/* Download Buttons */}
                <Button
                  className="download-button-primary group"
                  icon={`
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="group-hover:scale-110 transition-transform">
                      <path d="M22.368 12.753c-.028-3.113 2.575-4.617 2.694-4.688-1.469-2.121-3.755-2.413-4.565-2.444-1.94-.196-3.792 1.14-4.774 1.14-.987 0-2.504-1.113-4.12-1.084-2.119.033-4.074 1.227-5.162 3.12-2.205 3.784-.566 9.383 1.581 12.452 1.05 1.502 2.3 3.19 3.94 3.13 1.584-.063 2.18-1.013 4.094-1.013 1.913 0 2.453 1.013 4.127.982 1.706-.029 2.787-1.537 3.83-3" />
                    </svg>
                  `}
                  href="#"
                  containerClassName="flex-none hover:scale-105 transition-transform"
                >
                  <span className="flex flex-col">
                    <small className="text-xs opacity-80">Download for</small>
                    <span className="font-semibold">MacOS</span>
                  </span>
                </Button>
                <Button
                  className="download-button-secondary group"
                  icon={`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="group-hover:scale-110 transition-transform"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>`}
                  href="#"
                  containerClassName="flex-none hover:scale-105 transition-transform"
                >
                  <span className="flex flex-col">
                    <small className="text-xs opacity-80">Download for</small>
                    <span className="font-semibold">Windows</span>
                  </span>
                </Button>
              </div>

              {/* Platform Selection */}
              <div className="w-full mt-12">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6 flex-wrap">
                    <span className="text-sm font-medium text-slate-500">
                      Available on:
                    </span>
                    <div className="flex gap-6 flex-wrap">
                      {platforms.map((platform) => (
                        <div
                          key={platform.name}
                          className="group cursor-pointer"
                          onMouseEnter={() =>
                            setActivePreview(platform.name.toLowerCase())
                          }
                        >
                          <div className="platform-icon-container relative p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-p1/5 to-p2/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

                            <div
                              className="relative w-6 h-6 text-slate-400 group-hover:text-p1 transition-all duration-300"
                              viewBox="0 0 24 24"
                              dangerouslySetInnerHTML={{
                                __html: platform.icon,
                              }}
                            />
                          </div>
                          <span className="block text-xs text-center mt-2 font-medium text-slate-600">
                            {platform.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Section */}
            <div className="relative flex-1 max-w-lg w-full">
              <div
                className={`relative bg-s2 rounded-3xl overflow-hidden shadow-lg p-1 transition-all duration-500 ${
                  activePreview === "video"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-60"
                }`}
              >
                <div className="w-full rounded-2xl bg-s1 overflow-hidden">
                  <svg
                    viewBox="0 0 400 250"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                  >
                    <rect width="400" height="250" fill="#F8FAFC" />

                    {/* App Header */}
                    <rect y="0" width="400" height="40" fill="#F1F5F9" />
                    <circle cx="20" cy="20" r="6" fill="#EF4444" />
                    <circle cx="42" cy="20" r="6" fill="#F59E0B" />
                    <circle cx="64" cy="20" r="6" fill="#10B981" />
                    <rect
                      x="100"
                      y="16"
                      width="200"
                      height="8"
                      rx="4"
                      fill="#CBD5E1"
                    />

                    {/* Timeline */}
                    <rect y="40" width="400" height="30" fill="#F8FAFC" />
                    <rect
                      x="10"
                      y="45"
                      width="380"
                      height="20"
                      rx="2"
                      fill="#E2E8F0"
                    />
                    <rect
                      x="20"
                      y="50"
                      width="100"
                      height="10"
                      rx="2"
                      fill="#3B82F6"
                    />
                    <rect
                      x="130"
                      y="50"
                      width="80"
                      height="10"
                      rx="2"
                      fill="#60A5FA"
                    />
                    <rect
                      x="220"
                      y="50"
                      width="120"
                      height="10"
                      rx="2"
                      fill="#3B82F6"
                    />

                    {/* Video Preview */}
                    <rect
                      x="10"
                      y="80"
                      width="260"
                      height="160"
                      rx="4"
                      fill="#F1F5F9"
                    />
                    <path
                      d="M140 120L140 200L190 160L140 120Z"
                      fill="#3B82F6"
                    />
                    <circle
                      cx="140"
                      cy="160"
                      r="40"
                      fill="#3B82F6"
                      fillOpacity="0.2"
                    />

                    {/* Controls */}
                    <rect
                      x="280"
                      y="80"
                      width="110"
                      height="160"
                      rx="4"
                      fill="#F8FAFC"
                    />
                    <rect
                      x="290"
                      y="90"
                      width="90"
                      height="20"
                      rx="4"
                      fill="#E2E8F0"
                    />
                    <rect
                      x="290"
                      y="120"
                      width="90"
                      height="20"
                      rx="4"
                      fill="#E2E8F0"
                    />
                    <rect
                      x="290"
                      y="150"
                      width="90"
                      height="20"
                      rx="4"
                      fill="#E2E8F0"
                    />
                    <rect
                      x="290"
                      y="180"
                      width="90"
                      height="20"
                      rx="4"
                      fill="#E2E8F0"
                    />
                    <rect
                      x="290"
                      y="210"
                      width="90"
                      height="20"
                      rx="4"
                      fill="#E2E8F0"
                    />

                    {/* Effects */}
                    <rect
                      x="310"
                      y="95"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#3B82F6"
                    />
                    <rect
                      x="330"
                      y="95"
                      width="30"
                      height="10"
                      rx="2"
                      fill="#60A5FA"
                    />
                    <rect
                      x="310"
                      y="125"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#3B82F6"
                    />
                    <rect
                      x="330"
                      y="125"
                      width="30"
                      height="10"
                      rx="2"
                      fill="#60A5FA"
                    />
                    <rect
                      x="310"
                      y="155"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#3B82F6"
                    />
                    <rect
                      x="330"
                      y="155"
                      width="30"
                      height="10"
                      rx="2"
                      fill="#60A5FA"
                    />
                    <rect
                      x="310"
                      y="185"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#3B82F6"
                    />
                    <rect
                      x="330"
                      y="185"
                      width="30"
                      height="10"
                      rx="2"
                      fill="#60A5FA"
                    />
                    <rect
                      x="310"
                      y="215"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#3B82F6"
                    />
                    <rect
                      x="330"
                      y="215"
                      width="30"
                      height="10"
                      rx="2"
                      fill="#60A5FA"
                    />
                  </svg>
                </div>
                <div className="absolute top-2 left-2 right-2 h-1 bg-s3 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-p1 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -z-10 -top-10 -right-10 -bottom-10 -left-10 bg-gradient-to-tr from-p1/10 to-p2/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

const platforms = [
  {
    name: "Windows",
    icon: `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23 5v17H5V7.03a2.03 2.03 0 0 1 2.03-2.03H23Zm20 0a2.03 2.03 0 0 1 2.03 2.03V22H25V5h18ZM5 25h18v18H7.03A2.03 2.03 0 0 1 5 40.97V25Zm20 0h18v15.97a2.03 2.03 0 0 1-2.03 2.03H25V25Z"/></svg>`,
  },
  {
    name: "macOS",
    icon: `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M24.415 17.71c-.06-3.72 3.02-5.5 3.165-5.6-1.725-2.55-4.4-2.9-5.35-2.95-2.275-.225-4.45 1.33-5.6 1.33-1.162 0-2.95-1.3-4.85-1.27-2.5.04-4.81 1.45-6.09 3.68-2.6 4.47-.67 11.08 1.86 14.68 1.233 1.77 2.7 3.76 4.63 3.68 1.86-.08 2.55-1.2 4.8-1.2s2.87 1.2 4.83 1.16c2-.03 3.27-1.8 4.5-3.58 1.42-2.06 2-4.08 2.02-4.18-.04-.02-3.86-1.5-3.92-5.73zM21.49 5.74c1.07-1.29 1.79-3.09 1.6-4.89-1.54.06-3.41 1.02-4.51 2.29-1 1.15-1.88 2.97-1.64 4.7 1.74.13 3.54-.89 4.55-2.1z"/></svg>`,
  },
  {
    name: "iOS",
    icon: `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>ios</title><path d="M1.119 12.633v10.576h2.49v-10.576h-2.49zM11.882 10.768c2.553 0 4.193 2.040 4.193 5.232 0 3.217-1.64 5.257-4.193 5.257-2.578 0-4.206-2.040-4.206-5.257 0-3.192 1.627-5.232 4.206-5.232zM25.45 8.578c-3.129 0-5.357 1.727-5.357 4.293 0 2.040 1.264 3.317 3.918 3.93l1.865 0.451c1.815 0.413 2.553 1.014 2.553 2.053 0 1.202-1.214 2.053-2.941 2.053-1.765 0-3.092-0.864-3.229-2.19h-2.503c0.1 2.654 2.278 4.281 5.582 4.281 3.492 0 5.683-1.715 5.683-4.443 0-2.14-1.252-3.354-4.155-4.018l-1.665-0.376c-1.765-0.426-2.491-0.989-2.491-1.94 0-1.202 1.101-2.003 2.729-2.003 1.64 0 2.766 0.814 2.891 2.153h2.453c-0.063-2.528-2.153-4.243-5.332-4.243zM11.882 8.578c-4.205 0-6.834 2.866-6.834 7.422 0 4.594 2.628 7.447 6.834 7.447 4.181 0 6.821-2.854 6.821-7.447 0-4.556-2.641-7.422-6.822-7.422zM2.357 8.553c-0.007 0-0.016 0-0.024 0-0.747 0-1.352 0.605-1.352 1.352s0.605 1.352 1.352 1.352c0.009 0 0.017 0 0.026 0l-0.001 0c0.011 0 0.024 0.001 0.037 0.001 0.747 0 1.352-0.605 1.352-1.352s-0.605-1.352-1.352-1.352c-0.013 0-0.026 0-0.039 0.001l0.002-0z"></path></svg>`,
  },
  {
    name: "Android",
    icon: `<svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="b75708d097f2188dff6617b0f00f7c43"><path display="inline" d="M120.606,169h270.788v220.663c0,13.109-10.628,23.737-23.721,23.737h-27.123v67.203c0,17.066-13.612,30.897-30.415,30.897c-16.846,0-30.438-13.831-30.438-30.897v-67.203h-47.371v67.203c0,17.066-13.639,30.897-30.441,30.897c-16.799,0-30.437-13.831-30.437-30.897v-67.203h-27.099c-13.096,0-23.744-10.628-23.744-23.737V169z M67.541,167.199c-16.974,0-30.723,13.963-30.723,31.2v121.937c0,17.217,13.749,31.204,30.723,31.204c16.977,0,30.723-13.987,30.723-31.204V198.399C98.264,181.162,84.518,167.199,67.541,167.199z M391.395,146.764H120.606c3.342-38.578,28.367-71.776,64.392-90.998l-25.746-37.804c-3.472-5.098-2.162-12.054,2.946-15.525c5.102-3.471,12.044-2.151,15.533,2.943l28.061,41.232c15.558-5.38,32.446-8.469,50.208-8.469c17.783,0,34.672,3.089,50.229,8.476L334.29,5.395c3.446-5.108,10.41-6.428,15.512-2.957c5.108,3.471,6.418,10.427,2.946,15.525l-25.725,37.804C363.047,74.977,388.055,108.175,391.395,146.764z M213.865,94.345c0-8.273-6.699-14.983-14.969-14.983c-8.291,0-14.99,6.71-14.99,14.983c0,8.269,6.721,14.976,14.99,14.976S213.865,102.614,213.865,94.345z M329.992,94.345c0-8.273-6.722-14.983-14.99-14.983c-8.291,0-14.97,6.71-14.97,14.983c0,8.269,6.679,14.976,14.97,14.976C323.271,109.321,329.992,102.614,329.992,94.345z M444.48,167.156c-16.956,0-30.744,13.984-30.744,31.222v121.98c0,17.238,13.788,31.226,30.744,31.226c16.978,0,30.701-13.987,30.701-31.226v-121.98C475.182,181.14,461.458,167.156,444.48,167.156z"></path></g></svg>`,
  },
  {
    name: "Linux",
    icon: `<svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" d="M8.294 1c-.09 0-.184.005-.28.012-2.465.194-1.811 2.804-1.85 3.674-.043.637-.174 1.14-.612 1.762-.516.613-1.24 1.604-1.584 2.637-.162.485-.24.982-.167 1.452a.247.247 0 00-.064.079c-.152.156-.263.35-.387.49-.116.115-.283.155-.465.232-.183.08-.384.157-.504.397a.78.78 0 00-.077.351c0 .116.016.234.032.313.034.233.068.425.023.566-.145.396-.163.668-.062.865.102.195.313.275.549.351.472.117 1.114.079 1.618.35.54.272 1.088.39 1.526.274.307-.067.566-.27.705-.552.342-.001.717-.157 1.318-.194.408-.034.918.155 1.503.116.015.078.037.116.067.194l.001.002c.229.454.65.66 1.1.625.45-.035.928-.313 1.316-.762.368-.446.982-.632 1.387-.877.203-.116.367-.273.379-.497.013-.234-.117-.473-.417-.803v-.056l-.002-.002c-.099-.117-.145-.312-.197-.54-.05-.234-.106-.459-.287-.61h-.001c-.035-.032-.072-.04-.11-.08a.208.208 0 00-.11-.037c.25-.745.153-1.487-.102-2.154-.31-.823-.854-1.54-1.269-2.032-.464-.587-.919-1.142-.91-1.965.016-1.255.138-3.578-2.067-3.581zm.309 1.986h.007c.125 0 .231.036.34.116a.89.89 0 01.256.31c.062.152.093.268.097.423 0-.012.004-.023.004-.035v.061a.05.05 0 01-.003-.012l-.002-.014c-.001.142-.03.282-.087.412a.556.556 0 01-.125.195.415.415 0 00-.051-.024c-.06-.027-.115-.038-.166-.078a.765.765 0 00-.128-.038c.03-.035.085-.078.107-.116a.69.69 0 00.051-.234V3.94a.706.706 0 00-.035-.233c-.027-.079-.06-.117-.107-.195-.05-.038-.098-.077-.156-.077h-.01c-.054 0-.102.018-.152.077a.467.467 0 00-.12.195.688.688 0 00-.052.234v.01c0 .053.004.105.011.156-.112-.039-.255-.078-.354-.117a.954.954 0 01-.01-.117V3.86a1.034 1.034 0 01.087-.448.63.63 0 01.251-.31.575.575 0 01.347-.117zm-1.728.035h.02c.084 0 .158.028.234.078a.806.806 0 01.2.272c.053.116.082.233.09.389v.002a.856.856 0 01-.002.155v.047l-.048.014c-.089.032-.16.079-.23.117a.633.633 0 00.002-.156V3.93c-.007-.078-.023-.117-.047-.194a.358.358 0 00-.097-.156.145.145 0 00-.107-.037h-.012c-.042.003-.076.023-.109.077a.322.322 0 00-.07.157.55.55 0 00-.013.193v.008c.007.08.021.117.047.195a.363.363 0 00.096.157c.006.005.012.01.02.014-.04.033-.068.04-.102.079a.177.177 0 01-.077.04 1.53 1.53 0 01-.16-.235 1.034 1.034 0 01-.09-.389c-.01-.132.005-.264.046-.39a.834.834 0 01.165-.312c.075-.077.152-.116.244-.116zm.799.995c.194 0 .428.038.71.233.17.116.304.157.613.273h.002c.149.079.236.155.279.232v-.076a.333.333 0 01.009.274c-.072.18-.301.375-.62.491v.001c-.156.08-.292.195-.452.272-.161.078-.343.17-.59.155a.664.664 0 01-.262-.039 2.077 2.077 0 01-.188-.115c-.113-.079-.211-.194-.357-.271v-.003h-.003c-.233-.144-.359-.299-.4-.414-.04-.157-.003-.275.113-.35.13-.08.221-.159.282-.197.06-.043.083-.059.102-.076h.001v-.002c.099-.117.255-.274.49-.35.08-.021.171-.038.272-.038h-.001zm1.633 1.25c.21.826.698 2.026 1.012 2.609.167.311.5.967.643 1.764.091-.003.193.01.3.037.376-.975-.319-2.022-.636-2.314-.128-.116-.135-.195-.071-.195.344.312.796.917.96 1.608.075.312.093.644.012.974.039.017.079.035.12.04.601.311.824.547.717.896v-.025c-.035-.002-.07 0-.105 0h-.01c.089-.272-.106-.481-.62-.714-.534-.233-.96-.196-1.033.271-.005.025-.008.039-.01.079-.04.013-.082.03-.123.037-.25.157-.386.39-.462.693-.076.31-.1.674-.12 1.09v.002c-.011.195-.099.489-.186.787-.875.626-2.088.897-3.12.195a1.543 1.543 0 00-.234-.31.846.846 0 00-.16-.195.963.963 0 00.27-.04.359.359 0 00.184-.194c.063-.156 0-.407-.201-.678-.201-.273-.543-.58-1.043-.888-.368-.233-.575-.507-.671-.814-.096-.312-.083-.633-.009-.96.143-.624.51-1.23.743-1.611.063-.038.022.078-.238.568-.23.438-.665 1.456-.07 2.248.022-.578.15-1.146.377-1.678.329-.745 1.016-2.044 1.07-3.073.029.021.127.08.17.118.126.078.22.194.343.271a.694.694 0 00.511.196l.065.003c.24 0 .425-.078.581-.156.17-.078.304-.195.432-.233h.003c.272-.08.487-.235.609-.409zm1.275 5.225c.021.35.2.726.514.803.343.078.837-.194 1.045-.446l.123-.006c.184-.004.337.006.494.156l.002.002c.121.116.178.31.228.511.05.233.09.455.239.622.283.307.376.528.37.665l.003-.004v.01l-.002-.007c-.009.153-.108.231-.29.347-.368.234-1.02.416-1.434.916-.36.43-.8.665-1.188.695-.387.03-.721-.117-.918-.524l-.003-.002c-.122-.233-.07-.597.033-.985.103-.39.25-.784.27-1.107.022-.417.044-.779.114-1.058.07-.271.18-.465.374-.574l.026-.013v-.001zm-6.308.028h.006a.53.53 0 01.091.009c.22.032.412.194.597.438l.53.97.003.003c.141.31.44.62.693.955.253.348.45.66.425.915v.004c-.033.434-.28.67-.656.755-.376.079-.887 0-1.397-.27-.565-.314-1.235-.274-1.667-.352-.215-.039-.355-.117-.421-.233-.064-.117-.066-.352.071-.718v-.002l.002-.002c.068-.195.017-.439-.016-.652-.032-.234-.049-.414.025-.549.093-.194.23-.233.402-.31.172-.08.374-.118.534-.275h.001c.15-.157.26-.351.39-.49.11-.117.222-.196.387-.196zM8.45 5.226c-.254.117-.551.312-.868.312-.316 0-.566-.155-.747-.272-.09-.078-.163-.156-.217-.195-.096-.078-.084-.194-.044-.194.064.01.076.078.117.117.056.038.125.116.21.194.17.116.396.272.68.272.283 0 .615-.156.816-.272.114-.078.26-.194.378-.272.09-.08.087-.156.163-.156.074.01.02.078-.086.194-.13.098-.264.189-.403.273zm-.631-.923V4.29c-.004-.012.007-.024.017-.03.043-.024.105-.015.151.003.037 0 .094.04.088.079-.004.029-.05.038-.079.038-.032 0-.054-.025-.082-.04-.03-.01-.085-.004-.095-.037zm-.322 0c-.011.034-.066.028-.097.038-.027.015-.05.04-.081.04-.03 0-.076-.012-.08-.04-.005-.038.052-.077.088-.077.047-.018.107-.028.151-.003.011.005.021.017.018.029v.012h.001z"/></svg>`,
  },
];

export default Download;
