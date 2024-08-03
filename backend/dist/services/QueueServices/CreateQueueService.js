'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x12b)) / (0x1517 + 0x1ad5 + -0x2feb * 0x1) + parseInt(l(0x128)) / (0x21 * 0x11c + -0x1400 + 0xaa * -0x19) + -parseInt(l(0x126)) / (-0x4e * -0x54 + -0x1d4e + 0x3b9 * 0x1) * (-parseInt(m(0x123)) / (-0xda0 + -0x1a42 * 0x1 + 0x27e6)) + parseInt(m(0x130)) / (0x150 * 0x4 + -0xb5a * -0x2 + -0x1bef * 0x1) * (-parseInt(m(0x138)) / (-0x16f * -0x2 + 0x434 + 0x1c3 * -0x4)) + -parseInt(m(0x125)) / (0x25d0 + -0x16 * 0x14 + 0x527 * -0x7) * (-parseInt(l(0x136)) / (-0x576 + -0x1648 + -0x1e * -0xed)) + -parseInt(l(0x122)) / (0x1da4 + 0x16 * -0x11e + 0x3 * -0x1ad) * (-parseInt(l(0x12d)) / (-0x1f * -0x40 + 0x715 + -0xecb)) + -parseInt(l(0x127)) / (-0x137d + -0xe00 + 0x1d * 0x128);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x121 * -0x15d + 0x1c * 0xec73 + -0x4851f * 0x3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x800 + 0x6 * -0x633 + 0x2e52);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x121) + o(0x12a)] || function (c) {
    const p = n;
    return c && c[p(0x132)] ? c : { 'default': c };
};
function a() {
    const s = [
        '429625GTtLQx',
        '1376412UkSJBI',
        '21798117lGMztb',
        '1314702Xaueox',
        'ls/Queue',
        'fault',
        '259740myAddL',
        'erty',
        '10oPDrRp',
        'defineProp',
        'isActive',
        '748610DBhDwy',
        'color',
        '__esModule',
        'default',
        'value',
        '../../mode',
        '120GySZoo',
        'create',
        '36HDxLax',
        'queue',
        'tenantId',
        '__importDe',
        '13960755uEpQKA',
        '8iVJPQb',
        'userId'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[n(0x134)] = !![], Object[n(0x12e) + o(0x12c)](exports, o(0x132), k);
const Queue_1 = __importDefault(require(o(0x135) + n(0x129))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        color: g,
        tenantId: h
    }) => {
        const q = n, r = o, i = {};
        i[q(0x139)] = d, i[r(0x12f)] = e, i[r(0x124)] = f, i[q(0x131)] = g, i[r(0x120)] = h;
        const j = await Queue_1[q(0x133)][r(0x137)](i);
        return j;
    };
exports[n(0x133)] = CreateQueueService;