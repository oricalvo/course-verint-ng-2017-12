export interface AppState {
  counter: number;
  contacts: Contact[],
  isReloading: boolean;
}

export interface Contact {
  id: number;
  name: string;
}

