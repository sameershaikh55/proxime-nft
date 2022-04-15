import React from "react";
import $ from "jquery";

import HeroSm from "../../components/HeroSm/HeroSm";
import Section from "../../components/Section/Section";
import MainLayout from "../../layouts/MainLayout";

const FAQs = () => {
  const toggleAnswer = (e) => {
    let $this = $(e.currentTarget);

    $this
      .siblings(".answer")
      .slideToggle()
      .parents(".faq-item")
      .toggleClass("active");
  };

  return (
    <MainLayout>
      <HeroSm title="FAQs" />

      <Section id="faqs">
        <div className="faqs-wrap">
          {[
            {
              id: "faq-item-1",
              question:
                "There are many variations of passages of Lpsum, you need to be sure there isn’t anything.",
              answer:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, euismod tincidunt ut laoreet dolore There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
            },
            {
              id: "faq-item-2",
              question:
                "There are many variations of passages of Lpsum, you need to be sure there isn’t anything.",
              answer:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, euismod tincidunt ut laoreet dolore There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
            },
            {
              id: "faq-item-3",
              question:
                "There are many variations of passages of Lpsum, you need to be sure there isn’t anything.",
              answer:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, euismod tincidunt ut laoreet dolore There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
            },
            {
              id: "faq-item-4",
              question:
                "There are many variations of passages of Lpsum, you need to be sure there isn’t anything.",
              answer:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, euismod tincidunt ut laoreet dolore There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
            },
            {
              id: "faq-item-5",
              question:
                "There are many variations of passages of Lpsum, you need to be sure there isn’t anything.",
              answer:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, euismod tincidunt ut laoreet dolore There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
            },
          ].map((el) => {
            const { id, question, answer } = el;

            return (
              <div className="faq-item" key={id}>
                <div className="question" onClick={toggleAnswer}>
                  {question}
                </div>
                <div className="answer">{answer}</div>
              </div>
            );
          })}
        </div>
      </Section>
    </MainLayout>
  );
};

export default FAQs;
