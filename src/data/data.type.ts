import type { Nullish } from "../utils/nullish";
import type { DATA, speakers } from "./data";

export type Socials = Nullish<
  Partial<{
    twitter: string;
    youtube: string;
    linkedin: string;
    website: string;
    mastodon: string;
    github: string;
    medium: string;
    mail: string;
    instagram: string;
    devto: string;
    twitch: string;
  }>
>;
export type Speaker = {
  name: string;
  position?: Nullish<string>;
  descriptionParagraphs: ReadonlyArray<string>;
  socials?: Socials;
  picture: string;
};

export interface TeamMember {
  name: string;
  position?: Nullish<string>;
  descriptionInParagraphs: ReadonlyArray<string>;
  socials?: Socials;
  picture: string;
}

export type SponsorTier =
  | "platinum"
  | "gold"
  | "silver"
  | "bronze"
  | "media"
  | "food"
  | "community"
  | "supporter";

export interface Sponsor {
  name: string;
  tier: SponsorTier;
  description?: Nullish<string>;
  picture: string;
  url: string;
}

export interface Ticket {
  name: string;
  price: number;
  url: string;
  perks: ReadonlyArray<string>;
  isSoldOut?: Nullish<boolean>;
  notice?: Nullish<string>;
}

export interface FAQ {
  title: string;
  body: string;
}

interface PreviousEdition {
  name: string;
  url: string;
}

export interface Event {
  name: string;
  type: "lecture" | "workshop";
  speakers: ReadonlyArray<(typeof speakers)[number]["name"]>;
  descriptionInParagraphs: ReadonlyArray<string>;
  durationInMinutes?: Nullish<number>;
  place?: Nullish<string>;
  date?: Nullish<string>;
  language?: Nullish<string>;
}

interface FooterLink {
  title: string;
  href: string;
}

export type Data = {
  title: string;
  date: Date;
  ticketsUrl: string;
  gallery: ReadonlyArray<string>;
  about: {
    descriptionInParagraphs: ReadonlyArray<string>;
    socials?: Socials;
  };
  venue: {
    title: string;
    description: string;
    address: string;
    mapUrl: string;
    pictures: ReadonlyArray<string>;
    city: string;
    howToArrive?: Nullish<
      Partial<{
        howToArriveByBus: ReadonlyArray<string>;
        howToArriveByBike: ReadonlyArray<string>;
        howToArriveByMetro: ReadonlyArray<string>;
      }>
    >;
  };
  speakers: ReadonlyArray<Speaker>;
  team: ReadonlyArray<TeamMember>;
  sponsors: ReadonlyArray<Sponsor>;
  events: ReadonlyArray<Event>;
  tickets: ReadonlyArray<Ticket>;
  previousEditions: ReadonlyArray<PreviousEdition>;
  lastEditionVideoUrl?: Nullish<string>;
  faq: ReadonlyArray<FAQ>;
  footerLinks: ReadonlyArray<FooterLink>;
};
