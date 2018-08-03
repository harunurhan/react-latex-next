export interface KatexData {
  data: string;
  type: string;
  rawData?: string;
  display?: boolean;
}

export interface Delimiter {
  right: string;
  left: string;
  display: boolean;
}