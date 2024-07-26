'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x168)) / (0x3 * 0x29 + 0x888 + -0x1 * 0x902) * (-parseInt(l(0x165)) / (0x10bc + 0xa2 * 0xb + -0x17b0)) + -parseInt(m(0x18d)) / (-0x617 * -0x3 + 0x15 * -0x95 + -0x609) + parseInt(m(0x189)) / (0x163 + -0x2121 + 0x1fc2) + parseInt(m(0x191)) / (-0x1c05 + -0x4 * 0x822 + 0x1 * 0x3c92) + -parseInt(l(0x18b)) / (-0x1 * 0x1cf3 + 0x260b + -0x912) + -parseInt(m(0x182)) / (-0x15 * -0x1 + -0x366 + 0x358) + -parseInt(m(0x192)) / (0x15c2 + -0x53 + -0x1567) * (parseInt(m(0x184)) / (-0x5 * -0x6f7 + -0x1 * -0x2ef + -0x25b9 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa9 * -0x6bf + 0x5db25 + -0x3bd5a));
var __importDefault = this && this[n(0x185) + n(0x181)] || function (c) {
    const p = o;
    return c && c[p(0x183)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14fe * -0x1 + 0xfe8 * -0x1 + -0x2 * 0x1d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const s = [
        'es\x22\x20uq\x20\x0a\x20\x20',
        '\x0a\x20\x20\x20\x20and\x20q',
        'QueryTypes',
        'erty',
        'value',
        '\x22\x20=\x20:tenan',
        'defineProp',
        '\x0a\x20\x20\x20\x20selec',
        'ls/Queue',
        'sequelize',
        'fault',
        '398020QghHSz',
        '__esModule',
        '2097wwrqNI',
        '__importDe',
        '\x22UsersQueu',
        'userId',
        'default',
        '536716ahiQCq',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '183096BoLRFS',
        '\x20\x20\x20and\x20uq.',
        '1166061FMphjz',
        '\x22userId\x22\x20=',
        '../../mode',
        'replacemen',
        '2477590feoixE',
        '2368Xdpykr',
        'nest',
        '345896mEjoKv',
        '.\x22queueId\x22',
        'tenantId',
        '2GvVRRx',
        '\x20,\x20\x22Users\x22',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x20and\x20u.id\x20',
        '\x20\x20where\x20uq',
        'type',
        'SELECT',
        'query',
        '=\x20:userId\x20',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        'ues\x22\x20q\x0a\x20\x20\x20',
        '\x20from\x20\x22Que',
        'tId\x0a\x20\x20\x20\x20',
        '\x20=\x20q.id\x20\x0a\x20',
        '.\x22tenantId'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[n(0x17b)] = !![], Object[o(0x17d) + n(0x17a)](exports, o(0x183), k);
const sequelize_1 = require(o(0x180)), Queue_1 = __importDefault(require(n(0x18f) + o(0x17f))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = o, g = q(0x17e) + r(0x16a) + r(0x173) + q(0x172) + r(0x169) + r(0x171) + q(0x186) + q(0x177) + q(0x16c) + r(0x166) + q(0x175) + r(0x18c) + q(0x18e) + r(0x18a) + q(0x16b) + q(0x170) + q(0x178) + q(0x176) + r(0x17c) + q(0x174), h = {};
        h[r(0x167)] = e, h[r(0x187)] = f;
        const i = {};
        i[q(0x190) + 'ts'] = h, i[r(0x16d)] = sequelize_1[r(0x179)][r(0x16e)], i[r(0x164)] = !![];
        const j = await Queue_1[q(0x188)][r(0x180)]?.[r(0x16f)](g, i);
        return j;
    };
exports[o(0x188)] = ListUserQueueService;