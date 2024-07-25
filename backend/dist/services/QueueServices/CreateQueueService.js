'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b5e + 0x2540 + 0x1ae * -0x26);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xce)) / (-0x2 * 0x1079 + 0x2391 + -0x5 * 0x86) * (-parseInt(m(0xd9)) / (0xb77 * 0x2 + 0x192f + -0x301b)) + -parseInt(n(0xdb)) / (0x26 * -0xd1 + -0x31c * 0x2 + 0x2541) + -parseInt(m(0xdc)) / (-0x9 * 0x18d + 0x199 + 0xc60) + parseInt(m(0xd7)) / (-0x5be * 0x6 + -0x3 * -0x896 + -0x17 * -0x61) + parseInt(m(0xcd)) / (0xbf9 * -0x1 + 0xcc9 + -0x1 * 0xca) * (parseInt(n(0xdf)) / (0x536 + 0x4eb + 0x6 * -0x1af)) + parseInt(n(0xd5)) / (0x1f67 + -0x1 * 0xe85 + -0x10da) * (parseInt(n(0xca)) / (0x1 * 0xc7 + 0x5 * -0x7be + 0x25f8)) + parseInt(m(0xda)) / (-0x17c8 + 0x207 * -0x6 + 0x8ff * 0x4) * (-parseInt(n(0xcc)) / (0x5a7 + -0xaa8 + 0x50c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x27 * 0x805 + 0x9ef5 * -0x7 + 0x89191 * 0x1));
function a() {
    const t = [
        'isActive',
        'defineProp',
        'from_ia',
        '117wFUoWE',
        'erty',
        '11oYGeGz',
        '568338DiCiLh',
        '1EHIqFR',
        'ls/Queue',
        '../../mode',
        '__esModule',
        'queue',
        'fault',
        'value',
        '36856NoEsdi',
        '__importDe',
        '384825LEKyKa',
        'userId',
        '569298eeGemT',
        '2088950VBGlJd',
        '508749HLqEmx',
        '143352bIcASO',
        'default',
        'create',
        '14mWDjHA',
        'tenantId',
        'color'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0xd6) + p(0xd3)] || function (c) {
    const q = o;
    return c && c[q(0xd1)] ? c : { 'default': c };
};
const k = {};
k[p(0xd4)] = !![], Object[o(0xe3) + p(0xcb)](exports, p(0xd1), k);
const Queue_1 = __importDefault(require(o(0xd0) + p(0xcf))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        from_ia: g,
        color: h,
        tenantId: i
    }) => {
        const r = p, s = p, j = {};
        j[r(0xd2)] = d, j[r(0xe2)] = e, j[s(0xd8)] = f, j[r(0xe4)] = g, j[s(0xe1)] = h, j[s(0xe0)] = i;
        const l = await Queue_1[r(0xdd)][r(0xde)](j);
        return l;
    };
exports[p(0xdd)] = CreateQueueService;