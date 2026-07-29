"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, Star } from "lucide-react";

// ── Deterministic pseudo-random (mulberry32) ──────────────────────────
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Data ──────────────────────────────────────────────────────────────
const FIRST_NAMES_MALE = [
  "James","Robert","John","Michael","David","William","Richard","Joseph",
  "Thomas","Christopher","Charles","Daniel","Matthew","Anthony","Mark",
  "Donald","Steven","Paul","Andrew","Joshua","Kenneth","Kevin","Brian",
  "George","Timothy","Ronald","Edward","Jason","Jeffrey","Ryan","Jacob",
  "Gary","Nicholas","Eric","Jonathan","Stephen","Larry","Justin","Scott",
  "Brandon","Benjamin","Samuel","Raymond","Gregory","Frank","Alexander",
  "Patrick","Jack","Dennis","Jerry","Tyler","Aaron","Jose","Nathan",
  "Henry","Peter","Douglas","Zachary","Kyle","Noah","Ethan","Jeremy",
  "Walter","Christian","Keith","Roger","Terry","Austin","Sean","Gerald",
  "Carl","Harold","Dylan","Arthur","Lawrence","Jordan","Jesse","Bryan",
  "Billy","Bruce","Gabriel","Joe","Logan","Albert","Willie","Alan",
  "Eugene","Russell","Vincent","Philip","Bobby","Johnny","Bradley",
  "Roy","Ralph","Eugene","Randy","Howard","Carlos","Russell","Louis",
];

const LAST_NAMES = [
  "Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis",
  "Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson",
  "Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson",
  "White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson",
  "Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen",
  "Hill","Flores","Green","Adams","Nelson","Baker","Hall","Rivera",
  "Campbell","Mitchell","Carter","Roberts","Gomez","Phillips","Evans",
  "Turner","Diaz","Parker","Cruz","Edwards","Collins","Reyes","Stewart",
  "Morris","Morales","Murphy","Cook","Rogers","Gutierrez","Ortiz",
  "Morgan","Cooper","Peterson","Bailey","Reed","Kelly","Howard","Ramos",
  "Kim","Cox","Ward","Richardson","Watson","Brooks","Chavez","Wood",
  "James","Bennett","Gray","Mendoza","Ruiz","Hughes","Price","Alvarez",
  "Castillo","Sanders","Patel","Myers","Long","Ross","Foster","Jimenez",
];

const TITLES = [
  "Aerodynamic Pioneer","Chief of Streamlining","Director of Precision",
  "Head of Micro-Engineering","VP of Compact Solutions","Minister of Efficiency",
  "Grand Optimiser","Chancellor of Minimalism","Dean of Subtlety",
  "Curator of Refinement","Architect of Brevity","Maestro of Understatement",
  "Sentinel of Sleekness","Baron of Biomechanics","Lord of Litheness",
  "Duke of Diminution","Captain of Compactness","Sage of Streamlining",
  "Warden of Wind Resistance","Marshal of Modesty","Knight of Nano-Scale",
  "Consul of Contraction","Prefect of Proportions","Oracle of Optimization",
  "Steward of Subtraction","Harbinger of Hydrodynamics","Fellow of Finesse",
  "Commander of Conciseness","Regent of Reduction","Viceroy of Velocity",
  "Ambassador of Aerodynamics","Commodore of Compactification",
];

const QUOTES = [
  "Less is more. I am living proof.",
  "My physical optimization is a feature, not a bug.",
  "Since joining the IMA, my mental clarity has increased by 42%.",
  "The drag coefficient doesn't lie.",
  "Precision at its finest. I've never felt more streamlined.",
  "They laughed. Then they saw my cognitive performance metrics.",
  "Excess is a flaw. I have no flaws.",
  "I used to feel burdened. Now I feel aerodynamic.",
  "The IMA showed me that smaller is smarter.",
  "Wind resistance? I barely register.",
  "My cardiovascular routing is optimized beyond belief.",
  "Every gram counts. I'm ahead of the curve.",
  "I've transcended conventional limitations.",
  "Peak efficiency isn't a goal—it's my default state.",
  "Society misunderstood me. The IMA understood me immediately.",
  "Certified compact. Certified brilliant.",
  "I'm not small. I'm precision-engineered.",
  "The future belongs to the streamlined.",
  "Micro-engineering at its finest.",
  "Evolution chose efficiency. So did I.",
  "Built different. Built better. Built smaller.",
  "My profile is reduced. My potential is not.",
  "A marvel of modern biological engineering.",
  "Uncompromising performance in a compact package.",
  "I've shed unnecessary biological weight for cognitive supremacy.",
  "They said size matters. They were right—smaller is superior.",
  "The IMA gave me purpose and a membership card.",
  "Compact by nature. Exceptional by choice.",
  "I walk with less drag and more confidence.",
  "Optimized vascular routing changed my life.",
];

const YEARS = [
  "2024","2023","2022","2021","2020","2019","2018","2017","2016","2015",
  "2014","2013","2012","2011","2010","2009","2008","2007","2006","2005",
];

interface Member {
  id: number;
  name: string;
  title: string;
  quote: string;
  joined: string;
  avatar: string;
  isAneesh?: boolean;
}

function generateMembers(): Member[] {
  const rand = mulberry32(42);
  const members: Member[] = [];
  const TOTAL = 901;

  for (let i = 0; i < TOTAL; i++) {
    const memberNumber = i + 1; // 1-indexed

    if (memberNumber === 893) {
      // Aneesh is member #893
      members.push({
        id: 893,
        name: "Aneesh",
        title: "Distinguished Member & Aerodynamic Pioneer",
        quote:
          "Before discovering the IMA, I didn't realize how much the standard societal expectations were weighing me down. My compact design is actually an evolutionary leap in aerodynamic supremacy.",
        joined: "2024",
        avatar: "/assets/6E84D118-76DC-4645-BD09-68BFD7933FCA.jpg",
        isAneesh: true,
      });
      continue;
    }

    const firstIdx = Math.floor(rand() * FIRST_NAMES_MALE.length);
    const lastIdx = Math.floor(rand() * LAST_NAMES.length);
    const titleIdx = Math.floor(rand() * TITLES.length);
    const quoteIdx = Math.floor(rand() * QUOTES.length);
    const yearIdx = Math.floor(rand() * YEARS.length);

    // Use randomuser.me with deterministic seeds for consistent real-looking portraits
    const avatarSeed = Math.floor(rand() * 99999);

    members.push({
      id: memberNumber,
      name: `${FIRST_NAMES_MALE[firstIdx]} ${LAST_NAMES[lastIdx]}`,
      title: TITLES[titleIdx],
      quote: QUOTES[quoteIdx],
      joined: YEARS[yearIdx],
      avatar: `https://randomuser.me/api/portraits/men/${avatarSeed % 100}.jpg`,
    });
  }

  return members;
}

// ── Component ─────────────────────────────────────────────────────────
const MEMBERS_PER_PAGE = 24;

export default function Members() {
  const [allMembers] = useState<Member[]>(() => generateMembers());
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [highlightAneesh, setHighlightAneesh] = useState(false);
  const aneeshRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return allMembers;
    const q = search.toLowerCase();
    return allMembers.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.id.toString().includes(q)
    );
  }, [allMembers, search]);

  const totalPages = Math.ceil(filtered.length / MEMBERS_PER_PAGE);
  const paginated = useMemo(
    () => filtered.slice((page - 1) * MEMBERS_PER_PAGE, page * MEMBERS_PER_PAGE),
    [filtered, page]
  );

  // Reset to page 1 when search changes
  useEffect(() => {
    setPage(1);
  }, [search]);

  // Find Aneesh button handler
  const goToAneesh = useCallback(() => {
    setSearch("");
    // Aneesh is member 893, so he's at index 892 in the unfiltered list
    const aneeshPage = Math.ceil(893 / MEMBERS_PER_PAGE);
    setPage(aneeshPage);
    setHighlightAneesh(true);
    setTimeout(() => {
      aneeshRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
    setTimeout(() => setHighlightAneesh(false), 3000);
  }, []);

  // Scroll to top of grid on page change
  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Pagination range
  const getPageRange = () => {
    const delta = 2;
    const range: number[] = [];
    const start = Math.max(2, page - delta);
    const end = Math.min(totalPages - 1, page + delta);

    range.push(1);
    if (start > 2) range.push(-1); // ellipsis
    for (let i = start; i <= end; i++) range.push(i);
    if (end < totalPages - 1) range.push(-2); // ellipsis
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  return (
    <main className="flex-grow pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Our Members.
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-4">
            {allMembers.length.toLocaleString()} verified members worldwide.
            Each one a testament to aerodynamic excellence and cognitive supremacy.
          </p>
          <button
            onClick={goToAneesh}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 transition-all duration-300 mt-4 group"
          >
            <Star className="w-3 h-3 group-hover:text-amber-400 transition-colors" />
            <span>Find Member #893</span>
          </button>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
          ref={gridRef}
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name, title, or member #..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border border-white/10 text-white placeholder-gray-600 pl-12 pr-4 py-3 text-sm tracking-wide focus:outline-none focus:border-white/30 transition-colors duration-300"
            />
          </div>
          <div className="text-center mt-4 text-xs text-gray-600 tracking-wide">
            Showing {paginated.length} of {filtered.length.toLocaleString()} members
            {search && ` matching "${search}"`}
          </div>
        </motion.div>

        {/* Members Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`page-${page}-${search}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16"
          >
            {paginated.map((member) => (
              <motion.div
                key={member.id}
                ref={member.isAneesh ? aneeshRef : undefined}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`
                  border p-3 bg-[#0a0a0a] group relative overflow-hidden
                  transition-all duration-500 cursor-default
                  ${
                    member.isAneesh && highlightAneesh
                      ? "border-amber-400/60 shadow-[0_0_30px_rgba(251,191,36,0.15)]"
                      : member.isAneesh
                      ? "border-white/20 hover:border-amber-400/40"
                      : "border-white/10 hover:border-white/30"
                  }
                `}
              >
                {/* Member number badge */}
                <div className="absolute top-2 right-2 text-[10px] font-bold text-gray-700 tracking-wider z-10">
                  #{member.id}
                </div>

                {/* Aneesh badge */}
                {member.isAneesh && (
                  <div className="absolute top-2 left-2 z-10">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  </div>
                )}

                {/* Avatar */}
                <div className="aspect-square mb-3 overflow-hidden bg-[#111]">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className={`
                      w-full h-full object-cover transition-all duration-700
                      ${member.isAneesh ? "grayscale-0" : "grayscale group-hover:grayscale-0"}
                    `}
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white truncate">
                    {member.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider truncate">
                    {member.title}
                  </p>
                  <p className="text-[10px] text-gray-700 tracking-wide">
                    Since {member.joined}
                  </p>
                </div>

                {/* Hover quote overlay */}
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-[11px] text-gray-300 font-light italic text-center leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-1"
          >
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {getPageRange().map((p, i) =>
              p < 0 ? (
                <span key={`ellipsis-${i}`} className="px-2 text-gray-600 text-sm">
                  …
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`
                    min-w-[36px] h-9 text-sm font-medium border transition-all duration-300
                    ${
                      p === page
                        ? "bg-white text-black border-white"
                        : "border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                    }
                  `}
                >
                  {p}
                </button>
              )
            )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
