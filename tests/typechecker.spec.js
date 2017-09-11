import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import type from '../index';

describe('type', () => {

  beforeEach(() => {
  });

  afterEach(() => {

  });

  describe('Smoke tests', () => {
    it('shoud to be a object', () => {
      expect(type).to.exist;
      expect(type).to.be.an('object');
    });

    it('shoud to have a method called is', () => {
      expect(type.is).to.exist;
      expect(type.is).to.be.an('function');
    });

    it('shoud to have a method called of', () => {
      expect(type.of).to.exist;
      expect(type.of).to.be.an('function');
    });
  });

  describe('`type.is`', () => {
    it('should to return true when called with `string` and "foo" value', () => {
      expect(type.is('string', 'foo')).to.be.true;
    });

    it('should to return false when called with `string` and {} value', () => {
      expect(type.is('string', {})).to.be.false;
    });

    it('should to return a function', () => {
      expect(type.is('string')).to.be.a('function');
    });

    it('should to return true when called with "foo" value', () => {
      let isString = type.is('string');
      expect(isString('foo')).to.be.true;
    });

    it('should to throw a error', () => {
      expect(type.is.bind(type, {})).to.throw('type required must be a string!');
    });
  });

  describe('`type.of`', () => {
    it('should to return object when called with {} value', () => {
      expect(type.of({})).to.be.equal('object');
    });

    it('should to return array when called with [] value', () => {
      expect(type.of([])).to.be.equal('array');
    });

    it('should not to return array when called with "foo" value', () => {
      expect(type.of("foo")).to.not.be.equal('array');
    });
  });

});
