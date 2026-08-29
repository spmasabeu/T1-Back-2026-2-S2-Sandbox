import { Transaction } from 'sequelize';
import { Company, Holding, sequelize, User } from '../models';
import { randomCompanyValue } from '../models/Company';
import { INITIAL_BALANCE } from '../models/User';

export const GAME_RESET_INTERVAL_MS = 60 * 60 * 1000;

interface SeedCompany {
  name: string;
  symbol: string;
  description: string;
  sector: string;
}

// S&P 500 company list sourced from https://datahub.io/core/s-and-p-500-companies-financials/_r/-/data/constituents-financials.csv on 2026-08-27.
export const companies: SeedCompany[] = [
  {
    "name": "3M",
    "symbol": "MMM",
    "description": "Constituyente del S&P 500. Sector: Industrial Conglomerates",
    "sector": "Industrial Conglomerates"
  },
  {
    "name": "A. O. Smith",
    "symbol": "AOS",
    "description": "Constituyente del S&P 500. Sector: Building Products",
    "sector": "Building Products"
  },
  {
    "name": "Abbott Laboratories",
    "symbol": "ABT",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "AbbVie",
    "symbol": "ABBV",
    "description": "Constituyente del S&P 500. Sector: Biotechnology",
    "sector": "Biotechnology"
  },
  {
    "name": "Accenture",
    "symbol": "ACN",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services",
    "sector": "IT Consulting & Other Services"
  },
  {
    "name": "Adobe Inc.",
    "symbol": "ADBE",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Advanced Micro Devices",
    "symbol": "AMD",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "AES Corporation",
    "symbol": "AES",
    "description": "Constituyente del S&P 500. Sector: Independent Power Producers & Energy Traders",
    "sector": "Independent Power Producers & Energy Traders"
  },
  {
    "name": "Aflac",
    "symbol": "AFL",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance",
    "sector": "Life & Health Insurance"
  },
  {
    "name": "Agilent Technologies",
    "symbol": "A",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services",
    "sector": "Life Sciences Tools & Services"
  },
  {
    "name": "Air Products",
    "symbol": "APD",
    "description": "Constituyente del S&P 500. Sector: Industrial Gases",
    "sector": "Industrial Gases"
  },
  {
    "name": "Airbnb",
    "symbol": "ABNB",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines",
    "sector": "Hotels, Resorts & Cruise Lines"
  },
  {
    "name": "Akamai Technologies",
    "symbol": "AKAM",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure",
    "sector": "Internet Services & Infrastructure"
  },
  {
    "name": "Albemarle Corporation",
    "symbol": "ALB",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals",
    "sector": "Specialty Chemicals"
  },
  {
    "name": "Alexandria Real Estate Equities",
    "symbol": "ARE",
    "description": "Constituyente del S&P 500. Sector: Office REITs",
    "sector": "Office REITs"
  },
  {
    "name": "Align Technology",
    "symbol": "ALGN",
    "description": "Constituyente del S&P 500. Sector: Health Care Supplies",
    "sector": "Health Care Supplies"
  },
  {
    "name": "Allegion",
    "symbol": "ALLE",
    "description": "Constituyente del S&P 500. Sector: Building Products",
    "sector": "Building Products"
  },
  {
    "name": "Alliant Energy",
    "symbol": "LNT",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Allstate",
    "symbol": "ALL",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance",
    "sector": "Property & Casualty Insurance"
  },
  {
    "name": "Alphabet Inc. (Class A)",
    "symbol": "GOOGL",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services",
    "sector": "Interactive Media & Services"
  },
  {
    "name": "Alphabet Inc. (Class C)",
    "symbol": "GOOG",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services",
    "sector": "Interactive Media & Services"
  },
  {
    "name": "Altria",
    "symbol": "MO",
    "description": "Constituyente del S&P 500. Sector: Tobacco",
    "sector": "Tobacco"
  },
  {
    "name": "Amazon",
    "symbol": "AMZN",
    "description": "Constituyente del S&P 500. Sector: Broadline Retail",
    "sector": "Broadline Retail"
  },
  {
    "name": "Amcor",
    "symbol": "AMCR",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials",
    "sector": "Paper & Plastic Packaging Products & Materials"
  },
  {
    "name": "Amentum",
    "symbol": "AMTM",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services",
    "sector": "Diversified Support Services"
  },
  {
    "name": "Ameren",
    "symbol": "AEE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "American Electric Power",
    "symbol": "AEP",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "American Express",
    "symbol": "AXP",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance",
    "sector": "Consumer Finance"
  },
  {
    "name": "American International Group",
    "symbol": "AIG",
    "description": "Constituyente del S&P 500. Sector: Multi-line Insurance",
    "sector": "Multi-line Insurance"
  },
  {
    "name": "American Tower",
    "symbol": "AMT",
    "description": "Constituyente del S&P 500. Sector: Telecom Tower REITs",
    "sector": "Telecom Tower REITs"
  },
  {
    "name": "American Water Works",
    "symbol": "AWK",
    "description": "Constituyente del S&P 500. Sector: Water Utilities",
    "sector": "Water Utilities"
  },
  {
    "name": "Ameriprise Financial",
    "symbol": "AMP",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "Ametek",
    "symbol": "AME",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment",
    "sector": "Electrical Components & Equipment"
  },
  {
    "name": "Amgen",
    "symbol": "AMGN",
    "description": "Constituyente del S&P 500. Sector: Biotechnology",
    "sector": "Biotechnology"
  },
  {
    "name": "Amphenol",
    "symbol": "APH",
    "description": "Constituyente del S&P 500. Sector: Electronic Components",
    "sector": "Electronic Components"
  },
  {
    "name": "Analog Devices",
    "symbol": "ADI",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Ansys",
    "symbol": "ANSS",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Aon",
    "symbol": "AON",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers",
    "sector": "Insurance Brokers"
  },
  {
    "name": "APA Corporation",
    "symbol": "APA",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production",
    "sector": "Oil & Gas Exploration & Production"
  },
  {
    "name": "Apple Inc.",
    "symbol": "AAPL",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals",
    "sector": "Technology Hardware, Storage & Peripherals"
  },
  {
    "name": "Applied Materials",
    "symbol": "AMAT",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment",
    "sector": "Semiconductor Materials & Equipment"
  },
  {
    "name": "Aptiv",
    "symbol": "APTV",
    "description": "Constituyente del S&P 500. Sector: Automotive Parts & Equipment",
    "sector": "Automotive Parts & Equipment"
  },
  {
    "name": "Arch Capital Group",
    "symbol": "ACGL",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance",
    "sector": "Property & Casualty Insurance"
  },
  {
    "name": "Archer Daniels Midland",
    "symbol": "ADM",
    "description": "Constituyente del S&P 500. Sector: Agricultural Products & Services",
    "sector": "Agricultural Products & Services"
  },
  {
    "name": "Arista Networks",
    "symbol": "ANET",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment",
    "sector": "Communications Equipment"
  },
  {
    "name": "Arthur J. Gallagher & Co.",
    "symbol": "AJG",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers",
    "sector": "Insurance Brokers"
  },
  {
    "name": "Assurant",
    "symbol": "AIZ",
    "description": "Constituyente del S&P 500. Sector: Multi-line Insurance",
    "sector": "Multi-line Insurance"
  },
  {
    "name": "AT&T",
    "symbol": "T",
    "description": "Constituyente del S&P 500. Sector: Integrated Telecommunication Services",
    "sector": "Integrated Telecommunication Services"
  },
  {
    "name": "Atmos Energy",
    "symbol": "ATO",
    "description": "Constituyente del S&P 500. Sector: Gas Utilities",
    "sector": "Gas Utilities"
  },
  {
    "name": "Autodesk",
    "symbol": "ADSK",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Automatic Data Processing",
    "symbol": "ADP",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services",
    "sector": "Human Resource & Employment Services"
  },
  {
    "name": "AutoZone",
    "symbol": "AZO",
    "description": "Constituyente del S&P 500. Sector: Automotive Retail",
    "sector": "Automotive Retail"
  },
  {
    "name": "AvalonBay Communities",
    "symbol": "AVB",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs",
    "sector": "Multi-Family Residential REITs"
  },
  {
    "name": "Avery Dennison",
    "symbol": "AVY",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials",
    "sector": "Paper & Plastic Packaging Products & Materials"
  },
  {
    "name": "Axon Enterprise",
    "symbol": "AXON",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "Baker Hughes",
    "symbol": "BKR",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Equipment & Services",
    "sector": "Oil & Gas Equipment & Services"
  },
  {
    "name": "Ball Corporation",
    "symbol": "BALL",
    "description": "Constituyente del S&P 500. Sector: Metal, Glass & Plastic Containers",
    "sector": "Metal, Glass & Plastic Containers"
  },
  {
    "name": "Bank of America",
    "symbol": "BAC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks",
    "sector": "Diversified Banks"
  },
  {
    "name": "Baxter International",
    "symbol": "BAX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Becton Dickinson",
    "symbol": "BDX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Berkshire Hathaway",
    "symbol": "BRK.B",
    "description": "Constituyente del S&P 500. Sector: Multi-Sector Holdings",
    "sector": "Multi-Sector Holdings"
  },
  {
    "name": "Best Buy",
    "symbol": "BBY",
    "description": "Constituyente del S&P 500. Sector: Computer & Electronics Retail",
    "sector": "Computer & Electronics Retail"
  },
  {
    "name": "Bio-Techne",
    "symbol": "TECH",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services",
    "sector": "Life Sciences Tools & Services"
  },
  {
    "name": "Biogen",
    "symbol": "BIIB",
    "description": "Constituyente del S&P 500. Sector: Biotechnology",
    "sector": "Biotechnology"
  },
  {
    "name": "BlackRock",
    "symbol": "BLK",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "Blackstone Inc.",
    "symbol": "BX",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "BNY Mellon",
    "symbol": "BK",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "Boeing",
    "symbol": "BA",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "Booking Holdings",
    "symbol": "BKNG",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines",
    "sector": "Hotels, Resorts & Cruise Lines"
  },
  {
    "name": "BorgWarner",
    "symbol": "BWA",
    "description": "Constituyente del S&P 500. Sector: Automotive Parts & Equipment",
    "sector": "Automotive Parts & Equipment"
  },
  {
    "name": "Boston Scientific",
    "symbol": "BSX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Bristol Myers Squibb",
    "symbol": "BMY",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals",
    "sector": "Pharmaceuticals"
  },
  {
    "name": "Broadcom",
    "symbol": "AVGO",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Broadridge Financial Solutions",
    "symbol": "BR",
    "description": "Constituyente del S&P 500. Sector: Data Processing & Outsourced Services",
    "sector": "Data Processing & Outsourced Services"
  },
  {
    "name": "Brown & Brown",
    "symbol": "BRO",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers",
    "sector": "Insurance Brokers"
  },
  {
    "name": "Brown-Forman",
    "symbol": "BF.B",
    "description": "Constituyente del S&P 500. Sector: Distillers & Vintners",
    "sector": "Distillers & Vintners"
  },
  {
    "name": "Builders FirstSource",
    "symbol": "BLDR",
    "description": "Constituyente del S&P 500. Sector: Building Products",
    "sector": "Building Products"
  },
  {
    "name": "Bunge Global",
    "symbol": "BG",
    "description": "Constituyente del S&P 500. Sector: Agricultural Products & Services",
    "sector": "Agricultural Products & Services"
  },
  {
    "name": "BXP, Inc.",
    "symbol": "BXP",
    "description": "Constituyente del S&P 500. Sector: Office REITs",
    "sector": "Office REITs"
  },
  {
    "name": "C.H. Robinson",
    "symbol": "CHRW",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics",
    "sector": "Air Freight & Logistics"
  },
  {
    "name": "Cadence Design Systems",
    "symbol": "CDNS",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Caesars Entertainment",
    "symbol": "CZR",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming",
    "sector": "Casinos & Gaming"
  },
  {
    "name": "Camden Property Trust",
    "symbol": "CPT",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs",
    "sector": "Multi-Family Residential REITs"
  },
  {
    "name": "Campbell Soup Company",
    "symbol": "CPB",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "Capital One",
    "symbol": "COF",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance",
    "sector": "Consumer Finance"
  },
  {
    "name": "Cardinal Health",
    "symbol": "CAH",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors",
    "sector": "Health Care Distributors"
  },
  {
    "name": "CarMax",
    "symbol": "KMX",
    "description": "Constituyente del S&P 500. Sector: Automotive Retail",
    "sector": "Automotive Retail"
  },
  {
    "name": "Carnival",
    "symbol": "CCL",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines",
    "sector": "Hotels, Resorts & Cruise Lines"
  },
  {
    "name": "Carrier Global",
    "symbol": "CARR",
    "description": "Constituyente del S&P 500. Sector: Building Products",
    "sector": "Building Products"
  },
  {
    "name": "Catalent",
    "symbol": "CTLT",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals",
    "sector": "Pharmaceuticals"
  },
  {
    "name": "Caterpillar Inc.",
    "symbol": "CAT",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment",
    "sector": "Construction Machinery & Heavy Transportation Equipment"
  },
  {
    "name": "Cboe Global Markets",
    "symbol": "CBOE",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data",
    "sector": "Financial Exchanges & Data"
  },
  {
    "name": "CBRE Group",
    "symbol": "CBRE",
    "description": "Constituyente del S&P 500. Sector: Real Estate Services",
    "sector": "Real Estate Services"
  },
  {
    "name": "CDW",
    "symbol": "CDW",
    "description": "Constituyente del S&P 500. Sector: Technology Distributors",
    "sector": "Technology Distributors"
  },
  {
    "name": "Celanese",
    "symbol": "CE",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals",
    "sector": "Specialty Chemicals"
  },
  {
    "name": "Cencora",
    "symbol": "COR",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors",
    "sector": "Health Care Distributors"
  },
  {
    "name": "Centene Corporation",
    "symbol": "CNC",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care",
    "sector": "Managed Health Care"
  },
  {
    "name": "CenterPoint Energy",
    "symbol": "CNP",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "CF Industries",
    "symbol": "CF",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals",
    "sector": "Fertilizers & Agricultural Chemicals"
  },
  {
    "name": "Charles River Laboratories",
    "symbol": "CRL",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services",
    "sector": "Life Sciences Tools & Services"
  },
  {
    "name": "Charles Schwab Corporation",
    "symbol": "SCHW",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage",
    "sector": "Investment Banking & Brokerage"
  },
  {
    "name": "Charter Communications",
    "symbol": "CHTR",
    "description": "Constituyente del S&P 500. Sector: Cable & Satellite",
    "sector": "Cable & Satellite"
  },
  {
    "name": "Chevron Corporation",
    "symbol": "CVX",
    "description": "Constituyente del S&P 500. Sector: Integrated Oil & Gas",
    "sector": "Integrated Oil & Gas"
  },
  {
    "name": "Chipotle Mexican Grill",
    "symbol": "CMG",
    "description": "Constituyente del S&P 500. Sector: Restaurants",
    "sector": "Restaurants"
  },
  {
    "name": "Chubb Limited",
    "symbol": "CB",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance",
    "sector": "Property & Casualty Insurance"
  },
  {
    "name": "Church & Dwight",
    "symbol": "CHD",
    "description": "Constituyente del S&P 500. Sector: Household Products",
    "sector": "Household Products"
  },
  {
    "name": "Cigna",
    "symbol": "CI",
    "description": "Constituyente del S&P 500. Sector: Health Care Services",
    "sector": "Health Care Services"
  },
  {
    "name": "Cincinnati Financial",
    "symbol": "CINF",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance",
    "sector": "Property & Casualty Insurance"
  },
  {
    "name": "Cintas",
    "symbol": "CTAS",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services",
    "sector": "Diversified Support Services"
  },
  {
    "name": "Cisco",
    "symbol": "CSCO",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment",
    "sector": "Communications Equipment"
  },
  {
    "name": "Citigroup",
    "symbol": "C",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks",
    "sector": "Diversified Banks"
  },
  {
    "name": "Citizens Financial Group",
    "symbol": "CFG",
    "description": "Constituyente del S&P 500. Sector: Regional Banks",
    "sector": "Regional Banks"
  },
  {
    "name": "Clorox",
    "symbol": "CLX",
    "description": "Constituyente del S&P 500. Sector: Household Products",
    "sector": "Household Products"
  },
  {
    "name": "CME Group",
    "symbol": "CME",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data",
    "sector": "Financial Exchanges & Data"
  },
  {
    "name": "CMS Energy",
    "symbol": "CMS",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "Coca-Cola Company (The)",
    "symbol": "KO",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages",
    "sector": "Soft Drinks & Non-alcoholic Beverages"
  },
  {
    "name": "Cognizant",
    "symbol": "CTSH",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services",
    "sector": "IT Consulting & Other Services"
  },
  {
    "name": "Colgate-Palmolive",
    "symbol": "CL",
    "description": "Constituyente del S&P 500. Sector: Household Products",
    "sector": "Household Products"
  },
  {
    "name": "Comcast",
    "symbol": "CMCSA",
    "description": "Constituyente del S&P 500. Sector: Cable & Satellite",
    "sector": "Cable & Satellite"
  },
  {
    "name": "Conagra Brands",
    "symbol": "CAG",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "ConocoPhillips",
    "symbol": "COP",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production",
    "sector": "Oil & Gas Exploration & Production"
  },
  {
    "name": "Consolidated Edison",
    "symbol": "ED",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "Constellation Brands",
    "symbol": "STZ",
    "description": "Constituyente del S&P 500. Sector: Distillers & Vintners",
    "sector": "Distillers & Vintners"
  },
  {
    "name": "Constellation Energy",
    "symbol": "CEG",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Cooper Companies (The)",
    "symbol": "COO",
    "description": "Constituyente del S&P 500. Sector: Health Care Supplies",
    "sector": "Health Care Supplies"
  },
  {
    "name": "Copart",
    "symbol": "CPRT",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services",
    "sector": "Diversified Support Services"
  },
  {
    "name": "Corning Inc.",
    "symbol": "GLW",
    "description": "Constituyente del S&P 500. Sector: Electronic Components",
    "sector": "Electronic Components"
  },
  {
    "name": "Corpay",
    "symbol": "CPAY",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services",
    "sector": "Transaction & Payment Processing Services"
  },
  {
    "name": "Corteva",
    "symbol": "CTVA",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals",
    "sector": "Fertilizers & Agricultural Chemicals"
  },
  {
    "name": "CoStar Group",
    "symbol": "CSGP",
    "description": "Constituyente del S&P 500. Sector: Real Estate Services",
    "sector": "Real Estate Services"
  },
  {
    "name": "Costco",
    "symbol": "COST",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail",
    "sector": "Consumer Staples Merchandise Retail"
  },
  {
    "name": "Coterra",
    "symbol": "CTRA",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production",
    "sector": "Oil & Gas Exploration & Production"
  },
  {
    "name": "CrowdStrike",
    "symbol": "CRWD",
    "description": "Constituyente del S&P 500. Sector: Systems Software",
    "sector": "Systems Software"
  },
  {
    "name": "Crown Castle",
    "symbol": "CCI",
    "description": "Constituyente del S&P 500. Sector: Telecom Tower REITs",
    "sector": "Telecom Tower REITs"
  },
  {
    "name": "CSX Corporation",
    "symbol": "CSX",
    "description": "Constituyente del S&P 500. Sector: Rail Transportation",
    "sector": "Rail Transportation"
  },
  {
    "name": "Cummins",
    "symbol": "CMI",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment",
    "sector": "Construction Machinery & Heavy Transportation Equipment"
  },
  {
    "name": "CVS Health",
    "symbol": "CVS",
    "description": "Constituyente del S&P 500. Sector: Health Care Services",
    "sector": "Health Care Services"
  },
  {
    "name": "D. R. Horton",
    "symbol": "DHI",
    "description": "Constituyente del S&P 500. Sector: Homebuilding",
    "sector": "Homebuilding"
  },
  {
    "name": "Danaher Corporation",
    "symbol": "DHR",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services",
    "sector": "Life Sciences Tools & Services"
  },
  {
    "name": "Darden Restaurants",
    "symbol": "DRI",
    "description": "Constituyente del S&P 500. Sector: Restaurants",
    "sector": "Restaurants"
  },
  {
    "name": "DaVita",
    "symbol": "DVA",
    "description": "Constituyente del S&P 500. Sector: Health Care Services",
    "sector": "Health Care Services"
  },
  {
    "name": "Dayforce",
    "symbol": "DAY",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services",
    "sector": "Human Resource & Employment Services"
  },
  {
    "name": "Deckers Brands",
    "symbol": "DECK",
    "description": "Constituyente del S&P 500. Sector: Footwear",
    "sector": "Footwear"
  },
  {
    "name": "Deere & Company",
    "symbol": "DE",
    "description": "Constituyente del S&P 500. Sector: Agricultural & Farm Machinery",
    "sector": "Agricultural & Farm Machinery"
  },
  {
    "name": "Dell Technologies",
    "symbol": "DELL",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals",
    "sector": "Technology Hardware, Storage & Peripherals"
  },
  {
    "name": "Delta Air Lines",
    "symbol": "DAL",
    "description": "Constituyente del S&P 500. Sector: Passenger Airlines",
    "sector": "Passenger Airlines"
  },
  {
    "name": "Devon Energy",
    "symbol": "DVN",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production",
    "sector": "Oil & Gas Exploration & Production"
  },
  {
    "name": "Dexcom",
    "symbol": "DXCM",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Diamondback Energy",
    "symbol": "FANG",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production",
    "sector": "Oil & Gas Exploration & Production"
  },
  {
    "name": "Digital Realty",
    "symbol": "DLR",
    "description": "Constituyente del S&P 500. Sector: Data Center REITs",
    "sector": "Data Center REITs"
  },
  {
    "name": "Discover Financial",
    "symbol": "DFS",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance",
    "sector": "Consumer Finance"
  },
  {
    "name": "Dollar General",
    "symbol": "DG",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail",
    "sector": "Consumer Staples Merchandise Retail"
  },
  {
    "name": "Dollar Tree",
    "symbol": "DLTR",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail",
    "sector": "Consumer Staples Merchandise Retail"
  },
  {
    "name": "Dominion Energy",
    "symbol": "D",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "Domino's",
    "symbol": "DPZ",
    "description": "Constituyente del S&P 500. Sector: Restaurants",
    "sector": "Restaurants"
  },
  {
    "name": "Dover Corporation",
    "symbol": "DOV",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Dow Inc.",
    "symbol": "DOW",
    "description": "Constituyente del S&P 500. Sector: Commodity Chemicals",
    "sector": "Commodity Chemicals"
  },
  {
    "name": "DTE Energy",
    "symbol": "DTE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "Duke Energy",
    "symbol": "DUK",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "DuPont",
    "symbol": "DD",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals",
    "sector": "Specialty Chemicals"
  },
  {
    "name": "Eastman Chemical Company",
    "symbol": "EMN",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals",
    "sector": "Specialty Chemicals"
  },
  {
    "name": "Eaton Corporation",
    "symbol": "ETN",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment",
    "sector": "Electrical Components & Equipment"
  },
  {
    "name": "eBay",
    "symbol": "EBAY",
    "description": "Constituyente del S&P 500. Sector: Broadline Retail",
    "sector": "Broadline Retail"
  },
  {
    "name": "Ecolab",
    "symbol": "ECL",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals",
    "sector": "Specialty Chemicals"
  },
  {
    "name": "Edison International",
    "symbol": "EIX",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Edwards Lifesciences",
    "symbol": "EW",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Electronic Arts",
    "symbol": "EA",
    "description": "Constituyente del S&P 500. Sector: Interactive Home Entertainment",
    "sector": "Interactive Home Entertainment"
  },
  {
    "name": "Elevance Health",
    "symbol": "ELV",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care",
    "sector": "Managed Health Care"
  },
  {
    "name": "Emerson Electric",
    "symbol": "EMR",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment",
    "sector": "Electrical Components & Equipment"
  },
  {
    "name": "Enphase Energy",
    "symbol": "ENPH",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment",
    "sector": "Semiconductor Materials & Equipment"
  },
  {
    "name": "Entergy",
    "symbol": "ETR",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "EOG Resources",
    "symbol": "EOG",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production",
    "sector": "Oil & Gas Exploration & Production"
  },
  {
    "name": "EPAM Systems",
    "symbol": "EPAM",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services",
    "sector": "IT Consulting & Other Services"
  },
  {
    "name": "EQT Corporation",
    "symbol": "EQT",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production",
    "sector": "Oil & Gas Exploration & Production"
  },
  {
    "name": "Equifax",
    "symbol": "EFX",
    "description": "Constituyente del S&P 500. Sector: Research & Consulting Services",
    "sector": "Research & Consulting Services"
  },
  {
    "name": "Equinix",
    "symbol": "EQIX",
    "description": "Constituyente del S&P 500. Sector: Data Center REITs",
    "sector": "Data Center REITs"
  },
  {
    "name": "Equity Residential",
    "symbol": "EQR",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs",
    "sector": "Multi-Family Residential REITs"
  },
  {
    "name": "Erie Indemnity",
    "symbol": "ERIE",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers",
    "sector": "Insurance Brokers"
  },
  {
    "name": "Essex Property Trust",
    "symbol": "ESS",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs",
    "sector": "Multi-Family Residential REITs"
  },
  {
    "name": "Estee Lauder Companies (The)",
    "symbol": "EL",
    "description": "Constituyente del S&P 500. Sector: Personal Care Products",
    "sector": "Personal Care Products"
  },
  {
    "name": "Everest Group",
    "symbol": "EG",
    "description": "Constituyente del S&P 500. Sector: Reinsurance",
    "sector": "Reinsurance"
  },
  {
    "name": "Evergy",
    "symbol": "EVRG",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Eversource Energy",
    "symbol": "ES",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Exelon",
    "symbol": "EXC",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Expedia Group",
    "symbol": "EXPE",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines",
    "sector": "Hotels, Resorts & Cruise Lines"
  },
  {
    "name": "Expeditors International",
    "symbol": "EXPD",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics",
    "sector": "Air Freight & Logistics"
  },
  {
    "name": "Extra Space Storage",
    "symbol": "EXR",
    "description": "Constituyente del S&P 500. Sector: Self-Storage REITs",
    "sector": "Self-Storage REITs"
  },
  {
    "name": "ExxonMobil",
    "symbol": "XOM",
    "description": "Constituyente del S&P 500. Sector: Integrated Oil & Gas",
    "sector": "Integrated Oil & Gas"
  },
  {
    "name": "F5, Inc.",
    "symbol": "FFIV",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment",
    "sector": "Communications Equipment"
  },
  {
    "name": "FactSet",
    "symbol": "FDS",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data",
    "sector": "Financial Exchanges & Data"
  },
  {
    "name": "Fair Isaac",
    "symbol": "FICO",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Fastenal",
    "symbol": "FAST",
    "description": "Constituyente del S&P 500. Sector: Trading Companies & Distributors",
    "sector": "Trading Companies & Distributors"
  },
  {
    "name": "Federal Realty Investment Trust",
    "symbol": "FRT",
    "description": "Constituyente del S&P 500. Sector: Retail REITs",
    "sector": "Retail REITs"
  },
  {
    "name": "FedEx",
    "symbol": "FDX",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics",
    "sector": "Air Freight & Logistics"
  },
  {
    "name": "Fidelity National Information Services",
    "symbol": "FIS",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services",
    "sector": "Transaction & Payment Processing Services"
  },
  {
    "name": "Fifth Third Bancorp",
    "symbol": "FITB",
    "description": "Constituyente del S&P 500. Sector: Regional Banks",
    "sector": "Regional Banks"
  },
  {
    "name": "First Solar",
    "symbol": "FSLR",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "FirstEnergy",
    "symbol": "FE",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Fiserv",
    "symbol": "FI",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services",
    "sector": "Transaction & Payment Processing Services"
  },
  {
    "name": "FMC Corporation",
    "symbol": "FMC",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals",
    "sector": "Fertilizers & Agricultural Chemicals"
  },
  {
    "name": "Ford Motor Company",
    "symbol": "F",
    "description": "Constituyente del S&P 500. Sector: Automobile Manufacturers",
    "sector": "Automobile Manufacturers"
  },
  {
    "name": "Fortinet",
    "symbol": "FTNT",
    "description": "Constituyente del S&P 500. Sector: Systems Software",
    "sector": "Systems Software"
  },
  {
    "name": "Fortive",
    "symbol": "FTV",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Fox Corporation (Class A)",
    "symbol": "FOXA",
    "description": "Constituyente del S&P 500. Sector: Broadcasting",
    "sector": "Broadcasting"
  },
  {
    "name": "Fox Corporation (Class B)",
    "symbol": "FOX",
    "description": "Constituyente del S&P 500. Sector: Broadcasting",
    "sector": "Broadcasting"
  },
  {
    "name": "Franklin Resources",
    "symbol": "BEN",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "Freeport-McMoRan",
    "symbol": "FCX",
    "description": "Constituyente del S&P 500. Sector: Copper",
    "sector": "Copper"
  },
  {
    "name": "Garmin",
    "symbol": "GRMN",
    "description": "Constituyente del S&P 500. Sector: Consumer Electronics",
    "sector": "Consumer Electronics"
  },
  {
    "name": "Gartner",
    "symbol": "IT",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services",
    "sector": "IT Consulting & Other Services"
  },
  {
    "name": "GE Aerospace",
    "symbol": "GE",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "GE HealthCare",
    "symbol": "GEHC",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "GE Vernova",
    "symbol": "GEV",
    "description": "Constituyente del S&P 500. Sector: Heavy Electrical Equipment",
    "sector": "Heavy Electrical Equipment"
  },
  {
    "name": "Gen Digital",
    "symbol": "GEN",
    "description": "Constituyente del S&P 500. Sector: Systems Software",
    "sector": "Systems Software"
  },
  {
    "name": "Generac",
    "symbol": "GNRC",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment",
    "sector": "Electrical Components & Equipment"
  },
  {
    "name": "General Dynamics",
    "symbol": "GD",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "General Mills",
    "symbol": "GIS",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "General Motors",
    "symbol": "GM",
    "description": "Constituyente del S&P 500. Sector: Automobile Manufacturers",
    "sector": "Automobile Manufacturers"
  },
  {
    "name": "Genuine Parts Company",
    "symbol": "GPC",
    "description": "Constituyente del S&P 500. Sector: Distributors",
    "sector": "Distributors"
  },
  {
    "name": "Gilead Sciences",
    "symbol": "GILD",
    "description": "Constituyente del S&P 500. Sector: Biotechnology",
    "sector": "Biotechnology"
  },
  {
    "name": "Global Payments",
    "symbol": "GPN",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services",
    "sector": "Transaction & Payment Processing Services"
  },
  {
    "name": "Globe Life",
    "symbol": "GL",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance",
    "sector": "Life & Health Insurance"
  },
  {
    "name": "GoDaddy",
    "symbol": "GDDY",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure",
    "sector": "Internet Services & Infrastructure"
  },
  {
    "name": "Goldman Sachs",
    "symbol": "GS",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage",
    "sector": "Investment Banking & Brokerage"
  },
  {
    "name": "Halliburton",
    "symbol": "HAL",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Equipment & Services",
    "sector": "Oil & Gas Equipment & Services"
  },
  {
    "name": "Hartford (The)",
    "symbol": "HIG",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance",
    "sector": "Property & Casualty Insurance"
  },
  {
    "name": "Hasbro",
    "symbol": "HAS",
    "description": "Constituyente del S&P 500. Sector: Leisure Products",
    "sector": "Leisure Products"
  },
  {
    "name": "HCA Healthcare",
    "symbol": "HCA",
    "description": "Constituyente del S&P 500. Sector: Health Care Facilities",
    "sector": "Health Care Facilities"
  },
  {
    "name": "Healthpeak Properties",
    "symbol": "DOC",
    "description": "Constituyente del S&P 500. Sector: Health Care REITs",
    "sector": "Health Care REITs"
  },
  {
    "name": "Henry Schein",
    "symbol": "HSIC",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors",
    "sector": "Health Care Distributors"
  },
  {
    "name": "Hershey Company (The)",
    "symbol": "HSY",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "Hess Corporation",
    "symbol": "HES",
    "description": "Constituyente del S&P 500. Sector: Integrated Oil & Gas",
    "sector": "Integrated Oil & Gas"
  },
  {
    "name": "Hewlett Packard Enterprise",
    "symbol": "HPE",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals",
    "sector": "Technology Hardware, Storage & Peripherals"
  },
  {
    "name": "Hilton Worldwide",
    "symbol": "HLT",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines",
    "sector": "Hotels, Resorts & Cruise Lines"
  },
  {
    "name": "Hologic",
    "symbol": "HOLX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Home Depot (The)",
    "symbol": "HD",
    "description": "Constituyente del S&P 500. Sector: Home Improvement Retail",
    "sector": "Home Improvement Retail"
  },
  {
    "name": "Honeywell",
    "symbol": "HON",
    "description": "Constituyente del S&P 500. Sector: Industrial Conglomerates",
    "sector": "Industrial Conglomerates"
  },
  {
    "name": "Hormel Foods",
    "symbol": "HRL",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "Host Hotels & Resorts",
    "symbol": "HST",
    "description": "Constituyente del S&P 500. Sector: Hotel & Resort REITs",
    "sector": "Hotel & Resort REITs"
  },
  {
    "name": "Howmet Aerospace",
    "symbol": "HWM",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "HP Inc.",
    "symbol": "HPQ",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals",
    "sector": "Technology Hardware, Storage & Peripherals"
  },
  {
    "name": "Hubbell Incorporated",
    "symbol": "HUBB",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Humana",
    "symbol": "HUM",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care",
    "sector": "Managed Health Care"
  },
  {
    "name": "Huntington Bank",
    "symbol": "HBAN",
    "description": "Constituyente del S&P 500. Sector: Regional Banks",
    "sector": "Regional Banks"
  },
  {
    "name": "Huntington Ingalls Industries",
    "symbol": "HII",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "IBM",
    "symbol": "IBM",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services",
    "sector": "IT Consulting & Other Services"
  },
  {
    "name": "IDEX Corporation",
    "symbol": "IEX",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Idexx Laboratories",
    "symbol": "IDXX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Illinois Tool Works",
    "symbol": "ITW",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Incyte",
    "symbol": "INCY",
    "description": "Constituyente del S&P 500. Sector: Biotechnology",
    "sector": "Biotechnology"
  },
  {
    "name": "Ingersoll Rand",
    "symbol": "IR",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Insulet Corporation",
    "symbol": "PODD",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Intel",
    "symbol": "INTC",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Intercontinental Exchange",
    "symbol": "ICE",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data",
    "sector": "Financial Exchanges & Data"
  },
  {
    "name": "International Flavors & Fragrances",
    "symbol": "IFF",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals",
    "sector": "Specialty Chemicals"
  },
  {
    "name": "International Paper",
    "symbol": "IP",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials",
    "sector": "Paper & Plastic Packaging Products & Materials"
  },
  {
    "name": "Interpublic Group of Companies (The)",
    "symbol": "IPG",
    "description": "Constituyente del S&P 500. Sector: Advertising",
    "sector": "Advertising"
  },
  {
    "name": "Intuit",
    "symbol": "INTU",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Intuitive Surgical",
    "symbol": "ISRG",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Invesco",
    "symbol": "IVZ",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "Invitation Homes",
    "symbol": "INVH",
    "description": "Constituyente del S&P 500. Sector: Single-Family Residential REITs",
    "sector": "Single-Family Residential REITs"
  },
  {
    "name": "IQVIA",
    "symbol": "IQV",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services",
    "sector": "Life Sciences Tools & Services"
  },
  {
    "name": "Iron Mountain",
    "symbol": "IRM",
    "description": "Constituyente del S&P 500. Sector: Other Specialized REITs",
    "sector": "Other Specialized REITs"
  },
  {
    "name": "J.B. Hunt",
    "symbol": "JBHT",
    "description": "Constituyente del S&P 500. Sector: Cargo Ground Transportation",
    "sector": "Cargo Ground Transportation"
  },
  {
    "name": "J.M. Smucker Company (The)",
    "symbol": "SJM",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "Jabil",
    "symbol": "JBL",
    "description": "Constituyente del S&P 500. Sector: Electronic Manufacturing Services",
    "sector": "Electronic Manufacturing Services"
  },
  {
    "name": "Jack Henry & Associates",
    "symbol": "JKHY",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services",
    "sector": "Transaction & Payment Processing Services"
  },
  {
    "name": "Jacobs Solutions",
    "symbol": "J",
    "description": "Constituyente del S&P 500. Sector: Construction & Engineering",
    "sector": "Construction & Engineering"
  },
  {
    "name": "Johnson & Johnson",
    "symbol": "JNJ",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals",
    "sector": "Pharmaceuticals"
  },
  {
    "name": "Johnson Controls",
    "symbol": "JCI",
    "description": "Constituyente del S&P 500. Sector: Building Products",
    "sector": "Building Products"
  },
  {
    "name": "JPMorgan Chase",
    "symbol": "JPM",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks",
    "sector": "Diversified Banks"
  },
  {
    "name": "Juniper Networks",
    "symbol": "JNPR",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment",
    "sector": "Communications Equipment"
  },
  {
    "name": "Kellanova",
    "symbol": "K",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "Kenvue",
    "symbol": "KVUE",
    "description": "Constituyente del S&P 500. Sector: Personal Care Products",
    "sector": "Personal Care Products"
  },
  {
    "name": "Keurig Dr Pepper",
    "symbol": "KDP",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages",
    "sector": "Soft Drinks & Non-alcoholic Beverages"
  },
  {
    "name": "KeyCorp",
    "symbol": "KEY",
    "description": "Constituyente del S&P 500. Sector: Regional Banks",
    "sector": "Regional Banks"
  },
  {
    "name": "Keysight Technologies",
    "symbol": "KEYS",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments",
    "sector": "Electronic Equipment & Instruments"
  },
  {
    "name": "Kimberly-Clark",
    "symbol": "KMB",
    "description": "Constituyente del S&P 500. Sector: Household Products",
    "sector": "Household Products"
  },
  {
    "name": "Kimco Realty",
    "symbol": "KIM",
    "description": "Constituyente del S&P 500. Sector: Retail REITs",
    "sector": "Retail REITs"
  },
  {
    "name": "Kinder Morgan",
    "symbol": "KMI",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation",
    "sector": "Oil & Gas Storage & Transportation"
  },
  {
    "name": "KKR",
    "symbol": "KKR",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "KLA Corporation",
    "symbol": "KLAC",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment",
    "sector": "Semiconductor Materials & Equipment"
  },
  {
    "name": "Kraft Heinz",
    "symbol": "KHC",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "Kroger",
    "symbol": "KR",
    "description": "Constituyente del S&P 500. Sector: Food Retail",
    "sector": "Food Retail"
  },
  {
    "name": "L3Harris",
    "symbol": "LHX",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "LabCorp",
    "symbol": "LH",
    "description": "Constituyente del S&P 500. Sector: Health Care Services",
    "sector": "Health Care Services"
  },
  {
    "name": "Lam Research",
    "symbol": "LRCX",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment",
    "sector": "Semiconductor Materials & Equipment"
  },
  {
    "name": "Lamb Weston",
    "symbol": "LW",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "Las Vegas Sands",
    "symbol": "LVS",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming",
    "sector": "Casinos & Gaming"
  },
  {
    "name": "Leidos",
    "symbol": "LDOS",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services",
    "sector": "Diversified Support Services"
  },
  {
    "name": "Lennar",
    "symbol": "LEN",
    "description": "Constituyente del S&P 500. Sector: Homebuilding",
    "sector": "Homebuilding"
  },
  {
    "name": "Lilly (Eli)",
    "symbol": "LLY",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals",
    "sector": "Pharmaceuticals"
  },
  {
    "name": "Linde plc",
    "symbol": "LIN",
    "description": "Constituyente del S&P 500. Sector: Industrial Gases",
    "sector": "Industrial Gases"
  },
  {
    "name": "Live Nation Entertainment",
    "symbol": "LYV",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment",
    "sector": "Movies & Entertainment"
  },
  {
    "name": "LKQ Corporation",
    "symbol": "LKQ",
    "description": "Constituyente del S&P 500. Sector: Distributors",
    "sector": "Distributors"
  },
  {
    "name": "Lockheed Martin",
    "symbol": "LMT",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "Loews Corporation",
    "symbol": "L",
    "description": "Constituyente del S&P 500. Sector: Multi-line Insurance",
    "sector": "Multi-line Insurance"
  },
  {
    "name": "Lowe's",
    "symbol": "LOW",
    "description": "Constituyente del S&P 500. Sector: Home Improvement Retail",
    "sector": "Home Improvement Retail"
  },
  {
    "name": "Lululemon Athletica",
    "symbol": "LULU",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods",
    "sector": "Apparel, Accessories & Luxury Goods"
  },
  {
    "name": "LyondellBasell",
    "symbol": "LYB",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals",
    "sector": "Specialty Chemicals"
  },
  {
    "name": "M&T Bank",
    "symbol": "MTB",
    "description": "Constituyente del S&P 500. Sector: Regional Banks",
    "sector": "Regional Banks"
  },
  {
    "name": "Marathon Oil",
    "symbol": "MRO",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production",
    "sector": "Oil & Gas Exploration & Production"
  },
  {
    "name": "Marathon Petroleum",
    "symbol": "MPC",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Refining & Marketing",
    "sector": "Oil & Gas Refining & Marketing"
  },
  {
    "name": "MarketAxess",
    "symbol": "MKTX",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data",
    "sector": "Financial Exchanges & Data"
  },
  {
    "name": "Marriott International",
    "symbol": "MAR",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines",
    "sector": "Hotels, Resorts & Cruise Lines"
  },
  {
    "name": "Marsh McLennan",
    "symbol": "MMC",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers",
    "sector": "Insurance Brokers"
  },
  {
    "name": "Martin Marietta Materials",
    "symbol": "MLM",
    "description": "Constituyente del S&P 500. Sector: Construction Materials",
    "sector": "Construction Materials"
  },
  {
    "name": "Masco",
    "symbol": "MAS",
    "description": "Constituyente del S&P 500. Sector: Building Products",
    "sector": "Building Products"
  },
  {
    "name": "Mastercard",
    "symbol": "MA",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services",
    "sector": "Transaction & Payment Processing Services"
  },
  {
    "name": "Match Group",
    "symbol": "MTCH",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services",
    "sector": "Interactive Media & Services"
  },
  {
    "name": "McCormick & Company",
    "symbol": "MKC",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "McDonald's",
    "symbol": "MCD",
    "description": "Constituyente del S&P 500. Sector: Restaurants",
    "sector": "Restaurants"
  },
  {
    "name": "McKesson Corporation",
    "symbol": "MCK",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors",
    "sector": "Health Care Distributors"
  },
  {
    "name": "Medtronic",
    "symbol": "MDT",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Merck & Co.",
    "symbol": "MRK",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals",
    "sector": "Pharmaceuticals"
  },
  {
    "name": "Meta Platforms",
    "symbol": "META",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services",
    "sector": "Interactive Media & Services"
  },
  {
    "name": "MetLife",
    "symbol": "MET",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance",
    "sector": "Life & Health Insurance"
  },
  {
    "name": "Mettler Toledo",
    "symbol": "MTD",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services",
    "sector": "Life Sciences Tools & Services"
  },
  {
    "name": "MGM Resorts",
    "symbol": "MGM",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming",
    "sector": "Casinos & Gaming"
  },
  {
    "name": "Microchip Technology",
    "symbol": "MCHP",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Micron Technology",
    "symbol": "MU",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Microsoft",
    "symbol": "MSFT",
    "description": "Constituyente del S&P 500. Sector: Systems Software",
    "sector": "Systems Software"
  },
  {
    "name": "Mid-America Apartment Communities",
    "symbol": "MAA",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs",
    "sector": "Multi-Family Residential REITs"
  },
  {
    "name": "Moderna",
    "symbol": "MRNA",
    "description": "Constituyente del S&P 500. Sector: Biotechnology",
    "sector": "Biotechnology"
  },
  {
    "name": "Mohawk Industries",
    "symbol": "MHK",
    "description": "Constituyente del S&P 500. Sector: Home Furnishings",
    "sector": "Home Furnishings"
  },
  {
    "name": "Molina Healthcare",
    "symbol": "MOH",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care",
    "sector": "Managed Health Care"
  },
  {
    "name": "Molson Coors Beverage Company",
    "symbol": "TAP",
    "description": "Constituyente del S&P 500. Sector: Brewers",
    "sector": "Brewers"
  },
  {
    "name": "Mondelez International",
    "symbol": "MDLZ",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "Monolithic Power Systems",
    "symbol": "MPWR",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Monster Beverage",
    "symbol": "MNST",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages",
    "sector": "Soft Drinks & Non-alcoholic Beverages"
  },
  {
    "name": "Moody's Corporation",
    "symbol": "MCO",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data",
    "sector": "Financial Exchanges & Data"
  },
  {
    "name": "Morgan Stanley",
    "symbol": "MS",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage",
    "sector": "Investment Banking & Brokerage"
  },
  {
    "name": "Mosaic Company (The)",
    "symbol": "MOS",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals",
    "sector": "Fertilizers & Agricultural Chemicals"
  },
  {
    "name": "Motorola Solutions",
    "symbol": "MSI",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment",
    "sector": "Communications Equipment"
  },
  {
    "name": "MSCI",
    "symbol": "MSCI",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data",
    "sector": "Financial Exchanges & Data"
  },
  {
    "name": "Nasdaq, Inc.",
    "symbol": "NDAQ",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data",
    "sector": "Financial Exchanges & Data"
  },
  {
    "name": "NetApp",
    "symbol": "NTAP",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals",
    "sector": "Technology Hardware, Storage & Peripherals"
  },
  {
    "name": "Netflix",
    "symbol": "NFLX",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment",
    "sector": "Movies & Entertainment"
  },
  {
    "name": "Newmont",
    "symbol": "NEM",
    "description": "Constituyente del S&P 500. Sector: Gold",
    "sector": "Gold"
  },
  {
    "name": "News Corp (Class A)",
    "symbol": "NWSA",
    "description": "Constituyente del S&P 500. Sector: Publishing",
    "sector": "Publishing"
  },
  {
    "name": "News Corp (Class B)",
    "symbol": "NWS",
    "description": "Constituyente del S&P 500. Sector: Publishing",
    "sector": "Publishing"
  },
  {
    "name": "NextEra Energy",
    "symbol": "NEE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "Nike, Inc.",
    "symbol": "NKE",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods",
    "sector": "Apparel, Accessories & Luxury Goods"
  },
  {
    "name": "NiSource",
    "symbol": "NI",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "Nordson Corporation",
    "symbol": "NDSN",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Norfolk Southern Railway",
    "symbol": "NSC",
    "description": "Constituyente del S&P 500. Sector: Rail Transportation",
    "sector": "Rail Transportation"
  },
  {
    "name": "Northern Trust",
    "symbol": "NTRS",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "Northrop Grumman",
    "symbol": "NOC",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "Norwegian Cruise Line Holdings",
    "symbol": "NCLH",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines",
    "sector": "Hotels, Resorts & Cruise Lines"
  },
  {
    "name": "NRG Energy",
    "symbol": "NRG",
    "description": "Constituyente del S&P 500. Sector: Independent Power Producers & Energy Traders",
    "sector": "Independent Power Producers & Energy Traders"
  },
  {
    "name": "Nucor",
    "symbol": "NUE",
    "description": "Constituyente del S&P 500. Sector: Steel",
    "sector": "Steel"
  },
  {
    "name": "Nvidia",
    "symbol": "NVDA",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "NVR, Inc.",
    "symbol": "NVR",
    "description": "Constituyente del S&P 500. Sector: Homebuilding",
    "sector": "Homebuilding"
  },
  {
    "name": "NXP Semiconductors",
    "symbol": "NXPI",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "O'Reilly Auto Parts",
    "symbol": "ORLY",
    "description": "Constituyente del S&P 500. Sector: Automotive Retail",
    "sector": "Automotive Retail"
  },
  {
    "name": "Occidental Petroleum",
    "symbol": "OXY",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production",
    "sector": "Oil & Gas Exploration & Production"
  },
  {
    "name": "Old Dominion",
    "symbol": "ODFL",
    "description": "Constituyente del S&P 500. Sector: Cargo Ground Transportation",
    "sector": "Cargo Ground Transportation"
  },
  {
    "name": "Omnicom Group",
    "symbol": "OMC",
    "description": "Constituyente del S&P 500. Sector: Advertising",
    "sector": "Advertising"
  },
  {
    "name": "ON Semiconductor",
    "symbol": "ON",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "ONEOK",
    "symbol": "OKE",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation",
    "sector": "Oil & Gas Storage & Transportation"
  },
  {
    "name": "Oracle Corporation",
    "symbol": "ORCL",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Otis Worldwide",
    "symbol": "OTIS",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Paccar",
    "symbol": "PCAR",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment",
    "sector": "Construction Machinery & Heavy Transportation Equipment"
  },
  {
    "name": "Packaging Corporation of America",
    "symbol": "PKG",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials",
    "sector": "Paper & Plastic Packaging Products & Materials"
  },
  {
    "name": "Palantir Technologies",
    "symbol": "PLTR",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure",
    "sector": "Internet Services & Infrastructure"
  },
  {
    "name": "Palo Alto Networks",
    "symbol": "PANW",
    "description": "Constituyente del S&P 500. Sector: Systems Software",
    "sector": "Systems Software"
  },
  {
    "name": "Paramount Global",
    "symbol": "PARA",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment",
    "sector": "Movies & Entertainment"
  },
  {
    "name": "Parker Hannifin",
    "symbol": "PH",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Paychex",
    "symbol": "PAYX",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services",
    "sector": "Human Resource & Employment Services"
  },
  {
    "name": "Paycom",
    "symbol": "PAYC",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services",
    "sector": "Human Resource & Employment Services"
  },
  {
    "name": "PayPal",
    "symbol": "PYPL",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services",
    "sector": "Transaction & Payment Processing Services"
  },
  {
    "name": "Pentair",
    "symbol": "PNR",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "PepsiCo",
    "symbol": "PEP",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages",
    "sector": "Soft Drinks & Non-alcoholic Beverages"
  },
  {
    "name": "Pfizer",
    "symbol": "PFE",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals",
    "sector": "Pharmaceuticals"
  },
  {
    "name": "PG&E Corporation",
    "symbol": "PCG",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "Philip Morris International",
    "symbol": "PM",
    "description": "Constituyente del S&P 500. Sector: Tobacco",
    "sector": "Tobacco"
  },
  {
    "name": "Phillips 66",
    "symbol": "PSX",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Refining & Marketing",
    "sector": "Oil & Gas Refining & Marketing"
  },
  {
    "name": "Pinnacle West",
    "symbol": "PNW",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "PNC Financial Services",
    "symbol": "PNC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks",
    "sector": "Diversified Banks"
  },
  {
    "name": "Pool Corporation",
    "symbol": "POOL",
    "description": "Constituyente del S&P 500. Sector: Distributors",
    "sector": "Distributors"
  },
  {
    "name": "PPG Industries",
    "symbol": "PPG",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals",
    "sector": "Specialty Chemicals"
  },
  {
    "name": "PPL Corporation",
    "symbol": "PPL",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Principal Financial Group",
    "symbol": "PFG",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance",
    "sector": "Life & Health Insurance"
  },
  {
    "name": "Procter & Gamble",
    "symbol": "PG",
    "description": "Constituyente del S&P 500. Sector: Personal Care Products",
    "sector": "Personal Care Products"
  },
  {
    "name": "Progressive Corporation",
    "symbol": "PGR",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance",
    "sector": "Property & Casualty Insurance"
  },
  {
    "name": "Prologis",
    "symbol": "PLD",
    "description": "Constituyente del S&P 500. Sector: Industrial REITs",
    "sector": "Industrial REITs"
  },
  {
    "name": "Prudential Financial",
    "symbol": "PRU",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance",
    "sector": "Life & Health Insurance"
  },
  {
    "name": "PTC Inc.",
    "symbol": "PTC",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Public Service Enterprise Group",
    "symbol": "PEG",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Public Storage",
    "symbol": "PSA",
    "description": "Constituyente del S&P 500. Sector: Self-Storage REITs",
    "sector": "Self-Storage REITs"
  },
  {
    "name": "PulteGroup",
    "symbol": "PHM",
    "description": "Constituyente del S&P 500. Sector: Homebuilding",
    "sector": "Homebuilding"
  },
  {
    "name": "Qorvo",
    "symbol": "QRVO",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Qualcomm",
    "symbol": "QCOM",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Quanta Services",
    "symbol": "PWR",
    "description": "Constituyente del S&P 500. Sector: Construction & Engineering",
    "sector": "Construction & Engineering"
  },
  {
    "name": "Quest Diagnostics",
    "symbol": "DGX",
    "description": "Constituyente del S&P 500. Sector: Health Care Services",
    "sector": "Health Care Services"
  },
  {
    "name": "Ralph Lauren Corporation",
    "symbol": "RL",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods",
    "sector": "Apparel, Accessories & Luxury Goods"
  },
  {
    "name": "Raymond James Financial",
    "symbol": "RJF",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage",
    "sector": "Investment Banking & Brokerage"
  },
  {
    "name": "Realty Income",
    "symbol": "O",
    "description": "Constituyente del S&P 500. Sector: Retail REITs",
    "sector": "Retail REITs"
  },
  {
    "name": "Regency Centers",
    "symbol": "REG",
    "description": "Constituyente del S&P 500. Sector: Retail REITs",
    "sector": "Retail REITs"
  },
  {
    "name": "Regeneron Pharmaceuticals",
    "symbol": "REGN",
    "description": "Constituyente del S&P 500. Sector: Biotechnology",
    "sector": "Biotechnology"
  },
  {
    "name": "Regions Financial Corporation",
    "symbol": "RF",
    "description": "Constituyente del S&P 500. Sector: Regional Banks",
    "sector": "Regional Banks"
  },
  {
    "name": "Republic Services",
    "symbol": "RSG",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services",
    "sector": "Environmental & Facilities Services"
  },
  {
    "name": "ResMed",
    "symbol": "RMD",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Revvity",
    "symbol": "RVTY",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Rockwell Automation",
    "symbol": "ROK",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment",
    "sector": "Electrical Components & Equipment"
  },
  {
    "name": "Rollins, Inc.",
    "symbol": "ROL",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services",
    "sector": "Environmental & Facilities Services"
  },
  {
    "name": "Roper Technologies",
    "symbol": "ROP",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments",
    "sector": "Electronic Equipment & Instruments"
  },
  {
    "name": "Ross Stores",
    "symbol": "ROST",
    "description": "Constituyente del S&P 500. Sector: Apparel Retail",
    "sector": "Apparel Retail"
  },
  {
    "name": "Royal Caribbean Group",
    "symbol": "RCL",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines",
    "sector": "Hotels, Resorts & Cruise Lines"
  },
  {
    "name": "RTX Corporation",
    "symbol": "RTX",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "S&P Global",
    "symbol": "SPGI",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data",
    "sector": "Financial Exchanges & Data"
  },
  {
    "name": "Salesforce",
    "symbol": "CRM",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "SBA Communications",
    "symbol": "SBAC",
    "description": "Constituyente del S&P 500. Sector: Telecom Tower REITs",
    "sector": "Telecom Tower REITs"
  },
  {
    "name": "Schlumberger",
    "symbol": "SLB",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Equipment & Services",
    "sector": "Oil & Gas Equipment & Services"
  },
  {
    "name": "Seagate Technology",
    "symbol": "STX",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals",
    "sector": "Technology Hardware, Storage & Peripherals"
  },
  {
    "name": "Sempra",
    "symbol": "SRE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "ServiceNow",
    "symbol": "NOW",
    "description": "Constituyente del S&P 500. Sector: Systems Software",
    "sector": "Systems Software"
  },
  {
    "name": "Sherwin-Williams",
    "symbol": "SHW",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals",
    "sector": "Specialty Chemicals"
  },
  {
    "name": "Simon Property Group",
    "symbol": "SPG",
    "description": "Constituyente del S&P 500. Sector: Retail REITs",
    "sector": "Retail REITs"
  },
  {
    "name": "Skyworks Solutions",
    "symbol": "SWKS",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Smurfit WestRock",
    "symbol": "SW",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials",
    "sector": "Paper & Plastic Packaging Products & Materials"
  },
  {
    "name": "Snap-on",
    "symbol": "SNA",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Solventum",
    "symbol": "SOLV",
    "description": "Constituyente del S&P 500. Sector: Health Care Technology",
    "sector": "Health Care Technology"
  },
  {
    "name": "Southern Company",
    "symbol": "SO",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Southwest Airlines",
    "symbol": "LUV",
    "description": "Constituyente del S&P 500. Sector: Passenger Airlines",
    "sector": "Passenger Airlines"
  },
  {
    "name": "Stanley Black & Decker",
    "symbol": "SWK",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Starbucks",
    "symbol": "SBUX",
    "description": "Constituyente del S&P 500. Sector: Restaurants",
    "sector": "Restaurants"
  },
  {
    "name": "State Street Corporation",
    "symbol": "STT",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "Steel Dynamics",
    "symbol": "STLD",
    "description": "Constituyente del S&P 500. Sector: Steel",
    "sector": "Steel"
  },
  {
    "name": "Steris",
    "symbol": "STE",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Stryker Corporation",
    "symbol": "SYK",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Supermicro",
    "symbol": "SMCI",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals",
    "sector": "Technology Hardware, Storage & Peripherals"
  },
  {
    "name": "Synchrony Financial",
    "symbol": "SYF",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance",
    "sector": "Consumer Finance"
  },
  {
    "name": "Synopsys",
    "symbol": "SNPS",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Sysco",
    "symbol": "SYY",
    "description": "Constituyente del S&P 500. Sector: Food Distributors",
    "sector": "Food Distributors"
  },
  {
    "name": "T-Mobile US",
    "symbol": "TMUS",
    "description": "Constituyente del S&P 500. Sector: Wireless Telecommunication Services",
    "sector": "Wireless Telecommunication Services"
  },
  {
    "name": "T. Rowe Price",
    "symbol": "TROW",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks",
    "sector": "Asset Management & Custody Banks"
  },
  {
    "name": "Take-Two Interactive",
    "symbol": "TTWO",
    "description": "Constituyente del S&P 500. Sector: Interactive Home Entertainment",
    "sector": "Interactive Home Entertainment"
  },
  {
    "name": "Tapestry, Inc.",
    "symbol": "TPR",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods",
    "sector": "Apparel, Accessories & Luxury Goods"
  },
  {
    "name": "Targa Resources",
    "symbol": "TRGP",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation",
    "sector": "Oil & Gas Storage & Transportation"
  },
  {
    "name": "Target Corporation",
    "symbol": "TGT",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail",
    "sector": "Consumer Staples Merchandise Retail"
  },
  {
    "name": "TE Connectivity",
    "symbol": "TEL",
    "description": "Constituyente del S&P 500. Sector: Electronic Manufacturing Services",
    "sector": "Electronic Manufacturing Services"
  },
  {
    "name": "Teledyne Technologies",
    "symbol": "TDY",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments",
    "sector": "Electronic Equipment & Instruments"
  },
  {
    "name": "Teleflex",
    "symbol": "TFX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Teradyne",
    "symbol": "TER",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment",
    "sector": "Semiconductor Materials & Equipment"
  },
  {
    "name": "Tesla, Inc.",
    "symbol": "TSLA",
    "description": "Constituyente del S&P 500. Sector: Automobile Manufacturers",
    "sector": "Automobile Manufacturers"
  },
  {
    "name": "Texas Instruments",
    "symbol": "TXN",
    "description": "Constituyente del S&P 500. Sector: Semiconductors",
    "sector": "Semiconductors"
  },
  {
    "name": "Textron",
    "symbol": "TXT",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "Thermo Fisher Scientific",
    "symbol": "TMO",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services",
    "sector": "Life Sciences Tools & Services"
  },
  {
    "name": "TJX Companies",
    "symbol": "TJX",
    "description": "Constituyente del S&P 500. Sector: Apparel Retail",
    "sector": "Apparel Retail"
  },
  {
    "name": "Tractor Supply",
    "symbol": "TSCO",
    "description": "Constituyente del S&P 500. Sector: Other Specialty Retail",
    "sector": "Other Specialty Retail"
  },
  {
    "name": "Trane Technologies",
    "symbol": "TT",
    "description": "Constituyente del S&P 500. Sector: Building Products",
    "sector": "Building Products"
  },
  {
    "name": "TransDigm Group",
    "symbol": "TDG",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense",
    "sector": "Aerospace & Defense"
  },
  {
    "name": "Travelers Companies (The)",
    "symbol": "TRV",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance",
    "sector": "Property & Casualty Insurance"
  },
  {
    "name": "Trimble Inc.",
    "symbol": "TRMB",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments",
    "sector": "Electronic Equipment & Instruments"
  },
  {
    "name": "Truist Financial",
    "symbol": "TFC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks",
    "sector": "Diversified Banks"
  },
  {
    "name": "Tyler Technologies",
    "symbol": "TYL",
    "description": "Constituyente del S&P 500. Sector: Application Software",
    "sector": "Application Software"
  },
  {
    "name": "Tyson Foods",
    "symbol": "TSN",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats",
    "sector": "Packaged Foods & Meats"
  },
  {
    "name": "U.S. Bancorp",
    "symbol": "USB",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks",
    "sector": "Diversified Banks"
  },
  {
    "name": "Uber",
    "symbol": "UBER",
    "description": "Constituyente del S&P 500. Sector: Passenger Ground Transportation",
    "sector": "Passenger Ground Transportation"
  },
  {
    "name": "UDR, Inc.",
    "symbol": "UDR",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs",
    "sector": "Multi-Family Residential REITs"
  },
  {
    "name": "Ulta Beauty",
    "symbol": "ULTA",
    "description": "Constituyente del S&P 500. Sector: Other Specialty Retail",
    "sector": "Other Specialty Retail"
  },
  {
    "name": "Union Pacific Corporation",
    "symbol": "UNP",
    "description": "Constituyente del S&P 500. Sector: Rail Transportation",
    "sector": "Rail Transportation"
  },
  {
    "name": "United Airlines Holdings",
    "symbol": "UAL",
    "description": "Constituyente del S&P 500. Sector: Passenger Airlines",
    "sector": "Passenger Airlines"
  },
  {
    "name": "United Parcel Service",
    "symbol": "UPS",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics",
    "sector": "Air Freight & Logistics"
  },
  {
    "name": "United Rentals",
    "symbol": "URI",
    "description": "Constituyente del S&P 500. Sector: Trading Companies & Distributors",
    "sector": "Trading Companies & Distributors"
  },
  {
    "name": "UnitedHealth Group",
    "symbol": "UNH",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care",
    "sector": "Managed Health Care"
  },
  {
    "name": "Universal Health Services",
    "symbol": "UHS",
    "description": "Constituyente del S&P 500. Sector: Health Care Facilities",
    "sector": "Health Care Facilities"
  },
  {
    "name": "Valero Energy",
    "symbol": "VLO",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Refining & Marketing",
    "sector": "Oil & Gas Refining & Marketing"
  },
  {
    "name": "Ventas",
    "symbol": "VTR",
    "description": "Constituyente del S&P 500. Sector: Health Care REITs",
    "sector": "Health Care REITs"
  },
  {
    "name": "Veralto",
    "symbol": "VLTO",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services",
    "sector": "Environmental & Facilities Services"
  },
  {
    "name": "Verisign",
    "symbol": "VRSN",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure",
    "sector": "Internet Services & Infrastructure"
  },
  {
    "name": "Verisk Analytics",
    "symbol": "VRSK",
    "description": "Constituyente del S&P 500. Sector: Research & Consulting Services",
    "sector": "Research & Consulting Services"
  },
  {
    "name": "Verizon",
    "symbol": "VZ",
    "description": "Constituyente del S&P 500. Sector: Integrated Telecommunication Services",
    "sector": "Integrated Telecommunication Services"
  },
  {
    "name": "Vertex Pharmaceuticals",
    "symbol": "VRTX",
    "description": "Constituyente del S&P 500. Sector: Biotechnology",
    "sector": "Biotechnology"
  },
  {
    "name": "Viatris",
    "symbol": "VTRS",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals",
    "sector": "Pharmaceuticals"
  },
  {
    "name": "Vici Properties",
    "symbol": "VICI",
    "description": "Constituyente del S&P 500. Sector: Hotel & Resort REITs",
    "sector": "Hotel & Resort REITs"
  },
  {
    "name": "Visa Inc.",
    "symbol": "V",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services",
    "sector": "Transaction & Payment Processing Services"
  },
  {
    "name": "Vistra Corp.",
    "symbol": "VST",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Vulcan Materials Company",
    "symbol": "VMC",
    "description": "Constituyente del S&P 500. Sector: Construction Materials",
    "sector": "Construction Materials"
  },
  {
    "name": "W. R. Berkley Corporation",
    "symbol": "WRB",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance",
    "sector": "Property & Casualty Insurance"
  },
  {
    "name": "W. W. Grainger",
    "symbol": "GWW",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Wabtec",
    "symbol": "WAB",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment",
    "sector": "Construction Machinery & Heavy Transportation Equipment"
  },
  {
    "name": "Walgreens Boots Alliance",
    "symbol": "WBA",
    "description": "Constituyente del S&P 500. Sector: Drug Retail",
    "sector": "Drug Retail"
  },
  {
    "name": "Walmart",
    "symbol": "WMT",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail",
    "sector": "Consumer Staples Merchandise Retail"
  },
  {
    "name": "Walt Disney Company (The)",
    "symbol": "DIS",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment",
    "sector": "Movies & Entertainment"
  },
  {
    "name": "Warner Bros. Discovery",
    "symbol": "WBD",
    "description": "Constituyente del S&P 500. Sector: Broadcasting",
    "sector": "Broadcasting"
  },
  {
    "name": "Waste Management",
    "symbol": "WM",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services",
    "sector": "Environmental & Facilities Services"
  },
  {
    "name": "Waters Corporation",
    "symbol": "WAT",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services",
    "sector": "Life Sciences Tools & Services"
  },
  {
    "name": "WEC Energy Group",
    "symbol": "WEC",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities",
    "sector": "Electric Utilities"
  },
  {
    "name": "Wells Fargo",
    "symbol": "WFC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks",
    "sector": "Diversified Banks"
  },
  {
    "name": "Welltower",
    "symbol": "WELL",
    "description": "Constituyente del S&P 500. Sector: Health Care REITs",
    "sector": "Health Care REITs"
  },
  {
    "name": "West Pharmaceutical Services",
    "symbol": "WST",
    "description": "Constituyente del S&P 500. Sector: Health Care Supplies",
    "sector": "Health Care Supplies"
  },
  {
    "name": "Western Digital",
    "symbol": "WDC",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals",
    "sector": "Technology Hardware, Storage & Peripherals"
  },
  {
    "name": "Weyerhaeuser",
    "symbol": "WY",
    "description": "Constituyente del S&P 500. Sector: Timber REITs",
    "sector": "Timber REITs"
  },
  {
    "name": "Williams Companies",
    "symbol": "WMB",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation",
    "sector": "Oil & Gas Storage & Transportation"
  },
  {
    "name": "Willis Towers Watson",
    "symbol": "WTW",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers",
    "sector": "Insurance Brokers"
  },
  {
    "name": "Wynn Resorts",
    "symbol": "WYNN",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming",
    "sector": "Casinos & Gaming"
  },
  {
    "name": "Xcel Energy",
    "symbol": "XEL",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities",
    "sector": "Multi-Utilities"
  },
  {
    "name": "Xylem Inc.",
    "symbol": "XYL",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components",
    "sector": "Industrial Machinery & Supplies & Components"
  },
  {
    "name": "Yum! Brands",
    "symbol": "YUM",
    "description": "Constituyente del S&P 500. Sector: Restaurants",
    "sector": "Restaurants"
  },
  {
    "name": "Zebra Technologies",
    "symbol": "ZBRA",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments",
    "sector": "Electronic Equipment & Instruments"
  },
  {
    "name": "Zimmer Biomet",
    "symbol": "ZBH",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment",
    "sector": "Health Care Equipment"
  },
  {
    "name": "Zoetis",
    "symbol": "ZTS",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals",
    "sector": "Pharmaceuticals"
  }
];

export function buildSeedCompanies() {
  return companies.map((company) => ({
    ...company,
    marketCap: randomCompanyValue(),
    isPublic: true,
    creatorId: null,
  }));
}

export async function seedCompanies(transaction?: Transaction) {
  await Company.bulkCreate(buildSeedCompanies(), {
    updateOnDuplicate: ['name', 'description', 'sector', 'marketCap', 'isPublic', 'creatorId'],
    transaction,
  });
}

export async function resetGameState() {
  await sequelize.transaction(async (transaction) => {
    await Holding.destroy({ where: {}, transaction });
    await User.update({ balance: INITIAL_BALANCE }, { where: {}, transaction });
    await seedCompanies(transaction);
  });
}
