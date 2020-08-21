import { Location } from "./locations"

export enum Yokai {
  Shogunyan = "Shogunyan ",
  Jibanyan = "Jibanyan ",
  Hovernyan = "Hovernyan ",
  Venoct = "Venoct ",
  Kyubi = "Kyubi ",
  Zazel = "Zazel ",
  Whisper = "Whisper ",
  Robonyan = "Robonyan ",
  Damona = "Damona ",
  Blizzaria = "Blizzaria ",
  Manjimutt = "Manjimutt ",
  Komasan = "Komasan ",
  Komajiro = "Komajiro ",
  Noko = "Noko ",
  LordAnanta = "Lord Ananta",
  LordEnma = "Lord Enma",
  Usapyon = "USApyon",
}

type MinionLocation = Record<Yokai, Location[]>;

export const minionLocations: MinionLocation = {
  [Yokai.Shogunyan]: [Location.EShroud, Location.CThanalan, Location.LLaNoscea],
  [Yokai.Jibanyan]: [Location.CShroud, Location.CThanalan, Location.LLaNoscea],
  [Yokai.Hovernyan]: [Location.SShroud, Location.EThanalan, Location.WLaNoscea],
  [Yokai.LordEnma]: [Location.Stormblood],
  [Yokai.Usapyon]: [Location.OLaNoscea, Location.WThanalan, Location.MLaNoscea],
  [Yokai.Venoct]: [Location.CShroud, Location.WThanalan, Location.MLaNoscea],
  [Yokai.Kyubi]: [Location.CShroud, Location.WThanalan, Location.LLaNoscea],
  [Yokai.Zazel]: [Location.Heavensward],
  [Yokai.Whisper]: [Location.SShroud, Location.SThanalan, Location.ULaNoscea],
  [Yokai.Robonyan]: [Location.NShroud, Location.SThanalan, Location.ULaNoscea],
  [Yokai.Damona]: [Location.Stormblood],
  [Yokai.Blizzaria]: [Location.NShroud, Location.OLaNoscea, Location.MLaNoscea],
  [Yokai.Manjimutt]: [Location.SShroud, Location.EThanalan, Location.ULaNoscea],
  [Yokai.LordAnanta]: [Location.Heavensward],
  [Yokai.Komasan]: [Location.EShroud, Location.EThanalan, Location.WLaNoscea],
  [Yokai.Komajiro]: [Location.EShroud, Location.CThanalan, Location.WLaNoscea],
  [Yokai.Noko]: [Location.NShroud, Location.SThanalan, Location.OLaNoscea],
};
