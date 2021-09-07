import { Injectable } from "@angular/core";
import { Interaction, InteractionsService } from "./interactions.service";

@Injectable({
    providedIn: 'root'
})
export class FakeInteractionsService implements InteractionsService {

    constructor() {}

    getInteractions(): Interaction[] {
        return [new Interaction({reactants: ["test"], products: ["test"]})];
    }
}