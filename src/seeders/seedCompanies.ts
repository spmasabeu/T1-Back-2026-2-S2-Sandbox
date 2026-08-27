import { Company } from '../models';

interface SeedCompany {
  name: string;
  symbol: string;
  description: string;
  sector: string;
  marketCap: number;
  totalShares: number;
}

// S&P 500 financial snapshot sourced from https://datahub.io/core/s-and-p-500-companies-financials/_r/-/data/constituents-financials.csv on 2026-08-27.
// marketCap is scaled by 100000, with a 100000 floor, to keep rankings realistic and gameplay affordable.
export const companies: SeedCompany[] = [
  {
    "name": "3M",
    "symbol": "MMM",
    "description": "Constituyente del S&P 500. Sector: Industrial Conglomerates. Precio referencial: US$180.00.",
    "sector": "Industrial Conglomerates",
    "marketCap": 928300,
    "totalShares": 5157
  },
  {
    "name": "A. O. Smith",
    "symbol": "AOS",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$62.48.",
    "sector": "Building Products",
    "marketCap": 100000,
    "totalShares": 1601
  },
  {
    "name": "Abbott Laboratories",
    "symbol": "ABT",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$114.10.",
    "sector": "Health Care Equipment",
    "marketCap": 1974367,
    "totalShares": 17304
  },
  {
    "name": "AbbVie",
    "symbol": "ABBV",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$262.90.",
    "sector": "Biotechnology",
    "marketCap": 4645751,
    "totalShares": 17671
  },
  {
    "name": "Accenture",
    "symbol": "ACN",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$181.38.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 1109941,
    "totalShares": 6119
  },
  {
    "name": "Adobe Inc.",
    "symbol": "ADBE",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$273.47.",
    "sector": "Application Software",
    "marketCap": 1087043,
    "totalShares": 3975
  },
  {
    "name": "Advanced Micro Devices",
    "symbol": "AMD",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$480.93.",
    "sector": "Semiconductors",
    "marketCap": 7851062,
    "totalShares": 16325
  },
  {
    "name": "AES Corporation",
    "symbol": "AES",
    "description": "Constituyente del S&P 500. Sector: Independent Power Producers & Energy Traders. Precio referencial: US$14.73.",
    "sector": "Independent Power Producers & Energy Traders",
    "marketCap": 105090,
    "totalShares": 7134
  },
  {
    "name": "Aflac",
    "symbol": "AFL",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$117.45.",
    "sector": "Life & Health Insurance",
    "marketCap": 588828,
    "totalShares": 5013
  },
  {
    "name": "Agilent Technologies",
    "symbol": "A",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$155.08.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 437995,
    "totalShares": 2824
  },
  {
    "name": "Air Products",
    "symbol": "APD",
    "description": "Constituyente del S&P 500. Sector: Industrial Gases. Precio referencial: US$306.66.",
    "sector": "Industrial Gases",
    "marketCap": 682887,
    "totalShares": 2227
  },
  {
    "name": "Airbnb",
    "symbol": "ABNB",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$188.07.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 1126136,
    "totalShares": 5988
  },
  {
    "name": "Akamai Technologies",
    "symbol": "AKAM",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure. Precio referencial: US$108.06.",
    "sector": "Internet Services & Infrastructure",
    "marketCap": 155300,
    "totalShares": 1437
  },
  {
    "name": "Albemarle Corporation",
    "symbol": "ALB",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$134.51.",
    "sector": "Specialty Chemicals",
    "marketCap": 158729,
    "totalShares": 1180
  },
  {
    "name": "Alexandria Real Estate Equities",
    "symbol": "ARE",
    "description": "Constituyente del S&P 500. Sector: Office REITs. Precio referencial: US$52.97.",
    "sector": "Office REITs",
    "marketCap": 100000,
    "totalShares": 1888
  },
  {
    "name": "Align Technology",
    "symbol": "ALGN",
    "description": "Constituyente del S&P 500. Sector: Health Care Supplies. Precio referencial: US$159.14.",
    "sector": "Health Care Supplies",
    "marketCap": 113053,
    "totalShares": 710
  },
  {
    "name": "Allegion",
    "symbol": "ALLE",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$160.28.",
    "sector": "Building Products",
    "marketCap": 136297,
    "totalShares": 850
  },
  {
    "name": "Alliant Energy",
    "symbol": "LNT",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$68.92.",
    "sector": "Electric Utilities",
    "marketCap": 178699,
    "totalShares": 2593
  },
  {
    "name": "Allstate",
    "symbol": "ALL",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$261.81.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 662007,
    "totalShares": 2529
  },
  {
    "name": "Alphabet Inc. (Class A)",
    "symbol": "GOOGL",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services. Precio referencial: US$342.00.",
    "sector": "Interactive Media & Services",
    "marketCap": 41826378,
    "totalShares": 122299
  },
  {
    "name": "Alphabet Inc. (Class C)",
    "symbol": "GOOG",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services. Precio referencial: US$339.10.",
    "sector": "Interactive Media & Services",
    "marketCap": 41471710,
    "totalShares": 122299
  },
  {
    "name": "Altria",
    "symbol": "MO",
    "description": "Constituyente del S&P 500. Sector: Tobacco. Precio referencial: US$69.12.",
    "sector": "Tobacco",
    "marketCap": 1154127,
    "totalShares": 16697
  },
  {
    "name": "Amazon",
    "symbol": "AMZN",
    "description": "Constituyente del S&P 500. Sector: Broadline Retail. Precio referencial: US$260.28.",
    "sector": "Broadline Retail",
    "marketCap": 28074616,
    "totalShares": 107863
  },
  {
    "name": "Amcor",
    "symbol": "AMCR",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$47.15.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 217996,
    "totalShares": 4623
  },
  {
    "name": "Amentum",
    "symbol": "AMTM",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services. Precio referencial: US$20.61.",
    "sector": "Diversified Support Services",
    "marketCap": 100000,
    "totalShares": 4852
  },
  {
    "name": "Ameren",
    "symbol": "AEE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$107.75.",
    "sector": "Multi-Utilities",
    "marketCap": 298299,
    "totalShares": 2768
  },
  {
    "name": "American Electric Power",
    "symbol": "AEP",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$123.36.",
    "sector": "Electric Utilities",
    "marketCap": 671569,
    "totalShares": 5444
  },
  {
    "name": "American Express",
    "symbol": "AXP",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance. Precio referencial: US$336.15.",
    "sector": "Consumer Finance",
    "marketCap": 2270054,
    "totalShares": 6753
  },
  {
    "name": "American International Group",
    "symbol": "AIG",
    "description": "Constituyente del S&P 500. Sector: Multi-line Insurance. Precio referencial: US$76.97.",
    "sector": "Multi-line Insurance",
    "marketCap": 402471,
    "totalShares": 5229
  },
  {
    "name": "American Tower",
    "symbol": "AMT",
    "description": "Constituyente del S&P 500. Sector: Telecom Tower REITs. Precio referencial: US$175.73.",
    "sector": "Telecom Tower REITs",
    "marketCap": 818832,
    "totalShares": 4660
  },
  {
    "name": "American Water Works",
    "symbol": "AWK",
    "description": "Constituyente del S&P 500. Sector: Water Utilities. Precio referencial: US$137.49.",
    "sector": "Water Utilities",
    "marketCap": 273233,
    "totalShares": 1987
  },
  {
    "name": "Ameriprise Financial",
    "symbol": "AMP",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$560.28.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 494913,
    "totalShares": 883
  },
  {
    "name": "Ametek",
    "symbol": "AME",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$245.20.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 562149,
    "totalShares": 2293
  },
  {
    "name": "Amgen",
    "symbol": "AMGN",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$440.34.",
    "sector": "Biotechnology",
    "marketCap": 2380619,
    "totalShares": 5406
  },
  {
    "name": "Amphenol",
    "symbol": "APH",
    "description": "Constituyente del S&P 500. Sector: Electronic Components. Precio referencial: US$161.34.",
    "sector": "Electronic Components",
    "marketCap": 1989295,
    "totalShares": 12330
  },
  {
    "name": "Analog Devices",
    "symbol": "ADI",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$371.80.",
    "sector": "Semiconductors",
    "marketCap": 1801614,
    "totalShares": 4846
  },
  {
    "name": "Ansys",
    "symbol": "ANSS",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$251.00.",
    "sector": "Application Software",
    "marketCap": 3464051,
    "totalShares": 13801
  },
  {
    "name": "Aon",
    "symbol": "AON",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$353.98.",
    "sector": "Insurance Brokers",
    "marketCap": 750882,
    "totalShares": 2121
  },
  {
    "name": "APA Corporation",
    "symbol": "APA",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$41.19.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 144310,
    "totalShares": 3504
  },
  {
    "name": "Apple Inc.",
    "symbol": "AAPL",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$313.45.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 45745460,
    "totalShares": 145942
  },
  {
    "name": "Applied Materials",
    "symbol": "AMAT",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$479.76.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 3807363,
    "totalShares": 7936
  },
  {
    "name": "Aptiv",
    "symbol": "APTV",
    "description": "Constituyente del S&P 500. Sector: Automotive Parts & Equipment. Precio referencial: US$46.27.",
    "sector": "Automotive Parts & Equipment",
    "marketCap": 100000,
    "totalShares": 2161
  },
  {
    "name": "Arch Capital Group",
    "symbol": "ACGL",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$100.72.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 343686,
    "totalShares": 3412
  },
  {
    "name": "Archer Daniels Midland",
    "symbol": "ADM",
    "description": "Constituyente del S&P 500. Sector: Agricultural Products & Services. Precio referencial: US$80.09.",
    "sector": "Agricultural Products & Services",
    "marketCap": 386001,
    "totalShares": 4820
  },
  {
    "name": "Arista Networks",
    "symbol": "ANET",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment. Precio referencial: US$202.25.",
    "sector": "Communications Equipment",
    "marketCap": 2550827,
    "totalShares": 12612
  },
  {
    "name": "Arthur J. Gallagher & Co.",
    "symbol": "AJG",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$265.03.",
    "sector": "Insurance Brokers",
    "marketCap": 679381,
    "totalShares": 2563
  },
  {
    "name": "Assurant",
    "symbol": "AIZ",
    "description": "Constituyente del S&P 500. Sector: Multi-line Insurance. Precio referencial: US$288.51.",
    "sector": "Multi-line Insurance",
    "marketCap": 142304,
    "totalShares": 493
  },
  {
    "name": "AT&T",
    "symbol": "T",
    "description": "Constituyente del S&P 500. Sector: Integrated Telecommunication Services. Precio referencial: US$25.87.",
    "sector": "Integrated Telecommunication Services",
    "marketCap": 1772712,
    "totalShares": 68524
  },
  {
    "name": "Atmos Energy",
    "symbol": "ATO",
    "description": "Constituyente del S&P 500. Sector: Gas Utilities. Precio referencial: US$169.46.",
    "sector": "Gas Utilities",
    "marketCap": 286368,
    "totalShares": 1690
  },
  {
    "name": "Autodesk",
    "symbol": "ADSK",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$254.77.",
    "sector": "Application Software",
    "marketCap": 537935,
    "totalShares": 2111
  },
  {
    "name": "Automatic Data Processing",
    "symbol": "ADP",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services. Precio referencial: US$281.39.",
    "sector": "Human Resource & Employment Services",
    "marketCap": 1117858,
    "totalShares": 3973
  },
  {
    "name": "AutoZone",
    "symbol": "AZO",
    "description": "Constituyente del S&P 500. Sector: Automotive Retail. Precio referencial: US$281.00.",
    "sector": "Automotive Retail",
    "marketCap": 4265861,
    "totalShares": 15181
  },
  {
    "name": "AvalonBay Communities",
    "symbol": "AVB",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$184.06.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 262834,
    "totalShares": 1428
  },
  {
    "name": "Avery Dennison",
    "symbol": "AVY",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$182.33.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 138185,
    "totalShares": 758
  },
  {
    "name": "Axon Enterprise",
    "symbol": "AXON",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$607.48.",
    "sector": "Aerospace & Defense",
    "marketCap": 493501,
    "totalShares": 812
  },
  {
    "name": "Baker Hughes",
    "symbol": "BKR",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Equipment & Services. Precio referencial: US$62.00.",
    "sector": "Oil & Gas Equipment & Services",
    "marketCap": 615458,
    "totalShares": 9927
  },
  {
    "name": "Ball Corporation",
    "symbol": "BALL",
    "description": "Constituyente del S&P 500. Sector: Metal, Glass & Plastic Containers. Precio referencial: US$64.05.",
    "sector": "Metal, Glass & Plastic Containers",
    "marketCap": 169543,
    "totalShares": 2647
  },
  {
    "name": "Bank of America",
    "symbol": "BAC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$62.23.",
    "sector": "Diversified Banks",
    "marketCap": 4351587,
    "totalShares": 69927
  },
  {
    "name": "Baxter International",
    "symbol": "BAX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$26.50.",
    "sector": "Health Care Equipment",
    "marketCap": 137004,
    "totalShares": 5170
  },
  {
    "name": "Becton Dickinson",
    "symbol": "BDX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$190.21.",
    "sector": "Health Care Equipment",
    "marketCap": 518107,
    "totalShares": 2724
  },
  {
    "name": "Berkshire Hathaway",
    "symbol": "BRK.B",
    "description": "Constituyente del S&P 500. Sector: Multi-Sector Holdings. Precio referencial: US$355.00.",
    "sector": "Multi-Sector Holdings",
    "marketCap": 5735025,
    "totalShares": 16155
  },
  {
    "name": "Best Buy",
    "symbol": "BBY",
    "description": "Constituyente del S&P 500. Sector: Computer & Electronics Retail. Precio referencial: US$338.00.",
    "sector": "Computer & Electronics Retail",
    "marketCap": 5454644,
    "totalShares": 16138
  },
  {
    "name": "Bio-Techne",
    "symbol": "TECH",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$72.38.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 113505,
    "totalShares": 1568
  },
  {
    "name": "Biogen",
    "symbol": "BIIB",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$221.07.",
    "sector": "Biotechnology",
    "marketCap": 326640,
    "totalShares": 1478
  },
  {
    "name": "BlackRock",
    "symbol": "BLK",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$1173.21.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 1906187,
    "totalShares": 1625
  },
  {
    "name": "Blackstone Inc.",
    "symbol": "BX",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$143.20.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 1711666,
    "totalShares": 11953
  },
  {
    "name": "BNY Mellon",
    "symbol": "BK",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$293.00.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 4847099,
    "totalShares": 16543
  },
  {
    "name": "Boeing",
    "symbol": "BA",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$212.09.",
    "sector": "Aerospace & Defense",
    "marketCap": 1676296,
    "totalShares": 7904
  },
  {
    "name": "Booking Holdings",
    "symbol": "BKNG",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$208.89.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 1569559,
    "totalShares": 7514
  },
  {
    "name": "BorgWarner",
    "symbol": "BWA",
    "description": "Constituyente del S&P 500. Sector: Automotive Parts & Equipment. Precio referencial: US$64.69.",
    "sector": "Automotive Parts & Equipment",
    "marketCap": 131752,
    "totalShares": 2037
  },
  {
    "name": "Boston Scientific",
    "symbol": "BSX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$48.17.",
    "sector": "Health Care Equipment",
    "marketCap": 698094,
    "totalShares": 14492
  },
  {
    "name": "Bristol Myers Squibb",
    "symbol": "BMY",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$67.57.",
    "sector": "Pharmaceuticals",
    "marketCap": 1380262,
    "totalShares": 20427
  },
  {
    "name": "Broadcom",
    "symbol": "AVGO",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$355.59.",
    "sector": "Semiconductors",
    "marketCap": 16917480,
    "totalShares": 47576
  },
  {
    "name": "Broadridge Financial Solutions",
    "symbol": "BR",
    "description": "Constituyente del S&P 500. Sector: Data Processing & Outsourced Services. Precio referencial: US$181.60.",
    "sector": "Data Processing & Outsourced Services",
    "marketCap": 207064,
    "totalShares": 1140
  },
  {
    "name": "Brown & Brown",
    "symbol": "BRO",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$72.78.",
    "sector": "Insurance Brokers",
    "marketCap": 243529,
    "totalShares": 3346
  },
  {
    "name": "Brown-Forman",
    "symbol": "BF.B",
    "description": "Constituyente del S&P 500. Sector: Distillers & Vintners. Precio referencial: US$373.00.",
    "sector": "Distillers & Vintners",
    "marketCap": 6536079,
    "totalShares": 17523
  },
  {
    "name": "Builders FirstSource",
    "symbol": "BLDR",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$68.67.",
    "sector": "Building Products",
    "marketCap": 100000,
    "totalShares": 1456
  },
  {
    "name": "Bunge Global",
    "symbol": "BG",
    "description": "Constituyente del S&P 500. Sector: Agricultural Products & Services. Precio referencial: US$113.25.",
    "sector": "Agricultural Products & Services",
    "marketCap": 217575,
    "totalShares": 1921
  },
  {
    "name": "BXP, Inc.",
    "symbol": "BXP",
    "description": "Constituyente del S&P 500. Sector: Office REITs. Precio referencial: US$70.30.",
    "sector": "Office REITs",
    "marketCap": 127157,
    "totalShares": 1809
  },
  {
    "name": "C.H. Robinson",
    "symbol": "CHRW",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics. Precio referencial: US$151.73.",
    "sector": "Air Freight & Logistics",
    "marketCap": 177298,
    "totalShares": 1169
  },
  {
    "name": "Cadence Design Systems",
    "symbol": "CDNS",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$334.68.",
    "sector": "Application Software",
    "marketCap": 921685,
    "totalShares": 2754
  },
  {
    "name": "Caesars Entertainment",
    "symbol": "CZR",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming. Precio referencial: US$29.66.",
    "sector": "Casinos & Gaming",
    "marketCap": 100000,
    "totalShares": 3372
  },
  {
    "name": "Camden Property Trust",
    "symbol": "CPT",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$107.61.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 124540,
    "totalShares": 1157
  },
  {
    "name": "Campbell Soup Company",
    "symbol": "CPB",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$214.00.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 3908496,
    "totalShares": 18264
  },
  {
    "name": "Capital One",
    "symbol": "COF",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance. Precio referencial: US$217.21.",
    "sector": "Consumer Finance",
    "marketCap": 1332551,
    "totalShares": 6135
  },
  {
    "name": "Cardinal Health",
    "symbol": "CAH",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors. Precio referencial: US$238.40.",
    "sector": "Health Care Distributors",
    "marketCap": 554461,
    "totalShares": 2326
  },
  {
    "name": "CarMax",
    "symbol": "KMX",
    "description": "Constituyente del S&P 500. Sector: Automotive Retail. Precio referencial: US$82.00.",
    "sector": "Automotive Retail",
    "marketCap": 1523724,
    "totalShares": 18582
  },
  {
    "name": "Carnival",
    "symbol": "CCL",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$25.59.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 350493,
    "totalShares": 13696
  },
  {
    "name": "Carrier Global",
    "symbol": "CARR",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$58.74.",
    "sector": "Building Products",
    "marketCap": 484209,
    "totalShares": 8243
  },
  {
    "name": "Catalent",
    "symbol": "CTLT",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$444.00.",
    "sector": "Pharmaceuticals",
    "marketCap": 8411136,
    "totalShares": 18944
  },
  {
    "name": "Caterpillar Inc.",
    "symbol": "CAT",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment. Precio referencial: US$821.93.",
    "sector": "Construction Machinery & Heavy Transportation Equipment",
    "marketCap": 3778206,
    "totalShares": 4597
  },
  {
    "name": "Cboe Global Markets",
    "symbol": "CBOE",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$312.19.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 326023,
    "totalShares": 1044
  },
  {
    "name": "CBRE Group",
    "symbol": "CBRE",
    "description": "Constituyente del S&P 500. Sector: Real Estate Services. Precio referencial: US$150.36.",
    "sector": "Real Estate Services",
    "marketCap": 435405,
    "totalShares": 2896
  },
  {
    "name": "CDW",
    "symbol": "CDW",
    "description": "Constituyente del S&P 500. Sector: Technology Distributors. Precio referencial: US$141.46.",
    "sector": "Technology Distributors",
    "marketCap": 176850,
    "totalShares": 1250
  },
  {
    "name": "Celanese",
    "symbol": "CE",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$44.70.",
    "sector": "Specialty Chemicals",
    "marketCap": 100000,
    "totalShares": 2237
  },
  {
    "name": "Cencora",
    "symbol": "COR",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors. Precio referencial: US$327.79.",
    "sector": "Health Care Distributors",
    "marketCap": 625512,
    "totalShares": 1908
  },
  {
    "name": "Centene Corporation",
    "symbol": "CNC",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$65.47.",
    "sector": "Managed Health Care",
    "marketCap": 323419,
    "totalShares": 4940
  },
  {
    "name": "CenterPoint Energy",
    "symbol": "CNP",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$39.59.",
    "sector": "Multi-Utilities",
    "marketCap": 260787,
    "totalShares": 6587
  },
  {
    "name": "CF Industries",
    "symbol": "CF",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals. Precio referencial: US$125.70.",
    "sector": "Fertilizers & Agricultural Chemicals",
    "marketCap": 190232,
    "totalShares": 1513
  },
  {
    "name": "Charles River Laboratories",
    "symbol": "CRL",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$295.10.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 142143,
    "totalShares": 482
  },
  {
    "name": "Charles Schwab Corporation",
    "symbol": "SCHW",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage. Precio referencial: US$109.39.",
    "sector": "Investment Banking & Brokerage",
    "marketCap": 1891720,
    "totalShares": 17293
  },
  {
    "name": "Charter Communications",
    "symbol": "CHTR",
    "description": "Constituyente del S&P 500. Sector: Cable & Satellite. Precio referencial: US$153.89.",
    "sector": "Cable & Satellite",
    "marketCap": 207409,
    "totalShares": 1348
  },
  {
    "name": "Chevron Corporation",
    "symbol": "CVX",
    "description": "Constituyente del S&P 500. Sector: Integrated Oil & Gas. Precio referencial: US$200.21.",
    "sector": "Integrated Oil & Gas",
    "marketCap": 3927326,
    "totalShares": 19616
  },
  {
    "name": "Chipotle Mexican Grill",
    "symbol": "CMG",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$37.34.",
    "sector": "Restaurants",
    "marketCap": 472507,
    "totalShares": 12654
  },
  {
    "name": "Chubb Limited",
    "symbol": "CB",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$343.77.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 1326264,
    "totalShares": 3858
  },
  {
    "name": "Church & Dwight",
    "symbol": "CHD",
    "description": "Constituyente del S&P 500. Sector: Household Products. Precio referencial: US$102.86.",
    "sector": "Household Products",
    "marketCap": 243988,
    "totalShares": 2372
  },
  {
    "name": "Cigna",
    "symbol": "CI",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$280.87.",
    "sector": "Health Care Services",
    "marketCap": 742172,
    "totalShares": 2642
  },
  {
    "name": "Cincinnati Financial",
    "symbol": "CINF",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$172.38.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 264565,
    "totalShares": 1535
  },
  {
    "name": "Cintas",
    "symbol": "CTAS",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services. Precio referencial: US$205.78.",
    "sector": "Diversified Support Services",
    "marketCap": 823469,
    "totalShares": 4002
  },
  {
    "name": "Cisco",
    "symbol": "CSCO",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment. Precio referencial: US$112.36.",
    "sector": "Communications Equipment",
    "marketCap": 4428596,
    "totalShares": 39414
  },
  {
    "name": "Citigroup",
    "symbol": "C",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$133.56.",
    "sector": "Diversified Banks",
    "marketCap": 2240385,
    "totalShares": 16774
  },
  {
    "name": "Citizens Financial Group",
    "symbol": "CFG",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$70.49.",
    "sector": "Regional Banks",
    "marketCap": 296888,
    "totalShares": 4212
  },
  {
    "name": "Clorox",
    "symbol": "CLX",
    "description": "Constituyente del S&P 500. Sector: Household Products. Precio referencial: US$104.23.",
    "sector": "Household Products",
    "marketCap": 126046,
    "totalShares": 1209
  },
  {
    "name": "CME Group",
    "symbol": "CME",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$280.98.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 1010346,
    "totalShares": 3596
  },
  {
    "name": "CMS Energy",
    "symbol": "CMS",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$69.23.",
    "sector": "Multi-Utilities",
    "marketCap": 217089,
    "totalShares": 3136
  },
  {
    "name": "Coca-Cola Company (The)",
    "symbol": "KO",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages. Precio referencial: US$90.08.",
    "sector": "Soft Drinks & Non-alcoholic Beverages",
    "marketCap": 3875736,
    "totalShares": 43025
  },
  {
    "name": "Cognizant",
    "symbol": "CTSH",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$62.09.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 279681,
    "totalShares": 4504
  },
  {
    "name": "Colgate-Palmolive",
    "symbol": "CL",
    "description": "Constituyente del S&P 500. Sector: Household Products. Precio referencial: US$92.06.",
    "sector": "Household Products",
    "marketCap": 733877,
    "totalShares": 7972
  },
  {
    "name": "Comcast",
    "symbol": "CMCSA",
    "description": "Constituyente del S&P 500. Sector: Cable & Satellite. Precio referencial: US$27.20.",
    "sector": "Cable & Satellite",
    "marketCap": 965229,
    "totalShares": 35486
  },
  {
    "name": "Conagra Brands",
    "symbol": "CAG",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$16.19.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 100000,
    "totalShares": 6177
  },
  {
    "name": "ConocoPhillips",
    "symbol": "COP",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$130.61.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 1569067,
    "totalShares": 12013
  },
  {
    "name": "Consolidated Edison",
    "symbol": "ED",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$108.05.",
    "sector": "Multi-Utilities",
    "marketCap": 399600,
    "totalShares": 3698
  },
  {
    "name": "Constellation Brands",
    "symbol": "STZ",
    "description": "Constituyente del S&P 500. Sector: Distillers & Vintners. Precio referencial: US$134.45.",
    "sector": "Distillers & Vintners",
    "marketCap": 229646,
    "totalShares": 1708
  },
  {
    "name": "Constellation Energy",
    "symbol": "CEG",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$279.52.",
    "sector": "Electric Utilities",
    "marketCap": 990360,
    "totalShares": 3543
  },
  {
    "name": "Cooper Companies (The)",
    "symbol": "COO",
    "description": "Constituyente del S&P 500. Sector: Health Care Supplies. Precio referencial: US$153.00.",
    "sector": "Health Care Supplies",
    "marketCap": 3404709,
    "totalShares": 22253
  },
  {
    "name": "Copart",
    "symbol": "CPRT",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services. Precio referencial: US$32.67.",
    "sector": "Diversified Support Services",
    "marketCap": 302463,
    "totalShares": 9258
  },
  {
    "name": "Corning Inc.",
    "symbol": "GLW",
    "description": "Constituyente del S&P 500. Sector: Electronic Components. Precio referencial: US$152.78.",
    "sector": "Electronic Components",
    "marketCap": 1316029,
    "totalShares": 8614
  },
  {
    "name": "Corpay",
    "symbol": "CPAY",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$406.93.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 267189,
    "totalShares": 657
  },
  {
    "name": "Corteva",
    "symbol": "CTVA",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals. Precio referencial: US$82.88.",
    "sector": "Fertilizers & Agricultural Chemicals",
    "marketCap": 552972,
    "totalShares": 6672
  },
  {
    "name": "CoStar Group",
    "symbol": "CSGP",
    "description": "Constituyente del S&P 500. Sector: Real Estate Services. Precio referencial: US$32.14.",
    "sector": "Real Estate Services",
    "marketCap": 130231,
    "totalShares": 4052
  },
  {
    "name": "Costco",
    "symbol": "COST",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail. Precio referencial: US$956.12.",
    "sector": "Consumer Staples Merchandise Retail",
    "marketCap": 4240190,
    "totalShares": 4435
  },
  {
    "name": "Coterra",
    "symbol": "CTRA",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$455.00.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 10467275,
    "totalShares": 23005
  },
  {
    "name": "CrowdStrike",
    "symbol": "CRWD",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$189.18.",
    "sector": "Systems Software",
    "marketCap": 1926343,
    "totalShares": 10183
  },
  {
    "name": "Crown Castle",
    "symbol": "CCI",
    "description": "Constituyente del S&P 500. Sector: Telecom Tower REITs. Precio referencial: US$75.54.",
    "sector": "Telecom Tower REITs",
    "marketCap": 330110,
    "totalShares": 4370
  },
  {
    "name": "CSX Corporation",
    "symbol": "CSX",
    "description": "Constituyente del S&P 500. Sector: Rail Transportation. Precio referencial: US$51.76.",
    "sector": "Rail Transportation",
    "marketCap": 958841,
    "totalShares": 18525
  },
  {
    "name": "Cummins",
    "symbol": "CMI",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment. Precio referencial: US$578.14.",
    "sector": "Construction Machinery & Heavy Transportation Equipment",
    "marketCap": 795893,
    "totalShares": 1377
  },
  {
    "name": "CVS Health",
    "symbol": "CVS",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$94.32.",
    "sector": "Health Care Services",
    "marketCap": 1206325,
    "totalShares": 12790
  },
  {
    "name": "D. R. Horton",
    "symbol": "DHI",
    "description": "Constituyente del S&P 500. Sector: Homebuilding. Precio referencial: US$149.25.",
    "sector": "Homebuilding",
    "marketCap": 417454,
    "totalShares": 2797
  },
  {
    "name": "Danaher Corporation",
    "symbol": "DHR",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$215.36.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 1513951,
    "totalShares": 7030
  },
  {
    "name": "Darden Restaurants",
    "symbol": "DRI",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$218.81.",
    "sector": "Restaurants",
    "marketCap": 248441,
    "totalShares": 1135
  },
  {
    "name": "DaVita",
    "symbol": "DVA",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$180.05.",
    "sector": "Health Care Services",
    "marketCap": 114872,
    "totalShares": 638
  },
  {
    "name": "Dayforce",
    "symbol": "DAY",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services. Precio referencial: US$449.00.",
    "sector": "Human Resource & Employment Services",
    "marketCap": 10730651,
    "totalShares": 23899
  },
  {
    "name": "Deckers Brands",
    "symbol": "DECK",
    "description": "Constituyente del S&P 500. Sector: Footwear. Precio referencial: US$89.47.",
    "sector": "Footwear",
    "marketCap": 121842,
    "totalShares": 1362
  },
  {
    "name": "Deere & Company",
    "symbol": "DE",
    "description": "Constituyente del S&P 500. Sector: Agricultural & Farm Machinery. Precio referencial: US$634.54.",
    "sector": "Agricultural & Farm Machinery",
    "marketCap": 1712861,
    "totalShares": 2699
  },
  {
    "name": "Dell Technologies",
    "symbol": "DELL",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$463.82.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 2996938,
    "totalShares": 6461
  },
  {
    "name": "Delta Air Lines",
    "symbol": "DAL",
    "description": "Constituyente del S&P 500. Sector: Passenger Airlines. Precio referencial: US$374.00.",
    "sector": "Passenger Airlines",
    "marketCap": 9078476,
    "totalShares": 24274
  },
  {
    "name": "Devon Energy",
    "symbol": "DVN",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$46.83.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 515130,
    "totalShares": 11000
  },
  {
    "name": "Dexcom",
    "symbol": "DXCM",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$88.96.",
    "sector": "Health Care Equipment",
    "marketCap": 335700,
    "totalShares": 3774
  },
  {
    "name": "Diamondback Energy",
    "symbol": "FANG",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$199.84.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 559592,
    "totalShares": 2800
  },
  {
    "name": "Digital Realty",
    "symbol": "DLR",
    "description": "Constituyente del S&P 500. Sector: Data Center REITs. Precio referencial: US$193.43.",
    "sector": "Data Center REITs",
    "marketCap": 730515,
    "totalShares": 3777
  },
  {
    "name": "Discover Financial",
    "symbol": "DFS",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance. Precio referencial: US$421.00.",
    "sector": "Consumer Finance",
    "marketCap": 10428591,
    "totalShares": 24771
  },
  {
    "name": "Dollar General",
    "symbol": "DG",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail. Precio referencial: US$122.78.",
    "sector": "Consumer Staples Merchandise Retail",
    "marketCap": 270836,
    "totalShares": 2206
  },
  {
    "name": "Dollar Tree",
    "symbol": "DLTR",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail. Precio referencial: US$132.18.",
    "sector": "Consumer Staples Merchandise Retail",
    "marketCap": 254016,
    "totalShares": 1922
  },
  {
    "name": "Dominion Energy",
    "symbol": "D",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$66.91.",
    "sector": "Multi-Utilities",
    "marketCap": 588491,
    "totalShares": 8795
  },
  {
    "name": "Domino's",
    "symbol": "DPZ",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$344.56.",
    "sector": "Restaurants",
    "marketCap": 113986,
    "totalShares": 331
  },
  {
    "name": "Dover Corporation",
    "symbol": "DOV",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$204.66.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 275637,
    "totalShares": 1347
  },
  {
    "name": "Dow Inc.",
    "symbol": "DOW",
    "description": "Constituyente del S&P 500. Sector: Commodity Chemicals. Precio referencial: US$30.33.",
    "sector": "Commodity Chemicals",
    "marketCap": 219086,
    "totalShares": 7223
  },
  {
    "name": "DTE Energy",
    "symbol": "DTE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$137.71.",
    "sector": "Multi-Utilities",
    "marketCap": 286558,
    "totalShares": 2081
  },
  {
    "name": "Duke Energy",
    "symbol": "DUK",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$121.89.",
    "sector": "Electric Utilities",
    "marketCap": 950379,
    "totalShares": 7797
  },
  {
    "name": "DuPont",
    "symbol": "DD",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$137.98.",
    "sector": "Specialty Chemicals",
    "marketCap": 186332,
    "totalShares": 1350
  },
  {
    "name": "Eastman Chemical Company",
    "symbol": "EMN",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$72.93.",
    "sector": "Specialty Chemicals",
    "marketCap": 100000,
    "totalShares": 1371
  },
  {
    "name": "Eaton Corporation",
    "symbol": "ETN",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$419.44.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 1629105,
    "totalShares": 3884
  },
  {
    "name": "eBay",
    "symbol": "EBAY",
    "description": "Constituyente del S&P 500. Sector: Broadline Retail. Precio referencial: US$104.20.",
    "sector": "Broadline Retail",
    "marketCap": 463690,
    "totalShares": 4450
  },
  {
    "name": "Ecolab",
    "symbol": "ECL",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$290.60.",
    "sector": "Specialty Chemicals",
    "marketCap": 814635,
    "totalShares": 2803
  },
  {
    "name": "Edison International",
    "symbol": "EIX",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$74.51.",
    "sector": "Electric Utilities",
    "marketCap": 286725,
    "totalShares": 3848
  },
  {
    "name": "Edwards Lifesciences",
    "symbol": "EW",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$90.78.",
    "sector": "Health Care Equipment",
    "marketCap": 523256,
    "totalShares": 5764
  },
  {
    "name": "Electronic Arts",
    "symbol": "EA",
    "description": "Constituyente del S&P 500. Sector: Interactive Home Entertainment. Precio referencial: US$209.70.",
    "sector": "Interactive Home Entertainment",
    "marketCap": 529256,
    "totalShares": 2524
  },
  {
    "name": "Elevance Health",
    "symbol": "ELV",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$402.54.",
    "sector": "Managed Health Care",
    "marketCap": 872986,
    "totalShares": 2169
  },
  {
    "name": "Emerson Electric",
    "symbol": "EMR",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$158.29.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 882942,
    "totalShares": 5578
  },
  {
    "name": "Enphase Energy",
    "symbol": "ENPH",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$38.41.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 100000,
    "totalShares": 2603
  },
  {
    "name": "Entergy",
    "symbol": "ETR",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$107.23.",
    "sector": "Electric Utilities",
    "marketCap": 500369,
    "totalShares": 4666
  },
  {
    "name": "EOG Resources",
    "symbol": "EOG",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$144.84.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 759728,
    "totalShares": 5245
  },
  {
    "name": "EPAM Systems",
    "symbol": "EPAM",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$109.36.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 100000,
    "totalShares": 914
  },
  {
    "name": "EQT Corporation",
    "symbol": "EQT",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$54.79.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 342720,
    "totalShares": 6255
  },
  {
    "name": "Equifax",
    "symbol": "EFX",
    "description": "Constituyente del S&P 500. Sector: Research & Consulting Services. Precio referencial: US$190.56.",
    "sector": "Research & Consulting Services",
    "marketCap": 223879,
    "totalShares": 1175
  },
  {
    "name": "Equinix",
    "symbol": "EQIX",
    "description": "Constituyente del S&P 500. Sector: Data Center REITs. Precio referencial: US$1079.61.",
    "sector": "Data Center REITs",
    "marketCap": 1065269,
    "totalShares": 987
  },
  {
    "name": "Equity Residential",
    "symbol": "EQR",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$63.66.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 246115,
    "totalShares": 3866
  },
  {
    "name": "Erie Indemnity",
    "symbol": "ERIE",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$257.27.",
    "sector": "Insurance Brokers",
    "marketCap": 134526,
    "totalShares": 523
  },
  {
    "name": "Essex Property Trust",
    "symbol": "ESS",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$288.17.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 198644,
    "totalShares": 689
  },
  {
    "name": "Estee Lauder Companies (The)",
    "symbol": "EL",
    "description": "Constituyente del S&P 500. Sector: Personal Care Products. Precio referencial: US$105.06.",
    "sector": "Personal Care Products",
    "marketCap": 380106,
    "totalShares": 3618
  },
  {
    "name": "Everest Group",
    "symbol": "EG",
    "description": "Constituyente del S&P 500. Sector: Reinsurance. Precio referencial: US$379.78.",
    "sector": "Reinsurance",
    "marketCap": 145618,
    "totalShares": 383
  },
  {
    "name": "Evergy",
    "symbol": "EVRG",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$82.23.",
    "sector": "Electric Utilities",
    "marketCap": 189595,
    "totalShares": 2306
  },
  {
    "name": "Eversource Energy",
    "symbol": "ES",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$71.67.",
    "sector": "Electric Utilities",
    "marketCap": 269963,
    "totalShares": 3767
  },
  {
    "name": "Exelon",
    "symbol": "EXC",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$44.44.",
    "sector": "Electric Utilities",
    "marketCap": 457845,
    "totalShares": 10303
  },
  {
    "name": "Expedia Group",
    "symbol": "EXPE",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$333.44.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 400202,
    "totalShares": 1200
  },
  {
    "name": "Expeditors International",
    "symbol": "EXPD",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics. Precio referencial: US$190.18.",
    "sector": "Air Freight & Logistics",
    "marketCap": 247216,
    "totalShares": 1300
  },
  {
    "name": "Extra Space Storage",
    "symbol": "EXR",
    "description": "Constituyente del S&P 500. Sector: Self-Storage REITs. Precio referencial: US$144.09.",
    "sector": "Self-Storage REITs",
    "marketCap": 318010,
    "totalShares": 2207
  },
  {
    "name": "ExxonMobil",
    "symbol": "XOM",
    "description": "Constituyente del S&P 500. Sector: Integrated Oil & Gas. Precio referencial: US$158.19.",
    "sector": "Integrated Oil & Gas",
    "marketCap": 6504633,
    "totalShares": 41119
  },
  {
    "name": "F5, Inc.",
    "symbol": "FFIV",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment. Precio referencial: US$399.59.",
    "sector": "Communications Equipment",
    "marketCap": 226277,
    "totalShares": 566
  },
  {
    "name": "FactSet",
    "symbol": "FDS",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$295.45.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 105078,
    "totalShares": 356
  },
  {
    "name": "Fair Isaac",
    "symbol": "FICO",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$1133.70.",
    "sector": "Application Software",
    "marketCap": 244852,
    "totalShares": 216
  },
  {
    "name": "Fastenal",
    "symbol": "FAST",
    "description": "Constituyente del S&P 500. Sector: Trading Companies & Distributors. Precio referencial: US$51.15.",
    "sector": "Trading Companies & Distributors",
    "marketCap": 586945,
    "totalShares": 11475
  },
  {
    "name": "Federal Realty Investment Trust",
    "symbol": "FRT",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$117.58.",
    "sector": "Retail REITs",
    "marketCap": 102786,
    "totalShares": 874
  },
  {
    "name": "FedEx",
    "symbol": "FDX",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics. Precio referencial: US$335.99.",
    "sector": "Air Freight & Logistics",
    "marketCap": 795189,
    "totalShares": 2367
  },
  {
    "name": "Fidelity National Information Services",
    "symbol": "FIS",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$40.64.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 209583,
    "totalShares": 5157
  },
  {
    "name": "Fifth Third Bancorp",
    "symbol": "FITB",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$55.10.",
    "sector": "Regional Banks",
    "marketCap": 499698,
    "totalShares": 9069
  },
  {
    "name": "First Solar",
    "symbol": "FSLR",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$205.93.",
    "sector": "Semiconductors",
    "marketCap": 221313,
    "totalShares": 1075
  },
  {
    "name": "FirstEnergy",
    "symbol": "FE",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$46.73.",
    "sector": "Electric Utilities",
    "marketCap": 270398,
    "totalShares": 5786
  },
  {
    "name": "Fiserv",
    "symbol": "FI",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$499.00.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 14645151,
    "totalShares": 29349
  },
  {
    "name": "FMC Corporation",
    "symbol": "FMC",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals. Precio referencial: US$11.08.",
    "sector": "Fertilizers & Agricultural Chemicals",
    "marketCap": 100000,
    "totalShares": 9025
  },
  {
    "name": "Ford Motor Company",
    "symbol": "F",
    "description": "Constituyente del S&P 500. Sector: Automobile Manufacturers. Precio referencial: US$13.90.",
    "sector": "Automobile Manufacturers",
    "marketCap": 554276,
    "totalShares": 39876
  },
  {
    "name": "Fortinet",
    "symbol": "FTNT",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$157.54.",
    "sector": "Systems Software",
    "marketCap": 1155892,
    "totalShares": 7337
  },
  {
    "name": "Fortive",
    "symbol": "FTV",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$60.25.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 181965,
    "totalShares": 3020
  },
  {
    "name": "Fox Corporation (Class A)",
    "symbol": "FOXA",
    "description": "Constituyente del S&P 500. Sector: Broadcasting. Precio referencial: US$69.60.",
    "sector": "Broadcasting",
    "marketCap": 292624,
    "totalShares": 4204
  },
  {
    "name": "Fox Corporation (Class B)",
    "symbol": "FOX",
    "description": "Constituyente del S&P 500. Sector: Broadcasting. Precio referencial: US$62.23.",
    "sector": "Broadcasting",
    "marketCap": 261638,
    "totalShares": 4204
  },
  {
    "name": "Franklin Resources",
    "symbol": "BEN",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$35.01.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 177878,
    "totalShares": 5081
  },
  {
    "name": "Freeport-McMoRan",
    "symbol": "FCX",
    "description": "Constituyente del S&P 500. Sector: Copper. Precio referencial: US$79.00.",
    "sector": "Copper",
    "marketCap": 1134454,
    "totalShares": 14360
  },
  {
    "name": "Garmin",
    "symbol": "GRMN",
    "description": "Constituyente del S&P 500. Sector: Consumer Electronics. Precio referencial: US$289.02.",
    "sector": "Consumer Electronics",
    "marketCap": 557382,
    "totalShares": 1929
  },
  {
    "name": "Gartner",
    "symbol": "IT",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$192.96.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 121852,
    "totalShares": 631
  },
  {
    "name": "GE Aerospace",
    "symbol": "GE",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$354.39.",
    "sector": "Aerospace & Defense",
    "marketCap": 3677018,
    "totalShares": 10376
  },
  {
    "name": "GE HealthCare",
    "symbol": "GEHC",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$73.31.",
    "sector": "Health Care Equipment",
    "marketCap": 331131,
    "totalShares": 4517
  },
  {
    "name": "GE Vernova",
    "symbol": "GEV",
    "description": "Constituyente del S&P 500. Sector: Heavy Electrical Equipment. Precio referencial: US$953.09.",
    "sector": "Heavy Electrical Equipment",
    "marketCap": 2538399,
    "totalShares": 2663
  },
  {
    "name": "Gen Digital",
    "symbol": "GEN",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$29.64.",
    "sector": "Systems Software",
    "marketCap": 177421,
    "totalShares": 5986
  },
  {
    "name": "Generac",
    "symbol": "GNRC",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$206.62.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 121919,
    "totalShares": 590
  },
  {
    "name": "General Dynamics",
    "symbol": "GD",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$382.02.",
    "sector": "Aerospace & Defense",
    "marketCap": 1033583,
    "totalShares": 2706
  },
  {
    "name": "General Mills",
    "symbol": "GIS",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$40.08.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 214279,
    "totalShares": 5346
  },
  {
    "name": "General Motors",
    "symbol": "GM",
    "description": "Constituyente del S&P 500. Sector: Automobile Manufacturers. Precio referencial: US$86.33.",
    "sector": "Automobile Manufacturers",
    "marketCap": 780813,
    "totalShares": 9045
  },
  {
    "name": "Genuine Parts Company",
    "symbol": "GPC",
    "description": "Constituyente del S&P 500. Sector: Distributors. Precio referencial: US$139.49.",
    "sector": "Distributors",
    "marketCap": 192301,
    "totalShares": 1379
  },
  {
    "name": "Gilead Sciences",
    "symbol": "GILD",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$148.09.",
    "sector": "Biotechnology",
    "marketCap": 1836250,
    "totalShares": 12400
  },
  {
    "name": "Global Payments",
    "symbol": "GPN",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$92.96.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 245989,
    "totalShares": 2646
  },
  {
    "name": "Globe Life",
    "symbol": "GL",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$175.55.",
    "sector": "Life & Health Insurance",
    "marketCap": 134909,
    "totalShares": 768
  },
  {
    "name": "GoDaddy",
    "symbol": "GDDY",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure. Precio referencial: US$95.54.",
    "sector": "Internet Services & Infrastructure",
    "marketCap": 120999,
    "totalShares": 1266
  },
  {
    "name": "Goldman Sachs",
    "symbol": "GS",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage. Precio referencial: US$1040.46.",
    "sector": "Investment Banking & Brokerage",
    "marketCap": 3029522,
    "totalShares": 2912
  },
  {
    "name": "Halliburton",
    "symbol": "HAL",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Equipment & Services. Precio referencial: US$34.44.",
    "sector": "Oil & Gas Equipment & Services",
    "marketCap": 286930,
    "totalShares": 8331
  },
  {
    "name": "Hartford (The)",
    "symbol": "HIG",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$139.86.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 378842,
    "totalShares": 2709
  },
  {
    "name": "Hasbro",
    "symbol": "HAS",
    "description": "Constituyente del S&P 500. Sector: Leisure Products. Precio referencial: US$96.29.",
    "sector": "Leisure Products",
    "marketCap": 135812,
    "totalShares": 1410
  },
  {
    "name": "HCA Healthcare",
    "symbol": "HCA",
    "description": "Constituyente del S&P 500. Sector: Health Care Facilities. Precio referencial: US$427.16.",
    "sector": "Health Care Facilities",
    "marketCap": 924808,
    "totalShares": 2165
  },
  {
    "name": "Healthpeak Properties",
    "symbol": "DOC",
    "description": "Constituyente del S&P 500. Sector: Health Care REITs. Precio referencial: US$21.58.",
    "sector": "Health Care REITs",
    "marketCap": 152991,
    "totalShares": 7089
  },
  {
    "name": "Henry Schein",
    "symbol": "HSIC",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors. Precio referencial: US$90.38.",
    "sector": "Health Care Distributors",
    "marketCap": 100725,
    "totalShares": 1114
  },
  {
    "name": "Hershey Company (The)",
    "symbol": "HSY",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$185.35.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 372416,
    "totalShares": 2009
  },
  {
    "name": "Hess Corporation",
    "symbol": "HES",
    "description": "Constituyente del S&P 500. Sector: Integrated Oil & Gas. Precio referencial: US$84.00.",
    "sector": "Integrated Oil & Gas",
    "marketCap": 2732856,
    "totalShares": 32534
  },
  {
    "name": "Hewlett Packard Enterprise",
    "symbol": "HPE",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$55.23.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 731358,
    "totalShares": 13242
  },
  {
    "name": "Hilton Worldwide",
    "symbol": "HLT",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$332.56.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 748476,
    "totalShares": 2251
  },
  {
    "name": "Hologic",
    "symbol": "HOLX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$466.00.",
    "sector": "Health Care Equipment",
    "marketCap": 15338856,
    "totalShares": 32916
  },
  {
    "name": "Home Depot (The)",
    "symbol": "HD",
    "description": "Constituyente del S&P 500. Sector: Home Improvement Retail. Precio referencial: US$334.85.",
    "sector": "Home Improvement Retail",
    "marketCap": 3340764,
    "totalShares": 9977
  },
  {
    "name": "Honeywell",
    "symbol": "HON",
    "description": "Constituyente del S&P 500. Sector: Industrial Conglomerates. Precio referencial: US$220.67.",
    "sector": "Industrial Conglomerates",
    "marketCap": 699392,
    "totalShares": 3169
  },
  {
    "name": "Hormel Foods",
    "symbol": "HRL",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$222.00.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 7353084,
    "totalShares": 33122
  },
  {
    "name": "Host Hotels & Resorts",
    "symbol": "HST",
    "description": "Constituyente del S&P 500. Sector: Hotel & Resort REITs. Precio referencial: US$22.43.",
    "sector": "Hotel & Resort REITs",
    "marketCap": 155827,
    "totalShares": 6947
  },
  {
    "name": "Howmet Aerospace",
    "symbol": "HWM",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$269.34.",
    "sector": "Aerospace & Defense",
    "marketCap": 1074132,
    "totalShares": 3988
  },
  {
    "name": "HP Inc.",
    "symbol": "HPQ",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$66.00.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 2205456,
    "totalShares": 33416
  },
  {
    "name": "Hubbell Incorporated",
    "symbol": "HUBB",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$472.46.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 249613,
    "totalShares": 528
  },
  {
    "name": "Humana",
    "symbol": "HUM",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$391.06.",
    "sector": "Managed Health Care",
    "marketCap": 469586,
    "totalShares": 1201
  },
  {
    "name": "Huntington Bancshares",
    "symbol": "HBAN",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$17.04.",
    "sector": "Regional Banks",
    "marketCap": 344279,
    "totalShares": 20204
  },
  {
    "name": "Huntington Ingalls Industries",
    "symbol": "HII",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$296.40.",
    "sector": "Aerospace & Defense",
    "marketCap": 116795,
    "totalShares": 394
  },
  {
    "name": "IBM",
    "symbol": "IBM",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$229.87.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 2165684,
    "totalShares": 9421
  },
  {
    "name": "IDEX Corporation",
    "symbol": "IEX",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$234.89.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 173161,
    "totalShares": 737
  },
  {
    "name": "Idexx Laboratories",
    "symbol": "IDXX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$553.44.",
    "sector": "Health Care Equipment",
    "marketCap": 436006,
    "totalShares": 788
  },
  {
    "name": "Illinois Tool Works",
    "symbol": "ITW",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$285.51.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 813133,
    "totalShares": 2848
  },
  {
    "name": "Incyte",
    "symbol": "INCY",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$128.12.",
    "sector": "Biotechnology",
    "marketCap": 259696,
    "totalShares": 2027
  },
  {
    "name": "Ingersoll Rand",
    "symbol": "IR",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$79.97.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 310283,
    "totalShares": 3880
  },
  {
    "name": "Insulet Corporation",
    "symbol": "PODD",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$143.38.",
    "sector": "Health Care Equipment",
    "marketCap": 100000,
    "totalShares": 697
  },
  {
    "name": "Intel",
    "symbol": "INTC",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$88.24.",
    "sector": "Semiconductors",
    "marketCap": 4664459,
    "totalShares": 52861
  },
  {
    "name": "Intercontinental Exchange",
    "symbol": "ICE",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$161.92.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 909010,
    "totalShares": 5614
  },
  {
    "name": "International Flavors & Fragrances",
    "symbol": "IFF",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$87.12.",
    "sector": "Specialty Chemicals",
    "marketCap": 222287,
    "totalShares": 2552
  },
  {
    "name": "International Paper",
    "symbol": "IP",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$41.39.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 219189,
    "totalShares": 5296
  },
  {
    "name": "Interpublic Group of Companies (The)",
    "symbol": "IPG",
    "description": "Constituyente del S&P 500. Sector: Advertising. Precio referencial: US$259.00.",
    "sector": "Advertising",
    "marketCap": 9054381,
    "totalShares": 34959
  },
  {
    "name": "Intuit",
    "symbol": "INTU",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$345.88.",
    "sector": "Application Software",
    "marketCap": 946110,
    "totalShares": 2735
  },
  {
    "name": "Intuitive Surgical",
    "symbol": "ISRG",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$370.42.",
    "sector": "Health Care Equipment",
    "marketCap": 1327134,
    "totalShares": 3583
  },
  {
    "name": "Invesco",
    "symbol": "IVZ",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$32.98.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 145607,
    "totalShares": 4415
  },
  {
    "name": "Invitation Homes",
    "symbol": "INVH",
    "description": "Constituyente del S&P 500. Sector: Single-Family Residential REITs. Precio referencial: US$29.89.",
    "sector": "Single-Family Residential REITs",
    "marketCap": 177559,
    "totalShares": 5940
  },
  {
    "name": "IQVIA",
    "symbol": "IQV",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$261.51.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 430445,
    "totalShares": 1646
  },
  {
    "name": "Iron Mountain",
    "symbol": "IRM",
    "description": "Constituyente del S&P 500. Sector: Other Specialized REITs. Precio referencial: US$121.43.",
    "sector": "Other Specialized REITs",
    "marketCap": 361501,
    "totalShares": 2977
  },
  {
    "name": "J.B. Hunt",
    "symbol": "JBHT",
    "description": "Constituyente del S&P 500. Sector: Cargo Ground Transportation. Precio referencial: US$263.64.",
    "sector": "Cargo Ground Transportation",
    "marketCap": 247597,
    "totalShares": 939
  },
  {
    "name": "J.M. Smucker Company (The)",
    "symbol": "SJM",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$130.90.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 139907,
    "totalShares": 1069
  },
  {
    "name": "Jabil",
    "symbol": "JBL",
    "description": "Constituyente del S&P 500. Sector: Electronic Manufacturing Services. Precio referencial: US$310.91.",
    "sector": "Electronic Manufacturing Services",
    "marketCap": 325794,
    "totalShares": 1048
  },
  {
    "name": "Jack Henry & Associates",
    "symbol": "JKHY",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$172.39.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 122484,
    "totalShares": 711
  },
  {
    "name": "Jacobs Solutions",
    "symbol": "J",
    "description": "Constituyente del S&P 500. Sector: Construction & Engineering. Precio referencial: US$151.52.",
    "sector": "Construction & Engineering",
    "marketCap": 177337,
    "totalShares": 1170
  },
  {
    "name": "Johnson & Johnson",
    "symbol": "JNJ",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$270.00.",
    "sector": "Pharmaceuticals",
    "marketCap": 6506726,
    "totalShares": 24099
  },
  {
    "name": "Johnson Controls",
    "symbol": "JCI",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$144.33.",
    "sector": "Building Products",
    "marketCap": 874267,
    "totalShares": 6057
  },
  {
    "name": "JPMorgan Chase",
    "symbol": "JPM",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$356.50.",
    "sector": "Diversified Banks",
    "marketCap": 9476434,
    "totalShares": 26582
  },
  {
    "name": "Juniper Networks",
    "symbol": "JNPR",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment. Precio referencial: US$454.00.",
    "sector": "Communications Equipment",
    "marketCap": 16572816,
    "totalShares": 36504
  },
  {
    "name": "Kellanova",
    "symbol": "K",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$312.00.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 11344944,
    "totalShares": 36362
  },
  {
    "name": "Kenvue",
    "symbol": "KVUE",
    "description": "Constituyente del S&P 500. Sector: Personal Care Products. Precio referencial: US$19.22.",
    "sector": "Personal Care Products",
    "marketCap": 369173,
    "totalShares": 19208
  },
  {
    "name": "Keurig Dr Pepper",
    "symbol": "KDP",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages. Precio referencial: US$32.20.",
    "sector": "Soft Drinks & Non-alcoholic Beverages",
    "marketCap": 438254,
    "totalShares": 13608
  },
  {
    "name": "KeyCorp",
    "symbol": "KEY",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$22.09.",
    "sector": "Regional Banks",
    "marketCap": 235729,
    "totalShares": 10671
  },
  {
    "name": "Keysight Technologies",
    "symbol": "KEYS",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$321.87.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 548145,
    "totalShares": 1703
  },
  {
    "name": "Kimberly-Clark",
    "symbol": "KMB",
    "description": "Constituyente del S&P 500. Sector: Household Products. Precio referencial: US$110.34.",
    "sector": "Household Products",
    "marketCap": 366968,
    "totalShares": 3326
  },
  {
    "name": "Kimco Realty",
    "symbol": "KIM",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$24.03.",
    "sector": "Retail REITs",
    "marketCap": 161191,
    "totalShares": 6708
  },
  {
    "name": "Kinder Morgan",
    "symbol": "KMI",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation. Precio referencial: US$32.02.",
    "sector": "Oil & Gas Storage & Transportation",
    "marketCap": 713022,
    "totalShares": 22268
  },
  {
    "name": "KKR",
    "symbol": "KKR",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$108.50.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 1002096,
    "totalShares": 9236
  },
  {
    "name": "KLA Corporation",
    "symbol": "KLAC",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$183.83.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 2401825,
    "totalShares": 13065
  },
  {
    "name": "Kraft Heinz",
    "symbol": "KHC",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$24.79.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 293966,
    "totalShares": 11858
  },
  {
    "name": "Kroger",
    "symbol": "KR",
    "description": "Constituyente del S&P 500. Sector: Food Retail. Precio referencial: US$111.00.",
    "sector": "Food Retail",
    "marketCap": 4163721,
    "totalShares": 37511
  },
  {
    "name": "L3Harris",
    "symbol": "LHX",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$262.96.",
    "sector": "Aerospace & Defense",
    "marketCap": 489670,
    "totalShares": 1862
  },
  {
    "name": "LabCorp",
    "symbol": "LH",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$335.72.",
    "sector": "Health Care Services",
    "marketCap": 272269,
    "totalShares": 811
  },
  {
    "name": "Lam Research",
    "symbol": "LRCX",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$312.88.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 3915133,
    "totalShares": 12513
  },
  {
    "name": "Lamb Weston",
    "symbol": "LW",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$55.26.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 100000,
    "totalShares": 1810
  },
  {
    "name": "Las Vegas Sands",
    "symbol": "LVS",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming. Precio referencial: US$46.23.",
    "sector": "Casinos & Gaming",
    "marketCap": 299432,
    "totalShares": 6477
  },
  {
    "name": "Leidos",
    "symbol": "LDOS",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services. Precio referencial: US$137.43.",
    "sector": "Diversified Support Services",
    "marketCap": 172464,
    "totalShares": 1255
  },
  {
    "name": "Lennar",
    "symbol": "LEN",
    "description": "Constituyente del S&P 500. Sector: Homebuilding. Precio referencial: US$87.15.",
    "sector": "Homebuilding",
    "marketCap": 209940,
    "totalShares": 2409
  },
  {
    "name": "Lilly (Eli)",
    "symbol": "LLY",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$1189.41.",
    "sector": "Pharmaceuticals",
    "marketCap": 10606462,
    "totalShares": 8917
  },
  {
    "name": "Linde plc",
    "symbol": "LIN",
    "description": "Constituyente del S&P 500. Sector: Industrial Gases. Precio referencial: US$490.33.",
    "sector": "Industrial Gases",
    "marketCap": 2260324,
    "totalShares": 4610
  },
  {
    "name": "Live Nation Entertainment",
    "symbol": "LYV",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment. Precio referencial: US$182.64.",
    "sector": "Movies & Entertainment",
    "marketCap": 425477,
    "totalShares": 2330
  },
  {
    "name": "LKQ Corporation",
    "symbol": "LKQ",
    "description": "Constituyente del S&P 500. Sector: Distributors. Precio referencial: US$25.75.",
    "sector": "Distributors",
    "marketCap": 100000,
    "totalShares": 3883
  },
  {
    "name": "Lockheed Martin",
    "symbol": "LMT",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$565.62.",
    "sector": "Aerospace & Defense",
    "marketCap": 1305399,
    "totalShares": 2308
  },
  {
    "name": "Loews Corporation",
    "symbol": "L",
    "description": "Constituyente del S&P 500. Sector: Multi-line Insurance. Precio referencial: US$110.96.",
    "sector": "Multi-line Insurance",
    "marketCap": 226833,
    "totalShares": 2044
  },
  {
    "name": "Lowe's",
    "symbol": "LOW",
    "description": "Constituyente del S&P 500. Sector: Home Improvement Retail. Precio referencial: US$204.00.",
    "sector": "Home Improvement Retail",
    "marketCap": 7946616,
    "totalShares": 38954
  },
  {
    "name": "Lululemon Athletica",
    "symbol": "LULU",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods. Precio referencial: US$116.35.",
    "sector": "Apparel, Accessories & Luxury Goods",
    "marketCap": 132120,
    "totalShares": 1136
  },
  {
    "name": "LyondellBasell",
    "symbol": "LYB",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$62.62.",
    "sector": "Specialty Chemicals",
    "marketCap": 202286,
    "totalShares": 3230
  },
  {
    "name": "M&T Bank",
    "symbol": "MTB",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$241.54.",
    "sector": "Regional Banks",
    "marketCap": 348823,
    "totalShares": 1444
  },
  {
    "name": "Marathon Oil",
    "symbol": "MRO",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$138.00.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 5428644,
    "totalShares": 39338
  },
  {
    "name": "Marathon Petroleum",
    "symbol": "MPC",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Refining & Marketing. Precio referencial: US$362.27.",
    "sector": "Oil & Gas Refining & Marketing",
    "marketCap": 1017344,
    "totalShares": 2808
  },
  {
    "name": "MarketAxess",
    "symbol": "MKTX",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$162.52.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 100000,
    "totalShares": 615
  },
  {
    "name": "Marriott International",
    "symbol": "MAR",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$358.67.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 935290,
    "totalShares": 2608
  },
  {
    "name": "Marsh McLennan",
    "symbol": "MMC",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$59.00.",
    "sector": "Insurance Brokers",
    "marketCap": 2342831,
    "totalShares": 39709
  },
  {
    "name": "Martin Marietta Materials",
    "symbol": "MLM",
    "description": "Constituyente del S&P 500. Sector: Construction Materials. Precio referencial: US$532.18.",
    "sector": "Construction Materials",
    "marketCap": 377951,
    "totalShares": 710
  },
  {
    "name": "Masco",
    "symbol": "MAS",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$73.60.",
    "sector": "Building Products",
    "marketCap": 145130,
    "totalShares": 1972
  },
  {
    "name": "Mastercard",
    "symbol": "MA",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$598.47.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 5242656,
    "totalShares": 8760
  },
  {
    "name": "Match Group",
    "symbol": "MTCH",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services. Precio referencial: US$42.07.",
    "sector": "Interactive Media & Services",
    "marketCap": 100000,
    "totalShares": 2377
  },
  {
    "name": "McCormick & Company",
    "symbol": "MKC",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$55.10.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 148137,
    "totalShares": 2689
  },
  {
    "name": "McDonald's",
    "symbol": "MCD",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$266.93.",
    "sector": "Restaurants",
    "marketCap": 1888907,
    "totalShares": 7076
  },
  {
    "name": "McKesson Corporation",
    "symbol": "MCK",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors. Precio referencial: US$896.65.",
    "sector": "Health Care Distributors",
    "marketCap": 1045407,
    "totalShares": 1166
  },
  {
    "name": "Medtronic",
    "symbol": "MDT",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$92.02.",
    "sector": "Health Care Equipment",
    "marketCap": 1177838,
    "totalShares": 12800
  },
  {
    "name": "Merck & Co.",
    "symbol": "MRK",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$153.10.",
    "sector": "Pharmaceuticals",
    "marketCap": 3777240,
    "totalShares": 24672
  },
  {
    "name": "Meta Platforms",
    "symbol": "META",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services. Precio referencial: US$576.14.",
    "sector": "Interactive Media & Services",
    "marketCap": 14677203,
    "totalShares": 25475
  },
  {
    "name": "MetLife",
    "symbol": "MET",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$96.52.",
    "sector": "Life & Health Insurance",
    "marketCap": 613362,
    "totalShares": 6355
  },
  {
    "name": "Mettler Toledo",
    "symbol": "MTD",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$1398.46.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 280203,
    "totalShares": 200
  },
  {
    "name": "MGM Resorts",
    "symbol": "MGM",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming. Precio referencial: US$43.46.",
    "sector": "Casinos & Gaming",
    "marketCap": 111193,
    "totalShares": 2559
  },
  {
    "name": "Microchip Technology",
    "symbol": "MCHP",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$74.05.",
    "sector": "Semiconductors",
    "marketCap": 402098,
    "totalShares": 5430
  },
  {
    "name": "Micron Technology",
    "symbol": "MU",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$105.00.",
    "sector": "Semiconductors",
    "marketCap": 4316025,
    "totalShares": 41105
  },
  {
    "name": "Microsoft",
    "symbol": "MSFT",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$496.37.",
    "sector": "Systems Software",
    "marketCap": 36858180,
    "totalShares": 74255
  },
  {
    "name": "Mid-America Apartment Communities",
    "symbol": "MAA",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$131.50.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 156437,
    "totalShares": 1190
  },
  {
    "name": "Moderna",
    "symbol": "MRNA",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$149.66.",
    "sector": "Biotechnology",
    "marketCap": 597496,
    "totalShares": 3992
  },
  {
    "name": "Mohawk Industries",
    "symbol": "MHK",
    "description": "Constituyente del S&P 500. Sector: Home Furnishings. Precio referencial: US$132.17.",
    "sector": "Home Furnishings",
    "marketCap": 100000,
    "totalShares": 757
  },
  {
    "name": "Molina Healthcare",
    "symbol": "MOH",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$202.43.",
    "sector": "Managed Health Care",
    "marketCap": 105668,
    "totalShares": 522
  },
  {
    "name": "Molson Coors Beverage Company",
    "symbol": "TAP",
    "description": "Constituyente del S&P 500. Sector: Brewers. Precio referencial: US$42.09.",
    "sector": "Brewers",
    "marketCap": 100000,
    "totalShares": 2376
  },
  {
    "name": "Mondelez International",
    "symbol": "MDLZ",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$63.01.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 804202,
    "totalShares": 12763
  },
  {
    "name": "Monolithic Power Systems",
    "symbol": "MPWR",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$1303.88.",
    "sector": "Semiconductors",
    "marketCap": 640766,
    "totalShares": 491
  },
  {
    "name": "Monster Beverage",
    "symbol": "MNST",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages. Precio referencial: US$47.81.",
    "sector": "Soft Drinks & Non-alcoholic Beverages",
    "marketCap": 936623,
    "totalShares": 19591
  },
  {
    "name": "Moody's Corporation",
    "symbol": "MCO",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$514.55.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 891103,
    "totalShares": 1732
  },
  {
    "name": "Morgan Stanley",
    "symbol": "MS",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage. Precio referencial: US$214.08.",
    "sector": "Investment Banking & Brokerage",
    "marketCap": 3362268,
    "totalShares": 15706
  },
  {
    "name": "Mosaic Company (The)",
    "symbol": "MOS",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals. Precio referencial: US$24.16.",
    "sector": "Fertilizers & Agricultural Chemicals",
    "marketCap": 100000,
    "totalShares": 4139
  },
  {
    "name": "Motorola Solutions",
    "symbol": "MSI",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment. Precio referencial: US$487.28.",
    "sector": "Communications Equipment",
    "marketCap": 806418,
    "totalShares": 1655
  },
  {
    "name": "MSCI",
    "symbol": "MSCI",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$564.22.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 410188,
    "totalShares": 727
  },
  {
    "name": "Nasdaq, Inc.",
    "symbol": "NDAQ",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$99.47.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 556015,
    "totalShares": 5590
  },
  {
    "name": "NetApp",
    "symbol": "NTAP",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$193.85.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 380400,
    "totalShares": 1962
  },
  {
    "name": "Netflix",
    "symbol": "NFLX",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment. Precio referencial: US$81.46.",
    "sector": "Movies & Entertainment",
    "marketCap": 3391945,
    "totalShares": 41639
  },
  {
    "name": "Newmont",
    "symbol": "NEM",
    "description": "Constituyente del S&P 500. Sector: Gold. Precio referencial: US$131.60.",
    "sector": "Gold",
    "marketCap": 1386659,
    "totalShares": 10537
  },
  {
    "name": "News Corp (Class A)",
    "symbol": "NWSA",
    "description": "Constituyente del S&P 500. Sector: Publishing. Precio referencial: US$30.96.",
    "sector": "Publishing",
    "marketCap": 166327,
    "totalShares": 5372
  },
  {
    "name": "News Corp (Class B)",
    "symbol": "NWS",
    "description": "Constituyente del S&P 500. Sector: Publishing. Precio referencial: US$35.24.",
    "sector": "Publishing",
    "marketCap": 189321,
    "totalShares": 5372
  },
  {
    "name": "NextEra Energy",
    "symbol": "NEE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$84.22.",
    "sector": "Multi-Utilities",
    "marketCap": 1756811,
    "totalShares": 20860
  },
  {
    "name": "Nike, Inc.",
    "symbol": "NKE",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods. Precio referencial: US$38.59.",
    "sector": "Apparel, Accessories & Luxury Goods",
    "marketCap": 572482,
    "totalShares": 14835
  },
  {
    "name": "NiSource",
    "symbol": "NI",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$41.13.",
    "sector": "Multi-Utilities",
    "marketCap": 197243,
    "totalShares": 4796
  },
  {
    "name": "Nordson Corporation",
    "symbol": "NDSN",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$334.58.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 186359,
    "totalShares": 557
  },
  {
    "name": "Norfolk Southern Railway",
    "symbol": "NSC",
    "description": "Constituyente del S&P 500. Sector: Rail Transportation. Precio referencial: US$352.68.",
    "sector": "Rail Transportation",
    "marketCap": 792149,
    "totalShares": 2246
  },
  {
    "name": "Northern Trust",
    "symbol": "NTRS",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$187.66.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 343335,
    "totalShares": 1830
  },
  {
    "name": "Northrop Grumman",
    "symbol": "NOC",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$549.95.",
    "sector": "Aerospace & Defense",
    "marketCap": 781276,
    "totalShares": 1421
  },
  {
    "name": "Norwegian Cruise Line Holdings",
    "symbol": "NCLH",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$17.09.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 100000,
    "totalShares": 5851
  },
  {
    "name": "NRG Energy",
    "symbol": "NRG",
    "description": "Constituyente del S&P 500. Sector: Independent Power Producers & Energy Traders. Precio referencial: US$116.14.",
    "sector": "Independent Power Producers & Energy Traders",
    "marketCap": 244138,
    "totalShares": 2102
  },
  {
    "name": "Nucor",
    "symbol": "NUE",
    "description": "Constituyente del S&P 500. Sector: Steel. Precio referencial: US$252.80.",
    "sector": "Steel",
    "marketCap": 573542,
    "totalShares": 2269
  },
  {
    "name": "Nvidia",
    "symbol": "NVDA",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$209.66.",
    "sector": "Semiconductors",
    "marketCap": 50781749,
    "totalShares": 242210
  },
  {
    "name": "NVR, Inc.",
    "symbol": "NVR",
    "description": "Constituyente del S&P 500. Sector: Homebuilding. Precio referencial: US$6368.12.",
    "sector": "Homebuilding",
    "marketCap": 170548,
    "totalShares": 27
  },
  {
    "name": "NXP Semiconductors",
    "symbol": "NXPI",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$223.15.",
    "sector": "Semiconductors",
    "marketCap": 562704,
    "totalShares": 2522
  },
  {
    "name": "O'Reilly Auto Parts",
    "symbol": "ORLY",
    "description": "Constituyente del S&P 500. Sector: Automotive Retail. Precio referencial: US$89.55.",
    "sector": "Automotive Retail",
    "marketCap": 724424,
    "totalShares": 8090
  },
  {
    "name": "Occidental Petroleum",
    "symbol": "OXY",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$58.62.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 585987,
    "totalShares": 9996
  },
  {
    "name": "Old Dominion",
    "symbol": "ODFL",
    "description": "Constituyente del S&P 500. Sector: Cargo Ground Transportation. Precio referencial: US$199.43.",
    "sector": "Cargo Ground Transportation",
    "marketCap": 414751,
    "totalShares": 2080
  },
  {
    "name": "Omnicom Group",
    "symbol": "OMC",
    "description": "Constituyente del S&P 500. Sector: Advertising. Precio referencial: US$87.89.",
    "sector": "Advertising",
    "marketCap": 241123,
    "totalShares": 2743
  },
  {
    "name": "ON Semiconductor",
    "symbol": "ON",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$73.22.",
    "sector": "Semiconductors",
    "marketCap": 285059,
    "totalShares": 3893
  },
  {
    "name": "ONEOK",
    "symbol": "OKE",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation. Precio referencial: US$94.90.",
    "sector": "Oil & Gas Storage & Transportation",
    "marketCap": 598221,
    "totalShares": 6304
  },
  {
    "name": "Oracle Corporation",
    "symbol": "ORCL",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$148.87.",
    "sector": "Application Software",
    "marketCap": 4288157,
    "totalShares": 28805
  },
  {
    "name": "Otis Worldwide",
    "symbol": "OTIS",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$72.36.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 275452,
    "totalShares": 3807
  },
  {
    "name": "Paccar",
    "symbol": "PCAR",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment. Precio referencial: US$129.23.",
    "sector": "Construction Machinery & Heavy Transportation Equipment",
    "marketCap": 680221,
    "totalShares": 5264
  },
  {
    "name": "Packaging Corporation of America",
    "symbol": "PKG",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$246.68.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 219788,
    "totalShares": 891
  },
  {
    "name": "Palantir Technologies",
    "symbol": "PLTR",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure. Precio referencial: US$177.50.",
    "sector": "Internet Services & Infrastructure",
    "marketCap": 4265429,
    "totalShares": 24031
  },
  {
    "name": "Palo Alto Networks",
    "symbol": "PANW",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$339.31.",
    "sector": "Systems Software",
    "marketCap": 2765376,
    "totalShares": 8150
  },
  {
    "name": "Paramount Global",
    "symbol": "PARA",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment. Precio referencial: US$1.18.",
    "sector": "Movies & Entertainment",
    "marketCap": 100000,
    "totalShares": 84746
  },
  {
    "name": "Parker Hannifin",
    "symbol": "PH",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$1039.49.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 1310251,
    "totalShares": 1260
  },
  {
    "name": "Paychex",
    "symbol": "PAYX",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services. Precio referencial: US$124.88.",
    "sector": "Human Resource & Employment Services",
    "marketCap": 444177,
    "totalShares": 3557
  },
  {
    "name": "Paycom",
    "symbol": "PAYC",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services. Precio referencial: US$232.31.",
    "sector": "Human Resource & Employment Services",
    "marketCap": 104706,
    "totalShares": 451
  },
  {
    "name": "PayPal",
    "symbol": "PYPL",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$61.81.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 528760,
    "totalShares": 8555
  },
  {
    "name": "Pentair",
    "symbol": "PNR",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$62.86.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 100325,
    "totalShares": 1596
  },
  {
    "name": "PepsiCo",
    "symbol": "PEP",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages. Precio referencial: US$142.19.",
    "sector": "Soft Drinks & Non-alcoholic Beverages",
    "marketCap": 1942315,
    "totalShares": 13660
  },
  {
    "name": "Pfizer",
    "symbol": "PFE",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$28.30.",
    "sector": "Pharmaceuticals",
    "marketCap": 1613008,
    "totalShares": 56997
  },
  {
    "name": "PG&E Corporation",
    "symbol": "PCG",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$18.22.",
    "sector": "Multi-Utilities",
    "marketCap": 401271,
    "totalShares": 22024
  },
  {
    "name": "Philip Morris International",
    "symbol": "PM",
    "description": "Constituyente del S&P 500. Sector: Tobacco. Precio referencial: US$194.10.",
    "sector": "Tobacco",
    "marketCap": 3025269,
    "totalShares": 15586
  },
  {
    "name": "Phillips 66",
    "symbol": "PSX",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Refining & Marketing. Precio referencial: US$242.23.",
    "sector": "Oil & Gas Refining & Marketing",
    "marketCap": 971185,
    "totalShares": 4009
  },
  {
    "name": "Pinnacle West",
    "symbol": "PNW",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$98.69.",
    "sector": "Multi-Utilities",
    "marketCap": 119610,
    "totalShares": 1212
  },
  {
    "name": "PNC Financial Services",
    "symbol": "PNC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$244.67.",
    "sector": "Diversified Banks",
    "marketCap": 976095,
    "totalShares": 3989
  },
  {
    "name": "Pool Corporation",
    "symbol": "POOL",
    "description": "Constituyente del S&P 500. Sector: Distributors. Precio referencial: US$188.38.",
    "sector": "Distributors",
    "marketCap": 100000,
    "totalShares": 531
  },
  {
    "name": "PPG Industries",
    "symbol": "PPG",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$114.42.",
    "sector": "Specialty Chemicals",
    "marketCap": 254356,
    "totalShares": 2223
  },
  {
    "name": "PPL Corporation",
    "symbol": "PPL",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$35.02.",
    "sector": "Electric Utilities",
    "marketCap": 263541,
    "totalShares": 7525
  },
  {
    "name": "Principal Financial Group",
    "symbol": "PFG",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$112.21.",
    "sector": "Life & Health Insurance",
    "marketCap": 240247,
    "totalShares": 2141
  },
  {
    "name": "Procter & Gamble",
    "symbol": "PG",
    "description": "Constituyente del S&P 500. Sector: Personal Care Products. Precio referencial: US$145.00.",
    "sector": "Personal Care Products",
    "marketCap": 3370428,
    "totalShares": 23244
  },
  {
    "name": "Progressive Corporation",
    "symbol": "PGR",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$222.51.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 1293006,
    "totalShares": 5811
  },
  {
    "name": "Prologis",
    "symbol": "PLD",
    "description": "Constituyente del S&P 500. Sector: Industrial REITs. Precio referencial: US$142.59.",
    "sector": "Industrial REITs",
    "marketCap": 1386105,
    "totalShares": 9721
  },
  {
    "name": "Prudential Financial",
    "symbol": "PRU",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$120.24.",
    "sector": "Life & Health Insurance",
    "marketCap": 414828,
    "totalShares": 3450
  },
  {
    "name": "PTC Inc.",
    "symbol": "PTC",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$151.61.",
    "sector": "Application Software",
    "marketCap": 164506,
    "totalShares": 1085
  },
  {
    "name": "Public Service Enterprise Group",
    "symbol": "PEG",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$74.03.",
    "sector": "Electric Utilities",
    "marketCap": 368980,
    "totalShares": 4984
  },
  {
    "name": "Public Storage",
    "symbol": "PSA",
    "description": "Constituyente del S&P 500. Sector: Self-Storage REITs. Precio referencial: US$317.37.",
    "sector": "Self-Storage REITs",
    "marketCap": 592675,
    "totalShares": 1867
  },
  {
    "name": "PulteGroup",
    "symbol": "PHM",
    "description": "Constituyente del S&P 500. Sector: Homebuilding. Precio referencial: US$212.00.",
    "sector": "Homebuilding",
    "marketCap": 10167944,
    "totalShares": 47962
  },
  {
    "name": "Qorvo",
    "symbol": "QRVO",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$95.14.",
    "sector": "Semiconductors",
    "marketCap": 100000,
    "totalShares": 1051
  },
  {
    "name": "Qualcomm",
    "symbol": "QCOM",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$163.72.",
    "sector": "Semiconductors",
    "marketCap": 1748629,
    "totalShares": 10681
  },
  {
    "name": "Quanta Services",
    "symbol": "PWR",
    "description": "Constituyente del S&P 500. Sector: Construction & Engineering. Precio referencial: US$616.73.",
    "sector": "Construction & Engineering",
    "marketCap": 927213,
    "totalShares": 1503
  },
  {
    "name": "Quest Diagnostics",
    "symbol": "DGX",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$245.00.",
    "sector": "Health Care Services",
    "marketCap": 270415,
    "totalShares": 1104
  },
  {
    "name": "Ralph Lauren Corporation",
    "symbol": "RL",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods. Precio referencial: US$362.32.",
    "sector": "Apparel, Accessories & Luxury Goods",
    "marketCap": 215878,
    "totalShares": 596
  },
  {
    "name": "Raymond James Financial",
    "symbol": "RJF",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage. Precio referencial: US$176.69.",
    "sector": "Investment Banking & Brokerage",
    "marketCap": 339421,
    "totalShares": 1921
  },
  {
    "name": "Realty Income",
    "symbol": "O",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$62.26.",
    "sector": "Retail REITs",
    "marketCap": 589115,
    "totalShares": 9462
  },
  {
    "name": "Regency Centers",
    "symbol": "REG",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$76.38.",
    "sector": "Retail REITs",
    "marketCap": 142799,
    "totalShares": 1870
  },
  {
    "name": "Regeneron Pharmaceuticals",
    "symbol": "REGN",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$814.79.",
    "sector": "Biotechnology",
    "marketCap": 838867,
    "totalShares": 1030
  },
  {
    "name": "Regions Financial Corporation",
    "symbol": "RF",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$30.70.",
    "sector": "Regional Banks",
    "marketCap": 261542,
    "totalShares": 8519
  },
  {
    "name": "Republic Services",
    "symbol": "RSG",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services. Precio referencial: US$222.18.",
    "sector": "Environmental & Facilities Services",
    "marketCap": 680344,
    "totalShares": 3062
  },
  {
    "name": "ResMed",
    "symbol": "RMD",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$235.69.",
    "sector": "Health Care Equipment",
    "marketCap": 339988,
    "totalShares": 1443
  },
  {
    "name": "Revvity",
    "symbol": "RVTY",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$126.35.",
    "sector": "Health Care Equipment",
    "marketCap": 140989,
    "totalShares": 1116
  },
  {
    "name": "Rockwell Automation",
    "symbol": "ROK",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$431.75.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 480425,
    "totalShares": 1113
  },
  {
    "name": "Rollins, Inc.",
    "symbol": "ROL",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services. Precio referencial: US$36.70.",
    "sector": "Environmental & Facilities Services",
    "marketCap": 176580,
    "totalShares": 4811
  },
  {
    "name": "Roper Technologies",
    "symbol": "ROP",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$413.28.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 408738,
    "totalShares": 989
  },
  {
    "name": "Ross Stores",
    "symbol": "ROST",
    "description": "Constituyente del S&P 500. Sector: Apparel Retail. Precio referencial: US$236.27.",
    "sector": "Apparel Retail",
    "marketCap": 757910,
    "totalShares": 3208
  },
  {
    "name": "Royal Caribbean Group",
    "symbol": "RCL",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$290.00.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 775611,
    "totalShares": 2675
  },
  {
    "name": "RTX Corporation",
    "symbol": "RTX",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$211.99.",
    "sector": "Aerospace & Defense",
    "marketCap": 2857112,
    "totalShares": 13478
  },
  {
    "name": "S&P Global",
    "symbol": "SPGI",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$436.49.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 1286772,
    "totalShares": 2948
  },
  {
    "name": "Salesforce",
    "symbol": "CRM",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$446.00.",
    "sector": "Application Software",
    "marketCap": 22298216,
    "totalShares": 49996
  },
  {
    "name": "SBA Communications",
    "symbol": "SBAC",
    "description": "Constituyente del S&P 500. Sector: Telecom Tower REITs. Precio referencial: US$185.98.",
    "sector": "Telecom Tower REITs",
    "marketCap": 197303,
    "totalShares": 1061
  },
  {
    "name": "Schlumberger",
    "symbol": "SLB",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Equipment & Services. Precio referencial: US$53.60.",
    "sector": "Oil & Gas Equipment & Services",
    "marketCap": 795501,
    "totalShares": 14841
  },
  {
    "name": "Seagate Technology",
    "symbol": "STX",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$846.37.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 1918251,
    "totalShares": 2266
  },
  {
    "name": "Sempra",
    "symbol": "SRE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$85.28.",
    "sector": "Multi-Utilities",
    "marketCap": 557646,
    "totalShares": 6539
  },
  {
    "name": "ServiceNow",
    "symbol": "NOW",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$125.80.",
    "sector": "Systems Software",
    "marketCap": 1300598,
    "totalShares": 10339
  },
  {
    "name": "Sherwin-Williams",
    "symbol": "SHW",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$348.66.",
    "sector": "Specialty Chemicals",
    "marketCap": 846401,
    "totalShares": 2428
  },
  {
    "name": "Simon Property Group",
    "symbol": "SPG",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$217.11.",
    "sector": "Retail REITs",
    "marketCap": 824201,
    "totalShares": 3796
  },
  {
    "name": "Skyworks Solutions",
    "symbol": "SWKS",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$66.62.",
    "sector": "Semiconductors",
    "marketCap": 100245,
    "totalShares": 1505
  },
  {
    "name": "Smurfit WestRock",
    "symbol": "SW",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$49.56.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 259954,
    "totalShares": 5245
  },
  {
    "name": "Snap-on",
    "symbol": "SNA",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$397.48.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 205605,
    "totalShares": 517
  },
  {
    "name": "Solventum",
    "symbol": "SOLV",
    "description": "Constituyente del S&P 500. Sector: Health Care Technology. Precio referencial: US$91.53.",
    "sector": "Health Care Technology",
    "marketCap": 155806,
    "totalShares": 1702
  },
  {
    "name": "Southern Company",
    "symbol": "SO",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$89.76.",
    "sector": "Electric Utilities",
    "marketCap": 1032566,
    "totalShares": 11504
  },
  {
    "name": "Southwest Airlines",
    "symbol": "LUV",
    "description": "Constituyente del S&P 500. Sector: Passenger Airlines. Precio referencial: US$40.67.",
    "sector": "Passenger Airlines",
    "marketCap": 198961,
    "totalShares": 4892
  },
  {
    "name": "Stanley Black & Decker",
    "symbol": "SWK",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$99.76.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 150654,
    "totalShares": 1510
  },
  {
    "name": "Starbucks",
    "symbol": "SBUX",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$108.49.",
    "sector": "Restaurants",
    "marketCap": 1236786,
    "totalShares": 11400
  },
  {
    "name": "State Street Corporation",
    "symbol": "STT",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$193.62.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 531878,
    "totalShares": 2747
  },
  {
    "name": "Steel Dynamics",
    "symbol": "STLD",
    "description": "Constituyente del S&P 500. Sector: Steel. Precio referencial: US$235.90.",
    "sector": "Steel",
    "marketCap": 338111,
    "totalShares": 1433
  },
  {
    "name": "Steris",
    "symbol": "STE",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$236.77.",
    "sector": "Health Care Equipment",
    "marketCap": 230851,
    "totalShares": 975
  },
  {
    "name": "Stryker Corporation",
    "symbol": "SYK",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$329.67.",
    "sector": "Health Care Equipment",
    "marketCap": 1264525,
    "totalShares": 3836
  },
  {
    "name": "Supermicro",
    "symbol": "SMCI",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$37.39.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 241866,
    "totalShares": 6469
  },
  {
    "name": "Synchrony Financial",
    "symbol": "SYF",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance. Precio referencial: US$79.78.",
    "sector": "Consumer Finance",
    "marketCap": 259581,
    "totalShares": 3254
  },
  {
    "name": "Synopsys",
    "symbol": "SNPS",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$410.00.",
    "sector": "Application Software",
    "marketCap": 785065,
    "totalShares": 1915
  },
  {
    "name": "Sysco",
    "symbol": "SYY",
    "description": "Constituyente del S&P 500. Sector: Food Distributors. Precio referencial: US$83.27.",
    "sector": "Food Distributors",
    "marketCap": 398943,
    "totalShares": 4791
  },
  {
    "name": "T-Mobile US",
    "symbol": "TMUS",
    "description": "Constituyente del S&P 500. Sector: Wireless Telecommunication Services. Precio referencial: US$179.61.",
    "sector": "Wireless Telecommunication Services",
    "marketCap": 1926626,
    "totalShares": 10727
  },
  {
    "name": "T. Rowe Price",
    "symbol": "TROW",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$112.55.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 240087,
    "totalShares": 2133
  },
  {
    "name": "Take-Two Interactive",
    "symbol": "TTWO",
    "description": "Constituyente del S&P 500. Sector: Interactive Home Entertainment. Precio referencial: US$233.45.",
    "sector": "Interactive Home Entertainment",
    "marketCap": 436506,
    "totalShares": 1870
  },
  {
    "name": "Tapestry, Inc.",
    "symbol": "TPR",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods. Precio referencial: US$130.25.",
    "sector": "Apparel, Accessories & Luxury Goods",
    "marketCap": 259708,
    "totalShares": 1994
  },
  {
    "name": "Targa Resources",
    "symbol": "TRGP",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation. Precio referencial: US$294.03.",
    "sector": "Oil & Gas Storage & Transportation",
    "marketCap": 630492,
    "totalShares": 2144
  },
  {
    "name": "Target Corporation",
    "symbol": "TGT",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail. Precio referencial: US$164.04.",
    "sector": "Consumer Staples Merchandise Retail",
    "marketCap": 745220,
    "totalShares": 4543
  },
  {
    "name": "TE Connectivity",
    "symbol": "TEL",
    "description": "Constituyente del S&P 500. Sector: Electronic Manufacturing Services. Precio referencial: US$205.03.",
    "sector": "Electronic Manufacturing Services",
    "marketCap": 593589,
    "totalShares": 2895
  },
  {
    "name": "Teledyne Technologies",
    "symbol": "TDY",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$633.56.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 293691,
    "totalShares": 464
  },
  {
    "name": "Teleflex",
    "symbol": "TFX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$138.74.",
    "sector": "Health Care Equipment",
    "marketCap": 100000,
    "totalShares": 721
  },
  {
    "name": "Teradyne",
    "symbol": "TER",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$363.10.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 567673,
    "totalShares": 1563
  },
  {
    "name": "Tesla, Inc.",
    "symbol": "TSLA",
    "description": "Constituyente del S&P 500. Sector: Automobile Manufacturers. Precio referencial: US$345.82.",
    "sector": "Automobile Manufacturers",
    "marketCap": 13658325,
    "totalShares": 39495
  },
  {
    "name": "Texas Instruments",
    "symbol": "TXN",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$261.77.",
    "sector": "Semiconductors",
    "marketCap": 2390608,
    "totalShares": 9132
  },
  {
    "name": "Textron",
    "symbol": "TXT",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$83.31.",
    "sector": "Aerospace & Defense",
    "marketCap": 143282,
    "totalShares": 1720
  },
  {
    "name": "Thermo Fisher Scientific",
    "symbol": "TMO",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$633.71.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 2343126,
    "totalShares": 3697
  },
  {
    "name": "TJX Companies",
    "symbol": "TJX",
    "description": "Constituyente del S&P 500. Sector: Apparel Retail. Precio referencial: US$136.83.",
    "sector": "Apparel Retail",
    "marketCap": 1511567,
    "totalShares": 11047
  },
  {
    "name": "Tractor Supply",
    "symbol": "TSCO",
    "description": "Constituyente del S&P 500. Sector: Other Specialty Retail. Precio referencial: US$35.01.",
    "sector": "Other Specialty Retail",
    "marketCap": 182416,
    "totalShares": 5210
  },
  {
    "name": "Trane Technologies",
    "symbol": "TT",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$463.40.",
    "sector": "Building Products",
    "marketCap": 1019587,
    "totalShares": 2200
  },
  {
    "name": "TransDigm Group",
    "symbol": "TDG",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$1207.06.",
    "sector": "Aerospace & Defense",
    "marketCap": 667221,
    "totalShares": 553
  },
  {
    "name": "Travelers Companies (The)",
    "symbol": "TRV",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$371.15.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 774126,
    "totalShares": 2086
  },
  {
    "name": "Trimble Inc.",
    "symbol": "TRMB",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$59.68.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 139162,
    "totalShares": 2332
  },
  {
    "name": "Truist Financial",
    "symbol": "TFC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$50.67.",
    "sector": "Diversified Banks",
    "marketCap": 618998,
    "totalShares": 12216
  },
  {
    "name": "Tyler Technologies",
    "symbol": "TYL",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$352.65.",
    "sector": "Application Software",
    "marketCap": 144418,
    "totalShares": 410
  },
  {
    "name": "Tyson Foods",
    "symbol": "TSN",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$56.55.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 198944,
    "totalShares": 3518
  },
  {
    "name": "U.S. Bancorp",
    "symbol": "USB",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$62.80.",
    "sector": "Diversified Banks",
    "marketCap": 978456,
    "totalShares": 15581
  },
  {
    "name": "Uber",
    "symbol": "UBER",
    "description": "Constituyente del S&P 500. Sector: Passenger Ground Transportation. Precio referencial: US$78.49.",
    "sector": "Passenger Ground Transportation",
    "marketCap": 1603205,
    "totalShares": 20426
  },
  {
    "name": "UDR, Inc.",
    "symbol": "UDR",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$37.93.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 139341,
    "totalShares": 3674
  },
  {
    "name": "Ulta Beauty",
    "symbol": "ULTA",
    "description": "Constituyente del S&P 500. Sector: Other Specialty Retail. Precio referencial: US$543.19.",
    "sector": "Other Specialty Retail",
    "marketCap": 233514,
    "totalShares": 430
  },
  {
    "name": "Union Pacific Corporation",
    "symbol": "UNP",
    "description": "Constituyente del S&P 500. Sector: Rail Transportation. Precio referencial: US$310.62.",
    "sector": "Rail Transportation",
    "marketCap": 1845317,
    "totalShares": 5941
  },
  {
    "name": "United Airlines Holdings",
    "symbol": "UAL",
    "description": "Constituyente del S&P 500. Sector: Passenger Airlines. Precio referencial: US$114.83.",
    "sector": "Passenger Airlines",
    "marketCap": 372703,
    "totalShares": 3246
  },
  {
    "name": "United Parcel Service",
    "symbol": "UPS",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics. Precio referencial: US$105.65.",
    "sector": "Air Freight & Logistics",
    "marketCap": 898851,
    "totalShares": 8508
  },
  {
    "name": "United Rentals",
    "symbol": "URI",
    "description": "Constituyente del S&P 500. Sector: Trading Companies & Distributors. Precio referencial: US$1057.66.",
    "sector": "Trading Companies & Distributors",
    "marketCap": 658314,
    "totalShares": 622
  },
  {
    "name": "UnitedHealth Group",
    "symbol": "UNH",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$401.01.",
    "sector": "Managed Health Care",
    "marketCap": 3599445,
    "totalShares": 8976
  },
  {
    "name": "Universal Health Services",
    "symbol": "UHS",
    "description": "Constituyente del S&P 500. Sector: Health Care Facilities. Precio referencial: US$178.69.",
    "sector": "Health Care Facilities",
    "marketCap": 105314,
    "totalShares": 589
  },
  {
    "name": "Valero Energy",
    "symbol": "VLO",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Refining & Marketing. Precio referencial: US$348.03.",
    "sector": "Oil & Gas Refining & Marketing",
    "marketCap": 1002074,
    "totalShares": 2879
  },
  {
    "name": "Ventas",
    "symbol": "VTR",
    "description": "Constituyente del S&P 500. Sector: Health Care REITs. Precio referencial: US$93.50.",
    "sector": "Health Care REITs",
    "marketCap": 479605,
    "totalShares": 5129
  },
  {
    "name": "Veralto",
    "symbol": "VLTO",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services. Precio referencial: US$98.69.",
    "sector": "Environmental & Facilities Services",
    "marketCap": 240600,
    "totalShares": 2438
  },
  {
    "name": "Verisign",
    "symbol": "VRSN",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure. Precio referencial: US$292.99.",
    "sector": "Internet Services & Infrastructure",
    "marketCap": 264863,
    "totalShares": 904
  },
  {
    "name": "Verisk Analytics",
    "symbol": "VRSK",
    "description": "Constituyente del S&P 500. Sector: Research & Consulting Services. Precio referencial: US$187.87.",
    "sector": "Research & Consulting Services",
    "marketCap": 244524,
    "totalShares": 1302
  },
  {
    "name": "Verizon",
    "symbol": "VZ",
    "description": "Constituyente del S&P 500. Sector: Integrated Telecommunication Services. Precio referencial: US$50.19.",
    "sector": "Integrated Telecommunication Services",
    "marketCap": 2085282,
    "totalShares": 41548
  },
  {
    "name": "Vertex Pharmaceuticals",
    "symbol": "VRTX",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$547.29.",
    "sector": "Biotechnology",
    "marketCap": 1387166,
    "totalShares": 2535
  },
  {
    "name": "Viatris",
    "symbol": "VTRS",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$16.85.",
    "sector": "Pharmaceuticals",
    "marketCap": 193538,
    "totalShares": 11486
  },
  {
    "name": "Vici Properties",
    "symbol": "VICI",
    "description": "Constituyente del S&P 500. Sector: Hotel & Resort REITs. Precio referencial: US$26.00.",
    "sector": "Hotel & Resort REITs",
    "marketCap": 286280,
    "totalShares": 11011
  },
  {
    "name": "Visa Inc.",
    "symbol": "V",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$383.90.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 7167594,
    "totalShares": 18670
  },
  {
    "name": "Vistra Corp.",
    "symbol": "VST",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$140.03.",
    "sector": "Electric Utilities",
    "marketCap": 469990,
    "totalShares": 3356
  },
  {
    "name": "Vulcan Materials Company",
    "symbol": "VMC",
    "description": "Constituyente del S&P 500. Sector: Construction Materials. Precio referencial: US$273.74.",
    "sector": "Construction Materials",
    "marketCap": 354709,
    "totalShares": 1296
  },
  {
    "name": "W. R. Berkley Corporation",
    "symbol": "WRB",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$68.67.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 254922,
    "totalShares": 3712
  },
  {
    "name": "W. W. Grainger",
    "symbol": "GWW",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$1335.39.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 628981,
    "totalShares": 471
  },
  {
    "name": "Wabtec",
    "symbol": "WAB",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment. Precio referencial: US$300.54.",
    "sector": "Construction Machinery & Heavy Transportation Equipment",
    "marketCap": 507645,
    "totalShares": 1689
  },
  {
    "name": "Walgreens Boots Alliance",
    "symbol": "WBA",
    "description": "Constituyente del S&P 500. Sector: Drug Retail. Precio referencial: US$222.00.",
    "sector": "Drug Retail",
    "marketCap": 12647784,
    "totalShares": 56972
  },
  {
    "name": "Walmart",
    "symbol": "WMT",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail. Precio referencial: US$104.34.",
    "sector": "Consumer Staples Merchandise Retail",
    "marketCap": 8303459,
    "totalShares": 79581
  },
  {
    "name": "Walt Disney Company (The)",
    "symbol": "DIS",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment. Precio referencial: US$109.63.",
    "sector": "Movies & Entertainment",
    "marketCap": 1892967,
    "totalShares": 17267
  },
  {
    "name": "Warner Bros. Discovery",
    "symbol": "WBD",
    "description": "Constituyente del S&P 500. Sector: Broadcasting. Precio referencial: US$28.75.",
    "sector": "Broadcasting",
    "marketCap": 720802,
    "totalShares": 25071
  },
  {
    "name": "Waste Management",
    "symbol": "WM",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services. Precio referencial: US$221.24.",
    "sector": "Environmental & Facilities Services",
    "marketCap": 884330,
    "totalShares": 3997
  },
  {
    "name": "Waters Corporation",
    "symbol": "WAT",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$414.17.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 406656,
    "totalShares": 982
  },
  {
    "name": "WEC Energy Group",
    "symbol": "WEC",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$107.52.",
    "sector": "Electric Utilities",
    "marketCap": 350353,
    "totalShares": 3258
  },
  {
    "name": "Wells Fargo",
    "symbol": "WFC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$85.23.",
    "sector": "Diversified Banks",
    "marketCap": 2577355,
    "totalShares": 30240
  },
  {
    "name": "Welltower",
    "symbol": "WELL",
    "description": "Constituyente del S&P 500. Sector: Health Care REITs. Precio referencial: US$241.56.",
    "sector": "Health Care REITs",
    "marketCap": 1740614,
    "totalShares": 7206
  },
  {
    "name": "West Pharmaceutical Services",
    "symbol": "WST",
    "description": "Constituyente del S&P 500. Sector: Health Care Supplies. Precio referencial: US$349.92.",
    "sector": "Health Care Supplies",
    "marketCap": 246259,
    "totalShares": 704
  },
  {
    "name": "Western Digital",
    "symbol": "WDC",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$468.88.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 1690504,
    "totalShares": 3605
  },
  {
    "name": "Weyerhaeuser",
    "symbol": "WY",
    "description": "Constituyente del S&P 500. Sector: Timber REITs. Precio referencial: US$24.08.",
    "sector": "Timber REITs",
    "marketCap": 173553,
    "totalShares": 7207
  },
  {
    "name": "Williams Companies",
    "symbol": "WMB",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation. Precio referencial: US$74.41.",
    "sector": "Oil & Gas Storage & Transportation",
    "marketCap": 910159,
    "totalShares": 12232
  },
  {
    "name": "Willis Towers Watson",
    "symbol": "WTW",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$343.12.",
    "sector": "Insurance Brokers",
    "marketCap": 318662,
    "totalShares": 929
  },
  {
    "name": "Wynn Resorts",
    "symbol": "WYNN",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming. Precio referencial: US$97.17.",
    "sector": "Casinos & Gaming",
    "marketCap": 100060,
    "totalShares": 1030
  },
  {
    "name": "Xcel Energy",
    "symbol": "XEL",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$77.68.",
    "sector": "Multi-Utilities",
    "marketCap": 485216,
    "totalShares": 6246
  },
  {
    "name": "Xylem Inc.",
    "symbol": "XYL",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$113.42.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 264821,
    "totalShares": 2335
  },
  {
    "name": "Yum! Brands",
    "symbol": "YUM",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$154.41.",
    "sector": "Restaurants",
    "marketCap": 421387,
    "totalShares": 2729
  },
  {
    "name": "Zebra Technologies",
    "symbol": "ZBRA",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$359.84.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 170243,
    "totalShares": 473
  },
  {
    "name": "Zimmer Biomet",
    "symbol": "ZBH",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$101.38.",
    "sector": "Health Care Equipment",
    "marketCap": 193370,
    "totalShares": 1907
  },
  {
    "name": "Zoetis",
    "symbol": "ZTS",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$77.52.",
    "sector": "Pharmaceuticals",
    "marketCap": 320331,
    "totalShares": 4132
  }
];

export function buildSeedCompanies(): SeedCompany[] {
  return companies;
}

export async function seedCompanies() {
  await Company.bulkCreate(
    companies.map((company) => ({
      ...company,
      availableShares: company.totalShares,
      isPublic: true,
      creatorId: null,
    })),
    { ignoreDuplicates: true }
  );
}
