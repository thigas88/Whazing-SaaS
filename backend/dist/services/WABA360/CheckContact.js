'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x159)) / (-0x1559 + -0x1 * 0x10f6 + -0x2650 * -0x1) * (parseInt(o(0x166)) / (0x2595 + -0x2 * 0x508 + 0x1b83 * -0x1)) + parseInt(o(0x161)) / (0x1306 + 0x1 * -0xe6e + -0x495) + -parseInt(n(0x15a)) / (-0x19ec + -0x2225 + 0x3c15) + parseInt(n(0x167)) / (0x1 * -0x1f57 + 0x10e3 + 0xe79) + -parseInt(o(0x14f)) / (0xae0 + 0x22 * -0x97 + 0x934) + -parseInt(o(0x14c)) / (-0x3 * -0x40a + 0x20f * 0x5 + -0x1662) * (-parseInt(n(0x153)) / (0x12 * -0x1e1 + 0x13d0 + 0xe0a)) + -parseInt(o(0x162)) / (0x14 * 0xb + 0x200b + -0x259 * 0xe) * (-parseInt(o(0x156)) / (-0x20de + 0x15 * -0x95 + -0xf0b * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x33835 + -0xcbdf3 + 0x1a1de3));
var __importDefault = this && this[p(0x16d) + q(0x168)] || function (c) {
    const r = q;
    return c && c[r(0x158)] ? c : { 'default': c };
};
const k = {};
k[p(0x165)] = !![], Object[q(0x150) + p(0x148)](exports, q(0x158), k);
const axios_1 = __importDefault(require(q(0x152))), AppError_1 = __importDefault(require(p(0x154) + q(0x160) + 'r')), logger_1 = require(p(0x151) + p(0x146)), CheckContact = async ({
        contacts: e,
        apiKey: f
    }) => {
        const s = p, t = p, g = {};
        g[s(0x155)] = t(0x14d), g[s(0x16a)] = s(0x163), g[t(0x15f)] = t(0x144) + t(0x16c);
        const h = g, i = process[t(0x16e)][s(0x15d) + '0'] + (s(0x169) + 'ts');
        try {
            const j = {};
            j[t(0x145)] = h[s(0x155)], j[t(0x143)] = i, j[s(0x149)] = {}, j[t(0x15e)] = {}, j[s(0x149)][t(0x14a)] = h[t(0x16a)], j[s(0x149)][s(0x142) + 'k'] = !![], j[s(0x149)][s(0x14b)] = e, j[t(0x15e)][s(0x147) + 'EY'] = f, j[t(0x15e)][s(0x15c) + 'pe'] = h[t(0x15f)];
            const l = await (-0x8 * -0x2e3 + -0x12 * 0x17f + 0x3d6, axios_1[t(0x157)])(j);
            return l[t(0x149)];
        } catch (m) {
            logger_1[s(0x14e)][t(0x15b)](m);
            throw new AppError_1[(s(0x157))](s(0x164) + s(0x16b) + ':\x20' + m);
        }
    };
exports[q(0x157)] = CheckContact;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x192 + 0x1973 + -0x137b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        '1439698TGjXUq',
        '17080poOGyu',
        'fault',
        '/v1/contac',
        'XZkWl',
        'T_CONTACTS',
        'n/json',
        '__importDe',
        'env',
        'force_chec',
        'url',
        'applicatio',
        'method',
        's/logger',
        'D360-API-K',
        'erty',
        'data',
        'blocking',
        'contacts',
        '154fipKkW',
        'post',
        'logger',
        '593136lVyRpz',
        'defineProp',
        '../../util',
        'axios',
        '59432OwYIbe',
        '../../erro',
        'reueG',
        '126760HPkxmd',
        'default',
        '__esModule',
        '1zetdeq',
        '3550732VOhkBs',
        'error',
        'Content-Ty',
        'API_URL_36',
        'headers',
        'ExWgn',
        'rs/AppErro',
        '1625082dMrdED',
        '9CflArx',
        'wait',
        '360_NOT_GE',
        'value'
    ];
    a = function () {
        return u;
    };
    return a();
}