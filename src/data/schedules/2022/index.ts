import chenhuijing from './images/chen-hui-jing.jpg?h=400';
import chenhuijingWebp from './images/chen-hui-jing.jpg?h=400&webp';
import chewchoonkeat from './images/chew-choon-keat.jpg?h=400';
import chewchoonkeatWebp from './images/chew-choon-keat.jpg?h=400&webp';
import chinmaypendharkar from './images/chinmay-pendharkar.jpg?h=400';
import chinmaypendharkarWebp from './images/chinmay-pendharkar.jpg?h=400&webp';
import eugenecheah from './images/eugene-cheah.jpg?h=400';
import eugenecheahWebp from './images/eugene-cheah.jpg?h=400&webp';
import gaowei from './images/gao-wei.jpg?h=400';
import gaoweiWebp from './images/gao-wei.jpg?h=400&webp';
import joyceng from './images/joyce-ng.png?h=400';
import joycengWebp from './images/joyce-ng.png?h=400&webp';
import julespoon from './images/jules-poon.jpg?h=400';
import julespoonWebp from './images/jules-poon.jpg?h=400&webp';
import kenjin from './images/ken-jin.jpg?h=400';
import kenjinWebp from './images/ken-jin.jpg?h=400&webp';
import kennethytlim from './images/kenneth-y-t-lim.jpeg?h=400';
import kennethytlimWebp from './images/kenneth-y-t-lim.jpeg?h=400&webp';
import kennyshen from './images/kenny-shen.jpeg?h=400';
import kennyshenWebp from './images/kenny-shen.jpeg?h=400&webp';
import liaochoonway from './images/liao-choon-way.png?h=400';
import liaochoonwayWebp from './images/liao-choon-way.png?h=400&webp';
import muhammadhazwan from './images/muhammad-hazwan.jpg?h=400';
import muhammadhazwanWebp from './images/muhammad-hazwan.jpg?h=400&webp';
import nguyenthienminhtuan from './images/nguyenthienminhtuan.jpeg?h=400';
import nguyenthienminhtuanWebp from './images/nguyenthienminhtuan.jpeg?h=400&webp';
import nguyenducminhanh from './images/nguyenducminhanh.jpeg?h=400';
import nguyenducminhanhWebp from './images/nguyenducminhanh.jpeg?h=400&webp';
import sampoder from './images/sam-poder.png?h=400';
import sampoderWebp from './images/sam-poder.png?h=400&webp';
import shiling from './images/shi-ling.jpg?h=400';
import shilingWebp from './images/shi-ling.jpg?h=400&webp';
import simcherboon from './images/sim-cher-boon.png?h=400';
import simcherboonWebp from './images/sim-cher-boon.png?h=400&webp';
import thomashuchede from './images/thomas-huchede.jpg?h=400';
import thomashuchedeWebp from './images/thomas-huchede.jpg?h=400&webp';
import uzynchua from './images/u-zyn-chua.jpg?h=400';
import uzynchuaWebp from './images/u-zyn-chua.jpg?h=400&webp';
import wongmengweng from './images/wong-meng-weng.png?h=400';
import wongmengwengWebp from './images/wong-meng-weng.png?h=400&webp';
import wongwaituck from './images/wong-wai-tuck.png?h=400';
import wongwaituckWebp from './images/wong-wai-tuck.png?h=400&webp';
import tenzhiyang from './images/ten-zhi-yang.png?h=400';
import tenzhiyangWebp from './images/ten-zhi-yang.png?h=400&webp';
import { year } from '@src/data/date';

const schedule = {
  year,
  timeZone: 'Asia/Singapore',
  dates: [{
    date: '2022-10-29T00:00:00',
    timeZone: 'Asia/Singapore',
    talks: [
      {
        title: 'Opening',
        startTime: '2022-10-29T10:00:00+08:00',
        endTime: '2022-10-29T10:30:00+08:00',
        id: 'opening',
      },
      {
        title: 'The horizontal overflow problem',
        summary:
          "Have you ever visited a website on a phone only to find that when you want to scroll down, the entire page also sways from left to right due to some mysterious horizontal overflow? Unintended horizontal overscrolling is not a great experience. Let's break the problem down and also try to solve it.",
        startTime: '2022-10-29T10:30:00+08:00',
        endTime: '2022-10-29T11:15:00+08:00',
        track: '0',
        id: 'the-horizontal-overflow-problem',
        speakers: [
          {
            name: 'Chen Hui Jing',
            id: 'chen-hui-jing',
            imgUrl: { default: chenhuijing, webp: chenhuijingWebp },
            position: 'Shopify',
            bio: 'Chen Hui Jing is a self-taught designer and developer living in Singapore, with an inordinate love for CSS, as evidenced by her blog, that is mostly about CSS, and her tweets, which are largely about typography and the web. She used to play basketball full-time and launched her web career during downtime between training sessions. Hui Jing is currently a senior frontend developer with Shopify.',
            twitter: 'hj_chen',
          },
          {
            name: 'Gao Wei',
            id: 'gao-wei',
            imgUrl: { default: gaowei, webp: gaoweiWebp },
            position: 'Senior Engineer, BlackRock',
            bio: '',
            twitter: 'wgao19',
          },
        ],
      },
      {
        title: "Don't be shy - how to ask your senior devs for help",
        summary:
          'As a junior dev, have you ever wanted to ask your senior dev for help, but feel paiseh (Singlish for embarrassed)? My senior is so busy all the time... What if my question too bodoh (Singlish for stupid) and irritates my senior? Let me teach you the art of asking good questions.',
        startTime: '2022-10-29T10:30:00+08:00',
        endTime: '2022-10-29T11:15:00+08:00',
        track: '1',
        id: 'don-t-be-shy-how-to-ask-your-senior-devs-for-help',
        speakers: [
          {
            name: 'Shi Ling',
            id: 'shi-ling',
            imgUrl: { default: shiling, webp: shilingWebp },
            position: 'CEO, UIlicious',
            bio: "I'm Shi Ling, one of the creators of UIlicious. I've been coding since the golden era of JQuery. I really love to see software that is built well, so I talk about testing - a lot. I also enjoying mentoring junior devs, and would love to see more women in engineering in the future.",
            twitter: 'taishiling',
          },
        ],
      },
      {
        title:
          "Let's learn about the Life2Well Project without frying your brain",
        summary:
          'What might the collision of maker culture, data science, electroencephalograms, the Internet of Things, and climate science look like? In this session, we share a student-initiated project which explores this very intersection. Come join us and BYOCM (bring your own craft materials)!',
        startTime: '2022-10-29T11:15:00+08:00',
        endTime: '2022-10-29T12:00:00+08:00',
        track: '0',
        id: 'let-s-learn-about-the-life-well-project-without-frying-your-brain',
        speakers: [
          {
            name: 'Nguyen Duc Minh Anh',
            id: 'nguyen-duc-minh-anh',
            imgUrl: { default: nguyenducminhanh, webp: nguyenducminhanhWebp },
            position: '',
            bio: '',
            twitter: '',
          },
          {
            name: 'Nguyen Thien Minh Tuan',
            id: 'nguyen-thien-minh-tuan',
            imgUrl: { default: nguyenthienminhtuan, webp: nguyenthienminhtuanWebp },
            position: '',
            bio: '',
            twitter: '',
          },
          {
            name: 'Kenneth Y T Lim',
            id: 'kenneth-y-t-lim',
            imgUrl: { default: kennethytlim, webp: kennethytlimWebp },
            position: 'National Institute of Education',
            bio: 'Kenneth Y T Lim has been thinking about the affordances for learning of virtual worlds and immersive environments since the mid-2000s. In 2015, Kenneth and his friends started introducing teachers to open-source hardware and software, in terms of using the Internet of Things as a means to help learners have more authentic understandings of their local environments. Kenneth is intrigued by the opportunities presented by current media interest in AR / VR in terms of engaging educators in informed conversations as to potential applications of these latter technologies in the learning sciences.',
            twitter: 'thinkermaker',
          },
        ],
      },
      {
        title: "Rolling Your Own Cryptography: Why You Shouldn't",
        summary:
          "In 2019, a trivial flaw existed on Flickr that allowed user impersonation. It's one of many that come from flaws in the use of cryptography: And it's not the developer's fault; Crypto is fragile. This talk describes the wide contexts crypto is used (and attacked) and all that can go wrong.",
        startTime: '2022-10-29T11:15:00+08:00',
        endTime: '2022-10-29T12:00:00+08:00',
        track: '1',
        id: 'rolling-your-own-cryptography-why-you-shouldn-t',
        speakers: [
          {
            name: 'Jules Poon',
            id: 'jules-poon',
            imgUrl: { default: julespoon, webp: julespoonWebp },
            position: 'Hobbyist',
            bio: `- Enthusiast interested in Mathematics, Cybersecurity, and Programming Languages<br/>   - Part of <a href="https://ctftime.org/team/151372" rel="noreferrer noopener" target="_blank">Social Engineering Experts</a>, Singapore's top 1 cybersecurity competitive team and ranking 27th globally (as of Sept 2022), as one of two members who specialise in cryptography<br/>   - Helped organise local and international cybersecurity competitions (CTFSG 2022, <a href="https://ctftime.org/event/1543/" rel="noreferrer noopener" target="_blank">SEETF 2022</a>)<br/>- Was a software developer at CSIT for a year developing program analysis tooling ig<br/>- Errrrrr published <a href="https://www.suzannezahr.com/fortheloveofmath/inverse-mt" rel="noreferrer noopener" target="_blank">an artwork about crypto???</a><br/>- Likes origami and cute stuff`,
            twitter: '',
          },
        ],
      },
      {
        title: 'Better migrations in PostgreSQL using Squawk',
        summary:
          'Learn how Squawk can help improve your migrations and schema definitions in PostgreSQL. We will discuss the various rules that Squawk lints against and how they can lead to more resilient database design in PostgreSQL.',
        startTime: '2022-10-29T12:15:00+08:00',
        endTime: '2022-10-29T13:00:00+08:00',
        track: '0',
        id: 'better-migrations-in-postgresql-using-squawk',
        speakers: [
          {
            name: 'Kenny Shen',
            id: 'kenny-shen',
            imgUrl: { default: kennyshen, webp: kennyshenWebp },
            position: 'Programmer, Genk Capital',
            bio: '',
            twitter: '',
          },
        ],
      },
      {
        title: 'A Day in Cyber Security',
        summary:
          'In the past edition of Geekcamp.SG, I received a lot of queries on what it takes to start in CyberSecurity. This workshop is part presentation and part hands-on on some of the tasks the different roles that a Cyber Security Blue Teamer might carry out.',
        startTime: '2022-10-29T12:15:00+08:00',
        endTime: '2022-10-29T13:15:00+08:00',
        track: '1',
        id: 'a-day-in-cyber-security',
        speakers: [
          {
            name: 'Muhammad Hazwan',
            id: 'muhammad-hazwan',
            imgUrl: { default: muhammadhazwan, webp: muhammadhazwanWebp },
            position: 'Senior Cyber Security Researcher, Custodio Technologies',
            bio: "<b>Who is this fellow?</b><br/>+ Recovering former Public Servant/LEO/SOC Analyst<br/>+ Malding Security Researcher<br/>+ Wrangler of JSON/LOGS<br/>+ Hardware hacking Novice<br/>+ Go'er of Meetups and Conventions<br/>+ Holder of certs",
            twitter: 'aelindgard',
          },
        ],
      },
      {
        title: 'Parsing Differential Problem',
        summary:
          'As microservices have become popular in the current software engineering landscape, it is of increaseimportance to consider security risks arising from interactions between components within a system. We will explore the parsing differential problem, and discuss remedies with examples.',
        startTime: '2022-10-29T14:00:00+08:00',
        endTime: '2022-10-29T14:15:00+08:00',
        track: '0',
        id: 'parsing-differential-problem',
        speakers: [
          {
            name: 'Sim Cher Boon',
            id: 'sim-cher-boon',
            imgUrl: { default: simcherboon, webp: simcherboonWebp },
            position: 'Security Engineer, Grab',
            bio: 'Just your average script kiddie',
            twitter: 'cherboon',
          },
        ],
      },
      {
        title: 'Storage and Retrieval in databases from scratch',
        summary:
          "Based on content from Martin Kleppmann's Designing Data Intensive Applications, go under the hood of databases and simulate with code examples (in JS), how DBs read and write files: append-only, hash index, LSMTrees and B+Trees. Also will touch on Online Analysis Processing DB strategies",
        startTime: '2022-10-29T14:00:00+08:00',
        endTime: '2022-10-29T14:45:00+08:00',
        track: '1',
        id: 'storage-and-retrieval-in-databases-from-scratch',
        speakers: [
          {
            name: 'Zhi-Yang Ten',
            id: 'ten-zhi-yang',
            imgUrl: { default: tenzhiyang, webp: tenzhiyangWebp },
            position: 'Software Developer, Shopify',
            bio: 'I strongly believe in the saying "We build the things we can buy, so that we have the skills to build the things we can\'t buy" - Adam Savage.\nA software developer transitioning from front end to full stack, I enjoy building small weekend projects. Code, Hardware, Carpentry, anything that tickles my fancy I will attempt. Many failures and a few successes, but most times, I will get something to talk about.',
            twitter: 'tzyinc',
          },
        ],
      },
      {
        title: 'ChIPs - Polycube (Voxel) Construction Set',
        summary:
          "Have you wanted to use a construction set to build a model, but don't want to deal with complicated techniques to remove studs / build sideways? Not Square? Too many different types of bricks? Something you can freely 3D print cheaply? etc. Look no further, this is the construction set for you!",
        startTime: '2022-10-29T14:15:00+08:00',
        endTime: '2022-10-29T14:30:00+08:00',
        track: '0',
        id: 'chips-polycube-voxel-construction-set',
        speakers: [
          {
            name: 'Liao Choon Way',
            id: 'liao-choon-way',
            imgUrl: { default: liaochoonway, webp: liaochoonwayWebp },
            position: 'Inventor/Engineer, Independent',
            bio: 'I dabble in the intersection between software and hardware, mathematics and physics. Bringing into existence that which has not existed before. Graduated <a href="https://www.ntu.edu.sg/" rel="noreferrer noopener" target="_blank">NTU</a> Computer Engineering 1999. Went on to do software for military flight simulations, then went on to teach CATIA at a local polytechnic. Now unfettered.',
            twitter: 'choonway',
          },
        ],
      },
      {
        title: 'The Lord of the Monorepos: An efficient setup with pnpm and NX',
        summary:
          'One setup to rule all your repositories, One setup to find them, One setup to bring them all, and in the darkness bind them. On the laptop of the developer where the node_modules lie.',
        startTime: '2022-10-29T14:45:00+08:00',
        endTime: '2022-10-29T15:30:00+08:00',
        track: '0',
        id: 'the-lord-of-the-monorepos-an-efficient-setup-with-pnpm-and-nx',
        speakers: [
          {
            name: 'Thomas Huchedé',
            id: 'thomas-huchede',
            imgUrl: { default: thomashuchede, webp: thomashuchedeWebp },
            position: 'Consultant, Zenika',
            bio: 'Thomas is a software consultant at Zenika. Developer for more than 7 years, he chose to specialize in front-end development to improve the state of current web applications in terms of performance and accessibility. ',
            twitter: 'thuchede',
          },
        ],
      },
      {
        title:
          'Verifiable Computing Project - Building truly open source compute hardware',
        summary:
          'Processors are at the heart of our devices. As they become more integrated with other functions, what do we know about how they work? Do we trust their designers? We present a computer design with a FPGA RISC-V processor implementation, allowing for the underlying hardware to be inspected.',
        startTime: '2022-10-29T14:45:00+08:00',
        endTime: '2022-10-29T15:30:00+08:00',
        track: '1',
        id: 'verifiable-computing-project-building-truly-open-source-compute-hardware',
        speakers: [
          {
            name: 'Joyce Ng',
            id: 'joyce-ng',
            imgUrl: { default: joyceng, webp: joycengWebp },
            position: 'Chief Technical Officer, Hyan Technologies Pte. Ltd.',
            bio: 'Electronics engineer interested in all things science and tech, and how our science and tech affects society and the way we live. Does a mix of software and hardware related topics',
            twitter: 'quantumcatgirl',
          },
        ],
      },
      {
        title: 'The Unreasonable Effectiveness of Dumb Values',
        summary:
          'There are many ways to solve a problem, some better than others: copy from stackoverflow, use a popular library, callbacks, promises, goroutines, meta programming, queue, regexes… But there’s one dumb approach that keeps ending up as the better solution in surprisingly many situations: plain values.',
        startTime: '2022-10-29T15:45:00+08:00',
        endTime: '2022-10-29T16:00:00+08:00',
        track: '0',
        id: 'the-unreasonable-effectiveness-of-values',
        speakers: [
          {
            name: 'Chew Choon Keat',
            id: 'chew-choon-keat',
            imgUrl: { default: chewchoonkeat, webp: chewchoonkeatWebp },
            position: 'Head of Engineering, Hobnob',
            bio: 'Started the Singapore Ruby Brigade, worked at Slideshare, believes strongly in and contributes to open source. Now available in Elm.',
            twitter: 'choonkeat',
          },
        ],
      },
      {
        title:
          'Bitcoin, Blockchain & Cryptography, Part II: A look back of blockchain evolution over the last 10 years.',
        summary:
          'I gave a Geekcamp opening keynote in 2012 titled "Bitcoin – How it is safer than you bank", when Bitcoin was barely known outside of a small group of users.This is a no-hype talk that covers both my personal journey in the blockchain scene, as well as evolution of blockchain, from my eyes.',
        startTime: '2022-10-29T15:45:00+08:00',
        endTime: '2022-10-29T16:30:00+08:00',
        track: '1',
        id: 'bitcoin-blockchain-cryptography-part-ii-a-look-back-of-blockchain-evolution-over-the-last-years',
        speakers: [
          {
            name: 'U-Zyn Chua',
            id: 'u-zyn-chua',
            imgUrl: { default: uzynchua, webp: uzynchuaWebp },
            position: 'Co-Founder & CTO, Cake DeFi',
            bio: "U-Zyn Chua is the Co-Founder and CTO of Cake DeFi — Singapore-based online platform dedicated to providing easy access to DeFi services. U-Zyn has been dabbling with Bitcoin since 2010, involved in various technological aspects of blockchain for the past 12 years. He made global headlines as the designer and lead architect of the world's first central bank digital currency (CBDC) in The Bahamas. He's also actively involve open source blockchain projects, most notably DeFiChain.",
            twitter: 'uzyn',
          },
        ],
      },
      {
        title: 'Creating Art From Databases',
        summary:
          'When I ask, what does a database look like? An ER Diagram may come to mind. How about, what does a DB sound like? Hmm.. maybe, the screams of one being accidentally deleted. Ultimately, art is made up of data. A song has notes, a painting has pixels etc. So, why not turn our databases into art?',
        startTime: '2022-10-29T16:00:00+08:00',
        endTime: '2022-10-29T16:15:00+08:00',
        track: '0',
        id: 'creating-art-from-databases',
        speakers: [
          {
            name: 'Sam Poder',
            id: 'sam-poder',
            imgUrl: { default: sampoder, webp: sampoderWebp },
            position: 'Software Engineer, Hack Club',
            bio: "👋 G'day! I'm Sam, 17, from Australia & living in Singapore. I enjoy building random things for the web, experimenting with code and all things hackathons.",
            twitter: 'sam_poder',
          },
        ],
      },
      {
        title: 'Software best practices in a Hard(ware) world',
        summary:
          "Software processes and best practices like version control, build automation and CI/CD are widely adopted in the software industry, but how to adapt these ideas to hardware design and development? Does git work on schematics? Can I automate hardware testing? Let's explore!",
        startTime: '2022-10-29T16:15:00+08:00',
        endTime: '2022-10-29T16:30:00+08:00',
        track: '0',
        id: 'software-best-practices-in-a-hard-ware-world',
        speakers: [
          {
            name: 'Chinmay Pendharkar',
            id: 'chinmay-pendharkar',
            imgUrl: { default: chinmaypendharkar, webp: chinmaypendharkarWebp },
            position: 'CTO, Subnero',
            bio: 'Chinmay\'s an engineer and a geek who loves everything audio, electronics, and technology. He makes <a href="https://subnero.com/" rel="noreferrer noopener" target="_blank">devices that communicate underwater</a> during the day and on some Wednesday evenings he runs Singapore\'s hardware/electronics/IoT meetup, "Hackware". On weekends he can be found <a href="https://chinmay.audio/talks/webaudio-geekcamp-2015/#/" rel="noreferrer noopener" target="_blank">making noise on the Web</a> or conjuring up <a href="https://docs.google.com/presentation/d/1gRhL7TO00Fa94GTzKoip3zsf41qCkJilJB443lR1ePE/edit" rel="noreferrer noopener" target="_blank">strange concotions</a>.',
            twitter: 'ntt',
          },
        ],
      },
      {
        title: 'Understanding the TLS Ecosystem by Probing the Internet',
        summary:
          'In this talk, we look at how to perform an internet wide scan supporting TLSv1.3. We collect data from the entire IPv4 space on port 443 and analyze 9,461,056 data points to baseline the state of the TLS ecosystem. We conclude the talk by looking at how the ecosystem can be improved.',
        startTime: '2022-10-29T16:30:00+08:00',
        endTime: '2022-10-29T17:15:00+08:00',
        track: '0',
        id: 'understanding-the-tls-ecosystem-by-probing-the-internet',
        speakers: [
          {
            name: 'Wong Wai Tuck',
            id: 'wong-wai-tuck',
            imgUrl: { default: wongwaituck, webp: wongwaituckWebp },
            position: 'Senior Penetration Tester',
            bio: 'Wai Tuck is a Senior Penetration Tester working on improving privacy and security on the internet. He is broadly interested in deep technical research and scaling the process of finding security vulnerabilities in novel systems. He was previously a contributor to Nmap, most notably writing the first stable scanner for Sambacry (CVE-2017-7494). He holds a number of security certifications and accolades, including a Black Badge with the team CTFSG in DEFCON26. He is concurrently pursuing a PhD in Computer Science, researching on the weaknesses of artificial intelligence systems and devising new methods to make them more robust.',
            twitter: 'waituckk',
          },
        ],
      },
      {
        title: 'How Python 3.11 is Speeding Up',
        summary:
          "Speed is coming to Python. After years of mostly stagnant year-on-year Python performance improvements, Python 3.11 is 25% faster than Python 3.10 thanks to various contributors. I'd love to share the technical details of how this was achieved.",
        startTime: '2022-10-29T16:30:00+08:00',
        endTime: '2022-10-29T17:15:00+08:00',
        track: '1',
        id: 'how-python-is-speeding-up',
        speakers: [
          {
            name: 'Ken Jin',
            id: 'ken-jin',
            imgUrl: { default: kenjin, webp: kenjinWebp },
            position: 'Contributor, CPython',
            bio: 'I work on performance, typing, documentation and the interpreter internals in CPython.',
            twitter: '',
          },
        ],
      },
      {
        title:
          'Using math, statistics, and JavaScript - to automate the solving of WORDLE - so I will never need to do so again',
        summary:
          "My wife is really addicted to Wordle, and she's been bugging me to try it every day, and compete for a better score then me ....But I suck at Wordle! So I used math, statistics, and JavaScript - to automate solving of wordle for me (so I will never need to do so again)",
        startTime: '2022-10-29T17:15:00+08:00',
        endTime: '2022-10-29T18:00:00+08:00',
        track: '0',
        id: 'using-math-statistics-and-javascript-to-automate-the-solving-of-wordle-so-i-will-never-need-to-do-so-again',
        speakers: [
          {
            name: 'Eugene Cheah',
            id: 'eugene-cheah',
            imgUrl: { default: eugenecheah, webp: eugenecheahWebp },
            position: 'CTO, Uilicious',
            bio: 'Builds UI test automation (<a href="http://uilicious.com" rel="noreferrer noopener" target="_blank">http://uilicious.com</a>) infrastructure and tools, web app development, and part of the GPUJS team (<a href="http://gpu.rocks" rel="noreferrer noopener" target="_blank">http://gpu.rocks</a>). Hot-takes/Views are my own',
            twitter: 'PicoCreator',
          },
        ],
      },
      {
        title: 'The L4 Compiler: a toolchain for a DSL for law',
        summary:
          'Programmers and lawyers do the same thing: we anticipate a range of future scenarios and try to say what is, and is not, supposed to happen in each one. But lawyers program in English. What if CS had been invented before law? What would lawyers be programming in instead?',
        startTime: '2022-10-29T17:15:00+08:00',
        endTime: '2022-10-29T18:00:00+08:00',
        track: '1',
        id: 'the-l-compiler-a-toolchain-for-a-dsl-for-law',
        speakers: [
          {
            name: 'Wong Meng Weng',
            id: 'wong-meng-weng',
            imgUrl: { default: wongmengweng, webp: wongmengwengWebp },
            position: 'Principal Research Fellow, SMU YPHSOL',
            bio: "Meng is co-founder at Legalese.com and is principal researcher at SMU's School of Law where he works on L4, a domain-specific language for law.",
            twitter: 'mengwong',
          },
        ],
      },
    ],
  }],
};

const speakers = schedule.dates.flatMap(date => date.talks.flatMap((talk) => talk.speakers ?? []).sort((a, b) => a.name > b.name ? 1 : -1));
const tracks = Array.from(new Set(schedule.dates.flatMap(date => date.talks.map(talk => talk.track!)).filter(Boolean)))
export { schedule, speakers, tracks };
