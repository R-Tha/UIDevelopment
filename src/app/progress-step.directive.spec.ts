import { ProgressStepDirective } from './progress-step.directive';
import { ProgressHelperService } from './services/progress-steps-bar.service';

describe('ProgressHelperService', () => {
  it('should create an instance', () => {
    const directive = new ProgressHelperService();
    expect(directive).toBeTruthy();
  });
});
