import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SpeakerImage from "../components/SpeakerImage"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      chenhuijing: file(
        relativePath: { eq: "speakers/featured/chen-hui-jing.jpg" }
      ) {
        ...profile
      }
      chewchoonkeat: file(
        relativePath: { eq: "speakers/featured/chew-choon-keat.jpg" }
      ) {
        ...profile
      }
      chinmaypendharkar: file(
        relativePath: { eq: "speakers/featured/chinmay-pendharkar.jpg" }
      ) {
        ...profile
      }
      eugenecheah: file(
        relativePath: { eq: "speakers/featured/eugene-cheah.jpg" }
      ) {
        ...profile
      }
      gaowei: file(relativePath: { eq: "speakers/featured/gao-wei.jpg" }) {
        ...profile
      }
      joyceng: file(relativePath: { eq: "speakers/featured/joyce-ng.png" }) {
        ...profile
      }
      julespoon: file(
        relativePath: { eq: "speakers/featured/jules-poon.jpg" }
      ) {
        ...profile
      }
      kenjin: file(relativePath: { eq: "speakers/featured/ken-jin.jpg" }) {
        ...profile
      }
      kennethytlim: file(
        relativePath: { eq: "speakers/featured/kenneth-y-t-lim.jpeg" }
      ) {
        ...profile
      }
      kennyshen: file(
        relativePath: { eq: "speakers/featured/kenny-shen.jpeg" }
      ) {
        ...profile
      }
      liaochoonway: file(
        relativePath: { eq: "speakers/featured/liao-choon-way.png" }
      ) {
        ...profile
      }
      muhammadhazwan: file(
        relativePath: { eq: "speakers/featured/muhammad-hazwan.jpg" }
      ) {
        ...profile
      }
      nguyenthienminhtuan: file(
        relativePath: { eq: "speakers/featured/nguyenthienminhtuan.jpeg" }
      ) {
        ...profile
      }
      nguyenducminhanh: file(
        relativePath: { eq: "speakers/featured/nguyenducminhanh.jpeg" }
      ) {
        ...profile
      }
      sampoder: file(relativePath: { eq: "speakers/featured/sam-poder.png" }) {
        ...profile
      }
      shiling: file(relativePath: { eq: "speakers/featured/shi-ling.jpg" }) {
        ...profile
      }
      simcherboon: file(
        relativePath: { eq: "speakers/featured/sim-cher-boon.png" }
      ) {
        ...profile
      }
      thomashuchede: file(
        relativePath: { eq: "speakers/featured/thomas-huchede.jpg" }
      ) {
        ...profile
      }
      uzynchua: file(relativePath: { eq: "speakers/featured/u-zyn-chua.jpg" }) {
        ...profile
      }
      wongmengweng: file(
        relativePath: { eq: "speakers/featured/wong-meng-weng.png" }
      ) {
        ...profile
      }
      wongwaituck: file(
        relativePath: { eq: "speakers/featured/wong-wai-tuck.png" }
      ) {
        ...profile
      }
      tenzhiyang: file(
        relativePath: { eq: "speakers/featured/ten-zhi-yang.png" }
      ) {
        ...profile
      }
    }
    fragment profile on File {
      childImageSharp {
        gatsbyImageData(height: 400, placeholder: BLURRED)
      }
    }
  `)

  return (
    <section className="section-speakers" id="speakers">
      <div className="contain">
        <div className="vessel cols">
          <div className="left">
            <h2>
              2022
              <br /> Speakers
            </h2>
          </div>
          <div className="right">
            <Grid>
              {speakers.map(({ name, target, imgId, position }) => (
                <SpeakerImage
                  name={name}
                  position={position}
                  image={data[imgId]?.childImageSharp}
                  target={target}
                />
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}

const speakers = [
  {
    name: "Chen Hui Jing",
    target: "chen-hui-jing",
    imgId: "chenhuijing",
    position: "Shopify",
    bio: "Chen Hui Jing is a self-taught designer and developer living in Singapore, with an inordinate love for CSS, as evidenced by her blog, that is mostly about CSS, and her tweets, which are largely about typography and the web. She used to play basketball full-time and launched her web career during downtime between training sessions. Hui Jing is currently a senior frontend developer with Shopify.",
    twitter: "hj_chen",
  },
  {
    name: "Chew Choon Keat",
    target: "chew-choon-keat",
    imgId: "chewchoonkeat",
    position: "Head of Engineering, Hobnob",
    bio: "Started the Singapore Ruby Brigade, worked at Slideshare, believes strongly in and contributes to open source. Now available in Elm.",
    twitter: "choonkeat",
  },
  {
    name: "Chinmay Pendharkar",
    target: "chinmay-pendharkar",
    imgId: "chinmaypendharkar",
    position: "CTO, Subnero",
    bio: "Chinmay's an engineer and a geek who loves everything audio, electronics, and technology. He makes [devices that communicate underwater](https://subnero.com/) during the day and on some Wednesday evenings he runs Singapore's hardware/electronics/IoT meetup, \"Hackware\". On weekends he can be found [making noise on the Web](https://chinmay.audio/talks/webaudio-geekcamp-2015/#/) or conjuring up [strange concotions](https://docs.google.com/presentation/d/1gRhL7TO00Fa94GTzKoip3zsf41qCkJilJB443lR1ePE/edit).",
    twitter: "ntt",
  },
  {
    name: "Gao Wei",
    target: "gao-wei",
    imgId: "gaowei",
    position: "Senior Engineer, BlackRock",
    bio: "",
    twitter: "wgao19",
  },
  {
    name: "Ng Rui Lin Joyce",
    target: "joyce-ng",
    imgId: "joyceng",
    position: "Chief Technical Officer, Hyan Technologies Pte. Ltd.",
    bio: "Electronics engineer interested in all things science and tech, and how our science and tech affects society and the way we live. Does a mix of software and hardware related topics",
    twitter: "quantumcatgirl",
  },
  {
    name: "Jules Poon",
    target: "jules-poon",
    imgId: "julespoon",
    position: "Hobbyist",
    bio: "- Enthusiast interested in Mathematics, Cybersecurity, and Programming Languages   - Part of [Social Engineering Experts](https://ctftime.org/team/151372), Singapore's top 1 cybersecurity competitive team and ranking 27th globally (as of Sept 2022), as one of two members who specialise in cryptography   - Helped organise local and international cybersecurity competitions (CTFSG 2022, [SEETF 2022](https://ctftime.org/event/1543/))- Was a software developer at CSIT for a year developing program analysis tooling ig- Errrrrr published [an artwork about crypto???](https://www.suzannezahr.com/fortheloveofmath/inverse-mt)- Likes origami and cute stuff",
    twitter: "",
  },
  {
    name: "Ken Jin",
    target: "ken-jin",
    imgId: "kenjin",
    position: "Contributor, CPython",
    bio: "I work on performance, typing, documentation and the interpreter internals in CPython.",
    twitter: "",
  },
  {
    name: "Kenneth Y T Lim",
    target: "kenneth-y-t-lim",
    imgId: "kennethytlim",
    position: "National Institute of Education",
    bio: "Kenneth Y T Lim has been thinking about the affordances for learning of virtual worlds and immersive environments since the mid-2000s. In 2015, Kenneth and his friends started introducing teachers to open-source hardware and software, in terms of using the Internet of Things as a means to help learners have more authentic understandings of their local environments. Kenneth is intrigued by the opportunities presented by current media interest in AR / VR in terms of engaging educators in informed conversations as to potential applications of these latter technologies in the learning sciences.",
    twitter: "thinkermaker",
  },
  {
    name: "Kenny Shen",
    target: "kenny-shen",
    imgId: "kennyshen",
    position: "Programmer, Genk Capital",
    bio: "",
    twitter: "",
  },
  {
    name: "Liao Choon Way",
    target: "liao-choon-way",
    imgId: "liaochoonway",
    position: "Inventor/Engineer, Independent",
    bio: "I dabble in the intersection between software and hardware, mathematics and physics. Bringing into existence that which has not existed before.Graduated [https://www.ntu.edu.sg/](NTU) Computer Engineering 1999. Went on to do software for military flight simulations, then went on to teach CATIA at a local polytechnic. Now unfettered.",
    twitter: "choonway",
  },
  {
    name: "Wong Meng Weng",
    target: "wong-meng-weng",
    imgId: "wongmengweng",
    position: "Principal Research Fellow, SMU YPHSOL",
    bio: "Meng is co-founder at Legalese.com and is principal researcher at SMU's School of Law where he works on L4, a domain-specific language for law.",
    twitter: "mengwong",
  },
  {
    name: "Muhammad Hazwan",
    target: "muhammad-hazwan",
    imgId: "muhammadhazwan",
    position: "Senior Cyber Security Researcher, Custodio Technologies",
    bio: "###Who is this fellow?+ Recovering former Public Servant/LEO/SOC Analyst+ Malding Security Researcher+ Wrangler of JSON/LOGS+ Hardware hacking Novice+ Go'er of Meetups and Conventions+ Holder of certs",
    twitter: "aelindgard",
  },
  {
    name: "Nguyen Duc Minh Anh",
    target: "nguyen-duc-minh-anh",
    imgId: "nguyenducminhanh",
    position: "",
    bio: "",
    twitter: "",
  },
  {
    name: "Nguyen Thien Minh Tuan",
    target: "nguyen-thien-minh-tuan",
    imgId: "nguyenthienminhtuan",
    position: "",
    bio: "",
    twitter: "",
  },
  {
    name: "Eugene Cheah",
    target: "eugene-cheah",
    imgId: "eugenecheah",
    position: "CTO, Uilicious",
    bio: "Builds UI test automation (http://uilicious.com) infrastructure and tools, web app development, and part of the GPUJS team (http://gpu.rocks)Hot-takes/Views are my own",
    twitter: "PicoCreator",
  },
  {
    name: "Sam Poder",
    target: "sam-poder",
    imgId: "sampoder",
    position: "Software Engineer, Hack Club",
    bio: "👋 G'day! I'm Sam, 17, from Australia & living in Singapore. I enjoy building random things for the web, experimenting with code and all things hackathons.",
    twitter: "sam_poder",
  },
  {
    name: "Shi Ling",
    target: "shi-ling",
    imgId: "shiling",
    position: "CEO, UIlicious",
    bio: "I'm Shi Ling, one of the creators of UIlicious. I've been coding since the golden era of JQuery. I really love to see software that is built well, so I talk about testing - a lot. I also enjoying mentoring junior devs, and would love to see more women in engineering in the future.",
    twitter: "taishiling",
  },
  {
    name: "Sim Cher Boon",
    target: "sim-cher-boon",
    imgId: "simcherboon",
    position: "Security Engineer, Grab",
    bio: "Just your average script kiddie",
    twitter: "cherboon",
  },
  {
    name: "Ten Zhi-Yang",
    target: "ten-zhi-yang",
    imgId: "tenzhiyang",
    position: "Software Developer, Shopify",
    bio: 'I strongly believe in the saying "We build the things we can buy, so that we have the skills to build the things we can\'t buy" - Adam Savage.\nA software developer transitioning from front end to full stack, I enjoy building small weekend projects. Code, Hardware, Carpentry, anything that tickles my fancy I will attempt. Many failures and a few successes, but most times, I will get something to talk about.',
    twitter: "tzyinc",
  },
  {
    name: "Thomas Huchedé",
    target: "thomas-huchede",
    imgId: "thomashuchede",
    position: "Consultant, Zenika",
    bio: "Thomas is a software consultant at Zenika. Developer for more than 7 years, he chose to specialize in front-end development to improve the state of current web applications in terms of performance and accessibility. ",
    twitter: "thuchede",
  },
  {
    name: "U-Zyn Chua",
    target: "u-zyn-chua",
    imgId: "uzynchua",
    position: "Co-Founder & CTO, Cake DeFi",
    bio: "U-Zyn Chua is the Co-Founder and CTO of Cake DeFi — Singapore-based online platform dedicated to providing easy access to DeFi services. U-Zyn has been dabbling with Bitcoin since 2010, involved in various technological aspects of blockchain for the past 12 years. He made global headlines as the designer and lead architect of the world's first central bank digital currency (CBDC) in The Bahamas. He's also actively involve open source blockchain projects, most notably DeFiChain.",
    twitter: "uzyn",
  },
  {
    name: "Wong Wai Tuck",
    target: "wong-wai-tuck",
    imgId: "wongwaituck",
    position: "Senior Penetration Tester",
    bio: "Wai Tuck is a Senior Penetration Tester working on improving privacy and security on the internet. He is broadly interested in deep technical research and scaling the process of finding security vulnerabilities in novel systems. He was previously a contributor to Nmap, most notably writing the first stable scanner for Sambacry (CVE-2017-7494). He holds a number of security certifications and accolades, including a Black Badge with the team CTFSG in DEFCON26. He is concurrently pursuing a PhD in Computer Science, researching on the weaknesses of artificial intelligence systems and devising new methods to make them more robust.",
    twitter: "waituckk",
  },
]
