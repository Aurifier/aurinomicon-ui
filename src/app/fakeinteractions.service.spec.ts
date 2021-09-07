import { FakeInteractionsService } from './fakeinteractions.service';

describe('InteractionsService', () => {
  let service: FakeInteractionsService;

  beforeEach(() => {
    service = new FakeInteractionsService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getInteractions', () => {
    it('should return a single interaction', () => {
      expect(service.getInteractions()).toHaveSize(1);
    });

    describe('an interaction', () => {
      it('should contain a list of one reactant', () =>{
        expect(service.getInteractions()[0].reactants).toHaveSize(1);
      });

      it('should contain a list of one product', () =>{
        expect(service.getInteractions()[0].products).toHaveSize(1);
      });
    })
  });
});
