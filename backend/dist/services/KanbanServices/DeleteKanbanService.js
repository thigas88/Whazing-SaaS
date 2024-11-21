'use strict';
const q = b, r = b;
function a() {
    const v = [
        'BAN_FOUND',
        '27312JJpSLD',
        'tenantId',
        '7ZZfvfi',
        'where',
        '295pPoGLJ',
        '_EXISTS',
        '5131302tuWHNJ',
        'fault',
        'destroy',
        '65048qeGrYJ',
        '605syOjmK',
        'findOne',
        '1139331zuZNlO',
        '24nkCBlW',
        '../../erro',
        'XkngV',
        '__esModule',
        'ls/Kanban',
        '16zSkhyd',
        'defineProp',
        'default',
        '__importDe',
        'ERR_KANBAN',
        '795294jqjnfM',
        '106940CzmeWu',
        'value',
        '40559BXqVVq',
        'ERR_NO_KAN',
        'UVOin',
        '../../mode',
        'rs/AppErro',
        'erty'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xdf)) / (0x6cb + -0x360 + -0x36a) * (-parseInt(o(0xd7)) / (0x20da + 0x1 * 0x2ab + 0x2383 * -0x1)) + parseInt(p(0xf2)) / (-0x16 * 0x15a + -0xee * 0x1c + 0x37c7) + parseInt(p(0xef)) / (0x22 * -0x86 + -0x232b + 0x34fb) * (-parseInt(o(0xea)) / (-0x1ea5 + 0x1 * -0x15d0 + -0x8bf * -0x6)) + parseInt(p(0xec)) / (0xd3b + -0x1f * 0x29 + -0xa * 0xd3) * (parseInt(o(0xe8)) / (0x25f0 * 0x1 + 0x3 * 0x24a + -0x2cc7)) + -parseInt(p(0xd2)) / (-0xa15 + 0xb3 * -0x2 + 0x7 * 0x1a5) * (-parseInt(p(0xdc)) / (-0x26 * -0x103 + -0x5db + -0x208e)) + -parseInt(p(0xdd)) / (-0x2364 + -0x1405 + 0x3773) + -parseInt(p(0xf0)) / (-0x2c4 * -0x3 + -0xe9e + 0x65d) * (parseInt(o(0xe6)) / (-0xaf1 * 0x2 + 0x138b + 0x263));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x52b91 * -0x1 + 0x3ed5 + 0x1a6 * 0x377));
var __importDefault = this && this[q(0xda) + q(0xed)] || function (c) {
    const s = q;
    return c && c[s(0xd5)] ? c : { 'default': c };
};
const k = {};
k[q(0xde)] = !![], Object[q(0xd8) + r(0xe4)](exports, q(0xd5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11 * -0x21e + -0x1288 + 0xb8 * 0x4d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Kanban_1 = __importDefault(require(r(0xe2) + q(0xd6))), AppError_1 = __importDefault(require(q(0xd3) + r(0xe3) + 'r')), DeleteKanbanService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0xe1)] = t(0xe0) + t(0xe5), h[t(0xd4)] = u(0xdb) + u(0xeb);
        const i = h, j = {};
        j['id'] = f, j[u(0xe7)] = g;
        const l = {};
        l[t(0xe9)] = j;
        const m = await Kanban_1[u(0xd9)][t(0xf1)](l);
        if (!m)
            throw new AppError_1[(t(0xd9))](i[u(0xe1)], -0x1ba + 0x6 * 0x2d0 + 0x6 * -0x243);
        try {
            await m[u(0xee)]();
        } catch (n) {
            throw new AppError_1[(t(0xd9))](i[t(0xd4)], -0x223 * -0x10 + -0x7db + -0x18c1 * 0x1);
        }
    };
exports[r(0xd9)] = DeleteKanbanService;