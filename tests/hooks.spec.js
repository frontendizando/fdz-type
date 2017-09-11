import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import Hook from '../src/scripts/index';

describe('Hooks', () => {
  let HookStub;
  let MapStub;
  let hook;


  beforeEach(() => {
    HookStub = sinon.spy(function() {
      return sinon.createStubInstance(Hook);
    });

    MapStub = sinon.spy(function() {
      return sinon.createStubInstance(Map);
    });

    hook = new HookStub();
    hook.hooks = new MapStub();
  });

  afterEach(() => {

  });

  describe('Smoke tests', () => {
    it('should to have been called with new', () => {
      expect(HookStub).to.have.been.calledWithNew;
    });

    it('should to have a hooks property', () => {
      expect(hook.hooks).to.exist;
      expect(hook.hooks).to.be.an.instanceof(Map);
    });

    it('should to have a method called register', () => {
      expect(hook.register).to.exist;
      expect(hook.register).to.be.a('function');
    });

    it('should to have a method called call', () => {
      expect(hook.call).to.exist;
      expect(hook.call).to.be.a('function');
    });
  });

  describe('`hook.register`', () => {
    it('should to be called with name arg', () => {
      hook.register('click');
      expect(hook.register).to.have.been.calledOnce;
    })
  });


});
