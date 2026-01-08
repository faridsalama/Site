
export enum Page {
  VAULT = 'THE VAULT',
  LAB = 'THE LAB',
  CAPABILITIES = 'CAPABILITIES',
  OPERATOR = 'THE OPERATOR',
  MARKET = 'THE MARKET',
  UPLINK = 'THE UPLINK'
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  stats?: {
    topology: string;
    polys: string;
    renderTime: string;
  };
}

export interface TerminalMessage {
  type: 'system' | 'user' | 'ai';
  content: string;
}
