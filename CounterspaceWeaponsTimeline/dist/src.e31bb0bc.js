// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"../node_modules/@babel/runtime/regenerator/index.js":[function(require,module,exports) {
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":"../node_modules/regenerator-runtime/runtime.js"}],"../node_modules/@babel/runtime/helpers/asyncToGenerator.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
},{"./arrayLikeToArray":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
},{}],"../node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray":"../node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread":"../node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"../node_modules/@babel/runtime/helpers/arrayWithHoles.js":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],"../node_modules/@babel/runtime/helpers/nonIterableRest.js":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
},{}],"../node_modules/@babel/runtime/helpers/slicedToArray.js":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":"../node_modules/@babel/runtime/helpers/arrayWithHoles.js","./iterableToArrayLimit":"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js","./unsupportedIterableToArray":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableRest":"../node_modules/@babel/runtime/helpers/nonIterableRest.js"}],"../node_modules/d3-fetch/src/blob.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function responseBlob(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.blob();
}

function _default(input, init) {
  return fetch(input, init).then(responseBlob);
}
},{}],"../node_modules/d3-fetch/src/buffer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function responseArrayBuffer(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}

function _default(input, init) {
  return fetch(input, init).then(responseArrayBuffer);
}
},{}],"../node_modules/d3-dsv/src/dsv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function (name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function (row, i) {
    return f(object(row), i, columns);
  };
} // Compute unique columns in order of discovery.


function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];
  rows.forEach(function (row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}

function pad(value, width) {
  var s = value + "",
      length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z" : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
}

function _default(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert,
        columns,
        rows = parseRows(text, function (row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [],
        // output rows
    N = text.length,
        I = 0,
        // current character index
    n = 0,
        // current line number
    t,
        // current token
    eof = N <= 0,
        // current token followed by EOF?
    eol = false; // current token followed by EOL?
    // Strip the trailing newline.

    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL; // Unescape quotes.

      var i,
          j = I,
          c;

      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);

        if ((i = I) >= N) eof = true;else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;else if (c === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      } // Find next delimiter or newline.


      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;else if (c === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        } else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      } // Return last token before EOF.


      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];

      while (t !== EOL && t !== EOF) row.push(t), t = token();

      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function (row) {
      return columns.map(function (column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\"" : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
}
},{}],"../node_modules/d3-dsv/src/csv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csvFormatValue = exports.csvFormatRow = exports.csvFormatRows = exports.csvFormatBody = exports.csvFormat = exports.csvParseRows = exports.csvParse = void 0;

var _dsv = _interopRequireDefault(require("./dsv.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var csv = (0, _dsv.default)(",");
var csvParse = csv.parse;
exports.csvParse = csvParse;
var csvParseRows = csv.parseRows;
exports.csvParseRows = csvParseRows;
var csvFormat = csv.format;
exports.csvFormat = csvFormat;
var csvFormatBody = csv.formatBody;
exports.csvFormatBody = csvFormatBody;
var csvFormatRows = csv.formatRows;
exports.csvFormatRows = csvFormatRows;
var csvFormatRow = csv.formatRow;
exports.csvFormatRow = csvFormatRow;
var csvFormatValue = csv.formatValue;
exports.csvFormatValue = csvFormatValue;
},{"./dsv.js":"../node_modules/d3-dsv/src/dsv.js"}],"../node_modules/d3-dsv/src/tsv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tsvFormatValue = exports.tsvFormatRow = exports.tsvFormatRows = exports.tsvFormatBody = exports.tsvFormat = exports.tsvParseRows = exports.tsvParse = void 0;

var _dsv = _interopRequireDefault(require("./dsv.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tsv = (0, _dsv.default)("\t");
var tsvParse = tsv.parse;
exports.tsvParse = tsvParse;
var tsvParseRows = tsv.parseRows;
exports.tsvParseRows = tsvParseRows;
var tsvFormat = tsv.format;
exports.tsvFormat = tsvFormat;
var tsvFormatBody = tsv.formatBody;
exports.tsvFormatBody = tsvFormatBody;
var tsvFormatRows = tsv.formatRows;
exports.tsvFormatRows = tsvFormatRows;
var tsvFormatRow = tsv.formatRow;
exports.tsvFormatRow = tsvFormatRow;
var tsvFormatValue = tsv.formatValue;
exports.tsvFormatValue = tsvFormatValue;
},{"./dsv.js":"../node_modules/d3-dsv/src/dsv.js"}],"../node_modules/d3-dsv/src/autoType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = autoType;

function autoType(object) {
  for (var key in object) {
    var value = object[key].trim(),
        number,
        m;
    if (!value) value = null;else if (value === "true") value = true;else if (value === "false") value = false;else if (value === "NaN") value = NaN;else if (!isNaN(number = +value)) value = number;else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
      if (fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
      value = new Date(value);
    } else continue;
    object[key] = value;
  }

  return object;
} // https://github.com/d3/d3-dsv/issues/45


const fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();
},{}],"../node_modules/d3-dsv/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dsvFormat", {
  enumerable: true,
  get: function () {
    return _dsv.default;
  }
});
Object.defineProperty(exports, "csvParse", {
  enumerable: true,
  get: function () {
    return _csv.csvParse;
  }
});
Object.defineProperty(exports, "csvParseRows", {
  enumerable: true,
  get: function () {
    return _csv.csvParseRows;
  }
});
Object.defineProperty(exports, "csvFormat", {
  enumerable: true,
  get: function () {
    return _csv.csvFormat;
  }
});
Object.defineProperty(exports, "csvFormatBody", {
  enumerable: true,
  get: function () {
    return _csv.csvFormatBody;
  }
});
Object.defineProperty(exports, "csvFormatRows", {
  enumerable: true,
  get: function () {
    return _csv.csvFormatRows;
  }
});
Object.defineProperty(exports, "csvFormatRow", {
  enumerable: true,
  get: function () {
    return _csv.csvFormatRow;
  }
});
Object.defineProperty(exports, "csvFormatValue", {
  enumerable: true,
  get: function () {
    return _csv.csvFormatValue;
  }
});
Object.defineProperty(exports, "tsvParse", {
  enumerable: true,
  get: function () {
    return _tsv.tsvParse;
  }
});
Object.defineProperty(exports, "tsvParseRows", {
  enumerable: true,
  get: function () {
    return _tsv.tsvParseRows;
  }
});
Object.defineProperty(exports, "tsvFormat", {
  enumerable: true,
  get: function () {
    return _tsv.tsvFormat;
  }
});
Object.defineProperty(exports, "tsvFormatBody", {
  enumerable: true,
  get: function () {
    return _tsv.tsvFormatBody;
  }
});
Object.defineProperty(exports, "tsvFormatRows", {
  enumerable: true,
  get: function () {
    return _tsv.tsvFormatRows;
  }
});
Object.defineProperty(exports, "tsvFormatRow", {
  enumerable: true,
  get: function () {
    return _tsv.tsvFormatRow;
  }
});
Object.defineProperty(exports, "tsvFormatValue", {
  enumerable: true,
  get: function () {
    return _tsv.tsvFormatValue;
  }
});
Object.defineProperty(exports, "autoType", {
  enumerable: true,
  get: function () {
    return _autoType.default;
  }
});

var _dsv = _interopRequireDefault(require("./dsv.js"));

var _csv = require("./csv.js");

var _tsv = require("./tsv.js");

var _autoType = _interopRequireDefault(require("./autoType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./dsv.js":"../node_modules/d3-dsv/src/dsv.js","./csv.js":"../node_modules/d3-dsv/src/csv.js","./tsv.js":"../node_modules/d3-dsv/src/tsv.js","./autoType.js":"../node_modules/d3-dsv/src/autoType.js"}],"../node_modules/d3-fetch/src/text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

function _default(input, init) {
  return fetch(input, init).then(responseText);
}
},{}],"../node_modules/d3-fetch/src/dsv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dsv;
exports.tsv = exports.csv = void 0;

var _d3Dsv = require("d3-dsv");

var _text = _interopRequireDefault(require("./text.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dsvParse(parse) {
  return function (input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return (0, _text.default)(input, init).then(function (response) {
      return parse(response, row);
    });
  };
}

function dsv(delimiter, input, init, row) {
  if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
  var format = (0, _d3Dsv.dsvFormat)(delimiter);
  return (0, _text.default)(input, init).then(function (response) {
    return format.parse(response, row);
  });
}

var csv = dsvParse(_d3Dsv.csvParse);
exports.csv = csv;
var tsv = dsvParse(_d3Dsv.tsvParse);
exports.tsv = tsv;
},{"d3-dsv":"../node_modules/d3-dsv/src/index.js","./text.js":"../node_modules/d3-fetch/src/text.js"}],"../node_modules/d3-fetch/src/image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(input, init) {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    for (var key in init) image[key] = init[key];

    image.onerror = reject;

    image.onload = function () {
      resolve(image);
    };

    image.src = input;
  });
}
},{}],"../node_modules/d3-fetch/src/json.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function responseJson(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  if (response.status === 204 || response.status === 205) return;
  return response.json();
}

function _default(input, init) {
  return fetch(input, init).then(responseJson);
}
},{}],"../node_modules/d3-fetch/src/xml.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svg = exports.html = exports.default = void 0;

var _text = _interopRequireDefault(require("./text.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parser(type) {
  return (input, init) => (0, _text.default)(input, init).then(text => new DOMParser().parseFromString(text, type));
}

var _default = parser("application/xml");

exports.default = _default;
var html = parser("text/html");
exports.html = html;
var svg = parser("image/svg+xml");
exports.svg = svg;
},{"./text.js":"../node_modules/d3-fetch/src/text.js"}],"../node_modules/d3-fetch/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "blob", {
  enumerable: true,
  get: function () {
    return _blob.default;
  }
});
Object.defineProperty(exports, "buffer", {
  enumerable: true,
  get: function () {
    return _buffer.default;
  }
});
Object.defineProperty(exports, "dsv", {
  enumerable: true,
  get: function () {
    return _dsv.default;
  }
});
Object.defineProperty(exports, "csv", {
  enumerable: true,
  get: function () {
    return _dsv.csv;
  }
});
Object.defineProperty(exports, "tsv", {
  enumerable: true,
  get: function () {
    return _dsv.tsv;
  }
});
Object.defineProperty(exports, "image", {
  enumerable: true,
  get: function () {
    return _image.default;
  }
});
Object.defineProperty(exports, "json", {
  enumerable: true,
  get: function () {
    return _json.default;
  }
});
Object.defineProperty(exports, "text", {
  enumerable: true,
  get: function () {
    return _text.default;
  }
});
Object.defineProperty(exports, "xml", {
  enumerable: true,
  get: function () {
    return _xml.default;
  }
});
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function () {
    return _xml.html;
  }
});
Object.defineProperty(exports, "svg", {
  enumerable: true,
  get: function () {
    return _xml.svg;
  }
});

var _blob = _interopRequireDefault(require("./blob.js"));

var _buffer = _interopRequireDefault(require("./buffer.js"));

var _dsv = _interopRequireWildcard(require("./dsv.js"));

var _image = _interopRequireDefault(require("./image.js"));

var _json = _interopRequireDefault(require("./json.js"));

var _text = _interopRequireDefault(require("./text.js"));

var _xml = _interopRequireWildcard(require("./xml.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./blob.js":"../node_modules/d3-fetch/src/blob.js","./buffer.js":"../node_modules/d3-fetch/src/buffer.js","./dsv.js":"../node_modules/d3-fetch/src/dsv.js","./image.js":"../node_modules/d3-fetch/src/image.js","./json.js":"../node_modules/d3-fetch/src/json.js","./text.js":"../node_modules/d3-fetch/src/text.js","./xml.js":"../node_modules/d3-fetch/src/xml.js"}],"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseData = parseData;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var d3 = Object.assign({}, require('d3-fetch'));

function parseData(_ref) {
  var src = _ref.src;
  var valuePromise = fetchCSV(src);
  var data = Promise.all([valuePromise]).then(function (res) {
    var _res = (0, _slicedToArray2.default)(res, 1),
        valueData = _res[0];

    console.log(valueData);
    var years = valueData.filter(function (d) {
      return d.year > 0;
    }).map(function (d) {
      return d.year;
    }).sort();
    var categories = (0, _toConsumableArray2.default)(new Set(valueData.map(function (d) {
      return d.category;
    }))).filter(function (d) {
      return d != '';
    }).sort();
    var countries = (0, _toConsumableArray2.default)(new Set(valueData.map(function (d) {
      return d.country;
    }))).filter(function (d) {
      return d != '';
    }).sort();
    var subcategories = {};
    valueData.forEach(function (action) {
      if (!action.category) {
        return;
      } // If this subcategory doesn't exist, make it


      subcategories[action.category] = subcategories[action.category] || new Set(); // If this type doesn't exist within this subcategory, create it

      subcategories[action.category].add(action.type);
    });

    for (var property in subcategories) {
      subcategories[property] = (0, _toConsumableArray2.default)(subcategories[property]);
    }

    var dataset = {
      years: [years[0], years[years.length - 1]],
      values: valueData,
      categories: categories,
      subcategories: subcategories,
      countries: countries
    };
    console.log(dataset);
    return dataset;
  });
  return data;
}

var stringFields = ['category', 'type', 'storyBool', 'learnMore', 'learnMoreURL', 'country', 'startDate', 'endDate', 'title', 'source'];
var numFields = ['id'];
var booleanFields = ['storyBool', 'learnMore'];

function fetchCSV(src) {
  // return d3.csv(src)
  return d3.csv(src, function (d, index) {
    for (var i in d) {
      if (numFields.includes(i)) {
        d[i] = +d[i];
      }

      if (booleanFields.includes(i)) {
        d[i] = d[i] == 'TRUE' ? true : false;
      }
    }

    if (!d.startDate) {
      d.dates = new Date(d.startYear, 0, 1);
    } else {
      d.dates = new Date(d.startDate);
    }

    d.id = index;
    d.year = +d.startYear; // Use on whole integers

    return d;
  });
}
},{"@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/slicedToArray":"../node_modules/@babel/runtime/helpers/slicedToArray.js","d3-fetch":"../node_modules/d3-fetch/src/index.js"}],"../node_modules/d3-selection/src/namespaces.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.xhtml = void 0;
var xhtml = "http://www.w3.org/1999/xhtml";
exports.xhtml = xhtml;
var _default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
exports.default = _default;
},{}],"../node_modules/d3-selection/src/namespace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _namespaces = _interopRequireDefault(require("./namespaces.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(name) {
  var prefix = name += "",
      i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces.default.hasOwnProperty(prefix) ? {
    space: _namespaces.default[prefix],
    local: name
  } : name; // eslint-disable-line no-prototype-builtins
}
},{"./namespaces.js":"../node_modules/d3-selection/src/namespaces.js"}],"../node_modules/d3-selection/src/creator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _namespace = _interopRequireDefault(require("./namespace.js"));

var _namespaces = require("./namespaces.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function creatorInherit(name) {
  return function () {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces.xhtml && document.documentElement.namespaceURI === _namespaces.xhtml ? document.createElement(name) : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function () {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function _default(name) {
  var fullname = (0, _namespace.default)(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
},{"./namespace.js":"../node_modules/d3-selection/src/namespace.js","./namespaces.js":"../node_modules/d3-selection/src/namespaces.js"}],"../node_modules/d3-selection/src/selector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function none() {}

function _default(selector) {
  return selector == null ? none : function () {
    return this.querySelector(selector);
  };
}
},{}],"../node_modules/d3-selection/src/selection/select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _index = require("./index.js");

var _selector = _interopRequireDefault(require("../selector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(select) {
  if (typeof select !== "function") select = (0, _selector.default)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index.Selection(subgroups, this._parents);
}
},{"./index.js":"../node_modules/d3-selection/src/selection/index.js","../selector.js":"../node_modules/d3-selection/src/selector.js"}],"../node_modules/d3-selection/src/array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(x) {
  return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
  : Array.from(x); // Map, Set, iterable, string, or anything else
}
},{}],"../node_modules/d3-selection/src/selectorAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function empty() {
  return [];
}

function _default(selector) {
  return selector == null ? empty : function () {
    return this.querySelectorAll(selector);
  };
}
},{}],"../node_modules/d3-selection/src/selection/selectAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _index = require("./index.js");

var _array = _interopRequireDefault(require("../array.js"));

var _selectorAll = _interopRequireDefault(require("../selectorAll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrayAll(select) {
  return function () {
    var group = select.apply(this, arguments);
    return group == null ? [] : (0, _array.default)(group);
  };
}

function _default(select) {
  if (typeof select === "function") select = arrayAll(select);else select = (0, _selectorAll.default)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index.Selection(subgroups, parents);
}
},{"./index.js":"../node_modules/d3-selection/src/selection/index.js","../array.js":"../node_modules/d3-selection/src/array.js","../selectorAll.js":"../node_modules/d3-selection/src/selectorAll.js"}],"../node_modules/d3-selection/src/matcher.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.childMatcher = childMatcher;

function _default(selector) {
  return function () {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function (node) {
    return node.matches(selector);
  };
}
},{}],"../node_modules/d3-selection/src/selection/selectChild.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _matcher = require("../matcher.js");

var find = Array.prototype.find;

function childFind(match) {
  return function () {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

function _default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : (0, _matcher.childMatcher)(match)));
}
},{"../matcher.js":"../node_modules/d3-selection/src/matcher.js"}],"../node_modules/d3-selection/src/selection/selectChildren.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _matcher = require("../matcher.js");

var filter = Array.prototype.filter;

function children() {
  return this.children;
}

function childrenFilter(match) {
  return function () {
    return filter.call(this.children, match);
  };
}

function _default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : (0, _matcher.childMatcher)(match)));
}
},{"../matcher.js":"../node_modules/d3-selection/src/matcher.js"}],"../node_modules/d3-selection/src/selection/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _index = require("./index.js");

var _matcher = _interopRequireDefault(require("../matcher.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(match) {
  if (typeof match !== "function") match = (0, _matcher.default)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index.Selection(subgroups, this._parents);
}
},{"./index.js":"../node_modules/d3-selection/src/selection/index.js","../matcher.js":"../node_modules/d3-selection/src/matcher.js"}],"../node_modules/d3-selection/src/selection/sparse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(update) {
  return new Array(update.length);
}
},{}],"../node_modules/d3-selection/src/selection/enter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.EnterNode = EnterNode;

var _sparse = _interopRequireDefault(require("./sparse.js"));

var _index = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _index.Selection(this._enter || this._groups.map(_sparse.default), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function (child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function (child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function (selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function (selector) {
    return this._parent.querySelectorAll(selector);
  }
};
},{"./sparse.js":"../node_modules/d3-selection/src/selection/sparse.js","./index.js":"../node_modules/d3-selection/src/selection/index.js"}],"../node_modules/d3-selection/src/constant.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(x) {
  return function () {
    return x;
  };
}
},{}],"../node_modules/d3-selection/src/selection/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _index = require("./index.js");

var _enter = require("./enter.js");

var _array = _interopRequireDefault(require("../array.js"));

var _constant = _interopRequireDefault(require("../constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length; // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.

  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter.EnterNode(parent, data[i]);
    }
  } // Put any non-null nodes that don’t fit into exit.


  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map(),
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue; // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.

  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";

      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  } // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.


  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";

    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter.EnterNode(parent, data[i]);
    }
  } // Add any remaining nodes that were not bound to data to exit.


  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

function _default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;
  if (typeof value !== "function") value = (0, _constant.default)(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = (0, _array.default)(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key); // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.

    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;

        while (!(next = updateGroup[i1]) && ++i1 < dataLength);

        previous._next = next || null;
      }
    }
  }

  update = new _index.Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
},{"./index.js":"../node_modules/d3-selection/src/selection/index.js","./enter.js":"../node_modules/d3-selection/src/selection/enter.js","../array.js":"../node_modules/d3-selection/src/array.js","../constant.js":"../node_modules/d3-selection/src/constant.js"}],"../node_modules/d3-selection/src/selection/exit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sparse = _interopRequireDefault(require("./sparse.js"));

var _index = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _index.Selection(this._exit || this._groups.map(_sparse.default), this._parents);
}
},{"./sparse.js":"../node_modules/d3-selection/src/selection/sparse.js","./index.js":"../node_modules/d3-selection/src/selection/index.js"}],"../node_modules/d3-selection/src/selection/join.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(onenter, onupdate, onexit) {
  var enter = this.enter(),
      update = this,
      exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove();else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
},{}],"../node_modules/d3-selection/src/selection/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _index = require("./index.js");

function _default(selection) {
  if (!(selection instanceof _index.Selection)) throw new Error("invalid merge");

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index.Selection(merges, this._parents);
}
},{"./index.js":"../node_modules/d3-selection/src/selection/index.js"}],"../node_modules/d3-selection/src/selection/order.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}
},{}],"../node_modules/d3-selection/src/selection/sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _index = require("./index.js");

function _default(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }

    sortgroup.sort(compareNode);
  }

  return new _index.Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
},{"./index.js":"../node_modules/d3-selection/src/selection/index.js"}],"../node_modules/d3-selection/src/selection/call.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
},{}],"../node_modules/d3-selection/src/selection/nodes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  return Array.from(this);
}
},{}],"../node_modules/d3-selection/src/selection/node.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}
},{}],"../node_modules/d3-selection/src/selection/size.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  let size = 0;

  for (const node of this) ++size; // eslint-disable-line no-unused-vars


  return size;
}
},{}],"../node_modules/d3-selection/src/selection/empty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  return !this.node();
}
},{}],"../node_modules/d3-selection/src/selection/each.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}
},{}],"../node_modules/d3-selection/src/selection/attr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _namespace = _interopRequireDefault(require("../namespace.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function () {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function () {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function _default(name, value) {
  var fullname = (0, _namespace.default)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }

  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}
},{"../namespace.js":"../node_modules/d3-selection/src/namespace.js"}],"../node_modules/d3-selection/src/window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
  node.document && node // node is a Window
  || node.defaultView; // node is a Document
}
},{}],"../node_modules/d3-selection/src/selection/style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.styleValue = styleValue;

var _window = _interopRequireDefault(require("../window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function () {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
  };
}

function _default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name) || (0, _window.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}
},{"../window.js":"../node_modules/d3-selection/src/window.js"}],"../node_modules/d3-selection/src/selection/property.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function propertyRemove(name) {
  return function () {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function () {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];else this[name] = v;
  };
}

function _default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
},{}],"../node_modules/d3-selection/src/selection/classed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function (name) {
    var i = this._names.indexOf(name);

    if (i < 0) {
      this._names.push(name);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function (name) {
    var i = this._names.indexOf(name);

    if (i >= 0) {
      this._names.splice(i, 1);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function (name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function () {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function () {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function () {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function _default(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()),
        i = -1,
        n = names.length;

    while (++i < n) if (!list.contains(names[i])) return false;

    return true;
  }

  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
},{}],"../node_modules/d3-selection/src/selection/text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function _default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}
},{}],"../node_modules/d3-selection/src/selection/html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function () {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function _default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
},{}],"../node_modules/d3-selection/src/selection/raise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function _default() {
  return this.each(raise);
}
},{}],"../node_modules/d3-selection/src/selection/lower.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function _default() {
  return this.each(lower);
}
},{}],"../node_modules/d3-selection/src/selection/append.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _creator = _interopRequireDefault(require("../creator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(name) {
  var create = typeof name === "function" ? name : (0, _creator.default)(name);
  return this.select(function () {
    return this.appendChild(create.apply(this, arguments));
  });
}
},{"../creator.js":"../node_modules/d3-selection/src/creator.js"}],"../node_modules/d3-selection/src/selection/insert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _creator = _interopRequireDefault(require("../creator.js"));

var _selector = _interopRequireDefault(require("../selector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function constantNull() {
  return null;
}

function _default(name, before) {
  var create = typeof name === "function" ? name : (0, _creator.default)(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0, _selector.default)(before);
  return this.select(function () {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}
},{"../creator.js":"../node_modules/d3-selection/src/creator.js","../selector.js":"../node_modules/d3-selection/src/selector.js"}],"../node_modules/d3-selection/src/selection/remove.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function _default() {
  return this.each(remove);
}
},{}],"../node_modules/d3-selection/src/selection/clone.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function selection_cloneShallow() {
  var clone = this.cloneNode(false),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function _default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
},{}],"../node_modules/d3-selection/src/selection/datum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
},{}],"../node_modules/d3-selection/src/selection/on.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function contextListener(listener) {
  return function (event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {
      type: t,
      name: name
    };
  });
}

function onRemove(typename) {
  return function () {
    var on = this.__on;
    if (!on) return;

    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }

    if (++i) on.length = i;else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function () {
    var on = this.__on,
        o,
        listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {
      type: typename.type,
      name: typename.name,
      value: value,
      listener: listener,
      options: options
    };
    if (!on) this.__on = [o];else on.push(o);
  };
}

function _default(typename, value, options) {
  var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;

  if (arguments.length < 2) {
    var on = this.node().__on;

    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;

  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));

  return this;
}
},{}],"../node_modules/d3-selection/src/selection/dispatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _window = _interopRequireDefault(require("../window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dispatchEvent(node, type, params) {
  var window = (0, _window.default)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function () {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function () {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function _default(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
},{"../window.js":"../node_modules/d3-selection/src/window.js"}],"../node_modules/d3-selection/src/selection/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function* _default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}
},{}],"../node_modules/d3-selection/src/selection/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selection = Selection;
exports.default = exports.root = void 0;

var _select = _interopRequireDefault(require("./select.js"));

var _selectAll = _interopRequireDefault(require("./selectAll.js"));

var _selectChild = _interopRequireDefault(require("./selectChild.js"));

var _selectChildren = _interopRequireDefault(require("./selectChildren.js"));

var _filter = _interopRequireDefault(require("./filter.js"));

var _data = _interopRequireDefault(require("./data.js"));

var _enter = _interopRequireDefault(require("./enter.js"));

var _exit = _interopRequireDefault(require("./exit.js"));

var _join = _interopRequireDefault(require("./join.js"));

var _merge = _interopRequireDefault(require("./merge.js"));

var _order = _interopRequireDefault(require("./order.js"));

var _sort = _interopRequireDefault(require("./sort.js"));

var _call = _interopRequireDefault(require("./call.js"));

var _nodes = _interopRequireDefault(require("./nodes.js"));

var _node = _interopRequireDefault(require("./node.js"));

var _size = _interopRequireDefault(require("./size.js"));

var _empty = _interopRequireDefault(require("./empty.js"));

var _each = _interopRequireDefault(require("./each.js"));

var _attr = _interopRequireDefault(require("./attr.js"));

var _style = _interopRequireDefault(require("./style.js"));

var _property = _interopRequireDefault(require("./property.js"));

var _classed = _interopRequireDefault(require("./classed.js"));

var _text = _interopRequireDefault(require("./text.js"));

var _html = _interopRequireDefault(require("./html.js"));

var _raise = _interopRequireDefault(require("./raise.js"));

var _lower = _interopRequireDefault(require("./lower.js"));

var _append = _interopRequireDefault(require("./append.js"));

var _insert = _interopRequireDefault(require("./insert.js"));

var _remove = _interopRequireDefault(require("./remove.js"));

var _clone = _interopRequireDefault(require("./clone.js"));

var _datum = _interopRequireDefault(require("./datum.js"));

var _on = _interopRequireDefault(require("./on.js"));

var _dispatch = _interopRequireDefault(require("./dispatch.js"));

var _iterator = _interopRequireDefault(require("./iterator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = [null];
exports.root = root;

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select.default,
  selectAll: _selectAll.default,
  selectChild: _selectChild.default,
  selectChildren: _selectChildren.default,
  filter: _filter.default,
  data: _data.default,
  enter: _enter.default,
  exit: _exit.default,
  join: _join.default,
  merge: _merge.default,
  selection: selection_selection,
  order: _order.default,
  sort: _sort.default,
  call: _call.default,
  nodes: _nodes.default,
  node: _node.default,
  size: _size.default,
  empty: _empty.default,
  each: _each.default,
  attr: _attr.default,
  style: _style.default,
  property: _property.default,
  classed: _classed.default,
  text: _text.default,
  html: _html.default,
  raise: _raise.default,
  lower: _lower.default,
  append: _append.default,
  insert: _insert.default,
  remove: _remove.default,
  clone: _clone.default,
  datum: _datum.default,
  on: _on.default,
  dispatch: _dispatch.default,
  [Symbol.iterator]: _iterator.default
};
var _default = selection;
exports.default = _default;
},{"./select.js":"../node_modules/d3-selection/src/selection/select.js","./selectAll.js":"../node_modules/d3-selection/src/selection/selectAll.js","./selectChild.js":"../node_modules/d3-selection/src/selection/selectChild.js","./selectChildren.js":"../node_modules/d3-selection/src/selection/selectChildren.js","./filter.js":"../node_modules/d3-selection/src/selection/filter.js","./data.js":"../node_modules/d3-selection/src/selection/data.js","./enter.js":"../node_modules/d3-selection/src/selection/enter.js","./exit.js":"../node_modules/d3-selection/src/selection/exit.js","./join.js":"../node_modules/d3-selection/src/selection/join.js","./merge.js":"../node_modules/d3-selection/src/selection/merge.js","./order.js":"../node_modules/d3-selection/src/selection/order.js","./sort.js":"../node_modules/d3-selection/src/selection/sort.js","./call.js":"../node_modules/d3-selection/src/selection/call.js","./nodes.js":"../node_modules/d3-selection/src/selection/nodes.js","./node.js":"../node_modules/d3-selection/src/selection/node.js","./size.js":"../node_modules/d3-selection/src/selection/size.js","./empty.js":"../node_modules/d3-selection/src/selection/empty.js","./each.js":"../node_modules/d3-selection/src/selection/each.js","./attr.js":"../node_modules/d3-selection/src/selection/attr.js","./style.js":"../node_modules/d3-selection/src/selection/style.js","./property.js":"../node_modules/d3-selection/src/selection/property.js","./classed.js":"../node_modules/d3-selection/src/selection/classed.js","./text.js":"../node_modules/d3-selection/src/selection/text.js","./html.js":"../node_modules/d3-selection/src/selection/html.js","./raise.js":"../node_modules/d3-selection/src/selection/raise.js","./lower.js":"../node_modules/d3-selection/src/selection/lower.js","./append.js":"../node_modules/d3-selection/src/selection/append.js","./insert.js":"../node_modules/d3-selection/src/selection/insert.js","./remove.js":"../node_modules/d3-selection/src/selection/remove.js","./clone.js":"../node_modules/d3-selection/src/selection/clone.js","./datum.js":"../node_modules/d3-selection/src/selection/datum.js","./on.js":"../node_modules/d3-selection/src/selection/on.js","./dispatch.js":"../node_modules/d3-selection/src/selection/dispatch.js","./iterator.js":"../node_modules/d3-selection/src/selection/iterator.js"}],"../node_modules/d3-selection/src/select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _index = require("./selection/index.js");

function _default(selector) {
  return typeof selector === "string" ? new _index.Selection([[document.querySelector(selector)]], [document.documentElement]) : new _index.Selection([[selector]], _index.root);
}
},{"./selection/index.js":"../node_modules/d3-selection/src/selection/index.js"}],"../node_modules/d3-selection/src/create.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _creator = _interopRequireDefault(require("./creator.js"));

var _select = _interopRequireDefault(require("./select.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(name) {
  return (0, _select.default)((0, _creator.default)(name).call(document.documentElement));
}
},{"./creator.js":"../node_modules/d3-selection/src/creator.js","./select.js":"../node_modules/d3-selection/src/select.js"}],"../node_modules/d3-selection/src/local.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = local;
var nextId = 0;

function local() {
  return new Local();
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function (node) {
    var id = this._;

    while (!(id in node)) if (!(node = node.parentNode)) return;

    return node[id];
  },
  set: function (node, value) {
    return node[this._] = value;
  },
  remove: function (node) {
    return this._ in node && delete node[this._];
  },
  toString: function () {
    return this._;
  }
};
},{}],"../node_modules/d3-selection/src/sourceEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(event) {
  let sourceEvent;

  while (sourceEvent = event.sourceEvent) event = sourceEvent;

  return event;
}
},{}],"../node_modules/d3-selection/src/pointer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sourceEvent = _interopRequireDefault(require("./sourceEvent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(event, node) {
  event = (0, _sourceEvent.default)(event);
  if (node === undefined) node = event.currentTarget;

  if (node) {
    var svg = node.ownerSVGElement || node;

    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }

    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }

  return [event.pageX, event.pageY];
}
},{"./sourceEvent.js":"../node_modules/d3-selection/src/sourceEvent.js"}],"../node_modules/d3-selection/src/pointers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _pointer = _interopRequireDefault(require("./pointer.js"));

var _sourceEvent = _interopRequireDefault(require("./sourceEvent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(events, node) {
  if (events.target) {
    // i.e., instanceof Event, not TouchList or iterable
    events = (0, _sourceEvent.default)(events);
    if (node === undefined) node = events.currentTarget;
    events = events.touches || [events];
  }

  return Array.from(events, event => (0, _pointer.default)(event, node));
}
},{"./pointer.js":"../node_modules/d3-selection/src/pointer.js","./sourceEvent.js":"../node_modules/d3-selection/src/sourceEvent.js"}],"../node_modules/d3-selection/src/selectAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = _interopRequireDefault(require("./array.js"));

var _index = require("./selection/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(selector) {
  return typeof selector === "string" ? new _index.Selection([document.querySelectorAll(selector)], [document.documentElement]) : new _index.Selection([selector == null ? [] : (0, _array.default)(selector)], _index.root);
}
},{"./array.js":"../node_modules/d3-selection/src/array.js","./selection/index.js":"../node_modules/d3-selection/src/selection/index.js"}],"../node_modules/d3-selection/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "create", {
  enumerable: true,
  get: function () {
    return _create.default;
  }
});
Object.defineProperty(exports, "creator", {
  enumerable: true,
  get: function () {
    return _creator.default;
  }
});
Object.defineProperty(exports, "local", {
  enumerable: true,
  get: function () {
    return _local.default;
  }
});
Object.defineProperty(exports, "matcher", {
  enumerable: true,
  get: function () {
    return _matcher.default;
  }
});
Object.defineProperty(exports, "namespace", {
  enumerable: true,
  get: function () {
    return _namespace.default;
  }
});
Object.defineProperty(exports, "namespaces", {
  enumerable: true,
  get: function () {
    return _namespaces.default;
  }
});
Object.defineProperty(exports, "pointer", {
  enumerable: true,
  get: function () {
    return _pointer.default;
  }
});
Object.defineProperty(exports, "pointers", {
  enumerable: true,
  get: function () {
    return _pointers.default;
  }
});
Object.defineProperty(exports, "select", {
  enumerable: true,
  get: function () {
    return _select.default;
  }
});
Object.defineProperty(exports, "selectAll", {
  enumerable: true,
  get: function () {
    return _selectAll.default;
  }
});
Object.defineProperty(exports, "selection", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "selector", {
  enumerable: true,
  get: function () {
    return _selector.default;
  }
});
Object.defineProperty(exports, "selectorAll", {
  enumerable: true,
  get: function () {
    return _selectorAll.default;
  }
});
Object.defineProperty(exports, "style", {
  enumerable: true,
  get: function () {
    return _style.styleValue;
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function () {
    return _window.default;
  }
});

var _create = _interopRequireDefault(require("./create.js"));

var _creator = _interopRequireDefault(require("./creator.js"));

var _local = _interopRequireDefault(require("./local.js"));

var _matcher = _interopRequireDefault(require("./matcher.js"));

var _namespace = _interopRequireDefault(require("./namespace.js"));

var _namespaces = _interopRequireDefault(require("./namespaces.js"));

var _pointer = _interopRequireDefault(require("./pointer.js"));

var _pointers = _interopRequireDefault(require("./pointers.js"));

var _select = _interopRequireDefault(require("./select.js"));

var _selectAll = _interopRequireDefault(require("./selectAll.js"));

var _index = _interopRequireDefault(require("./selection/index.js"));

var _selector = _interopRequireDefault(require("./selector.js"));

var _selectorAll = _interopRequireDefault(require("./selectorAll.js"));

var _style = require("./selection/style.js");

var _window = _interopRequireDefault(require("./window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./create.js":"../node_modules/d3-selection/src/create.js","./creator.js":"../node_modules/d3-selection/src/creator.js","./local.js":"../node_modules/d3-selection/src/local.js","./matcher.js":"../node_modules/d3-selection/src/matcher.js","./namespace.js":"../node_modules/d3-selection/src/namespace.js","./namespaces.js":"../node_modules/d3-selection/src/namespaces.js","./pointer.js":"../node_modules/d3-selection/src/pointer.js","./pointers.js":"../node_modules/d3-selection/src/pointers.js","./select.js":"../node_modules/d3-selection/src/select.js","./selectAll.js":"../node_modules/d3-selection/src/selectAll.js","./selection/index.js":"../node_modules/d3-selection/src/selection/index.js","./selector.js":"../node_modules/d3-selection/src/selector.js","./selectorAll.js":"../node_modules/d3-selection/src/selectorAll.js","./selection/style.js":"../node_modules/d3-selection/src/selection/style.js","./window.js":"../node_modules/d3-selection/src/window.js"}],"img/css-icons/arrow-down-black.svg":[function(require,module,exports) {
module.exports = "/arrow-down-black.5a275c38.svg";
},{}],"img/css-icons/arrow-down.svg":[function(require,module,exports) {
module.exports = "/arrow-down.5a58f9ac.svg";
},{}],"img/css-icons/cyber.svg":[function(require,module,exports) {
module.exports = "/cyber.90da9b39.svg";
},{}],"img/css-icons/electronic-DetailsFlag.svg":[function(require,module,exports) {
module.exports = "/electronic-DetailsFlag.0d75a7fc.svg";
},{}],"img/css-icons/electronic.svg":[function(require,module,exports) {
module.exports = "/electronic.d04db2d8.svg";
},{}],"img/css-icons/kinetic-physical.svg":[function(require,module,exports) {
module.exports = "/kinetic-physical.ce64b425.svg";
},{}],"img/css-icons/non-kinetic-physical-DetailsFlag.svg":[function(require,module,exports) {
module.exports = "/non-kinetic-physical-DetailsFlag.e2b58b49.svg";
},{}],"img/css-icons/non-kinetic-physical.svg":[function(require,module,exports) {
module.exports = "/non-kinetic-physical.63ae79f9.svg";
},{}],"img/css-icons/cyber-DetailsFlag.svg":[function(require,module,exports) {
module.exports = "/cyber-DetailsFlag.03fb2117.svg";
},{}],"img/css-icons/kinetic-physical-DetailsFlag.svg":[function(require,module,exports) {
module.exports = "/kinetic-physical-DetailsFlag.ab31f91b.svg";
},{}],"img/css-icons/*.svg":[function(require,module,exports) {
module.exports = {
  "arrow-down-black": require("./arrow-down-black.svg"),
  "arrow-down": require("./arrow-down.svg"),
  "cyber": require("./cyber.svg"),
  "electronic-DetailsFlag": require("./electronic-DetailsFlag.svg"),
  "electronic": require("./electronic.svg"),
  "kinetic-physical": require("./kinetic-physical.svg"),
  "non-kinetic-physical-DetailsFlag": require("./non-kinetic-physical-DetailsFlag.svg"),
  "non-kinetic-physical": require("./non-kinetic-physical.svg"),
  "cyber-DetailsFlag": require("./cyber-DetailsFlag.svg"),
  "kinetic-physical-DetailsFlag": require("./kinetic-physical-DetailsFlag.svg")
};
},{"./arrow-down-black.svg":"img/css-icons/arrow-down-black.svg","./arrow-down.svg":"img/css-icons/arrow-down.svg","./cyber.svg":"img/css-icons/cyber.svg","./electronic-DetailsFlag.svg":"img/css-icons/electronic-DetailsFlag.svg","./electronic.svg":"img/css-icons/electronic.svg","./kinetic-physical.svg":"img/css-icons/kinetic-physical.svg","./non-kinetic-physical-DetailsFlag.svg":"img/css-icons/non-kinetic-physical-DetailsFlag.svg","./non-kinetic-physical.svg":"img/css-icons/non-kinetic-physical.svg","./cyber-DetailsFlag.svg":"img/css-icons/cyber-DetailsFlag.svg","./kinetic-physical-DetailsFlag.svg":"img/css-icons/kinetic-physical-DetailsFlag.svg"}],"js/chart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _ = _interopRequireDefault(require("../img/css-icons/*.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import * as d3 from 'd3'
var d3 = Object.assign({}, require('d3-selection'));
var chart = drawChart();
var el; // If  needed, declare any globally accessible variables you might need here to optimize selections

var entries;

function drawChart() {
  /**
   *
   * Draw the main part of the chart: bars, lines, etc.
   *
   */
  function drawPlot(_ref) {
    var container = _ref.container,
        data = _ref.data;
    data.sort(function (a, b) {
      return a.dates - b.dates;
    });
    console.log(data);

    for (var i = 0; i < data.length; i++) {
      console.log(data[i].year);
    } // Generates id of entries for first appearance of a year


    var firstOfYearIds = {};
    var yearGapIds = {};
    var years = (0, _toConsumableArray2.default)(new Set(data.map(function (d) {
      return d.year;
    }))).forEach(function (year) {
      var entry = data.find(function (d) {
        return d.year === year;
      });
      firstOfYearIds[entry.id] = true;
    });
    entries = container.selectAll('.timeline__entry').data(data, function (d) {
      return d.id;
    }).join('li').attr('class', 'timeline__entry').classed('is-first-of-year', function (d) {
      return firstOfYearIds[d.id];
    }).attr('data-id', function (d) {
      return d.id;
    }).attr('data-year', function (d) {
      return d.year;
    }).html(function (d) {
      return generateTimelineEntry(d);
    });
  }

  function generateTimelineEntry(d) {
    // Update the contents of the timeline entry div
    // details + summary for the details/source info: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
    var firstOfYears = (0, _toConsumableArray2.default)(document.getElementsByClassName('is-first-of-year')); // let yearsArr = []
    // firstOfYears.forEach((year) => {
    //   console.log(year.getAttribute('data-year'))
    // })

    var moreInfo;
    var detailsIcon = '';
    var detailsImage = '';
    var categoryName = d.category.replace(/\s+/g, '-').toLowerCase();
    var categoryDetailsIcon = categoryName + '-DetailsFlag';

    if (d.imageURL) {
      detailsImage = "<img src=\"".concat(d.imageURL, "\" class=\"action__details-image\" />");
    }

    if (d.storyBool == false && d.learnMore == false) {
      moreInfo = "<summary>Source</summary><div class=\"action__details-inner\"><h2 class=\"action__source-label\">Source</h2><p class=\"action__source\">".concat(d.source, "</p></div>");
    } else if (d.learnMore == false) {
      moreInfo = "<summary>Details</summary><div class=\"action__details-inner\"><div class=\"action__details-body\">".concat(d.story, "</div>").concat(detailsImage, "<h2 class=\"action__source-label\">Source</h2><p class=\"action__source\">").concat(d.source, "</p></div>");
      detailsIcon = "<img src=\"".concat(_.default[categoryDetailsIcon], "\" class=\"action__details-icon\" />");
    } else {
      moreInfo = "<summary>Details</summary><div class=\"action__details-inner\"><div class=\"action__details-body\">".concat(d.story, "</div>").concat(detailsImage, "<a href=\"").concat(d.learnMoreURL, "\" class=\"action__details-link\">Explore &#8594;</a><h2 class=\"action__source-label\">Source</h2><p class=\"action__source\">").concat(d.source, "</p></div>");
      detailsIcon = "<img src=\"".concat(_.default[categoryDetailsIcon], "\" class=\"action__details-icon\" />");
    }

    var actionDate;
    var actionEndDate;
    var monthNames = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

    if (!d.startDate) {
      actionDate = d.startYear;
    } else {
      actionDate = formatDate(d.startDate);
    }

    if (!d.endDate && !d.endYear) {
      actionEndDate = '';
    } else if (!d.endDate) {
      actionEndDate = ' - ' + d.endYear;
    } else {
      actionEndDate = ' - ' + formatDate(d.endDate);
    }

    function formatDate(dateIn) {
      var offDate = new Date(dateIn);
      var month = monthNames[offDate.getUTCMonth()];
      var day = offDate.getUTCDate();
      var year = offDate.getUTCFullYear();

      if (day > 1) {
        return month + ' ' + day + ', ' + year;
      } else {
        return month + ' ' + year;
      }
    }

    var categoryIcon = d.category.replace(/\s+/g, '-').toLowerCase();
    return "\n    <div class=\"timeline__entry-grid ".concat(categoryName, "\">\n    ").concat(detailsIcon, "\n    <img src=\"").concat(_.default[categoryIcon], "\" class=\"action__icon\" />\n    <span class=\"action__year wp-caption-text\">").concat(actionDate).concat(actionEndDate, "</span><span class=\"action__country wp-caption-text\">").concat(d.country, "</span>\n    <span class=\"action__category mobile-only ").concat(categoryName, "\">").concat(d.category, "</span>\n    <h2 class=\"action__title entry-highlights-title\">").concat(d.title, "</h2>\n    <p class=\"action__type\">").concat(d.type, "</p>\n    </div>\n    <details class=\"action__details\">").concat(moreInfo, "</details>\n    ");
  }

  function chart(container) {
    var data = container.datum();
    drawPlot({
      container: container,
      data: data
    });
  }

  return chart;
}

function init(args) {
  el = d3.select(args.container);
  el.datum(args.data);
  el.call(chart);
}

var _default = {
  init: init
};
exports.default = _default;
},{"@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js","d3-selection":"../node_modules/d3-selection/src/index.js","../img/css-icons/*.svg":"img/css-icons/*.svg"}],"js/dropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var d3 = Object.assign({}, require('d3-selection'));
var selectors = {
  setup: function setup(_ref) {
    var selector = _ref.selector,
        name = _ref.name,
        data = _ref.data,
        current = _ref.current,
        onChange = _ref.onChange;
    var selectEl = d3.select(selector).attr('name', name).on('change', onChange); // Can remove onChange if we use apply button

    var options = selectEl.selectAll('option').data(data);
    options.enter().append('option').text(function (d) {
      return d.label;
    }).property('value', function (d) {
      return d.value;
    }).property('selected', function (d) {
      return d.value == current;
    }).property('disabled', function (d) {
      return d.disabled;
    });
  },
  getCurrent: function getCurrent(selector) {
    return document.querySelector(selector).value;
  },
  setCurrent: function setCurrent(_ref2) {
    var selector = _ref2.selector,
        value = _ref2.value;
    document.querySelector(selector).value = value;
  }
};
var _default = selectors;
exports.default = _default;
},{"d3-selection":"../node_modules/d3-selection/src/index.js"}],"js/buttons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var d3 = Object.assign({}, require('d3-selection'));
var Buttons = {
  selector: null,
  buttons: null,
  createButtons: function createButtons(_ref) {
    var selector = _ref.selector,
        data = _ref.data,
        current = _ref.current,
        onClick = _ref.onClick;
    this.selector = selector;
    this.buttons = d3.select(selector).selectAll('button').data(data).join('button').attr('class', 'btn btn--select').html(function (d) {
      return d.label;
    }).attr('data-value', function (d) {
      return d.value;
    }).classed('is-selected', function (d) {
      return d.value === current;
    }).attr('aria-pressed', function (d) {
      return d.value === current;
    }).on('click', onClick);
  },
  getCurrent: function getCurrent() {
    return document.querySelector("".concat(this.selector, ".is-selected")).dataset.value;
  },
  setSelectedButton: function setSelectedButton(currentValue) {
    this.buttons.classed('is-selected', function (d) {
      return d.value === currentValue;
    }).attr('aria-pressed', function (d) {
      return d.value === currentValue;
    });
  }
};
var _default = Buttons;
exports.default = _default;
},{"d3-selection":"../node_modules/d3-selection/src/index.js"}],"js/checkbox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var d3 = Object.assign({}, require('d3-selection'));
var Checkbox = {
  setup: function setup(_ref) {
    var selector = _ref.selector,
        name = _ref.name,
        data = _ref.data,
        current = _ref.current;
    var selectEl = d3.select(selector).attr('name', name);
    selectEl.selectAll('.checkbox-container').data(data).join(function (enter) {
      return enter.append('div').attr('class', 'checkbox-container').attr('data-category', function (d) {
        return d.value;
      }).each(function (d) {
        d3.select(this).append('span').attr('class', 'checkbox-expander').text('+');
      }).each(generateCheckboxes);
    }); // .each(function (d) {
    //   d3.select(this)
    //     .select('input')
    //     .property('checked', current.includes(d.value))
    // })
  },
  getCurrent: function getCurrent(selector, wrapperClass) {
    var selected = [];
    d3.selectAll("".concat(selector, " ").concat(wrapperClass, " input:checked")).each(function (d) {
      if (!d.parent) {
        selected.push(d.value);
      } else {
        selected.push(d.value + d.parent);
      }
    });
    return selected;
  }
};

function generateCheckboxes(d, i, n) {
  var container = d3.select(this);
  var parent = container.append('div').attr('class', 'parent');
  parent.append('input').attr('type', 'checkbox').property('checked', true).attr('id', function (d) {
    return d.value;
  }).property('value', function (d) {
    return d.value;
  }).on('change', parentSelection);
  parent.append('label').attr('for', function (d) {
    return d.value;
  }).text(function (d) {
    return d.label;
  });
  container.selectAll('.child').data(d.children).join(function (enter) {
    return enter.append('div').attr('class', 'child').each(generateChildren);
  });
}

function parentSelection(e, d) {
  var isChecked = this.checked;
  d.children.map(function (c) {
    return document.getElementById(c.value + c.parent);
  }).forEach(function (el) {
    return el.checked = isChecked;
  });
}

function generateChildren(d, i, n) {
  var container = d3.select(this);
  container.append('input').attr('type', 'checkbox').property('checked', true).attr('id', function (d) {
    return d.value + d.parent;
  }).property('value', function (d) {
    return d.value;
  }).on('change', function (event, d) {
    childSelection(d, n);
  });
  container.append('label').attr('for', function (d) {
    return d.value;
  }).text(function (d) {
    return d.label;
  });
}

function childSelection(d, childrenNodes) {
  var parentE = document.getElementById(d.parent);
  var numberOfCheckedChildren = childrenNodes.filter(function (node) {
    return node.children[0].checked;
  }).length;

  if (childrenNodes.length === numberOfCheckedChildren) {
    parentE.checked = true;
  } else {
    parentE.checked = false;
  }
}

var _default = Checkbox;
exports.default = _default;
},{"d3-selection":"../node_modules/d3-selection/src/index.js"}],"../img/css-icons/*.svg":[function(require,module,exports) {
module.exports = {};
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _data = require("./js/data");

var _chart = _interopRequireDefault(require("./js/chart"));

var _dropdown = _interopRequireDefault(require("./js/dropdown"));

var _buttons = _interopRequireDefault(require("./js/buttons"));

var _checkbox = _interopRequireDefault(require("./js/checkbox"));

var _ = _interopRequireDefault(require("../img/css-icons/*.svg"));

require("./scss/main.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR2JDQ4Sz-mqm1dsVfKT2vF9rINxli4Gm79FYFUZas7AzpgJwkW9jJ1ct7tuMHukwWJEH8qjAGIzfu8/pub?gid=892231861&single=true&output=csv';
var data;
var countrySelector = '#filter-country';
var currentCountry = [];
var startYearSelector = '#filter-start-year';
var endYearSelector = '#filter-end-year';
var startYear;
var endYear;
var categorySelector = '.interactive__filters--category';
var currentCategories = [];
var currentSubcategories = [];
var storyToggle = document.querySelector('#story-toggle');
var showStoriesOnly = '';
var clearAllSelector = '.filter-clear';
var defaults = {};
/**
 *
 * Filter menu functionality
 *
 */

document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var menu = document.querySelector('.interactive__filters-wrapper');
  var content = document.querySelector('#interactive__timeline');
  var header = document.querySelector('.interactive__header');
  var description = document.querySelector('.interactive__description');

  function setAria() {
    var isExpanded = hamburger.getAttribute('aria-expanded');

    if (isExpanded == 'true') {
      isExpanded = 'false';
    } else {
      isExpanded = 'true';
    }

    hamburger.setAttribute('aria-expanded', isExpanded);
  }

  hamburger.addEventListener('click', function () {
    menu.classList.toggle('is-visible');
    setAria();
  });
  content.addEventListener('click', function () {
    if (menu.classList.contains('is-visible')) {
      menu.classList.remove('is-visible');
      setAria();
    }
  });
  var options = {};

  if (window.innerWidth >= 1024) {
    options = {
      rootMargin: '-85px'
    };
  } else {
    options = {
      rootMargin: '-26px'
    };
  }

  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      console.log(entry);

      if (!entry.isIntersecting) {
        header.classList.add('sticky');
        content.classList.add('margin-top');
      } else {
        header.classList.remove('sticky');
        content.classList.remove('margin-top');
      }
    });
  }, options);
  window.onresize;
  observer.observe(description);
});

function init() {
  loadDataAndSetup();
}

function loadDataAndSetup() {
  return _loadDataAndSetup.apply(this, arguments);
}

function _loadDataAndSetup() {
  _loadDataAndSetup = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var parentEl, colorBackground, categoryToggle, toggleCategoryCheckboxes;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            toggleCategoryCheckboxes = function _toggleCategoryCheckb(e) {
              var isToggle = e.target.classList.contains('checkbox-expander');

              if (!isToggle) {
                return;
              }

              e.target.parentElement.classList.toggle('isExpanded');

              if (e.target.innerHTML == '+') {
                e.target.innerHTML = '&#8722';
              } else {
                e.target.innerHTML = '+';
              }
            };

            colorBackground = function _colorBackground(e) {
              if (e.target !== e.currentTarget) {
                if (e.target.tagName == 'SUMMARY') {
                  e.target.closest('.timeline__entry').classList.toggle('details-active');
                }
              }
            };

            _context.next = 4;
            return (0, _data.parseData)({
              src: dataSrc
            });

          case 4:
            data = _context.sent;
            defaults = {
              startYear: data.years[0],
              endYear: data.years[1],
              currentCategories: data.categories,
              showStoriesOnly: false,
              currentCountry: 'all'
            };
            startYear = defaults.startYear;
            endYear = defaults.endYear;
            currentCategories = defaults.currentCategories;
            showStoriesOnly = defaults.showStoriesOnly;
            currentCountry = defaults.currentCountry;
            setupCountrySelector();
            setupYearSelector();
            setupCategorySelector();
            setupFormButtons();
            checkSubcategories();
            drawChart();
            hideLoading();
            parentEl = document.querySelector('#interactive__timeline');
            parentEl.addEventListener('click', colorBackground);
            categoryToggle = document.querySelector(categorySelector);
            categoryToggle.addEventListener('click', toggleCategoryCheckboxes);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadDataAndSetup.apply(this, arguments);
}

function checkSubcategories() {
  for (var category in data.subcategories) {
    var parentE = document.querySelectorAll('.parent');

    if (parentE.checked == 'checked') {
      var children = document.querySelectorAll('.child');
      children.checked = 'checked';
    }
  }
}
/**
 *
 * Setup Country Selector
 *
 */


function setupCountrySelector() {
  var options = data.countries.map(function (country) {
    return {
      value: country,
      label: country
    };
  });
  options.unshift({
    value: 'all',
    label: 'All countries'
  });

  _dropdown.default.setup({
    selector: countrySelector,
    name: 'filter-country',
    data: options,
    current: currentCountry,
    onChange: function onChange(e) {} // Won't need if we have apply btn

  });
}
/**
 *
 * Setup Year Selectors
 *
 */


function setupYearSelector() {
  var options = [];

  for (var i = startYear; i <= endYear; i++) {
    options.push({
      value: i,
      label: i
    });
  }

  _dropdown.default.setup({
    selector: startYearSelector,
    name: 'filter-start-year',
    data: options,
    current: startYear,
    onChange: function onChange(e) {} // Won't need if we have apply btn

  });

  _dropdown.default.setup({
    selector: endYearSelector,
    name: 'filter-end-year',
    data: options.reverse(),
    current: endYear,
    onChange: function onChange(e) {} // Won't need if we have apply btn

  });
}
/**
 *
 * Setup Apply & Clear Buttons
 *
 */


function setupFormButtons() {
  document.getElementById('filter-apply').addEventListener('click', function () {
    drawChart();
  });
  document.getElementById('filter-clear').addEventListener('click', function () {
    var countryDropdown = document.querySelector(countrySelector);
    countryDropdown.value = defaults.currentCountry;
    var startDropdown = document.querySelector(startYearSelector);
    startDropdown.value = defaults.startYear;
    var endDropdown = document.querySelector(endYearSelector);
    endDropdown.value = defaults.endYear;
    var categoryCheckboxes = document.querySelectorAll('.parent input[type=checkbox]');

    for (var i = 0; i < categoryCheckboxes.length; i++) {
      categoryCheckboxes[i].checked = true;
    }

    storyToggle.checked = defaults.showStoriesOnly;
    drawChart();
  });
}
/**
 *
 * Setup category filter.
 *
 */


function setupCategorySelector() {
  var options = Object.keys(data.subcategories).map(function (category) {
    return {
      value: category,
      label: category,
      children: data.subcategories[category].map(function (subcat) {
        return {
          value: subcat,
          label: subcat,
          parent: category
        };
      })
    };
  });

  _checkbox.default.setup({
    selector: categorySelector,
    name: 'filter-category',
    data: options,
    current: currentCategories
  });
}
/**
 *
 * Setup story filter.
 *
 */


function getShowStoryValue() {
  return storyToggle.checked;
}
/**
 *
 * Calls the Chart function to draw the chart with the current dataset.
 *
 */


function drawChart() {
  currentCountry = _dropdown.default.getCurrent(countrySelector);
  startYear = _dropdown.default.getCurrent(startYearSelector);
  endYear = _dropdown.default.getCurrent(endYearSelector);
  currentCategories = _checkbox.default.getCurrent(categorySelector, '.parent');
  currentSubcategories = _checkbox.default.getCurrent(categorySelector, '.child');
  showStoriesOnly = getShowStoryValue(); // Filter data based on selected filter functions (eg. year, category, type, etc.)

  var dataset = data.values.filter(function (d) {
    // Filter by date, taking into account items that span multiple years
    var showBasedOnYear = false;

    if (d.endYear) {
      if (d.startYear >= startYear && d.startYear <= endYear || d.endYear >= startYear && d.endYear <= endYear || d.startYear <= startYear && d.endYear >= endYear) {
        showBasedOnYear = true;
      }
    } else {
      if (d.startYear >= startYear && d.startYear <= endYear) {
        showBasedOnYear = true;
      }
    }

    if ((currentCountry.includes(d.country) || currentCountry.includes('all')) && showBasedOnYear && (currentCategories.includes(d.category) || currentSubcategories.includes(d.type + d.category))) {
      // Only apply this conditional if showStoriesOnly = true
      if (showStoriesOnly) {
        return d.storyBool ? d : false;
      }

      return d;
    }
  });

  _chart.default.init({
    data: dataset,
    container: '#interactive__timeline'
  });
}
/**
 *
 * Hides all elements hidden on initial load
 *
 */


function hideLoading() {
  document.querySelector('.loading-container').style.display = 'none';
  document.querySelectorAll('.hide-on-load').forEach(function (el) {
    return el.classList.remove('hide-on-load');
  });
}

window.addEventListener('DOMContentLoaded', init);
},{"@babel/runtime/regenerator":"../node_modules/@babel/runtime/regenerator/index.js","@babel/runtime/helpers/asyncToGenerator":"../node_modules/@babel/runtime/helpers/asyncToGenerator.js","./js/data":"js/data.js","./js/chart":"js/chart.js","./js/dropdown":"js/dropdown.js","./js/buttons":"js/buttons.js","./js/checkbox":"js/checkbox.js","../img/css-icons/*.svg":"../img/css-icons/*.svg","./scss/main.scss":"scss/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61612" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map