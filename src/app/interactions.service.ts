export class Interaction {
  reactants: string[] = [];
  products: string[] = [];

  public constructor(init?: Partial<Interaction>) {
    Object.assign(this, init);
  }
}

export abstract class InteractionsService {
  abstract getInteractions(): Interaction[];
}
