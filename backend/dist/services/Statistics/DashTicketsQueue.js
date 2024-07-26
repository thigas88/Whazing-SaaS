'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x19d)) / (0xf8d * 0x1 + -0x7 * -0x12f + -0x17d5) + -parseInt(s(0x1cc)) / (-0x78 * -0x1e + 0x831 + -0x163f) * (-parseInt(t(0x1c8)) / (0x73 * -0x44 + 0x1f * 0x10a + 0x1 * -0x1a7)) + parseInt(t(0x1aa)) / (0x30 + -0xf39 + -0x1 * -0xf0d) * (-parseInt(t(0x1b8)) / (0x16ca + -0x2504 + -0xe3f * -0x1)) + -parseInt(t(0x1ce)) / (-0x28d * -0x5 + -0x6ac + -0x60f) + -parseInt(t(0x18c)) / (-0x823 * 0x1 + -0x121d + -0x7 * -0x3c1) + -parseInt(s(0x192)) / (-0x180f + 0x9e3 * 0x3 + 0x592 * -0x1) + -parseInt(s(0x187)) / (-0x37 * -0x5f + 0x5c * 0x6b + -0x3ad4) * (-parseInt(t(0x1af)) / (0x237d + 0x1 * -0x155c + -0xe17));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x29fb3 + -0x506d * -0xc + 0x6073c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x12db + 0x152f * -0x1 + -0x1 * -0x298c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0x1cd) + u(0x1ca)] || function (c) {
    const w = u;
    return c && c[w(0x191)] ? c : { 'default': c };
};
const k = {};
k[u(0x1bc)] = !![], Object[u(0x1b3) + u(0x183)](exports, u(0x191), k);
const sequelize_1 = require(v(0x1a1)), database_1 = __importDefault(require(v(0x19c) + u(0x1c9))), query = u(0x1d4) + v(0x1a7) + v(0x1bb) + u(0x1be) + u(0x1a3) + v(0x1a4) + v(0x197) + v(0x1d2) + v(0x185) + u(0x1c6) + v(0x199) + v(0x1c2) + v(0x1b1) + v(0x1ae) + u(0x196) + v(0x18e) + u(0x1b6) + v(0x1cf) + u(0x1c0) + u(0x1ba) + u(0x1c7) + u(0x1d0) + u(0x1ac) + v(0x188) + u(0x1c3) + v(0x198) + u(0x1b7) + v(0x19e) + u(0x1a0) + u(0x182) + u(0x195) + v(0x186) + v(0x18d) + u(0x1d1) + v(0x1b2) + u(0x184) + v(0x1c7) + u(0x1b0) + u(0x193) + v(0x1c4) + u(0x1bf), queryAdmin = v(0x1d4) + u(0x1a7) + v(0x1bb) + u(0x1be) + v(0x1a3) + u(0x1a4) + v(0x197) + v(0x1d2) + u(0x185) + v(0x1c6) + u(0x199) + u(0x1c2) + u(0x1b1) + u(0x1ae) + v(0x196) + u(0x18e) + u(0x1b6) + v(0x1cf) + v(0x1c0) + u(0x1ba) + v(0x1c7) + v(0x1d0) + v(0x1ac) + v(0x188) + u(0x1c3) + u(0x1a5) + u(0x1cb) + u(0x18f) + u(0x1d6) + u(0x1b9) + v(0x189) + v(0x194) + v(0x1a9) + u(0x19a) + u(0x1b5) + v(0x19b) + v(0x1b4) + u(0x18a), DashTicketsQueue = async ({
        startDate: f,
        endDate: g,
        tenantId: h,
        userId: i,
        userProfile: j
    }) => {
        const x = v, y = u, l = {};
        l[x(0x1d5)] = function (q, r) {
            return q == r;
        }, l[x(0x18b)] = y(0x1d3);
        const m = l, n = {};
        n[x(0x1ab)] = h, n[x(0x1c1)] = f, n[y(0x1ad)] = g, n[x(0x1a2)] = i;
        const o = {};
        o[y(0x1bd) + 'ts'] = n, o[y(0x1a6)] = sequelize_1[x(0x190)][y(0x1a8)];
        const p = await database_1[y(0x19f)][x(0x1c5)](m[x(0x1d5)](j, m[x(0x18b)]) ? queryAdmin : query, o);
        return p;
    };
exports[u(0x19f)] = DashTicketsQueue;
function a() {
    const z = [
        '\x20\x20where\x20t.',
        'endDate',
        'abel,\x0a\x20\x20co',
        '1230dtGyaD',
        '\x22,\x20q.queue',
        'ado\x27)\x20as\x20l',
        ':endDate\x0a\x20',
        'defineProp',
        'a\x0a\x20\x20order\x20',
        'eueId\x22,\x20q.',
        '\x20\x22Tickets\x22',
        'userId\x22\x20=\x20',
        '188535UchEXz',
        ')\x20between\x20',
        'es\x22\x20q\x20on\x20(',
        ',\x20\x20ROUND(1',
        'value',
        'replacemen',
        '00.0*(qtd/',
        'Desc\x0a',
        'join\x20\x22Queu',
        'startDate',
        'Não\x20inform',
        '\x20=\x20:tenant',
        'rder\x20by\x202\x20',
        'query',
        '\x20coalesce(',
        't.\x22queueId',
        '39NdSAWN',
        'base',
        'fault',
        'ate_trunc(',
        '122702UAGOHN',
        '__importDe',
        '4415970UVqUtE',
        '\x20t\x0a\x20\x20left\x20',
        '\x22\x20=\x20q.id)\x0a',
        'tDate\x20and\x20',
        'al\x20from\x20(\x0a',
        'admin',
        '\x0a\x20\x20select\x20',
        'ITxzx',
        'createdAt\x22',
        'runc(\x27day\x27',
        'erty',
        '\x20group\x20by\x20',
        '\x20\x20select\x0a\x20',
        'edAt\x22)\x20bet',
        '205605dWjvgE',
        '\x22tenantId\x22',
        ':startDate',
        'by\x202\x20Desc\x0a',
        'sepZS',
        '4902261Phdqpo',
        'ween\x20:star',
        'qtd\x0a\x20\x20from',
        '\x27day\x27,\x20t.\x22',
        'QueryTypes',
        '__esModule',
        '7496520AKBCRD',
        '\x0a\x20\x20)\x20a\x0a\x20\x20o',
        '\x20and\x20:endD',
        ',\x20t.\x22creat',
        'unt(1)\x20as\x20',
        ')\x20pertentu',
        'Id\x20AND\x20t.\x22',
        'q.queue,\x20\x27',
        'p\x20by\x20t.\x22qu',
        'queue\x0a\x20\x20)\x20',
        '../../data',
        '27913Oebusa',
        ':userId\x0a\x20\x20',
        'default',
        'and\x20date_t',
        'sequelize',
        'userId',
        'sum(qtd)\x20o',
        'ver\x20()),\x202',
        'Id\x0a\x20\x20and\x20d',
        'type',
        'label,\x20qtd',
        'SELECT',
        'ate\x0a\x20\x20grou',
        '84KgGEmv',
        'tenantId'
    ];
    a = function () {
        return z;
    };
    return a();
}