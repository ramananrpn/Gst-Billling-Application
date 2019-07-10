import { GstRoutingModule } from './gst-routing.module';

describe('GstRoutingModule', () => {
  let gstRoutingModule: GstRoutingModule;

  beforeEach(() => {
    gstRoutingModule = new GstRoutingModule();
  });

  it('should create an instance', () => {
    expect(gstRoutingModule).toBeTruthy();
  });
});
