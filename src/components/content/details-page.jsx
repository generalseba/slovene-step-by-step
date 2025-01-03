"use client";
import { useGSAP } from '@gsap/react';
import { RocketLaunchIcon, ChatBubbleLeftRightIcon, ArrowTrendingUpIcon, BookOpenIcon } from '@heroicons/react/20/solid'
import gsap, { ScrollTrigger } from 'gsap/all';
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);


export default function DetailsPageHero() {

    useGSAP(() => {

        const elements = ["#subtitle", "#title", "#text1", "#text2", "#point1", "#point2", "#point3", "#test3"];
        elements.forEach((element) => {
            gsap.from(element, {
                y: "50%",
                opacity: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: element,
                    start: "bottom bottom",
                    end: "top 50%",
                    scrub: true,
                }
            })

        })
        gsap.from("#image", {
            y: "50%",
            opacity: 0,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#text1",
                start: "bottom bottom",
                end: "top 20%",
                scrub: true,
            }
        })
    })

    const t = useTranslations("HomePage");

    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-0">
            {/* <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-500/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div> */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p id='subtitle' className="text-base/7 font-semibold text-custom-accent-l dark:text-custom-accent-d">{t("why-slovene-subtitle")}</p>
                            <h1 id='title' className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-custom-light-1 dark:text-custom-dark-1 sm:text-5xl">
                                {t("why-slovene-title")}
                            </h1>
                            <p id='text1' className="mt-6 text-xl/8 text-custom-light-2 dark:text-custom-dark-2">
                                {t("why-slovene-text1")}
                            </p>
                        </div>
                    </div>
                </div>
                <div id='image' className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src="https://placehold.co/300x200"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                    <h1 className="mt-6 text-xl/8 text-custom-light-3 dark:text-custom-dark-3">
                        Image of the app or product
                    </h1>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4 lg:block sm:flex sm:justify-center">
                        <div className="max-w-xl text-base/7 text-custom-light-3 dark:text-custom-dark-3 lg:max-w-lg">
                            <p id="text2">
                                {t("why-slovene-text2")}
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-custom-light-3 dark:text-custom-dark-3">
                                <li id='point1' className="flex gap-x-3">
                                    <RocketLaunchIcon aria-hidden="true" className="mt-1 size-5 flex-none text-custom-accent-l dark:text-custom-accent-d" />
                                    <span>
                                        <strong className="font-semibold text-custom-light-1 dark:text-custom-dark-1">{t("why-slovene-point1-strong")}</strong> {t("why-slovene-point1")}
                                    </span>
                                </li>
                                <li id='point2' className="flex gap-x-3">
                                    <ChatBubbleLeftRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-custom-accent-l dark:text-custom-accent-d" />
                                    <span>
                                        <strong className="font-semibold text-custom-light-1 dark:text-custom-dark-1">{t("why-slovene-point2-strong")}</strong> {t("why-slovene-point2")}
                                    </span>
                                </li>
                                <li id='point3' className="flex gap-x-3">
                                    <BookOpenIcon aria-hidden="true" className="mt-1 size-5 flex-none text-custom-accent-l dark:text-custom-accent-d" />
                                    <span>
                                        <strong className="font-semibold text-custom-light-1 dark:text-custom-dark-1">{t("why-slovene-point3-strong")}</strong> {t("why-slovene-point3")}
                                    </span>
                                </li>
                            </ul>
                            <p id='test3' className="mt-8">
                                {t("why-slovene-text3")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}