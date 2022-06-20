import React from "react";
import Button from "../components/Button";
import TextHeading from "../components/TextHeading";

const Web = () => {
  return (
    <section class="news">
      <div className="py-20 -20 container mx-auto">
        <div className="h-28 flex flex-col items-center justify-center">
          <TextHeading text="Welcome to Web3.0 Course" />
        </div>
        <div className="flex flex-row justify-center">
          <Button
            text="Download PDF"
            downloadUrl="../../Test Web PDFS/Notes_220618_191340_994.pdf"
            downloadTitle="Web 3 Course"
          />
        </div>
        <div class="flex flex-col items-start justify-between space-y-5 md:space-y-0 md:space-x-10 mt-10">
          <div class="w-full border px-5 md:px-10 py-8 rounded">
            <div>
              <h4 class="font-bold text-2xl">Web 3.0</h4>
              <p class="text-[16px] mt-1 mb-5">By Arovix</p>
            </div>
            <div class="text-[16px]">
              <div class="mb-10">
                Web 3 (also known as Web 3.0[1][2][3] and sometimes stylized as
                web3)[4] is an idea for a new iteration of the World Wide Web
                based on blockchain technology, which incorporates concepts such
                as decentralization and token-based economics.[5] Some
                technologists and journalists have contrasted it with Web 2.0,
                wherein they say data and content are centralized in a small
                group of companies sometimes referred to as "Big Tech".[6] The
                term "Web3" was coined in 2014 by Ethereum co-founder Gavin
                Wood, and the idea gained interest in 2021 from cryptocurrency
                enthusiasts, large technology companies, and venture capital
                firms.[6][7] Some experts argue that Web3 will provide increased
                data security, scalability, and privacy for users and combat the
                influence of large technology companies.[8] Others have raised
                concerns about a decentralized web, citing the potential for low
                moderation and the proliferation of harmful content,[9] the
                centralization of wealth to a small group of investors and
                individuals, [10] or a loss of privacy due to more expansive
                data collection.[11] Others, such as Elon Musk and Jack Dorsey,
                have argued that Web3 only serves as a buzzword.[12][5][13]
              </div>
              <div class="mb-10">
                <div>
                  <h4 class="font-bold text-2xl">BackgroundEdit</h4>
                  <p class="text-[16px] mt-1 mb-5">
                    Main articles: History of the World Wide Web and Web 2.0
                  </p>
                </div>
                Web 1.0 and Web 2.0 refer to eras in the history of the World
                Wide Web as it evolved through various technologies and formats.
                Web 1.0 refers roughly to the period from 1991 to 2004, where
                most sites consisted of static pages, and the vast majority of
                users were consumers, not producers, of content.[14][15] Web 2.0
                is based around the idea of "the web as platform"[16] and
                centers on user-created content uploaded to forums, social media
                and networking services, blogs, and wikis, among other
                services.[17] Web 2.0 is generally considered to have begun
                around 2004 and continues to the current day.[16][18][6]
              </div>
              <div class="mb-10">
                <div className="mb-5 block">
                  <h4 class="font-bold text-2xl">TerminologyEdit</h4>
                </div>
                Web3 is distinct from Tim Berners-Lee's 1999 concept for a
                semantic web.[19] In 2006, Berners-Lee described the semantic
                web as a component of Web 3.0, which is different from the
                meaning of Web3 in blockchain contexts.[20] The term "Web3" was
                coined by Polkadot founder and Ethereum co-founder Gavin Wood in
                2014, referring to a "decentralized online ecosystem based on
                blockchain."[1] In 2021, the idea of Web3 gained popularity.[21]
                Particular interest spiked toward the end of 2021, largely due
                to interest from cryptocurrency enthusiasts and investments from
                high-profile technologists and companies.[6][7] Executives from
                venture capital firm Andreessen Horowitz traveled to Washington,
                D.C. in October 2021 to lobby for the idea as a potential
                solution to questions about regulation of the web, with which
                policymakers have been grappling.[22] Some writers referring to
                the decentralized concept usually known as "Web3" have used the
                term "Web 3.0", leading to some confusion between the two
                concepts.[2][3] Furthermore, some visions of Web3 also
                incorporate ideas relating to the semantic web.[9]
              </div>
              <div class="mb-10">
                <div className="mb-5 block">
                  <h4 class="font-bold text-2xl">ConceptEdit</h4>
                </div>
                Specific visions for Web3 differ, and the term has been
                described by Bloomberg as "hazy", but they revolve around the
                idea of decentralization and often incorporate blockchain
                technologies, such as various cryptocurrencies and non-fungible
                tokens (NFTs).[6] Bloomberg has described Web3 as an idea that
                "would build financial assets, in the form of tokens, into the
                inner workings of almost anything you do online".[24] Some
                visions are based around the concept of decentralized autonomous
                organizations (DAOs).[25] Decentralized finance (DeFi) is
                another key concept; in it, users exchange currency without bank
                or government involvement. [6] Self-sovereign identity allows
                users to identify themselves without relying on an
                authentication system such as OAuth, in which a trusted party
                has to be reached in order to assess identity.[26] Technology
                scholars have argued that Web3 would likely run in tandem with
                Web 2.0 sites, with Web 2.0 sites likely adopting Web3
                technologies in order to keep their services relevant.[27]
              </div>
              <div class="mb-10">
                <div className="mb-5 block">
                  <h4 class="font-bold text-2xl">ReceptionEdit</h4>
                </div>
                Technologists and journalists have described Web3 as a possible
                solution to concerns about the over-centralization of the web in
                a few "Big Tech" companies.[6][22] Some have expressed the
                notion that Web3 could improve data security, scalability, and
                privacy beyond what is currently possible with Web 2.0
                platforms.[23] Bloomberg states that skeptics say the idea "is a
                long way from proving its use beyond niche applications, many of
                them tools aimed at crypto traders".[24] The New York Times
                reported that several investors are betting $27 billion that
                Web3 "is the future of the internet".[28][29]
                <br />
                <br />
                Some Web 2.0 companies, including Reddit and Discord, have
                explored incorporating Web3 technologies into their
                platforms.[6][30] On November 8, 2021, CEO Jason Citron tweeted
                a screenshot suggesting Discord might be exploring integrating
                cryptocurrency wallets into their platform. Two days later, and
                after heavy user backlash,[30][31] Discord announced they had no
                plans to integrate such technologies and that it was an
                internal-only concept that had been developed in a company-wide
                hackathon.[31] <br />
                <br />
                Some legal scholars quoted by The Conversation have expressed
                concerns over the difficulty of regulating a decentralized web,
                which they reported might make it more difficult to prevent
                cybercrime, online harassment, hate speech, and the
                dissemination of child abuse images.[9] But, the news website
                also states that, "[decentralized web] represents the
                cyber-libertarian views and hopes of the past that the internet
                can empower ordinary people by breaking down existing power
                structures". Some other critics of Web3 see the concept as a
                part of a cryptocurrency bubble, or as an extension of
                blockchain-based trends that they see as overhyped or harmful,
                particularly NFTs.[30] Some critics have raised concerns about
                the environmental impact of cryptocurrencies and NFTs.[7]
                Cryptocurrencies vary in efficiency, with proof of stake having
                been designed to be less energy intensive than the more widely
                used proof of work, although there is disagreement about how
                secure and decentralized this is in practice.[32][33][34][35]
                Others have expressed beliefs that Web3 and the associated
                technologies are a pyramid scheme.[7]
                <br />
                <br /> Jack Dorsey, co-founder and former CEO of Twitter,
                dismissed Web3 as a "venture capitalists' plaything".[5] Dorsey
                opined that Web3 will not democratize the internet, but it will
                shift power from players like Facebook to venture capital funds
                like Andreessen Horowitz.[10] On December 14, 2021, software
                engineer Molly White launched Web3 Is Going Just Great, a
                website that documents "prominent scams, schemes, and rug pulls"
                involving cryptocurrency and Web3.[36]
              </div>
              <div class="mb-10">
                <div className="mb-5 block">
                  <h4 class="font-bold text-2xl">BuzzwordEdit</h4>
                </div>
                Liam Proven, writing for The Register, concludes that Web3 is "a
                myth, a fairy story. It's what parents tell their kids about at
                night if they want them to grow up to become economists".[37]{" "}
                <br />
                <br /> In 2021, SpaceX and Tesla CEO, Elon Musk, expressed
                skepticism about Web3 in a tweet, saying that Web3 "seems more
                marketing buzzword than reality right now".[12] <br />
                <br />
                In November 2021 James Grimmelmann of Cornell University
                referred to Web3 as vaporware, calling it "a promised future
                internet that fixes all the things people don't like about the
                current internet, even when it's contradictory". Grimmelmann
                also argued that moving the internet toward a blockchain-focused
                infrastructure would centralize and cause more data collection
                compared to the current internet.[11]
                <br />
                <br />
                Software engineer Stephen Diehl described Web3 in a blog post as
                a "vapid marketing campaign that attempts to reframe the
                public’s negative associations of crypto assets into a false
                narrative about disruption of legacy tech company hegemony".[38]
              </div>
              <div class="mb-10">
                <div className="mb-5 block">
                  <h4 class="font-bold text-2xl">Not decentralizedEdit</h4>
                </div>
                Kevin Werbach, author of The Blockchain and the New Architecture
                of Trust,[39] has said that "many so-called 'Web 3.0' solutions
                are not as decentralized as they seem, while others have yet to
                show they are scalable, secure and accessible enough for the
                mass market", adding that this "may change, but it's not a given
                that all these limitations will be overcome".[40]
                <br />
                <br /> In early 2022, Moxie Marlinspike, creator of Signal,
                articulated how Web3 is not as decentralized as it appears to
                be, mainly due to consolidation in the cryptocurrency field,
                including in blockchain application programming interfaces which
                is currently mainly controlled by the companies Alchemy and
                Infura, cryptocurrency exchanges which is mainly dominated by
                Binance, Coinbase, MetaMask, and OpenSea, and the stablecoin
                market which is currently dominated by Tether. Marlinspike also
                remarked that the new web resembles the old web.[41] [42][43]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web;
