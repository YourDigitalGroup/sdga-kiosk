(function () {
const P = s => 'SDGA v2 Page.dc.html?p=' + s;
const JOIN = 'https://sdga.clubdashboard.org/join';
const GG = 'https://www.golfgenius.com/pages/1473507';
const HUB = 'https://golfhub.golfgenius.com/hubs/14cba988-67f6-4232-8251-9fcf676a80ef';
const L = (label, href, ext) => ({ label, href, ext: !!ext });

window.SDGA_NAV = [
  { label: 'Membership', blurb: 'Handicap Index, the GHIN app, golf discounts and more. Join or renew for $49.', groups: [{ links: [
    L('SDGA Membership FAQs', P('membership-faqs')), L('SDGA Membership Join/Renew', JOIN, 1), L('SDGA Golf Discount Card', P('golf-discount-card')),
    L('World Handicap System', P('world-handicap-system')), L('GHIN Mobile App', P('ghin-mobile-app')), L('Volunteer & Serve', P('volunteer-and-serve'))] }] },
  { label: 'Competitive Golf', blurb: '30 state championships, USGA qualifiers and the SoDak Cup.', groups: [{ links: [
    L('SDGA Championships – PLAY!', P('championships')), L('Golf Genius Player Profile Sign-In', GG, 1), L('USGA Qualifiers', P('usga-qualifiers')),
    L('Match Play Format', P('match-play-format')), L('SoDak Cup', P('sodak-cup')), L('Golfers of the Year', P('golfers-of-the-year')),
    L('SDGA Championship History', P('championship-history')), L('Rules of Golf', P('rules-of-golf')), L('Volunteer & Serve', P('volunteer-and-serve'))] }] },
  { label: 'Junior Golf', blurb: 'Three tours serving one mission — the Mini, Prep and Series Tours.', groups: [{ links: [
    L('SDGA Junior Tour – PLAY!', P('junior-tour')), L('Golf Genius Player Profile Sign-In', GG, 1), L('Season Points – Jr. Tour, Series & Team SD', P('season-points')),
    L('Team South Dakota', P('team-south-dakota')), L('Junior PGA Championship Qualifying', P('junior-pga-qualifying')), L('Notah Begay III Qualifier', P('notah-begay-qualifier')),
    L('Drive, Chip & Putt', P('drive-chip-putt')), L('Volunteer & Serve', P('volunteer-and-serve'))] },
    { title: 'Junior Golf Foundation', links: [
    L('SDGA Junior Golf Foundation', P('jr-golf-foundation')), L('Ways to Give', P('ways-to-give')), L('Junior Golf Scholarships', P('junior-golf-scholarships')),
    L('First Tee – South Dakota', 'https://www.firstteesouthdakota.org/', 1), L('Team South Dakota', P('team-south-dakota'))] }] },
  { label: 'Member Golf', blurb: 'Play, save and post scores at 90+ member clubs across the state.', groups: [{ links: [
    L('Club Directory', 'SDGA v2 Club Directory.dc.html'), L('SDGA Golf Discount Card', P('golf-discount-card')), L('Statewide Events/Leagues/Clinics', HUB, 1),
    L('GHIN Mobile App', P('ghin-mobile-app')), L('World Handicap System', P('world-handicap-system'))] }] },
  { label: 'Hall of Fame', blurb: 'Honoring the people who have shaped golf in South Dakota.', groups: [{ links: [
    L('2026 Annual Banquet & Hall of Fame Induction', P('hof-banquet')), L('South Dakota Golf Hall of Fame', 'SDGA v2 Hall of Fame.dc.html'),
    L('Nomination Process', P('nomination-process')), L('Hall of Fame Classic', P('hof-classic'))] }] },
  { label: 'More', blurb: 'About the SDGA, news, careers and how to get involved.', groups: [{ links: [
    L('About SDGA', P('about')), L('SDGA Membership Join/Renew', JOIN, 1), L('Volunteer & Serve', P('volunteer-and-serve')), L('Employment', P('employment')),
    L('News', P('news')), L('Contact', P('contact')), L('Rules of Golf', P('rules-of-golf'))] }] }
];

const pending = (section, title, src, intro) => ({ section, title, intro: intro || '', blocks: [{ t: 'pending', src }] });

window.SDGA_PAGES = {
  'membership-faqs': {
    section: 'Membership', title: 'SDGA Membership FAQs',
    intro: 'More than a membership — an investment in the future of golf in South Dakota.',
    blocks: [
      { t: 'h2', text: 'Why join the SDGA?' },
      { t: 'p', text: 'When you join the South Dakota Golf Association, you become part of something bigger than the game itself. You join a community of golfers committed to protecting, preserving, and advancing the game for future generations.' },
      { t: 'p', text: 'Your membership directly supports the growth of golf across South Dakota—while giving you access to tools, competitions, and experiences that enhance your own enjoyment of the game.' },
      { t: 'h2', text: 'Membership benefits' },
      { t: 'cards', items: [
        { title: 'Establish your Handicap Index', href: P('world-handicap-system'), text: 'The SDGA is South Dakota’s official provider of the World Handicap System™ through the USGA. A Handicap Index allows you to compete fairly with golfers of all skill levels—anywhere in the world—while tracking your progress over time.' },
        { title: 'Access the GHIN mobile app', href: P('ghin-mobile-app'), text: 'Complimentary access to the GHIN app, powered by the USGA. Post scores, track statistics, follow friends, and access GPS-enabled course maps at thousands of courses worldwide.' },
        { title: 'Grow the game through junior golf', href: P('junior-tour'), text: 'Your membership helps sustain junior golf across the state. The SDGA Junior Tour features more than 40 events statewide, providing affordable, competitive, and fun experiences.' },
        { title: 'Support Team South Dakota', href: P('team-south-dakota'), text: 'As part of the USGA’s United States National Development Program, Team South Dakota identifies and develops the state’s top junior talent.' },
        { title: 'Compete in SDGA Championships', href: P('championships'), text: 'Members are eligible to compete in State Championships for players of all skill levels. With flighted divisions, you’ll compete against golfers like you.' },
        { title: 'Save with the Golf Discount Card', href: P('golf-discount-card'), text: 'Add the SDGA Golf Discount Card for just $20 (a $45 value) and enjoy reduced rates at more than 60 courses. Many members recover the cost in one round.' },
        { title: 'Strengthen South Dakota golf courses', text: 'The SDGA supports member clubs with course rating services, tournament management tools, operational resources, and “grow the game” initiatives.' },
        { title: 'Honor the game’s legacy', href: 'SDGA v2 Hall of Fame.dc.html', text: 'The SDGA Golf Hall of Fame celebrates the individuals who have shaped golf in South Dakota. Your membership helps preserve its history and traditions.' },
        { title: 'Exclusive Member Play Days', text: 'Experience some of South Dakota’s premier private clubs through relaxed, non-competitive Member Play Days.' },
        { title: 'Support golf in South Dakota', text: 'Even if you don’t need a Handicap Index or plan to compete, your membership helps the SDGA support, preserve, and advance the game.' }
      ] },
      { t: 'callout', title: 'Ready to become a member?', text: 'Join or renew your SDGA Membership today for just $49. Be part of the game’s future in South Dakota.', label: 'Join / Renew — $49', href: 'https://sdga.clubdashboard.org/' },
      { t: 'h2', text: 'What is the SDGA Golf Discount Card?' },
      { t: 'p', text: 'The SDGA Golf Discount Card is a great way to save when playing at your favorite South Dakota courses, with over 60 golf courses participating. It is the only card that supports the SDGA and our programs to advance the game and assist our member courses.' },
      { t: 'p', text: 'Anyone can purchase the card for $45, but the best deal is to join the SDGA and add the card for only $20.' },
      { t: 'h2', text: 'How do I purchase the card?' },
      { t: 'p', text: 'Join or renew your SDGA Membership online, activate your Handicap Index, and add the SDGA Golf Discount Card for only $20.' },
      { t: 'buttons', items: [
        { label: 'Join/Renew SDGA + Discount Card', href: 'https://sdga.clubdashboard.org/', primary: true },
        { label: 'Add card to existing membership — $20', href: 'https://discount.sdga.org/capi_online_membership/passport/' },
        { label: 'Card only (non-members) — $45', href: 'https://discount.sdga.org/capi_online_membership/passport_nm/' }
      ] },
      { t: 'h2', text: 'How do I use the card?' },
      { t: 'p', text: 'There are two ways to redeem your SDGA Golf Discount Card at participating courses: print the voucher, or pull up the course offer on your phone and show it to the pro shop attendant.' },
      { t: 'h2', text: 'Contact us' },
      { t: 'p', text: 'Questions about SDGA Membership or the Golf Discount Card? Email sdgainfo@sdga.org or call 605-800-6709.' }
    ],
    sidebar: [{ title: 'Links', links: [
      L('Join/Renew – Get a Handicap Index', 'https://sdga.clubdashboard.org/', 1),
      L('Add Discount Card to Membership', 'https://discount.sdga.org/capi_online_membership/passport/', 1),
      L('Purchase SDGA Golf Card Only', 'https://discount.sdga.org/capi_online_membership/passport_nm/', 1),
      L('Donate Now', 'https://www.golfgenius.com/pages/1846474', 1)] }]
  },

  'golf-discount-card': {
    section: 'Membership', title: 'SDGA Golf Discount Card',
    intro: 'Save at courses across South Dakota. For $45 — or $20 with your SDGA membership — get great discounts at most public courses in the state.',
    blocks: [
      { t: 'image', src: 'assets/sdga-golf-card.png', alt: 'SDGA Golf Card', w: '340px', radius: '14px' },
      { t: 'p', text: 'It takes as little as one or two uses to pay for the card. It gets even better for SDGA members: with your SDGA membership you can add the SDGA Golf Discount Card for only $20.' },
      { t: 'buttons', items: [
        { label: 'Join/Renew + Golf Discount Card', href: 'https://sdga.clubdashboard.org/', primary: true },
        { label: 'Existing SDGA members — $20', href: 'https://discount.sdga.org/' },
        { label: 'Discount card only — $45', href: 'https://discount.sdga.org/' },
        { label: 'Card holders log in', href: 'https://discount.sdga.org/' }
      ] },
      { t: 'h2', text: 'Deals' },
      { t: 'deals', items: [
        ['Alcester Golf Club','Alcester','Pay 9 hole green fee and play 18 holes.','Cart required. Not available after 3pm on Tuesdays and Thursdays.'],
        ['Belle Fourche Country Club','Belle Fourche','Pay 9 hole green fee and play 18 holes.','Cart required. Call for tee times. ONE USE.'],
        ['Bon Homme Golf Course','Tyndall','Pay 9 hole green fee and play 18 holes.','ONE USE.'],
        ['Boulder Canyon Golf Club','Sturgis','Pay 9 hole green fee and play 18 holes.','Cart required. Monday–Thursday any time. Excluding holidays.'],
        ['Bowdle Golf Club','Bowdle','Pay 9 hole green fee and play 18 holes.','Cart required.'],
        ['Brandon Golf Course','Brandon','Pay 9 hole green fee and play 18 holes.','Cart required. Monday–Friday any time.'],
        ['Bridges at Beresford Golf Course','Beresford','Pay 9 hole green fee and play 18 holes.','Cart required. Monday–Thursday and before noon Friday. TWO USES.'],
        ['Britton Country Club','Britton','Pay 9 hole green fee and play 18 holes.','Monday–Friday. No holidays.'],
        ['Broadland Creek Golf Course','Huron','18 holes with cart – $25.','Monday–Friday. No holidays.'],
        ['Brookings Country Club','Brookings','Pay 9 hole green fee and play 18 holes.','Monday–Thursday any time. THREE USES.'],
        ['Cattail Crossing Golf Course','Watertown','Complimentary round with a round purchased at full price.','Monday–Thursday before 3pm. ONE USE.'],
        ['Central Valley Golf Course','Hartford','Free range token with a paid 18 hole green fee.',''],
        ['Chamberlain Country Club','Chamberlain','Pay 9 hole green fee and play 18 holes.','Cart required. ONE USE.'],
        ['Clark Golf Course','Clark','Pay 9 hole green fee and play 18 holes.','Monday–Friday. No holidays.'],
        ['Clear Lake Golf Course','Clear Lake','Complimentary round with a round purchased at full price.',''],
        ['Edgebrook Golf Course','Brookings','Pay 9 hole green fee and play 18 holes.','TWO USES.'],
        ['Elks 1187 Golf Course','Rapid City','Pay 9 hole green fee and play 18 holes.','Cart and tee time required. Mon, Tue, Thu & Fri. ONE USE.'],
        ['Elmwood Golf Course – East 9','Sioux Falls','$3 off 9 holes.','Monday–Friday. No holidays.'],
        ['Elmwood Golf Course','Sioux Falls','Pay 9 hole green fee and play 18 holes.','Cart required. Mon–Thu any time & Fri before noon. No holidays. THREE USES.'],
        ['Fish Lake Country Club','Plankinton','Pay 9 hole green fee and play 18 holes.','Cart required. No holidays. FOUR USES.'],
        ['Fisher Grove Country Club','Redfield','50% off green fee anytime except Tue & Wed after noon.','Motorized cart required.'],
        ['Fox Run Golf Course','Yankton','Free range token with a paid 18 hole green fee.',''],
        ['Gettysburg Country Club','Gettysburg','Pay 9 hole green fee and play 18 holes.','Cart required.'],
        ['Glenridge Golf Course','Irene','Pay 9 hole green fee and play 18 holes.','Monday–Friday. No holidays.'],
        ['Golf Club at Red Rock','Rapid City','10% off 18 hole green fees/cart fees.','Monday–Tuesday. No holidays.'],
        ['Hart Ranch Golf Club','Rapid City','$10 off 18 hole green fee.','Monday–Thursday. No holidays.'],
        ['Huron Country Club','Huron','Complimentary round with a round purchased at full price.','Monday–Friday. No holidays.'],
        ['Kingsbury County Country Club','De Smet','Pay 9 hole green fee and play 18 holes.','Cart required.'],
        ['Kuehn Park Golf Course','Sioux Falls','$3 off 9 holes.','Monday–Friday. No holidays.'],
        ['Lake Region Golf Course','Arlington','Pay 9 hole green fee and play 18 holes.','Cart required. Monday–Thursday any time. Excluding holidays.'],
        ['Lake Waggoner Golf Course','Philip','Pay 9 hole green fee and play 18 holes.','Not valid Monday–Wednesday after 2pm.'],
        ['Lakeside Country Club','Faulkton','Complimentary green fee with cart rental.','ONE USE.'],
        ['Lakeview Golf Course','Mitchell','Complimentary round with a round purchased at full price.','Cart required. THREE USES.'],
        ['Lead Country Club','Lead','Pay 9 hole green fee and play 18 holes.','Cart required. Monday–Thursday.'],
        ['Lee Park Golf Course','Aberdeen','Pay 9 hole green fee and play 18 holes.','Cart required. Monday–Thursday.'],
        ['Madison Country Club','Madison','Pay 9 hole green fee and play 18 holes.','Cart required. ONE USE.'],
        ['McCook Country Club','Salem','Pay 9 hole green fee and play 18 holes.','Cart required. Any time except Thursdays.'],
        ['Meadow Creek Golf Course','Volga','Pay for 9, play 18.','Monday–Thursday before noon. No holidays.'],
        ['Meadowbrook Golf Club','Rapid City','10% off green fees & carts.',''],
        ['Miller Golf Course','Miller','Pay 9 hole green fee and play 18 holes.',''],
        ['Murdo Golf Course','Murdo','Pay 9 hole green fee and play 18 holes.',''],
        ['Northern Links Golf Course','Sioux Falls','Pay 9 hole green fee and play 18 holes.','Monday–Thursday before 2pm.'],
        ['Oahe Hills Golf Course','Mobridge','Pay 9 hole green fee and play 18 holes.','Monday–Thursday.'],
        ['Olive Grove Golf Course','Groton','Pay 9 hole green fee and play 18 holes.',''],
        ['Parkston Country Club','Parkston','Complimentary round with a round purchased at full price.',''],
        ['Prairie Green Golf Course','Sioux Falls','Pay 9 hole green fee and play 18 holes.','Mon–Thu any time & Fri before noon. No holidays. THREE USES.'],
        ['Prairie Ridge Golf Course','Box Elder','Pay 9 hole green fee and play 18 holes.','Monday–Friday any time. Cart and tee time required.'],
        ['Prairie Winds Golf Course','Watertown','Pay 9 hole green fee and play 18 holes.','Monday–Thursday any time. THREE USES.'],
        ['Rivers Bend Country Club','Flandreau','Pay 9 hole green fee and play 18 holes.','Cart required.'],
        ['River Ridge Golf Course','Garretson','Complimentary round with a round purchased at full price.','Cart required. FOUR USES.'],
        ['Rocky Knolls Golf Club','Custer','Pay 9 hole green fee and play 18 holes.','Cart required. ONE USE.'],
        ['Rocky Run Golf Course','Dell Rapids','Free range token with a paid 18 hole green fee.',''],
        ['Rolling Hills Golf Club','Aberdeen','Pay 9 hole green fee and play 18 holes.','Cart rental required.'],
        ['Southern Hills Golf Course','Hot Springs','10% off green fee and cart.',''],
        ['Spearfish Canyon Country Club','Spearfish','Free cart with the purchase of a green fee.',''],
        ['Springfield Golf Course','Springfield','Complimentary 9 hole green fee when you rent a motorized cart.','ONE USE.'],
        ['The Creek Golf Course','Harrisburg','Pay 9 hole green fee and play 18 holes.','Cart required. Monday–Friday. TWO USES.'],
        ['The Lakes Golf Course','Lake Madison','Pay 9 hole green fee and play 18 holes.','Cart required. Monday–Friday.'],
        ['Tomahawk Lake Country Club','Deadwood','20% off 9 hole green fee.','Cart required. Monday–Friday.'],
        ['Valley View Country Club','Sisseton','Pay 9 hole green fee and play 18 holes.',''],
        ['Valley View Golf Course','Freeman','Pay 9 hole green fee and play 18 holes.','Cart required. ONE USE.'],
        ['Webster Municipal Golf Course','Webster','Pay 9 hole green fee and play 18 holes.',''],
        ['Whetstone Creek Golf Course','Milbank','Pay 9 hole green fee and play 18 holes.','Cart required.'],
        ['Wild Oak Golf Club','Mitchell','Pay 9 hole green fee and play 18 holes.','Cart required.']
      ].map(d => ({ title: d[0], meta: d[1], text: d[2], note: d[3] })) }
    ],
    sidebar: [{ title: 'Purchase', links: [
      L('Join/Renew + Discount Card', 'https://sdga.clubdashboard.org/', 1), L('Existing Members — $20', 'https://discount.sdga.org/', 1),
      L('Card Only — $45', 'https://discount.sdga.org/', 1), L('Card Holder Login', 'https://discount.sdga.org/', 1)] }]
  },

  'world-handicap-system': {
    section: 'Membership', title: 'World Handicap System',
    intro: 'Since January 1, 2020, handicaps around the world have been calculated using one uniform set of policies. Join the SDGA and receive a Handicap Index after posting just 54 holes.',
    blocks: [
      { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2022/03/SDGA_WHS_RGB-768x350.png', alt: 'SDGA World Handicap System', w: '360px' },
      { t: 'p', text: 'With a Handicap Index you can play on an even footing with any other player with a Handicap Index, from any set of tees. As part of ongoing efforts to keep the WHS evolving with the modern game, key revisions took effect in the United States in 2024.' },
      { t: 'buttons', items: [{ label: 'Learn about the 2024 revisions', href: 'https://www.usga.org/content/usga/home-page/handicapping/world-handicap-system/2024-revision.html', primary: true }, { label: 'USGA Handicapping', href: 'https://www.usga.org/content/usga/home-page/handicapping.html' }] },
      { t: 'cards', items: [
        { title: 'Daily Handicap Revisions', text: 'Your Handicap Index is updated every day, so post scores immediately after completing your round.' },
        { title: 'Handicap Calculation', text: 'New golfers can establish a handicap with only three rounds; your handicap uses the best eight of your last 20 score differentials.' },
        { title: 'Playing Conditions Calculation', text: 'If conditions cause scores to be abnormally high or low on a given day, the PCC adjusts all scores posted that day.' },
        { title: 'Exceptional Score Reduction', text: 'Any score more than seven strokes better than your index adjusts all scores in your profile by 1 or 2 strokes.' },
        { title: 'Caps', text: 'The amount a Handicap Index can increase in any 12-month period is limited to five strokes.' },
        { title: 'Net Double Bogey', text: 'The maximum score for any hole is Par + 2 + any handicap strokes received.' }
      ] },
      { t: 'h2', text: 'Daily Handicap Revisions' },
      { t: 'p', text: 'With the World Handicap System, the Handicap Index is computed and updated daily. This makes playing more fun and fair, as handicaps always include the latest scores. For new players, a Handicap Index is computed the day after they post the minimum 54 holes of play.' },
      { t: 'p', text: 'Daily revisions (and the Playing Conditions Calculation) make it imperative that players post their scores before midnight on the date played.' },
      { t: 'buttons', items: [{ label: 'Download poster', href: 'https://www.sdga.org/wp-content/uploads/2022/03/WHS_Daily_Revisions_Poster-scaled.jpg' }] },
      { t: 'h2', text: 'Handicap Calculation' },
      { t: 'p', text: 'Getting a Handicap Index is easy and very affordable, even if you’re a newer golfer. With a handicap you can:' },
      { t: 'list', items: ['Track your progress over time.', 'Play against golfers of different ability.', 'Easily figure out your Course Handicap at different courses and from any tee box.'] },
      { t: 'p', text: 'Once a full playing profile of 20 scores is reached, a player’s Handicap Index is calculated using the lowest eight of the most recent 20 scores.' },
      { t: 'buttons', items: [{ label: 'Download poster', href: 'https://www.sdga.org/wp-content/uploads/2022/03/WHS_Maximum_Handicap_Poster-scaled.jpg' }] },
      { t: 'h2', text: 'Playing Conditions Calculation' },
      { t: 'p', text: 'The Course Rating System is the cornerstone of handicapping and measures the difficulty of a course under normal conditions. But a good score on a normal day may turn mediocre when the weather is challenging, and tough setups or seasonal conditions can have a significant impact.' },
      { t: 'p', text: 'The Playing Conditions Calculation (PCC) is triggered when abnormal conditions cause scores to be unusually high or low on a given day. It is an automated, conservative statistical procedure that requires at least eight scores submitted on the day of play. Players should post scores immediately after play so the PCC is applied when appropriate.' },
      { t: 'buttons', items: [{ label: 'Download poster', href: 'https://www.sdga.org/wp-content/uploads/2022/03/WHS_PCC_Poster-scaled.jpg' }] },
      { t: 'h2', text: 'Exceptional Score Reduction' },
      { t: 'p', text: 'Exceptional Score Reduction (ESR) handles scores that may indicate a player’s true ability. If a player posts a score differential 7.0 strokes or better than their Handicap Index, an automatic adjustment is applied to up to 19 of their previous scores, lowering their Handicap Index. Multiple ESR adjustments are cumulative.' },
      { t: 'buttons', items: [{ label: 'Download poster', href: 'https://www.sdga.org/wp-content/uploads/2022/03/WHS_Exceptional_Score_Poster-scaled.jpg' }] },
      { t: 'h2', text: 'Course and Playing Handicap' },
      { t: 'p', text: 'Your Handicap Index computes to a Course Handicap at any course you play — find it before your round on the handicap computer or GHIN app. It varies with the course’s slope rating and the tees you play.' },
      { t: 'p', text: 'Your Playing Handicap is your Course Handicap adjusted for any handicap allowances or Terms of the Competition — for some events, players receive only a percentage (80%, 85%, etc.) of their Course Handicap.' },
      { t: 'buttons', items: [{ label: 'Download poster', href: 'https://www.sdga.org/wp-content/uploads/2022/03/WHS_Cap_Poster-scaled.jpg' }] },
      { t: 'h2', text: 'Soft and Hard Caps' },
      { t: 'p', text: 'The WHS limits upward movement of a Handicap Index based on the player’s Low Handicap Index from the previous 12 months. The Soft Cap suppresses upward movement by 50% after a 3.0 increase; the Hard Cap restricts upward movement to 5.0.' },
      { t: 'buttons', items: [{ label: 'Download poster', href: 'https://www.sdga.org/wp-content/uploads/2022/03/WHS_Playing_Handicap_Poster-scaled.jpg' }] },
      { t: 'h2', text: 'Net Double Bogey' },
      { t: 'p', text: 'Net Double Bogey reduces the effect of a bad hole or two on your posted score. Think of it as “Double Bogey Plus”:' },
      { t: 'callout', title: 'Par + 2 + any handicap strokes received on the hole', text: 'Example: a 9 handicap who makes a 10 on a par 5 with a stroke allocation of 7 posts 5 (par) + 2 + 1 (handicap stroke) = 8.' },
      { t: 'p', text: 'The best way to apply Net Double Bogey correctly is to post your score hole-by-hole on the GHIN app or clubhouse computer — the software adjusts affected holes automatically.' },
      { t: 'p', text: 'Most Likely Score is used whenever you start but don’t finish a hole: the strokes already taken plus the number it would take you to finish the hole most of the time.' },
      { t: 'buttons', items: [{ label: 'Download poster', href: 'https://www.sdga.org/wp-content/uploads/2022/03/WHS_Net_Double_Bogey_Poster-scaled.jpg' }] }
    ],
    sidebar: [{ title: 'Resources', links: [L('USGA Handicapping', 'https://www.usga.org/content/usga/home-page/handicapping.html', 1), L('World Handicap System', 'http://www.whs.com/', 1), L('Post a Score', 'https://www.ghin.com/login', 1)] }]
  },

  'ghin-mobile-app': { section: 'Membership', title: 'GHIN Mobile App', intro: 'One of the many benefits of SDGA Membership is FREE access to the GHIN Mobile App — packed with features.', blocks: [
    { t: 'cards', items: [
      { title: 'Full color course GPS', text: 'GPS at nearly every course in South Dakota and across the country. Touch-Point yardages from any point to the center of the green. Try the Enhanced version free for Shot Tracking, Heat Maps and Putt Break Maps.' },
      { title: 'Statistics', text: 'Post hole by hole and track fairways hit, greens in regulation and number of putts — and watch your game improve.' },
      { title: 'Course Handicap calculator', text: 'Compute your Course Handicap from any rated set of tees, and look it up for other players.' },
      { title: 'Follow your friends', text: 'Follow your golfing buddies to easily see their Handicap Index and compute their Course Handicap.' },
      { title: 'Games & group scorekeeping', text: 'Select Play with GPS/Games to keep score for your group and set up a match (with or without handicap). Send scores to friends at the end so they can review and post.' }
    ] },
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2022/03/GPS-Flyer.png', alt: 'GHIN GPS flyer', w: '520px' },
    { t: 'buttons', items: [{ label: 'Watch: Play with GPS', href: 'https://www.sdga.org/wp-content/uploads/2022/03/Play-with-GPS.mp4', primary: true }, { label: 'Join / Renew SDGA Membership', href: 'https://sdga.clubdashboard.org/' }] }
  ],
  sidebar: [{ title: 'Links', links: [L('Join/Renew SDGA Membership', 'https://sdga.clubdashboard.org/', 1), L('Donate Now', 'https://www.golfgenius.com/pages/1846474', 1)] },
    { title: 'Forms & resources', links: [L('World Handicap System', P('world-handicap-system')), L('SDGA Golf Discount Card', P('golf-discount-card'))] }] },
  'volunteer-and-serve': { section: 'More', title: 'Volunteer & Serve', intro: 'There are many ways to help the SDGA administer quality events, serve our member clubs, and grow the game.', blocks: [
    { t: 'h2', text: 'Volunteer opportunities' },
    { t: 'p', text: 'If you are looking to give back to the game, here are some of the ways that you can serve.' },
    { t: 'cards', items: [
      { title: 'Board of Directors', text: 'The SDGA Board focuses on our Championships and growing membership. The Junior Golf Foundation Board focuses on fundraising and junior golf, including scholarships and First Tee — South Dakota. Review the Board Expectations and complete the application.' },
      { title: 'Rules of Golf', href: P('rules-of-golf'), text: 'We need qualified rules officials at SDGA events, USGA qualifiers, SD High School Championships and more. Qualified officials may become eligible to officiate at USGA Championships. Contact Tom Jansa at tom@sdga.org.' },
      { title: 'Course Rating™', text: 'Our Course Rating team — an SDGA staff member and trained volunteers — rates 10–15 courses a year using the USGA Course Rating System. If you have a knack for data and like to travel, contact Joel McCartney at joel@sdga.org.' },
      { title: 'Championships', href: P('championships'), text: 'You don’t need to be a rules expert. We always need volunteers for player relations and to monitor play — it’s fun to be “inside the ropes.” Contact Dean Zahn at dean@sdga.org.' },
      { title: 'First Tee — South Dakota', href: 'https://www.firstteesouthdakota.org/', text: 'A rewarding experience with young golfers. Programs in Sioux Falls, Aberdeen, Rapid City, Brookings and Dell Rapids — help bring First Tee to your community. Contact Kelli@firstteesouthdakota.org.' }
    ] },
    { t: 'callout', title: 'Ready to help?', text: 'Tell us how you’d like to get involved and we’ll be in touch.', label: 'Volunteer interest form', href: 'https://forms.gle/oJm3sjYnB12LHg219' }
  ],
  sidebar: [{ title: 'Links', links: [L('Rules of Golf', P('rules-of-golf')), L('Course Rating', 'https://www.sdga.org/wp-content/uploads/2023/01/Course-Rating-Content-for-SDGA.org-.pdf', 1), L('Championships', P('championships')), L('First Tee — South Dakota', 'https://www.firstteesouthdakota.org/', 1), L('Donate Now', 'https://www.golfgenius.com/pages/1846474', 1)] },
    { title: 'Forms & resources', links: [L('Volunteer Interest Form', 'https://forms.gle/oJm3sjYnB12LHg219', 1), L('SDGA Board Expectations', 'https://www.sdga.org/wp-content/uploads/2022/12/SDGA-Board-Information.pdf', 1), L('SDGA Board Application', 'https://forms.gle/hYdJyU9vTCPbMj4JA', 1), L('Jr Golf Foundation Board Expectations', 'https://www.sdga.org/wp-content/uploads/2022/12/SDGA-Junior-Golf-Foundation-Board-Information-1.pdf', 1), L('Jr Golf Foundation Board Application', 'https://forms.gle/hYdJyU9vTCPbMj4JA', 1)] }] },

  'championships': {
    section: 'Competitive Golf', title: 'SDGA Championships',
    intro: 'Registration for championships opens February 1.',
    blocks: [
      { t: 'steps', items: [
        { title: 'Join or renew', text: 'You must join the SDGA or renew your membership. This activates your GHIN account and enables you to register for championships.' },
        { title: 'Golf Genius profile', text: 'Complete a Golf Genius Player Profile, or sign in if you have already created an account.' },
        { title: 'Choose your event', text: 'After signing in, scroll to the top of the sign-in page to choose the event category for registration.' }
      ] },
      { t: 'buttons', items: [{ label: 'Sign in or create your Golf Genius profile', href: GG, primary: true }, { label: 'Join / Renew', href: 'https://sdga.clubdashboard.org/' }] },
      { t: 'callout', title: 'New in 2026: updated eligibility', text: 'Eligibility to play in SDGA Championships has been updated. Review the SDGA Championship Player Eligibility Policy.', label: 'Eligibility policy (PDF)', href: 'https://www.sdga.org/wp-content/uploads/2026/04/Championship-Eligibility-Requirements-2026-v.4.pdf' },
      { t: 'h2', text: '2026 Championships' },
      { t: 'iframe', src: 'https://www.golfgenius.com/leagues/38321/customer_directories/10295/directory_iframe?filters=hide&header=true&leaderboards=false&league=38321&sort=descending', h: '640px' },
      { t: 'h2', text: '2026 SDGA Champions' },
      { t: 'champs', items: [
        ['Men’s Mid-Amateur','Lakeview GC','Chris Long','Ryan Ames & Bob West'],
        ['Two-Man Amateur','Elkhorn Ridge GC','Bob & Colby West','Ryan Trasamar & Charlie Jacobson; Tom Carlson & Ryan Jansa'],
        ['Two-Woman Amateur','Willow Run GC','Molly Stevens & Natalie Young','Julie & Reese Jansa'],
        ['Mid-Am Two-Woman','Willow Run GC','Karla Cotton & Jill Mollner','Aubrey O’Connell & Carissa Drackley'],
        ['Senior Two-Woman','Willow Run GC','Betsy Dewit & Lisa Dorsey','Cindy Olson & Marna Raburn'],
        ['Masters Two-Woman','Willow Run GC','Leanna Jenner & Susan Mulz','Julie King & Colette Quam'],
        ['Husband-Wife Amateur','The Bluffs GC','Ryan & Julie Jansa','Tyler & Danielle Evenson'],
        ['Senior Husband-Wife','The Bluffs GC','Rob & Betsy Dewit','Tim & Marna Raburn'],
        ['Masters Husband-Wife','The Bluffs GC','Alan Baker & Joan Hegerfeld-Baker','Steve & Cindy Weiland'],
        ['Mixed Team Amateur','The Bluffs GC','Derek Andersen & Reese Jansa','Brock Murphy & Molly Stevens'],
        ['Men’s Match Play','Moccasin Creek CC','Brandon Sigmund','Radley Mauney'],
        ['Women’s Match Play','Moccasin Creek CC','Allison Meyerink','Maddie Childs'],
        ['Men’s Senior Match Play','Meadowbrook GC','Steve Beardsley','Rob Hollan'],
        ['Men’s Masters Match Play','Meadowbrook GC','Duane Broek','Chuck Eide'],
        ['Women’s Senior Match Play','Meadowbrook GC','Marna Raburn','Dawn McInroy'],
        ['Adult/Junior 16–18','Golf Club at Red Rock','Tyson & Aric Blom','Harper & Jared Schnabel'],
        ['Boys’ Junior 16–18','Golf Club at Red Rock','Asher Dannenbring','Rylan Moran & Carter Peterson'],
        ['Girls’ Junior 16–18','Golf Club at Red Rock','Olivia Braun','Rylan Horning'],
        ['Women’s Mid-Amateur','Lee Park GC','Karla Cotton','Mikayla Santjer'],
        ['Women’s Senior','Lee Park GC','Julie Jansa','Marna Raburn'],
        ['Women’s Masters','Lee Park GC','Cindy Olson','Colette Quam'],
        ['Men’s Amateur','Elmwood GC','Parker Edens','Dakota Munger'],
        ['Women’s Amateur','Elmwood GC','Kaitlin Strain','Olivia Braun'],
        ['Men’s Pre-Senior','Hillsview GC','Michael Keeton','Jeff Meyerink'],
        ['Men’s Senior','Hillsview GC','Scott Holm','Pat Schmidt'],
        ['Men’s Masters','Hillsview GC','Bill Carland','William Olander'],
        ['Mid-Am Two-Man','Hillcrest G&CC','Ryan Ames & Riley Duncanson','Lane Sawatzke & Jace Guthmiller; Tom Carlson & Chris Long'],
        ['Pre-Senior Two-Man','Hillcrest G&CC','Charlie Jacobson & Matt Johnson','Jeff Salter & Ryan Jansa'],
        ['Senior Two-Man','Fox Run GC','Scott Holm & Pat Lockwood','Bryan Guischer & Pat Schmidt'],
        ['Masters Two-Man','Fox Run GC','Kyle Repp & Steve Weiland','Doug Murphy & Steve Beardsley']
      ].map(c => ({ title: c[0], meta: c[1], winner: c[2], runner: c[3] })) },
      { t: 'buttons', items: [{ label: 'Full 2026 results', href: 'https://www.golfgenius.com/leagues/38321/v2_customer_directories/10295' }] }
    ],
    sidebar: [
      { title: 'Links', links: [
        L('Join/Renew – Active Handicap Index (Step 1)', 'https://sdga.clubdashboard.org/', 1), L('Sign In / Create Golf Genius Profile (Step 2)', GG, 1),
        L('Enter SDGA Championships (Step 3)', GG, 1), L('SoDak Cup Points – Men & Women', 'https://www.golfgenius.com/pages/2580340', 1),
        L('SDGA Player Eligibility Policy', 'https://www.sdga.org/wp-content/uploads/2026/04/Championship-Eligibility-Requirements-2026-v.4.pdf', 1),
        L('SDGA Hard Card of Local Rules', 'https://www.sdga.org/wp-content/uploads/2026/01/2026-SDGA-Hard-Card.v2.pdf', 1)] },
      { title: 'Yearly results', links: [
        L('2026', 'https://www.golfgenius.com/ggid/yb66jg', 1), L('2025', 'https://www.golfgenius.com/ggid/ln8v6r?filters=show&header=false&leaderboards=false&season_id=4682&sort=descending', 1),
        L('2024', 'https://www.golfgenius.com/ggid/zhqhep?filters=show&header=false&leaderboards=false&season_id=3127&sort=descending', 1), L('2023', 'https://www.golfgenius.com/ggid/bl4jan?filters=show&leaderboards=false&season_id=2414&sort=descending', 1),
        L('2022', 'https://www.golfgenius.com/ggid/hcfnff?filters=show&leaderboards=false&season_id=1955&sort=descending', 1), L('2021', 'https://www.golfgenius.com/ggid/bgnbrm?filters=show&header=false&leaderboards=false&season_id=1331&sort=descending', 1),
        L('2020', 'https://www.golfgenius.com/ggid/fmbbwu?filters=show&leaderboards=false&season_id=919&sort=descending', 1), L('2019', 'https://www.golfgenius.com/ggid/sdga2019?filters=show&header=false&leaderboards=false&season_id=556&sort=descending', 1)] },
      { title: 'Schedules & recaps', links: [
        L('2028 Championship Schedule', 'https://www.sdga.org/wp-content/uploads/2026/09/2028-SDGA-Championship-Schedule.pdf', 1),
        L('2027 Championship Schedule', 'https://www.sdga.org/wp-content/uploads/2026/09/2027-SDGA-Championship-Schedule-v.23.pdf', 1),
        L('2026 Championship Schedule', 'https://www.sdga.org/wp-content/uploads/2026/09/2026-SDGA-Championship-Schedule-v.19.pdf', 1),
        L('2025 Championship Season Recap', 'https://www.sdga.org/wp-content/uploads/2025/10/2025-SDGA-Championship-Season-Recap-Google-Docs.pdf', 1)] }
    ]
  },
  'usga-qualifiers': { section: 'Competitive Golf', title: 'USGA Qualifiers', intro: 'The SDGA conducts USGA Qualifiers in South Dakota throughout the year.', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2023/01/SDGA-USGA-300x119.png', alt: 'SDGA and USGA', w: '240px' },
    { t: 'buttons', items: [{ label: 'Enter USGA Qualifiers', href: 'https://champ-admin.usga.org/player#/apply', primary: true }, { label: '2026 Qualifying information (PDF)', href: 'https://www.sdga.org/wp-content/uploads/2025/12/2026-USGA-SDGA-Qualifier-Info.pdf' }] },
    { t: 'iframe', src: 'https://www.golfgenius.com/leagues/38321/customer_directories/10296/directory_iframe?filters=hide&header=true&leaderboards=false&league=38321&sort=descending', h: '560px' },
    { t: 'p', text: 'Questions? Contact SDGA Director of Competitions Dean Zahn at dean@sdga.org.' }
  ],
  sidebar: [{ title: 'Links', links: [L('Enter USGA Qualifiers', 'https://champ-admin.usga.org/player#/apply', 1), L('Enter SDGA Championships', 'https://www.golfgenius.com/ggid/yb66jg', 1), L('SDGA-USGA Qualifying Info 2026', 'https://www.sdga.org/wp-content/uploads/2025/12/2026-USGA-SDGA-Qualifier-Info.pdf', 1)] },
    { title: 'Qualifying results', links: [L('2025', 'https://www.golfgenius.com/ggid/tk36gj?filters=show&header=false&leaderboards=false&season_id=4682&sort=descending', 1), L('2024', 'https://www.golfgenius.com/ggid/juwtxb?filters=show&header=false&leaderboards=false&season_id=3127&sort=descending', 1), L('2023', 'https://www.golfgenius.com/ggid/jdwkkr?filters=show&header=false&leaderboards=false&season_id=2414&sort=descending', 1), L('2022', 'https://www.golfgenius.com/ggid/jcb5bt?filters=show&header=false&leaderboards=false&season_id=1955&sort=descending', 1), L('2021', 'https://www.golfgenius.com/ggid/xdzymr?filters=show&header=false&leaderboards=false&season_id=1331&sort=descending', 1), L('2019', 'https://www.golfgenius.com/ggid/bdbvup?filters=show&header=false&leaderboards=false&season_id=556&sort=descending', 1)] }] },
  'match-play-format': { section: 'Competitive Golf', title: 'Match Play Format', intro: 'The POD format has grown SDGA Match Play to five divisions — bigger fields, more accessible qualifying, and greater value at the Championship.', blocks: [
    { t: 'h2', text: 'SDGA Match Play — 2026' },
    { t: 'tours', items: [
      { level: 'July 30 – Aug 2', title: 'Men’s Championship', facts: 'Moccasin Creek CC, Aberdeen · 64 players', text: 'Eight local qualifiers June 26 – July 24, plus a LAST CHANCE qualifier July 29 at Lee Park GC open to all players.', href: 'https://www.golfgenius.com/pages/5777432' },
      { level: 'July 31 – Aug 2', title: 'Women’s Championship', facts: 'Moccasin Creek CC, Aberdeen · 32 players', text: 'No qualifying. Exempt players register Feb 1 – Mar 15; registration opens to all SDGA members Mar 16 until the field is full.', href: 'https://www.golfgenius.com/pages/5776871' },
      { level: 'July 17 – 19', title: 'Men’s Senior & Masters', facts: 'Meadowbrook GC, Rapid City · 32 Senior (55+) · 32 Masters (65+)', text: 'No qualifying. Exempt players register Feb 1 – Mar 15; then open to all SDGA members Mar 16 until fields are full.', href: 'https://www.golfgenius.com/pages/5775492' },
      { level: 'July 17 – 19', title: 'Women’s Senior (50+)', facts: 'Meadowbrook GC, Rapid City · 16 players', text: 'All players advance from POD play to bracket play — top two in each POD play for the Championship, 3rd and 4th in the Silver Bracket. No qualifying.', href: 'https://www.golfgenius.com/pages/5775492' }
    ] },
    { t: 'p', text: 'See the FAQ and division documents below for complete information, including exempt player lists. Questions? Email sdgainfo@sdga.org or text 605-800-6435 (text only).' },
    { t: 'linklist', items: [L('Match Play FAQs', 'https://www.sdga.org/wp-content/uploads/2025/12/SDGA-Match-Play-2026.1-FAQ.pdf', 1), L('Men’s Match Play', 'https://www.sdga.org/wp-content/uploads/2026/01/SDGA-Mens-Match-Play-Championship-2026.1-Pro-Forma-1.pdf', 1), L('Women’s Match Play', 'https://www.sdga.org/wp-content/uploads/2026/01/SDGA-Womens-Match-Play-Championship-2026.1-1.pdf', 1), L('Men’s Senior & Masters Match Play', 'https://www.sdga.org/wp-content/uploads/2026/01/SDGA-Mens-Senior-Masters-Match-Play-Championship-2026.1-2.pdf', 1), L('Women’s Senior Match Play', 'https://www.sdga.org/wp-content/uploads/2026/01/SDGA-Senior-Womens-Match-Play-Championship-2026.1-1.pdf', 1)] }
  ],
  sidebar: [{ title: 'Championships', links: [L('Enter SDGA Championships', 'https://www.golfgenius.com/pages/3901558', 1), L('Join/Renew SDGA Membership', 'https://sdga.clubdashboard.org/', 1)] }] },
  'sodak-cup': { section: 'Competitive Golf', title: 'SoDak Cup', intro: 'The best SDGA Amateurs take on South Dakota PGA Professionals in a Ryder Cup format.', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2022/03/SDGA-PGA-logo-2025-300x134.png', alt: 'SDGA and South Dakota PGA', w: '260px' },
    { t: 'p', text: 'The 12-player Amateur team is made up of eight players age 25 and over who earn points through our Championships, our Men’s Pre-Senior and Senior Champions, and two top SDGA women players. The Professional team consists of PGA Professionals at the courses that host our events and support the SDGA.' },
    { t: 'callout', title: '2026 SoDak Cup — September 26 & 27', text: 'The Country Club of Sioux Falls. See results on Golf Genius with GGID: SD26SODAK.', label: 'Event website', href: 'https://www.golfgenius.com/pages/5764699' },
    { t: 'h3', text: 'Points tables' },
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2026/01/Points-table-men-for-website.png', alt: 'Men’s points table', w: '100%' },
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2026/01/Points-table-women-for-website.png', alt: 'Women’s points table', w: '100%' },
    { t: 'h2', text: 'Results since 1997' },
    { t: 'table', cols: ['Year', 'Winner', 'Score', 'Course'], rows: [
      ['2025','Amateurs','16 – 8','Dakota Dunes CC'],['2024','Tie – Amateurs retain','12 – 12','Elkhorn Ridge GC'],['2023','Amateurs','13 – 11','The Country Club of Sioux Falls'],['2022','Tie – Amateurs retain','12 – 12','Spearfish Canyon GC'],['2021','Amateurs','14 – 10','Hillcrest G&CC'],['2020','Amateurs','15.5 – 9.5','The Prairie Club'],['2019','Canceled','—','—'],['2018','Professionals','11 – 5','Lakeview GC'],['2017','Tie – Professionals retain','10 – 10','Brookings CC'],['2016','Professionals','11 – 9','GC at Red Rock'],['2015','Amateurs','10.5 – 9.5','Moccasin Creek CC'],['2014','Amateurs','11 – 9','Hillsview GC'],['2013','Amateurs','15 – 5','Arrowhead CC'],['2012','Amateurs','11.5 – 8.5','Fox Run GC'],['2011','Amateurs','12.5 – 7.5','Hillcrest G&CC'],['2010','Professionals','11.5 – 8.5','Sutton Bay GC'],['2009','Professionals','12 – 8','Prairie Green GC'],['2008','Amateurs','9.5 – 6.5','GC at Red Rock'],['2007','Amateurs','9.5 – 6.5','GC at Red Rock'],['2006','Amateurs','10.5 – 5.5','Minnehaha CC'],['2005','Amateurs','10.5 – 5.5','Broadland Creek GC'],['2004','Tie – Amateurs retain','8 – 8','Hillcrest G&CC'],['2003','Amateurs','8.5 – 7.5','Dakota Dunes CC'],['2002','Amateurs','13 – 7','Minnehaha CC'],['2001','Amateurs','8.5 – 7.5','Meadowbrook GC'],['2000','Amateurs','8.5 – 7.5','Moccasin Creek CC'],['1999','Professionals','12.5 – 3.5','Arrowhead CC'],['1998','Professionals','10 – 6','Hillcrest G&CC'],['1997','Professionals','9 – 7','Westward Ho CC']] }
  ],
  sidebar: [{ title: 'Links', links: [L('Enter SDGA Championships', 'https://www.golfgenius.com/ggid/yb66jg', 1), L('SoDak Cup Points Standings', 'https://www.golfgenius.com/pages/2580340', 1), L('SoDak Cup Records', 'https://www.sdga.org/wp-content/uploads/2026/01/SoDak-Cup-History-Thru-2025.pdf', 1)] }] },
  'golfers-of-the-year': { section: 'Competitive Golf', title: 'Golfers of the Year', intro: 'Congratulations to the 2025 SDGA Golfers of the Year! They will be celebrated with the 2025 Hall of Fame inductees at the SDGA Annual Banquet, April 11, 2026, at the new Elmwood Golf Course clubhouse in Sioux Falls.', blocks: [
    { t: 'goty', items: [
      { cat: 'Male Golfer of the Year', name: 'Jake Olson', town: 'Watertown', text: 'Olson completed the rare Major double in 2025, winning both the SDGA Men’s Amateur and Men’s Match Play Championships. He also finished 7th in the SDGA Two-Man Championship. Jake plays on the men’s golf team at South Dakota State University.' },
      { cat: 'Female Golfer of the Year', name: 'McKenzie Mages', town: 'Sioux Falls', text: 'Mages also completed the Major double, winning the Women’s Match Play and Women’s Amateur Championships — the first time in SDGA history both Golfers of the Year won both Majors in the same year. McKenzie is a senior on the SDSU women’s golf team.' },
      { cat: 'Senior Male Golfer of the Year', name: 'Steve Beardsley', town: 'Rapid City', text: 'Beardsley won the SDGA Men’s Senior Championship with an emotional victory in Yankton. He also finished second in the Mid-Am Regular division and T5 in the Senior Two-Man Championship.' },
      { cat: 'Senior Female Golfer of the Year', name: 'Julie Jansa', town: 'Sioux Falls', text: 'Jansa added to her Hall of Fame career with another Women’s Senior Championship and the Two-Woman Championship with her daughter Reese. She also reached the quarterfinals of the Women’s Match Play.' },
      { cat: 'Junior Male Golfer of the Year', name: 'Jayden Antonen', town: 'Sioux Falls', text: 'Runner-up in the Boys Junior Championship and the leading points earner on the SDGA | Sanford International Series, with one win and two runner-up finishes. He was T10 in the Men’s Amateur and reached the Round of 16 in Men’s Match Play.' },
      { cat: 'Junior Female Golfer of the Year', name: 'Rylan Horning', town: 'Rapid City', text: 'Horning won the Girls Junior Championship in Mitchell and two Series events, finishing runner-up in the Series Championship. She was 4th in the Women’s Amateur, a Women’s Match Play quarterfinalist, and 4th in the Two-Woman Championship.' }
    ] }
  ],
  sidebar: [{ title: 'Championships', links: [L('Enter SDGA Championships', 'https://www.golfgenius.com/ggid/yb66jg', 1)] },
    { title: 'Golfers of the Year history', links: [L('By Category', 'https://www.sdga.org/wp-content/uploads/2025/10/SDGA-Golfers-of-the-Year-by-Category.pdf', 1), L('By Name', 'https://www.sdga.org/wp-content/uploads/2025/10/SDGA-Golfers-of-the-Year-by-Name.pdf', 1), L('By Year', 'https://www.sdga.org/wp-content/uploads/2025/10/SDGA-Golfers-of-the-Year-by-Year.pdf', 1)] }] },
  'championship-history': { section: 'Competitive Golf', title: 'SDGA Championship History', intro: 'Past winners of every SDGA Championship. Choose a championship to view its full list of champions.', blocks: [
    { t: 'history', items: [{"title":"Men’s Amateur","rows":"1971|Pat Vidal|Rapid City;1972|H.L. Saylor III|Huron;1973|Rick Werner|Huron;1974|Dave Hanten|Huron;1975|Dave Hanten|Huron;1976|Curt Byrum|Onida;1977|Dave Hanten|Huron;1978|Jim Strandemo|Sioux Falls;1979|Curt Byrum|Onida;1980|Curt Byrum|Onida;1981|Pat Lockwood|Brookings;1982|Jim Entwisle|Huron;1983|Paul Rooney|Sioux Falls;1984|Randy Slechta|Sioux Falls;1985|Mike Tschetter|Sioux Falls;1986|Ray Laird III|Sioux Falls;1987|Jim Entwisle|Huron;1988|Todd Parks|Madison;1989|Ray Laird III|Sioux Falls;1990|Todd Kolb|Sioux Falls;1991|Brad Dubisar|Sioux Falls;1992|Brian Kortan|Spearfish;1993|Ryan Jansa|Sioux Falls;1994|Ryan Jansa|Sioux Falls;1995|Ryan Jansa|Sioux Falls;1996|Ryan Jansa|Sioux Falls;1997|Tyson Hazeldine|Spearfish;1998|Pat Lockwood|Brookings;1999|Mark Amundson|Sioux Falls;2000|T.J. Meyer|Rapid City;2001|Travis Stockholm|Springfield;2002|Paul Schock|Sioux Falls;2003|Ryan Jansa|Sioux Falls;2004|Ryan Jansa|Sioux Falls;2005|Michael Martin|Brookings;2006|Michael Martin|Brookings;2007|Matt Pridey|Sioux Falls;2008|Geoff Mead|Rapid City;2009|Ryan Jansa|Sioux Falls;2010|Chris Long|Garretson;2011|Tom Carlson|Sioux Falls;2012|Brandon Sigmund|Mitchell;2013|Dylan Baker|Eden Prairie, Minn.;2014|Jesse Talcott|Sioux Falls;2015|Tommy Vining|Sioux Falls;2016|Arron Lickteig|Marion;2017|Tommy Vining|Sioux Falls;2018|Jace Guthmiller|Yankton;2019|Jack Lundin|Sioux Falls;2020|Ryan Jansa|Sioux Falls;2021|Jack Lundin|Sioux Falls;2022|Jack Lundin|Sioux Falls;2023|Canceled|;2024|Kevin Gillick|Rapid City;2025|Jake Olson|Watertown"},{"title":"Women’s Amateur","rows":"1923|Miss M. Whitbeck|;1924|Mrs. W.J. McLean|Mitchell;1925|Mrs. O.C. Ellison|Sioux Falls;1926|Mrs. W.J. McLean|Mitchell;1927|Mrs. H.L. Woodworth|Ipswich;1963|Kathy Kober|Rapid City;1964|Kathy Kober|Rapid City;1965|Kathy Kober|Rapid City;1966|Kathy Kober|Rapid City;1967|Indy Titterington|Yankton;1968|Gretchen Idema|Sioux Falls;1969|Janet Larson|Sioux Falls;1970|Gretchen Idema|Sioux Falls;1971|Gretchen Idema|Sioux Falls;1972|Patsy Ehert|Huron;1973|Peggy Schock|Sioux Falls;1974|Peggy Schock|Sioux Falls;1975|Peggy Schock|Sioux Falls;1976|Gretchen Idema|Sioux Falls;1977|Peggy Schock Kirby|Sioux Falls;1978|Becky Larson|Watertown;1979|Becky Larson|Watertown;1980|Becky Larson|Watertown;1981|Becky Larson|Watertown;1982|Peggy Kirby|Sioux Falls;1983|Kris Tschetter|Sioux Falls;1984|Kris Tschetter|Sioux Falls;1985|Kris Tschetter|Sioux Falls;1986|Kris Tschetter|Sioux Falls;1987|Jane Egan|Sioux Falls;1988|Kelly Meyers|Rapid City;1989|Jane Egan|Sioux Falls;1990|Jane Egan|Sioux Falls;1991|Laura Martin|Brookings;1992|Stacey Kolb|Sioux Falls;1993|Paula Brotsky|Brookings;1994|Stacey Kolb|Sioux Falls;1995|Sarah Smith|Belle Fourche;1996|Sarah Comstock|Sioux Falls;1997|Jordan Lintz|Rapid City;1998|Jordan Lintz|Rapid City;1999|Betsy Berry|Sturgis;2000|Betsy Berry|Sturgis;2001|Meghan Little|Sturgis;2002|Carley Roach|Brookings;2003|Shannon Johnson|Sioux Falls;2004|Shannon Johnson|Sioux Falls;2005|Shannon Johnson|Sioux Falls;2006|Shannon Johnson|Sioux Falls;2007|Maggie Murphy|Sioux Falls;2008|Karla Murra|Sioux Falls;2009|Kim Kaufman|Clark;2010|Karla Cotton|Sioux Falls;2011|Kim Kaufman|Clark;2012|Kim Kaufman|Clark;2013|Morgan Fitts|Brookings;2014|Hallie Getz|Pierre;2015|Megan Mingo|Yankton;2016|Megan Mingo|Yankton;2017|Megan Mingo|Yankton;2018|Karissa Guthrie|Pierre;2019|Katie Bartlett|Sioux Falls;2020|Laerke Jensen|Vermillion;2021|Lani Potter|Aberdeen;2022|Reese Jansa|Sioux Falls;2023|Canceled|;2024|Reese Jansa|Sioux Falls;2025|McKenzie Mages|Sioux Falls"},{"title":"Men’s Match Play","rows":"1921|Ed Meisenholder|Vermillion;1922|William Sheehan|Winner;1923|Paul Young|Mitchell;1924|Ed Meisenholder|Vermillion;1925|Walt Madden|Pierre;1926|William Sheehan|Winner;1927|G.M. Foster|Sioux Falls;1928|Syd Butts|Aberdeen;1929|Walt Madden|Pierre;1930|Ralph Porter|Sioux Falls;1931|Ralph Porter|Sioux Falls;1932|Irv Krumm|Huron;1933|Charley Howard|Aberdeen;1934|Ralph Porter|Sioux Falls;1935|Ralph Porter|Sioux Falls;1936|Bob Dugan|Watertown;1937|John Rachetto|Deadwood;1938|George Baptie|Sioux Falls;1939|Pat Fillbrandt|Aberdeen;1940|George Baptie|Sioux Falls;1941|John Rachetto|Deadwood;1942|Bob Walrath|Watertown;1943|Hobe Richards|Watertown;1944|Irv Nelson|Huron;1945|Maynard Mogck|Yankton;1946|Jack Ruhe|Watertown;1947|Pete Adams|Pierre;1948|Ivan Steen|Brookings;1949|Phil Donohue|Sioux Falls;1950|Bill Hood|Sioux Falls;1951|John Rachetto|Deadwood;1952|Ivan Steen|Brookings;1953|Don Dravland|Watertown;1954|John Enright|Sioux Falls;1955|Merle Getten|Sioux Falls;1956|Don Dravland|Watertown;1957|Ralph Larson|Sioux Falls;1958|Parley Hyde|Sioux Falls;1959|John Enright|Sioux Falls;1960|Phil Donohue|Sioux Falls;1961|Phil Donohue|Sioux Falls;1962|Byron Comstock|Sioux Falls;1963|Al Cooke|Sioux Falls;1964|Al Cooke|Sioux Falls;1965|Terry Comstock|Sioux Falls;1966|Dick Scott|Watertown;1967|George Meyers|Rapid City;1968|Dave Comstock|Sioux Falls;1969|Dave Hanten|Huron;1970|Jim Ahern|Yankton;1971|Jim Ahern|Yankton;1972|Bob Barclay|Rapid City;1973|Jim Brinkman|Huron;1974|Dave Hanten|Huron;1975|Tom Hendricks|Rapid City;1976|Dave Hanten|Huron;1977|Colin Bork|Brookings;1978|Tom Hendricks|Rapid City;1979|Curt Byrum|Onida;1980|Jim Entwisle|Huron;1981|Jim Entwisle|Huron;1982|Rob Sondreal|Huron;1983|Mike Tschetter|Sioux Falls;1984|Paul Rooney|Sioux Falls;1985|Mark Amundson|Sioux Falls;1986|Jim Entwisle|Huron;1987|Kurt Gerstner|Yankton;1988|Mike Bloomberg|Sioux Falls;1989|Mark Amundson|Brookings;1990|Mike Brummer|Rapid City;1991|Pat Lockwood|Brookings;1992|Stewart Scott|Sioux Falls;1993|Ryan Jansa|Sioux Falls;1994|Steve Reiter|Brandon;1995|Ryan Jansa|Sioux Falls;1996|Roger Legge|Aberdeen;1997|Rob Kortan|Spearfish;1998|Matt Einspahr|Brookings;1999|Mike Brummer|Rapid City;2000|Mark Amundson|Sioux Falls;2001|Wil Collins|Rapid City;2002|Paul Schock|Sioux Falls;2003|Matt Einspahr|Brookings;2004|Mark Anderson|Sioux Falls;2005|Chris Collins|Lead;2006|Chris Collins|Lead;2007|Tom Carlson|Sioux Falls;2008|Tom Carlson|Sioux Falls;2009|Nate Barbee|Dakota Dunes;2010|Nolan Meyer|Sioux Falls;2011|Tyler Rachetto|Rapid City;2012|Ben Irlbeck|Sioux Falls;2013|Grant Smith|Johnston, Iowa;2014|Tyler Barrett|Rapid City;2015|Tommy Vining|Sioux Falls;2016|Michael Keeton|Pierre;2017|Alex Shattuck|Sioux Falls;2018|TJ Nolan|Rapid City;2019|Jeff Meyerink|Sioux Falls;2020|Bryce Hammer|Sioux Falls;2021|Bryce Hammer|Sioux Falls;2022|Will Grevlos|Sioux Falls;2023|Parker Edens|Brookings;2024|Luke Honner|Sioux Falls;2025|Jake Olson|Watertown"},{"title":"Women’s Match Play","rows":"1928|June Carlson|Mitchell;1929|June Carlson|Mitchell;1930|June Carlson|Mitchell;1931|Mrs. R.A. Pankow|Sioux Falls;1932|Mrs. E.R. Doering|Sioux Falls;1933|Mrs. H.L. Woodworth|Ipswich;1934|Mrs. D.W. Jewett|Sioux Falls;1935|Mrs. K.L. Price|Sioux Falls;1936|Mrs. E.R. Doering|Sioux Falls;1937|Mrs. E.R. Doering|Sioux Falls;1938|Mrs. E.R. Doering|Sioux Falls;1939|Mrs. E.R. Doering|Sioux Falls;1940|Lucille Erickson|Viborg;1941|Mrs. E.R. Doering|Sioux Falls;1942|Alice Bauer|Aberdeen;1946|Evelyn Skinner|Sioux Falls;1947|Evelyn Skinner|Sioux Falls;1948|Mrs. E.R. Doering|Sioux Falls;1949|Mrs. Al Halverson|Sioux Falls;1950|Mrs. Griff Maxwell|Sioux Falls;1951|Mrs. Al Halverson|Sioux Falls;1952|Carol Comstock|Sioux Falls;1953|Doris Mernaugh|Watertown;1954|Barbara Krumm|Huron;1955|Barbara Krumm|Huron;1956|Indy Titterington|Yankton;1957|Carol Comstock|Sioux Falls;1958|Betty Smith|Rapid City;1959|Indy Titterington|Yankton;1960|Indy Titterington|Yankton;1961|Jeanne Comstock|Sioux Falls;1962|Indy Titterington|Yankton;2009|Dani Bellet|Lead;2010|Maggie Murphy|Sioux Falls;2011|Shannon Johnson|Omaha, Neb.;2012|Shannon Johnson|Omaha, Neb.;2013|Morgan Fitts|Brookings;2014|Janice Baumberger|Lincoln, Neb.;2015|Lauren Fitts|Brookings;2016|Hallie Getz|Pierre;2017|Katie Bartlett|Pierre;2018|Hallie Getz|Pierre;2019|Maggie Murphy|Sioux Falls;2020|Teresa Toscano|Brookings;2021|Hallie Getz|Pierre;2022|Alex Kandolin|Rapid City;2023|Reese Jansa|Sioux Falls;2024|Shakira-Ann Kuys|Brookings;2025|McKenzie Mages|Sioux Falls"},{"title":"Men’s Mid-Amateur","rows":"2007|Terry Rotert|Huron;2008|Ryan Jansa|Sioux Falls;2009|Ryan Jansa|Sioux Falls;2010|Jeff Salter|Rapid City;2011|Chris Long|Garretson;2012|Brandon Sigmund|Mitchell;2013|Chris Long|Garretson;2014|Mike Swartz|Rapid City;2015|Ryan Jansa|Yankton;2016|Michael Keeton|Pierre;2017|Julean Michels|Sioux Falls;2018|Jesse Talcott|Sioux Falls;2019|Brad Jacobson|Bryant;2020|Ryan Trasamar|Sioux Falls;2021|Joel Wallner|Sioux Falls;2022|Tate McVay|Sturgis;2023|Parker Edens|Brookings;2024|Parker Edens|Brookings;2025|Brodie Hullinger|Brookings"},{"title":"Women’s Mid-Amateur","rows":"1995|Jeri Krsnak|Sioux Falls;1996|Karen Rohde|Brandon;1997|Jeri Krsnak|Sioux Falls;1998|Karen Rohde|Brandon;1999|Jeri Krsnak|Sioux Falls;2000|Jeri Krsnak|Sioux Falls;2001|Patty Coddington|Sioux Falls;2002|Heidi Ruch|Aberdeen;2003|Patty Coddington|Sioux Falls;2004|Patty Coddington|Sioux Falls;2005|Patty Coddington|Sioux Falls;2006|Peggy Kirby|Sioux Falls;2007|Lisa Meritt|Sioux Falls;2009|Peggy Kirby|Sioux Falls;2022|Karla Cotton|Sioux Falls;2023|Karla Cotton|Sioux Falls;2024|Maggie Murphy|Brookings;2025|Karla Cotton|Sioux Falls"},{"title":"Men’s Pre-Senior","rows":"1980|Don Isaacson|Sioux Falls;1981|Don Platt|Sioux Falls;1982|John Derby|Rapid City;1983|Don Platt|Sioux Falls;1984|Tom Egan|Sioux Falls;1985|Don Platt|Sioux Falls;1986|Steve Jansa|Sioux Falls;1987|Don Breit|Sioux Falls;1988|Don Breit|Sioux Falls;1989|Rich Kosier|Watertown;1990|Mike Brummer|Rapid City;1991|Hugh Welsh|Rapid City;1992|Jeff Gray|Sioux Falls;1993|Hugh Welsh|Rapid City;1994|Mike Brummer|Rapid City;1995|Clint Liddiard|Sioux Falls;1996|Mike Brummer|Rapid City;1997|John Anderson|Sioux Falls;1998|Derek Bursheim|Flandreau;1999|John Anderson|Sioux Falls;2000|Thom Koehler|Sioux Falls;2001|Tim Begeman|Madison;2002|Terry Brunken|Sioux Falls;2003|Mike Brummer|Rapid City;2004|Mike Brummer|Rapid City;2005|John Anderson|Sioux Falls;2006|Doug Murphy|Rapid City;2018|Brandon Sigmund|Mitchell;2019|Chris Long|Garretson;2020|Jeff Meyerink|Mitchell;2021|Jeff Meyerink|Mitchell;2022|Chris Long|Presho;2023|Justin Robel|Sioux Falls;2024|Jeff Salter|Rapid City;2025|Adam Chandler|Vermillion"},{"title":"Men’s Senior","rows":"1969|Phil Donohue|Sioux Falls;1970|Phil Donohue|Sioux Falls;1971|Bob Walrath|Watertown;1972|Phil Donohue|Sioux Falls;1973|Phil Donohue|Sioux Falls;1974|Bob Larson|Watertown;1975|Bob Walrath|Watertown;1976|Wayne Young|Rapid City;1977|Wayne Young|Rapid City;1978|Don Dwight|Springfield;1979|John Miller|Hot Springs;1980|Bob Larson|Watertown;1981|Marv Widness|Sioux Falls;1982|Phil Donohue|Sioux Falls;1983|Marv Widness|Sioux Falls;1984|Marv Widness|Sioux Falls;1985|Bill Branson|Yankton;1986|Marv Widness|Sioux Falls;1987|Marv Widness|Sioux Falls;1988|Dale Pederson|Beresford;1989|Bob Stewart|Sioux Falls;1990|Don Platt|Sioux Falls;1991|Dan Robar|Sioux Falls;1992|Dick Tschetter|Sioux Falls;1993|Tom Zimmer|Sioux Falls;1994|Rich Kosier|Watertown;1995|Roger Erickson|Rapid City;1996|Dan Grider, Sr.|Sioux Falls;1997|Dale Margeson|Sioux Falls;1998|Ray Laird III|Sioux Falls;1999|Ray Laird III|Sioux Falls;2000|Dick Tschetter|Sioux Falls;2001|Jim Sorensen|Beresford;2002|Steve Jansa|Sioux Falls;2003|Lee Brandt|Sioux Falls;2004|Ray Strand|Rapid City;2005|Mike Brummer|Rapid City;2006|Mike Brummer|Rapid City;2007|Mike Brummer|Rapid City;2008|Mike Brummer|Rapid City;2009|Lou Mendoza|Eagle Butte;2010|Greg Kendall|Sioux Falls;2011|Tim Begeman|Madison;2012|Steve Dietrich|Sioux Falls;2013|Doug Murphy|Rapid City;2014|Ron Gates|Mitchell;2015|Mike Brummer|Rapid City;2016|Lyle Pagel|Rapid City;2017|Derek Burshiem|Flandreau;2018|Terry Brunken|Sioux Falls;2019|Bob Felker|Madison;2020|Derek Burshiem|Flandreau;2021|Mike Brummer|Rapid City;2022|Sam Prue|N Sioux City;2023|Scott Holm|Brookings;2024|Derek Burshiem|Flandreau;2025|Steve Beardsley|Rapid City"},{"title":"Women’s Senior","rows":"1974|Ruth Miller|Sioux Falls;1975|Ruth Miller|Sioux Falls;1976|Ruth Miller|Sioux Falls;1977|Ruth Miller|Sioux Falls;1978|Ruth Miller|Sioux Falls;1979|Ruth Miller|Sioux Falls;1981|Verlyne Larson|Sioux Falls;1982|Ila Michael|Rapid City;1983|Ila Michael|Rapid City;1984|Jo Johnson|Sioux Falls;1985|Ila Michael|Rapid City;1986|Ila Michael|Rapid City;1987|Ila Michael|Rapid City;1988|Anne Borgmann|Sioux Falls;1989|Anne Borgmann|Sioux Falls;1990|Ila Michael|Rapid City;1991|Anne Borgmann|Sioux Falls;1992|Anne Borgmann|Sioux Falls;1993|Pam Jansa|Sioux Falls;1994|Anne Borgmann|Sioux Falls;1995|Anne Borgmann|Sioux Falls;1996|Helen Plumage|Aberdeen;1997|Helen Plumage|Aberdeen;1998|Anne Borgmann|Sioux Falls;1999|Anne Borgmann|Sioux Falls;2000|Anne Borgmann|Sioux Falls;2001|Mary Schneider|Dakota Dunes;2002|Anne Borgmann|Sioux Falls;2003|Anne Borgmann|Sioux Falls;2004|Mary Schneider|Dakota Dunes;2005|Anne Borgmann|Sioux Falls;2006|Karen Rohde|Sioux Falls;2007|Arlys Kraft|Rapid City;2009|Karen Rohde|Rapid City;2010|Arlys Kraft|Rapid City;2011|Patty Coddington|Sioux Falls;2012|Patty Coddington|Sioux Falls;2014|Patty Coddington|Sioux Falls;2015|Patty Coddington|Sioux Falls;2016|Patty Coddington|Sioux Falls;2017|Pam Hoiland|Sioux Falls;2018|Jackie Witlock|Aberdeen;2019|Patty Coddington|Sioux Falls;2020|Jackie Witlock|Aberdeen;2021|Dawn McInroy|Sioux Falls;2022|Jennifer Stalley|Pierre;2023|Julie Jansa|Sioux Falls;2024|Julie Jansa|Sioux Falls;2025|Julie Jansa|Sioux Falls"},{"title":"Senior Match Play","rows":"2022|Brad Buche|Mitchell;2023|Mike Brummer|Rapid City;2024|Brad Buche|Mitchell;2025|Rob Dewit|Sioux Falls"},{"title":"Women’s Senior Match Play","rows":"2023|Royaune Jasinski|Rapid City;2024|Marna Raburn|Rapid City;2025|Jennifer Stalley|Pierre"},{"title":"Masters Match Play","rows":"2025|Sam Prue|N. Sioux City"},{"title":"Men’s Masters","rows":"2025|Bill Carland|Sioux Falls"},{"title":"Women’s Masters","rows":"2025|Vonda Bjorklund|Volga"},{"title":"Junior Boys","rows":"1979|Mike Tschetter|Sioux Falls;1980|Glenn Herrick|Huron;1981|John Stavig|Sioux Falls;1982|Kelly Johnson|Sioux Falls;1983|Chad Viereck|Brandon;1984|Marty Vandemore|Sioux Falls;1985|Scott Holm|Brookings;1986|Kevin Zimmer|Sioux Falls;1987|Brett Peterson|Watertown;1988|Brad Dubisar|Sioux Falls;1989|Jeff Salter|Rapid City;1990|Steve Reiter|Brandon;1991|Tyler Rachetto|Lead;1992|Shane Bisson|Flandreau;1993|Wil Collins|Rapid City;1994|Todd Houghton|Rapid City;1995|Wil Collins|Rapid City;1996|Wil Collins|Rapid City;1997|T.J. Meyer|Rapid City;1998|Trevor Larson|Rapid City;1999|Gabe Vogt|Pierre;2000|Jeff Wilde|Watertown;2001|Paul Green|Madison;2002|Chris Collins|Lead;2003|Tom Carlson|Sioux Falls;2004|Tim Kalil|Rapid City;2005|Tyler Evenson|Lead;2006|Matt Pridey|Sioux Falls;2007|Lance Collins|Lead;2008|Eric Hieb|Mitchell;2009|Derek Dillon|Garretson;2010|Josh Weismantel|Watertown;2011|Chris Gaher|Sioux Falls;2012|Max Donohue|Sioux Falls;2013|Max Donohue|Sioux Falls;2014|Max Donohue|Sioux Falls;2015|Jacob Otta|Sioux Falls;2016|Bryce Hammer|Sioux Falls;2017|Will Grevlos|Sioux Falls;2018|Jack Lundin|Sioux Falls;2019|Jack Lundin|Sioux Falls;2020|Ben Daane|Rapid City;2021|Jake Olson|Watertown;2022|Bennett Geraets|Sioux Falls;2023|Jake Olson|Watertown;2024|Riley Christensen|Sioux Falls;2025|Charlie Swift|Sioux Falls"},{"title":"Junior Girls","rows":"1979|Kris Tschetter|Sioux Falls;1980|Nancy Steen|Sioux Falls;1981|Nancy Steen|Sioux Falls;1982|Kris Tschetter|Sioux Falls;1983|Amy Butzer|Sioux Falls;1984|Amy Butzer|Sioux Falls;1985|Kris Heatherly|Lennox;1986|Jane Egan|Sioux Falls;1987|Laura Martin|Brookings;1988|Karmen Stanford|Deadwood;1989|Stacey Kolb|Sioux Falls;1990|Wendy Maynes|Sioux Falls;1991|Sarah Comstock|Sioux Falls;1992|Sarah Comstock|Sioux Falls;1993|Sarah Smith|Belle Fourche;1994|Nikki Stangarone|Rapid City;1995|Nikki Stangarone|Rapid City;1996|Betsy Berry|Sturgis;1997|Betsy Berry|Sturgis;1998|Sarah Strand|Rapid City;1999|Shannon Johnson|Sioux Falls;2000|Shannon Johnson|Sioux Falls;2001|Kelly Evans|Brookings;2002|Karla Murra|Sioux Falls;2003|Mikala Henzlik|Rapid City;2004|Jenna Buckwalter|Watertown;2005|Jenna Buckwalter|Watertown;2006|Kati Scholten|Brookings;2007|Paige Osterloo|Rapid City;2008|Taylor Smalley|Pierre;2009|Dani Selberg|Brookings;2010|Megan Mingo|Yankton;2011|Hailee Pieper|Watertown;2012|Jordan Bormann|Parkston;2013|Megan Mingo|Yankton;2014|Katie Bartlett|Pierre;2015|Katie Bartlett|Pierre;2016|Katie Bartlett|Pierre;2017|Alex Kandolin|Rapid City;2018|Alex Kandolin|Rapid City;2019|Shannon McCormick|Sioux Falls;2020|Shannon McCormick|Sioux Falls;2021|Masy Mock|Mitchell;2022|Reese Jansa|Sioux Falls;2023|Bryn Huber|Huron;2024|Olivia Braun|Aberdeen;2025|Rylan Horning|Rapid City"},{"title":"Two-Man","rows":"1987|Bill Scholten / Matt Einspahr|Brookings;1988|Alan Bales / Jim Entwisle|Huron;1989|Brady Marone / Chad Dubisar|Sioux Falls;1990|Greg Scott / Mike Pelzl|Aberdeen;1991|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings;1992|Jason Young / Robert Williams|Pierre;1993|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings;1994|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings;1995|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings;1996|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings;1997|Rob Kortan / Tyson Hazledine|Spearfish;1998|Rob Kortan / Tyson Hazledine|Spearfish;1999|Rob Kortan / Wil Collins|Spearfish / Rapid City;2000|Chad Dubisar / Matt Einspahr|Sioux Falls / Brookings;2001|Chad Dubisar / Matt Einspahr|Sioux Falls / Brookings;2002|Jim Anderson / John Anderson|Sioux Falls;2003|Mike Brummer / Pat Lockwood|Sioux Falls / Brookings;2004|Tyler Rachetto / Chris Collins|Lead;2005|Robb Bierbaum / Brett Egge|Sioux Falls;2006|Mark Anderson / Michael Martin|Sioux Falls / Brookings;2007|Todd Hofland / Brett Steen|Brookings;2008|Mike Brummer / Pat Lockwood|Rapid City / Brookings;2009|Brett Coluccio / Brett Abbotts|Mitchell;2010|Tom Carlson / Brett Egge|Sioux Falls;2011|Tyler Evenson / Tyler Rachetto|Lead / Rapid City;2012|Danny Amundson / Charlie Jacobson|Sioux Falls;2013|Ryan Tjeerdsma / Tad Leistico|Slayton, MN / Elkhorn, NE;2014|Brandon Sigmund / Jeff Meyerink|Mitchell;2015|Tad Leistico / Michael Keeton|Elkhorn, NE / Pierre;2016|Sam Olson / Parker Klitzke|Sioux Falls;2017|Sam Olson / Parker Klitzke|Sioux Falls;2018|Cole Peterson / Tate Arends|Vermillion / Sioux Falls;2019|TJ Nolan / Ryan Nolan|Rapid City;2020|Brandon Sigmund / Jeff Meyerink|Mitchell;2021|Ben Daane / Ryan Neff|Rapid City / Sioux Falls;2022|Will Grevlos / Tyler Westra|Sioux Falls;2023|Tyler Evenson / Lance Collins|Hermosa / Sturgis;2024|Radley Mauney / Taten Mauney|Sioux Falls;2025|Ryan Trasamar / Danny Amundson|Sioux Falls"},{"title":"Two-Woman","rows":"1987|Jane Egan / Jenny Flanagan|Sioux Falls;1988|Patty Coddington / Helen Lang|Sioux Falls;1989|Jeri Krsnak / Pam Hoiland|Sioux Falls;1990|Patty Coddington / Helen Lang|Sioux Falls;1991|Jeri Krsnak / Pam Hoiland|Sioux Falls;1992|Jeri Krsnak / Pam Hoiland|Sioux Falls;1993|Jeri Krsnak / Pam Hoiland|Sioux Falls;1994|Jenny Stangarone / Nikki Stangarone|Rapid City;1995|Jordan Lintz / Sarah Smith|Rapid City;1996|Sara Stulken / Jenny Chandler|Vermillion;1997|Jordan Lintz / Ashley Lintz|Rapid City;1998|Jody Swier / Carrie Swier|Arlington;1999|Jordan Lintz / Ashley Lintz|Rapid City;2000|Betsy Berry / Meghan Little|Sturgis;2001|Peggy Kirby / Patty Coddington|Sioux Falls;2002|Shannon Johnson / Allison Stewart|Sioux Falls / Vermillion;2003|Kati Scholten / Annie Spaulding|Brookings;2004|Shannon Johnson / Allison Stewart|Sioux Falls / Vermillion;2005|Shannon Johnson / Allison Stewart|Sioux Falls / Vermillion;2006|Shannon Johnson / Allison Stewart|Sioux Falls / Vermillion;2007|Kati Scholten / Chelsea Cadwell|Brookings / Sioux Falls;2008|Sydney Sturdevant / Allison Stewart|Sioux Falls / Vermillion;2009|Morgan Fitts / Lauren Fitts|Brookings;2010|Dani Bellet / Jenny Coluccio|Lead / Sioux Falls;2011|Dani Bellet / Jenny Coluccio|Lead / Sioux Falls;2012|Dani Bellet / Jenny Coluccio|Lead / Sioux Falls;2013|Maggie Leland / Kali Trautman|Alexandria, Minn. / Clear Lake;2014|Megan Mingo / Hallie Getz|Yankton / Pierre;2015|Megan Mingo / Hallie Getz|Yankton / Pierre;2016|Megan Mingo / Hallie Getz|Yankton / Pierre;2017|Sydney Bormann / Sydney Weber|Parkston;2018|Karissa Guthrie / Katie Bartlett|Pierre;2019|Katie Bartlett / Julia Hall|Pierre / Vermillion;2020|Julie Jansa / Reese Jansa|Sioux Falls;2021|Julie Jansa / Reese Jansa|Sioux Falls;2022|Danielle Podoll / Lauryn Driscoll|Aberdeen / Hartford;2023|Julie Jansa / Reese Jansa|Sioux Falls;2024|Julie Jansa / Reese Jansa|Sioux Falls;2025|Julie Jansa / Reese Jansa|Sioux Falls"},{"title":"Mid-Am Two-Man","rows":"2007|Kyle Repp / Steve Weiland|Yankton;2008|Ryan Jansa / Steve Reiter|Sioux Falls / Brandon;2009|Jeff Salter / Jon Lesselyoung|Rapid City;2010|Tyler Rachetto / Shane Tipton|Rapid City;2011|Ryan Jansa / Kasey Kogel|Sioux Falls;2012|Ryan Jansa / Kasey Kogel|Sioux Falls / Harrisburg;2013|Ryan Jansa / Kasey Kogel|Sioux Falls / Harrisburg;2014|Tad Leistico / Aaron Tom|Elkhorn, Neb. / Sioux Falls;2015|Chris Long / Galen Vavra|Garretson / Hartford;2016|Brad Jacobson / Charlie Jacobson|Bryant / Sioux Falls;2017|Brodie Hullinger / Michael Keeton|Brookings / Pierre;2018|Tyler Evenson / Tyler Rachetto|Rapid City;2019|Brodie Hullinger / Michael Keeton|Brookings / Pierre;2020|Brad Haynes / Luke Weber|Philip;2021|Brad Jacobson / Charlie Jacobson|Bryant / Sioux Falls;2022|Justin Robel / Nathan Houser|Sioux Falls;2023|Ryan Trasamar / Matt Johnson|Sioux Falls / Gregory;2024|Chris Long / Tom Carlson|Presho / Sioux Falls;2025|Chris Long / Tom Carlson|Presho / Sioux Falls"},{"title":"Mid-Am Two-Woman","rows":"2017|Aubrey O’Connell / Jackie Witlock|Aberdeen;2018|Aubrey O’Connell / Jackie Witlock|Aberdeen;2019|Amy Nawroth / Mary Neuroth|Watertown;2020|Amy Nawroth / Mary Neuroth|Watertown;2021|Amy Nawroth / Mary Neuroth|Watertown;2022|Karla Cotton / Jill Mollner|Sioux Falls;2023|Karla Cotton / Jill Mollner|Sioux Falls;2024|Natalie Young / Jennifer Stalley|Pierre;2025|Karla Cotton / Jill Mollner|Sioux Falls"},{"title":"Pre-Senior Two-Man","rows":"2006|Steve Beardsley / Doug Murphy|Rapid City;2019|Ryan Jansa / Keith Kogel|Sioux Falls;2020|Ryan Jansa / Keith Kogel|Sioux Falls;2021|Jeff Meyerink / Josh Hartman|Mitchell;2022|Ryan Jansa / Kasey Kogel|Sioux Falls;2023|Ryan Messick / TJ Meyer|Rapid City;2024|Jon Burns / Stuart Stein|Sioux Falls / Watertown;2025|Brodie Hullinger / Michael Keeton|Brookings / Pierre"},{"title":"Senior Two-Man","rows":"2003|Barry Winter / Ray Strand|Rapid City;2004|Steve Jansa / Keel Coddington|Sioux Falls;2005|John Knox / Lou Mendoza|Onida / Eagle Butte;2006|Mike Brummer / Steve Pelzl|Rapid City / Aberdeen;2007|Bob O’Keefe / Jeff Jones|Sioux Falls;2008|Steve Beardsley / Doug Murphy|Rapid City;2009|Steve Beardsley / Doug Murphy|Rapid City;2010|Mike Brummer / Steve Pelzl|Rapid City / Aberdeen;2011|Bill Joens / Jeff Gray|Brandon;2012|Steve Pelzl / Mark Jorgensen|Aberdeen;2013|Derek Burshiem / Kent Speirs|Flandreau / Huron;2014|Tim Begeman / Dick Fawbush|Madison;2015|Mike Brummer / Steve Pelzl|Rapid City / Aberdeen;2016|Paul Schock / Pat Lockwood|Sioux Falls / Brookings;2017|Mike Brummer / Tom Reynolds|Rapid City / Sioux Falls;2018|Doug Murphy / Steve Beardsley|Rapid City / Hartford;2019|Mike Brummer / Tom Reynolds|Rapid City / Sioux Falls;2020|Mike Brummer / Tom Reynolds|Rapid City / Sioux Falls;2021|Dennis Breske / Mike Begeman|Sioux Falls;2022|Mike Brummer / Tom Reynolds|Rapid City / Sioux Falls;2023|Dan Lecy / Jerry Jasinski|Rapid City;2024|Todd Hofland / Brett Steen|Brookings;2025|Bryan Guischer / Dan Bruckner|Deadwood / Spearfish"},{"title":"Senior Two-Woman","rows":"2017|Sarah Egan / Sharon Wilson|Sioux Falls;2018|Jeri Krsnak / Pam Hoiland|Sioux Falls;2019|Julie King / Colette Quam|Sioux Falls / Aberdeen;2020|Jeri Krsnak / Pam Hoiland|Sioux Falls;2021|Jeri Krsnak / Pam Hoiland|Sioux Falls;2022|Joan Hegerfeld-Baker / Cindy Olson|Volga / Sioux Falls;2023|Julie King / Colette Quam|Sioux Falls / Aberdeen;2024|Lois Quam / Sharla VanWettering|Sioux Falls;2025|Marna Raburn / Cindy Olson|Rapid City / Sioux Falls"},{"title":"Masters Two-Man","rows":"2025|Robert McGlone / Stan Anker|Rapid City"},{"title":"Masters Two-Woman","rows":"2025|Vonda Bjorklund / Kathy Funk|Volga / Custer"},{"title":"Adult-Junior","rows":"2007|Greg & Justin Johnson|Sioux Falls;2008|Steve Jansa & Mitch Brunick|Sioux Falls;2009|Dean & Tyler Zahn|Aberdeen;2010|Jason & Mac Young|Rapid City;2011|Tony & Taylor Hyronimus|Sioux Falls;2012|Ben & Ian Rinken|Sioux Falls;2013|Jeff & Jayson Heck|Omaha, NE / Rapid City;2014|Tom & J.J. Cooney|Lake Andes;2015|Tom & J.J. Cooney|Lake Andes;2016|Mike & Will Grevlos|Sioux Falls;2017|Todd & Justin Kolb|Sioux Falls;2018|Mike & Austin Hoss|Pierre;2019|Ryan & Reese Jansa|Sioux Falls;2020|Ryan & Reese Jansa|Sioux Falls;2021|Ryan & Reese Jansa|Sioux Falls;2022|Canceled|;2023|Jason & Sara Sudenga|Sioux Falls;2024|Riley & Jayce Pugh|Miller;2025|Jon Sorensen & Tori Peterson|Beresford / Flandreau"},{"title":"Husband-Wife","rows":"1975|Tom and Mary Egan|Sioux Falls;1976|Jim and Sharon Sorensen|Beresford;1977|John and Anne Borgmann|Sioux Falls;1978|John and Anne Borgmann|Sioux Falls;1979|Don and Cheryl Breit|Sioux Falls;1980|Don and Cheryl Breit|Sioux Falls;1981|Rick and Jeri Krsnak|Sioux Falls;1982|Don and Cheryl Breit|Sioux Falls;1983|Rick and Jeri Krsnak|Sioux Falls;1984|Rick and Jeri Krsnak|Sioux Falls;1985|Rick and Jeri Krsnak|Sioux Falls;1986|Ray III and Patty Laird|Sioux Falls;1987|Rick and Jeri Krsnak|Sioux Falls;1988|Ray III and Patty Laird|Sioux Falls;1989|Mark and Margaret Amundson|Brookings;1990|Alan and Sharon Bales|Huron;1991|Mark and Margaret Amundson|Brookings;1992|Tom and Marilyn Summons|Rapid City;1993|Craig and Bonnie Golz|Aberdeen;1994|Kevin and Peggy Kirby|Sioux Falls;1995|Brian and Stacy Prisbe|Aberdeen;1996|Mark and Margaret Amundson|Brookings;1997|Mark and Margaret Amundson|Brookings;1998|Dick and Mary Schneider|Dakota Dunes;1999|Mike and Julie Davidson|Brandon;2000|Scott and Jackie Witlock|Aberdeen;2001|Don and Cheryl Breit|Sioux Falls;2002|Scott and Jackie Witlock|Aberdeen;2003|Bert and Cindy Olson|Sioux Falls;2004|Nick and Jody Driscoll|Hartford;2005|Greg and Judy Kendall|Sioux Falls;2006|Ryan and Julie Jansa|Sioux Falls;2007|Ryan and Julie Jansa|Sioux Falls;2008|Ryan and Julie Jansa|Sioux Falls;2009|Ryan and Julie Jansa|Sioux Falls;2010|Ryan and Julie Jansa|Sioux Falls;2011|Ryan and Julie Jansa|Sioux Falls;2012|Brett and Jenny Coluccio|Sioux Falls;2013|Brett and Jenny Coluccio|Sioux Falls;2014|Dustin and Ashley Horning|Rapid City;2015|Ryan and Julie Jansa|Sioux Falls;2016|Ryan and Julie Jansa|Sioux Falls;2017|Justin and Morgan Johnson|Watertown;2018|Ryan and Julie Jansa|Sioux Falls;2019|Tyler and Danielle Evenson|Hermosa;2020|Justin and Morgan Johnson|Watertown;2021|Justin and Morgan Johnson|Watertown;2022|Mitch and Kylie Brunick|Sioux Falls;2023|Brodie and Kelly Evans-Hullinger|Brookings;2024|Tyler and Danielle Evenson|Hermosa;2025|Tyler and Danielle Evenson|Hermosa"},{"title":"Senior Husband-Wife","rows":"2011|Steve and Cindy Weiland|Yankton;2012|Keel and Patty Coddington|Sioux Falls;2013|Bert and Cindy Olson|Sioux Falls;2014|Steve and Cindy Weiland|Yankton;2015|Steve and Cindy Weiland|Yankton;2016|Bert and Cindy Olson|Sioux Falls;2017|Dan and Dixie Lecy|Rapid City;2018|Bert and Cindy Olson|Sioux Falls;2019|Steve and Cindy Weiland|Yankton;2020|Mike and Mary Neuroth|Watertown;2021|Steve and Cindy Weiland|Yankton;2022|Mike and Mary Neuroth|Watertown;2023|Mike and Mary Neuroth|Watertown;2024|Jerry and Royaune Jasinski|Rapid City;2025|Tim and Marna Raburn|Rapid City"},{"title":"Masters Husband-Wife","rows":"2025|Steve and Cindy Weiland|Yankton"},{"title":"Mixed Team (2011–2017)","rows":"2011|Chris Long / Shannon Johnson|Garretson / Omaha, Neb.;2012|Max Donohue / Kim Kaufman|Sioux Falls / Clark;2013|Ryan and Julie Jansa|Sioux Falls;2014|Hudson Carpenter / Morgan Fitts|Sioux Falls / Pierre;2015|Matt Johnson / Hallie Getz|Sioux Falls;2016|Lukas Davison / Alli Plath|Harrisburg;2017|Michael Keeton / Hallie Getz|Pierre"}].map(h => ({ title: h.title, rows: h.rows.split(';').map(r => r.split('|')) })) }
  ],
  sidebar: [{ title: 'Championships', links: [L('Enter SDGA Championships', 'https://www.golfgenius.com/ggid/yb66jg', 1), L('Join/Renew SDGA Membership', 'https://sdga.clubdashboard.org/', 1)] },
    { title: 'Golf Genius – complete results', links: [L('2026', 'https://www.golfgenius.com/ggid/yb66jg', 1), L('2025', 'https://www.golfgenius.com/ggid/ln8v6r?filters=show&header=false&leaderboards=false&season_id=4682&sort=descending', 1), L('2024', 'https://www.golfgenius.com/ggid/zhqhep/customerdirectory/7458?filters=show&header=false&leaderboards=false&season_id=3127&sort=descending', 1), L('2023', 'https://www.golfgenius.com/ggid/bl4jan/customerdirectory/9044?filters=show&leaderboards=false&season_id=2414&sort=descending', 1), L('2022', 'https://www.golfgenius.com/ggid/hcfnff/customerdirectory/6370?filters=show&leaderboards=false&season_id=1955&sort=descending', 1), L('2021', 'https://www.golfgenius.com/pages/2843514', 1), L('2020', 'https://www.golfgenius.com/pages/1789043', 1), L('2019', 'https://www.golfgenius.com/ggid/sdga2019/customerdirectory/4204?season_id=556', 1)] }] },
  'rules-of-golf': { section: 'Competitive Golf', title: 'Rules of Golf', intro: 'Resources to help you understand the Rules of Golf — and we’re happy to visit your club.', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2023/02/2023-Rules-of-Golf.png', alt: '2023 Rules of Golf', w: '420px' },
    { t: 'p', text: 'Visit the pages below for great resources to help you understand the Rules of Golf. Contact us at rules@sdga.org or 605-800-6709 with any questions, or if you’d like us to visit your club to give a presentation to your members.' },
    { t: 'buttons', items: [{ label: 'SDGA Rules of Golf home', href: 'https://www.golfgenius.com/pages/1815160', primary: true }, { label: 'USGA Rules of Golf', href: 'https://www.usga.org/rules-hub.html' }, { label: '2023 key changes (PDF)', href: 'https://www.sdga.org/wp-content/uploads/2023/02/2023ROG5KeyChangesInfographic.pdf' }] }
  ],
  sidebar: [{ title: 'Links', links: [L('Enter SDGA Championships', 'https://www.golfgenius.com/ggid/yb66jg', 1), L('Join/Renew SDGA Membership', 'https://sdga.clubdashboard.org/', 1), L('SDGA Hard Card of Local Rules', 'https://www.sdga.org/wp-content/uploads/2026/01/2026-SDGA-Hard-Card.v2.pdf', 1)] }] },

  'junior-tour': {
    section: 'Junior Golf', title: 'SDGA Junior Tour',
    intro: 'Three Tours Serving One Mission. The 2026 SDGA Junior Tour, presented by the Sanford International.',
    blocks: [
      { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2026/01/SDGA-SI-Lockup-PNG-2024-300x133.png', alt: 'SDGA Junior Tour presented by the Sanford International', w: '260px' },
      { t: 'p', text: 'The SDGA Junior Tour aims to provide accessible and competitive opportunities for junior golfers in South Dakota and the surrounding region. Three Tours Serving One Mission allows beginning to advanced youth participants to enjoy events which accommodate each level of playing ability.' },
      { t: 'p', text: 'The Mini, Prep and Series Tours each deliver an exceptional experience on quality courses set to an optimal length for each age division.' },
      { t: 'tours', items: [
        { level: 'Beginner', title: 'SDGA Mini Tour', facts: 'Ages 7–13 · 9-hole stroke play', text: 'Designed for juniors with limited or no competitive experience. Divisions for boys and girls in 9 & under, 10–11 and 12–13. Juniors may play up an age group, and caddies are permitted. Events are held across four regions — members may play any regional event.', href: 'https://www.sdga.org/wp-content/uploads/2026/05/Information-Sheet-Mini-Tour-1.pdf' },
        { level: 'Intermediate', title: 'SDGA Prep Tour', facts: 'Ages 12–18 · 18-hole events', text: 'Ideal for juniors developing competitive skills in a relaxed setting, and excellent preparation for high school golf. Divisions for boys and girls 14–15 and 16–18, plus an intermediate boys 12–13 division.', href: 'https://www.sdga.org/wp-content/uploads/2026/05/Information-Sheet-Prep-Tour.1.pdf' },
        { level: 'Advanced', title: 'SDGA | Sanford International Series', facts: 'High school · 36-hole stroke play', text: 'For aspiring collegiate golfers. Multi-day competitions for boys and girls. To apply, send a cover letter and competitive resume to SDGASanfordSeries@sdga.org. Priority to sophomores, juniors and seniors with Prep Tour experience.', href: 'https://www.sdga.org/wp-content/uploads/2026/05/Information-Sheet-Series-1.pdf' }
      ] },
      { t: 'h2', text: 'Registration opens February 1' },
      { t: 'p', text: 'New to the SDGA Junior Tour? Follow the steps below to join the Tour and register for events. Returning members: sign in to your Golf Genius Player Profile to renew and register. Your username is the email used when your profile was created.' },
      { t: 'steps', items: [
        { title: 'Create your profile', text: 'Create your Golf Genius Player Profile.' },
        { title: 'Join the Tour', text: '$79 for the Mini & Prep Tour, or $129 for the Series (invite only).' },
        { title: 'Select events', text: 'Select your events and pay entry for each tournament.' },
        { title: 'Edit any time', text: 'Sign in to edit your events at any time.' }
      ] },
      { t: 'callout', title: 'Registering more than one child?', text: 'No problem — completely log out of the first child’s profile before signing in to register the second child, and so on.' },
      { t: 'buttons', items: [{ label: 'New members — create your profile', href: 'https://www.golfgenius.com/pages/2290142', primary: true }, { label: 'Returning — sign in & register', href: 'https://www.golfgenius.com/pages/2290142' }] },
      { t: 'h2', text: 'Junior Tour events' },
      { t: 'iframe', src: 'https://www.golfgenius.com/leagues/38321/customer_directories/10297/directory_iframe?filters=hide&header=false&leaderboards=false&league=38321&sort=descending', h: '640px' },
      { t: 'h2', text: '2026 SD Junior Majors' },
      { t: 'linklist', items: [
        L('Boys Junior PGA Championship Qualifier — June 19', 'https://www.minnesotajuniorgolf.com/championships/junior-pga-championships/', 1),
        L('Adult/Junior 16–18 Championship — June 21', 'https://www.golfgenius.com/pages/5747953', 1),
        L('SDGA Boys & Girls Junior 16–18 Championships — June 22–25', 'https://www.golfgenius.com/pages/5749338', 1),
        L('Notah Begay III Junior Golf National Championship Qualifier — July 15', 'https://www.golfgenius.com/pages/5805476', 1),
        L('SDGA Adult/Junior 15 & Under Championship — July 26', 'https://www.golfgenius.com/pages/5752226', 1),
        L('SDGA Boys & Girls Junior 15 & Under Championships — July 27–28', 'https://www.golfgenius.com/pages/5752360', 1),
        L('AJGA Junior at Red Rock — September 3–6', 'https://www.ajga.org/schedule?has_state=SD', 1)] }
    ],
    sidebar: [
      { title: 'Links & resources', links: [
        L('Junior Tour Info & Schedules', 'https://www.sdga.org/wp-content/uploads/2026/05/SDGA-Junior-Tour-2026-Info-Schedules.pdf', 1),
        L('Mini Tour Information', 'https://www.sdga.org/wp-content/uploads/2026/05/Information-Sheet-Mini-Tour-1.pdf', 1),
        L('Prep Tour Information', 'https://www.sdga.org/wp-content/uploads/2026/05/Information-Sheet-Prep-Tour.1.pdf', 1),
        L('Series Tour Information', 'https://www.sdga.org/wp-content/uploads/2026/05/Information-Sheet-Series-1.pdf', 1),
        L('Parent/Spectator Guidelines', 'https://www.sdga.org/wp-content/uploads/2026/01/Junior-Tour-Parent_Spectator-Guidelines-2026.pdf', 1),
        L('Junior Tour Code of Conduct', 'https://www.sdga.org/wp-content/uploads/2025/06/SDGA-Junior-Golf-Code-of-Conduct-2025.pdf', 1)] },
      { title: 'Yearly results', links: [
        L('2026', 'https://www.golfgenius.com/ggid/hk5jzr', 1), L('2025', 'https://www.golfgenius.com/leagues/38321/v2_customer_directories/8988?filters=show&header=false&leaderboards=false&season_id=4682&sort=descending', 1),
        L('2024', 'https://www.golfgenius.com/leagues/38321/v2_customer_directories/7452?filters=show&leaderboards=false&season_id=3127&sort=descending', 1),
        L('2023', 'https://www.golfgenius.com/leagues/38321/v2_customer_directories/5927?filters=show&leaderboards=false&season_id=2414&sort=descending', 1),
        L('2022', 'https://www.golfgenius.com/leagues/38321/v2_customer_directories/5676?filters=show&leaderboards=false&season_id=1955&sort=descending', 1),
        L('2021', 'https://www.golfgenius.com/leagues/38321/v2_customer_directories/9043?filters=show&leaderboards=false&season_id=1331&sort=descending', 1),
        L('2020', 'https://www.golfgenius.com/leagues/38321/v2_customer_directories/5002?filters=show&header=false&leaderboards=false&season_id=919&sort=descending', 1),
        L('2019', 'https://www.golfgenius.com/leagues/38321/v2_customer_directories/4211?filters=show&leaderboards=false&season_id=556&sort=descending', 1)] }
    ]
  },
  'season-points': { section: 'Junior Golf', title: 'Season Points – Jr. Tour, Series & Team SD', intro: 'Live point standings for the SDGA Mini Tour, Prep Tour, SDGA | Sanford International Series and Team South Dakota.', blocks: [
    { t: 'h2', text: 'SDGA Mini Tour' },
    { t: 'buttons', items: [{ label: '9 & Under', href: 'https://www.golfgenius.com/pages/6108778' }, { label: '10 – 11', href: 'https://www.golfgenius.com/pages/6108779' }, { label: '12 – 13', href: 'https://www.golfgenius.com/pages/6108780' }] },
    { t: 'h2', text: 'SDGA Prep Tour' },
    { t: 'buttons', items: [{ label: '12 – 13 Boys (18 holes)', href: 'https://www.golfgenius.com/pages/6108781' }, { label: '14 – 15', href: 'https://www.golfgenius.com/pages/6108782' }, { label: '16 – 18', href: 'https://www.golfgenius.com/pages/6108783' }] },
    { t: 'callout', title: 'SDGA Junior Tour Cup', text: 'In each region, the top two point leaders in each Mini and Prep Tour division (age and gender) are invited to the Junior Tour Cup at Hillsview GC in Pierre on Monday, August 3. Mini Tour plays 9 holes; Prep Tour plays 18. If a leader can’t play, the next player on the points list is invited.' },
    { t: 'h2', text: 'Junior Tour by region' },
    { t: 'buttons', items: [{ label: 'Metro', href: 'https://www.golfgenius.com/pages/6093327' }, { label: 'Northeast', href: 'https://www.golfgenius.com/pages/6093328' }, { label: 'Southeast', href: 'https://www.golfgenius.com/pages/6093340' }, { label: 'West', href: 'https://www.golfgenius.com/pages/6093322' }] },
    { t: 'h2', text: 'SDGA | Sanford International Series' },
    { t: 'buttons', items: [{ label: 'Boys', href: 'https://www.golfgenius.com/pages/6093307' }, { label: 'Girls', href: 'https://www.golfgenius.com/pages/6093307' }] },
    { t: 'callout', title: 'Series Championship', text: 'The top 24 boys and 12 girls are invited to the Series Championship at Sutton Bay on Monday, July 20. If an invited player can’t attend, the next player on the list is invited.' },
    { t: 'h2', text: 'Team South Dakota' },
    { t: 'buttons', items: [{ label: 'Boys', href: 'https://www.golfgenius.com/pages/6093307' }, { label: 'Girls', href: 'https://www.golfgenius.com/pages/6093307' }] },
    { t: 'callout', title: 'Earning a spot', text: 'The top 3 boys and girls earn spots on Team South Dakota. The fourth and final members are chosen by the Team South Dakota Committee. The first members will be announced in fall 2026.', label: 'About Team South Dakota', href: P('team-south-dakota') }
  ] },
  'team-south-dakota': { section: 'Junior Golf', title: 'Team South Dakota', intro: 'South Dakota has been selected by the United States National Development Program (USNDP) to be among the next 16 states to begin a State Junior Team.', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2025/09/SouthDakota_USNDP_Logo_Color-300x164.png', alt: 'Team South Dakota — USNDP', w: '240px' },
    { t: 'p', text: 'Team South Dakota will create new opportunities for the development of elite junior golfers in our state and across the country. The USNDP focuses on six key pillars: talent identification, access to competition, national teams, athlete resources, player development and relations, and athlete financial support.' },
    { t: 'p', text: 'The first players — four boys and four girls — will be named in late fall 2026. Candidates accumulate points in State, Regional and National competitions throughout the 2026 season. The top three boys and girls are named on points; the final players are the Committee’s at-large choices. A Team Coach and Team Captain will lead the team, providing training and competitive opportunities.' },
    { t: 'buttons', items: [{ label: 'Point standings', href: 'https://www.golfgenius.com/pages/6084132', primary: true }, { label: 'Points list (PDF)', href: 'https://www.sdga.org/wp-content/uploads/2026/01/TEAM-SD-Points.pdf' }] },
    { t: 'h2', text: 'Team South Dakota FAQs' },
    { t: 'faq', items: [
      { q: 'What is the purpose of the team?', a: 'The USNDP aims to expand, strengthen and diversify the junior golf pipeline by creating development, competitive and talent-identification opportunities within each state for elite athletes ages 13–18. South Dakota joins this initiative in 2026.' },
      { q: 'Who will play for Team South Dakota?', a: 'The Committee will name four boys and four girls following the 2026 fall season. Athletes earn their way on through outstanding competitive performance during the year.' },
      { q: 'Do you need to be a South Dakota resident?', a: 'Yes. Only legal citizens of the United States and the state of South Dakota are eligible.' },
      { q: 'How old do you need to be?', a: 'Players must be 13 by January 1, 2027, must not reach their 19th birthday by July 19, 2027, and must not be enrolled in college for the 2026–2027 school year.' },
      { q: 'Are there other requirements?', a: 'Players must have an established Handicap Index® and have posted all eligible scores. The SDGA provides a FREE Youth Membership — including a Handicap Index — to all junior golfers under 19.' },
      { q: 'When will Team South Dakota start?', a: 'The team will be named in late fall 2026, with programming beginning in 2027. Players must earn their way onto the team each year.' },
      { q: 'Are team members part of the USNDP?', a: 'Yes. Team members join the USNDP for the following calendar year, with benefits that may include USGA/USNDP recognition, streamlined grant applications, exemptions into local AJGA events, and access to the USNDP statistical platform and development resources.' },
      { q: 'Are team members on the National Junior Team?', a: 'No. The National Junior Team is determined by the USGA and is a much smaller group than the combined State Teams.' },
      { q: 'What are the benefits?', a: 'A State Team bag, clothing and other team items, playing opportunities, instruction, and access to USNDP resources. More details to come.' },
      { q: 'How can you support the team?', a: 'Team South Dakota is seeking corporate and individual sponsors. Contact sdgainfo@sdga.org or 605-800-6709.' }
    ] },
    { t: 'h2', text: '2026 Team South Dakota Committee' },
    { t: 'people', items: [
      { role: 'Executive Director – SDGA', name: 'Tom Jansa' }, { role: 'SDGA Director', name: 'Ryan Trasamar' }, { role: 'SDGA Director', name: 'Natalie Young' },
      { role: 'CEO – SDGA Jr Golf Foundation & First Tee — SD', name: 'Julie Jansa' }, { role: 'SDGA Jr Golf Foundation Director', name: 'Glen Herrick' },
      { role: 'MN Section PGA · GM, The CC of Sioux Falls', name: 'Jared Andersen' }, { role: 'CO Section PGA · Director of Golf, Arrowhead', name: 'Jesse Hansen' },
      { role: 'Head Professional & First Tee Coach, Lee Park GC', name: 'Jon Murdy' }, { role: 'LPGA Tour', name: 'Kris Tschetter' }
    ] }
  ],
  sidebar: [{ title: 'Team South Dakota', links: [L('Timetable', 'https://www.sdga.org/wp-content/uploads/2025/10/Team-South-Dakota-Timetable.pdf', 1), L('FAQs (PDF)', 'https://www.sdga.org/wp-content/uploads/2025/10/Team-South-Dakota-FAQs.pdf', 1), L('Press Release', 'https://www.sdga.org/wp-content/uploads/2025/10/State-Junior-Team-Press-Release.pdf', 1), L('Points List', 'https://www.sdga.org/wp-content/uploads/2026/01/TEAM-SD-Points.pdf', 1), L('Point Standings', 'https://www.golfgenius.com/pages/6084132', 1), L('Donate Now', P('jr-golf-foundation'))] },
    { title: 'US National Development Program', links: [L('USNDP Homepage', 'https://championships.usga.org/usndp.html', 1), L('USNDP Grant Program', 'https://www.usga.org/content/usga/home-page/usndp-home-page/grant-information.html', 1), L('USNDP FAQs', 'https://championships.usga.org/usndp/about-us.html', 1), L('Mission, Values & Pillars', 'https://www.usga.org/content/usga/home-page/usndp-home-page/national-development-program--mission-and-vision.html', 1), L('Sign Up for USNDP Updates', 'https://www.usga.org/content/usga/home-page/usndp-home-page/sign-up-for-usndp-updates.html', 1)] }] },
  'junior-pga-qualifying': { section: 'Junior Golf', title: 'Junior PGA Championship Qualifying', intro: 'June 19, 2026 · Central Valley GC, Hartford, SD', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2026/03/SDGA-MNPGA-no-background-300x148.png', alt: 'SDGA and Minnesota PGA', w: '240px' },
    { t: 'p', text: 'Boys have the opportunity to qualify for the Minnesota Boys Junior PGA Championship on June 19 at Central Valley GC in Hartford — a unique opportunity to play in a regional junior championship.' },
    { t: 'p', text: 'There is no qualifier for girls; they can register directly for the Minnesota Girls Junior PGA Championship.' },
    { t: 'callout', title: 'Road to a junior major', text: 'Top finishers at the Minnesota Junior PGA Championship qualify for the 2026 National Boys and Girls Junior PGA Championship in Frisco, TX.', label: 'Learn more & register', href: 'https://www.minnesotajuniorgolf.com/championships/junior-pga-championships/' },
    { t: 'h2', text: 'Eligibility' },
    { t: 'list', items: [
      'Players qualify within the PGA Section in which they reside (where they spend 183+ days per year), and may not compete for an exemption in more than one Section.',
      'The Minnesota Section PGA includes Minnesota, North Dakota, South Dakota (less areas surrounding Rapid City, Vermillion and Yankton), and part of western Wisconsin including St. Croix County and Superior.',
      'Players must be 18 or younger on the final day of the Championship (July 31, 2026).',
      'Players must be amateurs as defined by the USGA and may not be full-time college students.'] }
  ] },
  'notah-begay-qualifier': { section: 'Junior Golf', title: 'Notah Begay III Qualifier', intro: 'July 15 · Elkhorn Ridge, Rapid City — held with our SDGA | Sanford International Series event.', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2023/12/NB3-Banner.png', alt: 'Notah Begay III Junior Golf National Championship', w: '100%' },
    { t: 'p', text: 'The SDGA and NB3 have partnered to bring South Dakota’s junior golfers a chance to qualify for the Notah Begay III Jr. National Golf Championship.' },
    { t: 'p', text: 'Players who qualify advance to a Regional Qualifier with the opportunity to play in the National Championship. All junior golfers aged 10–18 are encouraged to sign up and participate.' },
    { t: 'buttons', items: [{ label: 'Register', href: 'https://www.golfgenius.com/pages/5805476', primary: true }, { label: 'NB3 information', href: 'https://www.jgnc.org/' }] }
  ] },
  'drive-chip-putt': { section: 'Junior Golf', title: 'Drive, Chip & Putt', intro: 'We encourage all South Dakota juniors to compete in a local Drive, Chip and Putt qualifier.', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2025/01/Drive_Chip_Putt-logo-150x150.png', alt: 'Drive, Chip and Putt', w: '130px' },
    { t: 'p', text: 'By tapping the creative and competitive spirit of girls and boys ages 7–15, Drive, Chip and Putt gives aspiring junior golfers an opportunity to play with their peers in qualifiers around the country. Participants who advance through local, sub-regional and regional qualifying earn a place in the National Finals at Augusta National Golf Club the Sunday before the Masters, broadcast live on Golf Channel.' },
    { t: 'buttons', items: [{ label: 'Drive, Chip & Putt registration & info', href: 'https://www.drivechipandputt.com/', primary: true }] },
    { t: 'h2', text: 'South Dakota locations' },
    { t: 'linklist', items: [L('June 12, 2026 — Moccasin Creek Country Club, Aberdeen', 'https://www.drivechipandputt.com/2027/local-qualifier/moccasin-creek-country-club', 1), L('July 8, 2026 — Elmwood Golf Course, Sioux Falls', 'https://www.drivechipandputt.com/2027/local-qualifier/elmwood-golf-course', 1)] }
  ] },
  'jr-golf-foundation': { section: 'Junior Golf', title: 'SDGA Junior Golf Foundation', intro: 'Carrying out charitable and educational purposes in support of junior golf — for boys and girls of any age through high school graduation.', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2022/02/SDGA_JuniorGolf_Foundation_RGB-300x248.png', alt: 'SDGA Junior Golf Foundation', w: '200px' },
    { t: 'h2', text: 'Mission and vision' },
    { t: 'p', text: 'The purpose of the South Dakota Golf Association Junior Golf Foundation is exclusively to carry out charitable and educational purposes in support of Junior Golf. Junior Golf is broadly defined as golf projects and programs for boys and girls of any age through high school graduation.' },
    { t: 'p', text: 'The mission of First Tee — South Dakota is to improve the lives of young people by providing educational programs and learning environments that build character, instill life-enhancing values, and promote healthy choices through the game of golf.' },
    { t: 'cards', items: [
      { title: 'Team South Dakota', href: P('team-south-dakota'), text: 'Part of the US National Development Program, creating development, competitive and talent-identification opportunities for elite athletes ages 13–18 in South Dakota.' },
      { title: 'First Tee — South Dakota', href: 'https://firstteesouthdakota.org/', text: 'The Foundation supports First Tee — South Dakota, a youth development program that teaches golf, values and life skills to young people across the state.' },
      { title: 'Junior Golf Scholarships', href: P('junior-golf-scholarships'), text: 'Up to six $1,500 scholarships are awarded annually to graduating seniors attending a post-high-school institution. Apply by June 30.' }
    ] },
    { t: 'callout', title: 'Support junior golf in South Dakota', text: 'Your gift helps fund scholarships, First Tee — South Dakota and Team South Dakota.', label: 'Donate now', href: 'https://www.golfgenius.com/pages/1846474' }
  ], sidebar: [{ title: 'Links', links: [L('Donate Now', 'https://www.golfgenius.com/pages/1846474', 1), L('Ways to Give', P('ways-to-give')), L('Junior Golf Scholarships', P('junior-golf-scholarships')), L('First Tee — South Dakota', 'https://www.firstteesouthdakota.org/', 1), L('Team South Dakota', P('team-south-dakota'))] },
    { title: 'Forms & resources', links: [L('Scholarship Application (PDF)', 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8e4928c3-159a-4610-9620-4bcbc19ecb42', 1), L('Scholarship Application (Online)', 'https://forms.gle/dPiXNT1qPgWsYjZD7', 1)] }] },
  'ways-to-give': { section: 'Junior Golf', title: 'Ways to Give', intro: 'Support the SDGA Junior Golf Foundation and help build its endowment.', blocks: [
    { t: 'p', text: 'Members and friends of the South Dakota Golf Association can support the Foundation through gifts made during their lifetime, gifts made by will, endowment gifts, memorial gifts, gift annuities, and all other types of gifts and contributions.' },
    { t: 'callout', title: 'Let’s talk', text: 'Contact Julie Jansa at julie@sdga.org or 605-310-2931 to discuss any of these opportunities.', label: 'Donate now', href: 'https://www.golfgenius.com/pages/1846474' },
    { t: 'h3', text: 'Life insurance' },
    { t: 'p', text: 'Life insurance offers an attractive way to provide for both your family and the Foundation. The face amount of the policy is paid to the Foundation, and the premiums you pay are deductible as a charitable contribution.' },
    { t: 'h3', text: 'Lifetime gifts' },
    { t: 'p', text: 'Giving appreciated property — real estate, securities or other assets — lets you take a deduction for part or all of its value and may avoid tax on the appreciation. Gifts of other property are welcome whether or not it has appreciated.' },
    { t: 'h3', text: 'Wills' },
    { t: 'list', items: ['A percentage of your entire estate.', 'A specific amount from your estate.', 'All or a percentage of the residue of your estate.', 'A specific bequest of property — real estate, securities, personal property, goods or business interest.', 'A share of your estate or property contingent upon events after your death.'] },
    { t: 'h3', text: 'Trusts' },
    { t: 'p', text: 'Property can be transferred to a trust managed by a trustee of your choosing. You and other beneficiaries receive income for life; the principal then passes to the Foundation. Funding with appreciated property can avoid capital gains tax and provide income and estate tax savings. Trusts should be tailored to your needs.' },
    { t: 'h3', text: 'Gift annuities' },
    { t: 'p', text: 'Give cash to the Foundation while retaining investment income for you or a survivor’s lifetime, after which the principal goes to the Foundation in your name.' },
    { t: 'h3', text: 'Life estate gift' },
    { t: 'p', text: 'Give a personal residence (including a vacation home) or farm while retaining the right to use it for life or a term of years — with a current income tax deduction and potential probate and estate tax savings.' },
    { t: 'p', text: 'Please consult your professional advisors about your individual circumstances before relying on these descriptions.' }
  ], sidebar: [{ title: 'Links', links: [L('Donate Now', 'https://www.golfgenius.com/pages/1846474', 1), L('Ways to Give', P('ways-to-give')), L('Junior Golf Scholarships', P('junior-golf-scholarships')), L('First Tee — South Dakota', 'https://www.firstteesouthdakota.org/', 1), L('Team South Dakota', P('team-south-dakota'))] },
    { title: 'Forms & resources', links: [L('Scholarship Application (PDF)', 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8e4928c3-159a-4610-9620-4bcbc19ecb42', 1), L('Scholarship Application (Online)', 'https://forms.gle/dPiXNT1qPgWsYjZD7', 1)] }] },
  'junior-golf-scholarships': { section: 'Junior Golf', title: 'Junior Golf Scholarships', intro: '$1,500 scholarships for high school seniors attending a two- or four-year post-high-school institution next fall.', blocks: [
    { t: 'p', text: 'Scholarships are paid in the second semester of freshman year. Winners are responsible for sending verification from their school that they are enrolled full time for the spring semester.' },
    { t: 'callout', title: 'Application deadline: June 30', text: 'Apply online or download the PDF application.', label: 'Apply online', href: 'https://forms.gle/dPiXNT1qPgWsYjZD7' },
    { t: 'h2', text: 'Requirements' },
    { t: 'list', items: ['Lived in South Dakota for at least the past two years.', 'Attending a two- or four-year college, university, or accredited post-high-school institution starting next fall.', 'Complete the Scholarship Application with a cover letter, golf resume, extracurricular activity document, transcript, essay and references.'] },
    { t: 'h2', text: 'Screening of applicants' },
    { t: 'p', text: 'A committee of SDGA Junior Golf Foundation directors selects the winners. Applicants must be a participant (or dependent of a participant) in SDGA events, or an active First Tee — South Dakota participant — this is given high priority.' },
    { t: 'p', text: 'Applicants are also judged on participation in golf at the local club level, high school academic achievement, First Tee volunteerism, participation in non-golf activities, and leadership, honesty, integrity and sportsmanship.' },
    { t: 'buttons', items: [{ label: '2025 Scholarship winners', href: 'https://www.sdga.org/wp-content/uploads/2026/01/Scholarship-Winners-2025.pdf' }] }
  ], sidebar: [{ title: 'Links', links: [L('Donate Now', 'https://www.golfgenius.com/pages/1846474', 1), L('Ways to Give', P('ways-to-give')), L('Junior Golf Scholarships', P('junior-golf-scholarships')), L('First Tee — South Dakota', 'https://www.firstteesouthdakota.org/', 1), L('Team South Dakota', P('team-south-dakota'))] },
    { title: 'Forms & resources', links: [L('Scholarship Application (PDF)', 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8e4928c3-159a-4610-9620-4bcbc19ecb42', 1), L('Scholarship Application (Online)', 'https://forms.gle/dPiXNT1qPgWsYjZD7', 1)] }] },

  'hof-banquet': { section: 'Hall of Fame', title: '2026 Annual Banquet & Hall of Fame Induction', intro: 'Celebrate our 2026 Golfers of the Year and Hall of Fame inductees. This event is open to the public.', blocks: [
    { t: 'steps', items: [{ title: 'Saturday, Oct 24, 2026', text: 'Date' }, { title: 'Social 5 PM · Dinner 6 PM', text: 'Program follows dinner' }, { title: 'Country Club of Sioux Falls', text: 'Location' }] },
    { t: 'buttons', items: [{ label: 'Purchase banquet tickets', href: 'https://www.golfgenius.com/pages/6210040', primary: true }] },
    { t: 'h2', text: '2026 SDGA Golf Hall of Fame inductees' },
    { t: 'gallery', items: [{ src: 'https://www.sdga.org/wp-content/uploads/2026/06/Gretchen-Headshot-196x300.jpg', cap: 'Gretchen Idema Hughes' }, { src: 'https://www.sdga.org/wp-content/uploads/2026/06/Tom-Headshot-246x300.jpg', cap: 'Tom Jansa' }] },
    { t: 'h3', text: 'Gretchen Idema Hughes, Sioux Falls' },
    { t: 'p', text: 'Gretchen Grote grew up in Dubuque, Iowa, and took up the game through free junior golf lessons with Dubuque Country Club professional Howie Atten. She had a stellar high school career, including state titles for Dubuque High School, and continued to play competitively while earning her bachelor’s and master’s degrees.' },
    { t: 'p', text: 'She burst onto the South Dakota golf scene in 1968, winning the SDGA Women’s Amateur on her first try — the start of an incredible run in which she added three more titles and five runner-up finishes over the next 11 years. Gretchen was named Independent Female Athlete of the Year in 1971 by the South Dakota Sportswriters Association.' },
    { t: 'h3', text: 'Tom Jansa, Sioux Falls' },
    { t: 'p', text: 'Tom Jansa grew up in the North End of Sioux Falls, honing his game on a makeshift course across the Hawthorne Elementary playground. He graduated to Elmwood Golf Course while caddying at Minnehaha Country Club, and later worked on the Minnehaha grounds crew under Gene Reiter. In 1987, Terry Comstock suggested he return from Scottsdale to work alongside him at Elmwood. Over the next 30 years as a PGA Professional, Tom helped operate the three City of Sioux Falls courses — including opening Prairie Green GC and supervising the complete 27-hole Elmwood renovation.' },
    { t: 'p', text: 'Tom brought First Tee programming to Elmwood, becoming the first recognized First Tee coach in South Dakota, and helped introduce PGA HOPE for military service members. In 2015 he succeeded Hall of Famer Rod Garrison as head coach at O’Gorman High School, winning seven State Championships. In 2018 he became the fifth Executive Director of the SDGA. A Rules expert, he has officiated at three USGA National Championships. Tom joins his brother Steve, nephew Ryan, and Ryan’s wife Julie in the Hall of Fame.' }
  ],
  sidebar: [{ title: 'Hall of Fame', links: [L('South Dakota Golf Hall of Fame', 'SDGA v2 Hall of Fame.dc.html'), L('Gretchen Idema Hughes', 'SDGA v2 Hall of Fame - Gretchen Idema Hughes.dc.html'), L('Tom Jansa', 'SDGA v2 Hall of Fame - Tom Jansa.dc.html'), L('Purchase Tickets', 'https://www.golfgenius.com/pages/6210040', 1)] }] },
  'nomination-process': { section: 'Hall of Fame', title: 'Nomination Process', intro: 'Recognizing those who have distinguished themselves through excellence in golfing performance or notable service to the game.', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame2010-768x511.jpg', alt: 'South Dakota Golf Hall of Fame display', w: '100%' },
    { t: 'callout', title: 'Nominations due March 1', text: 'The Hall of Fame Committee evaluates nominees and forwards its recommendation to the SDGA Board, which reviews it in April. New members are inducted at the year-end SDGA Annual Banquet.', label: 'Online nomination form', href: 'https://forms.gle/A3dcx5h51C2yWqJRA' },
    { t: 'h2', text: 'Eligibility categories' },
    { t: 'cards', items: [
      { title: 'Skill', text: 'Demonstrated achievement including multiple championships in high-level competition at the state or national level.' },
      { title: 'Contribution', text: 'Demonstrated support or significant impact on the game, the SDGA and/or its Junior Golf Foundation, the USGA or another impactful golf organization, professional or amateur.' },
      { title: 'Skill / Contribution', text: 'Some combination of the above.' }
    ] },
    { t: 'h2', text: 'Criteria for inclusion' },
    { t: 'list', items: ['Nominee is at least 50 years of age.', 'Nominee was born, lived or educated in South Dakota, or currently has personal ties to South Dakota.'] },
    { t: 'h2', text: 'Nomination materials' },
    { t: 'list', items: ['Online Nomination Form', 'Letter of nomination from the nominator', 'Detailed biography of the nominee', 'At least two additional letters of recommendation', 'Optional: clippings, internet links, photographs'] },
    { t: 'p', text: 'Email supporting materials to SDGAInfo@sdga.org.' }
  ],
  sidebar: [{ title: 'Forms', links: [L('Online Hall of Fame Nomination Form', 'https://forms.gle/A3dcx5h51C2yWqJRA', 1)] }, { title: 'Links', links: [L('Join/Renew SDGA Membership', 'https://sdga.clubdashboard.org/join', 1), L('Donate', 'https://www.golfgenius.com/pages/1846474', 1)] }] },
  'hof-classic': { section: 'Hall of Fame', title: 'Hall of Fame Classic', intro: 'The Grand Opening of the South Dakota Golf Hall of Fame — September 23, 2019.', blocks: [
    { t: 'image', src: 'https://www.sdga.org/wp-content/uploads/2021/09/Everyone-HOF-Classic-1024x498.jpg', alt: 'Hall of Fame Classic group photo', w: '100%' },
    { t: 'p', text: 'On Monday, September 23, 2019, the greatest golfers and contributors in South Dakota golf history gathered for the Grand Opening of the South Dakota Golf Hall of Fame displays and exhibits. We played a scramble at Elmwood Golf Course, then gathered next door at the Holiday Inn & Suites for a Hall of Fame Derby. At the banquet we honored all 60 Hall of Fame members, along with our 2019 SDGA Champions, Junior Golf award winners, Junior Scholarship winners and Golfers of the Year.' },
    { t: 'callout', title: 'Visit the South Dakota Golf Hall of Fame', text: 'Holiday Inn & Suites, 2040 West Russell Street, Sioux Falls, SD.', label: 'Browse the Hall of Fame', href: 'SDGA v2 Hall of Fame.dc.html' },
    { t: 'h2', text: 'The displays' },
    { t: 'gallery', items: [{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame201.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame207.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame202.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame203.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame204.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame205.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20fame208.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame2010.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20fame209.jpg","cap":""},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame2011.jpg","cap":""}] },
    { t: 'h2', text: 'Hall of Fame members who played at Elmwood' },
    { t: 'gallery', wide: true, items: [{"src":"https://www.sdga.org/wp-content/uploads/2021/09/HOF20and20Family-crop-1250x608-97fd6.jpg","cap":"Terry Comstock, Patty Coddington, Coralee Jorgensen, Anne Borgmann, Tom Egan, Peggy Kirby, Kris Tschetter, Steve Jansa, Pat Lockwood, Don Platt, Marv White, Mike Brummer, Roger Legge, Jane Huizenga, Dean Zahn, Jay Huizenga, Dave Hanten, Mike Derby (John), Nancy Steen (Ivan)"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Brummer-crop-1250x608-97fd6.jpg","cap":"Brett Grosz, Mike Brummer (HOF), Tim Begeman, Derek Burshiem"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Coddington-Kirby-Jorgensen-crop-1250x608-97fd6.jpg","cap":"Patty Coddington (HOF), Peggy Kirby (HOF), Coralee Jorgensen (HOF), Keel Coddington"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Comstock-crop-1250x608-97fd6.jpg","cap":"Rick Dunlap, Ryan Anema, Terry Comstock (HOF), Paul Reiter"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Derby-crop-1250x608-97fd6.jpg","cap":"Andy Ainslie, Jason Durnil, Evan Barnes, Mike Derby (son of HOF John Derby)"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Egan-crop-1250x608-97fd6.jpg","cap":"Barry Matson, John Egan (son of HOF Tom Egan), Jon Peterson, Jim Lather"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Four20Eds-crop-1250x608-97fd6.jpg","cap":"SDGA Executive Directors, all HOF members: Wade Merry, Tom Egan, Jay Huizenga, Don Platt"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Hanten-Platt-Donohue-Bartling-crop-1250x608-97fd6.jpg","cap":"Dick Bartling (son of HOF Lorne), Dave Hanten (HOF), Tim Donohue (son of HOF Phil), Don Platt (HOF)"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Huizenga-Legge-crop-1250x608-97fd6.jpg","cap":"Roger Legge (HOF), Barb Legge, Jane and Jay Huizenga (HOF), Mary and Kevin Kroeze"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Lockwood-crop-1250x608-97fd6.jpg","cap":"Ron Einspahr, Pat Lockwood (HOF), Mark Ovenden, Matt Einspahr"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Merry-crop-1250x608-97fd6.jpg","cap":"Wade Merry, Sandy Jorgensen, Pam Hoiland, Craig Jorgensen"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Reiter-crop-1250x608-97fd6.jpg","cap":"Gene Reiter (HOF) family: Bill (son), Steve (grandson), Alex Hamer, Jimmy (son)"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Schock-crop-1250x608-97fd6.jpg","cap":"Paul Schock (HOF), Matthew Schock, Troy Klongerbo, Kyle Schock"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Tschetter-Jansa-crop-1250x608-97fd6.jpg","cap":"Dave Jansa, Nancy Steen Pflug (daughter of HOF Ivan Steen), Steve Jansa (HOF), Kris Tschetter (HOF), Dave Simons"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/White-crop-1250x608-97fd6.jpg","cap":"Marv White (HOF), Kyle White, Kevin Buntrock, Sam Buntrock"},{"src":"https://www.sdga.org/wp-content/uploads/2021/09/Zahn-crop-1244x601-a51d7.jpg","cap":"Dean Zahn (HOF), Carl Bot, Tyler Zahn, Jeff Stockert"}] }
  ] },

  'about': {
    section: 'More', title: 'About the SDGA',
    intro: 'The mission of the South Dakota Golf Association is to support, preserve, and advance golf in South Dakota.',
    blocks: [
      { t: 'h2', text: 'Making South Dakota golf better' },
      { t: 'p', text: 'Since 1921 the SDGA has been dedicated to serving golfers and advancing the game by promoting fair competition, preserving its traditions, and providing opportunities that strengthen golf across the state.' },
      { t: 'p', text: 'The SDGA conducts 30 Championships, hosts the statewide SDGA Junior Tour for junior golfers ages 8 to 18, and oversees several USGA Qualifiers. The SDGA administers the GHIN handicap system and conducts course ratings for member clubs. The SDGA Junior Golf Foundation awards college scholarships, supports Team SD as part of the US National Development Program, and impacts 30,000 young people through First Tee — South Dakota.' },
      { t: 'p', text: 'Over 90 clubs and more than 15,000 individuals are members of the SDGA.' },
      { t: 'cards', items: [
        { title: 'Handicapping', href: P('world-handicap-system'), text: 'The SDGA is authorized by the USGA to administer the World Handicap System™ and to issue Course Ratings™.' },
        { title: 'SDGA Junior Golf Foundation', href: P('jr-golf-foundation'), text: 'The Foundation oversees First Tee — South Dakota and awards scholarships to graduating high school seniors.' },
        { title: 'Growing the game', text: 'Through our efforts and by supporting our member clubs, the SDGA continually strives to improve the game of golf in South Dakota.' }
      ] },
      { t: 'callout', title: 'Volunteer / Serve', text: 'There are many ways to help the SDGA administer quality events, serve member clubs, and grow the game.', label: 'Get involved', href: P('volunteer-and-serve') },
      { t: 'h2', text: 'SDGA staff' },
      { t: 'people', items: [
        { role: 'Executive Director / CEO', name: 'Tom Jansa, PGA', meta: 'tom@sdga.org', href: 'mailto:tom@sdga.org' },
        { role: 'Chief Operating Officer', name: 'Joel McCartney', meta: 'Course Rating, Handicap Administration & Member Services · joel@sdga.org', href: 'mailto:joel@sdga.org' },
        { role: 'Director of Competitions', name: 'Dean Zahn, PGA', meta: 'dean@sdga.org', href: 'mailto:dean@sdga.org' },
        { role: 'Junior Tour Coordinator', name: 'Scott Amundson', meta: 'scott@sdga.org', href: 'mailto:scott@sdga.org' }
      ] },
      { t: 'h3', text: 'SDGA interns' },
      { t: 'people', items: [
        { role: 'Metro / Southeast', name: 'Will Suing, Justin Payer, Brock Henning, Camden Elliott, Logan Collette, Sophie Jansa' },
        { role: 'Northeast', name: 'Hayley Wirebaugh, Chloe Vikander, Addison Gage' },
        { role: 'West', name: 'Tanna Phares, Rylan Horning, Hayden Heig, Quinn Lewison, Leo Daiss' }
      ] },
      { t: 'h2', text: 'SDGA Board of Directors' },
      { t: 'people', items: [
        { role: 'President', name: 'Karla Cotton', meta: 'Sioux Falls · 2nd term – 2027' },
        { role: 'Vice President', name: 'Ryan Messick', meta: 'Rapid City · 2nd term – 2028' },
        { role: 'Secretary', name: 'Ben Irlbeck', meta: 'Elk Point · 2nd term – 2028' },
        { role: 'Past President', name: 'Bruce Ashland', meta: 'Rapid City' },
        { role: 'Board Member', name: 'Morgan Johnson', meta: 'Watertown · 1st term – 2027' },
        { role: 'Board Member', name: 'Royaune Jasinski', meta: 'Rapid City · 1st term – 2026' },
        { role: 'Board Member', name: 'Kelly Farrar', meta: 'Rapid City · 2nd term – 2027' },
        { role: 'Board Member', name: 'Chris Long', meta: 'Presho · 1st term – 2028' },
        { role: 'Board Member', name: 'John Hime', meta: 'Sioux Falls · 1st term – 2027' },
        { role: 'Board Member', name: 'Natalie Young', meta: 'Pierre · 1st term – 2028' },
        { role: 'Board Member', name: 'Jeff Salter', meta: 'Rapid City · 2nd term – 2028' },
        { role: 'Board Member', name: 'Brandon Sigmund', meta: 'Mitchell · 2nd term – 2027' },
        { role: 'Board Member', name: 'Sam Olson', meta: 'Sioux Falls · 1st term – 2027' },
        { role: 'Board Member', name: 'Josh Wendling', meta: 'Jefferson · 1st term – 2026' },
        { role: 'Board Member', name: 'Ryan Trasamar', meta: 'Sioux Falls · 2nd term – 2028' },
        { role: 'PGA Advisor', name: 'Jason Crisp, PGA', meta: 'Sioux Falls · 2nd term – 2027' }
      ] },
      { t: 'buttons', items: [{ label: 'SDGA Board — information & application', href: 'https://www.sdga.org/wp-content/uploads/2022/02/SDGA-Board-Information-and-Application.pdf' }] },
      { t: 'h2', text: 'SDGA Junior Golf Foundation staff' },
      { t: 'people', items: [
        { role: 'CEO, SDGA Jr Golf Foundation & First Tee — South Dakota', name: 'Julie Jansa', meta: 'julie@sdga.org', href: 'mailto:julie@sdga.org' },
        { role: 'Operations Director, First Tee — South Dakota', name: 'Kelli Sinksen', meta: 'kelli@sdga.org', href: 'mailto:kelli@sdga.org' }
      ] },
      { t: 'h2', text: 'Junior Golf Foundation Board of Directors' },
      { t: 'people', items: [
        { role: 'President', name: 'Kristy Griffin', meta: 'Sioux Falls' }, { role: 'Vice President', name: 'Jordan Anderson', meta: 'Sioux Falls' },
        { role: 'Secretary', name: 'Glen Herrick', meta: 'Sioux Falls' }, { role: 'Treasurer', name: 'Jay Huizenga', meta: 'Sioux Falls' },
        { role: 'Board Member', name: 'Christie Aberson', meta: 'Sioux Falls' }, { role: 'Board Member', name: 'Jared Schnabel', meta: 'Aberdeen' },
        { role: 'Board Member', name: 'Sam Olson', meta: 'Sioux Falls' }, { role: 'Board Member', name: 'Greg Heiberger', meta: 'Brookings' },
        { role: 'Board Member', name: 'Ryan Messick', meta: 'Sioux Falls' }, { role: 'Board Member', name: 'Jack Hieb', meta: 'Aberdeen' },
        { role: 'Board Member', name: 'Tommy Johnson', meta: 'Sioux Falls' }, { role: 'Board Member', name: 'Kate Patrick', meta: 'Sioux Falls' },
        { role: 'SDGA President', name: 'Karla Cotton', meta: 'Sioux Falls' }, { role: 'Board Member', name: 'Rich Wells', meta: 'Rapid City' },
        { role: 'SDGA Executive Director', name: 'Tom Jansa, PGA', meta: 'Sioux Falls' }
      ] },
      { t: 'buttons', items: [{ label: 'Jr Golf Foundation Board — information', href: 'https://www.sdga.org/wp-content/uploads/2022/03/SDGA-Junior-Golf-Foundation-Board-Information.pdf' }] }
    ]
  },
  'employment': { section: 'More', title: 'Employment', intro: 'Join the SDGA team and work in a fun, fast-paced environment with people who love the game.', blocks: [
    { t: 'h2', text: 'Current openings — Summer 2026' },
    { t: 'linklist', items: [
      L('SDGA 2026 Summer Internship — West / Rapid City', 'https://www.sdga.org/wp-content/uploads/2026/03/SDGA-Intern-Job-Description-2026.3-West-Region.pdf', 1),
      L('SDGA 2026 Summer Internship — Northeast South Dakota', 'https://www.sdga.org/wp-content/uploads/2026/04/SDGA-Intern-Job-Description-2026.3-Northeast-Region.pdf', 1),
      L('SDGA 2026 Summer Internship — Southeast / Sioux Falls', 'https://www.sdga.org/wp-content/uploads/2026/03/SDGA-Intern-Job-Description-2026.3-Southeast-Region.pdf', 1),
      L('First Tee — South Dakota positions', 'https://firstteesouthdakota.org/get-involved/employment/', 1)] },
    { t: 'callout', title: 'Meet the team', text: 'See SDGA staff, interns, and both Boards of Directors.', label: 'About the SDGA', href: P('about') }
  ] },
  'news': { section: 'More', title: 'News', intro: 'The latest from the South Dakota Golf Association.', blocks: [
    { t: 'cards', items: [
      { meta: 'Jul 1, 2026', img: 'https://www.sdga.org/wp-content/uploads/2026/06/Gretchen-Golf-Shot-227x300.jpg', title: 'Two to be inducted into the SDGA Golf Hall of Fame', text: 'Gretchen Idema Hughes and Tom Jansa will be inducted at the SDGA Annual Banquet on Saturday, October 24, 2026.', href: 'https://www.sdga.org/two-to-be-inducted-into-the-sdga-golf-hall-of-fame/' },
      { meta: 'Mar 10, 2026', img: 'https://www.sdga.org/wp-content/uploads/2021/09/Hall20of20Fame2010-768x511.jpg', title: 'April 11, 2026 – SDGA Annual Banquet & Hall of Fame Induction', text: 'The new Elmwood Golf Course clubhouse, home of the SDGA Hall of Fame, hosts the Spring Annual Banquet honoring 2025 inductees and Golfers of the Year.', href: 'https://www.sdga.org/april-11-2026-sdga-annual-banquet-hall-of-fame-induction/' },
      { meta: 'Feb 5, 2026', img: 'assets/hero-more.jpg', title: 'SDGA announces Board of Directors and Officers', text: 'Karla Cotton of Sioux Falls was elected Board President at the January 2026 annual meeting, with Ryan Messick of Rapid City serving as Vice President.', href: 'https://www.sdga.org/sdga-announces-board-of-directors-and-officers/' },
      { meta: 'Oct 21, 2025', img: 'assets/hero-competitive.jpg', title: '2025 SDGA Golfers of the Year', text: 'Jake Olson and McKenzie Mages headline the 2025 class after each completing the SDGA Major double.', href: P('golfers-of-the-year') },
      { meta: 'Nov 11, 2024', img: 'assets/hero-alt-tee.jpg', title: 'Dean Zahn – SDGA Director of Competitions', text: 'Dean Zahn of Aberdeen joined the SDGA as Director of Competitions starting January 1, 2025.', href: 'https://www.sdga.org/dean-zahn-sdga-director-of-competitions/' },
      { meta: 'Jul 19, 2024', img: 'assets/hof-hero.jpg', title: 'Three elected to the South Dakota Golf Hall of Fame', text: 'Three new members were elected to the South Dakota Golf Hall of Fame.', href: 'https://www.sdga.org/three-elected-to-the-sdga-south-dakota-golf-hall-of-fame/' },
      { meta: 'Jun 2, 2023', img: 'assets/hof-hero-alt.jpg', title: 'Five elected to SDGA Golf Hall of Fame', text: 'Five new members were elected to the South Dakota Golf Hall of Fame.', href: 'https://www.sdga.org/five-elected-to-sdga-golf-hall-of-fame/' },
      { meta: 'Mar 31, 2022', img: 'assets/hero-junior.jpg', title: 'South Dakota juniors tee it up at The Masters', text: 'Lincoln Trasamar and Lauren Wolthuizen of Sioux Falls competed in the Drive, Chip and Putt National Finals at Augusta National.', href: 'https://www.sdga.org/south-dakota-juniors-tee-it-up-at-the-masters-drive-chip-putt/' },
      { meta: 'Sep 15, 2021', img: 'https://www.sdga.org/wp-content/uploads/2022/03/Tom-Egan-Crop-733x1024-1-e1646325661907-300x266.jpg', title: 'Tom Egan, SDGA Hall of Famer, passes away', text: 'Tom was a founding board member and the third Executive Director of the SDGA, inducted into the Hall of Fame in 2008.', href: 'https://www.sdga.org/tom-egan-sdga-hall-of-famer-passes-away/' },
      { meta: 'Jul 10, 2021', img: 'https://www.sdga.org/wp-content/uploads/2021/07/GPS-300x202.jpg', title: 'USGA to release GPS to enhance GHIN app', text: 'The USGA is adding a GPS option to the GHIN app, with a wide array of game and scoring improvement technology.', href: 'https://www.sdga.org/usga-to-release-gps-in-july-to-enhance-ghin-app/' }
    ] }
  ] },
  'contact': { section: 'More', title: 'Contact', intro: '2600 W Russell Street, Sioux Falls, SD 57104', blocks: [
    { t: 'cards', items: [
      { title: 'Call', text: '605-800-6709' },
      { title: 'Email', text: 'sdgainfo@sdga.org', href: 'mailto:sdgainfo@sdga.org' },
      { title: 'Text only', text: '605-800-6435 — the best contact method during events. Standard messaging and data rates apply. Reply STOP to opt out.' },
      { title: 'GHIN app', text: 'Submit a request through the GHIN mobile app.' },
      { title: 'Join / Renew', text: 'Membership and Handicap Index.', href: 'https://sdga.clubdashboard.org/' }
    ] },
    { t: 'h2', text: 'Send us a message' },
    { t: 'form' }
  ] }
};
})();
