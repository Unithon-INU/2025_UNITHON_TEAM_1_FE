import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #E0E0E0;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  margin-right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex: 1;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;
  
  &:hover {
    background: #F5F5F5;
  }
`;

const Content = styled.div`
  padding: 0;
`;


const ClubInfo = styled.div`
  padding: 20px;
`;

const ClubName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
`;

const ClubCategory = styled.div`
  display: inline-block;
  background: #E3F2FD;
  color: #1976D2;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ClubDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0 0 24px 0;
`;

const InfoSection = styled.div`
  margin-bottom: 24px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
`;

const InfoIcon = styled.div`
  margin-right: 12px;
  color: #2196F3;
  display: flex;
  align-items: center;
`;

const InfoText = styled.div`
  flex: 1;
`;

const ContactSection = styled.div`
  background: #F8F9FA;
  margin: 0 -20px;
  padding: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
`;

const ContactIcon = styled.div`
  margin-right: 12px;
  color: #2196F3;
  display: flex;
  align-items: center;
`;

const ContactText = styled.div`
  flex: 1;
`;

const JoinButton = styled.button`
  width: calc(100% - 40px);
  margin: 20px;
  padding: 16px;
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #1976D2;
  }
`;

const EventsSection = styled.div`
  padding: 20px;
  border-top: 1px solid #E0E0E0;
`;

const EventCard = styled.div`
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
`;

const EventTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const EventDetails = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ClubsPost = () => {
  const navigate = useNavigate();
  const { clubName } = useParams(); // Changed from id to clubName
  const [clubData, setClubData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Your club data
  const clubsData = [
    {
      "division": "CULTURE",
      "name": "INUO",
      "location": "11-405",
      "summary": "Orchestra Club - Experience classical music and orchestral performances with fellow musicians.",
      "description": "Incheon National University Orchestra (INUO) is an orchestra club founded in 2016 by students with a passion for classical music and performance. Since its founding, INUO has been actively performing through internal concerts, skill improvement performances, and various external events. Through these performances, members develop their musical skills and gain valuable stage experience.\n\nUsing the University Orchestra as a stepping stone, the club pursues musical exchange and development through joint performances with other university orchestras in the Incheon area. This place, where passionate and talented members help each other grow musically, is open to anyone who loves music.\n\nThe regular concert is INUO's most important annual event, a large-scale stage where not only club members but also alumni and students from other universities participate as guests. It leaves a deep impression on the audience with high-level performances every year and shows INUO's musical skills and passion.\n\nThe Skill Improvement Concert is a stage that any INUO member can participate in, providing opportunities for new members who have not learned an instrument for long to experience their own growth on stage. Regardless of playing skills, all members gather together to practice and perform, encourage each other, and build musical confidence.\n\nThe University Union Orchestra is a program hosted by Conductor Ben Kim, providing special opportunities for orchestras from various universities in the Incheon area to come together and perform. Through this program, students from each university can perform together on one stage, share their musical skills, and grow while gaining various styles and experiences.\n\nIn addition to performance activities, INUO provides time for members to communicate and interact through various social activities such as MT, group performance viewing, and after-performance parties. Don't hesitate to join the club!"
    },
    {
      "division": "CULTURE",
      "name": "IUDC",
      "location": "17-406",
      "summary": "Dance Club - Express yourself through various dance styles and choreography.",
      "description": "IUDC is a dance club that loves all genres of dance, not limited to K-POP, HIPHOP, and more!\n\nWe perform and film on big stages such as OT, festivals, and regular performances, which are the highlights of college life. We also film external support performances or videos ourselves and upload them to various SNS and YouTube!\n\nBecause it is a large club, you can meet people you don't easily meet in college life, have a wide range of interactions, and make unforgettable memories by filming on stage and in videos.\n\nAbove all! You can realize the college life you've been dreaming of!"
    },
    {
      "division": "CULTURE",
      "name": "인인극회",
      "location": "17-205",
      "summary": "Theater Club - Explore acting, directing, and theatrical productions.",
      "description": "Start your theater journey right now!\n\nFounded in 1981, Inin Theater Society has been successfully holding regular performances and workshop performances every year.\n\nInin Theater Society aims to spread the charm and value of theater and contribute to the development of culture and arts on campus and in the local community. The club members are passionate and artistically talented students, and they focus on experimenting and exploring various theater genres and styles.\n\nThrough regular performances every year, we present creative and interesting theater works to the school. We cover a wide range of topics and genres, and we plan and direct works that span from classical to modern times. Through this, the club members develop their acting and directing skills, while also providing deep emotion and enjoyment to the audience.\n\nIn addition, through workshop performances, the club members provide opportunities to further improve their theater skills. The workshops encourage experimentation and exploration during the production process, and are used as an important platform to develop new ideas and approaches.\n\nOur club awaits you as a participant, not just a spectator. Here, you can freely explore the world of theater and improve your artistic abilities. You can experience collaboration and communication with your colleagues while demonstrating your passion and talent on stage.\n\nWe are waiting for you on the stage of Inin Theater."
    },
    {
      "division": "CULTURE",
      "name": "포크라인",
      "location": "17-415",
      "summary": "Band Club - Create music and perform with acoustic and electric instruments.",
      "description": "Acoustic Band Folkline\nStudents of Incheon National University looking for a small resting place in their busy daily lives\n\nHello! We are Folkline, the acoustic band of Incheon National University.\nFolkline started in 1983 as a pure music creation and acoustic club, and has a long history of 72 regular performances, KTX sponsorship, external events, and on-campus busking events over the past 41 years.\n\nWe plan each semester specifically, including an opening ceremony, MT, vacation project performance, regular performance (presentation), and after-performance party.\n\nMusic is a culture that anyone can understand and share, regardless of gender or age.\n\nWouldn't coming to the club, learning guitar, singing together, and enjoying it all be a way to live in this cold, frozen world?\n\nThis year, in 2023, Folkline is recruiting its 41st freshmen.\n\nBe the main character on this stage with Folkline."
    },
    {
      "division": "CULTURE",
      "name": "젊은영상",
      "location": "11-407",
      "summary": "Video Production Club - Learn filmmaking, editing, and video production techniques.",
      "description": "Our club was born in March 1985 under the name of 'Cinema', and later changed its name to 'Young Film' in March 1988.\n\nOur club has held the 'Young Film Festival' and the 'Creative Film Festival' every year.\n\nAt the 'Young Film Festival', we screened films that you may not normally have access to, grouped by theme.\n\nIn 1999, we screened 'Secret Garden', 'Listen Up', 'Sorrow', and 'Shining' under the theme of 'Life is Beautiful' (희-노-애-락).\n\nThe 'Creative Film Festival' is a film festival where we screen films that we made ourselves.\n\nAs a gathering of people who love movies, we show short films created with passion for creation.\n\nYou can learn the joy of filmmaking as our club members take charge of almost every aspect, from scenarios, filming, lighting, acting, and directing.\n\nAnyone who likes movies, come visit us!"
    },
    {
      "division": "CULTURE",
      "name": "함성",
      "location": "17-413",
      "summary": "Band Club - Rock and contemporary music performances and jam sessions.",
      "description": "Hamsung is a club belonging to the Cultural Department of the Central Club at Incheon University. Established in 1988, it has a rich history of 34 years as of 2023.\n\nIn 2022, the club performed at the Incheon University freshman orientation event, summer festival performances, and busker shows targeting university students in the Incheon area. It has also participated in school festival stages and activities with the Incheon university student band union. Regular performances were held in the school's small theater in the first semester and at the Seoul Prism Hall in the second semester. In 2023, Hamsung conducted busking and summer festival performances, with two regular performances scheduled for the summer.\n\nHamsung is open to anyone who has the willingness and passion to learn, regardless of their performance experience."
    },
    {
      "division": "CULTURE",
      "name": "UIAC(산악부)",
      "location": "17-412",
      "summary": "Mountaineering (Climbing) Club - Explore mountains and develop climbing skills.",
      "description": "-University of Incheon Alpine Club-\n\nEnjoy UNIV!! Enjoy UIAC!!\n\nThe Incheon University Mountaineering Club is a central club registered as the first club at the time of the university's establishment in 1979!\n\nThe mountaineering club engages in various mountain activities and sports, including sports climbing, rock climbing, hiking, ice climbing, and backpacking. Enjoying the flower paths of spring, the valleys of summer, the autumn foliage, and the winter snow, ridge traverses, and ice climbing on ice walls that refuse human footsteps are special activities that only the mountaineering club can offer!\n\nIn 2009, we made history as the first university mountaineering club to successfully summit the highest peaks on all seven continents, including Everest! We calmly document the lessons learned from the mountains and nature, creating a culture through our academic activities! The Incheon University Mountaineering Club is affiliated with the university mountaineering federation, allowing us to interact with mountaineering clubs from universities across the country, including those in Seoul and the metropolitan area, providing opportunities for diverse experiences and meaningful times together.\n\nThe bond formed among club members, climbing together while trusting each other with the rope, is called the \"Rope Bond\"! The \"Rope Bond\" is an unbreakable and deeply rooted connection that surpasses everything else!\n\nWhen many students are asked about the mountaineering club, they usually respond with, 'It's cool,' 'I want to do it,' 'But it's dangerous,' or 'I'm not confident.' While there may be challenges and fears compared to other clubs, it is precisely now that we can challenge ourselves and enjoy it!!\n\nOur mountaineering club proudly believes that we are a progressive club that grows alongside the university, with a passion for the mountains and a serious spirit of inquiry that is second to none."
    },
    {
      "division": "SPORTS",
      "name": "다크호스",
      "location": "17-318",
      "summary": "Table Tennis Club - Improve your ping pong skills through regular practice and tournaments.",
      "description": "Hello! We are the Dark Horse Table Tennis Club at Incheon University!\n\n→ We have the second largest club room in the Student Union (Building 17), where you can play table tennis.\n→ Besides table tennis, there are many activities like board games and poker.\n→ Senior members provide basic lessons for newcomers who are starting out in table tennis.\n→ Our club members have various levels of table tennis skills! Even if you can't play, there's no problem being part of the club.\n→ We have about 32,568 table tennis balls and rackets that can be used by any member!\n→ There are beds, desks, and lockers available! It's great during exam periods, and you can also keep your books there.\n→ We participate in table tennis tournaments such as the Gyeonggi Province University Table Tennis Tournament and the National University Table Tennis Tournament, providing many opportunities to compete with students from other schools and to build friendships, regardless of skill level."
    },
    {
      "division": "SPORTS",
      "name": "PANG",
      "location": "17-313",
      "summary": "Table Tennis Club - Competitive table tennis training and inter-university matches.",
      "description": "The Central Club Squash Club PANG gathers Incheon University students who love squash and promotes their health. We regularly engage in the sport of \"squash\" and also plan and conduct internal club competitions, as well as training for competitions in Incheon City. Currently, due to the COVID-19 situation, the club is experiencing some inconveniences in its operations, but we are adhering to the government-designated quarantine guidelines while continuing our activities.\n\nThe club is currently located in Room 313 of the Student Hall, and you can find more activity photos and information by searching for inu_squash on the club's Instagram. This club is open to anyone who wants to diet, is interested in squash, or wants to relieve stress with the sound of the ball hitting the wall and bursting PANGPANG."
    },
    {
      "division": "SPORTS",
      "name": "UITC",
      "location": "17-303",
      "summary": "Tennis Club - Learn tennis techniques and participate in friendly matches.",
      "description": "Hello! We are UITC, the tennis club at Incheon University.\n\nMost of our club members are experiencing tennis for the first time after joining the club! Our senior members will teach you the basics, starting from how to hold a racket. After mastering the fundamentals, members can play games together to improve their tennis skills.\n\nIn addition to weekly club activities, you can also socialize in the club room at any time!\n\nThere are opportunities to gain experience and meet new people through exchange matches with various schools, such as Inha University and Kyongin National University of Education.\n\nNot only exchange matches, but by participating in various national tennis club tournaments like the Gyeongin District Championship, Yanggu Open, and Chuncheon Open, you can have even more fulfilling club activities!\n\nWe are always waiting for you at UITC, Room 303 of the Student Welfare Center (Building 17). Thank you!"
    },
    {
      "division": "SPORTS",
      "name": "리바운드",
      "location": null,
      "summary": "Basketball Club - Develop basketball skills and team spirit through regular games.",
      "description": "Founded in 1979, the year after the university was established, our club is not just about basketball—we value character more than the game itself.\nThe ideal \"Dolphin\" member is, first and foremost, a good person. Second, someone who enjoys social gatherings. Third, someone who genuinely loves basketball and can proudly say so.\n\nWith this foundational \"Dolphin spirit,\" we strive to cultivate sacrifice and teamwork through basketball. Whether it's scoring with skill during games, supporting others with assists, or cheering passionately from the bench—every aspect of the game matters to us. We value the spirit of sacrifice for victory and self-reflection after defeat. None of these elements are taken lightly by any member of our basketball club at Incheon National University.\n\nFinally, we take pride in being a club that leads by example in building a society where people live in harmony and support one another."
    },
    {
      "division": "SPORTS",
      "name": "효월검우회",
      "location": "17-301",
      "summary": "Kendo Club - Learn traditional Japanese swordsmanship and martial arts discipline.",
      "description": "Hyowol Kendo Club is Incheon National University's kendo club, boasting over 30 years of history and tradition. True to the meaning of our name—\"a gathering of kendo practitioners who greet the dawn\"—we strive to embody the etiquette and spirit of kendo, continuously working to improve ourselves.\n\nAbout Kendo\nKendo is a martial art that uses swords, not only to train the body but also to cultivate the mind, manners, and spirit. Through practicing kendo, you can improve your physical strength, reflexes, agility, judgment, courage, confidence, and sense of accomplishment. It also helps correct your posture, develop a calm attitude, and build character.\n\nKendo is suitable for everyone, regardless of age or gender. It's called a \"lifetime sport\" because even as physical abilities decline with age, practitioners can continue to improve and demonstrate their skills. Unlike sports you outgrow, kendo is something you can practice throughout your life. Wearing protective gear and using bamboo swords also makes kendo a very safe activity with a low risk of injury.\n\nClub Activities\nOur club holds regular morning training sessions at the INU gym, as well as Friday afternoon practices. Everyone, from new members to senior students, participates together. There are opportunities to compete with students from other universities such as Hongik University, Seoul National University, and SeoulTech. We also connect with local kendo dojos in Incheon, with special guidance from Master Woo-Seok Lee of Jeonmu Kendo Dojo.\n\nIn addition to practical training, we host social events like MTs, festival booths, welcome parties, and competitions to build strong friendships within the club. We even have matching uniforms to foster a sense of unity.\n\nHyowol Kendo Club welcomes complete beginners, teaching them from the basics, while also helping experienced members continue to improve. If you're looking for a club that lets you build both your health and social connections, this is your chance."
    },
    {
      "division": "SPORTS",
      "name": "싸우라비",
      "location": "17-419",
      "summary": "Taekwondo Club - Master Korean martial arts and self-defense techniques.",
      "description": "Saurabi is the only Taekwondo club at Incheon National University.\n\nOur club welcomes not only students who already love Taekwondo, but also complete beginners who want to try it for the first time. In the first semester, we focus on preparing performances for school festivals, while in the second semester, we train for the National Taekwondo Union Sparring Competition. For members interested in advancing their belt rank, we also offer special training sessions each semester to help them prepare for the promotion test.\n\nOur regular training sessions are held on Mondays, Wednesdays, and Fridays from 6:30 pm to 8:00 pm, and on Tuesdays and Thursdays from 8:00 pm to 9:30 pm. The program includes basic techniques, poomsae (forms), advanced kicks, sparring, and physical conditioning."
    },
    {
      "division": "SPORTS",
      "name": "BOSS",
      "location": "17-432",
      "summary": "Snowboarding Club - Hit the slopes and enjoy winter sports adventures.",
      "description": "Board Club BOSS\nBOSS is the official skateboarding club of Incheon National University.\n\nWe hold regular meetings twice a month, along with weekly small group sessions where members gather at various cruising and board spots around Incheon to practice tricks and enjoy cruising together.\n\nEven if you've never tried boarding before, we provide step-by-step guidance from the basics so that beginners can enjoy and find interest in the sport.\n\nFor those who don't own a board, the club offers access to a variety of skateboards including regular skateboards, longboards, cruiser boards, and Carver boards.\n\nIn addition to skateboarding, we also enjoy seasonal activities such as snowboarding during the winter, and wakeboarding and surfing during the summer.\n\nWhether you want to try boarding for the first time, learn how to ride, or just love the vibe, everyone is welcome to join.\nOur club room is located in Room 432, Building 17 (Student Union Building), and you can check out photos and updates on our Instagram @inu.boss."
    },
    {
      "division": "SPORTS",
      "name": "페더스(배민)",
      "location": null,
      "summary": "Futsal Club - Fast-paced indoor soccer games and skill development.",
      "description": "Feathers (formerly Baemin) is Incheon National University's badminton club, founded in 2022 by students passionate about badminton. Since its founding, the club has held weekly Sunday practices and participated in various internal and external activities such as MTs and exchange matches with other university badminton clubs. Feathers is also a registered member of the \"Nuri Federation,\" a nationwide university badminton association, allowing for competitions and exchanges with schools in the Seoul and Gyeonggi area.\n\nThese activities not only help improve members' athletic abilities and promote camaraderie, but also aim to foster a well-rounded life through sports—developing intellect, virtue, and physical strength. The club seeks to build connections with other Incheon-area universities through regional exchange matches.\n\nRegular practices are held every Sunday from 2:00 PM to 6:00 PM at the INU gym. These sessions include friendly matches and basic skill training, creating a space for both skill development and social bonding.\n\nClub exchange matches are organized with nearby university badminton clubs. These include structured tournaments and casual matches, and have been held with Gachon University, Inha University, Yonsei University, Ghent University, and Gyeongin National University of Education.\n\nBeyond training and matches, Feathers also hosts welcome dinners for new members, MTs, and social gatherings after regular sessions to foster communication and community. The club also takes part in competitions hosted by the Nuri Federation, helping build unity and group spirit. Since Feathers values passion for badminton over skill level, any student who loves the sport is welcome to join without hesitation."
    },
    {
      "division": "SPORTS",
      "name": "바이킹",
      "location": "17-311",
      "summary": "Baseball Club - America's pastime with Korean enthusiasm and team spirit.",
      "description": "Vikings is the only baseball club at Incheon National University, formed by passionate individuals brought together by their shared love for the sport.\n\nFounded in 1982, the club participates annually in the National University Amateur Baseball Tournament, which features teams from 40 universities across the Seoul metropolitan area.\n\nWith strong performances year after year, Vikings proudly represent both the club and the university. They also host an annual on-campus baseball tournament and organize various social events, such as group outings to professional games.\n\nWhether you're someone who enjoys playing, watching, or simply wants to dive into baseball for the first time with passion—regardless of experience or gender—everyone is welcome."
    },
    {
      "division": "ACADEMIC",
      "name": "EDA",
      "location": "17-310",
      "summary": "English Debate Club - Enhance critical thinking and public speaking skills.",
      "description": "EDA is the English Debate Association at Incheon National University.\n\nWe are a club where students come together to improve their English proficiency through discussion and knowledge-sharing—skills essential in today's society. We hold regular meetings once or twice a month, and members can also form their own study groups to prepare for tests like TOEIC or TOEFL.\n\nEven if you're not particularly interested in studying English, you're welcome to join just to meet peers and enjoy campus life with fellow students.\nThe club room is located in Room 310, Building 17."
    },
    {
      "division": "ACADEMIC",
      "name": "아르고나우츠",
      "location": "17-307",
      "summary": "Stock Investment Club - Learn about financial markets and investment strategies.",
      "description": "Argonauts is Incheon National University's value investing club, focused on developing sound investment principles and studying stock investments through the analysis of corporate value based on value investing. The name \"Argonauts\" comes from the sailors of the Argo in Greek mythology, symbolizing our journey through the vast sea of the stock market, with stock prices like waves—navigated together through teamwork.\n\nWe welcome all students who are interested in or passionate about economics and the stock market.\n\nAs of the second semester of 2024, our club activities include:\n\n1. Building foundational knowledge in economics, finance, accounting, and investment metrics\n2. Conducting research using key economic and investment indicators\n3. Weekly news clipping and analysis of economic and corporate news every Friday\n4. Writing macroeconomic and company reports based on in-depth analysis\n5. Membership in the University Investment Club (UIC), a national student investment association\n6. Participating in simulated stock trading and return competitions within the club\n7. Entering investment and corporate research competitions\n8. Contributing company analysis articles to Incheon Ilbo (local newspaper)"
    },
    {
      "division": "ACADEMIC",
      "name": "PINCOM",
      "location": "17-329",
      "summary": "Programming Club - Code, create, and collaborate on software development projects.",
      "description": "PINCOM is an academic club focused on studying programming languages. Members participate in study teams that meet weekly or biweekly to learn together.\n\nWe welcome anyone with a passion for programming, regardless of age, student ID year, or major.\nFor those interested, please contact 010-7158-8162."
    },
    {
      "division": "HOBBY_EXHIBITION",
      "name": "한아랑",
      "location": "17-402",
      "summary": "Comics/Anime Club - Explore Japanese and Korean pop culture, manga, and anime.",
      "description": "Hanarang is a central club at INU for fans of comics and animation, focused mainly on building friendships among members.\n\nOur main activities include creating a calendar in the first semester and publishing a club magazine in the second semester. We also hold various social gatherings among members.\n\nYou don't need to be good at drawing—if you love comics and animation, feel free to join!\nOur club room is located in Room 402, Building 17."
    },
    {
      "division": "HOBBY_EXHIBITION",
      "name": "Cookinu",
      "location": null,
      "summary": "Cooking Club - Learn to prepare delicious Korean and international dishes.",
      "description": "CookINU is the cooking club at Incheon National University.\n\nWe mainly cook together each week, preparing a different menu every time. We also host additional events like barbecues and picnics.\n\nIt's a great opportunity to build friendships while enjoying food you've made yourself, so anyone can join without pressure.\n\nWhether you're passionate about cooking, want to meet new people, or simply want to start something light, CookINU is always open to you.\nFor more details, check out our Instagram @cook._.inu or the \"Clubs & Societies\" board on Everytime."
    },
    {
      "division": "HOBBY_EXHIBITION",
      "name": "보.인.다",
      "location": "11-421",
      "summary": "Board Game Club - Strategy, fun, and social gaming with fellow enthusiasts.",
      "description": "Boinda is the board game club at Incheon National University.\n\nWe own over 100 board games, ranging from popular titles to lesser-known ones, and we also run tabletop RPG (TRPG) sessions for those in the know.\n\nThe club participates in board game festivals and events, building connections and sharing knowledge with board game clubs from other universities. We also host an on-campus board game tournament every semester (not held during remote semesters).\n\nFor more details, check our Facebook page, and for questions or to join, feel free to contact us via Kakao Channel."
    },
    {
      "division": "HOBBY_EXHIBITION",
      "name": "기우회",
      "location": "17-308",
      "summary": "Go (Baduk) Club - Master the ancient strategy game of Go.",
      "description": "Giwoohoe is a club where people come together to enjoy the game of Go.\n\nAmong its many features, some of the most attractive include:\n\n1. You can learn to play Go (a professional player visits once or twice a month).\n2. You can enjoy various board games—the club has the largest board game collection on campus.\n3. It's a comfortable space to relax, study, or hang out during breaks—equipped with sofas, computers, large desks, lockers, and a fridge.\n4. Members occasionally earn extra income through Go-related part-time jobs.\n5. Convenient location—right next to the elevator, water dispenser, and shower room.\n6. The club actively exchanges with other universities through events like the INU-Inha Go Match and university Go leagues.\n\nIf you're looking to clear your mind with a strategic game, make friends across departments, or get sincere advice from upperclassmen, don't hesitate to drop by Room 308 in the Student Union Building."
    },
    {
      "division": "HOBBY_EXHIBITION",
      "name": "인유공방",
      "location": "17-420",
      "summary": "DIY Crafts Club - Create handmade items and explore various craft techniques.",
      "description": "INYU Workshop is the DIY crafting club at Incheon National University.\n\nOur motto is \"Let's try making anything we can with our hands.\" From perfumes and candles to resin art and soap, anyone interested in creating is welcome—regardless of skill level, student year, age, or gender.\n\nIf you're curious about what we do, check out more of our activities on Instagram @inugongbang."
    },
    {
      "division": "VOLUNTEER",
      "name": "로타랙트",
      "location": "17-201",
      "summary": "Volunteer Club - Community service and social responsibility projects.",
      "description": "Rotaract is a long-standing volunteer club at Incheon National University, run in partnership with the Gyeyang Rotaract chapter.\n\nFor over 30 years, we've been an active and proud part of the INU community. If you're tired of the ordinary campus life and want to explore a bigger world—building connections, engaging in volunteer work, and joining global activities—Rotaract is the place for you.\n\nWe offer opportunities to participate in service projects and network with Rotaract clubs from other universities. There are no restrictions based on major, year, age, or gender. Everyone is welcome!"
    },
    {
      "division": "VOLUNTEER",
      "name": "초아다솜",
      "location": "11-409",
      "summary": "Good Neighbors Volunteer Club - International humanitarian aid and local community support.",
      "description": "ChoaDasom is a central club at Incheon National University affiliated with Good Neighbors Incheon.\n\nFounded in 2011 as a volunteer group within the Department of Social Welfare, ChoaDasom became an official INU central club in 2016. For over a decade, the club has focused on advocating for children's rights through a wide range of activities.\n\nThe club is organized into three teams: Education, Campaign, and PR, each conducting both individual and group activities based on their focus area.\n\nAny INU student interested in NGO work is welcome to join, regardless of major or year.\nFollow @gn_incheon on Instagram to learn more about the activities of ChoaDasom and Good Neighbors.\n\nMembers may also receive a pre-internship opportunity (plus points) when applying to Good Neighbors in the future.\n\nIf you're passionate about children's rights, want NGO experience, and hope to contribute to positive social change, we invite you to join us!"
    },
    {
      "division": "VOLUNTEER",
      "name": "느을사랑",
      "location": "17-326",
      "summary": "Animal Volunteer Club - Care for animals and promote animal welfare.",
      "description": "Neulsarang is a long-standing volunteer club at Incheon National University, founded in 1992 and still actively operating today.\n\nThe club is primarily dedicated to volunteering for abandoned and injured dogs, putting love for animals into action. In addition, it participates in regional service projects through joint activities with volunteer clubs from other universities. To support a fulfilling campus life and personal growth, Neulsarang also hosts various bonding events.\n\nWhat makes Neulsarang special is its welcoming atmosphere—members from different majors frequently gather in the club room, whether on weekdays or weekends, allowing for consistent interdepartmental exchange. Volunteer work and internal events help build strong connections between juniors and seniors.\n\nIf you're a freshman looking for a vibrant campus experience, don't hesitate to visit Room 326 in Building 17 (Student Union Building). Neulsarang is looking for someone to lie down—and belong—with love."
    },
    {
      "division": "RELIGIOUS",
      "name": "JOY선교회",
      "location": "17-415",
      "summary": "Religious Club - Christian fellowship, worship, and spiritual growth.",
      "description": "JOY Mission is a Christian missionary organization based on the JOY spirit—putting **Jesus first, Others second, and Yourself last**—believing that true joy comes from this order. It works in partnership with local churches.\n\nJOY is active across six regions including Seoul, Gyeongin, and Jeonju, operating in over 50 campuses and five countries in Asia.\n\nThe Incheon National University JOY Mission chapter began in 1990 and supports students' spiritual lives through worship, evangelism, prayer meetings, discipleship training, MTs, national summer retreats, winter regional retreats, and overseas mission trips.\n\nYou don't need to be a Christian or a freshman to join. Anyone is welcome to be part of this joyful and sincere community.\n\nRegular meetings: Every Thursday at 6:30 PM in the music room on the 2nd floor of the Student Welfare Center\nClub room: Room 423, Student Welfare Center"
    },
    {
      "division": "RELIGIOUS",
      "name": "CFM",
      "location": "17-427",
      "summary": "Religious Club - Christian faith community with Bible study and fellowship.",
      "description": "Regular Meetings: During semesters with in-person classes, we meet every Monday at 6:00 PM in the club room for sign language practice, worship, and fellowship over meals. During vacation periods or online semesters, the time and location may vary depending on circumstances.\n\nRegular Performances: Once per semester, in spring and fall, we hold sign language performances on campus.\n\nRetreats and MTs: In collaboration with CFM clubs from other universities, we host retreats once each in summer and winter during breaks, and MTs once each in spring and fall during the semester."
    },
    {
      "division": "RELIGIOUS",
      "name": "IVF",
      "location": "17-426",
      "summary": "Religious Club - Inter-Varsity Fellowship for Christian students.",
      "description": "The Korea InterVarsity Christian Fellowship (IVF) is an evangelical student movement active on over 150 campuses nationwide, operating under the motto \"Advancing God's Kingdom on Campus and in the World.\"\n\nIVF is built on six core values: evangelical spirit, raising people through ministry, collaborative community, Christian intellect, field-centered initiative, and holistic gospel mission. Guided by these principles, we strive to reveal God's sovereignty and reign through our daily lives.\n\nOur regular activities include weekly Tuesday worship services (LGM), Thursday small groups, and daily morning campus prayers (DPM). We also engage with social and mission-related issues through reflection and hands-on experiences to deepen our faith.\n\nSmall group meetings may include Bible reading and sharing, shared meals, or even trips together if members wish.\n\nIf you're looking for a faith community on campus where you can worship, read the Word, and share life with others, feel free to stop by and join us!"
    },
    {
      "division": "RELIGIOUS",
      "name": "JDM",
      "location": "17-327",
      "summary": "Religious Club - Christian discipleship and mission-focused community.",
      "description": "Q. What is JDM?\nA. JDM stands for **Jesus Disciple Movement**, a Christian club focused on campus missions and discipleship.\n\n**JDM Activities**\n\n1. **Chapel**: A weekly worship service where JDM members at INU gather to praise and worship together.\n2. **Small Groups**: One of the most essential parts of JDM, where members and leaders meet to study the Bible, share life stories, and enjoy fellowship.\n3. **Bible Conference**: Held once a year by region, it's a time for in-depth Bible study and gaining a deeper understanding of Scripture.\n4. **Seasonal Gatherings**: In summer, a national college conference is held; in winter, regional retreats take place. These gatherings provide a time of worship and prayer even during school breaks."
    },
    {
      "division": "RELIGIOUS",
      "name": "CCC",
      "location": "17-424",
      "summary": "Religious Club - Campus Crusade for Christ, evangelism and discipleship.",
      "description": "CCC is a Christian club with the slogan \"MOVEMENT EVERYWHERE,\" dedicated to spiritual multiplication.\\n\\nAs of May 2023, Incheon National University's CCC has around 90 members and hosts regular worship services and various small group gatherings. A core part of our activities includes weekly one-on-one mentor-mentee meetings, and all members come together for a campus-wide meeting every Monday.\\n\\nWe also actively engage in missions and retreats during breaks, including overseas missions, summer retreats, and fasting retreats.\\n\\nWhether you're already a Christian or just curious, you're welcome to join us in learning about God's love and enjoying a joyful campus life together."
    },
    {
      "division": "RELIGIOUS",
      "name": "가톨릭학생회",
      "location": "17-428",
      "summary": "Religious Club - Catholic student community for worship and service.",
      "description": "The Catholic Student Association is located in Room 428 of the Student Union Building and engages in various Catholic-related activities.\\n\\nWe hold regular meetings with members each week and a monthly Mass with a diocesan priest. The club also participates in joint Masses with other universities, such as Inha University and Incheon Catholic University. Seasonal events like making Easter eggs and Advent wreaths are also part of our activities.\\n\\nWe host many social events, including MTs and sports days. True to the warm and supportive nature of the Catholic community, alumni remain actively involved, with many gatherings continuing even after graduation."
    }
  ];

  useEffect(() => {
    // Find the club data based on the club name from URL params
    const foundClub = clubsData.find(club => 
      club.name.toLowerCase() === clubName?.toLowerCase()
    );
    
    if (foundClub) {
      setClubData(foundClub);
    }
    setLoading(false);
  }, [clubName]);

  const handleJoin = () => {
    alert('This function will be adding.');
  };

  if (loading) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate('/clubs')}>
            <ArrowBackIcon />
          </BackButton>
          <Title>Club Details</Title>
        </Header>
        <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>
      </Container>
    );
  }

  if (!clubData) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate('/clubs')}>
            <ArrowBackIcon />
          </BackButton>
          <Title>Club Details</Title>
        </Header>
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          Club not found
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/clubs')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Club Details</Title>
      </Header>

      <Content>

        <ClubInfo>
          <ClubName>{clubData.name}</ClubName>
          <ClubCategory>{clubData.division}</ClubCategory>
          <ClubDescription>{clubData.summary}</ClubDescription>
          
          <InfoSection>
            <SectionTitle>About This Club</SectionTitle>
            <div style={{ 
              fontSize: '14px', 
              lineHeight: '1.6', 
              color: '#666',
              whiteSpace: 'pre-line' 
            }}>
              {clubData.description}
            </div>
          </InfoSection>
        </ClubInfo>

        <JoinButton onClick={handleJoin}>
          Join {clubData.name}
        </JoinButton>
      </Content>
    </Container>
  );
};

export default ClubsPost;