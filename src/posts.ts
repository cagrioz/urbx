// Post 1: DEMO
export const demo = {
    label: 'latest urbx news',
    title: 'September 2024 <strong>DEMO</strong> Latest Innovations and Insights',
    description: 'URBX has entered into a strategic partnership with ISD to introduce cutting-edge robotic solutions.',
    slug: 'demo',
    date: '2023-09-13',
    media: {
        videoSrc: '/news/demo/featured.mp4',
    },
    imageWithGridContent: {
        label: 'DEMO',
        title: "URBX's Inaugural DEMO Reveals Exciting New Features and Capabilities",
        image: '/news/demo/content_1.jpg',
        content: `<div><h4>About the DEMO</h4><p>In September 2024, URBX hosted its inaugural DEMO, presenting the latest advancements in robotic technology. This event showcased the unique features and benefits of their innovations within the automated warehouse sector. Over 30 attendees received an exclusive look at URBX’s groundbreaking technology, including the new GridBot, TowerBot, and conveyor system, demonstrated within a compact 10-foot racking system. This DEMO represents a significant milestone for URBX, highlighting the company&apos;s commitment to delivering a revolutionary system designed to enhance efficiency and transform warehouse operations.</p></div><div><h4>Key Components</h4><p>The DEMO featured an advanced system incorporating the latest GridBot, two TowerBots, and a conveyor system, all engineered for optimal performance. The system demonstrated at the event was designed for efficient operation with two TowerBots and one GridBot. On the left side of the setup, a conveyor mechanism was utilized, where one TowerBot retrieved multiple totes from storage and transported them to the conveyor system for further processing. On the right side, the racking system included a GridBot interacting with a separate TowerBot. In this configuration, the TowerBot collected multiple totes from storage and delivered them to a designated buffer zone. From there, the GridBot handled the totes, ensuring precise and efficient picking operations. The DEMO effectively showcased the system&apos;s capability to store and retrieve numerous totes within a multi-level racking system at high speeds, all through a fully automated process. This event marked a significant milestone, highlighting the advancements of the URBX system to a select group of attendees and underscoring the notable progress and growth achieved by URBX.</p>
        </div>`,
    },
    quoteCommentContent: {
        comment:
            "At ISD, we've always been at the forefront of warehouse automation. The URBX system aligns perfectly with our mission to provide our clients with the most efficient and innovative solutions. This technology's ability to complete 50-line orders in under 3 minutes is not just impressive – it's revolutionary.",
        authorName: 'Tony Margot',
        authorRole: 'VP of Sales, ISD',
        image: '/news/demo/isd_comment_cover.jpg',
        companyLogo: '/news/demo/isd_comment_logo.png',
    },
    imageWithGridAfterContent: {
        label: 'Importance',
        title: 'Redefining Robotics',
        videoSrc: '/news/demo/content_2.mp4',
        content: `<div><h4>Benefits</h4><p>The recent DEMO represented a significant milestone for URBX, setting the stage for new industry standards in automated storage and retrieval solutions. This demonstration not only showcased the system's high-performance capabilities but also highlighted the unique features that distinguish URBX's solutions in the marketplace...</p>
        </div>`,
    },
};

// Post 2: Transforming Warehouse
//import transformCoverImg from '../public/news/transforming_warehouse/skyhigh.png';

export const transformingWarehouse = {
    label: 'latest urbx news',
    title: 'Elevating Fulfillment: URBX Draws Inspiration from Otis to Revolutionize Warehousing',
    description: 'URBX has entered into a strategic partnership with ISD to introduce cutting-edge robotic solutions.',
    slug: 'transforming_warehouse',
    date: '2023-09-13',
    media: {
        image: '/news/transforming_warehouse/skyhigh.png',
    },
    imageWithGridContent: {
        label: 'Industry insight',
        title: 'Industry Insight and URBX Innovation',
        videoSrc: '/news/transforming_warehouse/content_1.mp4',
        content: `<div>
        <p>This week, we dive into a defining moment in architectural history: Elisha Graves Otis’s game-changing invention of the elevator. It didn’t just change how we build—it reimagined what was possible, and we see the same revolution happening today in warehouses.</p>
        <p>Before Otis’s innovation, buildings were capped at five stories, limiting the vertical growth of cities. Picture city streets with modest skylines, where the thought of towering skyscrapers was nothing but a distant dream. Otis’s elevator changed that forever. It allowed architects to reach for the sky, creating the iconic skylines we know today, and making vertical living a reality.</p>
        <p>Fast forward to the present, and warehouses are facing a similar hurdle. Traditional warehouse heights cap out at around 40 feet, putting a ceiling on efficiency and driving up real estate costs in a world where space is scarce. Like buildings before elevators, warehouses struggle to rise higher without the right technology. Over-stacking leads to safety risks and slows down the entire operation.</p>
        <p>As property costs soar in urban areas, the need to scale vertically in warehousing has never been more urgent. That’s where URBX steps in. Taking a page from Otis’s playbook, we’re rethinking warehouse design with robotic systems that reach up to 125 feet, enabling taller, smarter warehouses in the tightest spaces.</p>
        <p>URBX envisions a future where vertical space isn’t wasted. We’re building systems that make storage efficient and retrieval fast and safe. By embracing vertical integration, we’re streamlining operations, cutting inefficiencies, and making every square foot of your facility work harder.</p>
        <p>Looking ahead, URBX is leading the charge in this next era of warehousing. We see a future where businesses tap into the power of vertical scalability, ready to meet the demands of a fast-moving market. Join us as we reimagine what’s possible in warehouse operations, and unlock new heights of growth and efficiency.</p>
        </div>`,
    },
    imageWithGridAfterContent: {
        title: 'Benefits of Vertical Integration',
        videoSrc: '/news/demo/content_2.mp4',
        content: `<div>
        <p>URBX transforms how warehouses operate by harnessing the full potential of vertical integration, pushing the limits of storage efficiency and performance. Imagine warehouses that don’t just take up space but rise—up to 125 feet high—making every inch count. This vertical approach allows you to store more in a smaller footprint, making the most of real estate and unlocking valuable storage potential often left untapped.</p>
        <p>But it’s not just about space. With URBX’s smart dual-grid technology, retrieving items becomes lightning fast and incredibly efficient. Think of it as on-demand access to your inventory, drastically cutting down wait times and supercharging fulfillment speed. This streamlined approach not only reduces reliance on manual labor but also drives down costs, all while improving throughput.</p>
        <p>URBX's system seamlessly integrates into any warehouse setup, adapting to your unique space and needs. By expanding upward rather than outward, you're not just increasing storage—you're amplifying your operational flexibility. With URBX, you’re equipped to scale effortlessly, meet new demands, and enhance productivity—all within the same footprint.</p>
        </div>`,
    },
};

// Export all posts as an array
export const allPosts = [demo, transformingWarehouse];
export const featuredPost = transformingWarehouse;
