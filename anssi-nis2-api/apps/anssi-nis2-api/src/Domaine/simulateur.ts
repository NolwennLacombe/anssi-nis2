export type SimulateurFieldNames =
  | 'etatMembre'
  | 'typeStructure'
  | 'trancheNombreEmployes'
  | 'trancheCA'
  | 'secteurActivite';

export type SimulateurFormData = Record<SimulateurFieldNames, string[]>;
export const emptySimulateurFormData: SimulateurFormData = {
  etatMembre: [],
  secteurActivite: [],
  trancheCA: [],
  trancheNombreEmployes: [],
  typeStructure: [],
};

export interface SimulateurDepot {
  save(data: SimulateurFormData): Promise<boolean>;
}

export const SimulateurDepotToken = 'SimulateurDepot';
