import type { Domain, Grade } from "./competitions";

export interface StorySection {
  heading: string;
  text: string;
}

export interface Story {
  slug: string;
  title: string;
  competitionSlug: string;
  competitionTag: string;
  domain: Domain;
  authorName: string;
  grade: Grade;
  authorGrade: string;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  readTime: string;
  sections: StorySection[];
}

export const stories: Story[] = [
  {
    slug: "the-amc-experience",
    title: "The AMC Experience",
    competitionSlug: "amc-aime",
    competitionTag: "AMC",
    domain: "Academics",
    authorName: "James B.",
    grade: "10",
    authorGrade: "10th grade",
    excerpt:
      "The amount of time and effort going into the AMC doesn't necessarily translate to the amount of success you'll have. That said, I don't regret it at all.",
    publishedAt: "2025-06-15",
    featured: true,
    readTime: "6 min",
    sections: [
      {
        heading: "What went well",
        text: "Looking back, I was elated when I realized that I got into JMO. After many years of hard work and hours dedicated, I finally thought I got some sort of recognition I deserved. I think there is truth in the saying that practice will make perfect, but to be honest, I was a kid with lofty goals, and I wanted to be even better.",
      },
      {
        heading: "What was difficult",
        text: "It was definitely really difficcult trying to balance the time commitment of the AMC with the rest of my schoolwork and other activities. I think AMC prep is definitely a huge time commitment that often can go unpaid in the end. I think especially with the AMC and Bay Area pressure, comparison has always been a huge part of my life, and I think it honestly was hard to not let that get to me. I remember doing countless past tests, all to have a seemingly bad day on the day of the test. I also think that talent is a real thing in math competitions that not many people talk about, there are just evidently some people who are naturally better at solving math/remembering concepts that others, and that's a reality that took me a long time to come to terms with.",
      },
      {
        heading: "What I wish I knew",
        text: "I think honestly, it's a competition with a high risk and high reward. I know many people who spent many hours and didn't get the award they expected. That being said, I think I should have realized that I shouldn't put too high expectations on math competitions in general, and that there is much more to math than just the score on your paper, which is determined by not just your intellect but many uncontrollable variables that go on the day of the test.",
      },
      {
        heading: "Advice for future competitors",
        text: "I think the prime target for AMC are for people who are either curious in math rather than thinking its a prestigious competition to join. The way I see it, there are two types of AMC test takers that I feel like are ultiimately successful, the ones who spend some time to make AIME qualification and call it a day, and the prodigies who have been grinding for a long time and aim for MOP, so it's best to pick which side of the spectrum you want to be a part of.",
      },
    ],
  },
  {
    slug: "what-i-wish-i-knew-before-ftc-worlds",
    title: "What I Wish I Knew Before FTC Worlds",
    competitionSlug: "ftc",
    competitionTag: "FTC",
    domain: "Academics",
    authorName: "Maya R.",
    grade: "12",
    authorGrade: "12th grade",
    excerpt:
      "Worlds felt overwhelming until our team stopped trying to copy top teams and focused on what we actually built well.",
    publishedAt: "2026-06-22",
    readTime: "6 min",
    sections: [
      {
        heading: "What went well",
        text: "Honestly the best part wasn't placing. It was the week we finally stopped redesigning the intake every night and just ran what we had. Our robot wasn't flashy but it was reliable, and that mattered more than I expected once we got to the venue.",
      },
      {
        heading: "What was difficult",
        text: "The travel alone was a lot. Hotels, charging stations, waiting around for hours between matches. I also spent way too much time watching other teams' robots and feeling like we were behind. That headspace was worse than any mechanical problem we had.",
      },
      {
        heading: "What I wish I knew",
        text: "You don't need to look like a top team to have a good season. We wasted a month trying to copy mechanisms we saw online instead of finishing our own design. Also, sleep is not optional. I learned that the hard way.",
      },
      {
        heading: "Advice for future competitors",
        text: "Pick one thing your robot does well and make it boringly consistent. Document your process even when it feels pointless. And talk to other teams — most people are nicer than they look when they're stressed.",
      },
    ],
  },
  {
    slug: "my-first-usaco-season-was-rough",
    title: "My First USACO Season Was Rough",
    competitionSlug: "usaco",
    competitionTag: "USACO",
    domain: "Academics",
    authorName: "Alex K.",
    grade: "10",
    authorGrade: "10th grade",
    excerpt:
      "I stuck in bronze for two contests and almost quit. Changing how I reviewed problems helped more than grinding harder.",
    publishedAt: "2025-09-08",
    readTime: "7 min",
    sections: [
      {
        heading: "What went well",
        text: "Once I found one person to talk through solutions with, things clicked a little. Not overnight, but I stopped feeling like I was studying alone in a vacuum. Getting my first silver promotion felt small from the outside but it meant a lot to me.",
      },
      {
        heading: "What was difficult",
        text: "Bronze felt endless. I'd do problems, get them wrong, and not really understand why. Contests were stressful because four hours is a long time to sit with the feeling that you're not good enough. I almost quit after the second contest.",
      },
      {
        heading: "What I wish I knew",
        text: "Doing more problems isn't the same as learning from them. I used to rush to the next one instead of rewriting solutions I got wrong. Also, comparison on Codeforces and Discord is brutal if you let it be.",
      },
      {
        heading: "Advice for future competitors",
        text: "Find one person to discuss problems with, even if they're at the same level. Review your wrong answers more carefully than your right ones. And it's okay if your first season is mostly bronze — a lot of people start there.",
      },
    ],
  },
  {
    slug: "losing-at-isef-taught-me-more",
    title: "Losing at ISEF Taught Me More Than Winning",
    competitionSlug: "isef",
    competitionTag: "ISEF",
    domain: "Academics",
    authorName: "Priya S.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "I didn't place, but the judges' questions reshaped my research direction more than any award would have.",
    publishedAt: "2026-03-11",
    readTime: "7 min",
    sections: [
      {
        heading: "What went well",
        text: "The conversations with judges were better than I expected. Even when they poked holes in my methods, it felt like they were taking the work seriously. I left with a clearer idea of what to fix than I had after months of working alone.",
      },
      {
        heading: "What was difficult",
        text: "Walking around and seeing posters that looked way more polished was hard. I also underestimated how tiring it is to explain the same project for hours. By day two I was running on caffeine and nerves.",
      },
      {
        heading: "What I wish I knew",
        text: "Not placing doesn't mean the project was a waste. I treated ISEF like a finish line when it was really just feedback. I also wish I'd practiced answering questions out loud earlier instead of only polishing the board.",
      },
      {
        heading: "Advice for future competitors",
        text: "Write down the questions judges ask you. Those are gold for the next version of your project. And go in curious, not desperate to impress — people can tell the difference.",
      },
    ],
  },
  {
    slug: "deca-internationals-honest-take",
    title: "DECA Internationals: The Parts Nobody Warns You About",
    competitionSlug: "deca",
    competitionTag: "DECA",
    domain: "Academics",
    authorName: "Jordan L.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "The role-plays were intense, but managing sleep, team dynamics, and performing in front of strangers was harder.",
    publishedAt: "2025-11-02",
    readTime: "5 min",
    sections: [
      {
        heading: "What went well",
        text: "Our team actually got along, which I didn't fully appreciate until I saw other groups arguing in the lobby. The role-plays were stressful but also kind of fun once I stopped overthinking every word.",
      },
      {
        heading: "What was difficult",
        text: "Sleep was a joke. Between events, practice, and the hotel being loud, I was wiped by day two. Performing in front of judges who barely react is also weird — you have no idea if you're doing well.",
      },
      {
        heading: "What I wish I knew",
        text: "I spent too much energy trying to sound professional and not enough sounding like a real person. Judges can tell when you're reciting a script. Also, bring snacks. The food lines are long.",
      },
      {
        heading: "Advice for future competitors",
        text: "Practice with people who will interrupt you and ask weird questions. Rest when you can. And don't let one bad role-play ruin the whole trip — everyone has at least one.",
      },
    ],
  },
  {
    slug: "science-olympiad-build-events",
    title: "SciOly Build Events Are Chaos",
    competitionSlug: "science-olympiad",
    competitionTag: "SciOly",
    domain: "Academics",
    authorName: "Sam T.",
    grade: "9",
    authorGrade: "9th grade",
    excerpt:
      "Our tower collapsed twice at regionals. We still learned more about engineering in one season than in any class.",
    publishedAt: "2026-01-19",
    readTime: "5 min",
    sections: [
      {
        heading: "What went well",
        text: "Even when the tower failed, building it taught me more than worksheets ever did. Working with a partner who actually cared about the event made the late nights less miserable.",
      },
      {
        heading: "What was difficult",
        text: "Time management was rough. I'd leave builds until the week before and then panic. Also, watching your project fall apart in front of other teams is embarrassing no matter how much you prepare yourself for it.",
      },
      {
        heading: "What I wish I knew",
        text: "Start earlier than you think you need to. Test under the same conditions as competition, not just on your bedroom floor. And failure is part of it — I took the collapses way too personally.",
      },
      {
        heading: "Advice for future competitors",
        text: "Pick events you actually like, not just the ones that sound impressive. Build events reward patience more than talent. Document what breaks so you don't repeat the same mistake.",
      },
    ],
  },
  {
    slug: "debate-first-tournament",
    title: "My First Debate Tournament Was Terrifying",
    competitionSlug: "debate",
    competitionTag: "Debate",
    domain: "Academics",
    authorName: "Chris M.",
    grade: "10",
    authorGrade: "10th grade",
    excerpt:
      "I barely knew the resolution and lost every round. The community and the speed of thinking hooked me anyway.",
    publishedAt: "2025-08-14",
    readTime: "5 min",
    sections: [
      {
        heading: "What went well",
        text: "People were nicer than I expected. After rounds, other teams explained things I didn't understand without making me feel stupid. That alone made me want to come back.",
      },
      {
        heading: "What was difficult",
        text: "Speaking in front of judges while my brain went blank was awful. I also didn't know how to flow properly, so I lost track of arguments halfway through. Losing every round stung more than I admitted at the time.",
      },
      {
        heading: "What I wish I knew",
        text: "Nobody expects a first tournament to go well. I put way too much pressure on myself to not look dumb. Also, reading cases the night before is not a strategy.",
      },
      {
        heading: "Advice for future competitors",
        text: "Go to one tournament just to see what it's like. Ask questions after rounds. And write down feedback even if it feels harsh — you'll care about it later.",
      },
    ],
  },
  {
    slug: "first-hackathon-no-experience",
    title: "I Went to My First Hackathon With Zero Experience",
    competitionSlug: "hackathon",
    competitionTag: "Hackathons",
    domain: "Academics",
    authorName: "Taylor W.",
    grade: "9",
    authorGrade: "9th grade",
    excerpt:
      "I showed up not knowing React. A teammate taught me on the spot, we shipped something broken but real, and I left wanting to keep building.",
    publishedAt: "2026-05-04",
    readTime: "4 min",
    sections: [
      {
        heading: "What went well",
        text: "My teammate was patient and I learned more in 24 hours than I had in weeks of tutorials. We demoed something that barely worked, but it was ours. That felt better than I expected.",
      },
      {
        heading: "What was difficult",
        text: "I felt useless for the first few hours. Everyone else seemed to know what they were doing. Sleeping on a classroom floor also isn't as fun as people make it sound.",
      },
      {
        heading: "What I wish I knew",
        text: "You don't need to know everything before you show up. I almost didn't go because I thought I wasn't ready. Also, scope smaller — we tried to build too much and spent the last hour cutting features.",
      },
      {
        heading: "Advice for future competitors",
        text: "Join a team that wants to teach, not just win. Bring a charger and a water bottle. And ship something incomplete rather than nothing at all.",
      },
    ],
  },
  {
    slug: "amc-aime-gap",
    title: "The Gap Between AMC 10 and AIME Is Real",
    competitionSlug: "amc-aime",
    competitionTag: "AMC/AIME",
    domain: "Academics",
    authorName: "Daniel H.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "Qualifying for AIME felt like a cliff, not a slope. Comparison was my biggest enemy more than any problem set.",
    publishedAt: "2025-12-09",
    readTime: "6 min",
    sections: [
      {
        heading: "What went well",
        text: "When I finally qualified, it was mostly because I stopped jumping between random resources and stuck to a few past papers. Consistency mattered more than finding the perfect book.",
      },
      {
        heading: "What was difficult",
        text: "The jump from AMC 10 to AIME problems is no joke. I'd do fine on easier contests and then completely freeze on AIME practice. Watching friends qualify before me made it worse.",
      },
      {
        heading: "What I wish I knew",
        text: "One bad contest doesn't define you. I had a year where I missed AIME by a few points and treated it like a personal failure. It wasn't. Also, rest days help more than another timed practice.",
      },
      {
        heading: "Advice for future competitors",
        text: "Pick a small set of resources and actually finish them. Don't refresh score reports obsessively. And if you're only doing it for college apps, you'll burn out — curiosity lasts longer.",
      },
    ],
  },
  {
    slug: "ftc-team-dynamics",
    title: "FTC Team Dynamics Matter More Than Your Robot",
    competitionSlug: "ftc",
    competitionTag: "FTC",
    domain: "Academics",
    authorName: "Elena V.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "We had a competitive robot and still struggled because we never talked about roles. Communication mattered more than the build.",
    publishedAt: "2026-02-27",
    readTime: "6 min",
    sections: [
      {
        heading: "What went well",
        text: "Once we actually assigned roles and stopped assuming everyone knew what they were doing, meetings got shorter and less tense. The robot improved too, weirdly, because people weren't stepping on each other.",
      },
      {
        heading: "What was difficult",
        text: "We avoided hard conversations for months. People were frustrated but polite about it, which is somehow worse. Mentors helped, but only after we admitted we had a problem.",
      },
      {
        heading: "What I wish I knew",
        text: "A good robot doesn't fix a bad team culture. I thought if we just built harder everything else would sort itself out. It didn't. Burnout hit people who cared the most.",
      },
      {
        heading: "Advice for future competitors",
        text: "Talk about roles early, even if it feels awkward. Check in on people who are always staying late. And don't wait until regionals to figure out who does what.",
      },
    ],
  },
  {
    slug: "usaco-platinum-reality",
    title: "What Platinum USACO Actually Feels Like",
    competitionSlug: "usaco",
    competitionTag: "USACO",
    domain: "Academics",
    authorName: "Kevin Z.",
    grade: "12",
    authorGrade: "12th grade",
    excerpt:
      "Getting to platinum didn't fix imposter syndrome. Time investment is real, and college apps are the wrong reason to do it.",
    publishedAt: "2025-10-21",
    readTime: "8 min",
    sections: [
      {
        heading: "What went well",
        text: "I got better at sitting with hard problems without panicking. That skill showed up in other classes too. The people I met through contests were also smarter and kinder than the stereotypes.",
      },
      {
        heading: "What was difficult",
        text: "Platinum problems can make you feel stupid even when you've been doing this for years. Contests still stress me out. And the time commitment is huge — weekends disappear if you're not careful.",
      },
      {
        heading: "What I wish I knew",
        text: "Promotion doesn't magically make you confident. I thought platinum would quiet the voice that says I'm behind. It didn't. Also, doing it only for college apps is a miserable way to spend high school.",
      },
      {
        heading: "Advice for future competitors",
        text: "If you enjoy problem solving, keep going. If you only care about the title, reconsider. Protect sleep and friendships. Contests will still be there next month.",
      },
    ],
  },
  {
    slug: "scholastic-writing-rejection",
    title: "Getting Rejected by Scholastic Still Changed My Writing",
    competitionSlug: "scholastic-writing",
    competitionTag: "Scholastic",
    domain: "Academics",
    authorName: "Riley P.",
    grade: "10",
    authorGrade: "10th grade",
    excerpt:
      "No gold key, but the revision process and feedback from my teacher made me a better writer anyway.",
    publishedAt: "2026-04-16",
    readTime: "5 min",
    sections: [
      {
        heading: "What went well",
        text: "Forcing myself to revise something five times taught me more than any award would have. My teacher was honest without being mean, which is rare and useful.",
      },
      {
        heading: "What was difficult",
        text: "Waiting for results was weirdly stressful for something I told myself I didn't care about. Seeing friends place when I didn't hurt more than I expected.",
      },
      {
        heading: "What I wish I knew",
        text: "Rejection isn't a verdict on whether you're a writer. I almost stopped submitting anything after. Also, writing for judges is different from writing for yourself — both matter, but they're not the same.",
      },
      {
        heading: "Advice for future competitors",
        text: "Submit work you're proud of, not work you think will win. Keep a draft that exists only for you. And if you don't place, the revision still counts.",
      },
    ],
  },
  {
    slug: "isef-lab-hours",
    title: "The Lab Hours Nobody Talks About Before ISEF",
    competitionSlug: "isef",
    competitionTag: "ISEF",
    domain: "Academics",
    authorName: "Aisha N.",
    grade: "12",
    authorGrade: "12th grade",
    excerpt:
      "Between school, research, and fair paperwork, I averaged 15 hours a week for eight months. Worth it — but not for the reasons I expected.",
    publishedAt: "2025-07-28",
    readTime: "7 min",
    sections: [
      {
        heading: "What went well",
        text: "I learned how to manage a long project without a teacher assigning deadlines every week. That independence was new for me. I also got better at asking for help when I was stuck.",
      },
      {
        heading: "What was difficult",
        text: "The hours add up quietly. One night becomes three nights a week becomes every weekend. Paperwork and forms took more time than I budgeted. Friends stopped inviting me to things because I always said I was busy.",
      },
      {
        heading: "What I wish I knew",
        text: "You can do research without destroying your social life, but you have to protect time on purpose. I didn't. Also, the award isn't the only outcome — skills transfer even if you don't place.",
      },
      {
        heading: "Advice for future competitors",
        text: "Be honest about how many hours you can give. Schedule non-lab time like it matters. And don't start a project only because it looks good on an application.",
      },
    ],
  },
  {
    slug: "track-states-nerves",
    title: "What Nobody Tells You About Running at States",
    competitionSlug: "track-and-field",
    competitionTag: "Track",
    domain: "Sports",
    authorName: "Jamie L.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "State track feels nothing like dual meets. Pre-race anxiety and racing people I'd only seen on Milesplit hit differently.",
    publishedAt: "2026-06-01",
    readTime: "5 min",
    sections: [
      {
        heading: "What went well",
        text: "I ran a PR even though I was terrified. Focusing on my own race instead of the people next to me helped more than any pep talk. My teammates being there made the whole day less lonely.",
      },
      {
        heading: "What was difficult",
        text: "The waiting is the worst part. You warm up, then sit around for an hour trying not to spiral. Everyone looks fast and confident. I almost talked myself out of caring before I even got on the line.",
      },
      {
        heading: "What I wish I knew",
        text: "Nerves don't mean you're unprepared. I used to think calm people were the only ones who belonged there. Also, one bad race at states doesn't erase a whole season.",
      },
      {
        heading: "Advice for future competitors",
        text: "Have a warm-up routine you trust. Don't refresh results obsessively the week before. And remember why you started running — usually it wasn't for a medal.",
      },
    ],
  },
  {
    slug: "swimming-club-vs-high-school",
    title: "Club Swimming vs. High School Season",
    competitionSlug: "swimming",
    competitionTag: "Swimming",
    domain: "Sports",
    authorName: "Noah P.",
    grade: "10",
    authorGrade: "10th grade",
    excerpt:
      "I swam club year-round and high school in the winter. The schedules collided, and nobody explained how to manage both.",
    publishedAt: "2025-12-28",
    readTime: "6 min",
    sections: [
      {
        heading: "What went well",
        text: "High school meets were more fun than I expected. Less pressure, more team energy. Club made me faster, and high school reminded me why I liked swimming in the first place.",
      },
      {
        heading: "What was difficult",
        text: "Double practices during the overlap months were brutal. I was tired all the time and short with people at home. Coaches didn't always agree on priorities, which put me in the middle.",
      },
      {
        heading: "What I wish I knew",
        text: "You can say no to some practices. I thought I had to do everything or I'd fall behind. Rest is part of training, not quitting. I learned that after getting sick mid-season.",
      },
      {
        heading: "Advice for future competitors",
        text: "Talk to both coaches early about your schedule. Protect at least one night a week with no pool. And don't compare your club times to people who only swim one program.",
      },
    ],
  },
  {
    slug: "varsity-tennis-first-year",
    title: "Making Varsity Tennis as a Junior",
    competitionSlug: "varsity-tennis",
    competitionTag: "Tennis",
    domain: "Sports",
    authorName: "Sofia M.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "I started playing seriously sophomore year. No private coach — just public courts and a lot of YouTube.",
    publishedAt: "2026-07-02",
    readTime: "5 min",
    sections: [
      {
        heading: "What went well",
        text: "Making the team felt unreal because I didn't grow up in clubs. Matches taught me more than drills alone. I also got better at losing without spiraling, which took a while.",
      },
      {
        heading: "What was difficult",
        text: "Tryouts were intimidating. Everyone else seemed to know each other and have better form. Balancing school and practice was harder than I expected, especially during midterms.",
      },
      {
        heading: "What I wish I knew",
        text: "You don't need a country club background to improve. I spent too long feeling like an outsider. Consistency on public courts beat waiting for perfect conditions.",
      },
      {
        heading: "Advice for future competitors",
        text: "Play as many matches as you can, even casual ones. Film yourself sometimes — it's uncomfortable but useful. And don't let equipment or coaching status decide whether you try out.",
      },
    ],
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getStoriesByCompetition(competitionSlug: string): Story[] {
  return stories
    .filter((s) => s.competitionSlug === competitionSlug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getStoriesByDomain(domain: Domain): Story[] {
  return stories
    .filter((s) => s.domain === domain)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getFeaturedStories(): Story[] {
  return stories.filter((s) => s.featured);
}

export function getRecentStories(limit = 10): Story[] {
  return [...stories]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}
