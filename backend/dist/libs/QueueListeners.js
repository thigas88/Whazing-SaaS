'use strict';
const a7 = b, a8 = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x438 + 0x241d + 0x267d * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const a5 = b, a6 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a5(0x1ea)) / (0x1a8a + 0xae7 * 0x3 + -0x1 * 0x3b3e) * (parseInt(a5(0x22f)) / (-0x722 + -0x646 * 0x1 + 0xd6a)) + parseInt(a6(0x20e)) / (-0xdc3 + 0x20f4 + -0x132e * 0x1) + -parseInt(a5(0x1ee)) / (0x19ea * 0x1 + 0x247d * -0x1 + -0x1 * -0xa97) + -parseInt(a6(0x222)) / (0x1bad + -0x1a48 + 0x2c * -0x8) + -parseInt(a5(0x1f9)) / (0xef * -0xb + 0x38f + 0x1 * 0x6bc) * (-parseInt(a5(0x1e2)) / (-0xe95 + 0x921 + 0x1 * 0x57b)) + -parseInt(a5(0x209)) / (0x37 * -0x59 + -0xe95 + 0x10de * 0x2) + -parseInt(a5(0x1e1)) / (-0x625 * 0x4 + 0x1e * 0x97 + -0x1 * -0x6eb) * (-parseInt(a5(0x22a)) / (0x132d + -0x775 + -0x2e * 0x41));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x34988 + -0x1 * 0x8faf9 + -0x116 * -0xf7d));
var __importDefault = this && this[a7(0x1f8) + a7(0x229)] || function (c) {
    const a9 = a7;
    return c && c[a9(0x207)] ? c : { 'default': c };
};
const a4 = {};
a4[a8(0x205)] = !![], Object[a8(0x1fa) + a7(0x1f3)](exports, a7(0x207), a4), exports[a8(0x21b) + a8(0x1d9)] = void (-0x5 * 0x2c1 + 0xc0 * 0x14 + 0x69 * -0x3);
const axios_1 = __importDefault(require(a8(0x213)));
var ExecutionType;
(function (d) {
    const aa = a7, ab = a7, e = {};
    e[aa(0x237)] = ab(0x236), e[aa(0x21c)] = ab(0x234), e[ab(0x238)] = ab(0x1e5), e[ab(0x1e9)] = ab(0x232);
    const f = e;
    d[f[aa(0x237)]] = f[ab(0x21c)], d[f[aa(0x238)]] = f[ab(0x1e9)];
}(ExecutionType = exports[a8(0x21b) + a7(0x1d9)] || (exports[a7(0x21b) + a8(0x1d9)] = {})));
class QueueListener {
    static [a7(0x200)](c) {
    }
    static [a7(0x1d8)](c) {
    }
    static [a8(0x1ed)](c, d) {
    }
    static [a8(0x223)](c) {
    }
    static [a8(0x1fe) + 'd'](c, d) {
    }
    static [a8(0x1e7)](e, f) {
        const ac = a8, ad = a7, g = {};
        g[ac(0x225)] = function (i, j) {
            return i === j;
        }, g[ac(0x215)] = function (i, j) {
            return i !== j;
        }, g[ac(0x1f4)] = ad(0x22d), g[ad(0x1f6)] = ac(0x20f), g[ac(0x212)] = ad(0x21a), g[ac(0x1fc)] = ac(0x201), g[ac(0x204)] = ad(0x1e6);
        const h = g;
        console[ac(0x228)](ad(0x202) + 'D\x20' + e['id'] + (ad(0x1dc) + ad(0x211) + ad(0x1fb)) + e[ac(0x214) + 'de'] + (ac(0x230) + ad(0x1dd)) + e[ad(0x208)][ad(0x227)], f);
        if (e[ad(0x208)][ac(0x227)] && h[ad(0x225)](e[ad(0x214) + 'de'], e[ad(0x208)][ad(0x227)])) {
            if (h[ad(0x215)](h[ac(0x1f4)], h[ac(0x1f6)])) {
                const i = e[ad(0x1ff)];
                if (i[ac(0x226) + 'ns']?.[ad(0x1f7) + 'l']) {
                    if (h[ad(0x225)](h[ac(0x212)], h[ad(0x1fc)])) {
                        const r = { ...h };
                        r['id'] = i['id'], r[ad(0x218)] = j;
                        const s = r;
                        return k[ac(0x1e3)][ad(0x1df)](l[ac(0x226) + 'ns'][ac(0x1f7) + 'l'], s);
                    } else {
                        const r = { ...i };
                        r['id'] = e['id'], r[ad(0x218)] = f;
                        const s = r;
                        return axios_1[ad(0x1e3)][ac(0x1df)](i[ac(0x226) + 'ns'][ac(0x1f7) + 'l'], s);
                    }
                }
                const {
                        id: j,
                        data: k,
                        name: l,
                        opts: m,
                        timestamp: n
                    } = e, o = ac(0x220) + j + ad(0x1e0) + e[ad(0x214) + 'de'] + ad(0x1f0), p = ad(0x21d) + ad(0x233) + ad(0x1ec) + ac(0x1f1) + ac(0x1db) + ad(0x20d) + ac(0x233) + ac(0x1da) + ac(0x233) + ac(0x233) + ad(0x210) + ad(0x1fd) + j + (ad(0x235) + ac(0x233) + ad(0x233) + ad(0x224) + ac(0x22b)) + l + (ac(0x235) + ad(0x233) + ad(0x233) + ad(0x22c) + ad(0x1de)) + n + (ac(0x231) + ac(0x233) + ac(0x221) + ad(0x1e4) + ad(0x203) + ac(0x20a) + ac(0x233) + ac(0x21f) + ad(0x1ef)) + JSON[ac(0x1f5)](k) + (ac(0x206) + ad(0x219) + ac(0x233) + ac(0x233) + ac(0x1e8) + ac(0x20b) + ac(0x22e) + ad(0x233) + ad(0x233) + ac(0x217)) + JSON[ad(0x1f5)](m) + (ac(0x206) + ad(0x219) + ac(0x233) + ad(0x216) + ad(0x21e) + ad(0x1eb));
                console[ad(0x218)](h[ad(0x204)], o, p);
            } else {
                const u = {};
                return u[ad(0x1e3)] = j, g && h[ac(0x207)] ? i : u;
            }
        }
    }
    static [a8(0x20c)](c, d) {
    }
    static [a8(0x1f2)](c) {
    }
}
function a() {
    const ae = [
        '\x20</code>\x20<',
        '__esModule',
        'opts',
        '2317696CiAJNs',
        '/p>\x0a\x20\x20\x20\x20\x20\x20',
        'JobOptions',
        'onClean',
        'h1>\x0a\x20\x20\x20\x20\x20\x20',
        '78234LRJGJE',
        'tUPmG',
        '\x20\x20\x20\x20<p>\x20Jo',
        'ttempts\x20ma',
        'zPGjm',
        'axios',
        'attemptsMa',
        'eebLv',
        '\x20\x20\x20\x20\x20\x20</di',
        '\x20\x20<code>\x20',
        'error',
        '/div>\x0a\x20\x20\x20\x20',
        'aKeZt',
        'ExecutionT',
        'UokQd',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'v>\x0a\x20\x20\x20\x20\x20\x20\x20',
        '\x20\x20\x20\x20\x20\x20\x20\x20<c',
        'Job\x20-\x20',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20<',
        '2881310YJyvHG',
        'onStalled',
        '<p>\x20Job\x20Na',
        'BJQWD',
        'retryOptio',
        'attempts',
        'log',
        'fault',
        '6744130fJRGFw',
        'me:\x20',
        '<p>\x20Timest',
        'PsBCU',
        '\x20:\x20</p>\x0a\x20\x20',
        '195686wNlnwT',
        '.\x20Max\x20atte',
        '\x20</p\x0a\x20\x20\x20\x20\x20',
        'repeat',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'delay',
        '\x20</p>\x0a\x20\x20\x20\x20',
        'DELAY',
        'QQKQI',
        'BfpBj',
        'onWaiting',
        'ype',
        '\x20\x20\x20\x20<div>\x0a',
        'eatedly\x20</',
        '\x20failed.\x20A',
        'mpts\x20',
        'amp:\x20',
        'post',
        '\x20failed\x20',
        '9gDrMEp',
        '763lnRJRb',
        'default',
        'div>\x20<p>\x20J',
        'REPEAT',
        'On\x20Failed',
        'onFailed',
        '<div>\x20<p>\x20',
        'Cumxc',
        '5ATTSaj',
        '\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x20<h1>\x20Job\x20',
        'onActive',
        '660676CwlhoS',
        'ode>\x20',
        '\x20times',
        'Failed\x20Rep',
        'onRemoved',
        'erty',
        'HaNiL',
        'stringify',
        'dgCfw',
        'fallbackUr',
        '__importDe',
        '7692FfyhZY',
        'defineProp',
        'de\x20',
        'NSXlD',
        'b\x20ID\x20:\x20',
        'onComplete',
        'data',
        'onError',
        'VKeWU',
        'Job\x20with\x20I',
        'obData\x20:\x20<',
        'AqgKh',
        'value'
    ];
    a = function () {
        return ae;
    };
    return a();
}
exports[a8(0x1e3)] = QueueListener;