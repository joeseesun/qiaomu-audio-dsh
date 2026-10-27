import {createRequire as __nodeRequire} from 'node:module';const require=__nodeRequire(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "node_modules/ws/lib/constants.js"(exports, module) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: /* @__PURE__ */ Symbol("kIsForOnEventAttribute"),
      kListener: /* @__PURE__ */ Symbol("kListener"),
      kStatusCode: /* @__PURE__ */ Symbol("status-code"),
      kWebSocket: /* @__PURE__ */ Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "node_modules/ws/lib/buffer-util.js"(exports, module) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = __require("bufferutil");
        module.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "node_modules/ws/lib/limiter.js"(exports, module) {
    "use strict";
    var kDone = /* @__PURE__ */ Symbol("kDone");
    var kRun = /* @__PURE__ */ Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module.exports = Limiter;
  }
});

// node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "node_modules/ws/lib/permessage-deflate.js"(exports, module) {
    "use strict";
    var zlib = __require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = /* @__PURE__ */ Symbol("permessage-deflate");
    var kTotalLength = /* @__PURE__ */ Symbol("total-length");
    var kCallback = /* @__PURE__ */ Symbol("callback");
    var kBuffers = /* @__PURE__ */ Symbol("buffers");
    var kError = /* @__PURE__ */ Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate2 = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {Boolean} [options.isServer=false] Create the instance in either
       *     server or client mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       */
      constructor(options) {
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._maxPayload = this._options.maxPayload | 0;
        this._isServer = !!this._options.isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && (typeof params.client_max_window_bits === "number" ? opts.clientMaxWindowBits > params.client_max_window_bits : !params.client_max_window_bits)) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module.exports = PerMessageDeflate2;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "node_modules/ws/lib/validation.js"(exports, module) {
    "use strict";
    var { isUtf8 } = __require("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = __require("utf-8-validate");
        module.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "node_modules/ws/lib/receiver.js"(exports, module) {
    "use strict";
    var { Writable } = __require("stream");
    var PerMessageDeflate2 = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxBufferedChunks=0] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=0] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxBufferedChunks = options.maxBufferedChunks | 0;
        this._maxFragments = options.maxFragments | 0;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._numFragments = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        if (this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks) {
          cb(
            this.createError(
              RangeError,
              "Too many buffered chunks",
              false,
              1008,
              "WS_ERR_TOO_MANY_BUFFERED_PARTS"
            )
          );
          return;
        }
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate2.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
          const error = this.createError(
            RangeError,
            "Too many message fragments",
            false,
            1008,
            "WS_ERR_TOO_MANY_BUFFERED_PARTS"
          );
          cb(error);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._numFragments = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module.exports = Receiver2;
  }
});

// node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "node_modules/ws/lib/sender.js"(exports, module) {
    "use strict";
    var { Duplex } = __require("stream");
    var { randomFillSync } = __require("crypto");
    var {
      types: { isUint8Array }
    } = __require("util");
    var PerMessageDeflate2 = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = /* @__PURE__ */ Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions2, generateMask) {
        this._extensions = extensions2 || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else if (isUint8Array(data)) {
            buf.set(data, 2);
          } else {
            throw new TypeError("Second argument must be a string or a Uint8Array");
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "node_modules/ws/lib/event-target.js"(exports, module) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = /* @__PURE__ */ Symbol("kCode");
    var kData = /* @__PURE__ */ Symbol("kData");
    var kError = /* @__PURE__ */ Symbol("kError");
    var kMessage = /* @__PURE__ */ Symbol("kMessage");
    var kReason = /* @__PURE__ */ Symbol("kReason");
    var kTarget = /* @__PURE__ */ Symbol("kTarget");
    var kType = /* @__PURE__ */ Symbol("kType");
    var kWasClean = /* @__PURE__ */ Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "node_modules/ws/lib/extension.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse(header2) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header2.length; i++) {
        code = header2.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header2.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header2.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header2.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header2.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            let value = header2.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
      const token = header2.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions2) {
      return Object.keys(extensions2).map((extension2) => {
        let configurations = extensions2[extension2];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension2].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values)) values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module.exports = { format, parse };
  }
});

// node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/ws/lib/websocket.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var https = __require("https");
    var http = __require("http");
    var net = __require("net");
    var tls = __require("tls");
    var { randomBytes, createHash: createHash2 } = __require("crypto");
    var { Duplex, Readable } = __require("stream");
    var { URL: URL2 } = __require("url");
    var PerMessageDeflate2 = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = /* @__PURE__ */ Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            if (!options || options.protocols === void 0) {
              protocols = [];
            } else if (Array.isArray(options.protocols)) {
              protocols = options.protocols;
            } else {
              protocols = [options.protocols];
            }
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              if (options.protocols === void 0) {
                protocols = [];
              } else if (Array.isArray(options.protocols)) {
                protocols = options.protocols;
              } else {
                protocols = [options.protocols];
              }
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._closeTimeout = options.closeTimeout;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        if (this._receiver) this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxBufferedChunks=0] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=0] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxBufferedChunks: options.maxBufferedChunks,
          maxFragments: options.maxFragments,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate2.extensionName]) {
          this._extensions[PerMessageDeflate2.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        this._readyState = _WebSocket.CLOSING;
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate2.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxBufferedChunks: 256 * 1024,
        maxFragments: 16 * 1024,
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        protocols: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      websocket._closeTimeout = opts.closeTimeout;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate2({
          ...opts.perMessageDeflate,
          isServer: false,
          maxPayload: opts.maxPayload
        });
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate2.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash2("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions2;
          try {
            extensions2 = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions2);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate2.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions2[PerMessageDeflate2.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxBufferedChunks: opts.maxBufferedChunks,
          maxFragments: opts.maxFragments,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED) return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "node_modules/ws/lib/stream.js"(exports, module) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = __require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module.exports = createWebSocketStream2;
  }
});

// node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "node_modules/ws/lib/subprotocol.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header2) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header2.length; i++) {
        const code = header2.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol2 = header2.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header2.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module.exports = { parse };
  }
});

// node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "node_modules/ws/lib/websocket-server.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var http = __require("http");
    var { Duplex } = __require("stream");
    var { createHash: createHash2 } = __require("crypto");
    var extension2 = require_extension();
    var PerMessageDeflate2 = require_permessage_deflate();
    var subprotocol2 = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxBufferedChunks=262144] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=16384] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxBufferedChunks: 256 * 1024,
          maxFragments: 16 * 1024,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol2.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions2 = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate2({
            ...this.options.perMessageDeflate,
            isServer: true,
            maxPayload: this.options.maxPayload
          });
          try {
            const offers = extension2.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate2.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate2.extensionName]);
              extensions2[PerMessageDeflate2.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions2,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions2, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions2, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash2("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions2[PerMessageDeflate2.extensionName]) {
          const params = extensions2[PerMessageDeflate2.extensionName].params;
          const value = extension2.format({
            [PerMessageDeflate2.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions2;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxBufferedChunks: this.options.maxBufferedChunks,
          maxFragments: this.options.maxFragments,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module.exports = WebSocketServer2;
    function addListeners(server, map) {
      for (const event of Object.keys(map)) server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// src/original/core/tts/timing.js
function alignWords(text, words, cursor = 0) {
  const marks = [];
  for (const entry of words || []) {
    const word = String(entry?.word ?? "").replace(/\s+/g, "");
    const from = Number(entry?.startTime), to = Number(entry?.endTime);
    if (!word || !Number.isFinite(from) || !Number.isFinite(to) || to < from) continue;
    let at = text.indexOf(word, cursor);
    if (at < 0 || at - cursor > 16) {
      const bare = word.replace(/[\p{P}\p{S}]+$/u, "");
      at = bare && bare !== word ? text.indexOf(bare, cursor) : -1;
      if (at < 0 || at - cursor > 16) continue;
      marks.push({ s: at, e: at + bare.length, from, to });
      cursor = at + bare.length;
      continue;
    }
    marks.push({ s: at, e: at + word.length, from, to });
    cursor = at + word.length;
  }
  return { marks, cursor };
}
function activeRange(samples, rate, threshold = 0.012) {
  const limit = threshold * 32768;
  let first = -1, last = -1;
  for (let i = 0; i < samples.length; i++) if (Math.abs(samples[i]) > limit) {
    if (first < 0) first = i;
    last = i;
  }
  return first < 0 ? null : { from: first / rate, to: (last + 1) / rate };
}

// src/original/core/tts/providers.js
var TTS_PROVIDERS = Object.freeze({
  system: { label: "System voice", voice: "", model: "" },
  macos: { label: "Mac local speech", voice: "", model: "" },
  localModel: { label: "Local models", voice: "zf_001", model: "kokoro" },
  edge: { label: "Edge TTS", voice: "zh-CN-XiaoxiaoNeural", model: "" },
  openai: { label: "OpenAI", baseUrl: "https://api.openai.com/v1", model: "gpt-4o-mini-tts", voice: "coral" },
  compatible: { label: "OpenAI-compatible", baseUrl: "", model: "", voice: "" },
  qwen: { label: "Qwen TTS", baseUrl: "https://dashscope.aliyuncs.com/api/v1", model: "qwen3-tts-flash", voice: "Cherry" },
  doubao: { label: "Doubao", baseUrl: "https://openspeech.bytedance.com/api/v3/tts", resourceId: "seed-tts-2.0", voice: "zh_female_vv_uranus_bigtts" },
  minimax: { label: "MiniMax", baseUrl: "https://api.minimax.cn/v1", model: "speech-2.8-hd", voice: "male-qn-qingse" },
  siliconflow: { label: "SiliconFlow", baseUrl: "https://api.siliconflow.cn/v1", model: "FunAudioLLM/CosyVoice2-0.5B", voice: "FunAudioLLM/CosyVoice2-0.5B:alex" },
  elevenlabs: { label: "ElevenLabs", baseUrl: "https://api.elevenlabs.io/v1", model: "eleven_multilingual_v2", voice: "JBFqnCBsd6RMkjVDRZzb" },
  azure: { label: "Azure Speech", region: "", model: "", voice: "zh-CN-XiaoxiaoNeural" }
});
function ttsProfile(settings, id = settings?.provider || "system") {
  return { ...TTS_PROVIDERS[id], ...settings?.profiles?.[id], id };
}
function ttsError(code, status) {
  return Object.assign(new Error(code), { code, status });
}
function checkTtsSignal(signal) {
  if (signal?.aborted) throw Object.assign(new Error("Cancelled"), { name: "AbortError" });
}
function escapeSpeechXml(text) {
  return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]);
}
function ttsBaseUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw ttsError("url");
  }
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password || url.search || url.hash) throw ttsError("url");
  if (url.protocol === "http:" && !["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)) throw ttsError("https");
  return url.href.replace(/\/+$/, "").replace(/\/audio\/speech$/, "");
}
function doubaoTiming(resourceId, enabled) {
  if (!enabled) return {};
  return /2\.0/.test(resourceId) ? { enable_subtitle: true } : /1\.0/.test(resourceId) ? { enable_timestamp: true } : {};
}
function buildSpeechRequest(profile, text, key = "", timing = false) {
  const { id, voice, model } = profile;
  if (!TTS_PROVIDERS[id] || ["system", "macos", "edge"].includes(id)) throw ttsError("provider");
  if (id !== "compatible" && !key) throw ttsError("key");
  if (!voice || !["azure", "doubao"].includes(id) && !model) throw ttsError("configuration");
  const headers = { "Content-Type": "application/json" };
  if (key) headers.Authorization = `Bearer ${key}`;
  if (id === "azure") {
    if (!/^[a-z0-9-]+$/.test(profile.region || "")) throw ttsError("region");
    return {
      url: `https://${profile.region}.tts.speech.microsoft.com/cognitiveservices/v1`,
      method: "POST",
      headers: { "Ocp-Apim-Subscription-Key": key, "Content-Type": "application/ssml+xml", "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3" },
      body: `<speak version="1.0" xml:lang="${escapeSpeechXml(voice.split("-").slice(0, 2).join("-"))}"><voice name="${escapeSpeechXml(voice)}">${escapeSpeechXml(text)}</voice></speak>`
    };
  }
  const base = ttsBaseUrl(profile.baseUrl);
  if (id === "doubao") {
    if (!profile.resourceId) throw ttsError("resource");
    return {
      url: `${base}/unidirectional`,
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Api-Key": key, "X-Api-Resource-Id": profile.resourceId, "X-Api-Request-Id": globalThis.crypto.randomUUID() },
      body: JSON.stringify({ req_params: { text, speaker: voice, audio_params: { format: "mp3", sample_rate: 24e3, ...doubaoTiming(profile.resourceId, timing) } } })
    };
  }
  if (id === "minimax") return {
    url: `${base}/t2a_v2`,
    method: "POST",
    headers,
    body: JSON.stringify({
      model,
      text,
      stream: false,
      output_format: "hex",
      voice_setting: { voice_id: voice, speed: 1, vol: 1, pitch: 0 },
      audio_setting: { format: "mp3", sample_rate: 32e3, bitrate: 128e3, channel: 1 }
    })
  };
  if (id === "elevenlabs") return {
    url: `${base}/text-to-speech/${encodeURIComponent(voice)}?output_format=mp3_44100_128`,
    method: "POST",
    headers: { "Content-Type": "application/json", "xi-api-key": key },
    body: JSON.stringify({ text, model_id: model })
  };
  if (id === "qwen") return {
    url: `${base}/services/aigc/multimodal-generation/generation`,
    method: "POST",
    headers,
    body: JSON.stringify({ model, input: { text, voice, language_type: "Auto" } })
  };
  return {
    url: `${base}/audio/speech`,
    method: "POST",
    headers,
    body: JSON.stringify({ model, input: text, voice, response_format: "mp3" })
  };
}
function awaitSpeechRequest(promise, signal, timeoutMs = 3e4) {
  checkTtsSignal(signal);
  return new Promise((resolve, reject) => {
    const finish = (fn, value) => {
      globalThis.clearTimeout(timer);
      signal?.removeEventListener("abort", abort);
      fn(value);
    };
    const abort = () => finish(reject, Object.assign(new Error("Cancelled"), { name: "AbortError" }));
    const timer = globalThis.setTimeout(() => finish(reject, ttsError("timeout")), timeoutMs);
    signal?.addEventListener("abort", abort, { once: true });
    Promise.resolve(promise).then((v) => finish(resolve, v), (e) => finish(reject, e));
  });
}
function validateResponse(response) {
  if (response.status < 200 || response.status >= 300) throw ttsError("http", response.status);
}
function decodeBase64(value) {
  try {
    return Uint8Array.from(globalThis.atob(value), (c) => c.charCodeAt(0));
  } catch {
    throw ttsError("response");
  }
}
function providerFailure(status) {
  return ttsError("service", status);
}
function doubaoOk(text) {
  try {
    return String(text).split(/\r?\n/).filter((l) => l.trim()).every((l) => [0, 2e7].includes(JSON.parse(l).code));
  } catch {
    return true;
  }
}
function decodeDoubao(text, spoken) {
  let messages;
  try {
    messages = [JSON.parse(text)];
  } catch {
    try {
      messages = text.split(/\r?\n/).filter((line) => line.trim()).map((line) => JSON.parse(line));
    } catch {
      throw ttsError("response");
    }
  }
  const chunks = [], marks = [];
  let size = 0, cursor = 0, shift = 0, end = 0;
  for (const message of messages) {
    if (![0, 2e7].includes(message.code)) throw providerFailure(message.code);
    const words = message.sentence?.words;
    if (Array.isArray(words) && words.length) {
      const first = Number(words[0]?.startTime);
      if (Number.isFinite(first) && first + shift < end - 0.05) shift = end - first;
      const aligned = alignWords(spoken, words.map((w) => ({ ...w, startTime: Number(w.startTime) + shift, endTime: Number(w.endTime) + shift })), cursor);
      cursor = aligned.cursor;
      marks.push(...aligned.marks);
      end = Math.max(end, ...aligned.marks.map((m) => m.to), end);
    }
    if (!message.data) continue;
    const bytes2 = decodeBase64(message.data);
    size += bytes2.length;
    if (size > 8 * 1024 * 1024) throw ttsError("response");
    chunks.push(bytes2);
  }
  if (!size) throw ttsError("empty");
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }
  return marks.length ? { bytes, mime: "audio/mpeg", marks } : { bytes, mime: "audio/mpeg" };
}
async function synthesizeHttp(profile, text, { request, key, signal }) {
  checkTtsSignal(signal);
  const timed = profile.id === "doubao";
  let response = await awaitSpeechRequest(request({ ...buildSpeechRequest(profile, text, key, timed), throw: false }), signal);
  checkTtsSignal(signal);
  if (timed && (response.status < 200 || response.status >= 300 || !doubaoOk(response.text))) {
    response = await awaitSpeechRequest(request({ ...buildSpeechRequest(profile, text, key, false), throw: false }), signal);
    checkTtsSignal(signal);
  }
  validateResponse(response);
  if (profile.id === "doubao") return decodeDoubao(response.text, text);
  if (profile.id === "minimax") {
    const body = response.json;
    if (body?.base_resp?.status_code !== 0) throw providerFailure(body?.base_resp?.status_code);
    const hex = body?.data?.audio;
    if (!hex) throw ttsError("empty");
    if (typeof hex !== "string" || hex.length > 16 * 1024 * 1024 || !/^(?:[0-9a-f]{2})+$/i.test(hex)) throw ttsError("response");
    return { bytes: Uint8Array.from(hex.match(/../g), (pair) => parseInt(pair, 16)), mime: "audio/mpeg" };
  }
  if (profile.id === "qwen") {
    const body = response.json;
    if (body?.code || body?.status_code && body.status_code !== 200) throw ttsError("response");
    const audio = body?.output?.audio;
    if (audio?.data) {
      const bytes2 = decodeBase64(audio.data);
      if (!bytes2.length) throw ttsError("empty");
      return { bytes: bytes2, mime: "audio/wav" };
    }
    let url;
    try {
      url = new URL(audio?.url);
    } catch {
      throw ttsError("empty");
    }
    if (!url.hostname.endsWith(".aliyuncs.com") || !["http:", "https:"].includes(url.protocol)) throw ttsError("response");
    url.protocol = "https:";
    response = await awaitSpeechRequest(request({ url: url.href, throw: false }), signal);
    checkTtsSignal(signal);
    validateResponse(response);
  }
  const bytes = new Uint8Array(response.arrayBuffer || new ArrayBuffer(0));
  const mime = response.headers?.["content-type"] || response.headers?.["Content-Type"] || "audio/mpeg";
  if (!bytes.length) throw ttsError("empty");
  if (/json|html|text\//i.test(mime)) throw ttsError("response");
  return { bytes, mime };
}

// node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_extension = __toESM(require_extension(), 1);
var import_permessage_deflate = __toESM(require_permessage_deflate(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_subprotocol = __toESM(require_subprotocol(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);
var wrapper_default = import_websocket.default;

// src/original/core/tts/edge.js
var TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
async function synthesizeEdge(text, voice, { signal, crypto = globalThis.crypto, Socket = wrapper_default, clockOffset = 0 } = {}) {
  checkTtsSignal(signal);
  const ticks = (Math.floor(((Date.now() + clockOffset) / 1e3 + 11644473600) / 300) * 300 * 1e7).toFixed(0);
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${ticks}${TOKEN}`));
  const hash2 = Array.from(new Uint8Array(digest), (x) => x.toString(16).padStart(2, "0")).join("").toUpperCase();
  checkTtsSignal(signal);
  const id = crypto.randomUUID().replace(/-/g, "");
  const url = `wss://api.msedgeservices.com/tts/cognitiveservices/websocket/v1?Ocp-Apim-Subscription-Key=${TOKEN}&ConnectionId=${id}&Sec-MS-GEC=${hash2}&Sec-MS-GEC-Version=1-143.0.3650.75`;
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let settled = false;
    const ws = new Socket(url, { handshakeTimeout: 1e4, maxPayload: 4 * 1024 * 1024, headers: {
      Origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0",
      Cookie: `muid=${crypto.randomUUID().replace(/-/g, "").toUpperCase()};`
    } });
    const finish = (error) => {
      if (settled) return;
      settled = true;
      globalThis.clearTimeout(timer);
      signal?.removeEventListener("abort", abort);
      ws.terminate();
      if (error) {
        reject(error);
        return;
      }
      if (!size) {
        reject(ttsError("empty"));
        return;
      }
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.length;
      }
      resolve({ bytes, mime: "audio/mpeg" });
    };
    const abort = () => finish(Object.assign(new Error("Cancelled"), { name: "AbortError" }));
    const timer = globalThis.setTimeout(() => finish(ttsError("timeout")), 3e4);
    signal?.addEventListener("abort", abort, { once: true });
    ws.on("error", () => finish(ttsError("network")));
    ws.on("unexpected-response", (_req, res) => {
      const error = ttsError("http", res.statusCode);
      const serverTime = Date.parse(res.headers?.date || "");
      if (Number.isFinite(serverTime)) error.serverTime = serverTime;
      const retry = res.headers?.["retry-after"];
      if (typeof retry === "string" && retry.trim()) {
        const seconds = Number(retry), date = Date.parse(retry);
        const ms = Number.isFinite(seconds) ? seconds * 1e3 : date - (Number.isFinite(serverTime) ? serverTime : Date.now());
        if (Number.isFinite(ms)) error.retryAfterMs = Math.max(0, ms);
      }
      res.resume();
      finish(error);
    });
    ws.on("close", () => finish(ttsError("network")));
    ws.on("open", () => {
      if (settled) return;
      const stamp = (/* @__PURE__ */ new Date()).toUTCString().replace(/^(\w+), (\d+) (\w+) (\d+) (.*) GMT$/, "$1 $3 $2 $4 $5 GMT+0000 (Coordinated Universal Time)");
      ws.send(`X-Timestamp:${stamp}\r
Content-Type:application/json; charset=utf-8\r
Path:speech.config\r
\r
${JSON.stringify({ context: { synthesis: { audio: { metadataoptions: { sentenceBoundaryEnabled: "true", wordBoundaryEnabled: "false" }, outputFormat: "audio-24khz-48kbitrate-mono-mp3" } } } })}`);
      const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><voice name="${escapeSpeechXml(voice)}"><prosody pitch="+0Hz" rate="+0%" volume="+0%">${escapeSpeechXml(text)}</prosody></voice></speak>`;
      ws.send(`X-RequestId:${id}\r
Content-Type:application/ssml+xml\r
X-Timestamp:${stamp}Z\r
Path:ssml\r
\r
${ssml}`);
    });
    ws.on("message", (data, binary) => {
      if (settled) return;
      if (!binary) {
        if (data.toString().includes("Path:turn.end")) finish();
        return;
      }
      const bytes = new Uint8Array(data);
      if (bytes.length < 2) {
        finish(ttsError("response"));
        return;
      }
      const headerLength = bytes[0] << 8 | bytes[1];
      if (headerLength + 2 > bytes.length) {
        finish(ttsError("response"));
        return;
      }
      const header2 = new TextDecoder().decode(bytes.subarray(2, headerLength + 2));
      if (!header2.includes("Path:audio")) {
        finish(ttsError("response"));
        return;
      }
      const payload = bytes.slice(headerLength + 2);
      size += payload.length;
      if (size > 8 * 1024 * 1024) {
        finish(ttsError("response"));
        return;
      }
      chunks.push(payload);
    });
  });
}

// src/original/core/tts/edge-client.js
function cancelled() {
  return Object.assign(new Error("Cancelled"), { name: "AbortError" });
}
function waitFor(ms, signal) {
  checkTtsSignal(signal);
  return new Promise((resolve, reject) => {
    const done = () => {
      signal?.removeEventListener("abort", abort);
      resolve();
    };
    const timer = globalThis.setTimeout(done, ms);
    const abort = () => {
      globalThis.clearTimeout(timer);
      signal?.removeEventListener("abort", abort);
      reject(cancelled());
    };
    signal?.addEventListener("abort", abort, { once: true });
  });
}
var EdgeSpeechClient = class {
  constructor(request, { now = Date.now, wait: wait2 = waitFor, random = Math.random } = {}) {
    Object.assign(this, { request, now, wait: wait2, random });
    this.tail = Promise.resolve();
    this.nextAt = 0;
    this.cooldownUntil = 0;
    this.clockOffset = 0;
  }
  synthesize(text, voice, { signal } = {}) {
    checkTtsSignal(signal);
    const task = this.tail.then(() => this.run(text, voice, signal));
    this.tail = task.catch(() => {
    });
    return new Promise((resolve, reject) => {
      const abort = () => {
        signal?.removeEventListener("abort", abort);
        reject(cancelled());
      };
      signal?.addEventListener("abort", abort, { once: true });
      task.then((value) => {
        signal?.removeEventListener("abort", abort);
        resolve(value);
      }, (error) => {
        signal?.removeEventListener("abort", abort);
        reject(error);
      });
    });
  }
  async run(text, voice, signal) {
    let corrected = false, retries = 0;
    for (; ; ) {
      checkTtsSignal(signal);
      if (this.cooldownUntil > this.now()) throw Object.assign(ttsError("http", 429), { retryAt: this.cooldownUntil });
      const delay2 = this.nextAt - this.now();
      if (delay2 > 0) await this.wait(delay2, signal);
      checkTtsSignal(signal);
      this.nextAt = this.now() + 1e3;
      try {
        return await this.request(text, voice, { signal, clockOffset: this.clockOffset });
      } catch (error) {
        checkTtsSignal(signal);
        if (error.status === 429) {
          const duration = Number.isFinite(error.retryAfterMs) ? Math.max(1e3, error.retryAfterMs) : 3e5;
          this.cooldownUntil = this.now() + duration;
          throw Object.assign(error, { retryAt: this.cooldownUntil });
        }
        if (error.status === 403 && !corrected && Number.isFinite(error.serverTime)) {
          const offset = error.serverTime - this.now();
          if (Math.abs(offset - this.clockOffset) >= 5e3) {
            this.clockOffset = offset;
            corrected = true;
            continue;
          }
        }
        const transient = error.code === "network" || [500, 502, 503, 504].includes(error.status);
        if (!transient || retries >= 2) throw error;
        const backoff = 1500 * 2 ** retries++ + Math.floor(this.random() * 500);
        await this.wait(backoff, signal);
      }
    }
  }
};

// src/original/core/tts/macos.js
import { createRequire } from "node:module";
var require2 = createRequire(import.meta.url);
var Platform = { isDesktop: true, isDesktopApp: true, isMacOS: process.platform === "darwin" };
var MAC_SPEECH_SCRIPT = String.raw`
ObjC.import('Foundation'); ObjC.import('AVFoundation');
function run() {
 const input=$.NSFileHandle.fileHandleWithStandardInput.readDataToEndOfFile;
 const request=JSON.parse(ObjC.unwrap($.NSString.alloc.initWithDataEncoding(input,$.NSUTF8StringEncoding)));
 const all=$.AVSpeechSynthesisVoice.speechVoices;
 if(request.operation==='voices') {
  const voices=[];
  for(let i=0;i<Number(all.count);i++) {
   const v=all.objectAtIndex(i);
   voices.push({id:ObjC.unwrap(v.identifier),name:ObjC.unwrap(v.name),lang:ObjC.unwrap(v.language),quality:Number(v.quality)});
  }
  return JSON.stringify({voices:voices});
 }
 if(request.operation!=='synthesize') throw new Error('operation');
 const voice=request.voice ? $.AVSpeechSynthesisVoice.voiceWithIdentifier(request.voice) : $.AVSpeechSynthesisVoice.voiceWithLanguage(request.language);
 if(!voice) return JSON.stringify({error:'voice'});
 const synth=$.AVSpeechSynthesizer.alloc.init;
 const utterance=$.AVSpeechUtterance.speechUtteranceWithString(request.text);
 utterance.voice=voice; utterance.rate=0.5;
 let done=false,frames=0,sampleRate=0,file=null,failure=null;
 synth.writeUtteranceToBufferCallback(utterance,function(pcm) {
  if(done) return;
  const count=Number(pcm.frameLength);
  if(!count) {done=true;return;}
  try {
   if(!file) {
    file=$.AVAudioFile.alloc.initForWritingSettingsError($.NSURL.fileURLWithPath(request.output),pcm.format.settings,null);
    sampleRate=Number(pcm.format.sampleRate);
   }
   if(!file.writeFromBufferError(pcm,null)) throw new Error('write');
   frames+=count;
  } catch(e) {failure='native';done=true;}
 });
 const start=Date.now();
 while(!done&&Date.now()-start<25000) $.NSRunLoop.currentRunLoop.runUntilDate($.NSDate.dateWithTimeIntervalSinceNow(0.01));
 if(!done) {synth.stopSpeakingAtBoundary(0);failure='timeout';}
 return JSON.stringify({frames:frames,sampleRate:sampleRate,voice:ObjC.unwrap(voice.identifier),error:failure});
}`;
async function runMacSpeech(payload, { signal, execute } = {}) {
  if (!Platform.isDesktop) throw ttsError("macPlatform");
  if (!Platform.isMacOS) throw ttsError("macPlatform");
  checkTtsSignal(signal);
  if (!execute) ({ execFile: execute } = require2("node:child_process"));
  checkTtsSignal(signal);
  return new Promise((resolve, reject) => {
    let child, settled = false;
    const finish = (error, value) => {
      if (settled) return;
      settled = true;
      signal?.removeEventListener("abort", abort);
      if (error) reject(error);
      else resolve(value);
    };
    const abort = () => {
      child?.kill();
      finish(Object.assign(new Error("Cancelled"), { name: "AbortError" }));
    };
    try {
      child = execute("/usr/bin/osascript", ["-l", "JavaScript", "-e", MAC_SPEECH_SCRIPT], { timeout: 3e4, maxBuffer: 1024 * 1024 }, (error, stdout) => {
        if (error) {
          finish(ttsError(error.killed ? "timeout" : "native"));
          return;
        }
        try {
          const result = JSON.parse(stdout);
          finish(result.error ? ttsError(result.error) : null, result);
        } catch {
          finish(ttsError("response"));
        }
      });
      signal?.addEventListener("abort", abort, { once: true });
      child.stdin.on("error", () => {
        child.kill();
        finish(ttsError("native"));
      });
      child.stdin.end(JSON.stringify(payload));
      if (signal?.aborted) abort();
    } catch {
      child?.kill();
      finish(ttsError("native"));
    }
  });
}
function macSpeechWav(bytes, result) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const tag = (offset2) => String.fromCharCode(...bytes.subarray(offset2, offset2 + 4));
  if (bytes.length < 44 || bytes.length > 32 * 1024 * 1024 || tag(0) !== "RIFF" || tag(8) !== "WAVE") throw ttsError("response");
  let format, offset;
  for (let at = 12; at + 8 <= bytes.length; ) {
    const size = view.getUint32(at + 4, true), start = at + 8;
    if (tag(at) === "data") {
      offset = start;
      break;
    }
    if (start + size > bytes.length) throw ttsError("response");
    if (tag(at) === "fmt " && size >= 16) format = { code: view.getUint16(start, true), channels: view.getUint16(start + 2, true), rate: view.getUint32(start + 4, true), block: view.getUint16(start + 12, true), bits: view.getUint16(start + 14, true) };
    at = start + size + size % 2;
  }
  const frames = result.frames;
  if (!format || offset === void 0 || format.channels !== 1 || format.rate !== result.sampleRate || ![22050, 24e3, 44100, 48e3].includes(format.rate) || !Number.isSafeInteger(frames) || frames <= 0 || frames * format.block !== bytes.length - offset || !(format.code === 3 && format.bits === 32 && format.block === 4 || format.code === 1 && format.bits === 16 && format.block === 2)) throw ttsError("response");
  const wav = new Uint8Array(44 + frames * 2), out = new DataView(wav.buffer);
  const writeTag = (at, value) => wav.set(Array.from(value, (c) => c.charCodeAt(0)), at);
  writeTag(0, "RIFF");
  out.setUint32(4, wav.length - 8, true);
  writeTag(8, "WAVE");
  writeTag(12, "fmt ");
  out.setUint32(16, 16, true);
  out.setUint16(20, 1, true);
  out.setUint16(22, 1, true);
  out.setUint32(24, format.rate, true);
  out.setUint32(28, format.rate * 2, true);
  out.setUint16(32, 2, true);
  out.setUint16(34, 16, true);
  writeTag(36, "data");
  out.setUint32(40, frames * 2, true);
  let peak = 0;
  const pcm = new Int16Array(frames);
  for (let i = 0; i < frames; i++) {
    const value = format.code === 3 ? view.getFloat32(offset + i * 4, true) : view.getInt16(offset + i * 2, true) / 32768;
    if (!Number.isFinite(value)) throw ttsError("response");
    peak = Math.max(peak, Math.abs(value));
    const sample = Math.max(-1, Math.min(1, value));
    pcm[i] = Math.round(sample * (sample < 0 ? 32768 : 32767));
    out.setInt16(44 + i * 2, pcm[i], true);
  }
  if (peak < 1e-3) throw ttsError("empty");
  return { bytes: wav, mime: "audio/wav", active: activeRange(pcm, format.rate) };
}
async function macSpeechVoices(signal) {
  const result = await runMacSpeech({ operation: "voices" }, { signal });
  if (!Array.isArray(result.voices)) throw ttsError("response");
  return result.voices.filter((v) => typeof v.id === "string" && typeof v.name === "string" && typeof v.lang === "string" && [1, 2, 3].includes(v.quality));
}
var lane = Promise.resolve();
function synthesizeMacSpeech(text, voice, { signal } = {}) {
  if (!Platform.isDesktop) throw ttsError("macPlatform");
  if (!Platform.isMacOS) throw ttsError("macPlatform");
  checkTtsSignal(signal);
  const task = lane.then(async () => {
    checkTtsSignal(signal);
    const { mkdtemp, readFile: readFile4, rm } = require2("node:fs/promises");
    const { tmpdir } = require2("node:os"), { join } = require2("node:path");
    checkTtsSignal(signal);
    const directory = await mkdtemp(join(tmpdir(), "qiaomu-reader-tts-"));
    try {
      const output = join(directory, "speech.wav");
      const result = await runMacSpeech({ operation: "synthesize", text, voice, language: /[\u3400-\u9fff]/u.test(text) ? "zh-CN" : "en-US", output }, { signal });
      checkTtsSignal(signal);
      if (voice && result.voice !== voice) throw ttsError("voice");
      return macSpeechWav(new Uint8Array(await readFile4(output)), result);
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
  lane = task.catch(() => {
  });
  return new Promise((resolve, reject) => {
    const abort = () => {
      signal?.removeEventListener("abort", abort);
      reject(Object.assign(new Error("Cancelled"), { name: "AbortError" }));
    };
    signal?.addEventListener("abort", abort, { once: true });
    task.then((value) => {
      signal?.removeEventListener("abort", abort);
      resolve(value);
    }, (error) => {
      signal?.removeEventListener("abort", abort);
      reject(error);
    });
    if (signal?.aborted) abort();
  });
}

// src/original/core/tts/mac-voices.js
var RECOMMENDED = {
  "com.apple.siri.natural.Linfei": ["\u6E05\u548C", "Qinghe"],
  "com.apple.siri.natural.zh-CN-D": ["\u77E5\u8FDC", "Zhiyuan"],
  "com.apple.ttsbundle.gryphon-neural_zh-CN-D_zh-CN_premium": ["\u4E66\u5B81", "Shuning"]
};
function macVoiceChoices(voices, tx, chinese) {
  return [...voices].sort((a, b) => Number(!!RECOMMENDED[b.id]) - Number(!!RECOMMENDED[a.id]) || Number(/^zh|^yue/.test(b.lang)) - Number(/^zh|^yue/.test(a.lang)) || b.quality - a.quality).map((v) => {
    const alias = RECOMMENDED[v.id];
    const name = alias ? alias[chinese ? 0 : 1] : v.name;
    return {
      id: v.id,
      label: `${name} \xB7 ${v.lang}${v.quality > 1 ? ` \xB7 ${tx(v.quality === 3 ? "voicePremium" : "voiceEnhanced")}` : ""}${alias ? ` \xB7 ${tx("recommended")}` : ""}`,
      sourceName: alias ? `${v.name} \xB7 ${tx("voiceDisplayName")}` : "",
      recommended: !!alias
    };
  });
}

// src/original/core/tts/choices.js
var entries = (values) => values.map((value) => typeof value === "string" ? { id: value, label: value } : { id: value[0], label: value[1] });
var TTS_MODELS = {
  openai: entries(["gpt-4o-mini-tts", "tts-1", "tts-1-hd"]),
  compatible: [],
  qwen: entries(["qwen3-tts-flash", "qwen3-tts-instruct-flash", "qwen-tts"]),
  doubao: entries([["seed-tts-2.0", "Seed TTS 2.0"], ["seed-tts-1.0", "Seed TTS 1.0"]]),
  minimax: entries(["speech-2.8-hd", "speech-2.8-turbo", "speech-2.6-hd", "speech-2.6-turbo", "speech-02-hd", "speech-02-turbo"]),
  siliconflow: entries([["FunAudioLLM/CosyVoice2-0.5B", "CosyVoice 2 \xB7 0.5B"], ["fnlp/MOSS-TTSD-v0.5", "MOSS TTSD \xB7 v0.5"]]),
  elevenlabs: entries(["eleven_multilingual_v2", "eleven_v3", "eleven_v4", "eleven_v4_turbo", "eleven_flash_v2_5", "eleven_turbo_v2_5"])
};
var microsoft = entries([
  ["zh-CN-XiaoxiaoNeural", "\u6653\u6653 \xB7 \u4E2D\u6587\u5973\u58F0"],
  ["zh-CN-YunxiNeural", "\u4E91\u5E0C \xB7 \u4E2D\u6587\u7537\u58F0"],
  ["zh-CN-YunjianNeural", "\u4E91\u5065 \xB7 \u4E2D\u6587\u7537\u58F0"],
  ["zh-CN-XiaoyiNeural", "\u6653\u4F0A \xB7 \u4E2D\u6587\u5973\u58F0"],
  ["zh-TW-HsiaoChenNeural", "\u66C9\u81FB \xB7 \u53F0\u7063\u5973\u8072"],
  ["zh-HK-HiuMaanNeural", "\u66C9\u66FC \xB7 \u7CB5\u8A9E\u5973\u8072"],
  ["en-US-JennyNeural", "Jenny \xB7 English"],
  ["en-US-GuyNeural", "Guy \xB7 English"]
]);
var doubao2 = entries([
  ["zh_female_vv_uranus_bigtts", "Vivi 2.0"],
  ["zh_female_xiaohe_uranus_bigtts", "\u5C0F\u4F55 2.0"],
  ["zh_male_m191_uranus_bigtts", "\u4E91\u821F 2.0"],
  ["zh_male_taocheng_uranus_bigtts", "\u5C0F\u5929 2.0"],
  ["zh_male_liufei_uranus_bigtts", "\u5218\u98DE 2.0"],
  ["zh_female_qingxinnvsheng_uranus_bigtts", "\u6E05\u65B0\u5973\u58F0 2.0"],
  ["zh_female_shuangkuaisisi_uranus_bigtts", "\u723D\u5FEB\u601D\u601D 2.0"],
  ["zh_female_tianmeitaozi_uranus_bigtts", "\u751C\u7F8E\u6843\u5B50 2.0"],
  ["en_male_tim_uranus_bigtts", "Tim \xB7 English"],
  ["en_female_dacey_uranus_bigtts", "Dacey \xB7 English"]
]);
var doubao1 = entries([["zh_female_shuangkuaisisi_moon_bigtts", "\u723D\u5FEB\u601D\u601D"], ["zh_male_wennuanahu_moon_bigtts", "\u6E29\u6696\u963F\u864E"], ["zh_female_wanwanxiaohe_moon_bigtts", "\u6E7E\u6E7E\u5C0F\u4F55"]]);
var silicon = entries([["alex", "Alex \xB7 \u6C89\u7A33\u7537\u58F0"], ["benjamin", "Benjamin \xB7 \u4F4E\u6C89\u7537\u58F0"], ["charles", "Charles \xB7 \u78C1\u6027\u7537\u58F0"], ["david", "David \xB7 \u6B22\u5FEB\u7537\u58F0"], ["anna", "Anna \xB7 \u6C89\u7A33\u5973\u58F0"], ["bella", "Bella \xB7 \u70ED\u60C5\u5973\u58F0"], ["claire", "Claire \xB7 \u6E29\u67D4\u5973\u58F0"], ["diana", "Diana \xB7 \u6B22\u5FEB\u5973\u58F0"]]);
function uniqueChoices(values) {
  return [...new Map(values.filter((v) => typeof v.id === "string" && v.id.length <= 512).map((v) => [v.id, { ...v, label: String(v.label || v.id).slice(0, 180) }])).values()];
}
async function loadVoiceCatalog(profile, { request, key, signal }) {
  if (!key) throw ttsError("key");
  const { id } = profile;
  const get = async (url, headers, body) => {
    checkTtsSignal(signal);
    const response = await awaitSpeechRequest(request({ url, method: body ? "POST" : "GET", headers, ...body ? { body: JSON.stringify(body) } : {}, throw: false }), signal);
    checkTtsSignal(signal);
    if (response.status < 200 || response.status >= 300) throw ttsError("http", response.status);
    return response.json;
  };
  if (id === "azure") {
    if (!/^[a-z0-9-]+$/.test(profile.region || "")) throw ttsError("region");
    const body = await get(`https://${profile.region}.tts.speech.microsoft.com/cognitiveservices/voices/list`, { "Ocp-Apim-Subscription-Key": key });
    if (!Array.isArray(body)) throw ttsError("response");
    return { voices: uniqueChoices(body.map((v) => ({ id: v.ShortName, label: `${v.LocalName || v.DisplayName} \xB7 ${v.Locale}` }))) };
  }
  const base = ttsBaseUrl(profile.baseUrl), bearer = { Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
  if (id === "minimax") {
    const body = await get(`${base}/get_voice`, bearer, { voice_type: "all" });
    if (body?.base_resp?.status_code !== 0) throw ttsError("service", body?.base_resp?.status_code);
    return { voices: uniqueChoices(["system_voice", "voice_cloning", "voice_generation"].flatMap((k) => body[k] || []).map((v) => ({ id: v.voice_id, label: v.voice_name || v.voice_id }))) };
  }
  if (id === "siliconflow") {
    const body = await get(`${base}/audio/voice/list`, bearer);
    if (!Array.isArray(body?.results)) throw ttsError("response");
    const models2 = await get(`${base}/models?type=audio`, bearer);
    if (!Array.isArray(models2?.data)) throw ttsError("response");
    return {
      models: uniqueChoices(models2.data.filter((m) => m.sub_type === "text-to-speech" || /tts|cosyvoice|fish-speech|kokoro/i.test(m.id)).map((m) => ({ id: m.id, label: m.id }))),
      voices: uniqueChoices(body.results.map((v) => ({ id: v.uri, label: v.customName, model: v.model })))
    };
  }
  if (id === "elevenlabs") {
    const headers = { "xi-api-key": key };
    const models2 = await get(`${base}/models`, headers);
    if (!Array.isArray(models2)) throw ttsError("response");
    let voices = [], token = "", pages = 0;
    do {
      const body = await get(`${base.replace(/\/v1$/, "/v2")}/voices?page_size=100${token ? `&next_page_token=${encodeURIComponent(token)}` : ""}`, headers);
      if (!Array.isArray(body?.voices)) throw ttsError("response");
      voices.push(...body.voices);
      token = body.has_more ? body.next_page_token : "";
    } while (token && ++pages < 10);
    return {
      models: uniqueChoices(models2.filter((m) => m.can_do_text_to_speech).map((m) => ({ id: m.model_id, label: m.name }))),
      voices: uniqueChoices(voices.map((v) => ({ id: v.voice_id, label: v.name }))),
      more: !!token
    };
  }
  throw ttsError("configuration");
}

// src/original/core/asr/providers.js
var ASR_PROVIDERS = [
  { id: "siliconflow", label: "asr.provider.siliconflow", protocol: "openai-transcriptions", baseUrl: "https://api.siliconflow.cn/v1", defaultModel: "Qwen/Qwen3-ASR-1.7B", models: ["Qwen/Qwen3-ASR-1.7B", "FunAudioLLM/SenseVoiceSmall", "XingChenAGI/XingChenASR-V3.2"], keyHelp: "https://cloud.siliconflow.cn/account/ak", note: "asr.note.siliconflow" },
  { id: "doubao", label: "asr.provider.doubao", protocol: "doubao-flash", baseUrl: "https://openspeech.bytedance.com/api/v3", defaultModel: "bigmodel", models: ["bigmodel"], chunkSeconds: 300, maxChunkSeconds: 540, keyHelp: "https://console.volcengine.com/speech/new/experience/asr", note: "asr.note.doubao" },
  { id: "glm", label: "asr.provider.glm", protocol: "openai-transcriptions", baseUrl: "https://open.bigmodel.cn/api/paas/v4", defaultModel: "glm-asr-2512", models: ["glm-asr-2512"], chunkSeconds: 18, maxChunkSeconds: 28, keyHelp: "https://open.bigmodel.cn/usercenter/proj-mgmt/apikeys", note: "asr.note.glm" },
  { id: "stepfun", label: "asr.provider.stepfun", protocol: "openai-transcriptions", baseUrl: "https://api.stepfun.com/v1", defaultModel: "stepaudio-2.5-asr", models: ["stepaudio-2.5-asr", "step-asr"], keyHelp: "https://platform.stepfun.com/interface-key" },
  { id: "mimo", label: "asr.provider.mimo", protocol: "chat-audio", baseUrl: "https://api.xiaomimimo.com/v1", defaultModel: "mimo-v2.5-asr", models: ["mimo-v2.5-asr"], keyHelp: "https://platform.xiaomimimo.com/", note: "asr.note.mimo" },
  { id: "groq", label: "Groq (Whisper)", protocol: "openai-transcriptions", baseUrl: "https://api.groq.com/openai/v1", defaultModel: "whisper-large-v3-turbo", models: ["whisper-large-v3-turbo", "whisper-large-v3"], keyHelp: "https://console.groq.com/keys", languageParam: true },
  { id: "openai", label: "OpenAI", protocol: "openai-transcriptions", baseUrl: "https://api.openai.com/v1", defaultModel: "gpt-4o-mini-transcribe", models: ["gpt-4o-mini-transcribe", "gpt-4o-transcribe", "whisper-1"], keyHelp: "https://platform.openai.com/api-keys", languageParam: true },
  { id: "local", label: "asr.provider.local", protocol: "openai-transcriptions", baseUrl: "http://127.0.0.1:8765/v1", defaultModel: "Qwen/Qwen3-ASR-0.6B", models: ["Qwen/Qwen3-ASR-0.6B", "whisper-1"], note: "asr.note.local" },
  { id: "custom", label: "asr.provider.custom", protocol: "openai-transcriptions", baseUrl: "", defaultModel: "", models: [], note: "asr.note.custom" }
];
var PROTOCOLS = ["openai-transcriptions", "chat-audio", "doubao-flash"];
var ASR_LANGUAGES = ["auto", "zh", "en", "ja", "ko", "yue", "de", "fr", "es"];
var MAX_PROFILES = 12;
var providerOf = (id) => ASR_PROVIDERS.find((p) => p.id === id) || ASR_PROVIDERS[ASR_PROVIDERS.length - 1];
function asrError(code, detail) {
  return Object.assign(new Error(code), { code, detail });
}
function isLocalUrl(value) {
  try {
    return ["localhost", "127.0.0.1", "[::1]"].includes(new URL(value).hostname);
  } catch {
    return false;
  }
}
function asrBaseUrl(value) {
  let url;
  try {
    url = new URL(String(value || "").trim());
  } catch {
    throw asrError("url");
  }
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password || url.search || url.hash) throw asrError("url");
  if (url.protocol === "http:" && !isLocalUrl(url.href)) throw asrError("https");
  return url.href.replace(/\/+$/, "").replace(/\/audio\/transcriptions$/, "");
}
var newId = () => "p" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-3);
function cleanProfile(value, taken = /* @__PURE__ */ new Set()) {
  if (!value || typeof value !== "object") return null;
  const info = providerOf(String(value.provider || "siliconflow"));
  let id = typeof value.id === "string" && /^[a-z0-9-]{1,24}$/.test(value.id) ? value.id : newId();
  while (taken.has(id)) id = newId();
  taken.add(id);
  return {
    id,
    provider: info.id,
    baseUrl: typeof value.baseUrl === "string" && value.baseUrl.trim() ? value.baseUrl.trim().slice(0, 300) : info.baseUrl,
    model: typeof value.model === "string" && value.model.trim() ? value.model.trim().slice(0, 100) : info.defaultModel,
    protocol: info.id === "custom" && PROTOCOLS.includes(value.protocol) ? value.protocol : info.protocol,
    ...typeof value.name === "string" && value.name.trim() ? { name: value.name.trim().slice(0, 40) } : {}
  };
}
function cloudConfig(profile) {
  const info = providerOf(profile.provider);
  const base = asrBaseUrl(profile.baseUrl);
  if (!/^[A-Za-z0-9_./:-]{1,100}$/.test(profile.model || "")) throw asrError("model");
  return {
    protocol: profile.protocol || info.protocol,
    baseUrl: base,
    model: profile.model,
    languageParam: !!info.languageParam,
    local: isLocalUrl(base),
    chunkSeconds: info.chunkSeconds || 20,
    maxChunkSeconds: info.maxChunkSeconds || 40
  };
}

// src/original/core/asr/request.js
var encoder = new TextEncoder();
function bytesToBase64(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 32768) binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 32768));
  return globalThis.btoa(binary);
}
function multipart(fields, filename, content, contentType, boundary = "----qiaomu" + Math.random().toString(16).slice(2) + Date.now().toString(16)) {
  const parts = fields.map(([name, value]) => encoder.encode(`--${boundary}\r
Content-Disposition: form-data; name="${name}"\r
\r
${value}\r
`));
  parts.push(encoder.encode(`--${boundary}\r
Content-Disposition: form-data; name="file"; filename="${filename}"\r
Content-Type: ${contentType}\r
\r
`));
  parts.push(content, encoder.encode(`\r
--${boundary}--\r
`));
  const size = parts.reduce((n, p) => n + p.length, 0), body = new Uint8Array(size);
  let offset = 0;
  for (const p of parts) {
    body.set(p, offset);
    offset += p.length;
  }
  return { body: body.buffer, contentType: `multipart/form-data; boundary=${boundary}` };
}
function buildAsrRequest(cfg, key, wav, language = "auto", uuid = () => globalThis.crypto.randomUUID()) {
  if (!key && !cfg.local) throw asrError("key");
  if (cfg.protocol === "doubao-flash") {
    return {
      url: cfg.baseUrl + "/auc/bigmodel/recognize/flash",
      method: "POST",
      contentType: "application/json",
      headers: { "X-Api-Key": key, "X-Api-Resource-Id": "volc.bigasr.auc_turbo", "X-Api-Request-Id": uuid(), "X-Api-Sequence": "-1" },
      body: JSON.stringify({ user: { uid: "qiaomu-audio" }, audio: { data: bytesToBase64(wav) }, request: { model_name: cfg.model, enable_itn: true, enable_punc: true } })
    };
  }
  const headers = { Accept: "application/json", ...key ? { Authorization: `Bearer ${key}` } : {} };
  if (cfg.protocol === "openai-transcriptions") {
    const fields = [["model", cfg.model], ["response_format", "json"]];
    if (cfg.languageParam && language !== "auto" && language !== "yue") fields.push(["language", language]);
    const { body, contentType } = multipart(fields, "speech.wav", wav, "audio/wav");
    return { url: cfg.baseUrl + "/audio/transcriptions", method: "POST", headers, contentType, body };
  }
  if (cfg.protocol === "chat-audio") {
    return {
      url: cfg.baseUrl + "/chat/completions",
      method: "POST",
      headers,
      contentType: "application/json",
      body: JSON.stringify({
        model: cfg.model,
        stream: false,
        messages: [{ role: "user", content: [{ type: "input_audio", input_audio: { data: "data:audio/wav;base64," + bytesToBase64(wav) } }] }],
        asr_options: { language: ["zh", "en"].includes(language) ? language : "auto" }
      })
    };
  }
  throw asrError("protocol");
}
var NOISE = /<\|[^|>]*\|>|[\u{1F300}-\u{1FAFF}☀-➿]|️/gu;
function tidyTranscript(text) {
  return String(text || "").replace(NOISE, "").replace(/\s+/g, " ").trim();
}
function header(headers, name) {
  if (!headers) return "";
  const found = Object.keys(headers).find((k) => k.toLowerCase() === name.toLowerCase());
  return found ? String(headers[found]) : "";
}
function messageOf(response) {
  try {
    const data = JSON.parse(response.text);
    const e = data?.error;
    return String((typeof e === "object" ? e?.message : e) || data?.message || "").slice(0, 160);
  } catch {
    return String(response.text || "").slice(0, 160);
  }
}
function parseAsrResponse(cfg, response) {
  if (cfg.protocol === "doubao-flash") {
    const code = header(response.headers, "X-Api-Status-Code"), detail = header(response.headers, "X-Api-Message");
    if (code === "20000003") return "";
    if (code && code !== "20000000") {
      if (/quota|balance|insufficient|额度|余额|欠费/i.test(detail)) throw asrError("quota", detail);
      if (code.startsWith("4500001")) throw asrError("auth", detail);
      throw asrError(code.startsWith("55") ? "server" : "service", `${code} ${detail}`.trim());
    }
  }
  let data;
  try {
    data = typeof response.json === "object" && response.json ? response.json : JSON.parse(response.text);
  } catch {
    throw asrError("response");
  }
  if (cfg.protocol === "doubao-flash") return tidyTranscript(data?.result?.text);
  if (cfg.protocol === "openai-transcriptions") return tidyTranscript(data?.text);
  const content = data?.choices?.[0]?.message?.content;
  return tidyTranscript(typeof content === "string" ? content : "");
}
function classifyHttp(response) {
  const detail = messageOf(response);
  if (response.status === 401 || response.status === 403) return asrError("auth", detail);
  if (response.status === 402 || /balance|quota|insufficient|余额|额度|欠费/i.test(detail)) return asrError("quota", detail);
  if (response.status === 429) return asrError("rateLimit", detail);
  if (response.status >= 500) return asrError("server", `HTTP ${response.status} ${detail}`.trim());
  return asrError("service", `HTTP ${response.status} ${detail}`.trim());
}
var aborted = () => Object.assign(new Error("Cancelled"), { name: "AbortError" });
function race(promise, signal, timeoutMs) {
  if (signal?.aborted) return Promise.reject(aborted());
  return new Promise((resolve, reject) => {
    const done = (fn, v) => {
      globalThis.clearTimeout(timer);
      signal?.removeEventListener("abort", abort);
      fn(v);
    };
    const abort = () => done(reject, aborted());
    const timer = globalThis.setTimeout(() => done(reject, asrError("timeout")), timeoutMs);
    signal?.addEventListener("abort", abort, { once: true });
    Promise.resolve(promise).then((v) => done(resolve, v), (e) => done(reject, e));
  });
}
var wait = (ms, signal) => race(new Promise((r) => globalThis.setTimeout(r, ms)), signal, ms + 1e3);
async function recognizeCloud(cfg, key, wav, { request, language = "auto", signal, retries = 3, sleep = wait, timeoutMs = 9e4 } = {}) {
  let last;
  for (let attempt = 0; attempt <= retries; attempt++) {
    if (signal?.aborted) throw aborted();
    const spec = buildAsrRequest(cfg, key, wav, language);
    let response;
    try {
      response = await race(request({ ...spec, throw: false }), signal, timeoutMs);
    } catch (error) {
      if (error.name === "AbortError") throw error;
      last = error.code === "timeout" ? error : asrError("network", String(error?.message || "").slice(0, 120));
      if (attempt < retries) {
        await sleep(Math.min(3e4, 1e3 * 2 ** attempt), signal);
        continue;
      }
      throw last;
    }
    try {
      if (response.status < 200 || response.status >= 300) throw classifyHttp(response);
      return parseAsrResponse(cfg, response);
    } catch (error) {
      last = error;
      if (["rateLimit", "server"].includes(error.code) && attempt < retries) {
        const after = Number(header(response.headers, "Retry-After"));
        await sleep(Math.min(3e4, after > 0 ? after * 1e3 : 1e3 * 2 ** attempt + Math.floor(Math.random() * 500)), signal);
        continue;
      }
      throw error;
    }
  }
  throw last || asrError("network");
}

// src/original/runtime/local.js
import { createRequire as createRequire2 } from "node:module";

// src/original/runtime/models.json
var models = {
  kokoro: {
    label: "Kokoro",
    revision: "a3f4c73d043860e3",
    license: "Apache-2.0",
    bytes: 364816464,
    archive: {
      name: "kokoro-multi-lang-v1_1.tar.bz2",
      url: "https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/kokoro-multi-lang-v1_1.tar.bz2",
      bytes: 364816464,
      sha256: "a3f4c73d043860e3fd2e5b06f36795eb81de0fc8e8de6df703245edddd87dbad"
    },
    archiveRoot: "kokoro-multi-lang-v1_1",
    files: [
      {
        path: "LICENSE",
        bytes: 11358,
        sha256: "cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30"
      },
      {
        path: "README.md",
        bytes: 114,
        sha256: "e2d39356ea4d67ac15c39a7e5a238ea12b0f6fb8a55bb0c87bc2f659eb1cf7ac"
      },
      {
        path: "date-zh.fst",
        bytes: 59154,
        sha256: "eb8aa079ae3cb81d8f4404992f39d61a0cb990947512b5b8d1e54d1f6980e718"
      },
      {
        path: "dict/README.md",
        bytes: 683,
        sha256: "8bcc7c2ed7dff082d9a99c09de0bfd72249bf3b5c4298a3af328da40cbd8cfd1"
      },
      {
        path: "dict/generate_user_dict.py",
        bytes: 545,
        sha256: "24541017b4b60d8e1ad94a5165f7097d2fd107d4ceecbf13583dd37682fdd2a7"
      },
      {
        path: "dict/hmm_model.utf8",
        bytes: 519739,
        sha256: "f17790586ac86dd048c8adffed052c4bd2b28ed0682972c1275e59040c0589a7"
      },
      {
        path: "dict/idf.utf8",
        bytes: 5998717,
        sha256: "dbd1e03d72b2263cc8d84a4304ed77677eed9e7deaf43a1a5133bbba9733b535"
      },
      {
        path: "dict/jieba.dict.utf8",
        bytes: 5071204,
        sha256: "3043b77068e09c9904f27cad82f12b6ebe9dbdb5aeff3b25e45ab7f9c1122b55"
      },
      {
        path: "dict/pos_dict/char_state_tab.utf8",
        bytes: 327139,
        sha256: "28b7be1dd7369766a51445af4d42e9a2ba4bf374c13be5bc1ca7721e27271dbb"
      },
      {
        path: "dict/pos_dict/prob_emit.utf8",
        bytes: 1687686,
        sha256: "c33c4cb7edf3b3a5947df7209b6e9f267eae1f21335d9e2bd2521ea07105457a"
      },
      {
        path: "dict/pos_dict/prob_start.utf8",
        bytes: 4347,
        sha256: "13623ea0e9300bdb597cb2da28770b7b385d6c0098d66e516083fb01b6bd5d96"
      },
      {
        path: "dict/pos_dict/prob_trans.utf8",
        bytes: 124159,
        sha256: "f22363e2307408293d180c6f9f6b5cb75879d52f722f7764fa2d3d0ae2400236"
      },
      {
        path: "dict/stop_words.utf8",
        bytes: 8974,
        sha256: "b788b8a939d2e2fe079abd579ea98f12f9fb84370bfd0dddd81bb9381f7ab42c"
      },
      {
        path: "dict/user.dict.utf8",
        bytes: 829194,
        sha256: "5faabcd0c52adf512de77fd7eee3d556da8c98b50f493b47c66a981b3a24959c"
      },
      {
        path: "espeak-ng-data/af_dict",
        bytes: 121473,
        sha256: "25729d3bf4c4a0f08da60aea9eb5a0cf352630f83fab1ab0c3955b7740da1776"
      },
      {
        path: "espeak-ng-data/am_dict",
        bytes: 63878,
        sha256: "9954365860682c756c8c4459577d3aa0ab77ad0cba6798b746033ada5c3d4bea"
      },
      {
        path: "espeak-ng-data/an_dict",
        bytes: 6691,
        sha256: "6cf38cedb6693aade49e5a5d27a3c92516a5335125bf85fcae58282e66fb82fd"
      },
      {
        path: "espeak-ng-data/ar_dict",
        bytes: 478165,
        sha256: "72316426e797777fe4df9420935a3b6a79b37d7e3f3948537ba71cd7b21b2541"
      },
      {
        path: "espeak-ng-data/as_dict",
        bytes: 5005,
        sha256: "5bcb74ff4558a60c5ba1a48a2a92c01513ee2d29fe30c5a38dc5308c54f1cf49"
      },
      {
        path: "espeak-ng-data/az_dict",
        bytes: 43773,
        sha256: "e352b2dcf811662d79f4beaaa0c7750706cf669c0409fd815a9bd0244b1adfc7"
      },
      {
        path: "espeak-ng-data/ba_dict",
        bytes: 2098,
        sha256: "246c8c655ceed43d9ff44a65de5f933f16255489d0b181b1a46a83e1fd5a0354"
      },
      {
        path: "espeak-ng-data/be_dict",
        bytes: 2652,
        sha256: "232fb0debfc8fdca9b8f2494770ff23535f7f887bbebb0178abffc243490e798"
      },
      {
        path: "espeak-ng-data/bg_dict",
        bytes: 87051,
        sha256: "8fa3adec8e18a3e695b2bbea1d4780182e17222d8b9f8da9908a237828f6b063"
      },
      {
        path: "espeak-ng-data/bn_dict",
        bytes: 89979,
        sha256: "2b59ec34c07955ca5b7814fa5152c33fa357880590703eefab1f3081f031fdef"
      },
      {
        path: "espeak-ng-data/bpy_dict",
        bytes: 5226,
        sha256: "a4321d9ba80bd60f49e0bee5aae57f1ae9c49b7a1c3d4ba384338fe9bf3b6a92"
      },
      {
        path: "espeak-ng-data/bs_dict",
        bytes: 47068,
        sha256: "d5df564f511af082884719685db86ec4df23467cf012ce25e898540baf9de65b"
      },
      {
        path: "espeak-ng-data/ca_dict",
        bytes: 45566,
        sha256: "1be203855ecb0bdfe66578ef5552f83289e39972d78c52714d061b7f7493df4a"
      },
      {
        path: "espeak-ng-data/chr_dict",
        bytes: 2859,
        sha256: "1853980c673015327bed3d4e5f7e88c2ee3bd8a922bcdd232a6497277e903bce"
      },
      {
        path: "espeak-ng-data/cmn_dict",
        bytes: 1566335,
        sha256: "109aaa7708d3727382acb3ae41d8e2094a7e2bb9f651a81835be22a6f08071fe"
      },
      {
        path: "espeak-ng-data/cs_dict",
        bytes: 49645,
        sha256: "5ec02aba90465007f20a5c8aeb889275834cfa8c8f621c3d9bee1ca90d21788d"
      },
      {
        path: "espeak-ng-data/cv_dict",
        bytes: 1344,
        sha256: "8260837c8f18fbe5870905ebb2850dfd18e252150ad6c868b96d9d2c6398ea8a"
      },
      {
        path: "espeak-ng-data/cy_dict",
        bytes: 43130,
        sha256: "31d74ccad218ab80b79566caeb8d21bcf0fe43326ed7c437fa736d39b85e603e"
      },
      {
        path: "espeak-ng-data/da_dict",
        bytes: 245287,
        sha256: "fe0c21895b4844868612f9ea846bc6010e30b5dd1f4cb1567459d73d2792a8ac"
      },
      {
        path: "espeak-ng-data/de_dict",
        bytes: 68276,
        sha256: "e9ac048df5cde03b74907d591c7b29b45ee9ec5fcd4592b0b894f0083572fcfd"
      },
      {
        path: "espeak-ng-data/el_dict",
        bytes: 72841,
        sha256: "5d9f759750131da777d2fd4f06aa602ed746d38f27b84dd9a2d4a550f2cd452e"
      },
      {
        path: "espeak-ng-data/en_dict",
        bytes: 166944,
        sha256: "71bd330ba8a2e3e8076e631508208ef49449d6147c17b7bd2b4b1e1468292e35"
      },
      {
        path: "espeak-ng-data/eo_dict",
        bytes: 4666,
        sha256: "849f061abddd5388bac112b32e6f7bf747e15e1b3ae53fe91079381effff4cc9"
      },
      {
        path: "espeak-ng-data/es_dict",
        bytes: 49252,
        sha256: "3fa93e251eab80838a2d6207ee58c9c847270a65fe3fae98850e0185b5a2186c"
      },
      {
        path: "espeak-ng-data/et_dict",
        bytes: 44263,
        sha256: "1a6734b4e6bc9de9a4c94cfb434873e0a7f4ae4ec89549b3137ae5491cf655da"
      },
      {
        path: "espeak-ng-data/eu_dict",
        bytes: 48841,
        sha256: "762a6eff63552ef72cd88bf1e92dc5a823eb378d50cb85c7917e8c5bba079137"
      },
      {
        path: "espeak-ng-data/fa_dict",
        bytes: 292423,
        sha256: "f92f35ce7eb1d97360016617d97786412a94af55b776a18f1c280dab4f43befd"
      },
      {
        path: "espeak-ng-data/fi_dict",
        bytes: 43928,
        sha256: "dda999437bd4b37a7f7400a2230aace1200a52906ab0b1ff3507d44ab19d64b1"
      },
      {
        path: "espeak-ng-data/fr_dict",
        bytes: 63727,
        sha256: "e399ab924c4d10beef1fc310b30ea56e4ddfd8b4b64b8ed978e9c65394d49b2d"
      },
      {
        path: "espeak-ng-data/ga_dict",
        bytes: 52673,
        sha256: "b2db03d21f7900b697d7dbb8bec855cd1117e9867f19884faf11c4df626659f5"
      },
      {
        path: "espeak-ng-data/gd_dict",
        bytes: 49121,
        sha256: "e92b47dcf9a001363ffee1e62863faf264ff5f16e10cd9cf1f1e83ca89ca14aa"
      },
      {
        path: "espeak-ng-data/gn_dict",
        bytes: 3248,
        sha256: "7640df272b192a68ba401294bf9197ab46d0b141da7a358ad1986e7f77e7f29a"
      },
      {
        path: "espeak-ng-data/grc_dict",
        bytes: 3433,
        sha256: "488779493993d221b09e713e104a221ac1bb35765f826acc26d3d3c1aa3a35ed"
      },
      {
        path: "espeak-ng-data/gu_dict",
        bytes: 82480,
        sha256: "cb1fbfb53bab2ec6d9e44cd9d12ccb9b80de49f274d772314389c477eef530fd"
      },
      {
        path: "espeak-ng-data/hak_dict",
        bytes: 3335,
        sha256: "e3075c7d281f95a2ce2264c01edbd09e962cb3ed29400766c5d2116a08a185c8"
      },
      {
        path: "espeak-ng-data/haw_dict",
        bytes: 2443,
        sha256: "2b4e77b61cadfc5ee622aa8b1d23941e36101d9bdbf8d809e0fa1b442d2c3f74"
      },
      {
        path: "espeak-ng-data/he_dict",
        bytes: 6963,
        sha256: "a8bf0d939d630e9e5097ad361a7765297baf297fd7d06e89f48a79ead980869e"
      },
      {
        path: "espeak-ng-data/hi_dict",
        bytes: 92143,
        sha256: "5a68c9532624e57ac845b26ce1e2e5034c4f6353bede46ecbe57e583ec8effd6"
      },
      {
        path: "espeak-ng-data/hr_dict",
        bytes: 49388,
        sha256: "5f98fcf05f97335a5436a8a9643677da6f158f2a9ee1d41bdda1725b1bb3527e"
      },
      {
        path: "espeak-ng-data/ht_dict",
        bytes: 1803,
        sha256: "d577219d15c29396db254aed958358456ec1501cdf62cb4ca5413752f2ee7cc1"
      },
      {
        path: "espeak-ng-data/hu_dict",
        bytes: 153785,
        sha256: "055d563b839d599db40be5b1cc2af9d31793795b328eb8d4f389ec7d38fe7e81"
      },
      {
        path: "espeak-ng-data/hy_dict",
        bytes: 62263,
        sha256: "8b808ad8f1d4cae32b3b785b96d1e27b3af28e32f4dddfed7c93e129d63b2587"
      },
      {
        path: "espeak-ng-data/ia_dict",
        bytes: 331275,
        sha256: "1c665603a82beb81e0cef2878c9b44642ae6d519e301fbbd06326e03325febf3"
      },
      {
        path: "espeak-ng-data/id_dict",
        bytes: 43458,
        sha256: "8fb3f23f80f71f023219cee7032223f3f6886cc5040eb4c8c507f79d1b84e98d"
      },
      {
        path: "espeak-ng-data/intonations",
        bytes: 2040,
        sha256: "3f8af65fd3eda9759a10f021d61361c120871f463515229c925995c7f90918cc"
      },
      {
        path: "espeak-ng-data/io_dict",
        bytes: 2165,
        sha256: "0d9d6995fead1ccdd5512f7909ec8f9efc8ccc97f5c9d23ecae6b3ba77ffadbf"
      },
      {
        path: "espeak-ng-data/is_dict",
        bytes: 44354,
        sha256: "8eeab5b1ca3f75362881fae3de3316fcaff281179a4c51fceb0098f11ead96e0"
      },
      {
        path: "espeak-ng-data/it_dict",
        bytes: 152889,
        sha256: "111f968359c9ebe36b107a2565ba9f258bab337d3cbe37e44871980a8f21ce6b"
      },
      {
        path: "espeak-ng-data/ja_dict",
        bytes: 47652,
        sha256: "0d1135d3cdfed811d3eac7c90a2e277329fa6f060cdd23af287db161982cab44"
      },
      {
        path: "espeak-ng-data/jbo_dict",
        bytes: 2243,
        sha256: "71298417de1e5fd07df275270a5d47ca8820cb8c9f5dc2156c070b7a3ae7999c"
      },
      {
        path: "espeak-ng-data/ka_dict",
        bytes: 87775,
        sha256: "c8624947110a13bee72d4fc15b06026004df3f40c16c7b917d27e369ca122a32"
      },
      {
        path: "espeak-ng-data/kk_dict",
        bytes: 1859,
        sha256: "88dc0106629a57d0aca5073afb11db1a044799185355088a7ad4331c836affd3"
      },
      {
        path: "espeak-ng-data/kl_dict",
        bytes: 2838,
        sha256: "ec441964d7fbd4622bb628327903d5c6c999c95d539b2e061884decf95ac30e3"
      },
      {
        path: "espeak-ng-data/kn_dict",
        bytes: 87828,
        sha256: "c51e0385937b407b36c02fd2c85dfecdc5cac411398ee8a74eca15b35617af64"
      },
      {
        path: "espeak-ng-data/ko_dict",
        bytes: 47523,
        sha256: "f629060f27d597e0fd52d8010609f41c8a0ec28f5c2bb0016850e00244950681"
      },
      {
        path: "espeak-ng-data/kok_dict",
        bytes: 6394,
        sha256: "52659dec01d1b119bfef56b622430f5525c50af0144c9f9688cb3c22cc02ed31"
      },
      {
        path: "espeak-ng-data/ku_dict",
        bytes: 2265,
        sha256: "65de1c5429e8d193775b36fcf169a60fbbb9964ef13a4a1bab7ff0ce855cad20"
      },
      {
        path: "espeak-ng-data/ky_dict",
        bytes: 64977,
        sha256: "def4427fd4070673c073b892c7b229f8c3f17eb1df36bea2ec7188ddcfb4d0ea"
      },
      {
        path: "espeak-ng-data/la_dict",
        bytes: 3806,
        sha256: "17818dd567936fde032404fbbd6177844b9f5fc5a915480f567272147936f917"
      },
      {
        path: "espeak-ng-data/lang/aav/vi",
        bytes: 111,
        sha256: "3199c980f9e23a88a2aa693cd631bf4fcb0f3408c4272bc01b7ac0ff8e79d778"
      },
      {
        path: "espeak-ng-data/lang/aav/vi-VN-x-central",
        bytes: 143,
        sha256: "b351f13c6ed0da37561df25f45579872ff9863920ad66b94e27327a2c611755b"
      },
      {
        path: "espeak-ng-data/lang/aav/vi-VN-x-south",
        bytes: 142,
        sha256: "c0a0a2c894cd57b0bbacf9ef4efb8d89bfaf9feb164830e1539f599e7cc4e021"
      },
      {
        path: "espeak-ng-data/lang/art/eo",
        bytes: 41,
        sha256: "0254b93c8af79d9666a7667ca8b33b21a5453012da4ea0acd79660a9695f89d4"
      },
      {
        path: "espeak-ng-data/lang/art/ia",
        bytes: 29,
        sha256: "8fb11718030f8b29146f773ca462b838a6c660f166933eb6f1498c361f2e958b"
      },
      {
        path: "espeak-ng-data/lang/art/io",
        bytes: 50,
        sha256: "8e8391c7f40b7f9d2307faff8018a40dd2b448df4bd581a2950ee8393a00cebf"
      },
      {
        path: "espeak-ng-data/lang/art/jbo",
        bytes: 69,
        sha256: "d9529de82dccbd95f83c1de401f4ea661609bde644546e9ef421241b7043c00e"
      },
      {
        path: "espeak-ng-data/lang/art/lfn",
        bytes: 135,
        sha256: "394874fd9022e37cdc307c3386e81f1c0c133a8e9c5fdff74888b519f2c6d648"
      },
      {
        path: "espeak-ng-data/lang/art/piqd",
        bytes: 56,
        sha256: "d1a559b714cd8dd0ea9e46c4574e06c4f451957fb17bf39b945a89b9586f8b97"
      },
      {
        path: "espeak-ng-data/lang/art/py",
        bytes: 140,
        sha256: "59e54b95e8571417f43db37a7fd7e351af4e22a8c250cfb66af394f8ed6c4e9c"
      },
      {
        path: "espeak-ng-data/lang/art/qdb",
        bytes: 57,
        sha256: "52b83fc4f294580ebabd71df641ab5beec6b308758a3458b497124737589a7d8"
      },
      {
        path: "espeak-ng-data/lang/art/qya",
        bytes: 173,
        sha256: "78ae3f4d70208a9f69e2c26a6a3b5db28d7e6a58740fae937f51dd7fc9faeb1b"
      },
      {
        path: "espeak-ng-data/lang/art/sjn",
        bytes: 175,
        sha256: "61d85974b6841dfbfcc8cb92ad0742696cb87a6a85d5a28fe99895e46ef9de6f"
      },
      {
        path: "espeak-ng-data/lang/azc/nci",
        bytes: 114,
        sha256: "7bf70cb18e969398f74428b91c694a4483eaebd6733ecc437eb8714bbf7fff76"
      },
      {
        path: "espeak-ng-data/lang/bat/lt",
        bytes: 28,
        sha256: "7691c7ca1e79fc9728c70a0d22830eb113a0124bf96807e2a1ace3c6bf0c2f89"
      },
      {
        path: "espeak-ng-data/lang/bat/ltg",
        bytes: 312,
        sha256: "be716cbbdcb5fe319eed88abd4a44c3329a06e1dc468c8363d3f43cca2683a11"
      },
      {
        path: "espeak-ng-data/lang/bat/lv",
        bytes: 229,
        sha256: "f08a801dacccace62f5b90166428e90e088818d92dd5f9333ebbe834b0f21c16"
      },
      {
        path: "espeak-ng-data/lang/bnt/sw",
        bytes: 41,
        sha256: "271dd28b3ec41adeea53f1146249ba6cab61572963ab2743041114d95784e368"
      },
      {
        path: "espeak-ng-data/lang/bnt/tn",
        bytes: 42,
        sha256: "2243a1fc208dfdc37e154e837c0e782afc325d4acfbacc22718b7f05583ace92"
      },
      {
        path: "espeak-ng-data/lang/ccs/ka",
        bytes: 124,
        sha256: "68788b99dba7b82cdf8fc9dd05134bd72cf21f0b4c07b13b67b6f036e6294cba"
      },
      {
        path: "espeak-ng-data/lang/cel/cy",
        bytes: 37,
        sha256: "67bc33b4a66041e6343dfb98e1950d1089eecb68731f346fcc4f47cd07e79970"
      },
      {
        path: "espeak-ng-data/lang/cel/ga",
        bytes: 66,
        sha256: "29c2cc5736ceb2bd9ef745694d4abf7ed363a33569dfbe745811d4703b7b6cce"
      },
      {
        path: "espeak-ng-data/lang/cel/gd",
        bytes: 51,
        sha256: "7da0ba464579c367089109826ec15c2584a17417cca4a2c66dae0318d33e3128"
      },
      {
        path: "espeak-ng-data/lang/cus/om",
        bytes: 39,
        sha256: "b7c563f1effd83c08f3d229fb5a13d074513b85165ce4359a674ef30ca71786b"
      },
      {
        path: "espeak-ng-data/lang/dra/kn",
        bytes: 55,
        sha256: "c988a5226fa27ee6768b45566ce999ced9a4b68f8e79232b323d5903f4bb2258"
      },
      {
        path: "espeak-ng-data/lang/dra/ml",
        bytes: 57,
        sha256: "aa7e1f1f239ba55a8a79ed1f3544e9a51b94efe53925de60d4ff737273660b5c"
      },
      {
        path: "espeak-ng-data/lang/dra/ta",
        bytes: 51,
        sha256: "5bc213eb163bbf069cbfe4f2e9f7e7db71a719d8c0a96e95401d94c992960ed7"
      },
      {
        path: "espeak-ng-data/lang/dra/te",
        bytes: 70,
        sha256: "176ca4a81feb2181393edff3e2d5c0253cb52239392c4b809c61501d60c69811"
      },
      {
        path: "espeak-ng-data/lang/esx/kl",
        bytes: 30,
        sha256: "d08cf6ff60b99e6c2ceda549bcbb1a57580915d6a4d50c7f0f5d75289d9fb45a"
      },
      {
        path: "espeak-ng-data/lang/eu",
        bytes: 54,
        sha256: "a16e4e4d9b910a6e25a2a55913c812badc4fc3cbece0b8d49a64af112782d5a5"
      },
      {
        path: "espeak-ng-data/lang/gmq/da",
        bytes: 43,
        sha256: "e8dd5e0d30ff0694a7ee839faa8ed35c015eb927a737aba1f120c00005692eaf"
      },
      {
        path: "espeak-ng-data/lang/gmq/is",
        bytes: 27,
        sha256: "16c077e6222acfc7702046fa3579bb5d6b57ece98646229e13be2233f9fdcbd7"
      },
      {
        path: "espeak-ng-data/lang/gmq/nb",
        bytes: 87,
        sha256: "d47966621312fb95570539f446982f6deb98fd46d9b71fec4a0005a6bace8f46"
      },
      {
        path: "espeak-ng-data/lang/gmq/sv",
        bytes: 25,
        sha256: "02727d3b25fc82409bd2cd1ebb444fdb2d5d3f3de7f76b95fc9ed9164c3e59c3"
      },
      {
        path: "espeak-ng-data/lang/gmw/af",
        bytes: 123,
        sha256: "fb8ccc05f5eae1754b5aa7e92cb919defdd0810b70eec19f7c77cf836e51db09"
      },
      {
        path: "espeak-ng-data/lang/gmw/de",
        bytes: 42,
        sha256: "f3cca92f94b70f8c25a29ee0a4c9ce4c7f1022241532e0647fa2b7f698bf104e"
      },
      {
        path: "espeak-ng-data/lang/gmw/en",
        bytes: 140,
        sha256: "4605d5330801de3641c6e366d15f129ea1f5ffbce8722642aba01ace07ab9c83"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-029",
        bytes: 335,
        sha256: "faeb8cb201056775f733acbd908c66555fe57bf01cb063920f178f389cbf85d3"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-GB-scotland",
        bytes: 295,
        sha256: "1ce4282c1f4385dbaf0035e799b2ab1ee9e9a3ab4829100594a3047727b52353"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-GB-x-gbclan",
        bytes: 238,
        sha256: "2040e176f1f7f27bdce81c32d7e2b1662449d54d264afd3c0ed871b8e42b6e46"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-GB-x-gbcwmd",
        bytes: 188,
        sha256: "927a5ab891c65b30b4426b151d1623a01024f6b773a38497ba1c90cd77a95747"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-GB-x-rp",
        bytes: 249,
        sha256: "d0625af7f58561b1b8cf96fd7f93eee6553bcb3eadb9020ae0757bf96e5115e5"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-US",
        bytes: 257,
        sha256: "41534c2a22df5dd4f1052ff9e1a33a3ea7bff5a26b5c02bdad5ba8ddb7524704"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-US-nyc",
        bytes: 271,
        sha256: "e8ee9168376d1f7d9e7dcda7c4644c36c529a8bea816e6380895364db46ea2e3"
      },
      {
        path: "espeak-ng-data/lang/gmw/lb",
        bytes: 31,
        sha256: "071beb0e769afeba32177796fc0f1386bdc89a3234bed2bf720e76cbf73f5b99"
      },
      {
        path: "espeak-ng-data/lang/gmw/nl",
        bytes: 23,
        sha256: "56ae04fae28ae9371ed6db28193189e4ee962ba8236f0bcdeef6a06ea4dee374"
      },
      {
        path: "espeak-ng-data/lang/grk/el",
        bytes: 23,
        sha256: "0b529c998af07c72bf516b5750709464f6258c56c6916b8b8f0c843be9836fca"
      },
      {
        path: "espeak-ng-data/lang/grk/grc",
        bytes: 99,
        sha256: "319f950b1ad7b1f37efaa390540bf957bddac16d0557a6c3adaff27e0c64e12e"
      },
      {
        path: "espeak-ng-data/lang/inc/as",
        bytes: 42,
        sha256: "3f58f5628f792b00a5ae6e8fe3bf8696f64af2838e5723799ddbab6027a0b378"
      },
      {
        path: "espeak-ng-data/lang/inc/bn",
        bytes: 25,
        sha256: "bc3ce23384b9d0bb3bac06a09d90f690fae32a492dcbb030f0e56ba67b5d656c"
      },
      {
        path: "espeak-ng-data/lang/inc/bpy",
        bytes: 39,
        sha256: "e528d1189b995b94966cef4cc182469cc54f7da8efc5860375c4ecf186ce6146"
      },
      {
        path: "espeak-ng-data/lang/inc/gu",
        bytes: 42,
        sha256: "f938a755d270745188c2cf2aacba06642a96bb73ba2a0325384121b9d5ec5407"
      },
      {
        path: "espeak-ng-data/lang/inc/hi",
        bytes: 23,
        sha256: "3c1c3f916f57f2d6d6cbf7923c0f39a36ac2140e2a69ddffce917d7b8bf3ccab"
      },
      {
        path: "espeak-ng-data/lang/inc/kok",
        bytes: 26,
        sha256: "810ee23fbbe9c186a036bc12f4e5c0de674a132e2e099c9b3dece2a1c9cdb28a"
      },
      {
        path: "espeak-ng-data/lang/inc/mr",
        bytes: 41,
        sha256: "29063ff3a5257d0d3d7c215dfd4c14deed39e1d48f15894202e6712459720efd"
      },
      {
        path: "espeak-ng-data/lang/inc/ne",
        bytes: 37,
        sha256: "d53fda082ec174ef33ed3c3468fc973c43b4ef71aca8c1a28cb344668f4838dc"
      },
      {
        path: "espeak-ng-data/lang/inc/or",
        bytes: 39,
        sha256: "9b52ede7d19659f884854de3dff12597a96f4d6ec7cb4146d2f8dad1453c742f"
      },
      {
        path: "espeak-ng-data/lang/inc/pa",
        bytes: 25,
        sha256: "eed3cf477f81d13559dbb367256f9532b20dad1432c15b206c777217b8f570ca"
      },
      {
        path: "espeak-ng-data/lang/inc/sd",
        bytes: 66,
        sha256: "65bfe0e37799029d42a370eb627cca5aa4108b967fba6c8141878d693c903619"
      },
      {
        path: "espeak-ng-data/lang/inc/si",
        bytes: 55,
        sha256: "8f0993b35ba5b075c38ae76640971256e560abfbd721b608d16a48588932596d"
      },
      {
        path: "espeak-ng-data/lang/inc/ur",
        bytes: 94,
        sha256: "5b7af7474fac265c7bd7d269111994a09610f954690698f55a8613f3fa973318"
      },
      {
        path: "espeak-ng-data/lang/ine/hy",
        bytes: 61,
        sha256: "b6ad6129079c49ca915c3005ecb74a02bf5d69cbbc8ec3f8e0f6b949cb3a768f"
      },
      {
        path: "espeak-ng-data/lang/ine/hyw",
        bytes: 365,
        sha256: "26f8a863c74b3d19c9c42fcf16ae5151c12ac52ef8fab36cae1e5f0d4ad30e6a"
      },
      {
        path: "espeak-ng-data/lang/ine/sq",
        bytes: 103,
        sha256: "865fde9017b5af82acb844e5f9793998fed422a208ad8aaf9dedacad3bf27af1"
      },
      {
        path: "espeak-ng-data/lang/ira/fa",
        bytes: 90,
        sha256: "0dc7e93be4d1fbdf7ff52de2fe8bcdc23304e6d86e012b4ab8276d626b5d980c"
      },
      {
        path: "espeak-ng-data/lang/ira/fa-Latn",
        bytes: 269,
        sha256: "a04cf8efed8db1ac33b306f1f8c6f42733dace87c9fc9f34a2d227b3bb291e28"
      },
      {
        path: "espeak-ng-data/lang/ira/ku",
        bytes: 40,
        sha256: "57db3a210d73412a49e961dbed9b27077f5c7b967a19a0eb9f9363ea4b16cea5"
      },
      {
        path: "espeak-ng-data/lang/iro/chr",
        bytes: 569,
        sha256: "f0e2fb8549306c07f571d3e77c89b1d3e9022d448d58e5d424441e01ccce88be"
      },
      {
        path: "espeak-ng-data/lang/itc/la",
        bytes: 297,
        sha256: "b70d13a264352eba2d22a5d0ef21730849509d18f7277320b008a56decc6efc2"
      },
      {
        path: "espeak-ng-data/lang/jpx/ja",
        bytes: 52,
        sha256: "6fd980445bc52e0f593062929f5b62831448abaae2a92739beba49df27a79743"
      },
      {
        path: "espeak-ng-data/lang/ko",
        bytes: 51,
        sha256: "c2dfbf88d9aa2ac9bf2f30e92e260120e4f2c21123a02265014ae98d59d5774e"
      },
      {
        path: "espeak-ng-data/lang/map/haw",
        bytes: 42,
        sha256: "b19f22efb6714354d8d1360f449e05f0f84d50d6fa3c98fcfd619ea1b4ba8996"
      },
      {
        path: "espeak-ng-data/lang/miz/mto",
        bytes: 183,
        sha256: "e33aba5e8159730f62004b22518d627c796f7d039431e5d9217b498f10341976"
      },
      {
        path: "espeak-ng-data/lang/myn/quc",
        bytes: 210,
        sha256: "76a75b77c672c432b56b84d517310d6aa75c4b3f9de580e290199804366174ea"
      },
      {
        path: "espeak-ng-data/lang/poz/id",
        bytes: 134,
        sha256: "ce1fcddab3e756a7cdba3dd009ad24cd57e1fde29ce395698355da24e32a6075"
      },
      {
        path: "espeak-ng-data/lang/poz/mi",
        bytes: 367,
        sha256: "2146cf3868c79b853bb5e41ddbf611d51b4b0a14087199f16194313562b98987"
      },
      {
        path: "espeak-ng-data/lang/poz/ms",
        bytes: 430,
        sha256: "8a965182ee0c5a41357197c05cf047d21b96744775a57a344d831a961e30351b"
      },
      {
        path: "espeak-ng-data/lang/qu",
        bytes: 88,
        sha256: "3069e443ecf3421bcb3b35b864e1a89fa9465af072f86eedd46a415990aba6e6"
      },
      {
        path: "espeak-ng-data/lang/roa/an",
        bytes: 27,
        sha256: "ff8aa97c55286cc90531cad5df3cd36165abba11502a84d53b0fcd923f965f23"
      },
      {
        path: "espeak-ng-data/lang/roa/ca",
        bytes: 25,
        sha256: "787df034320467236292bb46f1f8781a2998a185f117d350c018b6cfcf360854"
      },
      {
        path: "espeak-ng-data/lang/roa/es",
        bytes: 63,
        sha256: "966aa015ea5646d79f0ca4807cf5da7339aabd3782b55cfa5eb0d8c3fc8fc588"
      },
      {
        path: "espeak-ng-data/lang/roa/es-419",
        bytes: 167,
        sha256: "ff0f84457ac40e3bcf61d6de58028312be74e0e6cbc3b742f31b3ce729c2aa0c"
      },
      {
        path: "espeak-ng-data/lang/roa/fr",
        bytes: 79,
        sha256: "95f44834b48c075dad13eace54d2c98ff79b81aa0074dd67eebaf66c2909eef8"
      },
      {
        path: "espeak-ng-data/lang/roa/fr-BE",
        bytes: 84,
        sha256: "72496a316e47b997f893500b8953dc01a10b86a2d4238e13c1260f50b47d792a"
      },
      {
        path: "espeak-ng-data/lang/roa/fr-CH",
        bytes: 86,
        sha256: "b449b0fd99d9cd93261fe1c6b816448b99b4a10420bee3f301e669568ad0de55"
      },
      {
        path: "espeak-ng-data/lang/roa/ht",
        bytes: 140,
        sha256: "389bdf3e984a2f93b7060baad82452dac65b83bf4482d3884525a176ae0e0524"
      },
      {
        path: "espeak-ng-data/lang/roa/it",
        bytes: 109,
        sha256: "0d9069eb9a96db1c55c131b2bb7d1f5255c68fbddc2199ffd3295b52519a3256"
      },
      {
        path: "espeak-ng-data/lang/roa/pap",
        bytes: 62,
        sha256: "41a5b5e91482a5498a66711c05873a634bbd418786b0ba037032df846344cfc1"
      },
      {
        path: "espeak-ng-data/lang/roa/pt",
        bytes: 95,
        sha256: "a44060072f790e41912c57b7d52f7b6438c4383e0dabdb052f6fdb7aacc23493"
      },
      {
        path: "espeak-ng-data/lang/roa/pt-BR",
        bytes: 109,
        sha256: "84dd4e34c970fadbe32211eadecfdfaab52432479c0911e43300da88a33398ba"
      },
      {
        path: "espeak-ng-data/lang/roa/ro",
        bytes: 26,
        sha256: "b12af10ffc3f89cb87767ca701c6fea0def8a712de63426a9c3d0bf2432467f8"
      },
      {
        path: "espeak-ng-data/lang/sai/gn",
        bytes: 47,
        sha256: "ff82d2d163d3e06adb580254d89012e689b2615c46579883562838ab401fb5d5"
      },
      {
        path: "espeak-ng-data/lang/sem/am",
        bytes: 41,
        sha256: "5970b16bf865528ee96a78c08498244bc8f54218fc2add499716b0e0c09969fb"
      },
      {
        path: "espeak-ng-data/lang/sem/ar",
        bytes: 50,
        sha256: "43f418f8140e5a7bd7096963da20ccba9247f6be1fcdb08cb53dd7967dd72eee"
      },
      {
        path: "espeak-ng-data/lang/sem/he",
        bytes: 40,
        sha256: "de9195e743b91fb7fbef7493bd5ddccad14c380a58d5aeb7c1d11d3419ef3b86"
      },
      {
        path: "espeak-ng-data/lang/sem/mt",
        bytes: 41,
        sha256: "d23f38fae3253b6fb42e3336760ab482e676893692455465448bc9fbc0ac3e83"
      },
      {
        path: "espeak-ng-data/lang/sit/cmn",
        bytes: 686,
        sha256: "a130a38e3b622735c2401cb37f6719f46995e84a133729185cef9a543ec0b072"
      },
      {
        path: "espeak-ng-data/lang/sit/cmn-Latn-pinyin",
        bytes: 161,
        sha256: "14c2fc097db280416b688c2bf97de2e5da532c279754020fde7bf6cd624cdd10"
      },
      {
        path: "espeak-ng-data/lang/sit/hak",
        bytes: 128,
        sha256: "c03c30b43e0b0abdfa689445baf9f442664a0373154a5d0ca75a33d30f46aeed"
      },
      {
        path: "espeak-ng-data/lang/sit/my",
        bytes: 56,
        sha256: "4b5ae2566cbf30aa59207020469e09832e66a7883818788f253996c534303dca"
      },
      {
        path: "espeak-ng-data/lang/sit/yue",
        bytes: 194,
        sha256: "83f3dac92af5b4aaecc119515698a6979524be236b28ea8f1024ec707d99ea5b"
      },
      {
        path: "espeak-ng-data/lang/sit/yue-Latn-jyutping",
        bytes: 213,
        sha256: "c56d45bb9a9cd97efb38edabe31c7dd3feb0518cc900aac6a891dcb6bd8eb428"
      },
      {
        path: "espeak-ng-data/lang/tai/shn",
        bytes: 92,
        sha256: "f16bf2de219d3ae9a6aec263ce9c684d9cd3e61258d04c7948db0757c67e2c96"
      },
      {
        path: "espeak-ng-data/lang/tai/th",
        bytes: 37,
        sha256: "6c8ac809868de659e06673f1fc2b56dbf4637ff9980da7a4726b846478b4cfe6"
      },
      {
        path: "espeak-ng-data/lang/trk/az",
        bytes: 45,
        sha256: "52b424332de4c443f3e9c5ce4de5aed6fbfd421269fc825756dfc6bcbd7e1ad8"
      },
      {
        path: "espeak-ng-data/lang/trk/ba",
        bytes: 25,
        sha256: "a0cc3a06293962093c66533f9c1cffbccf083a2eb666751f2778a02a5316d98c"
      },
      {
        path: "espeak-ng-data/lang/trk/cv",
        bytes: 40,
        sha256: "94baf6bacf581cc20337471c599f85ecbbe211f0b8476351ff19450c6541ea92"
      },
      {
        path: "espeak-ng-data/lang/trk/kk",
        bytes: 40,
        sha256: "2219f4d6de0fbb1dc9982157c6f3cc5f4c8abe5fcb605908a9d1054b9880cd51"
      },
      {
        path: "espeak-ng-data/lang/trk/ky",
        bytes: 43,
        sha256: "8239dfe8bdc6d4725880f5192b4eaf645f839e40cadfd145a4409c8387ac2d59"
      },
      {
        path: "espeak-ng-data/lang/trk/nog",
        bytes: 39,
        sha256: "e0e27fe61d406b6f4a4879fb8f81a14bc65997106666933991b818c7d79fabc1"
      },
      {
        path: "espeak-ng-data/lang/trk/tk",
        bytes: 25,
        sha256: "d78263398c135119909ad63a3ecb6ffe3aff08383212934dd03695222a9786d0"
      },
      {
        path: "espeak-ng-data/lang/trk/tr",
        bytes: 25,
        sha256: "490eb5a2f777a2f3396f3a824ed8021bd77a94be801214411461bde6689738c9"
      },
      {
        path: "espeak-ng-data/lang/trk/tt",
        bytes: 23,
        sha256: "8b9617a9b6c56f4a2fe2f59d9ce55426837196567962716f9330f70948f8f9b0"
      },
      {
        path: "espeak-ng-data/lang/trk/ug",
        bytes: 24,
        sha256: "65d0cdbc96efab4d9e3cd0095440752a31dc7f425edd3ba0a53c4dd33eac5d63"
      },
      {
        path: "espeak-ng-data/lang/trk/uz",
        bytes: 39,
        sha256: "04fd711dfda1e00d17dc8b1b250c24d70cc3c498b27e35d31065ac47441a6759"
      },
      {
        path: "espeak-ng-data/lang/urj/et",
        bytes: 237,
        sha256: "59c77747c4774e54a63ab74d2c6a95bc3c5b5b0a50d3781f187bd1fc3a613de5"
      },
      {
        path: "espeak-ng-data/lang/urj/fi",
        bytes: 237,
        sha256: "61f58ec3bba5b55a392aff7ecf8a84d024200aeaa404b5553fcfb47770936928"
      },
      {
        path: "espeak-ng-data/lang/urj/hu",
        bytes: 73,
        sha256: "c575421d2ae397065d35af0eb4f79dff4e85f3435ccf45da874f46b3fee1338b"
      },
      {
        path: "espeak-ng-data/lang/urj/smj",
        bytes: 45,
        sha256: "3d709dec77bb633af0d57b89668dbaaa72d9be8688118d6909f7d457bec12a50"
      },
      {
        path: "espeak-ng-data/lang/zle/be",
        bytes: 52,
        sha256: "5beb002d15a36bf3d0d764ed0d483c75a1df6909eaa3b10fe5f6546700c9bfec"
      },
      {
        path: "espeak-ng-data/lang/zle/ru",
        bytes: 57,
        sha256: "9f52d00a279aaeaa45a786b4fd3a98b34e95fedbf823f8cdb9fecc1339751d3a"
      },
      {
        path: "espeak-ng-data/lang/zle/ru-LV",
        bytes: 280,
        sha256: "980e379667ccb94abe33b9c9c660c08800e3f31e36fe4a939551398ab98457ae"
      },
      {
        path: "espeak-ng-data/lang/zle/ru-cl",
        bytes: 91,
        sha256: "200ea345b505ec9e7b8838490aeaf1822af41033429aeae4ea68159047f59f90"
      },
      {
        path: "espeak-ng-data/lang/zle/uk",
        bytes: 97,
        sha256: "df3d1a9f77bac0531e72f87be398d9eb1e903bd6f839d4f04ffec5abb4e34634"
      },
      {
        path: "espeak-ng-data/lang/zls/bg",
        bytes: 111,
        sha256: "9b91accccb0d53bb2a7bf21922846ba58c74bc082ba71ae32bf12cb0d092f853"
      },
      {
        path: "espeak-ng-data/lang/zls/bs",
        bytes: 230,
        sha256: "0820e7c78b68fbdaf86d83c782cdde1901b642d1cdbeae4181c6f5f5e21e5e89"
      },
      {
        path: "espeak-ng-data/lang/zls/hr",
        bytes: 262,
        sha256: "cef3ef0411c66f154e6c82f7decd95beffa8cbfbe953335658df9f125bdd6096"
      },
      {
        path: "espeak-ng-data/lang/zls/mk",
        bytes: 28,
        sha256: "6dbc2cfb8999141bd0782cd463d4880468161088190c6b4c9412f43552dc39e2"
      },
      {
        path: "espeak-ng-data/lang/zls/sl",
        bytes: 43,
        sha256: "e1c2bd1f75c0eeb86f64182472d5f597ce23e64ad7478c248c2f75b694655942"
      },
      {
        path: "espeak-ng-data/lang/zls/sr",
        bytes: 250,
        sha256: "0e076528d3566f6e59b807e16e274dee505e88a6d477da188ab8ec442eae44f4"
      },
      {
        path: "espeak-ng-data/lang/zlw/cs",
        bytes: 23,
        sha256: "1477cdba5ba3bce85db559accbbd8a24b86b3f6d9d9988bc587e89357c1c4431"
      },
      {
        path: "espeak-ng-data/lang/zlw/pl",
        bytes: 38,
        sha256: "83c586a2b724b24b9f98d21ade5022112c465ac446ca09930286980ceae1c781"
      },
      {
        path: "espeak-ng-data/lang/zlw/sk",
        bytes: 24,
        sha256: "f46ff673c7d58c1646096c174d58da34047d893d0d2993dbca260ce54abe77ef"
      },
      {
        path: "espeak-ng-data/lb_dict",
        bytes: 687931,
        sha256: "d819a062b9722334f187540d3530fac1de365cd200d4a466f5ecccd7e3c05772"
      },
      {
        path: "espeak-ng-data/lfn_dict",
        bytes: 2793,
        sha256: "10281bc404f429165a330b800eb64674e37a135d1b4c689e57fb1d9e827d6924"
      },
      {
        path: "espeak-ng-data/lt_dict",
        bytes: 49890,
        sha256: "68ef55aba9545d27ce73e7d4aca1c2fa51d2c3d3d626152fbc22bf5a90fbff11"
      },
      {
        path: "espeak-ng-data/lv_dict",
        bytes: 66337,
        sha256: "3e246c76b7da924235ffb75925070865e669da2ce3e41e98395e99be1f8db9f7"
      },
      {
        path: "espeak-ng-data/mi_dict",
        bytes: 1346,
        sha256: "401621fdf61da47d0513e80279134a3515ced898aaadd5205b82cced0f2df042"
      },
      {
        path: "espeak-ng-data/mk_dict",
        bytes: 63859,
        sha256: "e4960ff4e74e1096ff1c3bccab62ce0429fa4faa725e546cd5d33e43f45225be"
      },
      {
        path: "espeak-ng-data/ml_dict",
        bytes: 92345,
        sha256: "b12687557c38f9bcd17417854253ddde3781e3b0c16f9470d732205818e7cd38"
      },
      {
        path: "espeak-ng-data/mr_dict",
        bytes: 87391,
        sha256: "f712a7525db108ef9769aee53fdd1cd141f0df372778924691b89623aa6fc22f"
      },
      {
        path: "espeak-ng-data/ms_dict",
        bytes: 53541,
        sha256: "74b01897385ba1f018de44c0268048fa5be588bbbb702a900bb35c691a466707"
      },
      {
        path: "espeak-ng-data/mt_dict",
        bytes: 4384,
        sha256: "1f76761bdfd481a984b15d07522df23c9444f4ac21ea9671917e08bbffa7f8d3"
      },
      {
        path: "espeak-ng-data/mto_dict",
        bytes: 3960,
        sha256: "6d51cb6be959dba045d41d3d63ff662a7363e1287cce2c633b071295ce55d560"
      },
      {
        path: "espeak-ng-data/my_dict",
        bytes: 95948,
        sha256: "e7f9c2dc672e1388f6941ac6def956b8ab2d622adb00d0ed6640dee4b7acc96b"
      },
      {
        path: "espeak-ng-data/nci_dict",
        bytes: 1534,
        sha256: "38c7201e7726c8d508f8f8611349cbc44fcc4684a0fee4db7285d83e808a5b69"
      },
      {
        path: "espeak-ng-data/ne_dict",
        bytes: 95377,
        sha256: "43831c3f53ea6e939cac37b5ae5bd7a2ea8237aa46f0e7f2441ab772a3c51dba"
      },
      {
        path: "espeak-ng-data/nl_dict",
        bytes: 65979,
        sha256: "d28641049f98c76b460c3dddde3e2edecb7782c4eb9a3f242391301ff526c83f"
      },
      {
        path: "espeak-ng-data/no_dict",
        bytes: 4178,
        sha256: "43b828f8c1709e7abb23a0cc6416fb32e4814e3f1ff1db4baf2935bf7c77c9ff"
      },
      {
        path: "espeak-ng-data/nog_dict",
        bytes: 3294,
        sha256: "8b921398a2f1907b43c07b96a72277d8d3d8545e385955eebae5f340aae33bd2"
      },
      {
        path: "espeak-ng-data/om_dict",
        bytes: 2302,
        sha256: "3624e67ef8d9c20d894db0adccaccc61ee852977cb77d5fe5801e7b4a528fcf5"
      },
      {
        path: "espeak-ng-data/or_dict",
        bytes: 89246,
        sha256: "e0dd737e9104da63a27d86cd464cf7764837625b1513169b8d28fca1bd3c8c3b"
      },
      {
        path: "espeak-ng-data/pa_dict",
        bytes: 79953,
        sha256: "cee0e2a2bfb166e602ff84e185351a8ac311571ccdf46e1831c7a25245563c10"
      },
      {
        path: "espeak-ng-data/pap_dict",
        bytes: 2128,
        sha256: "770039bbf4ea8c5a3ffddd98c4831ca02c9f39e1ff6b3de7729fa71a8f3bc0f1"
      },
      {
        path: "espeak-ng-data/phondata",
        bytes: 550424,
        sha256: "4e0288957874029a8c3c9f41a8f517ad4bf18127046decbdd4b9d1d6807ce3a3"
      },
      {
        path: "espeak-ng-data/phondata-manifest",
        bytes: 21821,
        sha256: "7b387af0702c7cf0b61f0bead68feded0bd8e1620729b0b252e76acbc30d3813"
      },
      {
        path: "espeak-ng-data/phonindex",
        bytes: 39074,
        sha256: "3ca7b8fa3b42624e4b0f152707e7a39245fce569aa99ea47c055d9e622fcf0c4"
      },
      {
        path: "espeak-ng-data/phontab",
        bytes: 55796,
        sha256: "886f3fa402cb0ba73d483aa8ad000af47a6b7cc06293c75a97913fba68a530f6"
      },
      {
        path: "espeak-ng-data/piqd_dict",
        bytes: 1710,
        sha256: "33004a36210c33291aef8a838d477667eed7af52ff5093152891379b1774188d"
      },
      {
        path: "espeak-ng-data/pl_dict",
        bytes: 76730,
        sha256: "0e0ce6cfe4eba41a1223362a046390dca359a3e597af8243adaac84d624ef18f"
      },
      {
        path: "espeak-ng-data/pt_dict",
        bytes: 67817,
        sha256: "7e8398f15fa4a21db39a213381f28ec0d302b22663c644e865abb61a09c1b004"
      },
      {
        path: "espeak-ng-data/py_dict",
        bytes: 2409,
        sha256: "2255348879547940e8b49e0ca1b80452748f142cb6e267e49cab0560c720129a"
      },
      {
        path: "espeak-ng-data/qdb_dict",
        bytes: 3028,
        sha256: "c9b7f307ffe54f4aaf323290eca1c620572919035b0eb268e5c94f5d7a430058"
      },
      {
        path: "espeak-ng-data/qu_dict",
        bytes: 1919,
        sha256: "d50659c2a14f43e01fdef0b668eb083025a00cac481b49dfb068e0220e0ed945"
      },
      {
        path: "espeak-ng-data/quc_dict",
        bytes: 1450,
        sha256: "458c1ca6dcfa288ea2584915d206c5127512501174d82655de2cf031378e6dfd"
      },
      {
        path: "espeak-ng-data/qya_dict",
        bytes: 1939,
        sha256: "e56ae297ebac26ed6c77a9718812e087f0bd198241dac3c0d964f36510984783"
      },
      {
        path: "espeak-ng-data/ro_dict",
        bytes: 68538,
        sha256: "b14f68866b0440c4b0d95fb7da3b7ffd3c59b693e8593d188474fabfc9a1117d"
      },
      {
        path: "espeak-ng-data/ru_dict",
        bytes: 8532392,
        sha256: "f0f6181bbbf9e53cd1e8f9d26bde8fc62119c4f78181948f961cb29866e5e585"
      },
      {
        path: "espeak-ng-data/sd_dict",
        bytes: 59928,
        sha256: "398c876b52213a6e7dd54c68d0560d2a1c164c6bfb23b9ec1c044266cdcf2217"
      },
      {
        path: "espeak-ng-data/shn_dict",
        bytes: 88172,
        sha256: "121b6682a9b49700232b3a05cc2289d8d4b9c1027e6c2db5c3f552804ad3d04a"
      },
      {
        path: "espeak-ng-data/si_dict",
        bytes: 85384,
        sha256: "a241437d4b64fd328ac4a3e786c9465c60488f6fa31cbba04153f628cdc61f27"
      },
      {
        path: "espeak-ng-data/sjn_dict",
        bytes: 1783,
        sha256: "eb70510144230f6791574d86bae0918b4191b076dd66c555e6ae3d5637daadf7"
      },
      {
        path: "espeak-ng-data/sk_dict",
        bytes: 50002,
        sha256: "58b9bc11c9a95d81e96966242367009f8d02ab7a3f8f4fd77e3581ed4159f0a8"
      },
      {
        path: "espeak-ng-data/sl_dict",
        bytes: 45047,
        sha256: "9cb2bcbf616a5e7dd7ca769e7d222a48c613299ef1d76e44c08b002f8c22861a"
      },
      {
        path: "espeak-ng-data/smj_dict",
        bytes: 35095,
        sha256: "815270ce38a59c192ef5aa8801119d9b3ed973d9e23dfa6da8d5d27ded5a9cd6"
      },
      {
        path: "espeak-ng-data/sq_dict",
        bytes: 45003,
        sha256: "6b74bef94c3319407c27e44d944e765d036a88b30b4c17f30bbc182dbffcc4ce"
      },
      {
        path: "espeak-ng-data/sr_dict",
        bytes: 46832,
        sha256: "770cae9c516e48af7896629faf4abefaf041e1fd4ae184011aad07b97196f613"
      },
      {
        path: "espeak-ng-data/sv_dict",
        bytes: 47836,
        sha256: "565f058b14f1c89c6bfa44fc3700793886a39c7818f1037ad1f4961fa7517509"
      },
      {
        path: "espeak-ng-data/sw_dict",
        bytes: 47804,
        sha256: "375fab2ccd0d669177ad406b20b0cdb5851a1e86f093672f24f72c29fec8a815"
      },
      {
        path: "espeak-ng-data/ta_dict",
        bytes: 209553,
        sha256: "8f3d855c8d7a35ad0e2b22bc7c15a8830e5fc235492894e5db40458655076ecd"
      },
      {
        path: "espeak-ng-data/te_dict",
        bytes: 94837,
        sha256: "640407c66a5bb975671243325de616c221f90bb2842d3a36278facb68c0772f8"
      },
      {
        path: "espeak-ng-data/th_dict",
        bytes: 2301,
        sha256: "dd5d3e6268a381920f21c769f52daf3a8e610ae83f7995e56f15e9d4de18d653"
      },
      {
        path: "espeak-ng-data/tk_dict",
        bytes: 20868,
        sha256: "b3cd4a246f014f0564ec9efae79731c0fe73ffe1cd1617359dd8d5344ee3f9c8"
      },
      {
        path: "espeak-ng-data/tn_dict",
        bytes: 3072,
        sha256: "67f68dc336e7c65b946c95414cc8ae96cd10d241783bf857b3f990ac73221b2b"
      },
      {
        path: "espeak-ng-data/tr_dict",
        bytes: 46793,
        sha256: "311b0557059f2dab5ee2faabb51361f5033368f0e2a54c4bdfe45e730674f26e"
      },
      {
        path: "espeak-ng-data/tt_dict",
        bytes: 2121,
        sha256: "60d138d38330e44a78b4224cbea452bfca22bce6734c8ce3f640c0216ce14001"
      },
      {
        path: "espeak-ng-data/ug_dict",
        bytes: 2070,
        sha256: "7c4567ffe6bd8d5224b6b3fd8fab65b1343254636e6228d738ae3a708428e8e7"
      },
      {
        path: "espeak-ng-data/uk_dict",
        bytes: 3492,
        sha256: "a779bb0f51ce5cebb650a4e2282162fc8c44609210a2baa700f81f3e83e6e10c"
      },
      {
        path: "espeak-ng-data/ur_dict",
        bytes: 133556,
        sha256: "74b60e4331f532810ccfc70751ad07ab440647550a2d25823f44663a0dfa86fb"
      },
      {
        path: "espeak-ng-data/uz_dict",
        bytes: 2540,
        sha256: "790d42ac417b26dd7b1bbfed4be72329c16ed1839dd75f55f7c962eb7bd5857a"
      },
      {
        path: "espeak-ng-data/vi_dict",
        bytes: 52608,
        sha256: "bbf7cab4ba733b2f5d9d3b61eb1194ef745232fa3adebb4bc92456e948cb3722"
      },
      {
        path: "espeak-ng-data/voices/!v/Alex",
        bytes: 128,
        sha256: "1cf9874567f4fa8109329f084e9ad9ed788fb2362298921d0a04a57b24f1141f"
      },
      {
        path: "espeak-ng-data/voices/!v/Alicia",
        bytes: 474,
        sha256: "6d3f60ec866706e9d4ab7da2a79eedb8c11b50f63620f87e58317f316ea3d58e"
      },
      {
        path: "espeak-ng-data/voices/!v/Andrea",
        bytes: 357,
        sha256: "6ca52734ec2cf7c419d2d3ad7c3449cd1a1776342c4d152ea12c5b1e72801e89"
      },
      {
        path: "espeak-ng-data/voices/!v/Andy",
        bytes: 320,
        sha256: "0e13ba1a940cd9df7e65358c36445c9740f3d75f1360c7f7c71ab9f74b45edca"
      },
      {
        path: "espeak-ng-data/voices/!v/Annie",
        bytes: 315,
        sha256: "40f0f829c5c6e7abf4a02a21f128a572756d6f6693014c26d09a5c29ede5ec33"
      },
      {
        path: "espeak-ng-data/voices/!v/AnxiousAndy",
        bytes: 361,
        sha256: "7dfe126f517b76cc78269618dbee2c30d324bea9460b400938756ec93995eaf8"
      },
      {
        path: "espeak-ng-data/voices/!v/Demonic",
        bytes: 3858,
        sha256: "241b0e78362bd3208bb586b65bdf52330e1e8322f8f226c4790c4abeb47cfb09"
      },
      {
        path: "espeak-ng-data/voices/!v/Denis",
        bytes: 305,
        sha256: "a09fe9f7a4e478d2ba1e139c2995633e2b99de9abdaaa82307954599b0e3d6fd"
      },
      {
        path: "espeak-ng-data/voices/!v/Diogo",
        bytes: 379,
        sha256: "a4a17c453d13242b48783c247816bff8d2cf7bc8931c3f8237887d88a2881b18"
      },
      {
        path: "espeak-ng-data/voices/!v/Gene",
        bytes: 281,
        sha256: "06258dae680cde2122a4939dbd4f23ed4ea145b7475068bf7dd4d466090afd2a"
      },
      {
        path: "espeak-ng-data/voices/!v/Gene2",
        bytes: 283,
        sha256: "bcdb3039296eea37398e4423dc9bb6849cda9c5c812b83702ebc49682c649f57"
      },
      {
        path: "espeak-ng-data/voices/!v/Henrique",
        bytes: 381,
        sha256: "5c6bf1cf5b6bc7c7d48f2a8368ae348c6ff64232c047f40f9d9a6e6824b4ce6a"
      },
      {
        path: "espeak-ng-data/voices/!v/Hugo",
        bytes: 378,
        sha256: "906acbef890dc4da67cb54b5b0ddc2cab7ee308a95d350c899f0b0cb6a83dd5f"
      },
      {
        path: "espeak-ng-data/voices/!v/Jacky",
        bytes: 267,
        sha256: "41884ed9b66160aeb5a0dc418370a59fe39ead0013d93e023e6d607ef01c1a6e"
      },
      {
        path: "espeak-ng-data/voices/!v/Lee",
        bytes: 338,
        sha256: "a1584887cddb40c10e04992fb770025b52e66b70504656094f80975f1d6bbf6b"
      },
      {
        path: "espeak-ng-data/voices/!v/Marco",
        bytes: 467,
        sha256: "04025677360c0270f094bbb6716b83c8284902f6da9b496bedbbf590963835fb"
      },
      {
        path: "espeak-ng-data/voices/!v/Mario",
        bytes: 270,
        sha256: "a94ac65d132030df496e8aa364d5cde5f2eafa4b6b3ae361a2901d512c6029d8"
      },
      {
        path: "espeak-ng-data/voices/!v/Michael",
        bytes: 270,
        sha256: "4409be23ef5fedf4c8bffbfaa8a802a342824d7e97f1d92938336a25f92f0ebe"
      },
      {
        path: "espeak-ng-data/voices/!v/Mike",
        bytes: 112,
        sha256: "8999b264606c0af23d346a877e10ca05aa757f7ea433e6cfcb3bef50a56ba2cf"
      },
      {
        path: "espeak-ng-data/voices/!v/Mr serious",
        bytes: 3193,
        sha256: "794abd78deb07ce9b03419d20f7744df4c0151d5abff7981217e9d0926a2f240"
      },
      {
        path: "espeak-ng-data/voices/!v/Nguyen",
        bytes: 280,
        sha256: "4f3d557d9c045080f56022a96e5b3659c4d1caa5fa1d702e12d3ef6bec2e3a45"
      },
      {
        path: "espeak-ng-data/voices/!v/Reed",
        bytes: 202,
        sha256: "727dbc3f6bff0be4dd7d0438f66d3bb82cff68ed148cf52cb58e73314aaec1e4"
      },
      {
        path: "espeak-ng-data/voices/!v/RicishayMax",
        bytes: 233,
        sha256: "7ddc7a57711ccd7a736540f14271adadf1e2e0422941ecaa7cc43ab87f8e2017"
      },
      {
        path: "espeak-ng-data/voices/!v/RicishayMax2",
        bytes: 435,
        sha256: "3de5e414d4b2ef082a7b974bb7ede94937e93b5b873d2b2f7928b19d30745180"
      },
      {
        path: "espeak-ng-data/voices/!v/RicishayMax3",
        bytes: 435,
        sha256: "36d20550b68a8c229d34d956657b7d642929962f7e5d4fddd6396af9e5378b56"
      },
      {
        path: "espeak-ng-data/voices/!v/Storm",
        bytes: 420,
        sha256: "e817c7d1ce10de527ebc19c0835f580cb584c3ae7d36d30a4f414482602e7b89"
      },
      {
        path: "espeak-ng-data/voices/!v/Tweaky",
        bytes: 3189,
        sha256: "c34d1c1d8b7922ceb886b95ad6ab534ca048f9c47e19698ec2aae5cf0c32cdbc"
      },
      {
        path: "espeak-ng-data/voices/!v/UniRobot",
        bytes: 417,
        sha256: "23dba52c2d1cb332db6225304818d85488f110a668ddcdbfd7f0438afe37794b"
      },
      {
        path: "espeak-ng-data/voices/!v/adam",
        bytes: 75,
        sha256: "b21efbf56fd7d58470e7ce4759c6ef9f23949706b269f2d777832204658ee0dd"
      },
      {
        path: "espeak-ng-data/voices/!v/anika",
        bytes: 493,
        sha256: "228771ce84cad16a089e0b23efe2e69edf25f1ab7c0cb3a50d366ac70e82fbbd"
      },
      {
        path: "espeak-ng-data/voices/!v/anikaRobot",
        bytes: 512,
        sha256: "3ba724be6aab2fc1a084b25cdb16f469250eb9de4c6c0924a18788d0246fc32f"
      },
      {
        path: "espeak-ng-data/voices/!v/announcer",
        bytes: 300,
        sha256: "4af6a6748c720cbbaac1e3dcac17bb3bc7a4c553499ec7ee69e054db51a50de3"
      },
      {
        path: "espeak-ng-data/voices/!v/antonio",
        bytes: 381,
        sha256: "c90477080cd9aa9c384770c0ec18901d01e9851f1bc7d15526a2565a3b0c4da5"
      },
      {
        path: "espeak-ng-data/voices/!v/aunty",
        bytes: 358,
        sha256: "0aede4d1ca614f32c348f3d728eab58322ccd016e8531234fdc3dfcf00e32bf1"
      },
      {
        path: "espeak-ng-data/voices/!v/belinda",
        bytes: 340,
        sha256: "9bd791b7115820e25ada82b4911134d5116e8238b4fd4d214dfccf162576141c"
      },
      {
        path: "espeak-ng-data/voices/!v/benjamin",
        bytes: 201,
        sha256: "3fa10b0d865fc751fd9c8ed1dabac4bb9b011ea2b95064d4d25a8c719f7785d8"
      },
      {
        path: "espeak-ng-data/voices/!v/boris",
        bytes: 224,
        sha256: "f23d0a6ee2eeb7e3340506d61d422b691fb04f4e98977ea15c1e0ee5715846d5"
      },
      {
        path: "espeak-ng-data/voices/!v/caleb",
        bytes: 57,
        sha256: "bcde145ec713eae6d3451a6f25dbbdc0b6756fd44e9e092b7aef89f2cff25be8"
      },
      {
        path: "espeak-ng-data/voices/!v/croak",
        bytes: 93,
        sha256: "2906a2c6f7b7687db2f1c862164a9b80435d5afc3ba16d74619728bf8c3a8ca7"
      },
      {
        path: "espeak-ng-data/voices/!v/david",
        bytes: 112,
        sha256: "50b5cb5f61a50f5ff5299dd22e5d645446746dbc36909595f6ae47bac0bda9c3"
      },
      {
        path: "espeak-ng-data/voices/!v/ed",
        bytes: 287,
        sha256: "12ddb6355b40a2e39a3b6cef66a2bf4db15a25045769b330a9a3b344a608026d"
      },
      {
        path: "espeak-ng-data/voices/!v/edward",
        bytes: 151,
        sha256: "b7a12bcb2af280c40e4be4280b675001024619ed529262dbf3e819db53b5b310"
      },
      {
        path: "espeak-ng-data/voices/!v/edward2",
        bytes: 152,
        sha256: "59d166f7adfee4515a492993405e95432889050aaa47b6cd7eaeeb457fbca227"
      },
      {
        path: "espeak-ng-data/voices/!v/f1",
        bytes: 324,
        sha256: "7cdef453c6b0391d50a02b8f35392e6f41249cea65df1021affd68a64917b85f"
      },
      {
        path: "espeak-ng-data/voices/!v/f2",
        bytes: 357,
        sha256: "62b17f6c8f94add0310db032f5e463c13510c5ff83ef1f21e8894ccbf00b00e3"
      },
      {
        path: "espeak-ng-data/voices/!v/f3",
        bytes: 375,
        sha256: "d0342ee8ceebe3047831774634d234e90281ec73ce2aed8dd0bdd915ccf500fc"
      },
      {
        path: "espeak-ng-data/voices/!v/f4",
        bytes: 350,
        sha256: "ff9e2907a818920e3b976232c90eabaf270fff0de0b8a479af9a3633e9b7921f"
      },
      {
        path: "espeak-ng-data/voices/!v/f5",
        bytes: 432,
        sha256: "6c76406d94540d59dee16de11520c37124a1f6dfc236981e483877075f0271b3"
      },
      {
        path: "espeak-ng-data/voices/!v/fast",
        bytes: 149,
        sha256: "fa2f9c2918f351499037f6bffb25294d9b781b2785d9772a8ae3293c0c0037fe"
      },
      {
        path: "espeak-ng-data/voices/!v/grandma",
        bytes: 263,
        sha256: "e033d57ba9b098971fdb995c13830f9c709206add081c586daaec323ff69a392"
      },
      {
        path: "espeak-ng-data/voices/!v/grandpa",
        bytes: 256,
        sha256: "f25627887b95e8bccac5e6ce99cb97c6e34290ff0bf919febe64a9987138796d"
      },
      {
        path: "espeak-ng-data/voices/!v/gustave",
        bytes: 253,
        sha256: "5fa89cf8625cd460b9309748eca019ab5b325a04dccbd29f1a9b2a00caa2e848"
      },
      {
        path: "espeak-ng-data/voices/!v/ian",
        bytes: 3168,
        sha256: "c0722c7954d3e6582e3f5b3f584140675ab060ac3c6cac5dd11a74592db5550a"
      },
      {
        path: "espeak-ng-data/voices/!v/iven",
        bytes: 261,
        sha256: "10ab9de8365ff7bf5a20621d08f1a2019d4bf5521f3c6f65447c9256057406c8"
      },
      {
        path: "espeak-ng-data/voices/!v/iven2",
        bytes: 279,
        sha256: "f94830e5abe118dc4c0909630d66637ba2a7c94957279c31fd78e313374054cd"
      },
      {
        path: "espeak-ng-data/voices/!v/iven3",
        bytes: 262,
        sha256: "27ccf2d2f7bb8f1ff28c705c39cf6ff575eb2458c39a518ed33741ad9c1af252"
      },
      {
        path: "espeak-ng-data/voices/!v/iven4",
        bytes: 261,
        sha256: "11b3d46c01d4307eedcb60bd8dbcc73a40f3eb86c289176d6fd5bb418223b92f"
      },
      {
        path: "espeak-ng-data/voices/!v/john",
        bytes: 3186,
        sha256: "bfbcc1cec33ef0581fdeb4955fbcd0d824a5d4be5493d731e4a2ef7f8f3ba670"
      },
      {
        path: "espeak-ng-data/voices/!v/kaukovalta",
        bytes: 361,
        sha256: "b9f6016145835c3999bcd5872b8a53442729bd903591781ea3340746b3b4956b"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt",
        bytes: 38,
        sha256: "9abb6d05d0ca354831c570e14323dd4e821459b53166d96395875a48bacdbde2"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt2",
        bytes: 38,
        sha256: "afab662a55953532ff8d6f9c615b824ecec87f7aef6790a58c4ccbc4505a742a"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt3",
        bytes: 39,
        sha256: "f1c0cd147bd656f6c4830b3341c9694483438c43aea15c982dcc1945dbb334b9"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt4",
        bytes: 39,
        sha256: "3459c15aa8fa7d7218ac34388dfc0833c850ffc923013949308c2f643f3daad2"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt5",
        bytes: 39,
        sha256: "44397d8282454a2974078d25509caa470bceb093e484e727843a5147b4193e60"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt6",
        bytes: 39,
        sha256: "7d3930cd97ef7a0732f2e19f53f84e480f2d441d263390647b92bb0b4c645d05"
      },
      {
        path: "espeak-ng-data/voices/!v/linda",
        bytes: 350,
        sha256: "df06b4c29f5953034e7815ea7062e356917266f8fab576f76c036045525c8e28"
      },
      {
        path: "espeak-ng-data/voices/!v/m1",
        bytes: 335,
        sha256: "7f2de023bdfe18651d2d0453d2e7ff5e8ade9f094912a79247336ddc90fd7783"
      },
      {
        path: "espeak-ng-data/voices/!v/m2",
        bytes: 264,
        sha256: "6eb925eb6691621a6de66c87596c6ed879c80a04215a9a8437dffc28fcfa14dd"
      },
      {
        path: "espeak-ng-data/voices/!v/m3",
        bytes: 300,
        sha256: "7a4ac872387439814ddd65f5e1ff73017122975911df6b5dc62c5709e6fdb611"
      },
      {
        path: "espeak-ng-data/voices/!v/m4",
        bytes: 290,
        sha256: "6bef82cea3538da1246b7a2c203206e90155cbb4af86faa8ef03366c3119ceee"
      },
      {
        path: "espeak-ng-data/voices/!v/m5",
        bytes: 262,
        sha256: "08590ef7ce37630a6875d9cbe200dc473a9054b4184287808a4fd1c8e27dd02a"
      },
      {
        path: "espeak-ng-data/voices/!v/m6",
        bytes: 188,
        sha256: "fc0e01af458a96d43f55878010d3abcbbda85e846922b25361a78d27c3a9ca00"
      },
      {
        path: "espeak-ng-data/voices/!v/m7",
        bytes: 254,
        sha256: "bdfc54a3558ca98f9ca082479c5211034a824d8721db91804f9d77867db6fab3"
      },
      {
        path: "espeak-ng-data/voices/!v/m8",
        bytes: 284,
        sha256: "060130540e2fae5f8acfb19bcd4ef3dc5dc8f8d2134c502bb57af277fd4cc491"
      },
      {
        path: "espeak-ng-data/voices/!v/marcelo",
        bytes: 251,
        sha256: "3238a933a17c40c61cdd385c0e742bf54c42c008f4110d4b0353a6ae72a5d1a0"
      },
      {
        path: "espeak-ng-data/voices/!v/max",
        bytes: 225,
        sha256: "c88f70a60a19e76a6774dfbd7664be639b9aa8aa587c680834c305ffa434aaaf"
      },
      {
        path: "espeak-ng-data/voices/!v/michel",
        bytes: 404,
        sha256: "c0068ad9cb792dfb78aedbdff9c3cec68e5083736bae0c33bf19088186101087"
      },
      {
        path: "espeak-ng-data/voices/!v/miguel",
        bytes: 382,
        sha256: "9c8c2bbe9fba6d1f06eb63ee67d98d7ebb8846b2bf13847a9b359c90ba9fa8fe"
      },
      {
        path: "espeak-ng-data/voices/!v/mike2",
        bytes: 188,
        sha256: "274ebc5df252b3258e8996f1276137b2cf9d6e5006e1145a5172997284f1dba0"
      },
      {
        path: "espeak-ng-data/voices/!v/norbert",
        bytes: 3189,
        sha256: "35b9923e15caf36280542270282bd2392c6d86ef5db9a8be7be92ce2241a46cb"
      },
      {
        path: "espeak-ng-data/voices/!v/pablo",
        bytes: 3142,
        sha256: "053a85c8a6d7e7a0f6432a3158fe73fa9accf06202e5d69c273d4e5bae8bafc8"
      },
      {
        path: "espeak-ng-data/voices/!v/paul",
        bytes: 284,
        sha256: "75fb8098bea28859513de6ce033092307382d6f20455e71b051193dfc0793d5e"
      },
      {
        path: "espeak-ng-data/voices/!v/pedro",
        bytes: 352,
        sha256: "7429792ba833fa2446bec6db790068f5862b9ed099392002cd0e724ec6ab2a66"
      },
      {
        path: "espeak-ng-data/voices/!v/quincy",
        bytes: 354,
        sha256: "e9945bee7b4f3240221866f497bf2511a886ed7702d8389688a03c2ea120caf0"
      },
      {
        path: "espeak-ng-data/voices/!v/rob",
        bytes: 265,
        sha256: "fbfffcdb0afb2e3b70f886c02282feae22509d77fe6e7103daf907f7a356595d"
      },
      {
        path: "espeak-ng-data/voices/!v/robert",
        bytes: 274,
        sha256: "72604f85afe5bb52a5ce7e3427b196e1e3e426a14a64e2d93b6617e248a46417"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft",
        bytes: 451,
        sha256: "ce2820edd349f3fbc734bfe94095518f10ecbefdb304560109f37106f9f4d2fa"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft2",
        bytes: 454,
        sha256: "249a44f4069b323640e6b532ff6a9bc30dca35f5f9a5f666b647937cbc58c685"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft3",
        bytes: 455,
        sha256: "f8543efe18019c735ebad99d1cab4e06e0efd565ac269a895415dfebf342c383"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft4",
        bytes: 447,
        sha256: "d5f728e0d0a9d27f604f34e835e059590fd01411fd467c91328b573c7597bb2d"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft5",
        bytes: 445,
        sha256: "39da0efe1768e14eefe05a7019fab416795bbffb222fce23ad7f963991447f7b"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft6",
        bytes: 287,
        sha256: "46426971d76c34266580133fad2c26ab829395a71c1713e6205d9d46b0871672"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft7",
        bytes: 410,
        sha256: "e19c1045259d9cfb078c229d5d1372f7c5af971d0e2536a41b89c40ca3e23ede"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft8",
        bytes: 243,
        sha256: "389230461647836c1b66c51939c0a493e3fbc81e2b7afc01c6f88b8f9da21e2b"
      },
      {
        path: "espeak-ng-data/voices/!v/sandro",
        bytes: 530,
        sha256: "1b8c36a3ce35a27cbbabf4679df0264cd37f4c79b66aa1f4c310eb31b9c80490"
      },
      {
        path: "espeak-ng-data/voices/!v/shelby",
        bytes: 280,
        sha256: "5e96565045bcdd5b42e7ad0eab2bbd670c67cf5c9e3f2ac6b50b30580fb92be4"
      },
      {
        path: "espeak-ng-data/voices/!v/steph",
        bytes: 364,
        sha256: "78186aeddce4c449348f368046b2665375b1a492e948d739249b0c964f082861"
      },
      {
        path: "espeak-ng-data/voices/!v/steph2",
        bytes: 367,
        sha256: "ca88414b48553fed1fd409389548a94ea90cf282d6340e3cb968c8538a2ac2ec"
      },
      {
        path: "espeak-ng-data/voices/!v/steph3",
        bytes: 377,
        sha256: "a7d796211b6969ba92213f89de54b053890306af774424ee38fb02ace45e852d"
      },
      {
        path: "espeak-ng-data/voices/!v/travis",
        bytes: 383,
        sha256: "7d5a34be05778ee850d97b0491a62db7683c058d660ff2afc71c08c87360f30d"
      },
      {
        path: "espeak-ng-data/voices/!v/victor",
        bytes: 253,
        sha256: "a880a8083ac5eaadf94f71c63b51f34c1426d4bfe0a26f6761ddec5c6e9a5c76"
      },
      {
        path: "espeak-ng-data/voices/!v/whisper",
        bytes: 186,
        sha256: "1e3534c843768898cea47a3f83b2fd91720c0775b438ea5c0134676940a66e96"
      },
      {
        path: "espeak-ng-data/voices/!v/whisperf",
        bytes: 392,
        sha256: "7fea42b10114f1bfd2004181e6b0eb626997cca987893e23d24b5c616aac89d7"
      },
      {
        path: "espeak-ng-data/voices/!v/zac",
        bytes: 275,
        sha256: "edaf508b2cfbfd6088a163dcc78d5f6a26850a7d39a5a0e5128b09526f56b6db"
      },
      {
        path: "espeak-ng-data/yue_dict",
        bytes: 563571,
        sha256: "1d26afa203034698772107abfff1b53acbee30434700a4d2b75dee98951588f8"
      },
      {
        path: "lexicon-gb-en.txt",
        bytes: 6366635,
        sha256: "c4cbb37316f62210dff52718a7afcaae24f50c032cc75ab47ae67b831d1049e7"
      },
      {
        path: "lexicon-us-en.txt",
        bytes: 5956885,
        sha256: "7daaab53a181be9885b853a8582bf1838186317e5dadacbcef9c426d6fa0da14"
      },
      {
        path: "lexicon-zh.txt",
        bytes: 2119465,
        sha256: "11111d8cd695fba2ace1367a1d0a708b586e6ef5c1f9be91da5d7eef129b651c"
      },
      {
        path: "model.onnx",
        bytes: 325631784,
        sha256: "acc4adc175b9d9986106cd20060329673ad5a2e12ef3c557d2d3745b694f8b38"
      },
      {
        path: "number-zh.fst",
        bytes: 64482,
        sha256: "743f402181fcfebf76cc2f0546b71fa26476e626fbe4e460fb7b4c3a7a8bd5bd"
      },
      {
        path: "phone-zh.fst",
        bytes: 88630,
        sha256: "1ac2b6fa56b1442320c4de7db08353bab8963a2b57f365eebcdd3a2d3562f8d7"
      },
      {
        path: "tokens.txt",
        bytes: 1111,
        sha256: "931ab2df2400cd65d580a22402024c2347ced8ae9ea300e545144b1aacc48e14"
      },
      {
        path: "voices.bin",
        bytes: 53790720,
        sha256: "e64a5a581d8c2a350d848f51c3121657cd83aa07ed6109172177345874a7244c"
      }
    ],
    voices: [
      {
        id: "zf_001",
        sid: 3,
        name: "\u77E5\u590F",
        nameEn: "Zhixia",
        lang: "zh-CN",
        gender: "female",
        recommended: true
      },
      {
        id: "zf_002",
        sid: 4,
        name: "\u6E05\u79BE",
        nameEn: "Qinghe",
        lang: "zh-CN",
        gender: "female",
        recommended: false
      },
      {
        id: "zf_003",
        sid: 5,
        name: "\u6674\u5C9A",
        nameEn: "Qinglan",
        lang: "zh-CN",
        gender: "female",
        recommended: false
      },
      {
        id: "zf_004",
        sid: 6,
        name: "\u6C90\u8A00",
        nameEn: "Muyan",
        lang: "zh-CN",
        gender: "female",
        recommended: false
      },
      {
        id: "zm_009",
        sid: 58,
        name: "\u8A00\u5DDD",
        nameEn: "Yanchuan",
        lang: "zh-CN",
        gender: "male",
        recommended: true
      },
      {
        id: "zm_010",
        sid: 59,
        name: "\u8FDC\u5C71",
        nameEn: "Yuanshan",
        lang: "zh-CN",
        gender: "male",
        recommended: false
      },
      {
        id: "zm_011",
        sid: 60,
        name: "\u666F\u548C",
        nameEn: "Jinghe",
        lang: "zh-CN",
        gender: "male",
        recommended: false
      },
      {
        id: "zm_012",
        sid: 61,
        name: "\u660E\u6717",
        nameEn: "Minglang",
        lang: "zh-CN",
        gender: "male",
        recommended: false
      },
      {
        id: "af_maple",
        sid: 0,
        name: "Maple",
        nameEn: "Maple",
        lang: "en-US",
        gender: "female"
      },
      {
        id: "af_sol",
        sid: 1,
        name: "Sol",
        nameEn: "Sol",
        lang: "en-US",
        gender: "female"
      },
      {
        id: "bf_vale",
        sid: 2,
        name: "Vale",
        nameEn: "Vale",
        lang: "en-GB",
        gender: "female"
      }
    ],
    defaultVoice: "zf_001",
    source: "https://huggingface.co/hexgrad/Kokoro-82M-v1.1-zh",
    kind: "tts"
  },
  melo: {
    label: "MeloTTS",
    revision: "e58351ed7149f290",
    license: "MIT",
    bytes: 167006755,
    archive: {
      name: "vits-melo-tts-zh_en.tar.bz2",
      url: "https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-melo-tts-zh_en.tar.bz2",
      bytes: 167006755,
      sha256: "e58351ed7149f290a54534538badd4077cdbe6fddc964b24d0bee870415d1514"
    },
    archiveRoot: "vits-melo-tts-zh_en",
    files: [
      {
        path: "LICENSE",
        bytes: 1053,
        sha256: "88a50e5a02bbc2a5c2f084dc19da751aa97b1690f5fda76cd8005c8634d1ca70"
      },
      {
        path: "README.md",
        bytes: 257,
        sha256: "ae6e44dead53dfdbd5b4a77106226f3118eb910222b46cb5533a3860773fc6c7"
      },
      {
        path: "date.fst",
        bytes: 59154,
        sha256: "eb8aa079ae3cb81d8f4404992f39d61a0cb990947512b5b8d1e54d1f6980e718"
      },
      {
        path: "dict/README.md",
        bytes: 683,
        sha256: "8bcc7c2ed7dff082d9a99c09de0bfd72249bf3b5c4298a3af328da40cbd8cfd1"
      },
      {
        path: "dict/hmm_model.utf8",
        bytes: 519739,
        sha256: "f17790586ac86dd048c8adffed052c4bd2b28ed0682972c1275e59040c0589a7"
      },
      {
        path: "dict/idf.utf8",
        bytes: 5998717,
        sha256: "dbd1e03d72b2263cc8d84a4304ed77677eed9e7deaf43a1a5133bbba9733b535"
      },
      {
        path: "dict/jieba.dict.utf8",
        bytes: 5071204,
        sha256: "3043b77068e09c9904f27cad82f12b6ebe9dbdb5aeff3b25e45ab7f9c1122b55"
      },
      {
        path: "dict/pos_dict/char_state_tab.utf8",
        bytes: 327139,
        sha256: "28b7be1dd7369766a51445af4d42e9a2ba4bf374c13be5bc1ca7721e27271dbb"
      },
      {
        path: "dict/pos_dict/prob_emit.utf8",
        bytes: 1687686,
        sha256: "c33c4cb7edf3b3a5947df7209b6e9f267eae1f21335d9e2bd2521ea07105457a"
      },
      {
        path: "dict/pos_dict/prob_start.utf8",
        bytes: 4347,
        sha256: "13623ea0e9300bdb597cb2da28770b7b385d6c0098d66e516083fb01b6bd5d96"
      },
      {
        path: "dict/pos_dict/prob_trans.utf8",
        bytes: 124159,
        sha256: "f22363e2307408293d180c6f9f6b5cb75879d52f722f7764fa2d3d0ae2400236"
      },
      {
        path: "dict/stop_words.utf8",
        bytes: 8974,
        sha256: "b788b8a939d2e2fe079abd579ea98f12f9fb84370bfd0dddd81bb9381f7ab42c"
      },
      {
        path: "dict/user.dict.utf8",
        bytes: 49,
        sha256: "495bbf49270408a1234690e1e6a97328f30a482a7a72aa769e8a12e8714b0c62"
      },
      {
        path: "lexicon.txt",
        bytes: 6837671,
        sha256: "7236884b02435ac5d10cf69b4be40a61b45aa676b5300f0e412f185748fee528"
      },
      {
        path: "model.int8.onnx",
        bytes: 133,
        sha256: "0a1462eef98f05c15a6f57569bf2fb57a6b3995891bb17956187ff5e2694273e"
      },
      {
        path: "model.onnx",
        bytes: 170429550,
        sha256: "bf30582eb1b012250a35b1a4a80e7dfbcf8485e7bb9de0d95efbbeef0e4ad86d"
      },
      {
        path: "new_heteronym.fst",
        bytes: 21974,
        sha256: "ca14b2127e27baa571664e4bb791e143e7425f56a6bc29db08d74f97e6aa4e29"
      },
      {
        path: "number.fst",
        bytes: 64482,
        sha256: "743f402181fcfebf76cc2f0546b71fa26476e626fbe4e460fb7b4c3a7a8bd5bd"
      },
      {
        path: "phone.fst",
        bytes: 88630,
        sha256: "1ac2b6fa56b1442320c4de7db08353bab8963a2b57f365eebcdd3a2d3562f8d7"
      },
      {
        path: "tokens.txt",
        bytes: 655,
        sha256: "d18664a7e12bd7ea1022ddaf951e534e136815016c5a809d6b64156bffb4369d"
      }
    ],
    voices: [
      {
        id: "zh_en",
        sid: 0,
        name: "\u4E2D\u6587\u6717\u8BFB",
        nameEn: "Chinese narration",
        lang: "zh-CN",
        recommended: true
      }
    ],
    defaultVoice: "zh_en",
    source: "https://huggingface.co/myshell-ai/MeloTTS-Chinese",
    kind: "tts"
  },
  sensevoice: {
    kind: "asr",
    label: "SenseVoice Small",
    revision: "7d1efa2138a65b0b",
    license: "FunASR Model License",
    bytes: 163002883,
    archive: {
      name: "sherpa-onnx-sense-voice-zh-en-ja-ko-yue-int8-2024-07-17.tar.bz2",
      url: "https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-sense-voice-zh-en-ja-ko-yue-int8-2024-07-17.tar.bz2",
      bytes: 163002883,
      sha256: "7d1efa2138a65b0b488df37f8b89e3d91a60676e416f515b952358d83dfd347e"
    },
    archiveRoot: "sherpa-onnx-sense-voice-zh-en-ja-ko-yue-int8-2024-07-17",
    files: [
      {
        path: "LICENSE",
        bytes: 71,
        sha256: "221c6df10b0931a5629adad671ea48fb7747e034c414b6d2bfa275bc3dd4ea17"
      },
      {
        path: "README.md",
        bytes: 104,
        sha256: "763991a00edaea534ab36bf1b7cf89e61e911666dcfabbba71f91f9f7c593a63"
      },
      {
        path: "export-onnx.py",
        bytes: 5905,
        sha256: "c97f6a33f9d7135efd4d55b3e24e288c47d925f3b4f04b8b3418c2821c0a89ce"
      },
      {
        path: "model.int8.onnx",
        bytes: 239233841,
        sha256: "c71f0ce00bec95b07744e116345e33d8cbbe08cef896382cf907bf4b51a2cd51"
      },
      {
        path: "test_wavs/en.wav",
        bytes: 228908,
        sha256: "eb1eb008904465b74c304aad8342e8c7d3c6e61ffe9f66adcaca9cf0f76a93f4"
      },
      {
        path: "test_wavs/ja.wav",
        bytes: 230444,
        sha256: "460bd8dccb0d2a5f4e29c628f837be4082d13defc64c3fc21dd1b6bb0e119095"
      },
      {
        path: "test_wavs/ko.wav",
        bytes: 147500,
        sha256: "0dc797a5c81ed30fc339d91f3da718ab02854e17ffa37cb93c4c039ac5c6bb9c"
      },
      {
        path: "test_wavs/yue.wav",
        bytes: 164780,
        sha256: "0960b2db54ae202071d250e6462fbf74a3c863f0e3e7f01273e4939c996875a0"
      },
      {
        path: "test_wavs/zh.wav",
        bytes: 178988,
        sha256: "b77f1794fe374a0ba1ee1dc458bfaf9349496cbbfc32780c50ba3c5a7ad8e373"
      },
      {
        path: "tokens.txt",
        bytes: 315894,
        sha256: "f449eb28dc567533d7fa59be34e2abca8784f771850c78a47fb731a31429a1dc"
      }
    ],
    languages: [
      "auto",
      "zh",
      "en",
      "ja",
      "ko",
      "yue"
    ],
    sample: "test_wavs/zh.wav",
    source: "https://huggingface.co/FunAudioLLM/SenseVoiceSmall"
  }
};

// src/original/runtime/speech-runtime.py
var speech_runtime_default = `"""Qiaomu Audio's device-local speech worker (synthesis and recognition).
No third-party source is bundled; adapted from Qiaomu Reader's TTS worker.

Fixed upstream packages/weights are installed separately in user application
data. Only authenticated loopback requests reach these model adapters.
"""
import contextlib
import hashlib
import http.server
import json
import os
from pathlib import Path
import secrets
import shutil
import sys
import tarfile
import tempfile
import threading
import time
import urllib.error
import urllib.request
import uuid


def emit(data):
    print("QAU_RT " + json.dumps(data, ensure_ascii=False), flush=True)


def atomic_json(path, value):
    path = Path(path)
    temp = path.with_name(path.name + "." + uuid.uuid4().hex + ".tmp")
    temp.write_text(json.dumps(value, ensure_ascii=False), encoding="utf-8")
    os.chmod(temp, 0o600)
    os.replace(temp, path)


def within(root, name):
    root = Path(root).resolve()
    path = (root / name).resolve()
    if path == root or root not in path.parents:
        raise ValueError("path")
    return path


def file_matches(path, item):
    if not path.is_file() or path.stat().st_size != item["bytes"]:
        return False
    if item.get("sha256"):
        h = hashlib.sha256()
        with path.open("rb") as f:
            for chunk in iter(lambda: f.read(1024 * 1024), b""):
                h.update(chunk)
        return h.hexdigest() == item["sha256"]
    return True


def download_models(config):
    """Pinned HTTPS resources, bounded retries, .part resume, verified commit."""
    root = Path(config["modelDir"])
    root.mkdir(parents=True, exist_ok=True)
    total = sum(x["bytes"] for x in config["files"])
    completed = 0
    for item in config["files"]:
        dest = within(root, item["path"])
        dest.parent.mkdir(parents=True, exist_ok=True)
        if file_matches(dest, item):
            completed += item["bytes"]
            emit({"phase": "download", "bytes": completed, "total": total})
            continue
        part = dest.with_name(dest.name + ".part")
        url = item.get("url") or "https://huggingface.co/{repo}/resolve/{revision}/{remote}".format(**item)
        for attempt in range(3):
            offset = part.stat().st_size if part.exists() else 0
            if offset > item["bytes"]:
                part.unlink()
                offset = 0
            try:
                if offset < item["bytes"]:
                    headers = {"User-Agent": "QiaomuAudio/1.0 local-model-install"}
                    if offset:
                        headers["Range"] = "bytes=" + str(offset) + "-"
                    request = urllib.request.Request(url, headers=headers)
                    with urllib.request.urlopen(request, timeout=60) as response:
                        if response.status != 206:
                            offset = 0
                        else:
                            if not response.headers.get("Content-Range", "").startswith("bytes " + str(offset) + "-"):
                                raise ValueError("range")
                        with part.open("ab" if offset else "wb") as output:
                            last = 0
                            while True:
                                data = response.read(1024 * 1024)
                                if not data:
                                    break
                                offset += len(data)
                                if offset > item["bytes"]:
                                    raise ValueError("size")
                                output.write(data)
                                if time.monotonic() - last > 0.4:
                                    emit({"phase": "download", "bytes": completed + offset, "total": total})
                                    last = time.monotonic()
                if not file_matches(part, item):
                    part.unlink(missing_ok=True)
                    raise ValueError("checksum")
                os.replace(part, dest)
                completed += item["bytes"]
                emit({"phase": "download", "bytes": completed, "total": total})
                break
            except Exception:
                if attempt == 2:
                    raise
                time.sleep(1 + attempt)
    emit({"phase": "downloaded"})


def unpack_model(config, archive):
    """Only manifest-listed regular files; reject links, escapes and bombs."""
    root = Path(config["modelDir"])
    expected = {x["path"]: x for x in config["files"]}
    seen = set()
    with tarfile.open(archive) as tar:
        for member in tar:
            parts = Path(member.name).parts
            if not parts or parts[0] != config["archiveRoot"] or ".." in parts or Path(member.name).is_absolute():
                raise ValueError("archive")
            if member.isdir():
                continue
            name = str(Path(*parts[1:]))
            item = expected.get(name)
            if not member.isfile() or member.issym() or member.islnk() or not item or name in seen or member.size != item["bytes"]:
                raise ValueError("archive")
            seen.add(name)
            dest = within(root, name)
            dest.parent.mkdir(parents=True, exist_ok=True)
            if file_matches(dest, item):
                continue
            part = dest.with_name(dest.name + ".extractpart")
            try:
                with tar.extractfile(member) as src, part.open("wb") as output:
                    shutil.copyfileobj(src, output, 1024 * 1024)
                if not file_matches(part, item):
                    raise ValueError("checksum")
                os.replace(part, dest)
            finally:
                part.unlink(missing_ok=True)
    if seen != set(expected):
        raise ValueError("archive")


def prepare(config):
    """Download model data only; runtime dependencies are prepared externally."""
    root = Path(config["modelDir"])
    root.mkdir(parents=True, exist_ok=True)
    if not all(file_matches(within(root, f["path"]), f) for f in config["files"]):
        item = config["archive"]
        download_models({"modelDir": config["cacheDir"], "files": [dict(item, path=item["name"])]})
        emit({"phase": "extract"})
        unpack_model(config, Path(config["cacheDir"]) / item["name"])
    emit({"phase": "installed"})


def load_engine(config):
    import sherpa_onnx as sherpa
    root = Path(config["modelDir"])
    if config.get("kind") == "asr":
        if config["id"] != "sensevoice":
            raise ValueError("model")
        recognizer = sherpa.OfflineRecognizer.from_sense_voice(
            model=str(root / "model.int8.onnx"), tokens=str(root / "tokens.txt"),
            num_threads=min(4, os.cpu_count() or 1), use_itn=True, language="auto", provider="cpu")
        return recognizer, "cpu"
    if config["id"] == "kokoro":
        model = sherpa.OfflineTtsModelConfig(kokoro=sherpa.OfflineTtsKokoroModelConfig(
            model=str(root / "model.onnx"), voices=str(root / "voices.bin"),
            tokens=str(root / "tokens.txt"), data_dir=str(root / "espeak-ng-data"),
            lexicon=",".join(str(root / x) for x in ["lexicon-us-en.txt", "lexicon-zh.txt"])),
            num_threads=min(4, os.cpu_count() or 1), provider="cpu")
        rules = ["date-zh.fst", "number-zh.fst"]
    elif config["id"] == "melo":
        model = sherpa.OfflineTtsModelConfig(vits=sherpa.OfflineTtsVitsModelConfig(
            model=str(root / "model.onnx"), tokens=str(root / "tokens.txt"),
            lexicon=str(root / "lexicon.txt")), num_threads=min(4, os.cpu_count() or 1), provider="cpu")
        rules = ["date.fst", "number.fst"]
    else:
        raise ValueError("model")
    cfg = sherpa.OfflineTtsConfig(model=model, rule_fsts=",".join(str(root / x) for x in rules), max_num_sentences=1)
    if not cfg.validate():
        raise ValueError("model")
    return sherpa.OfflineTts(cfg), "cpu"


def synthesize(engine, config, voice, text, output, is_cancelled=lambda: False):
    import soundfile as sf
    import numpy as np
    info = next((v for v in config["voices"] if v["id"] == voice), None)
    if info is None:
        raise ValueError("voice")
    # The official callback contract is 1 to continue, 0 to stop.
    audio = engine.generate(text=text, sid=info["sid"], speed=1.0,
                            callback=lambda *_: 0 if is_cancelled() else 1)
    if is_cancelled():
        raise ValueError("cancelled")
    samples, rate = np.asarray(audio.samples), audio.sample_rate
    if rate not in (22050, 24000, 44100, 48000) or samples.size == 0 or not np.isfinite(samples).all() or np.abs(samples).max() < .001 or len(samples) / rate > 300:
        raise ValueError("audio")
    sf.write(output, samples, rate, subtype="PCM_16")
    return Path(output).read_bytes()


LANGUAGES = {"auto", "zh", "en", "ja", "ko", "yue"}


def recognize(engine, wav_bytes, is_cancelled=lambda: False):
    """16-bit or float WAV in, plain text out. SenseVoice tags are dropped."""
    import io
    import re
    import numpy as np
    import soundfile as sf
    samples, rate = sf.read(io.BytesIO(wav_bytes), dtype="float32", always_2d=False)
    if getattr(samples, "ndim", 1) > 1:
        samples = samples.mean(axis=1)
    if rate < 8000 or rate > 48000 or samples.size == 0 or samples.size / rate > 600 or not np.isfinite(samples).all():
        raise ValueError("audio")
    if is_cancelled():
        raise ValueError("cancelled")
    stream = engine.create_stream()
    stream.accept_waveform(rate, samples)
    engine.decode_stream(stream)
    return re.sub(r"<\\|[^|>]*\\|>", "", stream.result.text).strip()


def serve(config):
    """One shared worker per model/user. Sessions cancel only their own jobs."""
    token = secrets.token_urlsafe(32)
    state = {"engine": None, "device": "", "active": 0, "last": time.monotonic()}
    generation = threading.Lock()
    state_lock = threading.Lock()
    cancelled = {}
    jobs = set()
    output_dir = Path(config["audioDir"])
    output_dir.mkdir(parents=True, exist_ok=True)
    # Text emitted by upstream progress/diagnostics must not enter persistent logs.
    quiet = open(os.devnull, "w")

    class Handler(http.server.BaseHTTPRequestHandler):
        def log_message(self, *_args):
            pass

        def send(self, code, data, content_type="application/json"):
            body = json.dumps(data).encode() if content_type == "application/json" else data
            self.send_response(code)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            try:
                self.wfile.write(body)
            except (BrokenPipeError, ConnectionResetError):
                pass

        def allowed(self):
            return not self.headers.get("Origin") and secrets.compare_digest(self.headers.get("Authorization", ""), "Bearer " + token)

        def do_GET(self):
            if not self.allowed():
                self.send(403, {"error": "auth"})
            elif self.path == "/status":
                state["last"] = time.monotonic()
                self.send(200, {"version": config["version"], "model": config["id"], "loaded": state["engine"] is not None, "device": state["device"]})
            else:
                self.send(404, {"error": "route"})

        def do_POST(self):
            if not self.allowed():
                self.send(403, {"error": "auth"})
                return
            try:
                length = int(self.headers.get("Content-Length", "0"))
                if self.path == "/transcribe":
                    if config.get("kind") != "asr" or length <= 44 or length > 64 * 1024 * 1024:
                        raise ValueError("request")
                    request = {"job": self.headers.get("X-Job", ""), "audio": self.rfile.read(length)}
                else:
                    if length <= 0 or length > 32 * 1024:
                        raise ValueError("request")
                    request = json.loads(self.rfile.read(length))
                if self.path == "/cancel":
                    with state_lock:
                        job = request.get("job")
                        if isinstance(job, str) and len(job) <= 80:
                            # The cancellation may reach us before the speech request.
                            now = time.monotonic()
                            for old in [x for x, t in cancelled.items() if now - t > 600]:
                                del cancelled[old]
                            if len(cancelled) < 256:
                                cancelled[job] = now
                    self.send(200, {"cancelled": True})
                    return
                if self.path not in ("/speech", "/transcribe") or (self.path == "/speech") != (config.get("kind") != "asr"):
                    self.send(404, {"error": "route"})
                    return
                text, job = request.get("text"), request.get("job")
                if self.path == "/speech" and (not isinstance(text, str) or not text.strip() or len(text) > 2000):
                    raise ValueError("request")
                if not isinstance(job, str) or not job or len(job) > 80:
                    raise ValueError("request")
                with state_lock:
                    if job in jobs:
                        raise ValueError("request")
                    jobs.add(job)
                    state["active"] += 1
                try:
                    while not generation.acquire(timeout=0.1):
                        if job in cancelled:
                            self.send(409, {"error": "cancelled"})
                            return
                    try:
                        if job in cancelled:
                            self.send(409, {"error": "cancelled"})
                            return
                        with contextlib.redirect_stdout(quiet), contextlib.redirect_stderr(quiet):
                            if state["engine"] is None:
                                state["engine"], state["device"] = load_engine(config)
                            if self.path == "/transcribe":
                                result = recognize(state["engine"], request["audio"], lambda: job in cancelled)
                        if self.path == "/transcribe":
                            self.send(409, {"error": "cancelled"}) if job in cancelled else self.send(200, {"text": result})
                            return
                        with contextlib.redirect_stdout(quiet), contextlib.redirect_stderr(quiet):
                            with tempfile.TemporaryDirectory(prefix="speech-", dir=output_dir) as directory:
                                data = synthesize(state["engine"], config, request.get("voice"), text, Path(directory) / "audio.wav", lambda: job in cancelled)
                        self.send(409, {"error": "cancelled"}) if job in cancelled else self.send(200, data, "audio/wav")
                    finally:
                        generation.release()
                finally:
                    with state_lock:
                        cancelled.pop(job, None)
                        jobs.discard(job)
                        state["active"] -= 1
                        state["last"] = time.monotonic()
            except Exception as error:
                code = str(error) if isinstance(error, ValueError) and str(error) in {"voice", "audio", "request", "path", "cancelled"} else "inference"
                # Class name only, never reading text, raw paths or a traceback.
                self.send(409 if code == "cancelled" else 500, {"error": code, "kind": type(error).__name__})

    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), Handler)
    endpoint = Path(config["endpoint"])
    atomic_json(endpoint, {"pid": os.getpid(), "port": server.server_port, "token": token, "version": config["version"], "model": config["id"]})
    emit({"phase": "server", "port": server.server_port})

    def idle_exit():
        while True:
            time.sleep(5)
            if not state["active"] and time.monotonic() - state["last"] > 120:
                server.shutdown()
                return
    threading.Thread(target=idle_exit, daemon=True).start()
    try:
        server.serve_forever(poll_interval=0.2)
    finally:
        server.server_close()
        try:
            if json.loads(endpoint.read_text()).get("token") == token:
                endpoint.unlink()
        except (OSError, ValueError):
            pass
        quiet.close()


def main():
    operation, filename = sys.argv[1:]
    config = json.loads(Path(filename).read_text(encoding="utf-8"))
    if operation == "download":
        download_models(config)
    elif operation == "prepare":
        prepare(config)
    elif operation == "serve":
        serve(config)
    else:
        raise ValueError("operation")


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        emit({"error": type(error).__name__})
        sys.exit(1)
`;

// src/original/runtime/registry.js
var registry = { models };
var LOCAL_MODELS = Object.entries(registry.models).filter(([, value]) => value.kind !== "asr").map(([id, value]) => ({ id, ...value }));
var ASR_MODELS = Object.entries(registry.models).filter(([, value]) => value.kind === "asr").map(([id, value]) => ({ id, ...value }));
var LOCAL_DEFAULT_VOICE = registry.models.kokoro.defaultVoice;
function localVoiceChoices(model, chinese = true) {
  return (registry.models[model]?.voices || []).map((v) => {
    const language = !chinese ? v.lang : !v.lang.startsWith("zh") ? "\u82F1\u6587" : v.gender === "male" ? "\u4E2D\u6587\u7537\u58F0" : v.gender === "female" ? "\u4E2D\u6587\u5973\u58F0" : "";
    return {
      id: v.id,
      label: [
        chinese ? v.name : v.nameEn,
        language,
        v.recommended ? chinese ? "\u63A8\u8350" : "Recommended" : ""
      ].filter(Boolean).join(" \xB7 "),
      sourceName: `${registry.models[model].label} \xB7 ${v.id}`,
      recommended: !!v.recommended
    };
  });
}

// src/original/runtime/local.js
var require3 = createRequire2(import.meta.url);
var Platform2 = { isDesktop: true, isDesktopApp: true, isMacOS: process.platform === "darwin" };
var registry2 = { models };
var SAMPLE = "\u4F60\u597D\uFF0C\u8FD9\u662F\u4E54\u6728\u8BED\u97F3\u7684\u672C\u5730\u6717\u8BFB\u6D4B\u8BD5\u3002";
var aborted2 = () => Object.assign(new Error("Aborted"), { name: "AbortError" });
var delay = (ms) => new Promise((resolve) => globalThis.setTimeout(resolve, ms));
function createLocalTtsManager(options = {}) {
  if (!Platform2.isDesktop) throw ttsError("localPlatform");
  const modules = {
    fs: require3("node:fs/promises"),
    path: require3("node:path"),
    os: require3("node:os"),
    cp: require3("node:child_process"),
    crypto: require3("node:crypto"),
    http: require3("node:http")
  };
  return new LocalTtsManager(modules, options);
}
var LocalTtsManager = class {
  constructor(modules, options) {
    Object.assign(this, modules);
    this.options = options;
    this.listeners = /* @__PURE__ */ new Set();
    this.states = /* @__PURE__ */ new Map();
    this.operations = /* @__PURE__ */ new Map();
    const home = this.os.homedir(), env = process.env, join = this.path.join;
    this.root = options.root || join(process.platform === "darwin" ? join(home, "Library", "Application Support") : process.platform === "win32" ? env.LOCALAPPDATA || join(home, "AppData", "Local") : env.XDG_DATA_HOME || join(home, ".local", "share"), "qiaomu-audio", "speech");
    this.shared = options.sharedRoots || [join(this.path.dirname(this.path.dirname(this.root)), "qiaomu-reader", "tts")];
    this.cache = options.cacheRoot || join(process.platform === "darwin" ? join(home, "Library", "Caches") : process.platform === "win32" ? env.LOCALAPPDATA || join(home, "AppData", "Local") : env.XDG_CACHE_HOME || join(home, ".cache"), "qiaomu-audio", "speech-cache");
    this.version = `2-${this.crypto.createHash("sha256").update(speech_runtime_default + JSON.stringify(registry2)).digest("hex").slice(0, 16)}`;
  }
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }
  emit(id, state) {
    this.states.set(id, state);
    for (const listener of this.listeners) listener(id, state);
  }
  snapshot(id) {
    return this.states.get(id) || { phase: "unknown" };
  }
  async safeRoot(path5) {
    let ancestor = this.path.resolve(path5);
    const missing = [];
    for (; ; ) {
      try {
        ancestor = await this.fs.realpath(ancestor);
        break;
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        missing.unshift(this.path.basename(ancestor));
        const parent = this.path.dirname(ancestor);
        if (parent === ancestor) throw error;
        ancestor = parent;
      }
    }
    const real = this.path.join(ancestor, ...missing);
    for (const vault of this.options.vaultPaths || []) {
      const actual = await this.fs.realpath(vault);
      const relative = this.path.relative(actual, real);
      if (!relative || !relative.startsWith(".." + this.path.sep) && relative !== ".." && !this.path.isAbsolute(relative)) throw ttsError("localPath");
    }
    await this.fs.mkdir(real, { recursive: true, mode: 448 });
    return real;
  }
  async initialize() {
    if (!this.initializing) this.initializing = (async () => {
      this.root = await this.safeRoot(this.root);
      this.cache = await this.safeRoot(this.cache);
      this.script = this.path.join(this.root, `worker-${this.version}.py`);
      await this.fs.writeFile(this.script, speech_runtime_default, { mode: 384 });
    })();
    return this.initializing;
  }
  paths(id) {
    const model = registry2.models[id];
    if (!model) throw ttsError("localModel");
    const join = this.path.join, revision = model.revision;
    const venvDir = join(this.root, "runtimes", id, revision);
    return {
      ...model,
      id,
      version: this.version,
      kind: model.kind || "tts",
      modelDir: join(this.root, "models", id, revision),
      venvDir,
      python: join(venvDir, process.platform === "win32" ? "Scripts" : "bin", process.platform === "win32" ? "python.exe" : "python"),
      audioDir: join(this.cache, "audio"),
      cacheDir: this.cache,
      endpoint: join(this.root, `endpoint-${id}-${this.version}.json`),
      ready: join(this.root, `ready-${id}-${this.version}.json`),
      configFile: join(this.root, `config-${id}-${this.version}.json`)
    };
  }
  env(offline = false) {
    const env = { ...process.env };
    for (const key of ["PYTHONPATH", "PYTHONHOME", "VIRTUAL_ENV", "CONDA_PREFIX"]) delete env[key];
    return { ...env, PYTHONNOUSERSITE: "1", PYTHONUNBUFFERED: "1", ...offline ? { PIP_NO_INDEX: "1" } : {} };
  }
  async readJson(path5) {
    try {
      return JSON.parse(await this.fs.readFile(path5, "utf8"));
    } catch {
      return null;
    }
  }
  async atomicJson(path5, value) {
    const temp = `${path5}.${this.crypto.randomUUID()}.tmp`;
    await this.fs.writeFile(temp, JSON.stringify(value), { mode: 384 });
    await this.fs.rename(temp, path5);
  }
  async modelComplete(dir, files) {
    try {
      for (const file of files) if ((await this.fs.stat(this.path.join(dir, file.path))).size !== file.bytes) return false;
      return true;
    } catch {
      return false;
    }
  }
  // Prefer this plugin's own copy; otherwise a complete copy of the same pinned revision from Qiaomu Reader.
  async resolveModelDir(cfg) {
    if (await this.modelComplete(cfg.modelDir, cfg.files)) return cfg.modelDir;
    for (const root of this.shared) {
      const dir = this.path.join(root, "models", cfg.id, cfg.revision);
      if (await this.modelComplete(dir, cfg.files)) return dir;
    }
    return cfg.modelDir;
  }
  async config(id) {
    const cfg = this.paths(id);
    cfg.modelDir = await this.resolveModelDir(cfg);
    return cfg;
  }
  async status(id) {
    await this.initialize();
    if (this.operations.has(id)) return this.snapshot(id);
    const cfg = await this.config(id), marker = await this.readJson(cfg.ready);
    try {
      await this.fs.access(cfg.python);
    } catch {
      const state2 = { phase: "runtimeMissing" };
      this.emit(id, state2);
      return state2;
    }
    let ready = marker?.version === this.version;
    if (ready) {
      try {
        await this.fs.access(cfg.python);
        ready = await this.modelComplete(cfg.modelDir, cfg.files);
      } catch {
        ready = false;
      }
    }
    const state = { phase: ready ? "ready" : "missing", device: marker?.device };
    this.emit(id, state);
    return state;
  }
  async voices(model, chinese = true) {
    return localVoiceChoices(model, chinese);
  }
  async lock(name, action) {
    const file = this.path.join(this.root, `${name}.lock`), token = this.crypto.randomUUID();
    let handle;
    try {
      handle = await this.fs.open(file, "wx", 384);
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
      const previous = await this.readJson(file);
      let dead = false;
      if (Number.isSafeInteger(previous?.pid) && previous.pid > 0) {
        try {
          process.kill(previous.pid, 0);
        } catch (e) {
          dead = e.code === "ESRCH";
        }
      }
      if (!dead) throw ttsError("localBusy");
      await this.fs.unlink(file);
      handle = await this.fs.open(file, "wx", 384);
    }
    await handle.writeFile(JSON.stringify({ pid: process.pid, token }));
    await handle.close();
    try {
      return await action();
    } finally {
      if ((await this.readJson(file))?.token === token) await this.fs.unlink(file);
    }
  }
  run(command, args, { signal, id, capture = false, offline = false } = {}) {
    checkTtsSignal(signal);
    return new Promise((resolve, reject) => {
      const child = this.cp.spawn(command, args, {
        cwd: this.root,
        env: this.env(offline),
        windowsHide: true,
        detached: process.platform !== "win32",
        stdio: ["ignore", "pipe", "pipe"]
      });
      let output = "", pending = "", settled = false, cancelling = false, killTimer;
      const finish = (error, value) => {
        if (settled) return;
        settled = true;
        globalThis.clearTimeout(killTimer);
        signal?.removeEventListener("abort", cancel);
        error ? reject(error) : resolve(value);
      };
      const cancel = () => {
        if (cancelling || settled) return;
        cancelling = true;
        if (id) this.emit(id, { phase: "cancelling" });
        if (process.platform === "win32") this.cp.spawn("taskkill.exe", ["/PID", String(child.pid), "/T", "/F"], { windowsHide: true, stdio: "ignore" });
        else {
          try {
            process.kill(-child.pid, "SIGTERM");
          } catch {
            child.kill();
          }
        }
        killTimer = globalThis.setTimeout(() => {
          if (process.platform !== "win32" && child.exitCode === null) {
            try {
              process.kill(-child.pid, "SIGKILL");
            } catch {
              child.kill("SIGKILL");
            }
          }
        }, 2e3);
      };
      child.stdout.on("data", (chunk) => {
        if (capture) output = (output + chunk).slice(-16384);
        pending = (pending + chunk).slice(-65536);
        const lines = pending.split("\n");
        pending = lines.pop();
        for (const line of lines) if (line.startsWith("QAU_RT ") && id) {
          try {
            const value = JSON.parse(line.slice(8));
            if (value.phase) this.emit(id, value);
          } catch {
          }
        }
      });
      child.stderr.on("data", () => {
      });
      child.on("error", () => finish(ttsError("localEnvironment")));
      child.on("close", (code) => finish(cancelling ? aborted2() : code === 0 ? null : ttsError("localInstall"), output.trim()));
      signal?.addEventListener("abort", cancel, { once: true });
      if (signal?.aborted) cancel();
    });
  }
  install(id, options = {}) {
    if (this.operations.has(id)) return this.operations.get(id).promise;
    const abort = new AbortController();
    const cancel = () => abort.abort();
    options.signal?.addEventListener("abort", cancel, { once: true });
    if (options.signal?.aborted) abort.abort();
    const promise = this.installModel(id, abort.signal).catch((error) => {
      this.emit(id, { phase: error.name === "AbortError" ? "cancelled" : "error", error });
      throw error;
    }).finally(() => {
      this.operations.delete(id);
      options.signal?.removeEventListener("abort", cancel);
    });
    this.operations.set(id, { promise, abort });
    return promise;
  }
  cancelInstall(id) {
    this.operations.get(id)?.abort.abort();
  }
  async installModel(id, signal) {
    await this.initialize();
    const cfg = await this.config(id);
    this.emit(id, { phase: "runtime" });
    return this.lock(`install-${id}`, async () => {
      try {
        await this.fs.access(cfg.python);
      } catch {
        throw ttsError("localEnvironment");
      }
      await this.atomicJson(cfg.configFile, cfg);
      await this.run(cfg.python, [this.script, "prepare", cfg.configFile], { signal, id });
      checkTtsSignal(signal);
      this.emit(id, { phase: "verify" });
      if (cfg.kind === "asr") {
        const sample = await this.fs.readFile(this.path.join(cfg.modelDir, cfg.sample));
        if (!(await this.recognition(cfg, sample, signal)).trim()) throw ttsError("localInference");
      } else await this.speech(cfg, cfg.defaultVoice, SAMPLE, signal);
      const endpoint = await this.endpoint(cfg), result = await this.httpRequest(endpoint, "/status");
      await this.atomicJson(cfg.ready, { version: this.version, device: result.device, verifiedAt: Date.now() });
      const state = { phase: "ready", device: result.device };
      this.emit(id, state);
      return state;
    });
  }
  async endpoint(cfg) {
    const existing = await this.readJson(cfg.endpoint);
    if (existing?.version === this.version && existing.model === cfg.id && Number.isInteger(existing.port) && existing.port > 0 && existing.port <= 65535 && typeof existing.token === "string" && existing.token.length >= 32) {
      try {
        const status = await this.httpRequest(existing, "/status", void 0, void 0, 2e3);
        if (status.version === this.version && status.model === cfg.id) return existing;
      } catch {
      }
    }
    try {
      await this.lock(`start-${cfg.id}-${this.version}`, async () => {
        const child = this.cp.spawn(cfg.python, [this.script, "serve", cfg.configFile], {
          cwd: this.root,
          env: this.env(true),
          detached: true,
          windowsHide: true,
          stdio: "ignore"
        });
        child.on("error", () => {
        });
        child.unref();
        for (let i = 0; i < 100; i++) {
          await delay(100);
          const value = await this.readJson(cfg.endpoint);
          if (value?.pid === child.pid && value.version === this.version) return;
        }
        throw ttsError("localEnvironment");
      });
    } catch (error) {
      if (error.code !== "localBusy") throw error;
      for (let i = 0; i < 100; i++) {
        await delay(100);
        const e = await this.readJson(cfg.endpoint);
        if (e?.version === this.version) {
          try {
            await this.httpRequest(e, "/status", void 0, void 0, 2e3);
            return e;
          } catch {
          }
        }
      }
      throw error;
    }
    const endpoint = await this.readJson(cfg.endpoint);
    if (!endpoint) throw ttsError("localEnvironment");
    return endpoint;
  }
  httpRequest(endpoint, route, data, signal, timeout = 9e4, extraHeaders = {}) {
    checkTtsSignal(signal);
    return new Promise((resolve, reject) => {
      const raw = data instanceof Uint8Array;
      const body = data === void 0 ? null : raw ? Buffer.from(data.buffer, data.byteOffset, data.byteLength) : Buffer.from(JSON.stringify(data));
      const req = this.http.request({
        host: "127.0.0.1",
        port: endpoint.port,
        path: route,
        method: body ? "POST" : "GET",
        headers: { Authorization: `Bearer ${endpoint.token}`, ...extraHeaders, ...body ? { "Content-Type": raw ? "audio/wav" : "application/json", "Content-Length": body.length } : {} }
      }, (response) => {
        let size = 0;
        const chunks = [];
        response.on("data", (bytes) => {
          size += bytes.length;
          if (size > 32 * 1024 * 1024) req.destroy(ttsError("response"));
          else chunks.push(bytes);
        });
        response.on("error", reject);
        response.on("end", () => {
          const bytes = Buffer.concat(chunks);
          if (response.statusCode !== 200) {
            reject(ttsError("localInference"));
            return;
          }
          if (route === "/speech") resolve(bytes);
          else {
            try {
              resolve(JSON.parse(bytes.toString()));
            } catch {
              reject(ttsError("response"));
            }
          }
        });
      });
      const cancel = () => req.destroy(aborted2());
      req.on("error", reject);
      req.setTimeout(timeout, () => req.destroy(ttsError("timeout")));
      signal?.addEventListener("abort", cancel, { once: true });
      req.on("close", () => signal?.removeEventListener("abort", cancel));
      req.end(body);
    });
  }
  async speech(cfg, voice, text, signal) {
    checkTtsSignal(signal);
    const endpoint = await this.endpoint(cfg);
    checkTtsSignal(signal);
    const job = this.crypto.randomUUID();
    const cancel = () => {
      void this.httpRequest(endpoint, "/cancel", { job }, void 0, 2e3).catch(() => {
      });
    };
    signal?.addEventListener("abort", cancel, { once: true });
    try {
      const bytes = await this.httpRequest(endpoint, "/speech", { job, voice, text }, signal);
      if (bytes.length < 44 || bytes.toString("ascii", 0, 4) !== "RIFF" || bytes.toString("ascii", 8, 12) !== "WAVE") throw ttsError("response");
      return { bytes: new Uint8Array(bytes), mime: "audio/wav" };
    } catch (error) {
      cancel();
      throw error;
    } finally {
      signal?.removeEventListener("abort", cancel);
    }
  }
  async synthesize(profile, text, signal) {
    if ((await this.status(profile.model)).phase !== "ready") throw ttsError("localMissing");
    const cfg = await this.config(profile.model);
    return this.speech(cfg, profile.voice || cfg.defaultVoice, text, signal);
  }
  async recognition(cfg, wav, signal) {
    checkTtsSignal(signal);
    const endpoint = await this.endpoint(cfg);
    checkTtsSignal(signal);
    const job = this.crypto.randomUUID();
    const cancel = () => {
      void this.httpRequest(endpoint, "/cancel", { job }, void 0, 2e3).catch(() => {
      });
    };
    signal?.addEventListener("abort", cancel, { once: true });
    try {
      const result = await this.httpRequest(endpoint, "/transcribe", wav instanceof Uint8Array ? wav : new Uint8Array(wav), signal, 12e4, { "X-Job": job });
      return typeof result?.text === "string" ? result.text : "";
    } catch (error) {
      cancel();
      throw error;
    } finally {
      signal?.removeEventListener("abort", cancel);
    }
  }
  // 16 kHz mono WAV bytes in, recognised text out. Audio never leaves this computer.
  async transcribe(model, wav, signal) {
    if ((await this.status(model)).phase !== "ready") throw ttsError("localMissing");
    return this.recognition(await this.config(model), wav, signal);
  }
  dispose() {
    for (const op of this.operations.values()) op.abort.abort();
    this.listeners.clear();
  }
};

// src/platform-credentials.js
import { spawn } from "node:child_process";
var WINDOWS_SCRIPT = String.raw`
$ErrorActionPreference='Stop'
try {
 Add-Type -AssemblyName System.Security
 $request=[Console]::In.ReadToEnd() | ConvertFrom-Json
 if ($request.id -notmatch '^qiaomu-audio-dsh-(tts|asr)-[a-z0-9-]{1,100}$') {throw 'Invalid credential identifier'}
 $directory=Join-Path ([Environment]::GetFolderPath('ApplicationData')) 'Qiaomu/DeepSeekHarness/Audio/Credentials'
 $path=Join-Path $directory ($request.id+'.bin')
 if ($request.operation -eq 'get') {
  if (Test-Path -LiteralPath $path) {
   $encrypted=[IO.File]::ReadAllBytes($path)
   $plain=[Security.Cryptography.ProtectedData]::Unprotect($encrypted,$null,[Security.Cryptography.DataProtectionScope]::CurrentUser)
   [Console]::Out.Write([Convert]::ToBase64String($plain))
  }
 } elseif ($request.operation -eq 'set') {
  if ($request.value -eq '') {if(Test-Path -LiteralPath $path){Remove-Item -LiteralPath $path -Force}} else {
   [IO.Directory]::CreateDirectory($directory) | Out-Null
   $plain=[Text.Encoding]::UTF8.GetBytes($request.value)
   $encrypted=[Security.Cryptography.ProtectedData]::Protect($plain,$null,[Security.Cryptography.DataProtectionScope]::CurrentUser)
   $temp=$path+'.'+[Guid]::NewGuid().ToString('N')+'.tmp'
   [IO.File]::WriteAllBytes($temp,$encrypted)
   Move-Item -LiteralPath $temp -Destination $path -Force
  }
 } else {throw 'Invalid operation'}
 exit 0
} catch {exit 1}
`;
function executeCredentialCommand(command, args, input = "") {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["pipe", "pipe", "pipe"], windowsHide: true });
    let output = "", settled = false;
    const fail = (message) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      child.kill();
      reject(Error(message));
    };
    const timer = setTimeout(() => fail("Credential operation timed out"), 15e3);
    child.stdout.on("data", (chunk) => {
      output += chunk;
      if (output.length > 65536) fail("Credential response exceeds limit");
    });
    child.stderr.resume();
    child.once("error", () => fail("System credential storage is unavailable"));
    child.once("close", (code) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({ code, output });
    });
    child.stdin.on("error", () => {
    });
    child.stdin.end(input);
  });
}
function platformCredentials(platform, execute = executeCredentialCommand) {
  const service = "ai.qiaomu.audio.dsh";
  if (platform === "win32") return {
    async get(id) {
      const r = await execute("powershell.exe", ["-NoLogo", "-NoProfile", "-NonInteractive", "-EncodedCommand", Buffer.from(WINDOWS_SCRIPT, "utf16le").toString("base64")], JSON.stringify({ operation: "get", id }));
      if (r.code !== 0) throw Error("Could not read Windows protected credential");
      return Buffer.from(r.output.trim(), "base64").toString("utf8");
    },
    async set(id, value) {
      const r = await execute("powershell.exe", ["-NoLogo", "-NoProfile", "-NonInteractive", "-EncodedCommand", Buffer.from(WINDOWS_SCRIPT, "utf16le").toString("base64")], JSON.stringify({ operation: "set", id, value }));
      if (r.code !== 0) throw Error("Could not store Windows protected credential");
    }
  };
  if (platform === "linux") return {
    async get(id) {
      const r = await execute("secret-tool", ["lookup", "service", service, "account", id]);
      if (r.code === 1 && !r.output) return "";
      if (r.code !== 0) throw Error("Could not read Secret Service credential");
      return r.output.replace(/\r?\n$/, "");
    },
    async set(id, value) {
      const r = value ? await execute("secret-tool", ["store", "--label=Qiaomu Audio for DeepSeek Harness", "service", service, "account", id], value) : await execute("secret-tool", ["clear", "service", service, "account", id]);
      if (r.code !== 0 && !(r.code === 1 && !value)) throw Error("Could not store Secret Service credential");
    }
  };
  throw Error("System credential storage is unavailable on this platform");
}

// src/credential-store.js
import { spawn as spawn2 } from "node:child_process";
var SERVICE = "ai.qiaomu.audio.dsh";
var validId = (id) => typeof id === "string" && /^qiaomu-audio-dsh-(tts|asr)-[a-z0-9-]{1,100}$/.test(id);
function run(args, input = "") {
  return new Promise((resolve, reject) => {
    const child = spawn2("/usr/bin/security", args, { stdio: ["pipe", "pipe", "pipe"] });
    let output = "";
    const timer = setTimeout(() => {
      child.kill();
      reject(Error("Keychain operation timed out"));
    }, 15e3);
    child.stdout.on("data", (chunk) => {
      output += chunk;
      if (output.length > 65536) child.kill();
    });
    child.stderr.resume();
    child.once("error", () => {
      clearTimeout(timer);
      reject(Error("Keychain is unavailable"));
    });
    child.once("close", (code) => {
      clearTimeout(timer);
      resolve({ code, output });
    });
    child.stdin.on("error", () => {
    });
    child.stdin.end(input);
  });
}
var CredentialStore = class {
  constructor({ platform = process.platform, execute = run, executePlatform } = {}) {
    this.platform = platform;
    this.execute = execute;
    this.backend = platform === "darwin" ? null : platformCredentials(platform, executePlatform);
    this.lane = Promise.resolve();
  }
  validate(id) {
    if (!validId(id)) throw Error("Invalid credential identifier");
  }
  async get(id) {
    this.validate(id);
    if (this.backend) return this.backend.get(id);
    const result = await this.execute(["find-generic-password", "-a", id, "-s", SERVICE, "-w"]);
    if (result.code === 44) return "";
    if (result.code !== 0) throw Error("Could not read credential from Keychain");
    const value = result.output.trim();
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(value)) throw Error("Invalid credential encoding");
    return Buffer.from(value, "base64").toString("utf8");
  }
  set(id, value) {
    this.validate(id);
    if (typeof value !== "string" || Buffer.byteLength(value) > 8192) throw Error("Invalid credential");
    const task = this.lane.then(async () => {
      if (this.backend) {
        await this.backend.set(id, value);
        if (await this.backend.get(id) !== value) throw Error("System credential storage did not retain credential");
        return;
      }
      if (!value) {
        const r = await this.execute(["delete-generic-password", "-a", id, "-s", SERVICE]);
        if (r.code !== 0 && r.code !== 44) throw Error("Could not remove credential");
        return;
      }
      const encoded = Buffer.from(value, "utf8").toString("base64");
      await this.execute(["-i"], `add-generic-password -U -a ${id} -s ${SERVICE} -w ${encoded}
`);
      if (await this.get(id) !== value) throw Error("Keychain did not retain credential");
    });
    this.lane = task.catch(() => {
    });
    return task;
  }
};

// src/audio-host.js
async function boundedRequest(request, { signal, fetcher = fetch, limit = 32 * 1024 * 1024 } = {}) {
  const url = new URL(request.url);
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) throw Error("Invalid service URL");
  const signals = [AbortSignal.timeout(9e4)];
  if (signal) signals.push(signal);
  const response = await fetcher(url, { method: request.method || "GET", headers: { ...request.headers, ...request.contentType ? { "Content-Type": request.contentType } : {} }, body: request.body, redirect: "error", signal: AbortSignal.any(signals) });
  if (Number(response.headers.get("content-length") || 0) > limit) {
    await response.body?.cancel();
    throw Error("Service response exceeds size limit");
  }
  const chunks = [];
  let size = 0;
  const reader = response.body?.getReader();
  if (reader) try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > limit) {
        await reader.cancel();
        throw Error("Service response exceeds size limit");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = Buffer.concat(chunks, size), text = bytes.toString("utf8");
  let json;
  try {
    json = JSON.parse(text);
  } catch {
  }
  return { status: response.status, headers: Object.fromEntries(response.headers), text, json, arrayBuffer: bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) };
}
function validateText(text) {
  if (typeof text !== "string" || !text.trim() || text.length > 2e4) throw Error("Speech text must contain 1\u201320000 characters");
}
function decodeAudio(value) {
  if (typeof value !== "string" || value.length > 48 * 1024 * 1024 || !/^[A-Za-z0-9+/]*={0,2}$/.test(value)) throw Error("Invalid audio data");
  return new Uint8Array(Buffer.from(value, "base64"));
}
var packed = (result) => ({ ...result, bytes: void 0, base64: Buffer.from(result.bytes).toString("base64") });
var idPattern = /^[a-z0-9-]{1,80}$/;
var AudioHost = class {
  constructor({ credentials = new CredentialStore(), localOptions } = {}) {
    this.credentials = credentials;
    this.localOptions = localOptions;
    this.jobs = /* @__PURE__ */ new Map();
    this.edge = new EdgeSpeechClient(synthesizeEdge);
    this.revision = 0;
    this.waiters = /* @__PURE__ */ new Set();
  }
  localManager() {
    if (!this.manager) {
      this.manager = createLocalTtsManager(this.localOptions);
      this.unsubscribe = this.manager.subscribe(() => {
        this.revision++;
        for (const wake of this.waiters) wake();
      });
    }
    return this.manager;
  }
  async localChanges({ revision }) {
    this.localManager();
    if (revision === this.revision) await new Promise((resolve) => {
      const done = () => {
        clearTimeout(timer);
        this.waiters.delete(done);
        resolve();
      };
      const timer = setTimeout(done, 25e3);
      this.waiters.add(done);
    });
    return { revision: this.revision, states: Object.fromEntries([...LOCAL_MODELS, ...ASR_MODELS].map((m) => [m.id, this.manager.snapshot(m.id)])) };
  }
  async profile(input) {
    if (!input || !TTS_PROVIDERS[input.id]) throw Error("Unknown speech service");
    const base = ttsProfile({ profiles: { [input.id]: input } }, input.id);
    return { ...base, key: ["system", "macos", "edge", "localModel"].includes(input.id) ? "" : typeof input.key === "string" ? input.key : await this.credentials.get(`qiaomu-audio-dsh-tts-${input.id}`) };
  }
  async withJob(id, run2) {
    if (!idPattern.test(id || "") || this.jobs.has(id)) throw Error("Invalid or active operation");
    const abort = new AbortController();
    this.jobs.set(id, abort);
    try {
      return await run2(abort.signal);
    } finally {
      this.jobs.delete(id);
    }
  }
  cancel({ id }) {
    this.jobs.get(id)?.abort();
    return { cancelled: true };
  }
  async speech({ id, text, profile }) {
    validateText(text);
    return this.withJob(id, async (signal) => {
      const p = await this.profile(profile);
      let result;
      if (p.id === "macos") result = await synthesizeMacSpeech(text, p.voice, { signal });
      else if (p.id === "edge") result = await this.edge.synthesize(text, p.voice, { signal });
      else if (p.id === "localModel") result = await this.localManager().synthesize(p, text, signal);
      else if (p.id === "system") throw Error("System speech is played by the client");
      else result = await synthesizeHttp(p, text, { key: p.key, signal, request: (r) => boundedRequest(r, { signal }) });
      return packed(result);
    });
  }
  async voices({ id, profile, chinese = true }) {
    return this.withJob(id, async (signal) => {
      const p = await this.profile(profile);
      if (p.id === "macos") return { voices: macVoiceChoices(await macSpeechVoices(signal), (key) => ({ voicePremium: chinese ? "\u4F18\u8D28" : "Premium", voiceEnhanced: chinese ? "\u589E\u5F3A" : "Enhanced", recommended: chinese ? "\u63A8\u8350" : "Recommended", voiceDisplayName: chinese ? "\u663E\u793A\u540D\u79F0" : "Display name" })[key] || key, chinese) };
      return loadVoiceCatalog(p, { key: p.key, signal, request: (r) => boundedRequest(r, { signal }) });
    });
  }
  async transcribe({ id, profile, base64, language = "auto", local = false }) {
    const wav = decodeAudio(base64);
    return this.withJob(id, async (signal) => {
      if (local) return { text: await this.localManager().transcribe("sensevoice", wav, signal) };
      if (!profile || !idPattern.test(profile.id || "")) throw Error("Invalid transcription profile");
      const cfg = cloudConfig(profile);
      const key = typeof profile.key === "string" ? profile.key : await this.credentials.get(`qiaomu-audio-dsh-asr-${profile.id}-${profile.provider}`);
      return { text: await recognizeCloud(cfg, key, wav, { language, signal, request: (r) => boundedRequest(r, { signal }) }) };
    });
  }
  async local({ operation, model }) {
    if (![...LOCAL_MODELS, ...ASR_MODELS].some((x) => x.id === model)) throw Error("Unknown local model");
    const manager = this.localManager();
    if (operation === "status") return manager.status(model);
    if (operation === "snapshot") return manager.snapshot(model);
    if (operation === "install") {
      await manager.install(model);
      return manager.snapshot(model);
    }
    if (operation === "cancel") {
      manager.cancelInstall(model);
      return manager.snapshot(model);
    }
    throw Error("Invalid local operation");
  }
  async secrets({ operation, id, value }) {
    if (operation === "get") return { value: await this.credentials.get(id) };
    if (operation === "set") {
      await this.credentials.set(id, value);
      return { saved: true };
    }
    throw Error("Invalid credential operation");
  }
  dispose() {
    for (const job of this.jobs.values()) job.abort();
    this.unsubscribe?.();
    for (const wake of this.waiters) wake();
    this.manager?.dispose();
    this.jobs.clear();
  }
};

// src/notes.js
import {
  mkdir,
  readdir,
  readFile,
  writeFile,
  rename,
  lstat,
  unlink,
  realpath
} from "node:fs/promises";
import path from "node:path";
import { createHash, randomUUID } from "node:crypto";
var hash = (text) => createHash("sha256").update(text).digest("hex");
var NotesStore = class {
  constructor(root) {
    this.root = path.resolve(root);
    this.queue = Promise.resolve();
    this.ready = mkdir(this.root, { recursive: true, mode: 448 }).then(() => realpath(this.root)).then((root2) => {
      this.root = root2;
    });
  }
  async resolve(relative, { directory = false } = {}) {
    await this.ready;
    if (typeof relative !== "string" || relative.includes("\0") || path.isAbsolute(relative) || relative.split(/[\\/]/).some((x) => x === ".." || x.startsWith(".")))
      throw Error("Choose a relative path inside the notes folder");
    if (!directory && !relative.toLowerCase().endsWith(".md"))
      throw Error("Only Markdown notes are supported");
    const target = path.resolve(this.root, relative);
    if (target !== this.root && !target.startsWith(this.root + path.sep))
      throw Error("Invalid note path");
    let current = this.root;
    for (const part of target.slice(current.length).split(path.sep).filter(Boolean)) {
      current = path.join(current, part);
      try {
        const stat = await lstat(current);
        if (stat.isSymbolicLink())
          throw Error("Symbolic links are not followed");
      } catch (e) {
        if (e.code !== "ENOENT") throw e;
      }
    }
    return target;
  }
  async list(folder = "") {
    const dir = await this.resolve(folder, { directory: true });
    try {
      const entries2 = await readdir(dir, { withFileTypes: true });
      return {
        root: this.root,
        folder,
        entries: entries2.filter(
          (x) => !x.name.startsWith(".") && !x.isSymbolicLink() && (x.isDirectory() || x.name.toLowerCase().endsWith(".md"))
        ).slice(0, 1e3).map((x) => ({ name: x.name, directory: x.isDirectory() })).sort(
          (a, b) => Number(b.directory) - Number(a.directory) || a.name.localeCompare(b.name)
        )
      };
    } catch (e) {
      if (e.code === "ENOENT") return { root: this.root, folder, entries: [] };
      throw e;
    }
  }
  async read(relative) {
    const filename = await this.resolve(relative);
    const s = await lstat(filename);
    if (!s.isFile() || s.size > 2 * 1024 * 1024)
      throw Error("Note exceeds 2 MB or is not a file");
    const text = await readFile(filename, "utf8");
    return { path: relative, text, etag: hash(text) };
  }
  write(request) {
    const work = this.queue.catch(() => {
    }).then(async () => {
      if (!request || typeof request.text !== "string" || Buffer.byteLength(request.text) > 2 * 1024 * 1024)
        throw Error("Invalid note or note exceeds 2 MB");
      const filename = await this.resolve(request.path);
      let existing = null;
      try {
        existing = await this.read(request.path);
      } catch (e) {
        if (e.code !== "ENOENT") throw e;
      }
      if ((existing?.etag ?? null) !== (request.etag ?? null))
        throw Error(
          "The note has changed or already exists. Open it again before saving."
        );
      await mkdir(path.dirname(filename), { recursive: true, mode: 448 });
      await this.resolve(request.path);
      const temp = filename + "." + randomUUID() + ".tmp";
      try {
        await writeFile(temp, request.text, { mode: 384, flag: "wx" });
        await rename(temp, filename);
      } catch (e) {
        await unlink(temp).catch(() => {
        });
        throw e;
      }
      return {
        path: request.path,
        text: request.text,
        etag: hash(request.text)
      };
    });
    this.queue = work;
    return work;
  }
};

// src/audio-files.js
import { mkdir as mkdir2, writeFile as writeFile2, readFile as readFile2, lstat as lstat2, realpath as realpath2, readdir as readdir2 } from "node:fs/promises";
import path2 from "node:path";
import { homedir } from "node:os";
import { spawn as spawn3 } from "node:child_process";
var extensions = /\.(png|jpe?g|webp|gif|bmp|avif|mp3|mp4|m4a|wav|ogg|webm|srt)$/i;
var AudioFiles = class extends NotesStore {
  async resolveAsset(relative) {
    if (typeof relative !== "string" || !extensions.test(relative)) throw Error("Unsupported attachment");
    return this.resolve(relative, { directory: true });
  }
  async assets() {
    await this.ready;
    const result = [];
    const walk = async (folder, depth = 0) => {
      if (depth > 6 || result.length >= 1e3) return;
      for (const entry of await readdir2(path2.join(this.root, folder), { withFileTypes: true })) {
        if (entry.name.startsWith(".") || entry.isSymbolicLink()) continue;
        const relative = path2.posix.join(folder, entry.name);
        if (entry.isDirectory()) await walk(relative, depth + 1);
        else if (extensions.test(relative)) result.push({ path: relative, name: entry.name, extension: entry.name.split(".").at(-1) });
      }
    };
    await walk("");
    return result;
  }
  async assetRead(relative) {
    const full = await this.resolveAsset(relative), stat = await lstat2(full);
    if (!stat.isFile() || stat.size > 64 * 1024 * 1024) throw Error("Attachment exceeds 64 MB");
    return { base64: (await readFile2(full)).toString("base64") };
  }
  async export({ files, folder = "" }) {
    if (!Array.isArray(files) || !files.length || files.length > 20) throw Error("Invalid export");
    let dir;
    if (folder) {
      if (typeof folder !== "string" || folder.includes("\0")) throw Error("Invalid folder");
      if (folder === "~") folder = homedir();
      else if (folder.startsWith("~/")) folder = path2.join(homedir(), folder.slice(2));
      if (!path2.isAbsolute(folder)) throw Error("Choose an absolute export folder");
      dir = folder;
    } else dir = await this.resolve("attachments", { directory: true });
    await mkdir2(dir, { recursive: true, mode: 448 });
    dir = await realpath2(dir);
    const saved = [];
    for (const file of files) {
      if (typeof file.name !== "string" || path2.basename(file.name) !== file.name || /[\\/\0]/.test(file.name) || !extensions.test(file.name)) throw Error("Invalid export filename");
      if (typeof file.base64 !== "string" || file.base64.length > 256 * 1024 * 1024 || !/^[A-Za-z0-9+/]+={0,2}$/.test(file.base64)) throw Error("Invalid export data");
      const bytes = Buffer.from(file.base64, "base64");
      const ext = path2.extname(file.name), stem = path2.basename(file.name, ext);
      let name = file.name, fullPath;
      for (let n = 1; n <= 1e4; n++) {
        name = n === 1 ? file.name : `${stem} ${n}${ext}`;
        fullPath = path2.join(dir, name);
        try {
          await writeFile2(fullPath, bytes, { flag: "wx", mode: 384 });
          break;
        } catch (e) {
          if (e.code !== "EEXIST" || n === 1e4) throw e;
        }
      }
      const relative = path2.relative(this.root, fullPath);
      saved.push({ name, fullPath, ...!relative.startsWith("..") && !path2.isAbsolute(relative) ? { vaultFile: { path: relative, name, extension: ext.slice(1) } } : {} });
    }
    return saved;
  }
  async reveal(fullPath) {
    if (typeof fullPath !== "string" || !path2.isAbsolute(fullPath) || fullPath.includes("\0")) throw Error("Invalid export path");
    await lstat2(fullPath);
    const command = process.platform === "darwin" ? "/usr/bin/open" : process.platform === "win32" ? "explorer.exe" : "xdg-open";
    const args = process.platform === "darwin" ? ["-R", fullPath] : process.platform === "win32" ? [`/select,${fullPath}`] : [path2.dirname(fullPath)];
    await new Promise((resolve, reject) => {
      const child = spawn3(command, args, { stdio: "ignore" });
      child.once("error", reject);
      child.once("close", (code) => code === 0 ? resolve() : reject(Error("Could not reveal file")));
    });
    return { revealed: true };
  }
};

// src/original/core/tts/recent.js
var FIELDS = ["voice", "model", "baseUrl", "region", "resourceId"];
var MAX_RECENT = 8;
function cleanSpeechChoice(value) {
  if (!value || !Object.hasOwn(TTS_PROVIDERS, value.id)) return null;
  return { id: value.id, ...Object.fromEntries(FIELDS.filter((key) => typeof value[key] === "string" && value[key].length <= 1e3).map((key) => [key, value[key]])) };
}
function speechChoiceKey(value) {
  return JSON.stringify([value.id, ...FIELDS.map((key) => value[key] ?? TTS_PROVIDERS[value.id]?.[key] ?? "")]);
}
function normalizeRecentChoices(values) {
  const result = [], seen = /* @__PURE__ */ new Set();
  for (const value of Array.isArray(values) ? values : []) {
    const entry = cleanSpeechChoice(value);
    if (!entry) continue;
    const key = speechChoiceKey(entry);
    if (seen.has(key)) continue;
    result.push(entry);
    seen.add(key);
    if (result.length === MAX_RECENT) break;
  }
  return result;
}

// src/original/core/share/brand.js
var PLATFORMS = {
  x: { glyph: "X", color: "#111827" },
  github: { glyph: "GH", color: "#24292f" },
  wechat: { glyph: "\u516C", color: "#07c160" },
  xiaohongshu: { glyph: "\u4E66", color: "#ff2442" },
  douyin: { glyph: "\u6296", color: "#161823" },
  bilibili: { glyph: "B", color: "#00a1d6" },
  youtube: { glyph: "\u25B6", color: "#e11d48" },
  website: { glyph: "W", color: "#2563eb" },
  custom: { glyph: "#", color: "#475569" }
};
var MAX_ACCOUNTS = 6;
function cleanAccounts(value) {
  return (Array.isArray(value) ? value : []).slice(0, MAX_ACCOUNTS).filter((a) => a && typeof a === "object").map((a) => ({
    kind: PLATFORMS[a.kind] ? a.kind : "custom",
    handle: String(a.handle ?? "").slice(0, 80),
    label: String(a.label ?? "").slice(0, 20)
  }));
}

// src/original/core/share/draw.js
var FPS = 30;
var COLORS = { bgTop: "#0a0f1f", bgBottom: "#141c36", accent: "#7dd3fc", violet: "#a78bfa", pink: "#f0abfc", strong: "#fbbf24", text: "#f8fafc", terminal: "#0d1117", line: "rgba(255,255,255,0.14)" };
var clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
function rounded(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}
function circleImage(ctx, image, cx, cy, r) {
  const w = image.width || image.naturalWidth, h = image.height || image.naturalHeight, side = Math.min(w, h);
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(image, (w - side) / 2, (h - side) / 2, side, side, cx - r, cy - r, r * 2, r * 2);
  ctx.restore();
}

// src/original/core/share/styles.js
var frameOf = (scene, t, length) => clamp(Math.round(t * FPS), 0, Math.max(0, length - 1));
function levelAt(scene, t) {
  const { envelope } = scene.features;
  return envelope?.length ? envelope[frameOf(scene, t, envelope.length)] : 0;
}
function bandsAt(scene, t) {
  const { bands, spectrum } = scene.features;
  if (!bands || !spectrum) return new Float32Array(48);
  const frames = spectrum.length / bands, frame = frameOf(scene, t, frames);
  return spectrum.subarray(frame * bands, (frame + 1) * bands);
}
var STOPS = [[125, 211, 252], [167, 139, 250], [240, 171, 252]];
function ramp(k) {
  const x = clamp(k) * (STOPS.length - 1), i = Math.min(STOPS.length - 2, Math.floor(x)), f = x - i;
  return `rgb(${STOPS[i].map((v, c) => Math.round(v + (STOPS[i + 1][c] - v) * f)).join(",")})`;
}
function rampGradient(ctx, x0, x1) {
  const g = ctx.createLinearGradient(x0, 0, x1, 0);
  STOPS.forEach((_, i) => g.addColorStop(i / (STOPS.length - 1), ramp(i / (STOPS.length - 1))));
  return g;
}
function drawBars(ctx, scene, t) {
  const { envelope } = scene.features, a = scene.area, pitch = scene.portrait ? 20 : 22, bars = Math.floor(a.width / pitch), center = (bars - 1) / 2, x0 = a.cx - bars * pitch / 2;
  for (let i = 0; i < bars; i++) {
    const at = Math.round((t + (i - center) * 0.045) * FPS), level = at >= 0 && at < envelope.length ? envelope[at] : 0;
    const taper = 0.35 + 0.65 * Math.cos((i - center) / (center + 1) * Math.PI / 2), h = Math.max(8, level * a.height * taper + 8);
    ctx.fillStyle = i <= center ? COLORS.accent : "rgba(248,250,252,0.26)";
    rounded(ctx, x0 + i * pitch, a.cy - h / 2, pitch * 0.58, h, pitch * 0.29);
    ctx.fill();
  }
}
function drawWave(ctx, scene, t) {
  const { pcm, rate, peak } = scene.features, a = scene.area;
  if (!pcm) return;
  const columns = Math.floor(a.width / 5), span = 0.16, perColumn = Math.max(1, Math.round(span * rate / columns)), x0 = a.cx - columns * 5 / 2, start = t - span / 2;
  for (let i = 0; i < columns; i++) {
    const from = Math.round((start + i / columns * span) * rate);
    let low = 0, high = 0;
    for (let k = Math.max(0, from); k < Math.min(pcm.length, from + perColumn); k++) {
      const v = pcm[k];
      if (v < low) low = v;
      if (v > high) high = v;
    }
    const taper = Math.sin(Math.PI * (i + 0.5) / columns) ** 0.6, top = clamp(high / peak, 0, 1) * taper, bottom = clamp(-low / peak, 0, 1) * taper;
    const y0 = a.cy - top * a.height / 2, y1 = a.cy + bottom * a.height / 2;
    ctx.fillStyle = i < columns / 2 ? COLORS.accent : "rgba(248,250,252,0.34)";
    rounded(ctx, x0 + i * 5, y0 - 1.5, 3, Math.max(3, y1 - y0 + 3), 1.5);
    ctx.fill();
  }
  ctx.fillStyle = "rgba(248,250,252,0.16)";
  ctx.fillRect(x0, a.cy - 1, columns * 5, 2);
}
function drawSpectrum(ctx, scene, t) {
  const a = scene.area, bands = bandsAt(scene, t), pitch = a.width / bands.length, x0 = a.cx - a.width / 2;
  ctx.fillStyle = rampGradient(ctx, x0, x0 + a.width);
  for (let i = 0; i < bands.length; i++) {
    const h = Math.max(8, bands[i] * a.height * 1.05);
    rounded(ctx, x0 + i * pitch + pitch * 0.19, a.cy - h / 2, pitch * 0.62, h, pitch * 0.31);
    ctx.fill();
  }
}
function drawRing(ctx, scene, t) {
  const a = scene.area, bands = bandsAt(scene, t), level = levelAt(scene, t), r0 = scene.portrait ? 165 : 115, reach = scene.portrait ? 165 : 100, count = 72, thick = scene.portrait ? 9 : 7;
  ctx.lineCap = "round";
  ctx.lineWidth = thick;
  for (let i = 0; i < count; i++) {
    const u = (i + 0.5) / count, m = Math.abs(2 * u - 1), band = Math.round((1 - m) * (bands.length - 1)), angle = Math.PI / 2 + u * Math.PI * 2;
    const from = r0 + 14, to = from + 6 + bands[band] * reach, cos = Math.cos(angle), sin = Math.sin(angle);
    ctx.strokeStyle = ramp(1 - m);
    ctx.beginPath();
    ctx.moveTo(a.cx + cos * from, a.cy + sin * from);
    ctx.lineTo(a.cx + cos * to, a.cy + sin * to);
    ctx.stroke();
  }
  ctx.strokeStyle = `rgba(125,211,252,${0.3 + 0.4 * level})`;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(a.cx, a.cy, r0 + 4 + level * 6, 0, Math.PI * 2);
  ctx.stroke();
  const inner = r0 - 8;
  if (scene.avatar) circleImage(ctx, scene.avatar, a.cx, a.cy, inner);
  else {
    ctx.fillStyle = "#1b2440";
    ctx.beginPath();
    ctx.arc(a.cx, a.cy, inner, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = COLORS.accent;
    ctx.font = `700 ${inner}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText([...scene.byline || scene.title || "\xB7"][0], a.cx, a.cy + inner * 0.06);
  }
}
var VISUAL_STYLES = {
  spectrum: { id: "spectrum", needs: ["spectrum"], draw: drawSpectrum },
  ring: { id: "ring", needs: ["spectrum"], draw: drawRing },
  wave: { id: "wave", needs: ["pcm"], draw: drawWave },
  bars: { id: "bars", needs: [], draw: drawBars }
};
var DEFAULT_STYLE = "spectrum";
var STYLE_IDS = Object.keys(VISUAL_STYLES);

// src/original/settings.js
var RATES = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
function defaultSettings(desktop = true) {
  return {
    tts: { provider: desktop ? "edge" : "system", profiles: {}, rate: 1, welcomed: false, recent: [] },
    // engine: '' (not chosen yet), 'local' (SenseVoice on this computer) or 'cloud:<profile id>'.
    asr: { engine: "", profiles: [], language: "auto", mode: "live", keepAudio: true },
    // Last export choices plus the author's signature used on the video cover and end card.
    share: {
      format: desktop ? "mp4" : "mp3",
      videos: ["portrait"],
      visual: DEFAULT_STYLE,
      speed: 1,
      cover: true,
      outro: true,
      srt: false,
      coverImage: false,
      embed: true,
      name: "",
      avatar: "",
      background: "",
      folder: "",
      accounts: []
    }
  };
}
var SHARE_SPEEDS = { min: 0.75, max: 2, step: 0.05 };
var cleanText = (value, max) => typeof value === "string" ? value.trim().slice(0, max) : "";
function normalizeShare(raw, base, desktop) {
  const value = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {}, flag = (key) => typeof value[key] === "boolean" ? value[key] : base[key];
  const speed = Math.round(Number(value.speed) / SHARE_SPEEDS.step) * SHARE_SPEEDS.step;
  const videos = (Array.isArray(value.videos) ? value.videos : []).filter((v, i, all) => ["portrait", "landscape"].includes(v) && all.indexOf(v) === i);
  return {
    format: value.format === "mp3" || !desktop ? "mp3" : "mp4",
    videos: videos.length ? videos : base.videos,
    visual: STYLE_IDS.includes(value.visual) ? value.visual : DEFAULT_STYLE,
    speed: speed >= SHARE_SPEEDS.min && speed <= SHARE_SPEEDS.max ? Math.round(speed * 100) / 100 : 1,
    cover: flag("cover"),
    outro: flag("outro"),
    srt: flag("srt"),
    coverImage: flag("coverImage"),
    embed: flag("embed"),
    name: cleanText(value.name, 40),
    avatar: cleanText(value.avatar, 300),
    background: cleanText(value.background, 300),
    folder: desktop ? cleanText(value.folder, 500) : "",
    accounts: cleanAccounts(value.accounts)
  };
}
function normalizeSettings(raw, desktop = true) {
  const base = defaultSettings(desktop), value = raw && typeof raw === "object" ? raw : {};
  const tts = { ...base.tts, ...value.tts && typeof value.tts === "object" ? value.tts : {} };
  if (!TTS_PROVIDERS[tts.provider]) tts.provider = base.tts.provider;
  if (!tts.profiles || typeof tts.profiles !== "object" || Array.isArray(tts.profiles)) tts.profiles = {};
  tts.profiles = Object.fromEntries(Object.entries(tts.profiles).filter(([id, p]) => TTS_PROVIDERS[id] && p && typeof p === "object" && !Array.isArray(p)).map(([id, p]) => [id, Object.fromEntries(["voice", "model", "baseUrl", "region", "resourceId"].filter((key) => typeof p[key] === "string").map((key) => [key, p[key]]))]));
  tts.rate = RATES.includes(Number(tts.rate)) ? Number(tts.rate) : 1;
  tts.welcomed = tts.welcomed === true;
  tts.recent = normalizeRecentChoices(tts.recent);
  const source = value.asr && typeof value.asr === "object" ? value.asr : {};
  const taken = /* @__PURE__ */ new Set();
  const profiles = (Array.isArray(source.profiles) ? source.profiles : []).slice(0, MAX_PROFILES).map((p) => cleanProfile(p, taken)).filter(Boolean);
  let engine = typeof source.engine === "string" ? source.engine : "";
  if (engine === "local" && !desktop) engine = "";
  if (engine.startsWith("cloud:") && !profiles.some((p) => `cloud:${p.id}` === engine)) engine = profiles[0] ? `cloud:${profiles[0].id}` : "";
  if (engine && engine !== "local" && !engine.startsWith("cloud:")) engine = "";
  return {
    tts: { provider: tts.provider, profiles: tts.profiles, rate: tts.rate, welcomed: tts.welcomed, recent: tts.recent },
    share: normalizeShare(value.share, base.share, desktop),
    readingProgress: value.readingProgress && typeof value.readingProgress === "object" && !Array.isArray(value.readingProgress) ? value.readingProgress : {},
    asr: {
      engine,
      profiles,
      language: ASR_LANGUAGES.includes(source.language) ? source.language : "auto",
      mode: ["live", "batch"].includes(source.mode) ? source.mode : base.asr.mode,
      keepAudio: typeof source.keepAudio === "boolean" ? source.keepAudio : base.asr.keepAudio
    }
  };
}

// src/host.js
import { TypertRemoteService, Remote } from "@deepseek-ai/dsh-typert-protocol";
import path4 from "node:path";
import { homedir as homedir2 } from "node:os";

// src/storage.js
import { mkdir as mkdir3, readFile as readFile3, writeFile as writeFile3, rename as rename2 } from "node:fs/promises";
import path3 from "node:path";
import { randomUUID as randomUUID2 } from "node:crypto";
var StateStore = class {
  constructor(directory) {
    this.file = path3.join(directory, "state.json");
    this.queue = Promise.resolve();
  }
  async load() {
    try {
      const raw = JSON.parse(await readFile3(this.file, "utf8"));
      if (!Number.isSafeInteger(raw.revision) || raw.revision < 0 || !raw.data || typeof raw.data !== "object" || Array.isArray(raw.data))
        throw Error("Invalid saved data");
      return raw;
    } catch (e) {
      if (e.code === "ENOENT") return { revision: 0, data: {} };
      throw Error("Saved data could not be read. Original file preserved.", {
        cause: e
      });
    }
  }
  save(input) {
    const task = this.queue.catch(() => {
    }).then(async () => {
      if (!input || !Number.isSafeInteger(input.revision) || !input.data || typeof input.data !== "object" || Array.isArray(input.data))
        throw Error("Invalid state");
      const current = await this.load();
      if (input.revision !== current.revision)
        throw Error(
          "Another window saved changes. Reopen this panel before saving."
        );
      const next = { revision: current.revision + 1, data: input.data };
      const text = JSON.stringify(next);
      if (Buffer.byteLength(text) > 8 * 1024 * 1024)
        throw Error(
          "Saved project exceeds 8 MB. Export it as a file instead."
        );
      await mkdir3(path3.dirname(this.file), { recursive: true, mode: 448 });
      const temp = this.file + "." + randomUUID2() + ".tmp";
      await writeFile3(temp, text, { mode: 384 });
      await rename2(temp, this.file);
      return next;
    });
    this.queue = task;
    return task;
  }
};

// src/meta.js
var NAME = "qiaomu-audio-dsh";
var SERVICE2 = "qiaomuAudio";

// src/host.js
var Config = {
  "~standard": {
    version: 1,
    vendor: NAME,
    validate(value) {
      if (value == null) return { value: {} };
      if (typeof value !== "object" || Array.isArray(value) || value.notesDir !== void 0 && (typeof value.notesDir !== "string" || !path4.isAbsolute(value.notesDir)) || Object.keys(value).some((k) => !["dataDir", "notesDir"].includes(k)) || value.dataDir !== void 0 && (typeof value.dataDir !== "string" || !path4.isAbsolute(value.dataDir)))
        return {
          issues: [{ message: "dataDir must be an absolute directory" }]
        };
      return { value };
    }
  }
};
var PluginService = class extends TypertRemoteService {
  constructor(ctx, config = {}) {
    super(ctx, SERVICE2);
    this.audioHost = new AudioHost();
    ctx.effect(() => () => this.audioHost.dispose());
    this.store = new StateStore(
      config.dataDir || path4.join(
        process.env.DSH_HOME || path4.join(homedir2(), ".dsh"),
        "qiaomu",
        NAME
      )
    );
    this.files = new AudioFiles(config.notesDir || path4.join(path4.dirname(this.store.file), "notes"));
  }
  info() {
    return { platform: process.platform };
  }
  async operation(request) {
    try {
      const allowed = ["speech", "voices", "transcribe", "cancel", "local", "localChanges", "secrets"];
      if (!request || !allowed.includes(request.method)) throw Error("Invalid operation");
      return { value: await this.audioHost[request.method](request.input) };
    } catch (e) {
      return { failure: { message: e.code || "Audio operation failed", code: e.code, name: e.name, status: e.status, retryAt: e.retryAt } };
    }
  }
  notesList(request) {
    return this.files.list(request?.folder || "");
  }
  notesRead(request) {
    return this.files.read(request.path);
  }
  notesWrite(request) {
    return this.files.write(request);
  }
  assets() {
    return this.files.assets();
  }
  assetRead(request) {
    return this.files.assetRead(request.path);
  }
  exportFiles(request) {
    return this.files.export(request);
  }
  reveal(request) {
    return this.files.reveal(request.path);
  }
  load() {
    return this.store.load();
  }
  save(request) {
    return this.store.save({ ...request, data: { document: request.data.document, settings: normalizeSettings(request.data.settings) } });
  }
};
for (const name of ["load", "save", "info", "operation", "notesList", "notesRead", "notesWrite", "assets", "assetRead", "exportFiles", "reveal"])
  Remote(name)(PluginService.prototype[name], {
    name,
    private: false,
    static: false,
    addInitializer(fn) {
      fn.call(Object.create(PluginService.prototype));
    }
  });
export {
  Config,
  PluginService as default
};
