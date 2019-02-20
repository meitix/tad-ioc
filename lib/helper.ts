function ExtractParams(target: Function) {
    const ctor = target.prototype.constructor;
    console.log(ctor.toString());
    const params = ctor
      .toString()
      .match(/\((?:.+(?=\s*\))|)/)[0]
      .slice(1)
      .split(/\s*,\s*/g);
    console.log(params);
  }

  export {ExtractParams}