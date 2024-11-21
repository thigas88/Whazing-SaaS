'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x7d)) / (-0x2404 + -0x203c + -0x65 * -0xad) * (parseInt(s(0xa2)) / (0x257d + 0x1 * 0xfbf + 0x8df * -0x6)) + parseInt(t(0x70)) / (0x2e * 0x18 + 0xd5b + -0x4 * 0x46a) * (-parseInt(s(0x71)) / (0x595 + -0x95 * -0x2 + -0x6bb)) + parseInt(t(0xb0)) / (-0x18 * -0xcf + -0x23ab + 0x8 * 0x209) + -parseInt(t(0x95)) / (-0x60 * -0x38 + -0xb * -0x30f + -0x369f) * (parseInt(s(0x8e)) / (0x71f + 0xa65 + 0x1 * -0x117d)) + -parseInt(t(0xb4)) / (-0x2a1 * 0x2 + -0x11e0 + 0x172a) + parseInt(s(0xbb)) / (0x1c2d + 0x1 * 0x18e + -0x4f3 * 0x6) * (parseInt(t(0x82)) / (-0xae8 + 0x3a * 0x4b + -0x60c)) + parseInt(t(0xb2)) / (-0x8e * 0x3d + 0x5 * 0x4dd + -0x2 * -0x4c8) * (parseInt(t(0x74)) / (-0x364 * -0x1 + -0x197f + 0x1627));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x15409f + -0xde7e7 + 0x4ad01));
var __importDefault = this && this[u(0x7f) + u(0x75)] || function (c) {
    const w = u;
    return c && c[w(0xcc)] ? c : { 'default': c };
};
const k = {};
k[u(0xb8)] = !![], Object[v(0x9c) + u(0xa5)](exports, u(0xcc), k);
const sequelize_1 = require(v(0xaa)), database_1 = __importDefault(require(u(0xc7) + u(0x69))), queryAdmin = v(0xb7) + v(0xa9) + v(0x99) + u(0x90) + v(0xa4) + v(0xcf) + v(0x77) + u(0x78) + v(0x86) + v(0x83) + u(0x8c) + u(0xaf) + u(0x6a) + u(0xb7) + v(0x88) + u(0xa0) + v(0xba) + v(0x84) + u(0xa8) + v(0x6c) + u(0xc3) + v(0x8a) + v(0x7c) + v(0x89) + v(0x8d) + v(0x79) + u(0xa3) + v(0x9a) + v(0xa1) + u(0xac) + u(0x72) + u(0xa7) + v(0xca) + v(0xcb) + v(0xc5) + v(0x76) + v(0xb6) + v(0x6b) + u(0xcd) + u(0x9b) + u(0x67) + v(0x9e) + v(0x92) + v(0x7a) + v(0x9f) + u(0x6d) + u(0xb5) + v(0xce) + u(0x8b) + v(0xc0) + u(0xb3), query = u(0xb7) + u(0xa9) + u(0x99) + u(0x90) + v(0xa4) + u(0xcf) + v(0x77) + v(0x78) + u(0x86) + v(0x83) + v(0x8c) + v(0xaf) + v(0x6a) + v(0xb7) + v(0x88) + v(0xa0) + u(0xba) + u(0x84) + u(0xa8) + v(0x6c) + u(0xc3) + v(0x8a) + u(0x7c) + v(0x89) + u(0x8d) + v(0x79) + v(0xa3) + v(0x9a) + u(0xa1) + u(0xac) + u(0x94) + u(0xb1) + v(0xc8) + u(0xae) + u(0x68) + u(0xc4) + v(0x98) + u(0x7e) + v(0x93) + v(0xb9) + v(0x73) + v(0xb5) + v(0xce) + u(0x6e) + u(0xa6) + v(0x9d) + u(0xad) + v(0x6f) + v(0x7b) + u(0xbf) + v(0x85) + u(0xab) + u(0xbe) + v(0xc9), DashTicketsEvolutionByPeriod = async ({
        startDate: f,
        endDate: g,
        tenantId: h,
        userId: i,
        userProfile: j
    }) => {
        const x = v, y = v, l = {};
        l[x(0x96)] = function (q, r) {
            return q == r;
        }, l[x(0x8f)] = x(0xc1);
        const m = l, n = {};
        n[x(0x91)] = h, n[y(0xc6)] = f, n[y(0x97)] = g, n[y(0xbc)] = i;
        const o = {};
        o[x(0xc2) + 'ts'] = n, o[y(0xbd)] = sequelize_1[x(0x80)][x(0x81)];
        const p = await database_1[x(0x87)][x(0x66)](m[y(0x96)](j, m[y(0x8f)]) ? queryAdmin : query, o);
        return p;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x218 * -0x9 + -0x25d7 * 0x1 + 0x14b * 0xf);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'f,\x0a\x20\x20count',
        '\x20\x20dt_ref,\x0a',
        'sequelize',
        'dAt\x22)\x0a\x20\x20)\x20',
        'ntId\x22\x20=\x20:t',
        'nd\x20:endDat',
        'rId\x0a\x20\x20and\x20',
        '\x20pertentua',
        '3462550JgBtrs',
        'd\x20lt.\x22user',
        '10199750FMJHTv',
        'der\x20by\x201\x0a',
        '6167040lsKWGI',
        'e_trunc(\x27d',
        'ivedTransf',
        '\x0a\x20\x20select\x0a',
        'value',
        'Transfer\x27)',
        't.\x22created',
        '72ForQBS',
        'userId',
        'type',
        'a\x0a\x20\x20order\x20',
        'unc(\x27day\x27,',
        '\x20\x20)\x20a\x0a\x20\x20or',
        'admin',
        'replacemen',
        '\x0a\x20\x20from\x20\x22T',
        '\x20LIKE\x20\x27ope',
        'lt.\x22type\x22\x20',
        'startDate',
        '../../data',
        'Id\x22\x20=\x20:use',
        'by\x201\x0a',
        'ype\x22\x20LIKE\x20',
        '\x27open\x27\x20OR\x20',
        '__esModule',
        '\x20date_trun',
        'ay\x27,\x20t.\x22cr',
        ')\x20as\x20label',
        'query',
        '.\x22createdA',
        '(lt.\x22type\x22',
        'base',
        'l\x0a\x20\x20from\x20(',
        'er\x27)\x0a\x20\x20and',
        '(1)\x20as\x20qtd',
        'oup\x20by\x20dat',
        'eatedAt\x22)\x20',
        'e\x0a\x20\x20group\x20',
        '1870923jBZdTU',
        '4mmIASB',
        'enantId\x0a\x20\x20',
        '\x0a\x20\x20and\x20dat',
        '48QmYKmc',
        'fault',
        'LIKE\x20\x27rece',
        ',\x0a\x20\x20qtd\x0a\x20\x20',
        '--ROUND(10',
        'N\x20lt.\x22tick',
        'te\x20and\x20:en',
        'by\x20date_tr',
        '\x20\x20INNER\x20JO',
        '54562UKqDvo',
        'type\x22\x20LIKE',
        '__importDe',
        'QueryTypes',
        'SELECT',
        '448660AMKiLE',
        'um(qtd)\x20ov',
        'At\x22)\x20dt_re',
        '\x20t.\x22create',
        '0.0*(qtd/s',
        'default',
        '\x20\x20date_tru',
        'IN\x20\x22LogTic',
        'ickets\x22\x20t\x0a',
        'eatedAt\x22)\x0a',
        'er\x20()),\x202)',
        'kets\x22\x20lt\x20O',
        '14gJIXuP',
        'nxYQU',
        'dt_ref,\x20\x27D',
        'tenantId',
        'n\x20:startDa',
        '\x20\x27received',
        'enantId\x20an',
        '3314538UtQfet',
        'gAsay',
        'endDate',
        'n\x27\x20OR\x20lt.\x22',
        '\x20\x20to_char(',
        '\x22id\x22\x0a\x20\x20whe',
        'c(\x27day\x27,\x20t',
        'defineProp',
        'tartDate\x20a',
        't\x22)\x20betwee',
        'dDate\x0a\x20\x20gr',
        'nc(\x27day\x27,\x20',
        're\x20t.\x22tena',
        '54sMQDaW',
        'etId\x22\x20=\x20t.',
        'D/MM/YYYY\x27',
        'erty',
        'between\x20:s',
        'and\x20(lt.\x22t'
    ];
    a = function () {
        return z;
    };
    return a();
}
exports[u(0x87)] = DashTicketsEvolutionByPeriod;