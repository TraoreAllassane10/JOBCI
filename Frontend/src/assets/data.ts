import type { Categorie, Commune, TypeContrat } from "../types";

export const categories: Categorie[] = [
  {
    id: 1,
    nom: "Service domestiques",
    total: 20,
  },
  {
    id: 2,
    nom: "Service personnel",
    total: 32,
  },
  {
    id: 3,
    nom: "Artisanat et Technique",
    total: 10,
  },
  {
    id: 4,
    nom: "Evènementiel",
    total: 5,
  },
  {
    id: 5,
    nom: "Commerce et Gestion",
    total: 58,
  },
];

export const commune: Commune[] = [
  {
    id: 1,
    nom: "Cocody",
    total: 20,
  },
  {
    id: 2,
    nom: "Abobo",
    total: 32,
  },
  {
    id: 3,
    nom: "Koumassi",
    total: 10,
  },
  {
    id: 4,
    nom: "Yopougon",
    total: 5,
  },
  {
    id: 5,
    nom: "Adjamé",
    total: 58,
  },
];

export const typeContrats: TypeContrat[] = [
  {
    id: 1,
    nom: "Temps plein",
    total: 20,
  },
  {
    id: 2,
    nom: "Temps partiel",
    total: 32,
  },
  {
    id: 3,
    nom: "Mission ponctuelle",
    total: 10,
  },
  {
    id: 4,
    nom: "Contrat temporel",
    total: 5,
  },
];
