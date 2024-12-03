

class AbstractLib {
    constructor() {
      const methods = Object.getOwnPropertyNames(this.constructor.prototype);
      const overload = {};
  
      methods.forEach((method) => {
        if (method === 'constructor') return;
  
        overload[method] = this[method];
  
        this[method] = function () {
          try {
            return overload[method].apply(this, arguments);
          } catch (e) {
            const className = 'Library error.';
            console.log(className, e);
            return className;
          }
        };
      });
    }
  }
  
  export default AbstractLib;
  