import React from "react";
import Button from "../components/Button";
import TextHeading from "../components/TextHeading";

const Darkweb = () => {
  return (
    <section class="news">
      <div className="py-20 -20 container mx-auto">
        <div className="h-28 flex flex-col items-center justify-center">
          <TextHeading text="Deep and Dark Web" />
        </div>
        <div className="flex flex-row justify-center">
          <Button
            text="Download PDF"
            downloadUrl="../../Test Web PDFS/Notes_220618_191338_196.pdf"
            downloadTitle="Dark Web Notes"
          />
        </div>
        <div class="flex flex-col items-start justify-between space-y-5 md:space-y-0 md:space-x-10 mt-10">
          <div class="w-full border px-5 md:px-10 py-8 rounded">
            <div>
              <h4 class="font-bold text-2xl">Deep web and dark web</h4>
              <p class="text-[16px] mt-1 mb-5">By Arovix</p>
            </div>
            <div class="text-[16px]">
              <p class="text-[16px] mt-1 mb-5 font-bold">
                When you think of the Deep Web, what comes to mind? Illegal
                activity? Phishing and scams? Bitcoins?
              </p>
              Well, you’d be kind of right…and kind of wrong. These are examples
              of things found in the Dark Web, a collection of websites that
              have hidden IP addresses and may require a specific software to
              access. The Dark Web is only a small fraction (0.01%) of the Deep
              Web, which contains Internet content that is not searchable by
              your standard search engines. In other words, if Google can’t find
              what you’re looking for, it’s probably still out there in the
              World Wide Web; it’s just in the harder-to-access Deep Web. (If
              Google can find it, then it’s on the Surface Web, which makes up
              about 0.03% of the Internet.)
              <br />
              <br />
              The Deep Web and the Dark Web have been conflated in public
              discourse. Most people don’t know that the Deep Web contains
              mostly benign sites, such as your password-protected email
              account, certain parts of paid subscription services like Netflix,
              and sites that can be accessed only through an online form. (Just
              imagine if someone could access your Gmail inbox by simply
              googling your name!) Also, the Deep Web is huge: back in 2001, it
              was estimated to be 400–550 times larger than the Surface Web, and
              it’s been growing exponentially since then. By comparison, the
              Dark Web is pretty small: Dark Web sites number only in the
              thousands. The websites in the Dark Web are characterized by their
              use of encryption software that makes their users and their
              locations anonymous. That’s why illegal activity is so common on
              the Dark Web: users can withhold their identity; the owners of
              illegal websites can hide their location; and data can be
              transferred anonymously. This means that the Dark Web is full of
              illegal drug and firearm transactions, pornography, and gambling.
              A notorious online black market called Silk Road was shut down by
              the FBI in 2013.
              <br />
              <br />
              But the Dark Web’s not completely dark. It’s also used by
              political whistle-blowers, activists, and journalists who may be
              censored or could risk political retaliation if discovered by
              their government. Most notably, the website WikiLeaks has its home
              on the Dark Web
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Darkweb;
