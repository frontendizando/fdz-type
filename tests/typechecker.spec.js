import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import typechecker from '../index';

describe('typechecker', () => {

  beforeEach(() => {
  });

  afterEach(() => {

  });

  describe('Smoke tests', () => {
    it('shoud to be a object', () => {
      expect(typechecker).to.exist;
      expect(typechecker).to.be.an('object');
    });

    it('shoud to have a method called is', () => {
      expect(typechecker.is).to.exist;
      expect(typechecker.is).to.be.an('function');
    });

    it('shoud to have a method called of', () => {
      expect(typechecker.of).to.exist;
      expect(typechecker.of).to.be.an('function');
    });
  });

  describe('`typechecker.is`', () => {
    it('should to return true when called with `string` and "foo" value', () => {
      expect(typechecker.is('string', 'foo')).to.be.true;
    });

    it('should to return false when called with `string` and {} value', () => {
      expect(typechecker.is('string', {})).to.be.false;
    });

    it('should to return a function', () => {
      expect(typechecker.is('string')).to.be.a('function');
    });

    it('should to return true when called with "foo" value', () => {
      let isString = typechecker.is('string');
      expect(isString('foo')).to.be.true;
    });

    it('should to throw a error', () => {
      expect(typechecker.is.bind(typechecker, {})).to.throw('type required must be a string!');
    });
  });

  describe('`typechecker.of`', () => {
    it('should to return object when called with {} value', () => {
      expect(typechecker.of({})).to.be.equal('object');
    });

    it('should to return array when called with [] value', () => {
      expect(typechecker.of([])).to.be.equal('array');
    });

    it('should not to return array when called with "foo" value', () => {
      expect(typechecker.of("foo")).to.not.be.equal('array');
    });
  });

});
