function ExtractParams(target: Function) {
    const ctor = target.prototype.constructor;
    const params = ctor
      .toString()
      .match(/\((?:.+(?=\s*\))|)/)[0]
      .slice(1)
      .split(/\s*,\s*/g);
    return params;
  }

  export {ExtractParams}