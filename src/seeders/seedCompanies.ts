import { Company } from '../models';

const companies = [
  ['Andes Solar Labs', 'ASL', 'Energia', 900000000, 900000],
  ['Pacific Byte Foods', 'PBF', 'Consumo', 540000000, 600000],
  ['Condor Cloud Systems', 'CCS', 'Tecnologia', 1200000000, 1000000],
  ['Austral Mobility Co', 'AMC', 'Transporte', 720000000, 800000],
  ['Valle Health Data', 'VHD', 'Salud', 660000000, 600000],
  ['Nimbus Water Works', 'NWW', 'Servicios', 480000000, 400000],
  ['Copper Coast Robotics', 'CCR', 'Industria', 1050000000, 700000],
  ['Patagonia Fiber Net', 'PFN', 'Telecomunicaciones', 810000000, 900000],
  ['Lumen Edu Markets', 'LEM', 'Educacion', 350000000, 500000],
  ['Harbor Green Mining', 'HGM', 'Materiales', 1000000000, 800000],
  ['Urban Seed Logistics', 'USL', 'Logistica', 560000000, 700000],
  ['Altiplano Fintech', 'AFI', 'Finanzas', 990000000, 900000],
];

export async function seedCompanies() {
  await Company.bulkCreate(
    companies.map(([name, symbol, sector, marketCap, totalShares]) => ({
      name: String(name),
      symbol: String(symbol),
      description: `Empresa educativa del sector ${sector}.`,
      sector: String(sector),
      marketCap: Number(marketCap),
      totalShares: Number(totalShares),
      availableShares: Number(totalShares),
      isPublic: true,
      creatorId: null,
    })),
    { ignoreDuplicates: true }
  );
}
