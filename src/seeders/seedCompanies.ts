import { Company } from "../models";

interface SeedCompany {
  name: string;
  symbol: string;
  description: string;
  sector: string;
  marketCap: number;
  totalShares: number;
}

// S&P 500 financial snapshot sourced from https://datahub.io/core/s-and-p-500-companies-financials/_r/-/data/constituents-financials.csv on 2026-08-27.
// marketCap is scaled by 10000 so values fit the INTEGER schema while preserving price ratios and ranking.
export const companies: SeedCompany[] = [
  {
    "name": "3M",
    "symbol": "MMM",
    "description": "Constituyente del S&P 500. Sector: Industrial Conglomerates. Precio referencial: US$180.00.",
    "sector": "Industrial Conglomerates",
    "marketCap": 9283004,
    "totalShares": 51572
  },
  {
    "name": "A. O. Smith",
    "symbol": "AOS",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$62.48.",
    "sector": "Building Products",
    "marketCap": 849157,
    "totalShares": 13591
  },
  {
    "name": "Abbott Laboratories",
    "symbol": "ABT",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$114.10.",
    "sector": "Health Care Equipment",
    "marketCap": 19743674,
    "totalShares": 173038
  },
  {
    "name": "AbbVie",
    "symbol": "ABBV",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$262.90.",
    "sector": "Biotechnology",
    "marketCap": 46457514,
    "totalShares": 176712
  },
  {
    "name": "Accenture",
    "symbol": "ACN",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$181.38.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 11099406,
    "totalShares": 61194
  },
  {
    "name": "Adobe Inc.",
    "symbol": "ADBE",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$273.47.",
    "sector": "Application Software",
    "marketCap": 10870433,
    "totalShares": 39750
  },
  {
    "name": "Advanced Micro Devices",
    "symbol": "AMD",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$480.93.",
    "sector": "Semiconductors",
    "marketCap": 78510621,
    "totalShares": 163248
  },
  {
    "name": "AES Corporation",
    "symbol": "AES",
    "description": "Constituyente del S&P 500. Sector: Independent Power Producers & Energy Traders. Precio referencial: US$14.73.",
    "sector": "Independent Power Producers & Energy Traders",
    "marketCap": 1050895,
    "totalShares": 71344
  },
  {
    "name": "Aflac",
    "symbol": "AFL",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$117.45.",
    "sector": "Life & Health Insurance",
    "marketCap": 5888277,
    "totalShares": 50134
  },
  {
    "name": "Agilent Technologies",
    "symbol": "A",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$155.08.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 4379954,
    "totalShares": 28243
  },
  {
    "name": "Air Products",
    "symbol": "APD",
    "description": "Constituyente del S&P 500. Sector: Industrial Gases. Precio referencial: US$306.66.",
    "sector": "Industrial Gases",
    "marketCap": 6828875,
    "totalShares": 22269
  },
  {
    "name": "Airbnb",
    "symbol": "ABNB",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$188.07.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 11261362,
    "totalShares": 59879
  },
  {
    "name": "Akamai Technologies",
    "symbol": "AKAM",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure. Precio referencial: US$108.06.",
    "sector": "Internet Services & Infrastructure",
    "marketCap": 1553002,
    "totalShares": 14372
  },
  {
    "name": "Albemarle Corporation",
    "symbol": "ALB",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$134.51.",
    "sector": "Specialty Chemicals",
    "marketCap": 1587286,
    "totalShares": 11801
  },
  {
    "name": "Alexandria Real Estate Equities",
    "symbol": "ARE",
    "description": "Constituyente del S&P 500. Sector: Office REITs. Precio referencial: US$52.97.",
    "sector": "Office REITs",
    "marketCap": 911589,
    "totalShares": 17210
  },
  {
    "name": "Align Technology",
    "symbol": "ALGN",
    "description": "Constituyente del S&P 500. Sector: Health Care Supplies. Precio referencial: US$159.14.",
    "sector": "Health Care Supplies",
    "marketCap": 1130528,
    "totalShares": 7104
  },
  {
    "name": "Allegion",
    "symbol": "ALLE",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$160.28.",
    "sector": "Building Products",
    "marketCap": 1362970,
    "totalShares": 8504
  },
  {
    "name": "Alliant Energy",
    "symbol": "LNT",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$68.92.",
    "sector": "Electric Utilities",
    "marketCap": 1786990,
    "totalShares": 25928
  },
  {
    "name": "Allstate",
    "symbol": "ALL",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$261.81.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 6620074,
    "totalShares": 25286
  },
  {
    "name": "Alphabet Inc. (Class A)",
    "symbol": "GOOGL",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services. Precio referencial: US$342.00.",
    "sector": "Interactive Media & Services",
    "marketCap": 418263781,
    "totalShares": 1222994
  },
  {
    "name": "Alphabet Inc. (Class C)",
    "symbol": "GOOG",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services. Precio referencial: US$339.10.",
    "sector": "Interactive Media & Services",
    "marketCap": 414717103,
    "totalShares": 1222994
  },
  {
    "name": "Altria",
    "symbol": "MO",
    "description": "Constituyente del S&P 500. Sector: Tobacco. Precio referencial: US$69.12.",
    "sector": "Tobacco",
    "marketCap": 11541270,
    "totalShares": 166974
  },
  {
    "name": "Amazon",
    "symbol": "AMZN",
    "description": "Constituyente del S&P 500. Sector: Broadline Retail. Precio referencial: US$260.28.",
    "sector": "Broadline Retail",
    "marketCap": 280746158,
    "totalShares": 1078631
  },
  {
    "name": "Amcor",
    "symbol": "AMCR",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$47.15.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 2179960,
    "totalShares": 46235
  },
  {
    "name": "Amentum",
    "symbol": "AMTM",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services. Precio referencial: US$20.61.",
    "sector": "Diversified Support Services",
    "marketCap": 503928,
    "totalShares": 24451
  },
  {
    "name": "Ameren",
    "symbol": "AEE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$107.75.",
    "sector": "Multi-Utilities",
    "marketCap": 2982986,
    "totalShares": 27684
  },
  {
    "name": "American Electric Power",
    "symbol": "AEP",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$123.36.",
    "sector": "Electric Utilities",
    "marketCap": 6715686,
    "totalShares": 54440
  },
  {
    "name": "American Express",
    "symbol": "AXP",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance. Precio referencial: US$336.15.",
    "sector": "Consumer Finance",
    "marketCap": 22700540,
    "totalShares": 67531
  },
  {
    "name": "American International Group",
    "symbol": "AIG",
    "description": "Constituyente del S&P 500. Sector: Multi-line Insurance. Precio referencial: US$76.97.",
    "sector": "Multi-line Insurance",
    "marketCap": 4024709,
    "totalShares": 52289
  },
  {
    "name": "American Tower",
    "symbol": "AMT",
    "description": "Constituyente del S&P 500. Sector: Telecom Tower REITs. Precio referencial: US$175.73.",
    "sector": "Telecom Tower REITs",
    "marketCap": 8188316,
    "totalShares": 46596
  },
  {
    "name": "American Water Works",
    "symbol": "AWK",
    "description": "Constituyente del S&P 500. Sector: Water Utilities. Precio referencial: US$137.49.",
    "sector": "Water Utilities",
    "marketCap": 2732325,
    "totalShares": 19873
  },
  {
    "name": "Ameriprise Financial",
    "symbol": "AMP",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$560.28.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 4949134,
    "totalShares": 8833
  },
  {
    "name": "Ametek",
    "symbol": "AME",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$245.20.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 5621486,
    "totalShares": 22926
  },
  {
    "name": "Amgen",
    "symbol": "AMGN",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$440.34.",
    "sector": "Biotechnology",
    "marketCap": 23806190,
    "totalShares": 54063
  },
  {
    "name": "Amphenol",
    "symbol": "APH",
    "description": "Constituyente del S&P 500. Sector: Electronic Components. Precio referencial: US$161.34.",
    "sector": "Electronic Components",
    "marketCap": 19892955,
    "totalShares": 123298
  },
  {
    "name": "Analog Devices",
    "symbol": "ADI",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$371.80.",
    "sector": "Semiconductors",
    "marketCap": 18016143,
    "totalShares": 48457
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
    "marketCap": 7508817,
    "totalShares": 21213
  },
  {
    "name": "APA Corporation",
    "symbol": "APA",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$41.19.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 1443098,
    "totalShares": 35035
  },
  {
    "name": "Apple Inc.",
    "symbol": "AAPL",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$313.45.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 457454597,
    "totalShares": 1459418
  },
  {
    "name": "Applied Materials",
    "symbol": "AMAT",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$479.76.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 38073631,
    "totalShares": 79360
  },
  {
    "name": "Aptiv",
    "symbol": "APTV",
    "description": "Constituyente del S&P 500. Sector: Automotive Parts & Equipment. Precio referencial: US$46.27.",
    "sector": "Automotive Parts & Equipment",
    "marketCap": 960719,
    "totalShares": 20763
  },
  {
    "name": "Arch Capital Group",
    "symbol": "ACGL",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$100.72.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 3436860,
    "totalShares": 34123
  },
  {
    "name": "Archer Daniels Midland",
    "symbol": "ADM",
    "description": "Constituyente del S&P 500. Sector: Agricultural Products & Services. Precio referencial: US$80.09.",
    "sector": "Agricultural Products & Services",
    "marketCap": 3860014,
    "totalShares": 48196
  },
  {
    "name": "Arista Networks",
    "symbol": "ANET",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment. Precio referencial: US$202.25.",
    "sector": "Communications Equipment",
    "marketCap": 25508269,
    "totalShares": 126122
  },
  {
    "name": "Arthur J. Gallagher & Co.",
    "symbol": "AJG",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$265.03.",
    "sector": "Insurance Brokers",
    "marketCap": 6793805,
    "totalShares": 25634
  },
  {
    "name": "Assurant",
    "symbol": "AIZ",
    "description": "Constituyente del S&P 500. Sector: Multi-line Insurance. Precio referencial: US$288.51.",
    "sector": "Multi-line Insurance",
    "marketCap": 1423040,
    "totalShares": 4932
  },
  {
    "name": "AT&T",
    "symbol": "T",
    "description": "Constituyente del S&P 500. Sector: Integrated Telecommunication Services. Precio referencial: US$25.87.",
    "sector": "Integrated Telecommunication Services",
    "marketCap": 17727123,
    "totalShares": 685239
  },
  {
    "name": "Atmos Energy",
    "symbol": "ATO",
    "description": "Constituyente del S&P 500. Sector: Gas Utilities. Precio referencial: US$169.46.",
    "sector": "Gas Utilities",
    "marketCap": 2863680,
    "totalShares": 16899
  },
  {
    "name": "Autodesk",
    "symbol": "ADSK",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$254.77.",
    "sector": "Application Software",
    "marketCap": 5379348,
    "totalShares": 21115
  },
  {
    "name": "Automatic Data Processing",
    "symbol": "ADP",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services. Precio referencial: US$281.39.",
    "sector": "Human Resource & Employment Services",
    "marketCap": 11178577,
    "totalShares": 39726
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
    "marketCap": 2628339,
    "totalShares": 14280
  },
  {
    "name": "Avery Dennison",
    "symbol": "AVY",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$182.33.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 1381845,
    "totalShares": 7579
  },
  {
    "name": "Axon Enterprise",
    "symbol": "AXON",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$607.48.",
    "sector": "Aerospace & Defense",
    "marketCap": 4935010,
    "totalShares": 8124
  },
  {
    "name": "Baker Hughes",
    "symbol": "BKR",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Equipment & Services. Precio referencial: US$62.00.",
    "sector": "Oil & Gas Equipment & Services",
    "marketCap": 6154579,
    "totalShares": 99267
  },
  {
    "name": "Ball Corporation",
    "symbol": "BALL",
    "description": "Constituyente del S&P 500. Sector: Metal, Glass & Plastic Containers. Precio referencial: US$64.05.",
    "sector": "Metal, Glass & Plastic Containers",
    "marketCap": 1695425,
    "totalShares": 26470
  },
  {
    "name": "Bank of America",
    "symbol": "BAC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$62.23.",
    "sector": "Diversified Banks",
    "marketCap": 43515875,
    "totalShares": 699275
  },
  {
    "name": "Baxter International",
    "symbol": "BAX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$26.50.",
    "sector": "Health Care Equipment",
    "marketCap": 1370039,
    "totalShares": 51700
  },
  {
    "name": "Becton Dickinson",
    "symbol": "BDX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$190.21.",
    "sector": "Health Care Equipment",
    "marketCap": 5181070,
    "totalShares": 27239
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
    "marketCap": 1135050,
    "totalShares": 15682
  },
  {
    "name": "Biogen",
    "symbol": "BIIB",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$221.07.",
    "sector": "Biotechnology",
    "marketCap": 3266398,
    "totalShares": 14775
  },
  {
    "name": "BlackRock",
    "symbol": "BLK",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$1173.21.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 19061868,
    "totalShares": 16248
  },
  {
    "name": "Blackstone Inc.",
    "symbol": "BX",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$143.20.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 17116665,
    "totalShares": 119530
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
    "marketCap": 16762959,
    "totalShares": 79037
  },
  {
    "name": "Booking Holdings",
    "symbol": "BKNG",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$208.89.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 15695587,
    "totalShares": 75138
  },
  {
    "name": "BorgWarner",
    "symbol": "BWA",
    "description": "Constituyente del S&P 500. Sector: Automotive Parts & Equipment. Precio referencial: US$64.69.",
    "sector": "Automotive Parts & Equipment",
    "marketCap": 1317518,
    "totalShares": 20367
  },
  {
    "name": "Boston Scientific",
    "symbol": "BSX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$48.17.",
    "sector": "Health Care Equipment",
    "marketCap": 6980939,
    "totalShares": 144923
  },
  {
    "name": "Bristol Myers Squibb",
    "symbol": "BMY",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$67.57.",
    "sector": "Pharmaceuticals",
    "marketCap": 13802622,
    "totalShares": 204271
  },
  {
    "name": "Broadcom",
    "symbol": "AVGO",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$355.59.",
    "sector": "Semiconductors",
    "marketCap": 169174801,
    "totalShares": 475758
  },
  {
    "name": "Broadridge Financial Solutions",
    "symbol": "BR",
    "description": "Constituyente del S&P 500. Sector: Data Processing & Outsourced Services. Precio referencial: US$181.60.",
    "sector": "Data Processing & Outsourced Services",
    "marketCap": 2070636,
    "totalShares": 11402
  },
  {
    "name": "Brown & Brown",
    "symbol": "BRO",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$72.78.",
    "sector": "Insurance Brokers",
    "marketCap": 2435294,
    "totalShares": 33461
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
    "marketCap": 738865,
    "totalShares": 10760
  },
  {
    "name": "Bunge Global",
    "symbol": "BG",
    "description": "Constituyente del S&P 500. Sector: Agricultural Products & Services. Precio referencial: US$113.25.",
    "sector": "Agricultural Products & Services",
    "marketCap": 2175749,
    "totalShares": 19212
  },
  {
    "name": "BXP, Inc.",
    "symbol": "BXP",
    "description": "Constituyente del S&P 500. Sector: Office REITs. Precio referencial: US$70.30.",
    "sector": "Office REITs",
    "marketCap": 1271568,
    "totalShares": 18088
  },
  {
    "name": "C.H. Robinson",
    "symbol": "CHRW",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics. Precio referencial: US$151.73.",
    "sector": "Air Freight & Logistics",
    "marketCap": 1772984,
    "totalShares": 11685
  },
  {
    "name": "Cadence Design Systems",
    "symbol": "CDNS",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$334.68.",
    "sector": "Application Software",
    "marketCap": 9216853,
    "totalShares": 27539
  },
  {
    "name": "Caesars Entertainment",
    "symbol": "CZR",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming. Precio referencial: US$29.66.",
    "sector": "Casinos & Gaming",
    "marketCap": 604404,
    "totalShares": 20378
  },
  {
    "name": "Camden Property Trust",
    "symbol": "CPT",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$107.61.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 1245398,
    "totalShares": 11573
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
    "marketCap": 13325505,
    "totalShares": 61348
  },
  {
    "name": "Cardinal Health",
    "symbol": "CAH",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors. Precio referencial: US$238.40.",
    "sector": "Health Care Distributors",
    "marketCap": 5544605,
    "totalShares": 23258
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
    "marketCap": 3504932,
    "totalShares": 136965
  },
  {
    "name": "Carrier Global",
    "symbol": "CARR",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$58.74.",
    "sector": "Building Products",
    "marketCap": 4842086,
    "totalShares": 82433
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
    "marketCap": 37782058,
    "totalShares": 45967
  },
  {
    "name": "Cboe Global Markets",
    "symbol": "CBOE",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$312.19.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 3260232,
    "totalShares": 10443
  },
  {
    "name": "CBRE Group",
    "symbol": "CBRE",
    "description": "Constituyente del S&P 500. Sector: Real Estate Services. Precio referencial: US$150.36.",
    "sector": "Real Estate Services",
    "marketCap": 4354054,
    "totalShares": 28958
  },
  {
    "name": "CDW",
    "symbol": "CDW",
    "description": "Constituyente del S&P 500. Sector: Technology Distributors. Precio referencial: US$141.46.",
    "sector": "Technology Distributors",
    "marketCap": 1768497,
    "totalShares": 12502
  },
  {
    "name": "Celanese",
    "symbol": "CE",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$44.70.",
    "sector": "Specialty Chemicals",
    "marketCap": 490578,
    "totalShares": 10975
  },
  {
    "name": "Cencora",
    "symbol": "COR",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors. Precio referencial: US$327.79.",
    "sector": "Health Care Distributors",
    "marketCap": 6255124,
    "totalShares": 19083
  },
  {
    "name": "Centene Corporation",
    "symbol": "CNC",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$65.47.",
    "sector": "Managed Health Care",
    "marketCap": 3234185,
    "totalShares": 49399
  },
  {
    "name": "CenterPoint Energy",
    "symbol": "CNP",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$39.59.",
    "sector": "Multi-Utilities",
    "marketCap": 2607873,
    "totalShares": 65872
  },
  {
    "name": "CF Industries",
    "symbol": "CF",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals. Precio referencial: US$125.70.",
    "sector": "Fertilizers & Agricultural Chemicals",
    "marketCap": 1902320,
    "totalShares": 15134
  },
  {
    "name": "Charles River Laboratories",
    "symbol": "CRL",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$295.10.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 1421430,
    "totalShares": 4817
  },
  {
    "name": "Charles Schwab Corporation",
    "symbol": "SCHW",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage. Precio referencial: US$109.39.",
    "sector": "Investment Banking & Brokerage",
    "marketCap": 18917202,
    "totalShares": 172934
  },
  {
    "name": "Charter Communications",
    "symbol": "CHTR",
    "description": "Constituyente del S&P 500. Sector: Cable & Satellite. Precio referencial: US$153.89.",
    "sector": "Cable & Satellite",
    "marketCap": 2074091,
    "totalShares": 13478
  },
  {
    "name": "Chevron Corporation",
    "symbol": "CVX",
    "description": "Constituyente del S&P 500. Sector: Integrated Oil & Gas. Precio referencial: US$200.21.",
    "sector": "Integrated Oil & Gas",
    "marketCap": 39273261,
    "totalShares": 196160
  },
  {
    "name": "Chipotle Mexican Grill",
    "symbol": "CMG",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$37.34.",
    "sector": "Restaurants",
    "marketCap": 4725071,
    "totalShares": 126542
  },
  {
    "name": "Chubb Limited",
    "symbol": "CB",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$343.77.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 13262642,
    "totalShares": 38580
  },
  {
    "name": "Church & Dwight",
    "symbol": "CHD",
    "description": "Constituyente del S&P 500. Sector: Household Products. Precio referencial: US$102.86.",
    "sector": "Household Products",
    "marketCap": 2439879,
    "totalShares": 23720
  },
  {
    "name": "Cigna",
    "symbol": "CI",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$280.87.",
    "sector": "Health Care Services",
    "marketCap": 7421723,
    "totalShares": 26424
  },
  {
    "name": "Cincinnati Financial",
    "symbol": "CINF",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$172.38.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 2645655,
    "totalShares": 15348
  },
  {
    "name": "Cintas",
    "symbol": "CTAS",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services. Precio referencial: US$205.78.",
    "sector": "Diversified Support Services",
    "marketCap": 8234689,
    "totalShares": 40017
  },
  {
    "name": "Cisco",
    "symbol": "CSCO",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment. Precio referencial: US$112.36.",
    "sector": "Communications Equipment",
    "marketCap": 44285959,
    "totalShares": 394143
  },
  {
    "name": "Citigroup",
    "symbol": "C",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$133.56.",
    "sector": "Diversified Banks",
    "marketCap": 22403845,
    "totalShares": 167744
  },
  {
    "name": "Citizens Financial Group",
    "symbol": "CFG",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$70.49.",
    "sector": "Regional Banks",
    "marketCap": 2968875,
    "totalShares": 42118
  },
  {
    "name": "Clorox",
    "symbol": "CLX",
    "description": "Constituyente del S&P 500. Sector: Household Products. Precio referencial: US$104.23.",
    "sector": "Household Products",
    "marketCap": 1260464,
    "totalShares": 12093
  },
  {
    "name": "CME Group",
    "symbol": "CME",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$280.98.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 10103458,
    "totalShares": 35958
  },
  {
    "name": "CMS Energy",
    "symbol": "CMS",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$69.23.",
    "sector": "Multi-Utilities",
    "marketCap": 2170895,
    "totalShares": 31358
  },
  {
    "name": "Coca-Cola Company (The)",
    "symbol": "KO",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages. Precio referencial: US$90.08.",
    "sector": "Soft Drinks & Non-alcoholic Beverages",
    "marketCap": 38757361,
    "totalShares": 430255
  },
  {
    "name": "Cognizant",
    "symbol": "CTSH",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$62.09.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 2796808,
    "totalShares": 45044
  },
  {
    "name": "Colgate-Palmolive",
    "symbol": "CL",
    "description": "Constituyente del S&P 500. Sector: Household Products. Precio referencial: US$92.06.",
    "sector": "Household Products",
    "marketCap": 7338773,
    "totalShares": 79717
  },
  {
    "name": "Comcast",
    "symbol": "CMCSA",
    "description": "Constituyente del S&P 500. Sector: Cable & Satellite. Precio referencial: US$27.20.",
    "sector": "Cable & Satellite",
    "marketCap": 9652292,
    "totalShares": 354864
  },
  {
    "name": "Conagra Brands",
    "symbol": "CAG",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$16.19.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 774798,
    "totalShares": 47857
  },
  {
    "name": "ConocoPhillips",
    "symbol": "COP",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$130.61.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 15690668,
    "totalShares": 120134
  },
  {
    "name": "Consolidated Edison",
    "symbol": "ED",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$108.05.",
    "sector": "Multi-Utilities",
    "marketCap": 3995999,
    "totalShares": 36983
  },
  {
    "name": "Constellation Brands",
    "symbol": "STZ",
    "description": "Constituyente del S&P 500. Sector: Distillers & Vintners. Precio referencial: US$134.45.",
    "sector": "Distillers & Vintners",
    "marketCap": 2296464,
    "totalShares": 17080
  },
  {
    "name": "Constellation Energy",
    "symbol": "CEG",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$279.52.",
    "sector": "Electric Utilities",
    "marketCap": 9903600,
    "totalShares": 35431
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
    "marketCap": 3024626,
    "totalShares": 92581
  },
  {
    "name": "Corning Inc.",
    "symbol": "GLW",
    "description": "Constituyente del S&P 500. Sector: Electronic Components. Precio referencial: US$152.78.",
    "sector": "Electronic Components",
    "marketCap": 13160292,
    "totalShares": 86139
  },
  {
    "name": "Corpay",
    "symbol": "CPAY",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$406.93.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 2671886,
    "totalShares": 6566
  },
  {
    "name": "Corteva",
    "symbol": "CTVA",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals. Precio referencial: US$82.88.",
    "sector": "Fertilizers & Agricultural Chemicals",
    "marketCap": 5529720,
    "totalShares": 66720
  },
  {
    "name": "CoStar Group",
    "symbol": "CSGP",
    "description": "Constituyente del S&P 500. Sector: Real Estate Services. Precio referencial: US$32.14.",
    "sector": "Real Estate Services",
    "marketCap": 1302305,
    "totalShares": 40520
  },
  {
    "name": "Costco",
    "symbol": "COST",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail. Precio referencial: US$956.12.",
    "sector": "Consumer Staples Merchandise Retail",
    "marketCap": 42401897,
    "totalShares": 44348
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
    "marketCap": 19263427,
    "totalShares": 101826
  },
  {
    "name": "Crown Castle",
    "symbol": "CCI",
    "description": "Constituyente del S&P 500. Sector: Telecom Tower REITs. Precio referencial: US$75.54.",
    "sector": "Telecom Tower REITs",
    "marketCap": 3301098,
    "totalShares": 43700
  },
  {
    "name": "CSX Corporation",
    "symbol": "CSX",
    "description": "Constituyente del S&P 500. Sector: Rail Transportation. Precio referencial: US$51.76.",
    "sector": "Rail Transportation",
    "marketCap": 9588410,
    "totalShares": 185247
  },
  {
    "name": "Cummins",
    "symbol": "CMI",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment. Precio referencial: US$578.14.",
    "sector": "Construction Machinery & Heavy Transportation Equipment",
    "marketCap": 7958934,
    "totalShares": 13766
  },
  {
    "name": "CVS Health",
    "symbol": "CVS",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$94.32.",
    "sector": "Health Care Services",
    "marketCap": 12063248,
    "totalShares": 127897
  },
  {
    "name": "D. R. Horton",
    "symbol": "DHI",
    "description": "Constituyente del S&P 500. Sector: Homebuilding. Precio referencial: US$149.25.",
    "sector": "Homebuilding",
    "marketCap": 4174542,
    "totalShares": 27970
  },
  {
    "name": "Danaher Corporation",
    "symbol": "DHR",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$215.36.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 15139507,
    "totalShares": 70299
  },
  {
    "name": "Darden Restaurants",
    "symbol": "DRI",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$218.81.",
    "sector": "Restaurants",
    "marketCap": 2484407,
    "totalShares": 11354
  },
  {
    "name": "DaVita",
    "symbol": "DVA",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$180.05.",
    "sector": "Health Care Services",
    "marketCap": 1148719,
    "totalShares": 6380
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
    "marketCap": 1218419,
    "totalShares": 13618
  },
  {
    "name": "Deere & Company",
    "symbol": "DE",
    "description": "Constituyente del S&P 500. Sector: Agricultural & Farm Machinery. Precio referencial: US$634.54.",
    "sector": "Agricultural & Farm Machinery",
    "marketCap": 17128610,
    "totalShares": 26994
  },
  {
    "name": "Dell Technologies",
    "symbol": "DELL",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$463.82.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 29969377,
    "totalShares": 64614
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
    "marketCap": 5151300,
    "totalShares": 110000
  },
  {
    "name": "Dexcom",
    "symbol": "DXCM",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$88.96.",
    "sector": "Health Care Equipment",
    "marketCap": 3357001,
    "totalShares": 37736
  },
  {
    "name": "Diamondback Energy",
    "symbol": "FANG",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$199.84.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 5595915,
    "totalShares": 28002
  },
  {
    "name": "Digital Realty",
    "symbol": "DLR",
    "description": "Constituyente del S&P 500. Sector: Data Center REITs. Precio referencial: US$193.43.",
    "sector": "Data Center REITs",
    "marketCap": 7305149,
    "totalShares": 37766
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
    "marketCap": 2708363,
    "totalShares": 22059
  },
  {
    "name": "Dollar Tree",
    "symbol": "DLTR",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail. Precio referencial: US$132.18.",
    "sector": "Consumer Staples Merchandise Retail",
    "marketCap": 2540164,
    "totalShares": 19217
  },
  {
    "name": "Dominion Energy",
    "symbol": "D",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$66.91.",
    "sector": "Multi-Utilities",
    "marketCap": 5884908,
    "totalShares": 87953
  },
  {
    "name": "Domino's",
    "symbol": "DPZ",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$344.56.",
    "sector": "Restaurants",
    "marketCap": 1139864,
    "totalShares": 3308
  },
  {
    "name": "Dover Corporation",
    "symbol": "DOV",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$204.66.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 2756366,
    "totalShares": 13468
  },
  {
    "name": "Dow Inc.",
    "symbol": "DOW",
    "description": "Constituyente del S&P 500. Sector: Commodity Chemicals. Precio referencial: US$30.33.",
    "sector": "Commodity Chemicals",
    "marketCap": 2190859,
    "totalShares": 72234
  },
  {
    "name": "DTE Energy",
    "symbol": "DTE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$137.71.",
    "sector": "Multi-Utilities",
    "marketCap": 2865581,
    "totalShares": 20809
  },
  {
    "name": "Duke Energy",
    "symbol": "DUK",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$121.89.",
    "sector": "Electric Utilities",
    "marketCap": 9503790,
    "totalShares": 77970
  },
  {
    "name": "DuPont",
    "symbol": "DD",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$137.98.",
    "sector": "Specialty Chemicals",
    "marketCap": 1863323,
    "totalShares": 13504
  },
  {
    "name": "Eastman Chemical Company",
    "symbol": "EMN",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$72.93.",
    "sector": "Specialty Chemicals",
    "marketCap": 833784,
    "totalShares": 11433
  },
  {
    "name": "Eaton Corporation",
    "symbol": "ETN",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$419.44.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 16291050,
    "totalShares": 38840
  },
  {
    "name": "eBay",
    "symbol": "EBAY",
    "description": "Constituyente del S&P 500. Sector: Broadline Retail. Precio referencial: US$104.20.",
    "sector": "Broadline Retail",
    "marketCap": 4636900,
    "totalShares": 44500
  },
  {
    "name": "Ecolab",
    "symbol": "ECL",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$290.60.",
    "sector": "Specialty Chemicals",
    "marketCap": 8146349,
    "totalShares": 28033
  },
  {
    "name": "Edison International",
    "symbol": "EIX",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$74.51.",
    "sector": "Electric Utilities",
    "marketCap": 2867249,
    "totalShares": 38481
  },
  {
    "name": "Edwards Lifesciences",
    "symbol": "EW",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$90.78.",
    "sector": "Health Care Equipment",
    "marketCap": 5232559,
    "totalShares": 57640
  },
  {
    "name": "Electronic Arts",
    "symbol": "EA",
    "description": "Constituyente del S&P 500. Sector: Interactive Home Entertainment. Precio referencial: US$209.70.",
    "sector": "Interactive Home Entertainment",
    "marketCap": 5292564,
    "totalShares": 25239
  },
  {
    "name": "Elevance Health",
    "symbol": "ELV",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$402.54.",
    "sector": "Managed Health Care",
    "marketCap": 8729857,
    "totalShares": 21687
  },
  {
    "name": "Emerson Electric",
    "symbol": "EMR",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$158.29.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 8829415,
    "totalShares": 55780
  },
  {
    "name": "Enphase Energy",
    "symbol": "ENPH",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$38.41.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 507634,
    "totalShares": 13214
  },
  {
    "name": "Entergy",
    "symbol": "ETR",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$107.23.",
    "sector": "Electric Utilities",
    "marketCap": 5003690,
    "totalShares": 46663
  },
  {
    "name": "EOG Resources",
    "symbol": "EOG",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$144.84.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 7597280,
    "totalShares": 52453
  },
  {
    "name": "EPAM Systems",
    "symbol": "EPAM",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$109.36.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 564155,
    "totalShares": 5159
  },
  {
    "name": "EQT Corporation",
    "symbol": "EQT",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$54.79.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 3427202,
    "totalShares": 62552
  },
  {
    "name": "Equifax",
    "symbol": "EFX",
    "description": "Constituyente del S&P 500. Sector: Research & Consulting Services. Precio referencial: US$190.56.",
    "sector": "Research & Consulting Services",
    "marketCap": 2238792,
    "totalShares": 11748
  },
  {
    "name": "Equinix",
    "symbol": "EQIX",
    "description": "Constituyente del S&P 500. Sector: Data Center REITs. Precio referencial: US$1079.61.",
    "sector": "Data Center REITs",
    "marketCap": 10652694,
    "totalShares": 9867
  },
  {
    "name": "Equity Residential",
    "symbol": "EQR",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$63.66.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 2461148,
    "totalShares": 38661
  },
  {
    "name": "Erie Indemnity",
    "symbol": "ERIE",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$257.27.",
    "sector": "Insurance Brokers",
    "marketCap": 1345261,
    "totalShares": 5229
  },
  {
    "name": "Essex Property Trust",
    "symbol": "ESS",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$288.17.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 1986439,
    "totalShares": 6893
  },
  {
    "name": "Estee Lauder Companies (The)",
    "symbol": "EL",
    "description": "Constituyente del S&P 500. Sector: Personal Care Products. Precio referencial: US$105.06.",
    "sector": "Personal Care Products",
    "marketCap": 3801056,
    "totalShares": 36180
  },
  {
    "name": "Everest Group",
    "symbol": "EG",
    "description": "Constituyente del S&P 500. Sector: Reinsurance. Precio referencial: US$379.78.",
    "sector": "Reinsurance",
    "marketCap": 1456180,
    "totalShares": 3834
  },
  {
    "name": "Evergy",
    "symbol": "EVRG",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$82.23.",
    "sector": "Electric Utilities",
    "marketCap": 1895954,
    "totalShares": 23057
  },
  {
    "name": "Eversource Energy",
    "symbol": "ES",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$71.67.",
    "sector": "Electric Utilities",
    "marketCap": 2699628,
    "totalShares": 37667
  },
  {
    "name": "Exelon",
    "symbol": "EXC",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$44.44.",
    "sector": "Electric Utilities",
    "marketCap": 4578449,
    "totalShares": 103025
  },
  {
    "name": "Expedia Group",
    "symbol": "EXPE",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$333.44.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 4002016,
    "totalShares": 12002
  },
  {
    "name": "Expeditors International",
    "symbol": "EXPD",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics. Precio referencial: US$190.18.",
    "sector": "Air Freight & Logistics",
    "marketCap": 2472162,
    "totalShares": 12999
  },
  {
    "name": "Extra Space Storage",
    "symbol": "EXR",
    "description": "Constituyente del S&P 500. Sector: Self-Storage REITs. Precio referencial: US$144.09.",
    "sector": "Self-Storage REITs",
    "marketCap": 3180103,
    "totalShares": 22070
  },
  {
    "name": "ExxonMobil",
    "symbol": "XOM",
    "description": "Constituyente del S&P 500. Sector: Integrated Oil & Gas. Precio referencial: US$158.19.",
    "sector": "Integrated Oil & Gas",
    "marketCap": 65046335,
    "totalShares": 411191
  },
  {
    "name": "F5, Inc.",
    "symbol": "FFIV",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment. Precio referencial: US$399.59.",
    "sector": "Communications Equipment",
    "marketCap": 2262766,
    "totalShares": 5663
  },
  {
    "name": "FactSet",
    "symbol": "FDS",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$295.45.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 1050784,
    "totalShares": 3557
  },
  {
    "name": "Fair Isaac",
    "symbol": "FICO",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$1133.70.",
    "sector": "Application Software",
    "marketCap": 2448524,
    "totalShares": 2160
  },
  {
    "name": "Fastenal",
    "symbol": "FAST",
    "description": "Constituyente del S&P 500. Sector: Trading Companies & Distributors. Precio referencial: US$51.15.",
    "sector": "Trading Companies & Distributors",
    "marketCap": 5869450,
    "totalShares": 114750
  },
  {
    "name": "Federal Realty Investment Trust",
    "symbol": "FRT",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$117.58.",
    "sector": "Retail REITs",
    "marketCap": 1027865,
    "totalShares": 8742
  },
  {
    "name": "FedEx",
    "symbol": "FDX",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics. Precio referencial: US$335.99.",
    "sector": "Air Freight & Logistics",
    "marketCap": 7951890,
    "totalShares": 23667
  },
  {
    "name": "Fidelity National Information Services",
    "symbol": "FIS",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$40.64.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 2095829,
    "totalShares": 51571
  },
  {
    "name": "Fifth Third Bancorp",
    "symbol": "FITB",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$55.10.",
    "sector": "Regional Banks",
    "marketCap": 4996978,
    "totalShares": 90689
  },
  {
    "name": "First Solar",
    "symbol": "FSLR",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$205.93.",
    "sector": "Semiconductors",
    "marketCap": 2213125,
    "totalShares": 10747
  },
  {
    "name": "FirstEnergy",
    "symbol": "FE",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$46.73.",
    "sector": "Electric Utilities",
    "marketCap": 2703984,
    "totalShares": 57864
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
    "marketCap": 138751,
    "totalShares": 12523
  },
  {
    "name": "Ford Motor Company",
    "symbol": "F",
    "description": "Constituyente del S&P 500. Sector: Automobile Manufacturers. Precio referencial: US$13.90.",
    "sector": "Automobile Manufacturers",
    "marketCap": 5542758,
    "totalShares": 398760
  },
  {
    "name": "Fortinet",
    "symbol": "FTNT",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$157.54.",
    "sector": "Systems Software",
    "marketCap": 11558924,
    "totalShares": 73371
  },
  {
    "name": "Fortive",
    "symbol": "FTV",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$60.25.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 1819653,
    "totalShares": 30202
  },
  {
    "name": "Fox Corporation (Class A)",
    "symbol": "FOXA",
    "description": "Constituyente del S&P 500. Sector: Broadcasting. Precio referencial: US$69.60.",
    "sector": "Broadcasting",
    "marketCap": 2926245,
    "totalShares": 42044
  },
  {
    "name": "Fox Corporation (Class B)",
    "symbol": "FOX",
    "description": "Constituyente del S&P 500. Sector: Broadcasting. Precio referencial: US$62.23.",
    "sector": "Broadcasting",
    "marketCap": 2616382,
    "totalShares": 42044
  },
  {
    "name": "Franklin Resources",
    "symbol": "BEN",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$35.01.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 1778777,
    "totalShares": 50808
  },
  {
    "name": "Freeport-McMoRan",
    "symbol": "FCX",
    "description": "Constituyente del S&P 500. Sector: Copper. Precio referencial: US$79.00.",
    "sector": "Copper",
    "marketCap": 11344539,
    "totalShares": 143602
  },
  {
    "name": "Garmin",
    "symbol": "GRMN",
    "description": "Constituyente del S&P 500. Sector: Consumer Electronics. Precio referencial: US$289.02.",
    "sector": "Consumer Electronics",
    "marketCap": 5573824,
    "totalShares": 19285
  },
  {
    "name": "Gartner",
    "symbol": "IT",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$192.96.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 1218523,
    "totalShares": 6315
  },
  {
    "name": "GE Aerospace",
    "symbol": "GE",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$354.39.",
    "sector": "Aerospace & Defense",
    "marketCap": 36770179,
    "totalShares": 103756
  },
  {
    "name": "GE HealthCare",
    "symbol": "GEHC",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$73.31.",
    "sector": "Health Care Equipment",
    "marketCap": 3311312,
    "totalShares": 45169
  },
  {
    "name": "GE Vernova",
    "symbol": "GEV",
    "description": "Constituyente del S&P 500. Sector: Heavy Electrical Equipment. Precio referencial: US$953.09.",
    "sector": "Heavy Electrical Equipment",
    "marketCap": 25383988,
    "totalShares": 26633
  },
  {
    "name": "Gen Digital",
    "symbol": "GEN",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$29.64.",
    "sector": "Systems Software",
    "marketCap": 1774212,
    "totalShares": 59859
  },
  {
    "name": "Generac",
    "symbol": "GNRC",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$206.62.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 1219189,
    "totalShares": 5901
  },
  {
    "name": "General Dynamics",
    "symbol": "GD",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$382.02.",
    "sector": "Aerospace & Defense",
    "marketCap": 10335825,
    "totalShares": 27056
  },
  {
    "name": "General Mills",
    "symbol": "GIS",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$40.08.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 2142795,
    "totalShares": 53463
  },
  {
    "name": "General Motors",
    "symbol": "GM",
    "description": "Constituyente del S&P 500. Sector: Automobile Manufacturers. Precio referencial: US$86.33.",
    "sector": "Automobile Manufacturers",
    "marketCap": 7808130,
    "totalShares": 90445
  },
  {
    "name": "Genuine Parts Company",
    "symbol": "GPC",
    "description": "Constituyente del S&P 500. Sector: Distributors. Precio referencial: US$139.49.",
    "sector": "Distributors",
    "marketCap": 1923006,
    "totalShares": 13786
  },
  {
    "name": "Gilead Sciences",
    "symbol": "GILD",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$148.09.",
    "sector": "Biotechnology",
    "marketCap": 18362496,
    "totalShares": 123996
  },
  {
    "name": "Global Payments",
    "symbol": "GPN",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$92.96.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 2459893,
    "totalShares": 26462
  },
  {
    "name": "Globe Life",
    "symbol": "GL",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$175.55.",
    "sector": "Life & Health Insurance",
    "marketCap": 1349092,
    "totalShares": 7685
  },
  {
    "name": "GoDaddy",
    "symbol": "GDDY",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure. Precio referencial: US$95.54.",
    "sector": "Internet Services & Infrastructure",
    "marketCap": 1209992,
    "totalShares": 12665
  },
  {
    "name": "Goldman Sachs",
    "symbol": "GS",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage. Precio referencial: US$1040.46.",
    "sector": "Investment Banking & Brokerage",
    "marketCap": 30295219,
    "totalShares": 29117
  },
  {
    "name": "Halliburton",
    "symbol": "HAL",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Equipment & Services. Precio referencial: US$34.44.",
    "sector": "Oil & Gas Equipment & Services",
    "marketCap": 2869301,
    "totalShares": 83313
  },
  {
    "name": "Hartford (The)",
    "symbol": "HIG",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$139.86.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 3788416,
    "totalShares": 27087
  },
  {
    "name": "Hasbro",
    "symbol": "HAS",
    "description": "Constituyente del S&P 500. Sector: Leisure Products. Precio referencial: US$96.29.",
    "sector": "Leisure Products",
    "marketCap": 1358117,
    "totalShares": 14104
  },
  {
    "name": "HCA Healthcare",
    "symbol": "HCA",
    "description": "Constituyente del S&P 500. Sector: Health Care Facilities. Precio referencial: US$427.16.",
    "sector": "Health Care Facilities",
    "marketCap": 9248078,
    "totalShares": 21650
  },
  {
    "name": "Healthpeak Properties",
    "symbol": "DOC",
    "description": "Constituyente del S&P 500. Sector: Health Care REITs. Precio referencial: US$21.58.",
    "sector": "Health Care REITs",
    "marketCap": 1529908,
    "totalShares": 70895
  },
  {
    "name": "Henry Schein",
    "symbol": "HSIC",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors. Precio referencial: US$90.38.",
    "sector": "Health Care Distributors",
    "marketCap": 1007254,
    "totalShares": 11145
  },
  {
    "name": "Hershey Company (The)",
    "symbol": "HSY",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$185.35.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 3724157,
    "totalShares": 20093
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
    "marketCap": 7313576,
    "totalShares": 132420
  },
  {
    "name": "Hilton Worldwide",
    "symbol": "HLT",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$332.56.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 7484758,
    "totalShares": 22506
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
    "marketCap": 33407638,
    "totalShares": 99769
  },
  {
    "name": "Honeywell",
    "symbol": "HON",
    "description": "Constituyente del S&P 500. Sector: Industrial Conglomerates. Precio referencial: US$220.67.",
    "sector": "Industrial Conglomerates",
    "marketCap": 6993915,
    "totalShares": 31694
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
    "marketCap": 1558271,
    "totalShares": 69473
  },
  {
    "name": "Howmet Aerospace",
    "symbol": "HWM",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$269.34.",
    "sector": "Aerospace & Defense",
    "marketCap": 10741317,
    "totalShares": 39880
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
    "marketCap": 2496128,
    "totalShares": 5283
  },
  {
    "name": "Humana",
    "symbol": "HUM",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$391.06.",
    "sector": "Managed Health Care",
    "marketCap": 4695860,
    "totalShares": 12008
  },
  {
    "name": "Huntington Bancshares",
    "symbol": "HBAN",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$17.04.",
    "sector": "Regional Banks",
    "marketCap": 3442787,
    "totalShares": 202041
  },
  {
    "name": "Huntington Ingalls Industries",
    "symbol": "HII",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$296.40.",
    "sector": "Aerospace & Defense",
    "marketCap": 1167952,
    "totalShares": 3940
  },
  {
    "name": "IBM",
    "symbol": "IBM",
    "description": "Constituyente del S&P 500. Sector: IT Consulting & Other Services. Precio referencial: US$229.87.",
    "sector": "IT Consulting & Other Services",
    "marketCap": 21656843,
    "totalShares": 94213
  },
  {
    "name": "IDEX Corporation",
    "symbol": "IEX",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$234.89.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 1731607,
    "totalShares": 7372
  },
  {
    "name": "Idexx Laboratories",
    "symbol": "IDXX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$553.44.",
    "sector": "Health Care Equipment",
    "marketCap": 4360062,
    "totalShares": 7878
  },
  {
    "name": "Illinois Tool Works",
    "symbol": "ITW",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$285.51.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 8131325,
    "totalShares": 28480
  },
  {
    "name": "Incyte",
    "symbol": "INCY",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$128.12.",
    "sector": "Biotechnology",
    "marketCap": 2596963,
    "totalShares": 20270
  },
  {
    "name": "Ingersoll Rand",
    "symbol": "IR",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$79.97.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 3102831,
    "totalShares": 38800
  },
  {
    "name": "Insulet Corporation",
    "symbol": "PODD",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$143.38.",
    "sector": "Health Care Equipment",
    "marketCap": 994401,
    "totalShares": 6935
  },
  {
    "name": "Intel",
    "symbol": "INTC",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$88.24.",
    "sector": "Semiconductors",
    "marketCap": 46644589,
    "totalShares": 528610
  },
  {
    "name": "Intercontinental Exchange",
    "symbol": "ICE",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$161.92.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 9090100,
    "totalShares": 56139
  },
  {
    "name": "International Flavors & Fragrances",
    "symbol": "IFF",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$87.12.",
    "sector": "Specialty Chemicals",
    "marketCap": 2222867,
    "totalShares": 25515
  },
  {
    "name": "International Paper",
    "symbol": "IP",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$41.39.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 2191890,
    "totalShares": 52957
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
    "marketCap": 9461097,
    "totalShares": 27354
  },
  {
    "name": "Intuitive Surgical",
    "symbol": "ISRG",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$370.42.",
    "sector": "Health Care Equipment",
    "marketCap": 13271336,
    "totalShares": 35828
  },
  {
    "name": "Invesco",
    "symbol": "IVZ",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$32.98.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 1456066,
    "totalShares": 44150
  },
  {
    "name": "Invitation Homes",
    "symbol": "INVH",
    "description": "Constituyente del S&P 500. Sector: Single-Family Residential REITs. Precio referencial: US$29.89.",
    "sector": "Single-Family Residential REITs",
    "marketCap": 1775591,
    "totalShares": 59404
  },
  {
    "name": "IQVIA",
    "symbol": "IQV",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$261.51.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 4304455,
    "totalShares": 16460
  },
  {
    "name": "Iron Mountain",
    "symbol": "IRM",
    "description": "Constituyente del S&P 500. Sector: Other Specialized REITs. Precio referencial: US$121.43.",
    "sector": "Other Specialized REITs",
    "marketCap": 3615005,
    "totalShares": 29770
  },
  {
    "name": "J.B. Hunt",
    "symbol": "JBHT",
    "description": "Constituyente del S&P 500. Sector: Cargo Ground Transportation. Precio referencial: US$263.64.",
    "sector": "Cargo Ground Transportation",
    "marketCap": 2475973,
    "totalShares": 9391
  },
  {
    "name": "J.M. Smucker Company (The)",
    "symbol": "SJM",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$130.90.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 1399068,
    "totalShares": 10688
  },
  {
    "name": "Jabil",
    "symbol": "JBL",
    "description": "Constituyente del S&P 500. Sector: Electronic Manufacturing Services. Precio referencial: US$310.91.",
    "sector": "Electronic Manufacturing Services",
    "marketCap": 3257935,
    "totalShares": 10479
  },
  {
    "name": "Jack Henry & Associates",
    "symbol": "JKHY",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$172.39.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 1224844,
    "totalShares": 7105
  },
  {
    "name": "Jacobs Solutions",
    "symbol": "J",
    "description": "Constituyente del S&P 500. Sector: Construction & Engineering. Precio referencial: US$151.52.",
    "sector": "Construction & Engineering",
    "marketCap": 1773369,
    "totalShares": 11704
  },
  {
    "name": "Johnson & Johnson",
    "symbol": "JNJ",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$270.00.",
    "sector": "Pharmaceuticals",
    "marketCap": 65067260,
    "totalShares": 240990
  },
  {
    "name": "Johnson Controls",
    "symbol": "JCI",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$144.33.",
    "sector": "Building Products",
    "marketCap": 8742666,
    "totalShares": 60574
  },
  {
    "name": "JPMorgan Chase",
    "symbol": "JPM",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$356.50.",
    "sector": "Diversified Banks",
    "marketCap": 94764342,
    "totalShares": 265819
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
    "marketCap": 3691726,
    "totalShares": 192077
  },
  {
    "name": "Keurig Dr Pepper",
    "symbol": "KDP",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages. Precio referencial: US$32.20.",
    "sector": "Soft Drinks & Non-alcoholic Beverages",
    "marketCap": 4382540,
    "totalShares": 136083
  },
  {
    "name": "KeyCorp",
    "symbol": "KEY",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$22.09.",
    "sector": "Regional Banks",
    "marketCap": 2357287,
    "totalShares": 106713
  },
  {
    "name": "Keysight Technologies",
    "symbol": "KEYS",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$321.87.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 5481446,
    "totalShares": 17030
  },
  {
    "name": "Kimberly-Clark",
    "symbol": "KMB",
    "description": "Constituyente del S&P 500. Sector: Household Products. Precio referencial: US$110.34.",
    "sector": "Household Products",
    "marketCap": 3669677,
    "totalShares": 33258
  },
  {
    "name": "Kimco Realty",
    "symbol": "KIM",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$24.03.",
    "sector": "Retail REITs",
    "marketCap": 1611907,
    "totalShares": 67079
  },
  {
    "name": "Kinder Morgan",
    "symbol": "KMI",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation. Precio referencial: US$32.02.",
    "sector": "Oil & Gas Storage & Transportation",
    "marketCap": 7130221,
    "totalShares": 222680
  },
  {
    "name": "KKR",
    "symbol": "KKR",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$108.50.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 10020957,
    "totalShares": 92359
  },
  {
    "name": "KLA Corporation",
    "symbol": "KLAC",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$183.83.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 24018251,
    "totalShares": 130655
  },
  {
    "name": "Kraft Heinz",
    "symbol": "KHC",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$24.79.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 2939657,
    "totalShares": 118582
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
    "marketCap": 4896700,
    "totalShares": 18621
  },
  {
    "name": "LabCorp",
    "symbol": "LH",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$335.72.",
    "sector": "Health Care Services",
    "marketCap": 2722689,
    "totalShares": 8110
  },
  {
    "name": "Lam Research",
    "symbol": "LRCX",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$312.88.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 39151331,
    "totalShares": 125132
  },
  {
    "name": "Lamb Weston",
    "symbol": "LW",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$55.26.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 759732,
    "totalShares": 13748
  },
  {
    "name": "Las Vegas Sands",
    "symbol": "LVS",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming. Precio referencial: US$46.23.",
    "sector": "Casinos & Gaming",
    "marketCap": 2994323,
    "totalShares": 64770
  },
  {
    "name": "Leidos",
    "symbol": "LDOS",
    "description": "Constituyente del S&P 500. Sector: Diversified Support Services. Precio referencial: US$137.43.",
    "sector": "Diversified Support Services",
    "marketCap": 1724639,
    "totalShares": 12549
  },
  {
    "name": "Lennar",
    "symbol": "LEN",
    "description": "Constituyente del S&P 500. Sector: Homebuilding. Precio referencial: US$87.15.",
    "sector": "Homebuilding",
    "marketCap": 2099401,
    "totalShares": 24090
  },
  {
    "name": "Lilly (Eli)",
    "symbol": "LLY",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$1189.41.",
    "sector": "Pharmaceuticals",
    "marketCap": 106064616,
    "totalShares": 89174
  },
  {
    "name": "Linde plc",
    "symbol": "LIN",
    "description": "Constituyente del S&P 500. Sector: Industrial Gases. Precio referencial: US$490.33.",
    "sector": "Industrial Gases",
    "marketCap": 22603240,
    "totalShares": 46098
  },
  {
    "name": "Live Nation Entertainment",
    "symbol": "LYV",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment. Precio referencial: US$182.64.",
    "sector": "Movies & Entertainment",
    "marketCap": 4254772,
    "totalShares": 23296
  },
  {
    "name": "LKQ Corporation",
    "symbol": "LKQ",
    "description": "Constituyente del S&P 500. Sector: Distributors. Precio referencial: US$25.75.",
    "sector": "Distributors",
    "marketCap": 651480,
    "totalShares": 25300
  },
  {
    "name": "Lockheed Martin",
    "symbol": "LMT",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$565.62.",
    "sector": "Aerospace & Defense",
    "marketCap": 13053986,
    "totalShares": 23079
  },
  {
    "name": "Loews Corporation",
    "symbol": "L",
    "description": "Constituyente del S&P 500. Sector: Multi-line Insurance. Precio referencial: US$110.96.",
    "sector": "Multi-line Insurance",
    "marketCap": 2268330,
    "totalShares": 20443
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
    "marketCap": 1321200,
    "totalShares": 11355
  },
  {
    "name": "LyondellBasell",
    "symbol": "LYB",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$62.62.",
    "sector": "Specialty Chemicals",
    "marketCap": 2022864,
    "totalShares": 32304
  },
  {
    "name": "M&T Bank",
    "symbol": "MTB",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$241.54.",
    "sector": "Regional Banks",
    "marketCap": 3488230,
    "totalShares": 14442
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
    "marketCap": 10173438,
    "totalShares": 28082
  },
  {
    "name": "MarketAxess",
    "symbol": "MKTX",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$162.52.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 571955,
    "totalShares": 3519
  },
  {
    "name": "Marriott International",
    "symbol": "MAR",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$358.67.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 9352905,
    "totalShares": 26077
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
    "marketCap": 3779509,
    "totalShares": 7102
  },
  {
    "name": "Masco",
    "symbol": "MAS",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$73.60.",
    "sector": "Building Products",
    "marketCap": 1451299,
    "totalShares": 19719
  },
  {
    "name": "Mastercard",
    "symbol": "MA",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$598.47.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 52426562,
    "totalShares": 87601
  },
  {
    "name": "Match Group",
    "symbol": "MTCH",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services. Precio referencial: US$42.07.",
    "sector": "Interactive Media & Services",
    "marketCap": 981352,
    "totalShares": 23327
  },
  {
    "name": "McCormick & Company",
    "symbol": "MKC",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$55.10.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 1481372,
    "totalShares": 26885
  },
  {
    "name": "McDonald's",
    "symbol": "MCD",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$266.93.",
    "sector": "Restaurants",
    "marketCap": 18889074,
    "totalShares": 70764
  },
  {
    "name": "McKesson Corporation",
    "symbol": "MCK",
    "description": "Constituyente del S&P 500. Sector: Health Care Distributors. Precio referencial: US$896.65.",
    "sector": "Health Care Distributors",
    "marketCap": 10454075,
    "totalShares": 11659
  },
  {
    "name": "Medtronic",
    "symbol": "MDT",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$92.02.",
    "sector": "Health Care Equipment",
    "marketCap": 11778383,
    "totalShares": 127998
  },
  {
    "name": "Merck & Co.",
    "symbol": "MRK",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$153.10.",
    "sector": "Pharmaceuticals",
    "marketCap": 37772398,
    "totalShares": 246717
  },
  {
    "name": "Meta Platforms",
    "symbol": "META",
    "description": "Constituyente del S&P 500. Sector: Interactive Media & Services. Precio referencial: US$576.14.",
    "sector": "Interactive Media & Services",
    "marketCap": 146772027,
    "totalShares": 254751
  },
  {
    "name": "MetLife",
    "symbol": "MET",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$96.52.",
    "sector": "Life & Health Insurance",
    "marketCap": 6133623,
    "totalShares": 63548
  },
  {
    "name": "Mettler Toledo",
    "symbol": "MTD",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$1398.46.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 2802033,
    "totalShares": 2004
  },
  {
    "name": "MGM Resorts",
    "symbol": "MGM",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming. Precio referencial: US$43.46.",
    "sector": "Casinos & Gaming",
    "marketCap": 1111929,
    "totalShares": 25585
  },
  {
    "name": "Microchip Technology",
    "symbol": "MCHP",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$74.05.",
    "sector": "Semiconductors",
    "marketCap": 4020980,
    "totalShares": 54301
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
    "marketCap": 368581804,
    "totalShares": 742555
  },
  {
    "name": "Mid-America Apartment Communities",
    "symbol": "MAA",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$131.50.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 1564374,
    "totalShares": 11896
  },
  {
    "name": "Moderna",
    "symbol": "MRNA",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$149.66.",
    "sector": "Biotechnology",
    "marketCap": 5974965,
    "totalShares": 39924
  },
  {
    "name": "Mohawk Industries",
    "symbol": "MHK",
    "description": "Constituyente del S&P 500. Sector: Home Furnishings. Precio referencial: US$132.17.",
    "sector": "Home Furnishings",
    "marketCap": 895295,
    "totalShares": 6774
  },
  {
    "name": "Molina Healthcare",
    "symbol": "MOH",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$202.43.",
    "sector": "Managed Health Care",
    "marketCap": 1056685,
    "totalShares": 5220
  },
  {
    "name": "Molson Coors Beverage Company",
    "symbol": "TAP",
    "description": "Constituyente del S&P 500. Sector: Brewers. Precio referencial: US$42.09.",
    "sector": "Brewers",
    "marketCap": 784785,
    "totalShares": 18645
  },
  {
    "name": "Mondelez International",
    "symbol": "MDLZ",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$63.01.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 8042017,
    "totalShares": 127631
  },
  {
    "name": "Monolithic Power Systems",
    "symbol": "MPWR",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$1303.88.",
    "sector": "Semiconductors",
    "marketCap": 6407657,
    "totalShares": 4914
  },
  {
    "name": "Monster Beverage",
    "symbol": "MNST",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages. Precio referencial: US$47.81.",
    "sector": "Soft Drinks & Non-alcoholic Beverages",
    "marketCap": 9366227,
    "totalShares": 195905
  },
  {
    "name": "Moody's Corporation",
    "symbol": "MCO",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$514.55.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 8911027,
    "totalShares": 17318
  },
  {
    "name": "Morgan Stanley",
    "symbol": "MS",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage. Precio referencial: US$214.08.",
    "sector": "Investment Banking & Brokerage",
    "marketCap": 33622684,
    "totalShares": 157057
  },
  {
    "name": "Mosaic Company (The)",
    "symbol": "MOS",
    "description": "Constituyente del S&P 500. Sector: Fertilizers & Agricultural Chemicals. Precio referencial: US$24.16.",
    "sector": "Fertilizers & Agricultural Chemicals",
    "marketCap": 768036,
    "totalShares": 31790
  },
  {
    "name": "Motorola Solutions",
    "symbol": "MSI",
    "description": "Constituyente del S&P 500. Sector: Communications Equipment. Precio referencial: US$487.28.",
    "sector": "Communications Equipment",
    "marketCap": 8064182,
    "totalShares": 16549
  },
  {
    "name": "MSCI",
    "symbol": "MSCI",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$564.22.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 4101879,
    "totalShares": 7270
  },
  {
    "name": "Nasdaq, Inc.",
    "symbol": "NDAQ",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$99.47.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 5560148,
    "totalShares": 55898
  },
  {
    "name": "NetApp",
    "symbol": "NTAP",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$193.85.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 3804001,
    "totalShares": 19623
  },
  {
    "name": "Netflix",
    "symbol": "NFLX",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment. Precio referencial: US$81.46.",
    "sector": "Movies & Entertainment",
    "marketCap": 33919451,
    "totalShares": 416394
  },
  {
    "name": "Newmont",
    "symbol": "NEM",
    "description": "Constituyente del S&P 500. Sector: Gold. Precio referencial: US$131.60.",
    "sector": "Gold",
    "marketCap": 13866592,
    "totalShares": 105369
  },
  {
    "name": "News Corp (Class A)",
    "symbol": "NWSA",
    "description": "Constituyente del S&P 500. Sector: Publishing. Precio referencial: US$30.96.",
    "sector": "Publishing",
    "marketCap": 1663273,
    "totalShares": 53723
  },
  {
    "name": "News Corp (Class B)",
    "symbol": "NWS",
    "description": "Constituyente del S&P 500. Sector: Publishing. Precio referencial: US$35.24.",
    "sector": "Publishing",
    "marketCap": 1893209,
    "totalShares": 53723
  },
  {
    "name": "NextEra Energy",
    "symbol": "NEE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$84.22.",
    "sector": "Multi-Utilities",
    "marketCap": 17568109,
    "totalShares": 208598
  },
  {
    "name": "Nike, Inc.",
    "symbol": "NKE",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods. Precio referencial: US$38.59.",
    "sector": "Apparel, Accessories & Luxury Goods",
    "marketCap": 5724822,
    "totalShares": 148350
  },
  {
    "name": "NiSource",
    "symbol": "NI",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$41.13.",
    "sector": "Multi-Utilities",
    "marketCap": 1972431,
    "totalShares": 47956
  },
  {
    "name": "Nordson Corporation",
    "symbol": "NDSN",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$334.58.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 1863589,
    "totalShares": 5570
  },
  {
    "name": "Norfolk Southern Railway",
    "symbol": "NSC",
    "description": "Constituyente del S&P 500. Sector: Rail Transportation. Precio referencial: US$352.68.",
    "sector": "Rail Transportation",
    "marketCap": 7921488,
    "totalShares": 22461
  },
  {
    "name": "Northern Trust",
    "symbol": "NTRS",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$187.66.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 3433346,
    "totalShares": 18296
  },
  {
    "name": "Northrop Grumman",
    "symbol": "NOC",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$549.95.",
    "sector": "Aerospace & Defense",
    "marketCap": 7812756,
    "totalShares": 14206
  },
  {
    "name": "Norwegian Cruise Line Holdings",
    "symbol": "NCLH",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$17.09.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 784752,
    "totalShares": 45919
  },
  {
    "name": "NRG Energy",
    "symbol": "NRG",
    "description": "Constituyente del S&P 500. Sector: Independent Power Producers & Energy Traders. Precio referencial: US$116.14.",
    "sector": "Independent Power Producers & Energy Traders",
    "marketCap": 2441385,
    "totalShares": 21021
  },
  {
    "name": "Nucor",
    "symbol": "NUE",
    "description": "Constituyente del S&P 500. Sector: Steel. Precio referencial: US$252.80.",
    "sector": "Steel",
    "marketCap": 5735417,
    "totalShares": 22688
  },
  {
    "name": "Nvidia",
    "symbol": "NVDA",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$209.66.",
    "sector": "Semiconductors",
    "marketCap": 507817492,
    "totalShares": 2422100
  },
  {
    "name": "NVR, Inc.",
    "symbol": "NVR",
    "description": "Constituyente del S&P 500. Sector: Homebuilding. Precio referencial: US$6368.12.",
    "sector": "Homebuilding",
    "marketCap": 1705480,
    "totalShares": 268
  },
  {
    "name": "NXP Semiconductors",
    "symbol": "NXPI",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$223.15.",
    "sector": "Semiconductors",
    "marketCap": 5627043,
    "totalShares": 25216
  },
  {
    "name": "O'Reilly Auto Parts",
    "symbol": "ORLY",
    "description": "Constituyente del S&P 500. Sector: Automotive Retail. Precio referencial: US$89.55.",
    "sector": "Automotive Retail",
    "marketCap": 7244244,
    "totalShares": 80896
  },
  {
    "name": "Occidental Petroleum",
    "symbol": "OXY",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Exploration & Production. Precio referencial: US$58.62.",
    "sector": "Oil & Gas Exploration & Production",
    "marketCap": 5859874,
    "totalShares": 99964
  },
  {
    "name": "Old Dominion",
    "symbol": "ODFL",
    "description": "Constituyente del S&P 500. Sector: Cargo Ground Transportation. Precio referencial: US$199.43.",
    "sector": "Cargo Ground Transportation",
    "marketCap": 4147511,
    "totalShares": 20797
  },
  {
    "name": "Omnicom Group",
    "symbol": "OMC",
    "description": "Constituyente del S&P 500. Sector: Advertising. Precio referencial: US$87.89.",
    "sector": "Advertising",
    "marketCap": 2411227,
    "totalShares": 27435
  },
  {
    "name": "ON Semiconductor",
    "symbol": "ON",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$73.22.",
    "sector": "Semiconductors",
    "marketCap": 2850591,
    "totalShares": 38932
  },
  {
    "name": "ONEOK",
    "symbol": "OKE",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation. Precio referencial: US$94.90.",
    "sector": "Oil & Gas Storage & Transportation",
    "marketCap": 5982208,
    "totalShares": 63037
  },
  {
    "name": "Oracle Corporation",
    "symbol": "ORCL",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$148.87.",
    "sector": "Application Software",
    "marketCap": 42881571,
    "totalShares": 288047
  },
  {
    "name": "Otis Worldwide",
    "symbol": "OTIS",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$72.36.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 2754523,
    "totalShares": 38067
  },
  {
    "name": "Paccar",
    "symbol": "PCAR",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment. Precio referencial: US$129.23.",
    "sector": "Construction Machinery & Heavy Transportation Equipment",
    "marketCap": 6802214,
    "totalShares": 52636
  },
  {
    "name": "Packaging Corporation of America",
    "symbol": "PKG",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$246.68.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 2197877,
    "totalShares": 8910
  },
  {
    "name": "Palantir Technologies",
    "symbol": "PLTR",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure. Precio referencial: US$177.50.",
    "sector": "Internet Services & Infrastructure",
    "marketCap": 42654286,
    "totalShares": 240306
  },
  {
    "name": "Palo Alto Networks",
    "symbol": "PANW",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$339.31.",
    "sector": "Systems Software",
    "marketCap": 27653764,
    "totalShares": 81500
  },
  {
    "name": "Paramount Global",
    "symbol": "PARA",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment. Precio referencial: US$1.18.",
    "sector": "Movies & Entertainment",
    "marketCap": 419,
    "totalShares": 355
  },
  {
    "name": "Parker Hannifin",
    "symbol": "PH",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$1039.49.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 13102508,
    "totalShares": 12605
  },
  {
    "name": "Paychex",
    "symbol": "PAYX",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services. Precio referencial: US$124.88.",
    "sector": "Human Resource & Employment Services",
    "marketCap": 4441767,
    "totalShares": 35568
  },
  {
    "name": "Paycom",
    "symbol": "PAYC",
    "description": "Constituyente del S&P 500. Sector: Human Resource & Employment Services. Precio referencial: US$232.31.",
    "sector": "Human Resource & Employment Services",
    "marketCap": 1047059,
    "totalShares": 4507
  },
  {
    "name": "PayPal",
    "symbol": "PYPL",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$61.81.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 5287604,
    "totalShares": 85546
  },
  {
    "name": "Pentair",
    "symbol": "PNR",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$62.86.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 1003246,
    "totalShares": 15960
  },
  {
    "name": "PepsiCo",
    "symbol": "PEP",
    "description": "Constituyente del S&P 500. Sector: Soft Drinks & Non-alcoholic Beverages. Precio referencial: US$142.19.",
    "sector": "Soft Drinks & Non-alcoholic Beverages",
    "marketCap": 19423155,
    "totalShares": 136600
  },
  {
    "name": "Pfizer",
    "symbol": "PFE",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$28.30.",
    "sector": "Pharmaceuticals",
    "marketCap": 16130076,
    "totalShares": 569967
  },
  {
    "name": "PG&E Corporation",
    "symbol": "PCG",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$18.22.",
    "sector": "Multi-Utilities",
    "marketCap": 4012712,
    "totalShares": 220237
  },
  {
    "name": "Philip Morris International",
    "symbol": "PM",
    "description": "Constituyente del S&P 500. Sector: Tobacco. Precio referencial: US$194.10.",
    "sector": "Tobacco",
    "marketCap": 30252686,
    "totalShares": 155861
  },
  {
    "name": "Phillips 66",
    "symbol": "PSX",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Refining & Marketing. Precio referencial: US$242.23.",
    "sector": "Oil & Gas Refining & Marketing",
    "marketCap": 9711849,
    "totalShares": 40094
  },
  {
    "name": "Pinnacle West",
    "symbol": "PNW",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$98.69.",
    "sector": "Multi-Utilities",
    "marketCap": 1196095,
    "totalShares": 12120
  },
  {
    "name": "PNC Financial Services",
    "symbol": "PNC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$244.67.",
    "sector": "Diversified Banks",
    "marketCap": 9760955,
    "totalShares": 39894
  },
  {
    "name": "Pool Corporation",
    "symbol": "POOL",
    "description": "Constituyente del S&P 500. Sector: Distributors. Precio referencial: US$188.38.",
    "sector": "Distributors",
    "marketCap": 684587,
    "totalShares": 3634
  },
  {
    "name": "PPG Industries",
    "symbol": "PPG",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$114.42.",
    "sector": "Specialty Chemicals",
    "marketCap": 2543557,
    "totalShares": 22230
  },
  {
    "name": "PPL Corporation",
    "symbol": "PPL",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$35.02.",
    "sector": "Electric Utilities",
    "marketCap": 2635412,
    "totalShares": 75254
  },
  {
    "name": "Principal Financial Group",
    "symbol": "PFG",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$112.21.",
    "sector": "Life & Health Insurance",
    "marketCap": 2402468,
    "totalShares": 21410
  },
  {
    "name": "Procter & Gamble",
    "symbol": "PG",
    "description": "Constituyente del S&P 500. Sector: Personal Care Products. Precio referencial: US$145.00.",
    "sector": "Personal Care Products",
    "marketCap": 33704280,
    "totalShares": 232443
  },
  {
    "name": "Progressive Corporation",
    "symbol": "PGR",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$222.51.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 12930056,
    "totalShares": 58110
  },
  {
    "name": "Prologis",
    "symbol": "PLD",
    "description": "Constituyente del S&P 500. Sector: Industrial REITs. Precio referencial: US$142.59.",
    "sector": "Industrial REITs",
    "marketCap": 13861051,
    "totalShares": 97209
  },
  {
    "name": "Prudential Financial",
    "symbol": "PRU",
    "description": "Constituyente del S&P 500. Sector: Life & Health Insurance. Precio referencial: US$120.24.",
    "sector": "Life & Health Insurance",
    "marketCap": 4148280,
    "totalShares": 34500
  },
  {
    "name": "PTC Inc.",
    "symbol": "PTC",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$151.61.",
    "sector": "Application Software",
    "marketCap": 1645063,
    "totalShares": 10851
  },
  {
    "name": "Public Service Enterprise Group",
    "symbol": "PEG",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$74.03.",
    "sector": "Electric Utilities",
    "marketCap": 3689803,
    "totalShares": 49842
  },
  {
    "name": "Public Storage",
    "symbol": "PSA",
    "description": "Constituyente del S&P 500. Sector: Self-Storage REITs. Precio referencial: US$317.37.",
    "sector": "Self-Storage REITs",
    "marketCap": 5926749,
    "totalShares": 18675
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
    "marketCap": 839297,
    "totalShares": 8822
  },
  {
    "name": "Qualcomm",
    "symbol": "QCOM",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$163.72.",
    "sector": "Semiconductors",
    "marketCap": 17486286,
    "totalShares": 106806
  },
  {
    "name": "Quanta Services",
    "symbol": "PWR",
    "description": "Constituyente del S&P 500. Sector: Construction & Engineering. Precio referencial: US$616.73.",
    "sector": "Construction & Engineering",
    "marketCap": 9272127,
    "totalShares": 15034
  },
  {
    "name": "Quest Diagnostics",
    "symbol": "DGX",
    "description": "Constituyente del S&P 500. Sector: Health Care Services. Precio referencial: US$245.00.",
    "sector": "Health Care Services",
    "marketCap": 2704147,
    "totalShares": 11037
  },
  {
    "name": "Ralph Lauren Corporation",
    "symbol": "RL",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods. Precio referencial: US$362.32.",
    "sector": "Apparel, Accessories & Luxury Goods",
    "marketCap": 2158784,
    "totalShares": 5958
  },
  {
    "name": "Raymond James Financial",
    "symbol": "RJF",
    "description": "Constituyente del S&P 500. Sector: Investment Banking & Brokerage. Precio referencial: US$176.69.",
    "sector": "Investment Banking & Brokerage",
    "marketCap": 3394215,
    "totalShares": 19210
  },
  {
    "name": "Realty Income",
    "symbol": "O",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$62.26.",
    "sector": "Retail REITs",
    "marketCap": 5891154,
    "totalShares": 94622
  },
  {
    "name": "Regency Centers",
    "symbol": "REG",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$76.38.",
    "sector": "Retail REITs",
    "marketCap": 1427991,
    "totalShares": 18696
  },
  {
    "name": "Regeneron Pharmaceuticals",
    "symbol": "REGN",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$814.79.",
    "sector": "Biotechnology",
    "marketCap": 8388669,
    "totalShares": 10295
  },
  {
    "name": "Regions Financial Corporation",
    "symbol": "RF",
    "description": "Constituyente del S&P 500. Sector: Regional Banks. Precio referencial: US$30.70.",
    "sector": "Regional Banks",
    "marketCap": 2615424,
    "totalShares": 85193
  },
  {
    "name": "Republic Services",
    "symbol": "RSG",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services. Precio referencial: US$222.18.",
    "sector": "Environmental & Facilities Services",
    "marketCap": 6803440,
    "totalShares": 30621
  },
  {
    "name": "ResMed",
    "symbol": "RMD",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$235.69.",
    "sector": "Health Care Equipment",
    "marketCap": 3399883,
    "totalShares": 14425
  },
  {
    "name": "Revvity",
    "symbol": "RVTY",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$126.35.",
    "sector": "Health Care Equipment",
    "marketCap": 1409894,
    "totalShares": 11159
  },
  {
    "name": "Rockwell Automation",
    "symbol": "ROK",
    "description": "Constituyente del S&P 500. Sector: Electrical Components & Equipment. Precio referencial: US$431.75.",
    "sector": "Electrical Components & Equipment",
    "marketCap": 4804253,
    "totalShares": 11127
  },
  {
    "name": "Rollins, Inc.",
    "symbol": "ROL",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services. Precio referencial: US$36.70.",
    "sector": "Environmental & Facilities Services",
    "marketCap": 1765804,
    "totalShares": 48115
  },
  {
    "name": "Roper Technologies",
    "symbol": "ROP",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$413.28.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 4087375,
    "totalShares": 9890
  },
  {
    "name": "Ross Stores",
    "symbol": "ROST",
    "description": "Constituyente del S&P 500. Sector: Apparel Retail. Precio referencial: US$236.27.",
    "sector": "Apparel Retail",
    "marketCap": 7579095,
    "totalShares": 32078
  },
  {
    "name": "Royal Caribbean Group",
    "symbol": "RCL",
    "description": "Constituyente del S&P 500. Sector: Hotels, Resorts & Cruise Lines. Precio referencial: US$290.00.",
    "sector": "Hotels, Resorts & Cruise Lines",
    "marketCap": 7756110,
    "totalShares": 26745
  },
  {
    "name": "RTX Corporation",
    "symbol": "RTX",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$211.99.",
    "sector": "Aerospace & Defense",
    "marketCap": 28571124,
    "totalShares": 134776
  },
  {
    "name": "S&P Global",
    "symbol": "SPGI",
    "description": "Constituyente del S&P 500. Sector: Financial Exchanges & Data. Precio referencial: US$436.49.",
    "sector": "Financial Exchanges & Data",
    "marketCap": 12867725,
    "totalShares": 29480
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
    "marketCap": 1973027,
    "totalShares": 10609
  },
  {
    "name": "Schlumberger",
    "symbol": "SLB",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Equipment & Services. Precio referencial: US$53.60.",
    "sector": "Oil & Gas Equipment & Services",
    "marketCap": 7955008,
    "totalShares": 148414
  },
  {
    "name": "Seagate Technology",
    "symbol": "STX",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$846.37.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 19182512,
    "totalShares": 22664
  },
  {
    "name": "Sempra",
    "symbol": "SRE",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$85.28.",
    "sector": "Multi-Utilities",
    "marketCap": 5576462,
    "totalShares": 65390
  },
  {
    "name": "ServiceNow",
    "symbol": "NOW",
    "description": "Constituyente del S&P 500. Sector: Systems Software. Precio referencial: US$125.80.",
    "sector": "Systems Software",
    "marketCap": 13005985,
    "totalShares": 103386
  },
  {
    "name": "Sherwin-Williams",
    "symbol": "SHW",
    "description": "Constituyente del S&P 500. Sector: Specialty Chemicals. Precio referencial: US$348.66.",
    "sector": "Specialty Chemicals",
    "marketCap": 8464006,
    "totalShares": 24276
  },
  {
    "name": "Simon Property Group",
    "symbol": "SPG",
    "description": "Constituyente del S&P 500. Sector: Retail REITs. Precio referencial: US$217.11.",
    "sector": "Retail REITs",
    "marketCap": 8242006,
    "totalShares": 37962
  },
  {
    "name": "Skyworks Solutions",
    "symbol": "SWKS",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$66.62.",
    "sector": "Semiconductors",
    "marketCap": 1002450,
    "totalShares": 15047
  },
  {
    "name": "Smurfit WestRock",
    "symbol": "SW",
    "description": "Constituyente del S&P 500. Sector: Paper & Plastic Packaging Products & Materials. Precio referencial: US$49.56.",
    "sector": "Paper & Plastic Packaging Products & Materials",
    "marketCap": 2599536,
    "totalShares": 52452
  },
  {
    "name": "Snap-on",
    "symbol": "SNA",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$397.48.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 2056050,
    "totalShares": 5173
  },
  {
    "name": "Solventum",
    "symbol": "SOLV",
    "description": "Constituyente del S&P 500. Sector: Health Care Technology. Precio referencial: US$91.53.",
    "sector": "Health Care Technology",
    "marketCap": 1558058,
    "totalShares": 17022
  },
  {
    "name": "Southern Company",
    "symbol": "SO",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$89.76.",
    "sector": "Electric Utilities",
    "marketCap": 10325659,
    "totalShares": 115036
  },
  {
    "name": "Southwest Airlines",
    "symbol": "LUV",
    "description": "Constituyente del S&P 500. Sector: Passenger Airlines. Precio referencial: US$40.67.",
    "sector": "Passenger Airlines",
    "marketCap": 1989610,
    "totalShares": 48921
  },
  {
    "name": "Stanley Black & Decker",
    "symbol": "SWK",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$99.76.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 1506542,
    "totalShares": 15102
  },
  {
    "name": "Starbucks",
    "symbol": "SBUX",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$108.49.",
    "sector": "Restaurants",
    "marketCap": 12367860,
    "totalShares": 114000
  },
  {
    "name": "State Street Corporation",
    "symbol": "STT",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$193.62.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 5318775,
    "totalShares": 27470
  },
  {
    "name": "Steel Dynamics",
    "symbol": "STLD",
    "description": "Constituyente del S&P 500. Sector: Steel. Precio referencial: US$235.90.",
    "sector": "Steel",
    "marketCap": 3381110,
    "totalShares": 14333
  },
  {
    "name": "Steris",
    "symbol": "STE",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$236.77.",
    "sector": "Health Care Equipment",
    "marketCap": 2308510,
    "totalShares": 9750
  },
  {
    "name": "Stryker Corporation",
    "symbol": "SYK",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$329.67.",
    "sector": "Health Care Equipment",
    "marketCap": 12645253,
    "totalShares": 38357
  },
  {
    "name": "Supermicro",
    "symbol": "SMCI",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$37.39.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 2418658,
    "totalShares": 64687
  },
  {
    "name": "Synchrony Financial",
    "symbol": "SYF",
    "description": "Constituyente del S&P 500. Sector: Consumer Finance. Precio referencial: US$79.78.",
    "sector": "Consumer Finance",
    "marketCap": 2595809,
    "totalShares": 32537
  },
  {
    "name": "Synopsys",
    "symbol": "SNPS",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$410.00.",
    "sector": "Application Software",
    "marketCap": 7850652,
    "totalShares": 19148
  },
  {
    "name": "Sysco",
    "symbol": "SYY",
    "description": "Constituyente del S&P 500. Sector: Food Distributors. Precio referencial: US$83.27.",
    "sector": "Food Distributors",
    "marketCap": 3989432,
    "totalShares": 47910
  },
  {
    "name": "T-Mobile US",
    "symbol": "TMUS",
    "description": "Constituyente del S&P 500. Sector: Wireless Telecommunication Services. Precio referencial: US$179.61.",
    "sector": "Wireless Telecommunication Services",
    "marketCap": 19266255,
    "totalShares": 107267
  },
  {
    "name": "T. Rowe Price",
    "symbol": "TROW",
    "description": "Constituyente del S&P 500. Sector: Asset Management & Custody Banks. Precio referencial: US$112.55.",
    "sector": "Asset Management & Custody Banks",
    "marketCap": 2400870,
    "totalShares": 21332
  },
  {
    "name": "Take-Two Interactive",
    "symbol": "TTWO",
    "description": "Constituyente del S&P 500. Sector: Interactive Home Entertainment. Precio referencial: US$233.45.",
    "sector": "Interactive Home Entertainment",
    "marketCap": 4365058,
    "totalShares": 18698
  },
  {
    "name": "Tapestry, Inc.",
    "symbol": "TPR",
    "description": "Constituyente del S&P 500. Sector: Apparel, Accessories & Luxury Goods. Precio referencial: US$130.25.",
    "sector": "Apparel, Accessories & Luxury Goods",
    "marketCap": 2597077,
    "totalShares": 19939
  },
  {
    "name": "Targa Resources",
    "symbol": "TRGP",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation. Precio referencial: US$294.03.",
    "sector": "Oil & Gas Storage & Transportation",
    "marketCap": 6304915,
    "totalShares": 21443
  },
  {
    "name": "Target Corporation",
    "symbol": "TGT",
    "description": "Constituyente del S&P 500. Sector: Consumer Staples Merchandise Retail. Precio referencial: US$164.04.",
    "sector": "Consumer Staples Merchandise Retail",
    "marketCap": 7452197,
    "totalShares": 45429
  },
  {
    "name": "TE Connectivity",
    "symbol": "TEL",
    "description": "Constituyente del S&P 500. Sector: Electronic Manufacturing Services. Precio referencial: US$205.03.",
    "sector": "Electronic Manufacturing Services",
    "marketCap": 5935890,
    "totalShares": 28951
  },
  {
    "name": "Teledyne Technologies",
    "symbol": "TDY",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$633.56.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 2936910,
    "totalShares": 4636
  },
  {
    "name": "Teleflex",
    "symbol": "TFX",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$138.74.",
    "sector": "Health Care Equipment",
    "marketCap": 587875,
    "totalShares": 4237
  },
  {
    "name": "Teradyne",
    "symbol": "TER",
    "description": "Constituyente del S&P 500. Sector: Semiconductor Materials & Equipment. Precio referencial: US$363.10.",
    "sector": "Semiconductor Materials & Equipment",
    "marketCap": 5676733,
    "totalShares": 15634
  },
  {
    "name": "Tesla, Inc.",
    "symbol": "TSLA",
    "description": "Constituyente del S&P 500. Sector: Automobile Manufacturers. Precio referencial: US$345.82.",
    "sector": "Automobile Manufacturers",
    "marketCap": 136583250,
    "totalShares": 394955
  },
  {
    "name": "Texas Instruments",
    "symbol": "TXN",
    "description": "Constituyente del S&P 500. Sector: Semiconductors. Precio referencial: US$261.77.",
    "sector": "Semiconductors",
    "marketCap": 23906083,
    "totalShares": 91325
  },
  {
    "name": "Textron",
    "symbol": "TXT",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$83.31.",
    "sector": "Aerospace & Defense",
    "marketCap": 1432823,
    "totalShares": 17199
  },
  {
    "name": "Thermo Fisher Scientific",
    "symbol": "TMO",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$633.71.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 23431256,
    "totalShares": 36975
  },
  {
    "name": "TJX Companies",
    "symbol": "TJX",
    "description": "Constituyente del S&P 500. Sector: Apparel Retail. Precio referencial: US$136.83.",
    "sector": "Apparel Retail",
    "marketCap": 15115670,
    "totalShares": 110470
  },
  {
    "name": "Tractor Supply",
    "symbol": "TSCO",
    "description": "Constituyente del S&P 500. Sector: Other Specialty Retail. Precio referencial: US$35.01.",
    "sector": "Other Specialty Retail",
    "marketCap": 1824161,
    "totalShares": 52104
  },
  {
    "name": "Trane Technologies",
    "symbol": "TT",
    "description": "Constituyente del S&P 500. Sector: Building Products. Precio referencial: US$463.40.",
    "sector": "Building Products",
    "marketCap": 10195875,
    "totalShares": 22002
  },
  {
    "name": "TransDigm Group",
    "symbol": "TDG",
    "description": "Constituyente del S&P 500. Sector: Aerospace & Defense. Precio referencial: US$1207.06.",
    "sector": "Aerospace & Defense",
    "marketCap": 6672208,
    "totalShares": 5528
  },
  {
    "name": "Travelers Companies (The)",
    "symbol": "TRV",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$371.15.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 7741262,
    "totalShares": 20858
  },
  {
    "name": "Trimble Inc.",
    "symbol": "TRMB",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$59.68.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 1391617,
    "totalShares": 23318
  },
  {
    "name": "Truist Financial",
    "symbol": "TFC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$50.67.",
    "sector": "Diversified Banks",
    "marketCap": 6189980,
    "totalShares": 122163
  },
  {
    "name": "Tyler Technologies",
    "symbol": "TYL",
    "description": "Constituyente del S&P 500. Sector: Application Software. Precio referencial: US$352.65.",
    "sector": "Application Software",
    "marketCap": 1444182,
    "totalShares": 4095
  },
  {
    "name": "Tyson Foods",
    "symbol": "TSN",
    "description": "Constituyente del S&P 500. Sector: Packaged Foods & Meats. Precio referencial: US$56.55.",
    "sector": "Packaged Foods & Meats",
    "marketCap": 1989437,
    "totalShares": 35180
  },
  {
    "name": "U.S. Bancorp",
    "symbol": "USB",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$62.80.",
    "sector": "Diversified Banks",
    "marketCap": 9784563,
    "totalShares": 155805
  },
  {
    "name": "Uber",
    "symbol": "UBER",
    "description": "Constituyente del S&P 500. Sector: Passenger Ground Transportation. Precio referencial: US$78.49.",
    "sector": "Passenger Ground Transportation",
    "marketCap": 16032054,
    "totalShares": 204256
  },
  {
    "name": "UDR, Inc.",
    "symbol": "UDR",
    "description": "Constituyente del S&P 500. Sector: Multi-Family Residential REITs. Precio referencial: US$37.93.",
    "sector": "Multi-Family Residential REITs",
    "marketCap": 1393413,
    "totalShares": 36736
  },
  {
    "name": "Ulta Beauty",
    "symbol": "ULTA",
    "description": "Constituyente del S&P 500. Sector: Other Specialty Retail. Precio referencial: US$543.19.",
    "sector": "Other Specialty Retail",
    "marketCap": 2335136,
    "totalShares": 4299
  },
  {
    "name": "Union Pacific Corporation",
    "symbol": "UNP",
    "description": "Constituyente del S&P 500. Sector: Rail Transportation. Precio referencial: US$310.62.",
    "sector": "Rail Transportation",
    "marketCap": 18453173,
    "totalShares": 59408
  },
  {
    "name": "United Airlines Holdings",
    "symbol": "UAL",
    "description": "Constituyente del S&P 500. Sector: Passenger Airlines. Precio referencial: US$114.83.",
    "sector": "Passenger Airlines",
    "marketCap": 3727034,
    "totalShares": 32457
  },
  {
    "name": "United Parcel Service",
    "symbol": "UPS",
    "description": "Constituyente del S&P 500. Sector: Air Freight & Logistics. Precio referencial: US$105.65.",
    "sector": "Air Freight & Logistics",
    "marketCap": 8988507,
    "totalShares": 85078
  },
  {
    "name": "United Rentals",
    "symbol": "URI",
    "description": "Constituyente del S&P 500. Sector: Trading Companies & Distributors. Precio referencial: US$1057.66.",
    "sector": "Trading Companies & Distributors",
    "marketCap": 6583139,
    "totalShares": 6224
  },
  {
    "name": "UnitedHealth Group",
    "symbol": "UNH",
    "description": "Constituyente del S&P 500. Sector: Managed Health Care. Precio referencial: US$401.01.",
    "sector": "Managed Health Care",
    "marketCap": 35994452,
    "totalShares": 89759
  },
  {
    "name": "Universal Health Services",
    "symbol": "UHS",
    "description": "Constituyente del S&P 500. Sector: Health Care Facilities. Precio referencial: US$178.69.",
    "sector": "Health Care Facilities",
    "marketCap": 1053137,
    "totalShares": 5894
  },
  {
    "name": "Valero Energy",
    "symbol": "VLO",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Refining & Marketing. Precio referencial: US$348.03.",
    "sector": "Oil & Gas Refining & Marketing",
    "marketCap": 10020739,
    "totalShares": 28793
  },
  {
    "name": "Ventas",
    "symbol": "VTR",
    "description": "Constituyente del S&P 500. Sector: Health Care REITs. Precio referencial: US$93.50.",
    "sector": "Health Care REITs",
    "marketCap": 4796049,
    "totalShares": 51295
  },
  {
    "name": "Veralto",
    "symbol": "VLTO",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services. Precio referencial: US$98.69.",
    "sector": "Environmental & Facilities Services",
    "marketCap": 2405997,
    "totalShares": 24379
  },
  {
    "name": "Verisign",
    "symbol": "VRSN",
    "description": "Constituyente del S&P 500. Sector: Internet Services & Infrastructure. Precio referencial: US$292.99.",
    "sector": "Internet Services & Infrastructure",
    "marketCap": 2648629,
    "totalShares": 9040
  },
  {
    "name": "Verisk Analytics",
    "symbol": "VRSK",
    "description": "Constituyente del S&P 500. Sector: Research & Consulting Services. Precio referencial: US$187.87.",
    "sector": "Research & Consulting Services",
    "marketCap": 2445241,
    "totalShares": 13016
  },
  {
    "name": "Verizon",
    "symbol": "VZ",
    "description": "Constituyente del S&P 500. Sector: Integrated Telecommunication Services. Precio referencial: US$50.19.",
    "sector": "Integrated Telecommunication Services",
    "marketCap": 20852816,
    "totalShares": 415478
  },
  {
    "name": "Vertex Pharmaceuticals",
    "symbol": "VRTX",
    "description": "Constituyente del S&P 500. Sector: Biotechnology. Precio referencial: US$547.29.",
    "sector": "Biotechnology",
    "marketCap": 13871663,
    "totalShares": 25346
  },
  {
    "name": "Viatris",
    "symbol": "VTRS",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$16.85.",
    "sector": "Pharmaceuticals",
    "marketCap": 1935376,
    "totalShares": 114859
  },
  {
    "name": "Vici Properties",
    "symbol": "VICI",
    "description": "Constituyente del S&P 500. Sector: Hotel & Resort REITs. Precio referencial: US$26.00.",
    "sector": "Hotel & Resort REITs",
    "marketCap": 2862802,
    "totalShares": 110108
  },
  {
    "name": "Visa Inc.",
    "symbol": "V",
    "description": "Constituyente del S&P 500. Sector: Transaction & Payment Processing Services. Precio referencial: US$383.90.",
    "sector": "Transaction & Payment Processing Services",
    "marketCap": 71675943,
    "totalShares": 186705
  },
  {
    "name": "Vistra Corp.",
    "symbol": "VST",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$140.03.",
    "sector": "Electric Utilities",
    "marketCap": 4699899,
    "totalShares": 33564
  },
  {
    "name": "Vulcan Materials Company",
    "symbol": "VMC",
    "description": "Constituyente del S&P 500. Sector: Construction Materials. Precio referencial: US$273.74.",
    "sector": "Construction Materials",
    "marketCap": 3547088,
    "totalShares": 12958
  },
  {
    "name": "W. R. Berkley Corporation",
    "symbol": "WRB",
    "description": "Constituyente del S&P 500. Sector: Property & Casualty Insurance. Precio referencial: US$68.67.",
    "sector": "Property & Casualty Insurance",
    "marketCap": 2549219,
    "totalShares": 37123
  },
  {
    "name": "W. W. Grainger",
    "symbol": "GWW",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$1335.39.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 6289813,
    "totalShares": 4710
  },
  {
    "name": "Wabtec",
    "symbol": "WAB",
    "description": "Constituyente del S&P 500. Sector: Construction Machinery & Heavy Transportation Equipment. Precio referencial: US$300.54.",
    "sector": "Construction Machinery & Heavy Transportation Equipment",
    "marketCap": 5076447,
    "totalShares": 16891
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
    "marketCap": 83034590,
    "totalShares": 795808
  },
  {
    "name": "Walt Disney Company (The)",
    "symbol": "DIS",
    "description": "Constituyente del S&P 500. Sector: Movies & Entertainment. Precio referencial: US$109.63.",
    "sector": "Movies & Entertainment",
    "marketCap": 18929667,
    "totalShares": 172669
  },
  {
    "name": "Warner Bros. Discovery",
    "symbol": "WBD",
    "description": "Constituyente del S&P 500. Sector: Broadcasting. Precio referencial: US$28.75.",
    "sector": "Broadcasting",
    "marketCap": 7208018,
    "totalShares": 250714
  },
  {
    "name": "Waste Management",
    "symbol": "WM",
    "description": "Constituyente del S&P 500. Sector: Environmental & Facilities Services. Precio referencial: US$221.24.",
    "sector": "Environmental & Facilities Services",
    "marketCap": 8843299,
    "totalShares": 39972
  },
  {
    "name": "Waters Corporation",
    "symbol": "WAT",
    "description": "Constituyente del S&P 500. Sector: Life Sciences Tools & Services. Precio referencial: US$414.17.",
    "sector": "Life Sciences Tools & Services",
    "marketCap": 4066564,
    "totalShares": 9819
  },
  {
    "name": "WEC Energy Group",
    "symbol": "WEC",
    "description": "Constituyente del S&P 500. Sector: Electric Utilities. Precio referencial: US$107.52.",
    "sector": "Electric Utilities",
    "marketCap": 3503532,
    "totalShares": 32585
  },
  {
    "name": "Wells Fargo",
    "symbol": "WFC",
    "description": "Constituyente del S&P 500. Sector: Diversified Banks. Precio referencial: US$85.23.",
    "sector": "Diversified Banks",
    "marketCap": 25773546,
    "totalShares": 302400
  },
  {
    "name": "Welltower",
    "symbol": "WELL",
    "description": "Constituyente del S&P 500. Sector: Health Care REITs. Precio referencial: US$241.56.",
    "sector": "Health Care REITs",
    "marketCap": 17406137,
    "totalShares": 72057
  },
  {
    "name": "West Pharmaceutical Services",
    "symbol": "WST",
    "description": "Constituyente del S&P 500. Sector: Health Care Supplies. Precio referencial: US$349.92.",
    "sector": "Health Care Supplies",
    "marketCap": 2462589,
    "totalShares": 7038
  },
  {
    "name": "Western Digital",
    "symbol": "WDC",
    "description": "Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals. Precio referencial: US$468.88.",
    "sector": "Technology Hardware, Storage & Peripherals",
    "marketCap": 16905044,
    "totalShares": 36054
  },
  {
    "name": "Weyerhaeuser",
    "symbol": "WY",
    "description": "Constituyente del S&P 500. Sector: Timber REITs. Precio referencial: US$24.08.",
    "sector": "Timber REITs",
    "marketCap": 1735532,
    "totalShares": 72074
  },
  {
    "name": "Williams Companies",
    "symbol": "WMB",
    "description": "Constituyente del S&P 500. Sector: Oil & Gas Storage & Transportation. Precio referencial: US$74.41.",
    "sector": "Oil & Gas Storage & Transportation",
    "marketCap": 9101590,
    "totalShares": 122317
  },
  {
    "name": "Willis Towers Watson",
    "symbol": "WTW",
    "description": "Constituyente del S&P 500. Sector: Insurance Brokers. Precio referencial: US$343.12.",
    "sector": "Insurance Brokers",
    "marketCap": 3186622,
    "totalShares": 9287
  },
  {
    "name": "Wynn Resorts",
    "symbol": "WYNN",
    "description": "Constituyente del S&P 500. Sector: Casinos & Gaming. Precio referencial: US$97.17.",
    "sector": "Casinos & Gaming",
    "marketCap": 1000597,
    "totalShares": 10297
  },
  {
    "name": "Xcel Energy",
    "symbol": "XEL",
    "description": "Constituyente del S&P 500. Sector: Multi-Utilities. Precio referencial: US$77.68.",
    "sector": "Multi-Utilities",
    "marketCap": 4852159,
    "totalShares": 62463
  },
  {
    "name": "Xylem Inc.",
    "symbol": "XYL",
    "description": "Constituyente del S&P 500. Sector: Industrial Machinery & Supplies & Components. Precio referencial: US$113.42.",
    "sector": "Industrial Machinery & Supplies & Components",
    "marketCap": 2648207,
    "totalShares": 23349
  },
  {
    "name": "Yum! Brands",
    "symbol": "YUM",
    "description": "Constituyente del S&P 500. Sector: Restaurants. Precio referencial: US$154.41.",
    "sector": "Restaurants",
    "marketCap": 4213866,
    "totalShares": 27290
  },
  {
    "name": "Zebra Technologies",
    "symbol": "ZBRA",
    "description": "Constituyente del S&P 500. Sector: Electronic Equipment & Instruments. Precio referencial: US$359.84.",
    "sector": "Electronic Equipment & Instruments",
    "marketCap": 1702427,
    "totalShares": 4731
  },
  {
    "name": "Zimmer Biomet",
    "symbol": "ZBH",
    "description": "Constituyente del S&P 500. Sector: Health Care Equipment. Precio referencial: US$101.38.",
    "sector": "Health Care Equipment",
    "marketCap": 1933699,
    "totalShares": 19074
  },
  {
    "name": "Zoetis",
    "symbol": "ZTS",
    "description": "Constituyente del S&P 500. Sector: Pharmaceuticals. Precio referencial: US$77.52.",
    "sector": "Pharmaceuticals",
    "marketCap": 3203309,
    "totalShares": 41322
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
