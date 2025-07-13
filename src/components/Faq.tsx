"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Who is Our Faiths Forward for?",
    answer: "Anyone who wants to put faith into real-world action—no matter your background, tradition, or doubts. We welcome individuals, congregations, and communities of every kind.",
  },
  {
    question: "Can I use the toolkit in my own congregation or community group?",
    answer: "Absolutely! All resources are free to use, adapt, and share with your faith community, social group, or advocacy team.",
  },
  {
    question: "Do I need to belong to a specific religion?",
    answer: "No. Our Faiths Forward is intentionally interfaith and open to people of any (or no) tradition who care about justice, dignity, and inclusion.",
  },
  {
    question: "How can I share my story or an event our group organized?",
    answer: "We’d love to hear it! Use the contact form or email us. Your story might inspire and help others to act.",
  },
  {
    question: "Will you offer support if I have questions about using the toolkit?",
    answer: "We’ll do our best to help, but our capacity is limited. If you’d like to volunteer to support the toolkit or contribute your own resources, please fill out the contact form—we’d love your help!",
  },
];
