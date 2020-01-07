import { Photon } from '@prisma/photon'

const photon = new Photon();

const durationUnit = ["hour(s)", "day(s)", "week(s)", "month(s)", "dose(s)"];

async function main() {
  durationUnit.forEach(async duration_unit => {
    await photon.durationUnits.create({
      data: { duration_unit }
    });
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
