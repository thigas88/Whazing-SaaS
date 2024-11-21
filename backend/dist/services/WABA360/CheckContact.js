'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d3 + -0x2587 + -0x291b * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1e5)) / (-0x4 * 0x139 + 0x116c + 0xc87 * -0x1) + parseInt(o(0x1c8)) / (0x1719 + 0x152e + -0x2c45 * 0x1) * (-parseInt(n(0x1c6)) / (0x302 * 0xa + -0x1ed6 + 0xc5 * 0x1)) + parseInt(o(0x1ec)) / (-0x1fb5 * 0x1 + 0x149f + 0xb1a) * (-parseInt(n(0x1e3)) / (0x1 * 0x3ef + 0x1 * 0x1d91 + -0x3 * 0xb29)) + -parseInt(n(0x1ca)) / (-0x5ed + 0xef4 + -0x901) + parseInt(o(0x1d2)) / (-0xc91 * -0x2 + 0x1 * 0x232f + 0x1e25 * -0x2) * (parseInt(o(0x1c4)) / (-0x173d + 0x139d + 0x48 * 0xd)) + parseInt(n(0x1e4)) / (-0x1ed2 + 0x913 + -0x22 * -0xa4) + -parseInt(n(0x1cb)) / (-0x366 + -0xc01 + -0xf71 * -0x1) * (-parseInt(n(0x1c9)) / (0xefe + 0x22ec + -0x11 * 0x2ef));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x17e3d4 + -0x1afbde + 0x123063));
var __importDefault = this && this[p(0x1ed) + p(0x1dc)] || function (c) {
    const r = q;
    return c && c[r(0x1eb)] ? c : { 'default': c };
};
const k = {};
k[p(0x1c3)] = !![], Object[q(0x1c7) + p(0x1d8)](exports, q(0x1eb), k);
function a() {
    const u = [
        '9160IprDsw',
        'post',
        '6CGxKUT',
        'defineProp',
        '1451204NCjSEW',
        '3366jICtSQ',
        '10331940AbOEWg',
        '104890pCUCBt',
        'method',
        '../../erro',
        'error',
        'Content-Ty',
        'default',
        'YsnCj',
        '2485DEtWjb',
        'blocking',
        's/logger',
        '../../util',
        'applicatio',
        'data',
        'erty',
        'headers',
        'API_URL_36',
        'HduNf',
        'fault',
        'FGvot',
        'T_CONTACTS',
        'logger',
        'contacts',
        '360_NOT_GE',
        '/v1/contac',
        '25EtQWRJ',
        '4399884ZaTvyU',
        '1558032fXYQwA',
        'force_chec',
        'wait',
        'D360-API-K',
        'axios',
        'rs/AppErro',
        '__esModule',
        '1200440KVAZPP',
        '__importDe',
        'url',
        'n/json',
        'env',
        'value'
    ];
    a = function () {
        return u;
    };
    return a();
}
const axios_1 = __importDefault(require(q(0x1e9))), AppError_1 = __importDefault(require(p(0x1cd) + q(0x1ea) + 'r')), logger_1 = require(p(0x1d5) + q(0x1d4)), CheckContact = async ({
        contacts: e,
        apiKey: f
    }) => {
        const s = p, t = q, g = {};
        g[s(0x1dd)] = t(0x1c5), g[t(0x1d1)] = t(0x1e7), g[t(0x1db)] = s(0x1d6) + t(0x1c1);
        const h = g, i = process[t(0x1c2)][s(0x1da) + '0'] + (t(0x1e2) + 'ts');
        try {
            const j = {};
            j[s(0x1cc)] = h[s(0x1dd)], j[t(0x1ee)] = i, j[t(0x1d7)] = {}, j[s(0x1d9)] = {}, j[t(0x1d7)][t(0x1d3)] = h[s(0x1d1)], j[t(0x1d7)][t(0x1e6) + 'k'] = !![], j[t(0x1d7)][s(0x1e0)] = e, j[s(0x1d9)][t(0x1e8) + 'EY'] = f, j[s(0x1d9)][t(0x1cf) + 'pe'] = h[t(0x1db)];
            const l = await (0x1ee6 + -0x1de * 0xe + 0x3 * -0x196, axios_1[s(0x1d0)])(j);
            return l[s(0x1d7)];
        } catch (m) {
            logger_1[s(0x1df)][s(0x1ce)](m);
            throw new AppError_1[(t(0x1d0))](s(0x1e1) + s(0x1de) + ':\x20' + m);
        }
    };
exports[q(0x1d0)] = CheckContact;