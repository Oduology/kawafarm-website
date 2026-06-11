import {
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  CheckCircle2,
  CloudSun,
  Droplets,
  Languages,
  Leaf,
  LineChart,
  MapPin,
  PackageCheck,
  Satellite,
  ScanLine,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  Store,
  SunMedium,
  Truck,
  Users
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/team", label: "Team" },
  { href: "/kawafarm-market", label: "Kawafarm Market" },
  { href: "/kawarigate", label: "Kawarigate" },
  { href: "/farmlingua", label: "Farmlingua" },
  { href: "/contact", label: "Contact" }
];

export const metrics = [
  { value: "54+", label: "Acres Under Management" },
  { value: "300+", label: "Customers Served" },
  { value: "3", label: "Farm Locations" },
  { value: "BGI", label: "Nexus Grant Recipient" }
];

export const whatWeDo = [
  {
    icon: Satellite,
    title: "Digital Farming Ecosystem",
    text: "Data-rich tools for crop intelligence, monitoring, planning, and decision support."
  },
  {
    icon: Sprout,
    title: "Real Farm Operations",
    text: "Hands-on production across managed farm locations, with technology tested in the field."
  },
  {
    icon: ShoppingBasket,
    title: "Marketplace Access",
    text: "Demand aggregation, buyer reservations, and logistics pathways for farm produce."
  },
  {
    icon: BrainCircuit,
    title: "AI Agricultural Support",
    text: "Farmer-facing guidance for planting, pests, fertilizer decisions, and market information."
  }
];

export const traction = [
  "Started practical farming operations",
  "Expanded to 54 acres",
  "Launched produce aggregation",
  "300+ customers served",
  "BGI Nexus Grant Recipient",
  "Building Kawafarm Market"
];

export const sdgs = [
  {
    number: "1",
    title: "No Poverty",
    image: "https://sdgs.un.org/sites/default/files/goals/E-WEB-Goal-01.png",
    text: "Creating farm-linked income pathways and market access for agricultural communities."
  },
  {
    number: "2",
    title: "Zero Hunger",
    image: "https://sdgs.un.org/sites/default/files/goals/E-WEB-Goal-02.png",
    text: "Improving food availability through practical production and smarter crop planning."
  },
  {
    number: "8",
    title: "Decent Work",
    image: "https://sdgs.un.org/sites/default/files/goals/E-WEB-Goal-08.png",
    text: "Supporting dignified work in farming, distribution, and agritech operations."
  },
  {
    number: "9",
    title: "Innovation and Infrastructure",
    image: "https://sdgs.un.org/sites/default/files/goals/E-WEB-Goal-09.png",
    text: "Building digital infrastructure for African agricultural intelligence and commerce."
  },
  {
    number: "12",
    title: "Responsible Consumption",
    image: "https://sdgs.un.org/sites/default/files/goals/E-WEB-Goal-12.png",
    text: "Reducing waste through demand-led growing, aggregation, and harvest reservation."
  },
  {
    number: "13",
    title: "Climate Action",
    image: "https://sdgs.un.org/sites/default/files/goals/E-WEB-Goal-13.png",
    text: "Encouraging climate-aware farming decisions and resource-efficient practices."
  }
];

export const products = [
  {
    title: "Kawafarm Market",
    href: "/kawafarm-market",
    icon: Store,
    text: "A market system designed around demand aggregation, peer buying, reservations, and logistics coordination.",
    features: ["Demand aggregation", "Peer buying", "Harvest reservations", "Logistics coordination"]
  },
  {
    title: "Kawarigate",
    href: "/kawarigate",
    icon: Droplets,
    text: "Climate-smart irrigation financing for farmers who need dependable water access without large upfront equipment costs.",
    features: ["Solar irrigation", "Pump financing", "Drip networks", "Water resilience"]
  },
  {
    title: "Farmlingua",
    href: "/farmlingua",
    icon: Languages,
    text: "AI assistance built for African farmers, with accessible guidance in local language contexts.",
    features: ["Local language support", "Pest diagnosis", "Planting guidance", "Market intelligence"]
  }
];

export const storyTimeline = [
  {
    title: "The Starting Point",
    text: "Kawafarm began from direct exposure to the friction inside food production: fragmented demand, limited farmer support, and weak links between farm output and real buyers."
  },
  {
    title: "Farm-First Learning",
    text: "Instead of building software from a distance, the team entered practical farming operations and used the field as the primary laboratory."
  },
  {
    title: "Operational Expansion",
    text: "The work expanded into 54 acres under management across three farm locations, with produce aggregation and customer relationships developing alongside production."
  },
  {
    title: "Technology With Proof",
    text: "Kawafarm is now translating field insight into Kawafarm Market and Farmlingua: products shaped by real agricultural operations, not assumptions."
  }
];

export const team = [
  {
    name: "Temple Matthew",
    role: "Founder & CEO",
    bio: "Leads Kawafarm's farm-first strategy, operations vision, partnerships, and market development."
  },
  {
    name: "Rotimi Odu",
    role: "Co-Founder & Head of Technology",
    bio: "Builds the technology systems behind Kawafarm Market, Farmlingua, and the company's data infrastructure."
  },
  {
    name: "Elizabeth Adeyemi",
    role: "Farm Consultant",
    bio: "Provides agronomic guidance, production planning support, and field-level operational insight."
  }
];

export const marketWorkflow = [
  { icon: Sprout, title: "Farm Upload" },
  { icon: Users, title: "Buyer Reservations" },
  { icon: Boxes, title: "Demand Aggregation" },
  { icon: CheckCircle2, title: "Harvest Verification" },
  { icon: Truck, title: "Delivery" }
];

export const marketProducts = ["Beans", "Garri", "Onion"];

export const kawarigateMetrics = [
  { value: "0", label: "Rooftop solar imagery" },
  { value: "100%", label: "Farm irrigation context" },
  { value: "3x", label: "Better dry-season planning" },
  { value: "24/7", label: "Water-access visibility" }
];

export const kawarigateUseCases = [
  {
    icon: SunMedium,
    title: "Solar Irrigation Systems",
    text: "Panels installed on agricultural land power pumps, storage, and field-level water delivery."
  },
  {
    icon: Droplets,
    title: "Drip Irrigation Networks",
    text: "Efficient distribution helps farmers extend production windows and reduce water waste."
  },
  {
    icon: Store,
    title: "Financed Farm Assets",
    text: "Structured access to pumps, tanks, and irrigation equipment without forcing one-time capital strain."
  },
  {
    icon: LineChart,
    title: "Climate-Smart Yield Planning",
    text: "Water infrastructure connects to practical repayment, production, and market-readiness planning."
  }
];

export const kawarigateWorkflow = [
  "Farm water assessment",
  "Irrigation asset plan",
  "Financing approval",
  "Pump and drip installation",
  "Production and repayment monitoring"
];

export const farmlinguaFeatures = [
  { icon: CloudSun, title: "Planting Advice", text: "Crop timing, variety, and planning support adapted to practical farm realities." },
  { icon: ScanLine, title: "Pest Management", text: "Field symptom guidance that helps farmers respond faster and with more confidence." },
  { icon: Leaf, title: "Fertilizer Guidance", text: "Clear recommendations around soil support, crop needs, and input timing." },
  { icon: LineChart, title: "Market Information", text: "Signals that help farmers understand demand, pricing direction, and buyer needs." }
];

export const contactDetails = [
  { icon: Building2, title: "Office", text: "Kawafarm, NOIC Gbagada Lagos" },
  { icon: MapPin, title: "Pilot Store", text: "Physical store at NOIC Gbagada Lagos" },
  { icon: ShieldCheck, title: "Recognition", text: "BGI Nexus Grant Recipient" },
  { icon: PackageCheck, title: "Traction", text: "300+ customers served" }
];
